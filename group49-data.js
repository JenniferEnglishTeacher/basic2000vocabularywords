// ============================================================
// Group 49 Quiz Data: Function Words / Common Nouns, Part 2
// Full word set (30 words) — conjunctions and the start of
// abstract common nouns from the "function words / common
// nouns" theme. Continues from Group 48 (Function Words, Part
// 1). This is the second of ~9 groups (48-56) covering this
// theme at ~30 words per group.
// Continues the simpler/shorter MCQ style introduced in
// Group 37 (~16-26 words, 2 sentences, one blank).
// Note: the spreadsheet's dictionary definition for "or" is
// the U.S. state Oregon, not the conjunction; corrected here
// using the 或 Chinese gloss. Also, the spreadsheet word text
// at this position reads "room" but the Chinese gloss is 女廁
// (women's room), a clear data-entry truncation; corrected to
// "women's room" to pair correctly with "men's room."
// ============================================================

const QUIZ_CONFIG = {
  groupName: "Group 49 - Function Words, Part 2 (功能詞 二)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

// ---- Part 1 data: spelling practice (30 words) ----
const VOCAB = [
  { word: "and", pos: "conj.", cn_def: "和", en_def: "used to connect words or ideas of equal importance",
    sentence: "She packed her lunch {{BLANK}} her water bottle before leaving.",
    cn: "她在出門前打包了午餐和水壺。" },
  { word: "although", pos: "conj.", cn_def: "雖然", en_def: "used to introduce a contrasting idea",
    sentence: "{{BLANK}} it was raining, the team still practiced outside.",
    cn: "雖然下著雨，這支隊伍仍然在戶外練習。" },
  { word: "but", pos: "conj.", cn_def: "但是", en_def: "used to introduce something that contrasts with what was just said",
    sentence: "He wanted to join the trip, {{BLANK}} he had too much homework.",
    cn: "他想參加這次旅行，但是他有太多作業要做。" },
  { word: "because", pos: "conj.", cn_def: "因為", en_def: "used to give a reason for something",
    sentence: "She stayed inside {{BLANK}} the weather was too cold.",
    cn: "她待在室內，因為天氣太冷了。" },
  { word: "if", pos: "conj.", cn_def: "假如", en_def: "used to talk about something that might happen",
    sentence: "{{BLANK}} it stops raining, we can play outside later.",
    cn: "假如雨停了，我們稍後就可以去外面玩。" },
  { word: "neither", pos: "conj.", cn_def: "兩者都不", en_def: "used with nor to say not one and not the other",
    sentence: "{{BLANK}} of the two answers seemed correct to the students.",
    cn: "這兩個答案在學生看來都不對。" },
  { word: "nor", pos: "conj.", cn_def: "也不", en_def: "used after neither to introduce a second negative choice",
    sentence: "She likes neither coffee {{BLANK}} tea in the morning.",
    cn: "她早上既不喜歡咖啡也不喜歡茶。" },
  { word: "or", pos: "conj.", cn_def: "或", en_def: "used to connect two possible choices",
    sentence: "Would you rather have pizza {{BLANK}} pasta for dinner tonight?",
    cn: "你今晚晚餐想吃披薩還是義大利麵？" },
  { word: "than", pos: "conj.", cn_def: "比", en_def: "used to compare two things",
    sentence: "Her brother is much taller {{BLANK}} she is this year.",
    cn: "她哥哥今年比她高很多。" },
  { word: "while", pos: "conj.", cn_def: "當…時", en_def: "used to say that two things happen at the same time",
    sentence: "She read a book {{BLANK}} waiting for the bus to arrive.",
    cn: "她在等公車的時候看了一本書。" },
  { word: "command", pos: "n.", cn_def: "命令", en_def: "an order given by someone in authority",
    sentence: "The soldiers followed every {{BLANK}} given by their captain.",
    cn: "士兵們服從隊長下達的每一個命令。" },
  { word: "order", pos: "n.", cn_def: "命令", en_def: "an instruction that must be obeyed",
    sentence: "The teacher gave a clear {{BLANK}} to line up quietly.",
    cn: "老師下達了明確的命令，要大家安靜排隊。" },
  { word: "fact", pos: "n.", cn_def: "事實", en_def: "a piece of information that is true",
    sentence: "It is a {{BLANK}} that the earth orbits the sun.",
    cn: "地球繞著太陽運行是一個事實。" },
  { word: "truth", pos: "n.", cn_def: "事實", en_def: "the quality of being true or factual",
    sentence: "She finally told her parents the whole {{BLANK}} about the broken vase.",
    cn: "她終於把打破花瓶的整件事實告訴了父母。" },
  { word: "idea", pos: "n.", cn_def: "主意", en_def: "a thought or plan formed in the mind",
    sentence: "She had a great {{BLANK}} for the class art project.",
    cn: "她對班級美術作業有一個很棒的主意。" },
  { word: "thought", pos: "n.", cn_def: "想法", en_def: "something that someone thinks; an idea",
    sentence: "He shared his {{BLANK}} about the new school schedule.",
    cn: "他分享了他對新課表的想法。" },
  { word: "opinion", pos: "n.", cn_def: "意見", en_def: "a personal belief or view about something",
    sentence: "The teacher asked each student to share an {{BLANK}} on the topic.",
    cn: "老師要求每位學生對這個主題發表意見。" },
  { word: "topic", pos: "n.", cn_def: "主題", en_def: "the subject being discussed or written about",
    sentence: "Our group chose pollution as the {{BLANK}} for our report.",
    cn: "我們這組選了污染當作報告的主題。" },
  { word: "title", pos: "n.", cn_def: "標題", en_def: "the name given to a book, movie, or piece of work",
    sentence: "She couldn't remember the {{BLANK}} of her favorite childhood book.",
    cn: "她想不起來她最喜歡的童年書籍的標題。" },
  { word: "beginning", pos: "n.", cn_def: "開始", en_def: "the point where something starts",
    sentence: "The story felt a little slow at the {{BLANK}}.",
    cn: "這個故事在開始的時候感覺有點慢。" },
  { word: "end", pos: "n.", cn_def: "末端", en_def: "the final part of something",
    sentence: "Everyone cheered loudly at the {{BLANK}} of the exciting race.",
    cn: "在這場刺激的比賽結束時，大家都大聲歡呼。" },
  { word: "cause", pos: "n.", cn_def: "原因", en_def: "something that makes an event happen",
    sentence: "Doctors are still trying to find the {{BLANK}} of his illness.",
    cn: "醫生仍在試圖找出他生病的原因。" },
  { word: "reason", pos: "n.", cn_def: "原因", en_def: "an explanation for why something happens",
    sentence: "She gave a good {{BLANK}} for missing class yesterday.",
    cn: "她對昨天缺課給了一個很好的理由。" },
  { word: "result", pos: "n.", cn_def: "結果", en_def: "something that happens because of an earlier action",
    sentence: "The {{BLANK}} of the experiment surprised everyone in class.",
    cn: "這個實驗的結果讓全班都感到驚訝。" },
  { word: "loser", pos: "n.", cn_def: "輸家", en_def: "a person who does not win a contest or game",
    sentence: "Even the {{BLANK}} of the match received a small medal.",
    cn: "即使是這場比賽的輸家也得到了一個小獎牌。" },
  { word: "winner", pos: "n.", cn_def: "贏家", en_def: "a person who wins a contest or game",
    sentence: "The {{BLANK}} of the spelling bee received a shiny trophy.",
    cn: "拼字比賽的贏家得到了一個閃亮的獎盃。" },
  { word: "men's room", pos: "n.", cn_def: "男廁", en_def: "a public restroom for men",
    sentence: "He asked the waiter where to find the {{BLANK}}.",
    cn: "他問服務生男廁在哪裡。" },
  { word: "women's room", pos: "n.", cn_def: "女廁", en_def: "a public restroom for women",
    sentence: "She waited in line outside the {{BLANK}} at the theater.",
    cn: "她在劇院的女廁外排隊等候。" },
  { word: "noise", pos: "n.", cn_def: "噪音", en_def: "a loud or unpleasant sound",
    sentence: "A strange {{BLANK}} came from the basement late at night.",
    cn: "深夜時地下室傳出一個奇怪的噪音。" },
  { word: "silence", pos: "n.", cn_def: "寂靜", en_def: "the complete absence of sound",
    sentence: "The library was filled with quiet {{BLANK}} during exam week.",
    cn: "考試週期間，圖書館裡一片寂靜。" }
];

// ---- Part 2 data: 30 MCQs ----
// Continuing the simpler/shorter MCQ style from Group 37:
// ~16-26 words, exactly 2 sentences, one blank, 4 options.
// Answer letters balanced across A/B/C/D, no adjacent repeats.
// vocabIndex points to the exact VOCAB array entry being tested.
const MCQS = [
  { q: "She wanted to be ready for a long day outside. She packed her lunch ______ her water bottle before leaving.",
    options: ["and", "but", "or", "than"], answer: 0, vocabIndex: 0 },
  { q: "The weather wasn't ideal, but the coach didn't cancel practice. ______ it was raining, the team still practiced outside.",
    options: ["And", "Although", "Because", "If"], answer: 1, vocabIndex: 1 },
  { q: "He really wanted to go on the school trip this month. He wanted to join, ______ he had too much homework.",
    options: ["and", "because", "but", "or"], answer: 2, vocabIndex: 2 },
  { q: "The temperature outside had dropped a lot since morning. She stayed inside ______ the weather was too cold.",
    options: ["although", "but", "or", "because"], answer: 3, vocabIndex: 3 },
  { q: "Everyone was hoping for better weather later that afternoon. ______ it stops raining, we can play outside later.",
    options: ["If", "Although", "Because", "But"], answer: 0, vocabIndex: 4 },
  { q: "Two possible answers were written on the whiteboard for the quiz. ______ of the two answers seemed correct to them.",
    options: ["Either", "Neither", "Both", "Each"], answer: 1, vocabIndex: 5 },
  { q: "Her morning routine never really includes hot drinks at all. She likes neither coffee ______ tea in the morning.",
    options: ["or", "and", "nor", "but"], answer: 2, vocabIndex: 6 },
  { q: "She was deciding what to order for the family dinner tonight. Would you rather have pizza ______ pasta?",
    options: ["and", "but", "than", "or"], answer: 3, vocabIndex: 7 },
  { q: "Their height difference has become more noticeable this year. Her brother is much taller ______ she is.",
    options: ["than", "and", "or", "but"], answer: 0, vocabIndex: 8 },
  { q: "She found a way to pass the time at the bus stop. She read a book ______ waiting for the bus.",
    options: ["because", "while", "if", "although"], answer: 1, vocabIndex: 9 },
  { q: "Discipline and obedience were important parts of military training. The soldiers followed every ______ given by their captain.",
    options: ["idea", "opinion", "command", "thought"], answer: 2, vocabIndex: 10 },
  { q: "Students quickly responded to the teacher's clear instructions. The teacher gave a clear ______ to line up quietly.",
    options: ["topic", "result", "title", "order"], answer: 3, vocabIndex: 11 },
  { q: "The science class reviewed basic information about our planet. It is a ______ that the earth orbits the sun.",
    options: ["fact", "opinion", "title", "thought"], answer: 0, vocabIndex: 12 },
  { q: "After hiding it for a while, she finally felt ready to explain everything honestly. She told her parents the whole ______.",
    options: ["fact", "truth", "idea", "topic"], answer: 1, vocabIndex: 13 },
  { q: "Her creativity stood out during the brainstorming session in art class. She had a great ______ for the class project.",
    options: ["fact", "truth", "idea", "order"], answer: 2, vocabIndex: 14 },
  { q: "He spoke up during the discussion about the new timetable. He shared his ______ about the new school schedule.",
    options: ["command", "title", "result", "thought"], answer: 3, vocabIndex: 15 },
  { q: "Class discussions often included everyone's personal viewpoint on a subject. Each student was asked to share an ______.",
    options: ["opinion", "fact", "order", "command"], answer: 0, vocabIndex: 16 },
  { q: "The group needed to pick a subject for their environmental report. Our group chose pollution as the ______ for our report.",
    options: ["title", "topic", "result", "command"], answer: 1, vocabIndex: 17 },
  { q: "She tried hard to recall a story from many years ago. She couldn't remember the ______ of her favorite childhood book.",
    options: ["topic", "fact", "title", "order"], answer: 2, vocabIndex: 18 },
  { q: "The story took a little while to capture her attention. The story felt a little slow at the ______.",
    options: ["end", "result", "cause", "beginning"], answer: 3, vocabIndex: 19 },
  { q: "The race finally reached its dramatic final moments. Everyone cheered loudly at the ______ of the exciting race.",
    options: ["end", "beginning", "cause", "reason"], answer: 0, vocabIndex: 20 },
  { q: "Medical tests were being run to understand his condition better. Doctors are still trying to find the ______ of his illness.",
    options: ["result", "cause", "title", "topic"], answer: 1, vocabIndex: 21 },
  { q: "She needed to explain her absence to the teacher the next day. She gave a good ______ for missing class.",
    options: ["cause", "result", "reason", "command"], answer: 2, vocabIndex: 22 },
  { q: "The science experiment didn't turn out the way anyone expected. The ______ of the experiment surprised everyone in class.",
    options: ["cause", "reason", "topic", "result"], answer: 3, vocabIndex: 23 },
  { q: "Not every player in the tournament walked away with the top prize. Even the ______ received a small medal.",
    options: ["loser", "winner", "speaker", "owner"], answer: 0, vocabIndex: 24 },
  { q: "The spelling competition ended with one student standing out above the rest. The ______ received a shiny trophy.",
    options: ["loser", "winner", "speaker", "owner"], answer: 1, vocabIndex: 25 },
  { q: "He needed directions at the restaurant before sitting down to eat. He asked the waiter where to find the ______.",
    options: ["women's room", "kitchen", "men's room", "exit"], answer: 2, vocabIndex: 26 },
  { q: "A long line had formed near a certain door at the theater. She waited in line outside the ______.",
    options: ["men's room", "exit", "kitchen", "women's room"], answer: 3, vocabIndex: 27 },
  { q: "Something unusual woke the family up well after midnight. A strange ______ came from the basement late at night.",
    options: ["noise", "silence", "truth", "fact"], answer: 0, vocabIndex: 28 },
  { q: "The library felt completely different than usual during finals week. It was filled with quiet ______ during exam week.",
    options: ["noise", "silence", "command", "order"], answer: 1, vocabIndex: 29 },
];

// ---- LOOKUP table built from VOCAB ----
const LOOKUP = {};
VOCAB.forEach(v => {
  const key = v.word.toLowerCase();
  if (LOOKUP[key]) {
    LOOKUP[key].combined.push({ pos: v.pos, en_def: v.en_def, cn_def: v.cn_def });
  } else {
    LOOKUP[key] = {
      pos: v.pos,
      en_def: v.en_def,
      cn_def: v.cn_def,
      combined: [{ pos: v.pos, en_def: v.en_def, cn_def: v.cn_def }]
    };
  }
});

// ---- Hand-checked Chinese glosses for supporting words used in this group's sentences ----
const EXTRA_GLOSSES = {
  "absence": { pos: "n.", en_def: "the state of being away from a place", cn_def: "缺席" },
  "basement": { pos: "n.", en_def: "the part of a building below ground level", cn_def: "地下室" },
  "both": { pos: "pron.", en_def: "the two together; each of two", cn_def: "兩者都" },
  "brainstorming": { pos: "n.", en_def: "a method of generating many ideas quickly in a group", cn_def: "腦力激盪" },
  "captain": { pos: "n.", en_def: "the leader of a group, team, or ship", cn_def: "隊長；船長" },
  "competition": { pos: "n.", en_def: "an event in which people compete against each other", cn_def: "比賽" },
  "discipline": { pos: "n.", en_def: "the practice of training people to follow rules", cn_def: "紀律" },
  "each": { pos: "det.", en_def: "used to refer to every individual thing in a group", cn_def: "每個" },
  "either": { pos: "conj.", en_def: "used before the first of two choices", cn_def: "（兩者）其中一個" },
  "environmental": { pos: "adj.", en_def: "relating to the natural world", cn_def: "環境的" },
  "exit": { pos: "n.", en_def: "a way out of a place", cn_def: "出口" },
  "finals week": { pos: "n.", en_def: "the week when final exams are given", cn_def: "期末考週" },
  "illness": { pos: "n.", en_def: "a disease or period of being sick", cn_def: "疾病" },
  "kitchen": { pos: "n.", en_def: "a room used for cooking food", cn_def: "廚房" },
  "medal": { pos: "n.", en_def: "a small metal disc given as an award", cn_def: "獎牌" },
  "military": { pos: "adj.", en_def: "relating to soldiers or the armed forces", cn_def: "軍事的" },
  "obedience": { pos: "n.", en_def: "the act of following orders or rules", cn_def: "服從" },
  "orbits": { pos: "v.", en_def: "moves around something in a circular path", cn_def: "繞行" },
  "owner": { pos: "n.", en_def: "a person who owns something", cn_def: "擁有者" },
  "schedule": { pos: "n.", en_def: "a plan of times for activities or events", cn_def: "時間表" },
  "speaker": { pos: "n.", en_def: "a person who gives a speech", cn_def: "演講者" },
  "spelling bee": { pos: "n.", en_def: "a competition in which people spell words correctly", cn_def: "拼字比賽" },
  "timetable": { pos: "n.", en_def: "a schedule showing when events or classes occur", cn_def: "課表；時間表" },
  "tournament": { pos: "n.", en_def: "a series of contests to find an overall winner", cn_def: "錦標賽" },
  "trophy": { pos: "n.", en_def: "an object given as a prize for winning", cn_def: "獎盃" },
  "vase": { pos: "n.", en_def: "a container used to hold flowers", cn_def: "花瓶" },
  "viewpoint": { pos: "n.", en_def: "a way of thinking about something", cn_def: "觀點" },
  "waiter": { pos: "n.", en_def: "a person who serves food at a restaurant", cn_def: "服務生" },
};
Object.keys(EXTRA_GLOSSES).forEach(key => {
  const g = EXTRA_GLOSSES[key];
  if (!LOOKUP[key]) {
    LOOKUP[key] = { pos: g.pos, en_def: g.en_def, cn_def: g.cn_def, combined: [g] };
  }
});
