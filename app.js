// ============================================================
// Group 1 Quiz App Logic
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

  const sentenceHtml = v.sentence.replace(
    "{{BLANK}}",
    `<span class="blank-marker">&nbsp;</span>`
  );
  document.getElementById("p1-sentence").innerHTML = sentenceHtml;
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
    const def = lk ? `${lk.pos} ${lk.cn_def}` : "";
    defListHtml += `<li><strong>${letters[i]}. ${opt}</strong> — ${def}</li>`;
  });

  // Build the full sentence with the correct word filled in, plus its Chinese translation
  const correctWord = item.options[item.answer];
  const vocabEntry = VOCAB.find(v => v.word.toLowerCase() === correctWord.toLowerCase());
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
function showLookupPopup(word, anchorEl) {
  const container = document.getElementById("lookup-popup-container");
  container.innerHTML = "";
  const lk = LOOKUP[word.toLowerCase()];
  const popup = document.createElement("div");
  popup.className = "lookup-popup";

  const defText = lk ? `${lk.pos} ${lk.en_def} <br>中文: ${lk.cn_def}` : "No definition found in this word list.";
  const dictUrl = `https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(word.toLowerCase())}`;

  popup.innerHTML = `
    <div><strong>${word}</strong></div>
    <div style="margin-top:4px;">${defText}</div>
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

  // Close when clicking outside
  setTimeout(() => {
    document.addEventListener("click", function closePopup(e) {
      if (!popup.contains(e.target)) {
        popup.remove();
        document.removeEventListener("click", closePopup);
      }
    });
  }, 0);
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
