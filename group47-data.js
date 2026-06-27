// ============================================================
// Group 47 Quiz Data: Time / Numbers / Measures, Part 4 (FINAL)
// Full word set (30 words) — quantifiers, collective nouns, and
// indefinite pronouns, completing the "time / numbers /
// measures" theme (123 words total). Continues from Group 46
// (Time & Numbers, Part 3). This is the fourth and final of 4
// groups (44-47) covering this theme.
// Continues the simpler/shorter MCQ style introduced in
// Group 37 (~16-26 words, 2 sentences, one blank).
// Note: the spreadsheet's dictionary definitions for "nobody"
// ("a person of no influence") and "none" ("the ninth canonical
// hour") are unrelated senses; corrected here as the indefinite
// pronouns meaning "not anybody" and "not one," confirmed by
// the 沒有人 and 沒有一個 Chinese glosses.
// ============================================================

const QUIZ_CONFIG = {
  groupName: "Group 47 - Time / Numbers, Part 4 (時間與數字 四)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

// ---- Part 1 data: spelling practice (30 words) ----
const VOCAB = [
  { word: "more", pos: "adj.", cn_def: "更多的", en_def: "a greater amount of something",
    sentence: "She asked for {{BLANK}} time to finish her art project.",
    cn: "她要求更多時間來完成她的美術作品。" },
  { word: "many", pos: "adj.", cn_def: "許多", en_def: "a large number of something",
    sentence: "There were {{BLANK}} students waiting outside the classroom door.",
    cn: "教室門外有許多學生在等待。" },
  { word: "much", pos: "adj.", cn_def: "許多的", en_def: "a large amount of something",
    sentence: "He didn't have {{BLANK}} time left before the movie started.",
    cn: "他在電影開始前沒剩多少時間了。" },
  { word: "most", pos: "adj.", cn_def: "大部份的", en_def: "the largest amount or number of something",
    sentence: "{{BLANK}} of the students passed the difficult math test.",
    cn: "大部份的學生都通過了這次困難的數學考試。" },
  { word: "several", pos: "adj.", cn_def: "幾個的", en_def: "more than two or three, but not very many",
    sentence: "She tried {{BLANK}} different colors before choosing the right one.",
    cn: "她嘗試了幾種不同的顏色才選出對的那一個。" },
  { word: "some", pos: "det.", cn_def: "一些", en_def: "an unspecified number or amount of something",
    sentence: "Would you like {{BLANK}} more juice with your breakfast?",
    cn: "你早餐想再喝一些果汁嗎？" },
  { word: "couple", pos: "n.", cn_def: "對", en_def: "two people or things together",
    sentence: "A {{BLANK}} of birds landed gently on the windowsill.",
    cn: "一對鳥輕輕地降落在窗台上。" },
  { word: "pair", pos: "n.", cn_def: "一對", en_def: "two things of the same kind used together",
    sentence: "He bought a new {{BLANK}} of shoes for the school dance.",
    cn: "他為了學校舞會買了一雙新鞋。" },
  { word: "dozen", pos: "n.", cn_def: "一打", en_def: "a group of twelve",
    sentence: "She ordered a {{BLANK}} fresh eggs from the local farm.",
    cn: "她向當地農場訂了一打新鮮的雞蛋。" },
  { word: "drop", pos: "n.", cn_def: "一滴", en_def: "a small amount of liquid",
    sentence: "Just one {{BLANK}} of rain fell before the sky cleared up.",
    cn: "天空放晴前只下了一滴雨。" },
  { word: "piece", pos: "n.", cn_def: "一張(片、塊)", en_def: "a part of something larger",
    sentence: "She tore off a small {{BLANK}} of paper for her note.",
    cn: "她撕下一小張紙來寫她的便條。" },
  { word: "pile", pos: "v.", cn_def: "堆起", en_def: "to put things in a stack on top of each other",
    sentence: "He began to {{BLANK}} his old textbooks onto the desk.",
    cn: "他開始把他的舊課本堆在書桌上。" },
  { word: "loaf", pos: "n.", cn_def: "條(吐司)", en_def: "a shaped mass of baked bread",
    sentence: "She bought a fresh {{BLANK}} of bread from the bakery.",
    cn: "她從麵包店買了一條新鮮的麵包。" },
  { word: "bundle", pos: "n.", cn_def: "捆", en_def: "a group of things tied or wrapped together",
    sentence: "He carried a {{BLANK}} of old newspapers out to the recycling bin.",
    cn: "他拿著一捆舊報紙到回收桶。" },
  { word: "any", pos: "adj.", cn_def: "任何一個", en_def: "used to refer to one or some of a thing, no matter which",
    sentence: "Do you have {{BLANK}} questions about tonight's homework?",
    cn: "你對今晚的作業有任何問題嗎？" },
  { word: "anyone", pos: "n.", cn_def: "任何人", en_def: "any person at all",
    sentence: "Could {{BLANK}} help me carry these heavy boxes upstairs?",
    cn: "有任何人可以幫我把這些沉重的箱子搬上樓嗎？" },
  { word: "anything", pos: "n.", cn_def: "任何事情", en_def: "any thing at all",
    sentence: "She didn't say {{BLANK}} during the entire bus ride home.",
    cn: "她整段搭公車回家的路上什麼都沒說。" },
  { word: "anywhere", pos: "adv.", cn_def: "任何地方", en_def: "in or to any place at all",
    sentence: "He couldn't find his missing glasses {{BLANK}} in the house.",
    cn: "他在家裡任何地方都找不到他遺失的眼鏡。" },
  { word: "each", pos: "det.", cn_def: "每個", en_def: "used to refer to every individual thing in a group",
    sentence: "The teacher gave {{BLANK}} student a small gift before vacation.",
    cn: "老師在放假前給每個學生一份小禮物。" },
  { word: "every", pos: "det.", cn_def: "每一個", en_def: "used to refer to all members of a group without exception",
    sentence: "She checks her homework {{BLANK}} single night before bed.",
    cn: "她每天晚上睡前都會檢查她的作業。" },
  { word: "everyone", pos: "n.", cn_def: "每個人", en_def: "every person in a group",
    sentence: "{{BLANK}} cheered loudly when the home team scored the winning goal.",
    cn: "主隊得到致勝球時每個人都大聲歡呼。" },
  { word: "everything", pos: "n.", cn_def: "每件事情", en_def: "all things; every single thing",
    sentence: "She packed {{BLANK}} she needed for the weekend trip.",
    cn: "她把週末旅行需要的每件東西都打包好了。" },
  { word: "everywhere", pos: "adv.", cn_def: "到處", en_def: "in or to every place",
    sentence: "Colorful autumn leaves had fallen {{BLANK}} across the quiet park.",
    cn: "色彩鮮豔的秋葉飄落在這座安靜公園的到處。" },
  { word: "nobody", pos: "pron.", cn_def: "沒有人", en_def: "not anybody; no person",
    sentence: "{{BLANK}} answered when she knocked on the old front door.",
    cn: "她敲了那扇老舊前門時，沒有人回應。" },
  { word: "none", pos: "pron.", cn_def: "沒有一個(人或 物)", en_def: "not one of a group of people or things",
    sentence: "{{BLANK}} of the answers on the quiz seemed correct to him.",
    cn: "這次小考的答案他覺得沒有一個是對的。" },
  { word: "nothing", pos: "n.", cn_def: "沒什麼", en_def: "not anything; no single thing",
    sentence: "There was {{BLANK}} left in the fridge except an old apple.",
    cn: "冰箱裡除了一顆舊蘋果以外什麼都沒有。" },
  { word: "someone", pos: "n.", cn_def: "某人", en_def: "an unspecified or unknown person",
    sentence: "{{BLANK}} left a warm jacket hanging by the classroom door.",
    cn: "某人把一件溫暖的外套留在教室門邊。" },
  { word: "something", pos: "n.", cn_def: "某事", en_def: "an unspecified or unknown thing",
    sentence: "She could smell {{BLANK}} delicious coming from the kitchen.",
    cn: "她可以聞到廚房裡飄來某種美味的味道。" },
  { word: "sometimes", pos: "adv.", cn_def: "有時候", en_def: "on certain occasions, but not always",
    sentence: "He {{BLANK}} walks to school when the weather is nice.",
    cn: "天氣好的時候他有時候會走路去上學。" },
  { word: "somewhere", pos: "adv.", cn_def: "某處", en_def: "in, at, or to an unspecified place",
    sentence: "She hid the birthday gift {{BLANK}} inside the closet.",
    cn: "她把生日禮物藏在衣櫥裡的某處。" }
];

// ---- Part 2 data: 30 MCQs ----
// Continuing the simpler/shorter MCQ style from Group 37:
// ~16-26 words, exactly 2 sentences, one blank, 4 options.
// Answer letters balanced across A/B/C/D, no adjacent repeats.
// vocabIndex points to the exact VOCAB array entry being tested.
const MCQS = [
  { q: "She was still painting carefully when the class period ended. She asked for ______ time to finish her art project.",
    options: ["more", "less", "few", "each"], answer: 0, vocabIndex: 0 },
  { q: "The hallway was crowded before the first bell rang. There were ______ students waiting outside the classroom door.",
    options: ["each", "many", "every", "less"], answer: 1, vocabIndex: 1 },
  { q: "He kept checking the clock as the evening went on. He didn't have ______ time left before the movie started.",
    options: ["many", "every", "much", "each"], answer: 2, vocabIndex: 2 },
  { q: "The results came back better than the teacher expected. ______ of the students passed the difficult math test.",
    options: ["Much", "Every", "Each", "Most"], answer: 3, vocabIndex: 3 },
  { q: "She wanted the paint on her project to look just right. She tried ______ different colors before choosing the right one.",
    options: ["several", "every", "each", "much"], answer: 0, vocabIndex: 4 },
  { q: "Breakfast felt a little dry without something to drink. Would you like ______ more juice with your breakfast?",
    options: ["every", "some", "each", "any"], answer: 1, vocabIndex: 5 },
  { q: "She watched quietly from the kitchen window early that morning. A ______ of birds landed gently on the windowsill.",
    options: ["pair", "dozen", "couple", "bundle"], answer: 2, vocabIndex: 6 },
  { q: "The school dance was coming up fast that weekend. He bought a new ______ of shoes for the occasion.",
    options: ["couple", "dozen", "piece", "pair"], answer: 3, vocabIndex: 7 },
  { q: "She wanted fresh ingredients for her weekend baking plans. She ordered a ______ fresh eggs from the local farm.",
    options: ["dozen", "pair", "couple", "piece"], answer: 0, vocabIndex: 8 },
  { q: "The forecast had promised a storm, but barely anything happened. Just one ______ of rain fell before the sky cleared.",
    options: ["piece", "drop", "pile", "loaf"], answer: 1, vocabIndex: 9 },
  { q: "She needed something small to leave a quick message. She tore off a small ______ of paper for her note.",
    options: ["pile", "drop", "piece", "bundle"], answer: 2, vocabIndex: 10 },
  { q: "His desk had been getting messier all semester long. He began to ______ his old textbooks onto the desk.",
    options: ["drop", "loaf", "bundle", "pile"], answer: 3, vocabIndex: 11 },
  { q: "The smell of fresh baking filled the small shop that morning. She bought a fresh ______ of bread from the bakery.",
    options: ["loaf", "piece", "pile", "dozen"], answer: 0, vocabIndex: 12 },
  { q: "He wanted to clean up the recycling before trash day. He carried a ______ of old newspapers out to the bin.",
    options: ["piece", "bundle", "drop", "pair"], answer: 1, vocabIndex: 13 },
  { q: "The teacher wanted to make sure everyone understood the assignment clearly. Do you have ______ questions about tonight's homework?",
    options: ["some", "each", "any", "every"], answer: 2, vocabIndex: 14 },
  { q: "The boxes were too heavy to carry alone up the stairs. Could ______ help me carry these boxes upstairs?",
    options: ["everyone", "someone", "nobody", "anyone"], answer: 3, vocabIndex: 15 },
  { q: "She sat quietly staring out the window the whole ride home. She didn't say ______ during the entire bus ride.",
    options: ["anything", "something", "everything", "nothing"], answer: 0, vocabIndex: 16 },
  { q: "He searched every room twice but had no luck finding them. He couldn't find his missing glasses ______ in the house.",
    options: ["somewhere", "anywhere", "everywhere", "nowhere"], answer: 1, vocabIndex: 17 },
  { q: "It was the last day before the holiday break began. The teacher gave ______ student a small gift before vacation.",
    options: ["every", "any", "each", "some"], answer: 2, vocabIndex: 18 },
  { q: "Her nightly routine never changes, no matter how tired she is. She checks her homework ______ single night before bed.",
    options: ["each", "any", "some", "every"], answer: 3, vocabIndex: 19 },
  { q: "The crowd erupted with excitement at the final whistle. ______ cheered loudly when the home team scored the winning goal.",
    options: ["Everyone", "Anyone", "Someone", "Nobody"], answer: 0, vocabIndex: 20 },
  { q: "She made a careful list before leaving for the trip. She packed ______ she needed for the weekend trip.",
    options: ["anything", "everything", "something", "nothing"], answer: 1, vocabIndex: 21 },
  { q: "The autumn wind had scattered leaves all across the ground. Colorful leaves had fallen ______ across the quiet park.",
    options: ["somewhere", "anywhere", "everywhere", "nowhere"], answer: 2, vocabIndex: 22 },
  { q: "The old house felt eerily silent that quiet afternoon. ______ answered when she knocked on the old front door.",
    options: ["Anyone", "Everyone", "Someone", "Nobody"], answer: 3, vocabIndex: 23 },
  { q: "He reviewed his quiz answers carefully before turning it in. ______ of the answers on the quiz seemed correct to him.",
    options: ["None", "Some", "Many", "Every"], answer: 0, vocabIndex: 24 },
  { q: "She opened the fridge hoping for a late-night snack. There was ______ left except an old apple.",
    options: ["something", "nothing", "anything", "everything"], answer: 1, vocabIndex: 25 },
  { q: "A forgotten jacket hung quietly by the classroom door all day. ______ left a warm jacket hanging by the door.",
    options: ["Anyone", "Everyone", "Someone", "Nobody"], answer: 2, vocabIndex: 26 },
  { q: "A delicious smell drifted slowly from the kitchen that evening. She could smell ______ delicious coming from the kitchen.",
    options: ["anything", "everything", "nothing", "something"], answer: 3, vocabIndex: 27 },
  { q: "He doesn't always take the bus, depending on the weather. He ______ walks to school when the weather is nice.",
    options: ["sometimes", "everywhere", "anywhere", "somewhere"], answer: 0, vocabIndex: 28 },
  { q: "She didn't want her little brother to find the present too soon. She hid the gift ______ inside the closet.",
    options: ["everywhere", "somewhere", "anywhere", "nowhere"], answer: 1, vocabIndex: 29 },
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
  "bin": { pos: "n.", en_def: "a container used to hold trash or recycling", cn_def: "垂圾桶；回收桶" },
  "crowd": { pos: "n.", en_def: "a large group of people gathered together", cn_def: "人群" },
  "eerily": { pos: "adv.", en_def: "in a strange and frightening way", cn_def: "詭異地" },
  "erupted": { pos: "v.", en_def: "burst out suddenly with strong emotion or noise", cn_def: "爆發（過去式）" },
  "few": { pos: "adj.", en_def: "not many; a small number", cn_def: "一些" },
  "ingredients": { pos: "n.", en_def: "the items used to make a food dish", cn_def: "食材（複數）" },
  "less": { pos: "adj.", en_def: "a smaller amount of something", cn_def: "較少的" },
  "luck": { pos: "n.", en_def: "success that happens by chance", cn_def: "運氣" },
  "nowhere": { pos: "adv.", en_def: "not in or to any place", cn_def: "任何地方都不" },
  "occasion": { pos: "n.", en_def: "a special event or time", cn_def: "場合；時機" },
  "recycling": { pos: "n.", en_def: "the process of treating used items so they can be used again", cn_def: "回收" },
  "scattered": { pos: "v.", en_def: "spread or threw something in different directions", cn_def: "散落；分散（過去式）" },
  "semester": { pos: "n.", en_def: "half of a school year", cn_def: "學期" },
  "vacation": { pos: "n.", en_def: "a period of time spent away from home for rest or travel", cn_def: "假期" },
  "whistle": { pos: "n.", en_def: "a sound made by blowing through a small device, often used by referees", cn_def: "哨子聲" },
  "windowsill": { pos: "n.", en_def: "the ledge at the bottom of a window", cn_def: "窗台" },
};
Object.keys(EXTRA_GLOSSES).forEach(key => {
  const g = EXTRA_GLOSSES[key];
  if (!LOOKUP[key]) {
    LOOKUP[key] = { pos: g.pos, en_def: g.en_def, cn_def: g.cn_def, combined: [g] };
  }
});
