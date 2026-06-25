// ============================================================
// Group 17 Quiz App Logic
// ============================================================

document.getElementById("group-name-label").textContent = QUIZ_CONFIG.groupName;

// ---------------- State ----------------
const state = {
  studentName: "",
  p1Index: 0,
  p1Attempt: 1,            // 1 = first try, 2 = second try (after a wrong first try)
  p1WrongWords: [],        // words the student ultimately got wrong (after retry)
  p1Order: [],              // shuffled order of vocab indices
  p2Index: 0,
  p2Order: [],
  p2Score: 0,
  p2WrongWords: [],
  p2Locked: false
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
function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  utter.rate = 0.92;
  window.speechSynthesis.speak(utter);
}

// ---------------- Screen helpers ----------------
function showScreen(id) {
  ["screen-start", "screen-part1", "screen-transition", "screen-part2", "screen-results"]
    .forEach(s => document.getElementById(s).classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// ============================================================
// START
// ============================================================
document.getElementById("start-btn").addEventListener("click", () => {
  const name = document.getElementById("student-name-input").value.trim();
  if (!name) {
    document.getElementById("student-name-input").focus();
    document.getElementById("student-name-input").style.borderColor = "var(--bad)";
    return;
  }
  state.studentName = name;
  state.p1Order = shuffleIndices(VOCAB.length);
  state.p2Order = shuffleIndices(MCQS.length);
  showScreen("screen-part1");
  renderPart1();
});

// ============================================================
// PART 1: SPELLING
// ============================================================
function currentVocab() {
  return VOCAB[state.p1Order[state.p1Index]];
}

function renderPart1() {
  const v = currentVocab();
  const total = VOCAB.length;
  document.getElementById("p1-progress-label").textContent = `${state.p1Index + 1} / ${total}`;
  document.getElementById("p1-progress-fill").style.width = `${(state.p1Index / total) * 100}%`;

  const sentenceWithBlank = v.sentence.replace(
    "{{BLANK}}",
    `<span class="blank-marker">\u00A0\u00A0\u00A0\u00A0</span>`
  );
  document.getElementById("p1-sentence").innerHTML = wrapWordsForLookup(sentenceWithBlank);
  document.getElementById("p1-cn").textContent = v.cn;
  document.getElementById("p1-pos-tag").textContent = v.pos;

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

  // Speak the full sentence with the word filled in, so students hear correct pronunciation context
  // but only after they've had a chance to try — speak on button press instead of auto-play.
}

document.getElementById("p1-tts-btn").addEventListener("click", () => {
  const v = currentVocab();
  const spoken = v.sentence.replace("{{BLANK}}", v.word);
  speak(spoken);
});

function advancePart1() {
  state.p1Attempt = 1;
  state.p1Index++;
  if (state.p1Index >= VOCAB.length) {
    document.getElementById("p1-progress-fill").style.width = "100%";
    showScreen("screen-transition");
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

  const correct = typed.toLowerCase() === v.word.toLowerCase();

  if (correct) {
    feedback.className = "feedback-msg good";
    feedback.textContent = "✓ 正確！Correct!";
    feedback.classList.remove("hidden");
    input.disabled = true;
    document.getElementById("p1-submit-btn").textContent = "下一個 Next";
    document.getElementById("p1-submit-btn").dataset.mode = "next";
    return;
  }

  // Wrong answer
  if (state.p1Attempt === 1) {
    // First wrong try: show correct spelling, let them try again (answer disappears on 2nd attempt)
    feedback.className = "feedback-msg bad";
    feedback.innerHTML = `✗ 不對 Not quite. 正確拼法 / Correct spelling: <span class="correct-spelling-hint">${v.word}</span><br>請再試一次（這次不會顯示答案）/ Try again — the answer will be hidden this time.`;
    feedback.classList.remove("hidden");
    state.p1Attempt = 2;
    input.value = "";
    input.focus();
    document.getElementById("p1-submit-btn").textContent = "送出 Check";
    document.getElementById("p1-submit-btn").dataset.mode = "check";
  } else {
    // Second wrong try: record as wrong, move on
    feedback.className = "feedback-msg bad";
    feedback.innerHTML = `✗ 再試一次也不對。正確答案是 <strong>${v.word}</strong>。`;
    feedback.classList.remove("hidden");
    if (!state.p1WrongWords.includes(v.word)) {
      state.p1WrongWords.push(v.word);
    }
    input.disabled = true;
    document.getElementById("p1-submit-btn").textContent = "下一個 Next";
    document.getElementById("p1-submit-btn").dataset.mode = "next";
  }
}

document.getElementById("p1-submit-btn").addEventListener("click", (e) => {
  const mode = e.target.dataset.mode;
  if (mode === "next") {
    advancePart1();
  } else {
    checkPart1Answer();
  }
});

document.getElementById("p1-answer-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("p1-submit-btn").click();
  }
});

// ============================================================
// TRANSITION -> PART 2
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
      if (e.target.classList.contains("lookup-btn")) return; // handled separately
      selectMcqOption(idx);
    });
    optionsContainer.appendChild(btn);
  });

  // Attach lookup handlers (need to be after insertion, separate from option click)
  optionsContainer.querySelectorAll(".lookup-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      showLookupPopup(e.target.dataset.word, e.target);
    });
  });

  document.getElementById("p2-feedback").classList.add("hidden");
  document.getElementById("p2-feedback").innerHTML = "";
  document.getElementById("p2-next-btn").classList.add("hidden");
}

document.getElementById("p2-tts-btn").addEventListener("click", () => {
  speak(currentMcq().q);
});

function selectMcqOption(idx) {
  state.p2Locked = true;
  const item = currentMcq();
  const optionsContainer = document.getElementById("p2-options");
  const buttons = optionsContainer.querySelectorAll(".mcq-option");

  buttons.forEach((b, i) => {
    b.classList.add("locked");
    if (i === item.answer) b.classList.add("correct-reveal");
    if (i === idx && idx !== item.answer) b.classList.add("wrong-reveal");
    if (i === idx) b.classList.add("selected");
  });

  const correct = idx === item.answer;
  if (correct) {
    state.p2Score++;
  } else {
    const correctWord = item.options[item.answer];
    if (!state.p2WrongWords.includes(correctWord)) {
      state.p2WrongWords.push(correctWord);
    }
  }

  // Build feedback: all 4 options' chinese def + full sentence + translation
  const letters = ["A", "B", "C", "D"];
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

  // Build the full sentence with the correct word filled in, plus its Chinese translation.
  // Use vocabIndex (when present) to get the exact sense tested, since some words
  // (e.g. rain/storm) appear twice in VOCAB with different parts of speech.
  const correctWord = item.options[item.answer];
  const vocabEntry = (typeof item.vocabIndex === "number")
    ? VOCAB[item.vocabIndex]
    : VOCAB.find(v => v.word.toLowerCase() === correctWord.toLowerCase());
  let fullSentenceHtml = "";
  if (vocabEntry) {
    const filled = vocabEntry.sentence.replace("{{BLANK}}", `<strong>${vocabEntry.word}</strong>`);
    fullSentenceHtml = `
      <div class="full-sentence-block">
        <div>${filled}</div>
        <div class="cn">${vocabEntry.cn}</div>
      </div>`;
  }

  const feedback = document.getElementById("p2-feedback");
  feedback.innerHTML = `
    <div class="verdict ${correct ? "good" : "bad"}">${correct ? "✓ 答對了！Correct!" : "✗ 答錯了 Incorrect. 正確答案 / Correct answer: " + letters[item.answer] + ". " + correctWord}</div>
    <ul class="option-def-list">${defListHtml}</ul>
    ${fullSentenceHtml}
  `;
  feedback.classList.remove("hidden");
  document.getElementById("p2-next-btn").classList.remove("hidden");
}

document.getElementById("p2-next-btn").addEventListener("click", () => {
  state.p2Index++;
  if (state.p2Index >= MCQS.length) {
    document.getElementById("p2-progress-fill").style.width = "100%";
    showResults();
  } else {
    renderPart2();
  }
});

// ---------------- Word lookup popup ----------------
// ---------------- Clickable words in Part 1 sentence ----------------
// Wraps each alphabetic word in a sentence (already containing HTML like
// the blank-marker span) with a clickable span for word lookup, while
// leaving existing HTML tags and the blank marker untouched.
function wrapWordsForLookup(html) {
  // Split on tags so we only touch text nodes, not the <span class="blank-marker"> markup.
  const parts = html.split(/(<[^>]+>)/);
  return parts.map(part => {
    if (part.startsWith("<")) return part; // leave tags alone
    // Wrap runs of letters/apostrophes (words), leave punctuation/spaces as-is
    return part.replace(/[A-Za-z']+/g, (word) => {
      return `<span class="lookup-word" data-word="${word}">${word}</span>`;
    });
  }).join("");
}

// Delegate clicks on any .lookup-word span (Part 1 sentence) to the lookup popup
document.addEventListener("click", (e) => {
  const target = e.target.closest(".lookup-word");
  if (target) {
    showLookupPopup(target.dataset.word, target);
    state.lookedUpWords.add(target.dataset.word);
  }
});

function buildPopupShell(word, anchorEl, bodyHtml) {
  const container = document.getElementById("lookup-popup-container");
  container.innerHTML = "";
  const popup = document.createElement("div");
  popup.className = "lookup-popup";
  const dictUrl = `https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(word.toLowerCase())}`;

  popup.innerHTML = `
    <div><strong>${word}</strong></div>
    <div style="margin-top:4px;" class="lookup-body">${bodyHtml}</div>
    <div style="margin-top:8px;"><a href="${dictUrl}" target="_blank" rel="noopener">查看更多 / Look up more →</a></div>
    <button class="lookup-close" type="button">關閉 Close</button>
  `;
  document.body.appendChild(popup);

  const rect = anchorEl.getBoundingClientRect();
  let top = rect.bottom + window.scrollY + 8;
  let left = rect.left + window.scrollX - 100;
  left = Math.max(10, Math.min(left, window.innerWidth - 270));
  popup.style.top = `${top}px`;
  popup.style.left = `${left}px`;

  popup.querySelector(".lookup-close").addEventListener("click", () => popup.remove());

  setTimeout(() => {
    document.addEventListener("click", function closePopup(e) {
      if (!popup.contains(e.target)) {
        popup.remove();
        document.removeEventListener("click", closePopup);
      }
    });
  }, 0);

  return popup;
}

function showLookupPopup(word, anchorEl) {
  const key = word.toLowerCase().replace(/[^a-z']/g, "");

  // Tier 1: this group's own target words (richest, most relevant definition)
  const lk = LOOKUP[key];
  if (lk) {
    const senses = (lk.combined && lk.combined.length > 1) ? lk.combined : [lk];
    const html = senses
      .map(s => `${s.pos} ${s.en_def} <br>中文: ${s.cn_def}`)
      .join("<hr style='border-color:#555;margin:6px 0;'>");
    buildPopupShell(word, anchorEl, html);
    return;
  }

  // Tier 2: hand-checked Chinese glosses for the other words used in this group's sentences
  const eg = EXTRA_GLOSSES[key];
  if (eg) {
    buildPopupShell(word, anchorEl, `${eg.pos} ${eg.en_def} <br>中文: ${eg.cn_def}`);
    return;
  }

  // Tier 3: live free dictionary API fallback (English definition only; no Chinese available here)
  const popup = buildPopupShell(word, anchorEl, `<span style="opacity:0.8;">查詢中... Looking up...</span>`);
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(key)}`)
    .then(res => {
      if (!res.ok) throw new Error("not found");
      return res.json();
    })
    .then(data => {
      const bodyEl = popup.querySelector(".lookup-body");
      if (!bodyEl) return; // popup already closed
      const meaning = data[0]?.meanings?.[0];
      const pos = meaning?.partOfSpeech || "";
      const def = meaning?.definitions?.[0]?.definition || "";
      bodyEl.innerHTML = `${pos} ${def} <br><span style="opacity:0.75;">（此字無中文，請點下方連結查詢 / no Chinese available — use the link below）</span>`;
    })
    .catch(() => {
      const bodyEl = popup.querySelector(".lookup-body");
      if (!bodyEl) return;
      bodyEl.innerHTML = `查無此字的定義，請點下方連結查詢。<br>No definition found — use the link below to look it up.`;
    });
}

// ============================================================
// RESULTS + SUBMISSION
// ============================================================
function showResults() {
  showScreen("screen-results");

  const pct = Math.round((state.p2Score / MCQS.length) * 100);
  document.getElementById("result-score").textContent = `${state.p2Score} / ${MCQS.length}`;

  const p1List = document.getElementById("p1-wrong-list");
  p1List.innerHTML = "";
  if (state.p1WrongWords.length === 0) {
    p1List.innerHTML = `<span class="word-chip none">全部正確！All correct!</span>`;
  } else {
    state.p1WrongWords.forEach(w => {
      const chip = document.createElement("span");
      chip.className = "word-chip";
      chip.textContent = w;
      p1List.appendChild(chip);
    });
  }

  const p2List = document.getElementById("p2-wrong-list");
  p2List.innerHTML = "";
  if (state.p2WrongWords.length === 0) {
    p2List.innerHTML = `<span class="word-chip none">全部正確！All correct!</span>`;
  } else {
    state.p2WrongWords.forEach(w => {
      const chip = document.createElement("span");
      chip.className = "word-chip";
      chip.textContent = w;
      p2List.appendChild(chip);
    });
  }

  submitResults();
}

function submitResults() {
  const statusEl = document.getElementById("submit-status");
  statusEl.textContent = "正在送出結果... Submitting...";
  statusEl.className = "submit-status";

  // lookUpWords: combine all words students clicked "lookup" on, tracked separately below
  const payload = {
    studentName: state.studentName,
    unitThemeName: QUIZ_CONFIG.groupName,
    part1wrongSpellingWords: state.p1WrongWords.join(", "),
    part2wrongMCQWords: state.p2WrongWords.join(", "),
    lookUpWords: Array.from(state.lookedUpWords || []).join(", ")
  };

  const body = new URLSearchParams();
  body.append("payload", JSON.stringify(payload));

  fetch(QUIZ_CONFIG.gasEndpoint, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString()
  })
    .then(() => {
      // no-cors responses are always "opaque" (status 0, unreadable) by design.
      // A resolved (non-rejected) promise means the browser successfully sent the
      // request and didn't hit a network-level error.
      statusEl.textContent = "✓ 結果已送出！老師會看到你的成績。Results submitted!";
      statusEl.className = "submit-status success";
    })
    .catch(() => {
      statusEl.textContent = "⚠ 送出失敗，請告訴老師。(Submission failed — please tell your teacher.)";
      statusEl.className = "submit-status error";
    });
}

// Track looked-up words across the whole quiz for logging
state.lookedUpWords = new Set();
document.addEventListener("click", (e) => {
  if (e.target.classList && e.target.classList.contains("lookup-btn")) {
    state.lookedUpWords.add(e.target.dataset.word);
  }
});
