// ============================================================
// 6000字 word-family quiz app  (v2 — choose Part 1 or Part 2)
//   Part 1: listen & type — TTS reads the COMPLETE sentence, student types the missing word/phrase
//   Part 2: 30 MCQ; after every 10 correct answers → 1-minute bonus game (單字快打 Word Rush)
// ============================================================

document.getElementById("group-name-label").textContent = QUIZ_CONFIG.groupName;

const GAME_SECONDS = (() => {            // ?gamesec=5 lets tests shorten the game
  const m = location.search.match(/gamesec=(\d+)/);
  return m ? parseInt(m[1], 10) : 60;
})();

// ---------------- State ----------------
const state = {
  studentName: "",
  mode: "both",            // "p1" | "p2" | "both"
  p1Index: 0,
  p1Attempt: 1,            // 1 = first try, 2 = second try (after a wrong first try)
  p1WrongWords: [],        // words the student ultimately got wrong (after retry)
  p1Order: [],             // shuffled order of vocab indices
  p2Index: 0,
  p2Order: [],
  p2Score: 0,
  p2WrongWords: [],
  p2Locked: false,
  gamesPlayed: 0,          // bonus games already played (one per 10 correct answers)
  gameScores: [],
  lookedUpWords: new Set()
};

function shuffleIndices(n) {
  const arr = Array.from({ length: n }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ---------------- TTS ----------------
function speak(text, rate) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  utter.rate = rate || 0.9;
  window.speechSynthesis.speak(utter);
}

// ---------------- Screen helpers ----------------
const SCREENS = ["screen-start", "screen-part1", "screen-transition", "screen-part2", "screen-game", "screen-results"];
function showScreen(id) {
  SCREENS.forEach(s => document.getElementById(s).classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================
// START — choose Part 1 (listen & type) or Part 2 (MCQ + games)
// ============================================================
function startQuiz(mode) {
  const nameInput = document.getElementById("student-name-input");
  const name = nameInput.value.trim();
  if (!name) {
    nameInput.focus();
    nameInput.style.borderColor = "var(--bad)";
    return;
  }
  state.studentName = name;
  state.mode = mode;
  state.p1Order = shuffleIndices(VOCAB.length);
  state.p2Order = shuffleIndices(MCQS.length);
  if (mode === "p2") {
    showScreen("screen-part2");
    renderPart2();
  } else {
    showScreen("screen-part1");
    renderPart1();
  }
}
document.getElementById("mode-p1-btn").addEventListener("click", () => startQuiz("p1"));
document.getElementById("mode-p2-btn").addEventListener("click", () => startQuiz("p2"));
document.getElementById("mode-both-btn").addEventListener("click", () => startQuiz("both"));
document.getElementById("student-name-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") { e.preventDefault(); document.getElementById("mode-p1-btn").focus(); }
});

// ============================================================
// PART 1: LISTEN & TYPE
// ============================================================
function currentVocab() {
  return VOCAB[state.p1Order[state.p1Index]];
}
function fullSentence(v) {
  return v.sentence.replace("{{BLANK}}", v.answer || v.word);
}

function renderPart1() {
  const v = currentVocab();
  const total = VOCAB.length;
  document.getElementById("p1-progress-label").textContent = `${state.p1Index + 1} / ${total}`;
  document.getElementById("p1-progress-fill").style.width = `${(state.p1Index / total) * 100}%`;

  const oneBlank = `<span class="blank-marker">      </span>`;
  const sentenceWithBlank = v.sentence.replace(
    "{{BLANK}}",
    Array.from({ length: v.nblanks || 1 }, () => oneBlank).join(" ")
  );
  document.getElementById("p1-sentence").innerHTML = wrapWordsForLookup(sentenceWithBlank);
  document.getElementById("p1-cn").textContent = v.cn;
  document.getElementById("p1-pos-tag").textContent = v.pos + ((v.nblanks || 1) > 1 ? `　${v.nblanks} words` : "");
  document.getElementById("p1-answer-input").placeholder = (v.nblanks || 1) > 1 ? `Type the ${v.nblanks}-word phrase / 輸入 ${v.nblanks} 個字` : "Type the word you hear / 輸入聽到的單字";

  const input = document.getElementById("p1-answer-input");
  input.value = "";
  input.disabled = false;
  input.focus();

  const feedback = document.getElementById("p1-feedback");
  feedback.classList.add("hidden");
  feedback.innerHTML = "";

  document.getElementById("p1-submit-btn").textContent = "送出 Check";
  document.getElementById("p1-submit-btn").dataset.mode = "check";
  document.getElementById("p1-submit-btn").disabled = false;

  // Listen & type: automatically read the COMPLETE sentence (answer included)
  setTimeout(() => speak(fullSentence(v)), 150);
}

document.getElementById("p1-tts-btn").addEventListener("click", () => speak(fullSentence(currentVocab())));
document.getElementById("p1-tts-slow-btn").addEventListener("click", () => speak(fullSentence(currentVocab()), 0.65));

function advancePart1() {
  state.p1Attempt = 1;
  state.p1Index++;
  if (state.p1Index >= VOCAB.length) {
    document.getElementById("p1-progress-fill").style.width = "100%";
    if (state.mode === "both") showScreen("screen-transition");
    else showResults();
  } else {
    renderPart1();
  }
}

function checkPart1Answer() {
  const v = currentVocab();
  const input = document.getElementById("p1-answer-input");
  const typed = input.value.trim();
  const feedback = document.getElementById("p1-feedback");

  if (typed === "") {
    feedback.className = "feedback-msg bad";
    feedback.textContent = "請先輸入答案再送出 / Please type an answer before submitting.";
    feedback.classList.remove("hidden");
    input.focus();
    return;
  }

  const norm = s => s.toLowerCase().replace(/\s+/g, " ").replace(/[.,!?]$/, "").trim();
  const target = v.answer || v.word;
  const correct = norm(typed) === norm(target);

  if (correct) {
    feedback.className = "feedback-msg good";
    feedback.textContent = "✓ 正確！Correct!";
    feedback.classList.remove("hidden");
    input.disabled = true;
    document.getElementById("p1-submit-btn").textContent = "下一個 Next";
    document.getElementById("p1-submit-btn").dataset.mode = "next";
    return;
  }

  if (state.p1Attempt === 1) {
    // First wrong try: show correct spelling, replay the sentence, let them try again (answer hidden on 2nd attempt)
    feedback.className = "feedback-msg bad";
    feedback.innerHTML = `✗ 不對 Not quite. 正確拼法 / Correct spelling: <span class="correct-spelling-hint">${target}</span><br>請再聽一次並重打（這次不會顯示答案）/ Listen again and retype — the answer will be hidden this time.`;
    feedback.classList.remove("hidden");
    state.p1Attempt = 2;
    input.value = "";
    input.focus();
    document.getElementById("p1-submit-btn").textContent = "送出 Check";
    document.getElementById("p1-submit-btn").dataset.mode = "check";
    speak(fullSentence(v));
  } else {
    feedback.className = "feedback-msg bad";
    feedback.innerHTML = `✗ 再試一次也不對。正確答案是 <strong>${target}</strong>。`;
    feedback.classList.remove("hidden");
    if (!state.p1WrongWords.includes(v.word)) state.p1WrongWords.push(v.word);
    input.disabled = true;
    document.getElementById("p1-submit-btn").textContent = "下一個 Next";
    document.getElementById("p1-submit-btn").dataset.mode = "next";
  }
}

document.getElementById("p1-submit-btn").addEventListener("click", (e) => {
  if (e.target.dataset.mode === "next") advancePart1();
  else checkPart1Answer();
});
document.getElementById("p1-answer-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") { e.preventDefault(); document.getElementById("p1-submit-btn").click(); }
});

// ============================================================
// TRANSITION -> PART 2 (only in "both" mode)
// ============================================================
document.getElementById("start-part2-btn").addEventListener("click", () => {
  showScreen("screen-part2");
  renderPart2();
});

// ============================================================
// PART 2: MCQ
// ============================================================
function currentMcq() {
  return MCQS[state.p2Order[state.p2Index]];
}

function renderPart2() {
  const item = currentMcq();
  const total = MCQS.length;
  document.getElementById("p2-progress-label").textContent = `${state.p2Index + 1} / ${total}`;
  document.getElementById("p2-progress-fill").style.width = `${(state.p2Index / total) * 100}%`;
  document.getElementById("p2-score-label").textContent = `✓ ${state.p2Score}`;
  const toGame = 10 - (state.p2Score % 10);
  document.getElementById("p2-game-hint").textContent = `再答對 ${toGame} 題就有小遊戲 🎮`;

  document.getElementById("p2-question-text").textContent = item.q;
  state.p2Locked = false;

  const optionsContainer = document.getElementById("p2-options");
  optionsContainer.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  item.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "mcq-option";
    btn.dataset.idx = idx;
    btn.innerHTML = `
      <span class="opt-letter">${letters[idx]}</span>
      <span class="opt-text">${opt}</span>
      <button type="button" class="lookup-btn" data-word="${opt}" title="Look up / 查詢">🔍</button>
    `;
    btn.addEventListener("click", (e) => {
      if (state.p2Locked) return;
      if (e.target.classList.contains("lookup-btn")) return;
      selectMcqOption(idx);
    });
    optionsContainer.appendChild(btn);
  });
  optionsContainer.querySelectorAll(".lookup-btn").forEach(btn => {
    btn.addEventListener("click", (e) => { e.stopPropagation(); showLookupPopup(e.target.dataset.word, e.target); });
  });

  document.getElementById("p2-feedback").classList.add("hidden");
  document.getElementById("p2-feedback").innerHTML = "";
  const next = document.getElementById("p2-next-btn");
  next.classList.add("hidden");
  next.textContent = "下一題 Next";
}

document.getElementById("p2-tts-btn").addEventListener("click", () => speak(currentMcq().q));

function selectMcqOption(idx) {
  state.p2Locked = true;
  const item = currentMcq();
  const buttons = document.getElementById("p2-options").querySelectorAll(".mcq-option");
  buttons.forEach((b, i) => {
    b.classList.add("locked");
    if (i === item.answer) b.classList.add("correct-reveal");
    if (i === idx && idx !== item.answer) b.classList.add("wrong-reveal");
    if (i === idx) b.classList.add("selected");
  });

  const correct = idx === item.answer;
  const letters = ["A", "B", "C", "D"];
  const correctWord = item.options[item.answer];
  if (correct) {
    state.p2Score++;
    document.getElementById("p2-score-label").textContent = `✓ ${state.p2Score}`;
  } else if (!state.p2WrongWords.includes(correctWord)) {
    state.p2WrongWords.push(correctWord);
  }

  let defListHtml = "";
  item.options.forEach((opt, i) => {
    const lk = LOOKUP[opt.toLowerCase()];
    let def = "";
    if (lk) {
      const senses = (lk.combined && lk.combined.length > 1) ? lk.combined : [lk];
      def = senses.map(s => `${s.pos} ${s.cn_def}`).join("；");
    }
    defListHtml += `<li><strong>${letters[i]}. ${opt}</strong> — ${def}</li>`;
  });

  const vocabEntry = (typeof item.vocabIndex === "number")
    ? VOCAB[item.vocabIndex]
    : VOCAB.find(v => v.word.toLowerCase() === correctWord.toLowerCase());
  let fullSentenceHtml = "";
  if (vocabEntry) {
    const filled = vocabEntry.sentence.replace("{{BLANK}}", `<strong>${vocabEntry.answer || vocabEntry.word}</strong>`);
    fullSentenceHtml = `<div class="full-sentence-block"><div>${filled}</div><div class="cn">${vocabEntry.cn}</div></div>`;
  }

  const gameEarned = correct && state.p2Score % 10 === 0 && state.gamesPlayed < Math.floor(state.p2Score / 10);
  const feedback = document.getElementById("p2-feedback");
  feedback.innerHTML = `
    <div class="verdict ${correct ? "good" : "bad"}">${correct ? "✓ 答對了！Correct!" : "✗ 答錯了 Incorrect. 正確答案 / Correct answer: " + letters[item.answer] + ". " + correctWord}</div>
    ${gameEarned ? `<div class="game-earned">🎉 已答對 ${state.p2Score} 題！解鎖 1 分鐘小遊戲 🎮</div>` : ""}
    <ul class="option-def-list">${defListHtml}</ul>
    ${fullSentenceHtml}
  `;
  feedback.classList.remove("hidden");
  const next = document.getElementById("p2-next-btn");
  next.textContent = gameEarned ? "🎮 玩小遊戲 Play the game!" : "下一題 Next";
  next.classList.remove("hidden");
}

document.getElementById("p2-next-btn").addEventListener("click", () => {
  // bonus game after every 10 correct answers
  if (state.p2Score > 0 && state.p2Score % 10 === 0 && state.gamesPlayed < Math.floor(state.p2Score / 10)) {
    openGame();
    return;
  }
  continuePart2();
});

function continuePart2() {
  state.p2Index++;
  if (state.p2Index >= MCQS.length) {
    document.getElementById("p2-progress-fill").style.width = "100%";
    showResults();
  } else {
    showScreen("screen-part2");
    renderPart2();
  }
}

// ============================================================
// BONUS GAME: 單字快打 Word Rush (60 seconds)
//   See the Chinese meaning → tap the matching English word as fast as you can.
// ============================================================
const game = { timer: null, timeLeft: 0, score: 0, combo: 0, bestCombo: 0, hits: 0, misses: 0, target: null, pool: [] };

function buildGamePool() {
  const seen = new Set();
  return VOCAB.filter(v => {
    const w = (v.answer || v.word).toLowerCase();
    if (w.includes(" ") || w.includes(",") || seen.has(w)) return false;   // single words only, no duplicates
    seen.add(w);
    return true;
  });
}

function openGame() {
  state.gamesPlayed++;
  game.pool = buildGamePool();
  document.getElementById("game-round-label").textContent = `第 ${state.gamesPlayed} 次小遊戲 · 已答對 ${state.p2Score} 題`;
  document.getElementById("game-intro").classList.remove("hidden");
  document.getElementById("game-play").classList.add("hidden");
  document.getElementById("game-over").classList.add("hidden");
  document.getElementById("game-seconds-label").textContent = GAME_SECONDS;
  showScreen("screen-game");
}

document.getElementById("game-start-btn").addEventListener("click", startGame);
document.getElementById("game-continue-btn").addEventListener("click", () => continuePart2());

function startGame() {
  game.timeLeft = GAME_SECONDS; game.score = 0; game.combo = 0; game.bestCombo = 0; game.hits = 0; game.misses = 0;
  document.getElementById("game-intro").classList.add("hidden");
  document.getElementById("game-play").classList.remove("hidden");
  updateGameHud();
  nextGameRound();
  const started = Date.now();
  clearInterval(game.timer);
  game.timer = setInterval(() => {
    game.timeLeft = Math.max(0, GAME_SECONDS - (Date.now() - started) / 1000);
    updateGameHud();
    if (game.timeLeft <= 0) endGame();
  }, 100);
}

function updateGameHud() {
  document.getElementById("game-time-fill").style.width = `${(game.timeLeft / GAME_SECONDS) * 100}%`;
  document.getElementById("game-time-label").textContent = `${Math.ceil(game.timeLeft)}s`;
  document.getElementById("game-score-label").textContent = game.score;
  document.getElementById("game-combo-label").textContent = game.combo >= 2 ? `🔥 x${game.combo}` : "";
}

function nextGameRound() {
  const pool = game.pool;
  if (pool.length < 4) { endGame(); return; }
  let target;
  do { target = pool[Math.floor(Math.random() * pool.length)]; } while (target === game.target && pool.length > 1);
  game.target = target;
  // 3 distractors: prefer the same part of speech
  const samePos = pool.filter(v => v !== target && v.pos === target.pos);
  const others = pool.filter(v => v !== target && v.pos !== target.pos);
  const picks = [];
  const take = (arr) => { while (picks.length < 3 && arr.length) picks.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]); };
  take(samePos); take(others);
  const options = [target, ...picks].sort(() => Math.random() - 0.5);

  document.getElementById("game-prompt").textContent = target.cn_def;
  document.getElementById("game-pos").textContent = target.pos;
  const box = document.getElementById("game-bubbles");
  box.innerHTML = "";
  options.forEach((v, i) => {
    const b = document.createElement("button");
    b.className = "bubble";
    b.style.animationDelay = `${i * 0.12}s`;
    b.textContent = v.answer || v.word;
    b.addEventListener("click", () => tapBubble(b, v === target));
    box.appendChild(b);
  });
}

function tapBubble(btn, isCorrect) {
  if (game.timeLeft <= 0) return;
  if (isCorrect) {
    game.hits++; game.combo++; game.bestCombo = Math.max(game.bestCombo, game.combo);
    game.score += 10 + Math.min(game.combo - 1, 5) * 2;     // combo bonus up to +10
    btn.classList.add("pop");
    speak(btn.textContent, 1.0);
    updateGameHud();
    setTimeout(nextGameRound, 180);
  } else {
    game.misses++; game.combo = 0;
    btn.classList.add("shake");
    btn.disabled = true;
    updateGameHud();
  }
}

function endGame() {
  clearInterval(game.timer);
  game.timer = null;
  state.gameScores.push(game.score);
  document.getElementById("game-play").classList.add("hidden");
  document.getElementById("game-over").classList.remove("hidden");
  const stars = game.score >= 200 ? "⭐⭐⭐" : game.score >= 120 ? "⭐⭐" : "⭐";
  document.getElementById("game-final-score").textContent = game.score;
  document.getElementById("game-final-detail").textContent = `${stars}　答對 ${game.hits} 個　最高連擊 x${game.bestCombo}`;
  document.getElementById("game-continue-btn").textContent = state.p2Index + 1 >= MCQS.length ? "看成績 See results" : "繼續答題 Continue";
}

// ---------------- Word lookup ----------------
function wrapWordsForLookup(html) {
  const parts = html.split(/(<[^>]+>)/);
  return parts.map(part => {
    if (part.startsWith("<")) return part;
    return part.replace(/[A-Za-z']+/g, (word) => `<span class="lookup-word" data-word="${word}">${word}</span>`);
  }).join("");
}

document.addEventListener("click", (e) => {
  const target = e.target.closest(".lookup-word");
  if (target) {
    showLookupPopup(target.dataset.word, target);
    state.lookedUpWords.add(target.dataset.word);
  }
  if (e.target.classList && e.target.classList.contains("lookup-btn")) state.lookedUpWords.add(e.target.dataset.word);
});

function buildPopupShell(word, anchorEl, bodyHtml) {
  const container = document.getElementById("lookup-popup-container");
  container.innerHTML = "";
  const popup = document.createElement("div");
  popup.className = "lookup-popup";
  const dictUrl = `https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(word.toLowerCase())}`;
  popup.innerHTML = `
    <div><strong>${word}</strong> <button type="button" class="popup-tts" title="Listen">🔊</button></div>
    <div style="margin-top:4px;" class="lookup-body">${bodyHtml}</div>
    <div style="margin-top:8px;"><a href="${dictUrl}" target="_blank" rel="noopener">查看更多 / Look up more →</a></div>
    <button class="lookup-close" type="button">關閉 Close</button>
  `;
  document.body.appendChild(popup);
  const rect = anchorEl.getBoundingClientRect();
  popup.style.top = `${rect.bottom + 8}px`;
  popup.style.left = `${Math.max(10, Math.min(rect.left - 100, window.innerWidth - 270))}px`;
  popup.querySelector(".lookup-close").addEventListener("click", () => popup.remove());
  popup.querySelector(".popup-tts").addEventListener("click", (e) => { e.stopPropagation(); speak(word, 0.9); });
  setTimeout(() => {
    document.addEventListener("click", function closePopup(e) {
      if (!popup.contains(e.target)) { popup.remove(); document.removeEventListener("click", closePopup); }
    });
  }, 0);
  return popup;
}

function showLookupPopup(word, anchorEl) {
  const key = word.toLowerCase().replace(/[^a-z']/g, "");
  const lk = LOOKUP[key];
  if (lk) {
    const senses = (lk.combined && lk.combined.length > 1) ? lk.combined : [lk];
    buildPopupShell(word, anchorEl, senses.map(s => `${s.pos} ${s.en_def} <br>中文: ${s.cn_def}`).join("<hr style='border-color:#555;margin:6px 0;'>"));
    return;
  }
  const eg = (typeof EXTRA_GLOSSES !== "undefined") && EXTRA_GLOSSES[key];
  if (eg) { buildPopupShell(word, anchorEl, `${eg.pos} ${eg.en_def} <br>中文: ${eg.cn_def}`); return; }
  const popup = buildPopupShell(word, anchorEl, `<span style="opacity:0.8;">查詢中... Looking up...</span>`);
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(key)}`)
    .then(res => { if (!res.ok) throw new Error("not found"); return res.json(); })
    .then(data => {
      const bodyEl = popup.querySelector(".lookup-body"); if (!bodyEl) return;
      const meaning = data[0]?.meanings?.[0];
      bodyEl.innerHTML = `${meaning?.partOfSpeech || ""} ${meaning?.definitions?.[0]?.definition || ""} <br><span style="opacity:0.75;">（此字無中文，請點下方連結查詢 / no Chinese available — use the link below）</span>`;
    })
    .catch(() => {
      const bodyEl = popup.querySelector(".lookup-body"); if (!bodyEl) return;
      bodyEl.innerHTML = `查無此字的定義，請點下方連結查詢。<br>No definition found — use the link below to look it up.`;
    });
}

// ============================================================
// RESULTS + SUBMISSION
// ============================================================
function chips(listEl, words) {
  listEl.innerHTML = "";
  if (words.length === 0) { listEl.innerHTML = `<span class="word-chip none">全部正確！All correct!</span>`; return; }
  words.forEach(w => { const c = document.createElement("span"); c.className = "word-chip"; c.textContent = w; listEl.appendChild(c); });
}

function showResults() {
  showScreen("screen-results");
  const tookP1 = state.mode !== "p2", tookP2 = state.mode !== "p1";
  const p1Correct = VOCAB.length - state.p1WrongWords.length;

  if (tookP2) {
    document.getElementById("result-score").textContent = `${state.p2Score} / ${MCQS.length}`;
    document.getElementById("result-score-label").textContent = "Part 2 選擇題得分 / MCQ Score";
  } else {
    document.getElementById("result-score").textContent = `${p1Correct} / ${VOCAB.length}`;
    document.getElementById("result-score-label").textContent = "Part 1 聽寫拼字 / Listen & Type Score";
  }
  document.getElementById("result-p1-section").classList.toggle("hidden", !tookP1);
  document.getElementById("result-p2-section").classList.toggle("hidden", !tookP2);
  document.getElementById("result-game-section").classList.toggle("hidden", state.gameScores.length === 0);
  document.getElementById("result-game-scores").textContent = state.gameScores.map((s, i) => `Game ${i + 1}: ${s} 分`).join("　");
  chips(document.getElementById("p1-wrong-list"), state.p1WrongWords);
  chips(document.getElementById("p2-wrong-list"), state.p2WrongWords);
  submitResults();
}

function submitResults() {
  const statusEl = document.getElementById("submit-status");
  statusEl.textContent = "正在送出結果... Submitting...";
  statusEl.className = "submit-status";
  const tookP1 = state.mode !== "p2", tookP2 = state.mode !== "p1";
  const p1Correct = VOCAB.length - state.p1WrongWords.length;
  const modeTag = state.mode === "p1" ? " [Part 1 only]" : state.mode === "p2" ? " [Part 2 only]" : "";
  const payload = {
    studentName: state.studentName,
    unitThemeName: QUIZ_CONFIG.groupName + modeTag,
    part1wrongSpellingWords: tookP1 ? `${p1Correct}/${VOCAB.length}${state.p1WrongWords.length ? " — " + state.p1WrongWords.join(", ") : ""}` : "(not taken)",
    part2wrongMCQWords: tookP2 ? `${state.p2Score}/${MCQS.length}${state.p2WrongWords.length ? " — " + state.p2WrongWords.join(", ") : ""}${state.gameScores.length ? " | game: " + state.gameScores.join(", ") : ""}` : "(not taken)",
    lookUpWords: Array.from(state.lookedUpWords).join(", ")
  };
  const body = new URLSearchParams();
  body.append("payload", JSON.stringify(payload));
  fetch(QUIZ_CONFIG.gasEndpoint, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() })
    .then(() => { statusEl.textContent = "✓ 結果已送出！老師會看到你的成績。Results submitted!"; statusEl.className = "submit-status success"; })
    .catch(() => { statusEl.textContent = "⚠ 送出失敗，請告訴老師。(Submission failed — please tell your teacher.)"; statusEl.className = "submit-status error"; });
}
