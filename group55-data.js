// ============================================================
// Group 55 Quiz Data: Function Words / Common Nouns, Part 8
// Full word set (30 words) — the last block of common nouns
// plus the first 8 adjectives, from the "function words /
// common nouns" theme. Continues from Group 54 (Common Nouns,
// Part 5). This is the eighth of ~9 groups (48-56) covering
// this theme at ~30 words per group.
// Continues the simpler/shorter MCQ style introduced in
// Group 37 (~16-26 words, 2 sentences, one blank).
// Note: the spreadsheet's dictionary definition for "tank" is
// the military vehicle sense, but the Chinese gloss 槽 points
// to the container sense (e.g. fish tank, storage tank);
// corrected here accordingly. Similarly, "term" is defined as
// "a word or expression," but the gloss 期限 indicates the
// "fixed period of time" sense (e.g. school term, loan term);
// corrected here using the Chinese gloss as ground truth.
// ============================================================

const QUIZ_CONFIG = {
  groupName: "Group 55 - Common Nouns, Part 6 (常見名詞 六)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

// ---- Part 1 data: spelling practice (30 words) ----
const VOCAB = [
  { word: "talent", pos: "n.", cn_def: "天份", en_def: "a natural ability to do something well",
    sentence: "She showed real {{BLANK}} for drawing at a very young age.",
    cn: "她從很小的時候就展現出真正的繪畫天份。" },
  { word: "tank", pos: "n.", cn_def: "槽", en_def: "a large container used to hold liquid or gas",
    sentence: "He cleaned the glass {{BLANK}} before adding new fish to it.",
    cn: "他在放入新魚之前先清洗了玻璃水槽。" },
  { word: "tent", pos: "n.", cn_def: "帳篷", en_def: "a portable shelter made of cloth",
    sentence: "They set up their {{BLANK}} near the edge of the campsite.",
    cn: "他們在營地邊緣搭起了帳篷。" },
  { word: "term", pos: "n.", cn_def: "期限", en_def: "a fixed period of time",
    sentence: "Her library book loan {{BLANK}} ends at the end of this week.",
    cn: "她借閱圖書館書籍的期限將在這週結束。" },
  { word: "tip", pos: "n.", cn_def: "小費", en_def: "a small amount of money given for good service",
    sentence: "She left a generous {{BLANK}} for the friendly waiter.",
    cn: "她給了這位友善的服務生一筆豐厚的小費。" },
  { word: "tool", pos: "n.", cn_def: "工具", en_def: "an object used to help complete a task",
    sentence: "He grabbed the right {{BLANK}} to fix the wobbly chair leg.",
    cn: "他拿了對的工具來修理搖晃的椅腳。" },
  { word: "tower", pos: "n.", cn_def: "塔", en_def: "a tall, narrow building or structure",
    sentence: "They climbed to the top of the old stone {{BLANK}} for the view.",
    cn: "他們爬到這座古老石塔的頂端去看風景。" },
  { word: "tradition", pos: "n.", cn_def: "傳統", en_def: "a custom passed down through generations",
    sentence: "Baking cookies together every December is a family {{BLANK}}.",
    cn: "每年十二月一起烤餅乾是一個家族傳統。" },
  { word: "trick", pos: "n.", cn_def: "詭計", en_def: "a clever act meant to deceive or surprise someone",
    sentence: "The magician performed an amazing {{BLANK}} with playing cards.",
    cn: "這位魔術師用撲克牌表演了一個驚人的詭計。" },
  { word: "trip", pos: "n.", cn_def: "旅程", en_def: "a journey to a place and back",
    sentence: "Their {{BLANK}} to the mountains lasted exactly one week.",
    cn: "他們的山中旅程正好持續了一個星期。" },
  { word: "trouble", pos: "n.", cn_def: "麻煩", en_def: "a problem or difficulty",
    sentence: "He got into {{BLANK}} for forgetting his homework again.",
    cn: "他又忘了帶作業，因此遇上了麻煩。" },
  { word: "type", pos: "n.", cn_def: "類型", en_def: "a category of similar things",
    sentence: "She prefers this {{BLANK}} of music over loud, fast songs.",
    cn: "她比較喜歡這種類型的音樂，而不是吵鬧快節奏的歌曲。" },
  { word: "vacation", pos: "n.", cn_def: "假期", en_def: "a period of rest or travel away from work or school",
    sentence: "They planned a relaxing {{BLANK}} at the beach this summer.",
    cn: "他們計畫今年夏天在海邊度過一個輕鬆的假期。" },
  { word: "value", pos: "n.", cn_def: "價值", en_def: "the importance or worth of something",
    sentence: "The old painting increased in {{BLANK}} over the years.",
    cn: "這幅老畫的價值隨著時間增加了。" },
  { word: "victory", pos: "n.", cn_def: "勝利", en_def: "a successful result in a contest or battle",
    sentence: "The team celebrated their {{BLANK}} with a big pizza party.",
    cn: "球隊用一場盛大的披薩派對來慶祝他們的勝利。" },
  { word: "vocabulary", pos: "n.", cn_def: "字彙", en_def: "the set of words known and used by a person",
    sentence: "Reading every night helped improve her English {{BLANK}}.",
    cn: "每天晚上閱讀幫助她提升了她的英語字彙。" },
  { word: "war", pos: "n.", cn_def: "戰爭", en_def: "armed fighting between countries or groups",
    sentence: "The museum displayed old letters written during the {{BLANK}}.",
    cn: "博物館展示了戰爭期間寫的舊信件。" },
  { word: "wedding", pos: "n.", cn_def: "婚禮", en_def: "a ceremony where two people get married",
    sentence: "She wore a beautiful dress to her cousin's {{BLANK}}.",
    cn: "她穿了一件漂亮的洋裝去參加表姊的婚禮。" },
  { word: "will", pos: "n.", cn_def: "意志", en_def: "the determination to do something",
    sentence: "Her strong {{BLANK}} helped her finish the marathon despite the pain.",
    cn: "她堅強的意志幫助她在疼痛中仍完成了馬拉松比賽。" },
  { word: "wing", pos: "n.", cn_def: "翅膀", en_def: "the part of a bird or insect used for flying",
    sentence: "The injured bird could not move its {{BLANK}} properly.",
    cn: "這隻受傷的鳥無法正常移動牠的翅膀。" },
  { word: "wood", pos: "n.", cn_def: "木材", en_def: "the hard material that trees are made of",
    sentence: "He used soft {{BLANK}} to carve a small wooden bird.",
    cn: "他用軟木材雕刻了一隻小木鳥。" },
  { word: "word", pos: "n.", cn_def: "字", en_def: "a single unit of language with meaning",
    sentence: "She looked up the unfamiliar {{BLANK}} in her dictionary.",
    cn: "她在字典裡查了這個不熟悉的字。" },
  { word: "alike", pos: "adj.", cn_def: "相似的", en_def: "similar to each other",
    sentence: "The twins dressed {{BLANK}} for their first day of school.",
    cn: "這對雙胞胎在開學第一天穿得很相似。" },
  { word: "similar", pos: "adj.", cn_def: "相似的", en_def: "having a resemblance to something else",
    sentence: "Her new bike looked very {{BLANK}} to her old one.",
    cn: "她的新自行車看起來和她的舊自行車非常相似。" },
  { word: "alone", pos: "adj.", cn_def: "單獨的", en_def: "without other people present",
    sentence: "She likes to study {{BLANK}} in the quiet library upstairs.",
    cn: "她喜歡獨自在樓上安靜的圖書館裡學習。" },
  { word: "single", pos: "adj.", cn_def: "單一的", en_def: "only one; not multiple",
    sentence: "He answered every question with just a {{BLANK}} word.",
    cn: "他每個問題都只用一個字回答。" },
  { word: "blank", pos: "adj.", cn_def: "空白的", en_def: "having nothing written or marked on it",
    sentence: "She handed in a {{BLANK}} page by mistake during the test.",
    cn: "她在考試時不小心交了一張空白的紙。" },
  { word: "empty", pos: "adj.", cn_def: "空的", en_def: "containing nothing inside",
    sentence: "The classroom looked strangely {{BLANK}} after everyone went home.",
    cn: "大家回家後，教室看起來異常地空蕩蕩。" },
  { word: "else", pos: "adj.", cn_def: "另外的", en_def: "used to refer to something additional or different",
    sentence: "Is there anything {{BLANK}} you need before we leave?",
    cn: "在我們離開前，你還需要其他什麼東西嗎？" },
  { word: "another", pos: "adj.", cn_def: "另一個", en_def: "one more; a different one",
    sentence: "She asked the waiter for {{BLANK}} glass of water.",
    cn: "她向服務生要了另一杯水。" }
];

// ---- Part 2 data: 30 MCQs ----
// Continuing the simpler/shorter MCQ style from Group 37:
// ~16-26 words, exactly 2 sentences, one blank, 4 options.
// Answer letters balanced across A/B/C/D, no adjacent repeats.
// vocabIndex points to the exact VOCAB array entry being tested.
const MCQS = [
  { q: "Even as a child, she could sketch faces with surprising accuracy. She showed real ______ for drawing at a very young age.",
    options: ["talent", "term", "trick", "tool"], answer: 0, vocabIndex: 0 },
  { q: "Before bringing home a new pet, the aquarium needed fresh water. He cleaned the glass ______ before adding new fish to it.",
    options: ["tower", "tank", "tent", "type"], answer: 1, vocabIndex: 1 },
  { q: "They wanted to be close to the trees but still near the trail. They set up their ______ near the edge of the campsite.",
    options: ["tower", "tank", "tent", "wing"], answer: 2, vocabIndex: 2 },
  { q: "She needed to return the borrowed book before the deadline arrived. Her library book loan ______ ends at the end of this week.",
    options: ["trip", "trouble", "tool", "term"], answer: 3, vocabIndex: 3 },
  { q: "The service at the small cafe had been excellent all evening. She left a generous ______ for the friendly waiter.",
    options: ["tip", "value", "victory", "vocabulary"], answer: 0, vocabIndex: 4 },
  { q: "One leg of the old chair wobbled every time someone sat down. He grabbed the right ______ to fix the wobbly chair leg.",
    options: ["tip", "tool", "term", "trick"], answer: 1, vocabIndex: 5 },
  { q: "The old structure offered an impressive view over the whole town. They climbed to the top of the old stone ______ for the view.",
    options: ["tent", "tank", "tower", "wood"], answer: 2, vocabIndex: 6 },
  { q: "Every December, the kitchen filled with the smell of fresh dough. Baking cookies together every December is a family ______.",
    options: ["trip", "trouble", "type", "tradition"], answer: 3, vocabIndex: 7 },
  { q: "The audience gasped as cards seemed to vanish right before their eyes. The magician performed an amazing ______ with playing cards.",
    options: ["trick", "tool", "term", "tip"], answer: 0, vocabIndex: 8 },
  { q: "Their luggage was packed and ready exactly seven days before they returned. Their ______ to the mountains lasted exactly one week.",
    options: ["tower", "trip", "tradition", "tank"], answer: 1, vocabIndex: 9 },
  { q: "His teacher wasn't pleased when his assignment was missing again. He got into ______ for forgetting his homework again.",
    options: ["talent", "tip", "trouble", "type"], answer: 2, vocabIndex: 10 },
  { q: "She prefers calmer melodies rather than upbeat, energetic ones. She prefers this ______ of music over loud, fast songs.",
    options: ["term", "trick", "tower", "type"], answer: 3, vocabIndex: 11 },
  { q: "They had been looking forward to some rest near the ocean for months. They planned a relaxing ______ at the beach this summer.",
    options: ["vacation", "victory", "value", "vocabulary"], answer: 0, vocabIndex: 12 },
  { q: "Collectors began offering much more money for the artwork as decades passed. The old painting increased in ______ over the years.",
    options: ["victory", "value", "vocabulary", "war"], answer: 1, vocabIndex: 13 },
  { q: "After a hard-fought match, the players couldn't stop smiling and cheering. The team celebrated their ______ with a big pizza party.",
    options: ["value", "vacation", "victory", "wedding"], answer: 2, vocabIndex: 14 },
  { q: "Picking up a new word every day slowly built her language skills. Reading every night helped improve her English ______.",
    options: ["value", "victory", "will", "vocabulary"], answer: 3, vocabIndex: 15 },
  { q: "The exhibit included handwritten messages sent home from soldiers long ago. The museum displayed old letters written during the ______.",
    options: ["war", "wedding", "wood", "wing"], answer: 0, vocabIndex: 16 },
  { q: "Family members gathered at the venue to celebrate the happy couple. She wore a beautiful dress to her cousin's ______.",
    options: ["war", "wedding", "vacation", "trip"], answer: 1, vocabIndex: 17 },
  { q: "Even exhausted and aching, she refused to stop before crossing the finish line. Her strong ______ helped her finish the marathon.",
    options: ["wing", "word", "will", "wood"], answer: 2, vocabIndex: 18 },
  { q: "The small creature had been hurt and needed time to heal completely. The injured bird could not move its ______ properly.",
    options: ["wood", "will", "word", "wing"], answer: 3, vocabIndex: 19 },
  { q: "He gathered a few materials from his workshop before starting a small project. He used soft ______ to carve a small wooden bird.",
    options: ["wood", "wing", "word", "will"], answer: 0, vocabIndex: 20 },
  { q: "An unfamiliar term appeared several times throughout her assigned reading. She looked up the unfamiliar ______ in her dictionary.",
    options: ["wing", "word", "wood", "will"], answer: 1, vocabIndex: 21 },
  { q: "On the first day back at school, the siblings matched perfectly without planning it. The twins dressed ______ for their first day.",
    options: ["alone", "single", "alike", "blank"], answer: 2, vocabIndex: 22 },
  { q: "She noticed the new bicycle reminded her instantly of her previous one. Her new bike looked very ______ to her old one.",
    options: ["alone", "empty", "else", "similar"], answer: 3, vocabIndex: 23 },
  { q: "The upstairs library was rarely crowded, which suited her perfectly for studying. She likes to study ______ in the quiet library upstairs.",
    options: ["alone", "alike", "similar", "another"], answer: 0, vocabIndex: 24 },
  { q: "He kept his replies short during the surprise interview today. He answered every question with just a ______ word.",
    options: ["alike", "single", "blank", "empty"], answer: 1, vocabIndex: 25 },
  { q: "She had accidentally grabbed the wrong sheet from her test booklet. She handed in a ______ page by mistake during the test.",
    options: ["single", "alike", "blank", "similar"], answer: 2, vocabIndex: 26 },
  { q: "The room felt unusually quiet once the last student walked out the door. The classroom looked strangely ______ after everyone went home.",
    options: ["blank", "alike", "single", "empty"], answer: 3, vocabIndex: 27 },
  { q: "They were getting ready to head out but wanted to double check everything first. Is there anything ______ you need before we leave?",
    options: ["else", "another", "alone", "similar"], answer: 0, vocabIndex: 28 },
  { q: "Her first cup of water hadn't quenched her thirst at all after the run. She asked the waiter for ______ glass of water.",
    options: ["else", "another", "single", "alone"], answer: 1, vocabIndex: 29 },
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
  "accuracy": { pos: "n.", en_def: "the quality of being correct or precise", cn_def: "準確性" },
  "aching": { pos: "adj.", en_def: "feeling continuous pain", cn_def: "疼痛的" },
  "aquarium": { pos: "n.", en_def: "a glass container or building used to keep fish", cn_def: "水族箱；水族館" },
  "artwork": { pos: "n.", en_def: "drawings, paintings, or other creative work", cn_def: "藝術作品" },
  "assigned reading": { pos: "n.", en_def: "reading material given as homework", cn_def: "指定閱讀" },
  "booklet": { pos: "n.", en_def: "a small, thin book", cn_def: "小冊子" },
  "campsite": { pos: "n.", en_def: "a place used for camping", cn_def: "營地" },
  "carve": { pos: "v.", en_def: "to cut a material into a shape", cn_def: "雕刻" },
  "collectors": { pos: "n.", en_def: "people who gather and keep objects of interest", cn_def: "收藏家（複數）" },
  "couple": { pos: "n.", en_def: "two people who are married or in a relationship", cn_def: "一對情侶/夫妻" },
  "deadline": { pos: "n.", en_def: "the latest time something must be finished", cn_def: "截止日期" },
  "decades": { pos: "n.", en_def: "periods of ten years", cn_def: "十年（複數）" },
  "dictionary": { pos: "n.", en_def: "a book that explains the meanings of words", cn_def: "字典" },
  "energetic": { pos: "adj.", en_def: "full of energy; active", cn_def: "精力充沛的" },
  "exhibit": { pos: "n.", en_def: "an object or display shown to the public", cn_def: "展覽品" },
  "gasped": { pos: "v.", en_def: "took a quick breath, often from surprise", cn_def: "喘氣；倒抽一口氣（過去式）" },
  "loan": { pos: "n.", en_def: "something borrowed, especially money or a book", cn_def: "借出（物）" },
  "marathon": { pos: "n.", en_def: "a long-distance running race", cn_def: "馬拉松" },
  "matched": { pos: "v.", en_def: "looked the same or went well together", cn_def: "相配；相符（過去式）" },
  "melodies": { pos: "n.", en_def: "pleasant sequences of musical notes", cn_def: "旋律（複數）" },
  "quenched": { pos: "v.", en_def: "satisfied thirst by drinking", cn_def: "解渴（過去式）" },
  "soldiers": { pos: "n.", en_def: "members of an army", cn_def: "士兵（複數）" },
  "trail": { pos: "n.", en_def: "a path, often through nature", cn_def: "山路；小徑" },
  "upbeat": { pos: "adj.", en_def: "cheerful and lively", cn_def: "輕快的；樂觀的" },
  "vanish": { pos: "v.", en_def: "to disappear suddenly", cn_def: "消失" },
  "venue": { pos: "n.", en_def: "the place where an event happens", cn_def: "場地" },
  "workshop": { pos: "n.", en_def: "a room or building where things are made or repaired", cn_def: "工作坊；工作室" },
};
Object.keys(EXTRA_GLOSSES).forEach(key => {
  const g = EXTRA_GLOSSES[key];
  if (!LOOKUP[key]) {
    LOOKUP[key] = { pos: g.pos, en_def: g.en_def, cn_def: g.cn_def, combined: [g] };
  }
});
