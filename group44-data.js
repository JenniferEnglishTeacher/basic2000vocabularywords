// ============================================================
// Group 44 Quiz Data: Time / Numbers / Measures, Part 1
// Full word set (31 words) — time of day, dates, and basic
// numbers from the new "time / numbers / measures" theme (123
// words total). This is the first of 4 groups (44-47) covering
// this theme at ~31 words per group.
// Continues the simpler/shorter MCQ style introduced in
// Group 37 (~16-26 words, 2 sentences, one blank).
// Note: the spreadsheet's dictionary definition for "eve" is
// the biblical name "Eve" (Adam's wife), not the intended word;
// corrected here using the 前夕 Chinese gloss as confirmation
// (the evening or day before an event).
// ============================================================

const QUIZ_CONFIG = {
  groupName: "Group 44 - Time / Numbers, Part 1 (時間與數字 一)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

// ---- Part 1 data: spelling practice (31 words) ----
const VOCAB = [
  { word: "future", pos: "n.", cn_def: "未來", en_def: "the time that has not happened yet",
    sentence: "She often dreams about her {{BLANK}} as a famous doctor.",
    cn: "她常常夢想自己未來成為一名知名的醫生。" },
  { word: "a.m.", pos: "adv.", cn_def: "上午", en_def: "used to describe the time before noon",
    sentence: "The first class begins at eight {{BLANK}} every weekday.",
    cn: "每個工作日的第一堂課在上午八點開始。" },
  { word: "p.m.", pos: "adv.", cn_def: "午後", en_def: "used to describe the time between noon and midnight",
    sentence: "Our movie starts at seven thirty {{BLANK}} tonight.",
    cn: "我們今晚的電影在下午七點半開始。" },
  { word: "morning", pos: "n.", cn_def: "早上", en_def: "the early part of the day before noon",
    sentence: "She always drinks a cup of tea in the {{BLANK}}.",
    cn: "她早上總是喝一杯茶。" },
  { word: "noon", pos: "n.", cn_def: "中午", en_def: "twelve o'clock in the middle of the day",
    sentence: "We usually eat lunch together at {{BLANK}} on weekdays.",
    cn: "我們平常工作日的中午會一起吃午餐。" },
  { word: "afternoon", pos: "n.", cn_def: "下午", en_def: "the part of the day between noon and evening",
    sentence: "He takes a short nap every {{BLANK}} after school.",
    cn: "他放學後每天下午都會小睡一下。" },
  { word: "eve", pos: "n.", cn_def: "前夕", en_def: "the evening or day before a special event",
    sentence: "The whole family gathers together on Christmas {{BLANK}}.",
    cn: "全家人會在聖誕節前夕聚在一起。" },
  { word: "evening", pos: "n.", cn_def: "傍晚", en_def: "the part of the day between afternoon and night",
    sentence: "They like to take a quiet walk in the {{BLANK}}.",
    cn: "他們喜歡在傍晚散步。" },
  { word: "night", pos: "n.", cn_def: "晚上", en_def: "the time when it is dark outside",
    sentence: "She studies for her exams late into the {{BLANK}}.",
    cn: "她常常很晚還在熬夜準備考試。" },
  { word: "midnight", pos: "n.", cn_def: "午夜", en_def: "twelve o'clock at night",
    sentence: "The party didn't end until well past {{BLANK}}.",
    cn: "派對一直到午夜過後很久才結束。" },
  { word: "dawn", pos: "n.", cn_def: "黎明", en_def: "the first light of the day",
    sentence: "The fishermen leave the harbor before {{BLANK}} every morning.",
    cn: "漁夫每天早上都在黎明前就離開港口。" },
  { word: "today", pos: "adv.", cn_def: "今天", en_def: "on this present day",
    sentence: "We have a big science test {{BLANK}} after lunch.",
    cn: "我們今天午餐後有一場重要的科學考試。" },
  { word: "yesterday", pos: "adv.", cn_def: "昨天", en_def: "on the day before today",
    sentence: "She lost her favorite scarf somewhere {{BLANK}} afternoon.",
    cn: "她昨天下午在某處丟了她最喜歡的圍巾。" },
  { word: "tomorrow", pos: "n.", cn_def: "明天", en_def: "the day after today",
    sentence: "He promised to call his grandmother {{BLANK}} morning.",
    cn: "他答應明天早上要打電話給奶奶。" },
  { word: "tonight", pos: "adv.", cn_def: "今晚", en_def: "during the night of the present day",
    sentence: "We plan to watch the meteor shower {{BLANK}} together.",
    cn: "我們計畫今晚一起看流星雨。" },
  { word: "year", pos: "n.", cn_def: "年", en_def: "a period of twelve months",
    sentence: "My family always visits my grandparents once a {{BLANK}}.",
    cn: "我們家每年都會去探望祖父母一次。" },
  { word: "month", pos: "n.", cn_def: "月", en_def: "one of the twelve parts of a year",
    sentence: "She started her new job just one {{BLANK}} ago.",
    cn: "她開始新工作才剛一個月。" },
  { word: "day", pos: "n.", cn_def: "天", en_def: "a period of twenty-four hours",
    sentence: "He counted down every {{BLANK}} until summer vacation began.",
    cn: "他每天倒數計算著暑假開始前的日子。" },
  { word: "daily", pos: "adj.", cn_def: "每日的", en_def: "happening every day",
    sentence: "Walking the dog has become part of her {{BLANK}} routine.",
    cn: "遛狗已經成為她每日的固定習慣。" },
  { word: "date", pos: "n.", cn_def: "日期", en_def: "the specific day, month, and year of an event",
    sentence: "She forgot to write the {{BLANK}} at the top of her test.",
    cn: "她忘了在考卷最上面寫上日期。" },
  { word: "time", pos: "n.", cn_def: "時間", en_def: "the ongoing flow of events measured in hours and minutes",
    sentence: "Do you have enough {{BLANK}} to help me with my homework?",
    cn: "你有足夠的時間幫我做作業嗎？" },
  { word: "o'clock", pos: "adv.", cn_def: "點鐘", en_def: "used after a number to say the exact hour",
    sentence: "We agreed to meet at the station at six {{BLANK}}.",
    cn: "我們約好六點鐘在車站見面。" },
  { word: "hour", pos: "n.", cn_def: "小時", en_def: "a unit of time equal to sixty minutes",
    sentence: "The flight to Tokyo takes about three {{BLANK}}s.",
    cn: "飛往東京的班機大約需要三個小時。" },
  { word: "minute", pos: "n.", cn_def: "分鐘", en_def: "a unit of time equal to sixty seconds",
    sentence: "Please wait just one {{BLANK}} while I find my keys.",
    cn: "請等我一分鐘，我去找鑰匙。" },
  { word: "amount", pos: "n.", cn_def: "總數", en_def: "a quantity of something",
    sentence: "She was surprised by the large {{BLANK}} of homework tonight.",
    cn: "她對今晚的大量作業感到驚訝。" },
  { word: "number", pos: "n.", cn_def: "號碼", en_def: "a word or symbol used for counting",
    sentence: "He wrote his phone {{BLANK}} on a small piece of paper.",
    cn: "他把他的電話號碼寫在一張小紙片上。" },
  { word: "zero", pos: "n.", cn_def: "零（0）", en_def: "the number that means nothing or none",
    sentence: "The thermometer outside showed exactly {{BLANK}} degrees this morning.",
    cn: "今天早上外面的溫度計顯示正好零度。" },
  { word: "one", pos: "n.", cn_def: "一（1）", en_def: "the number 1",
    sentence: "She only needed {{BLANK}} more sticker to finish her collection.",
    cn: "她只需要再一張貼紙就能完成她的收藏。" },
  { word: "two", pos: "n.", cn_def: "二（2）", en_def: "the number 2",
    sentence: "He has {{BLANK}} younger sisters who both love to dance.",
    cn: "他有兩個妹妹，她們都很喜歡跳舞。" },
  { word: "three", pos: "n.", cn_def: "三（3）", en_def: "the number 3",
    sentence: "The recipe calls for {{BLANK}} cups of flour and two eggs.",
    cn: "這個食譜需要三杯麵粉和兩顆蛋。" },
  { word: "four", pos: "n.", cn_def: "四（4）", en_def: "the number 4",
    sentence: "We waited in line for almost {{BLANK}} hours at the theme park.",
    cn: "我們在主題樂園排隊等了將近四個小時。" }
];

// ---- Part 2 data: 31 MCQs ----
// Continuing the simpler/shorter MCQ style from Group 37:
// ~16-26 words, exactly 2 sentences, one blank, 4 options.
// Answer letters balanced across A/B/C/D, no adjacent repeats.
// vocabIndex points to the exact VOCAB array entry being tested.
const MCQS = [
  { q: "She works hard in school and has big plans after graduation. She often dreams about her ______ as a famous doctor.",
    options: ["future", "past", "history", "habit"], answer: 0, vocabIndex: 0 },
  { q: "School starts very early for everyone in her class. The first class begins at eight ______ every weekday.",
    options: ["p.m.", "a.m.", "o'clock", "hour"], answer: 1, vocabIndex: 1 },
  { q: "They were excited about their plans for the evening. Our movie starts at seven thirty ______ tonight.",
    options: ["a.m.", "noon", "p.m.", "midnight"], answer: 2, vocabIndex: 2 },
  { q: "She has a calm daily habit before heading to work. She always drinks a cup of tea in the ______.",
    options: ["evening", "midnight", "afternoon", "morning"], answer: 3, vocabIndex: 3 },
  { q: "It's the middle of the workday for many busy employees. We usually eat lunch together at ______ on weekdays.",
    options: ["noon", "dawn", "midnight", "evening"], answer: 0, vocabIndex: 4 },
  { q: "He feels tired after a long morning at school. He takes a short nap every ______ after class.",
    options: ["morning", "afternoon", "dawn", "midnight"], answer: 1, vocabIndex: 5 },
  { q: "It's a special tradition the night before a big holiday. The whole family gathers together on Christmas ______.",
    options: ["morning", "noon", "eve", "dawn"], answer: 2, vocabIndex: 6 },
  { q: "They enjoy a peaceful routine after dinner each day. They like to take a quiet walk in the ______.",
    options: ["noon", "dawn", "morning", "evening"], answer: 3, vocabIndex: 7 },
  { q: "She has an important test coming up soon. She studies for her exams late into the ______.",
    options: ["night", "afternoon", "noon", "dawn"], answer: 0, vocabIndex: 8 },
  { q: "The celebration lasted much longer than anyone expected. The party didn't end until well past ______.",
    options: ["noon", "midnight", "dawn", "morning"], answer: 1, vocabIndex: 9 },
  { q: "They start their work before most people are even awake. The fishermen leave the harbor before ______ every day.",
    options: ["midnight", "noon", "dawn", "evening"], answer: 2, vocabIndex: 10 },
  { q: "Students were nervous about an important subject this week. We have a big science test ______ after lunch.",
    options: ["yesterday", "tomorrow", "tonight", "today"], answer: 3, vocabIndex: 11 },
  { q: "She searched everywhere but couldn't remember where she had been. She lost her scarf somewhere ______ afternoon.",
    options: ["yesterday", "today", "tomorrow", "tonight"], answer: 0, vocabIndex: 12 },
  { q: "He wanted to make sure he didn't forget an important call. He promised to call his grandmother ______ morning.",
    options: ["yesterday", "tomorrow", "today", "tonight"], answer: 1, vocabIndex: 13 },
  { q: "There was a rare event happening in the sky this evening. We plan to watch the meteor shower ______ together.",
    options: ["yesterday", "today", "tonight", "tomorrow"], answer: 2, vocabIndex: 14 },
  { q: "It's a family tradition that happens once every twelve months. My family always visits my grandparents once a ______.",
    options: ["day", "week", "month", "year"], answer: 3, vocabIndex: 15 },
  { q: "She is still getting used to her new workplace. She started her new job just one ______ ago.",
    options: ["month", "year", "week", "hour"], answer: 0, vocabIndex: 16 },
  { q: "He is excited and impatient for the school break. He counted down every ______ until summer vacation began.",
    options: ["year", "day", "month", "minute"], answer: 1, vocabIndex: 17 },
  { q: "Taking the dog out happens at the same time every single day. Walking the dog has become part of her ______ routine.",
    options: ["weekly", "yearly", "daily", "monthly"], answer: 2, vocabIndex: 18 },
  { q: "She was in a hurry while filling out her test paper. She forgot to write the ______ at the top.",
    options: ["name", "number", "time", "date"], answer: 3, vocabIndex: 19 },
  { q: "He has a lot of homework but a busy schedule too. Do you have enough ______ to help me with mine?",
    options: ["time", "money", "energy", "space"], answer: 0, vocabIndex: 20 },
  { q: "They planned to meet at a specific hour before the trip. We agreed to meet at the station at six ______.",
    options: ["minute", "o'clock", "hour", "second"], answer: 1, vocabIndex: 21 },
  { q: "The journey to another country took quite a while. The flight to Tokyo takes about three ______s.",
    options: ["minute", "second", "hour", "day"], answer: 2, vocabIndex: 22 },
  { q: "She was almost ready to leave but needed something first. Please wait just one ______ while I find my keys.",
    options: ["hour", "day", "week", "minute"], answer: 3, vocabIndex: 23 },
  { q: "She wasn't expecting such a heavy workload tonight. She was surprised by the large ______ of homework.",
    options: ["amount", "number", "size", "weight"], answer: 0, vocabIndex: 24 },
  { q: "He wanted his friend to be able to contact him later. He wrote his phone ______ on a small piece of paper.",
    options: ["amount", "number", "date", "size"], answer: 1, vocabIndex: 25 },
  { q: "It was an unusually cold start to the day outside. The thermometer outside showed exactly ______ degrees this morning.",
    options: ["one", "ten", "zero", "hundred"], answer: 2, vocabIndex: 26 },
  { q: "She was almost finished with her hobby project at home. She only needed ______ more sticker to finish her collection.",
    options: ["zero", "two", "three", "one"], answer: 3, vocabIndex: 27 },
  { q: "His family is full of energetic and creative siblings. He has ______ younger sisters who both love to dance.",
    options: ["two", "one", "three", "four"], answer: 0, vocabIndex: 28 },
  { q: "She was preparing to bake something special for the weekend. The recipe calls for ______ cups of flour and two eggs.",
    options: ["one", "three", "two", "four"], answer: 1, vocabIndex: 29 },
  { q: "The line for the popular ride seemed to stretch on forever. We waited in line for almost ______ hours at the park.",
    options: ["two", "three", "four", "five"], answer: 2, vocabIndex: 30 },
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
  "collection": { pos: "n.", en_def: "a group of similar items gathered together", cn_def: "收藏品" },
  "creative": { pos: "adj.", en_def: "having good imagination or new ideas", cn_def: "有創意的" },
  "degrees": { pos: "n.", en_def: "units used to measure temperature", cn_def: "度（溫度單位，複數）" },
  "energetic": { pos: "adj.", en_def: "full of energy; active", cn_def: "精力充沛的" },
  "energy": { pos: "n.", en_def: "the strength needed for activity", cn_def: "精力；能量" },
  "fishermen": { pos: "n.", en_def: "people who catch fish for a living", cn_def: "漁夫（複數）" },
  "five": { pos: "n.", en_def: "the number 5", cn_def: "五（5）" },
  "flour": { pos: "n.", en_def: "a powder made from grain, used for baking", cn_def: "麵粉" },
  "graduation": { pos: "n.", en_def: "the act of completing a course of study", cn_def: "畢業" },
  "habit": { pos: "n.", en_def: "something a person does often and regularly", cn_def: "習慣" },
  "harbor": { pos: "n.", en_def: "an area of water near land where ships can dock safely", cn_def: "港口" },
  "history": { pos: "n.", en_def: "events that happened in the past", cn_def: "歷史" },
  "hobby": { pos: "n.", en_def: "an activity done for pleasure in free time", cn_def: "愛好；興趣" },
  "hundred": { pos: "n.", en_def: "the number 100", cn_def: "百" },
  "meteor shower": { pos: "n.", en_def: "an event when many meteors appear in the sky", cn_def: "流星雨" },
  "money": { pos: "n.", en_def: "coins and paper notes used to buy things", cn_def: "錢" },
  "monthly": { pos: "adj.", en_def: "happening once a month", cn_def: "每月的" },
  "name": { pos: "n.", en_def: "what a person or thing is called", cn_def: "名字" },
  "past": { pos: "n.", en_def: "the time before now", cn_def: "過去" },
  "recipe": { pos: "n.", en_def: "a set of instructions for preparing food", cn_def: "食譜" },
  "scarf": { pos: "n.", en_def: "a long piece of cloth worn around the neck", cn_def: "圍巾" },
  "second": { pos: "n.", en_def: "a unit of time equal to one-sixtieth of a minute", cn_def: "秒" },
  "siblings": { pos: "n.", en_def: "brothers or sisters", cn_def: "兄弟姊妹（複數）" },
  "size": { pos: "n.", en_def: "how big or small something is", cn_def: "尺寸" },
  "space": { pos: "n.", en_def: "an empty area, or available time", cn_def: "空間" },
  "sticker": { pos: "n.", en_def: "a small piece of paper with adhesive backing", cn_def: "貼紙" },
  "ten": { pos: "n.", en_def: "the number 10", cn_def: "十（10）" },
  "theme park": { pos: "n.", en_def: "a large outdoor area with rides and attractions", cn_def: "主題樂園" },
  "thermometer": { pos: "n.", en_def: "a device used to measure temperature", cn_def: "溫度計" },
  "tradition": { pos: "n.", en_def: "a custom passed down over time", cn_def: "傳統" },
  "week": { pos: "n.", en_def: "a period of seven days", cn_def: "星期" },
  "weekly": { pos: "adj.", en_def: "happening once a week", cn_def: "每週的" },
  "weight": { pos: "n.", en_def: "how heavy something is", cn_def: "重量" },
  "workload": { pos: "n.", en_def: "the amount of work to be done", cn_def: "工作量" },
  "workplace": { pos: "n.", en_def: "the place where a person works", cn_def: "工作場所" },
  "yearly": { pos: "adj.", en_def: "happening once a year", cn_def: "每年的" },
};
Object.keys(EXTRA_GLOSSES).forEach(key => {
  const g = EXTRA_GLOSSES[key];
  if (!LOOKUP[key]) {
    LOOKUP[key] = { pos: g.pos, en_def: g.en_def, cn_def: g.cn_def, combined: [g] };
  }
});
