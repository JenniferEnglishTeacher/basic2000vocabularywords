// ============================================================
// Group 46 Quiz Data: Time / Numbers / Measures, Part 3
// Full word set (31 words) — units of measurement, large
// numbers, shapes, and basic quantifiers from the "time /
// numbers / measures" theme. Continues from Group 45 (Time &
// Numbers, Part 2). This is the third of 4 groups (44-47)
// covering this theme at ~31 words per group.
// Continues the simpler/shorter MCQ style introduced in
// Group 37 (~16-26 words, 2 sentences, one blank).
// Note: the spreadsheet's dictionary definition for "a an" is
// a nonsensical entry ("an associate degree in nursing"); this
// is the indefinite article a/an, corrected here accordingly.
// ============================================================

const QUIZ_CONFIG = {
  groupName: "Group 46 - Time / Numbers, Part 3 (時間與數字 三)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

// ---- Part 1 data: spelling practice (31 words) ----
const VOCAB = [
  { word: "size", pos: "n.", cn_def: "尺寸", en_def: "how big or small something is",
    sentence: "She asked the clerk for a smaller {{BLANK}} of the same shoes.",
    cn: "她請店員幫她找同款但較小尺寸的鞋子。" },
  { word: "centimeter", pos: "n.", cn_def: "公分", en_def: "a metric unit of length equal to one hundredth of a meter",
    sentence: "The ruler showed the pencil was exactly fifteen {{BLANK}}s long.",
    cn: "尺顯示這支鉛筆正好十五公分長。" },
  { word: "inch", pos: "n.", cn_def: "英吋", en_def: "a unit of length equal to one twelfth of a foot",
    sentence: "The new phone screen measures about six {{BLANK}}es across.",
    cn: "這款新手機的螢幕大約有六英吋寬。" },
  { word: "meter", pos: "n.", cn_def: "公尺", en_def: "the basic metric unit of length",
    sentence: "The swimming pool at school is twenty-five {{BLANK}}s long.",
    cn: "學校的游泳池長二十五公尺。" },
  { word: "kilometer", pos: "n.", cn_def: "公里", en_def: "a metric unit of length equal to 1,000 meters",
    sentence: "Her house is about three {{BLANK}}s away from the school.",
    cn: "她家距離學校大約三公里。" },
  { word: "mile", pos: "n.", cn_def: "英哩", en_def: "a unit of length equal to about 1.6 kilometers",
    sentence: "He runs about two {{BLANK}}s every morning before breakfast.",
    cn: "他每天早餐前都會跑大約兩英哩。" },
  { word: "gram", pos: "n.", cn_def: "公克", en_def: "a metric unit of weight equal to one thousandth of a kilogram",
    sentence: "The recipe calls for two hundred {{BLANK}}s of flour.",
    cn: "這個食譜需要兩百公克的麵粉。" },
  { word: "kilogram", pos: "n.", cn_def: "公斤", en_def: "a metric unit of weight equal to one thousand grams",
    sentence: "The baby weighed about three {{BLANK}}s at birth.",
    cn: "這個寶寶出生時大約三公斤重。" },
  { word: "liter", pos: "n.", cn_def: "公升", en_def: "a metric unit used to measure liquid",
    sentence: "She bought a two-{{BLANK}} bottle of orange juice at the store.",
    cn: "她在店裡買了一瓶兩公升的橘子汁。" },
  { word: "hundred", pos: "n.", cn_def: "百", en_def: "the number 100",
    sentence: "Over one {{BLANK}} students signed up for the school trip.",
    cn: "超過一百名學生報名參加這次校外教學。" },
  { word: "thousand", pos: "n.", cn_def: "千", en_def: "the number 1,000",
    sentence: "The stadium can hold more than ten {{BLANK}} fans.",
    cn: "這座體育場可以容納超過一萬名觀眾。" },
  { word: "million", pos: "n.", cn_def: "百萬", en_def: "the number 1,000,000",
    sentence: "The popular video reached over one {{BLANK}} views in a week.",
    cn: "這部熱門影片在一週內就突破了一百萬次觀看。" },
  { word: "quarter", pos: "n.", cn_def: "四分之一", en_def: "one of four equal parts of something",
    sentence: "She cut the apple pie into a {{BLANK}} and shared the rest.",
    cn: "她把蘋果派切了四分之一，剩下的拿去分享。" },
  { word: "measure", pos: "v.", cn_def: "測量", en_def: "to find the size or amount of something",
    sentence: "He used a tape to {{BLANK}} the length of the table.",
    cn: "他用一條尺帶來測量桌子的長度。" },
  { word: "heat", pos: "n.", cn_def: "熱度", en_def: "the quality of being hot",
    sentence: "Everyone stayed indoors because of the extreme summer {{BLANK}}.",
    cn: "由於夏天酷熱，大家都待在室內。" },
  { word: "height", pos: "n.", cn_def: "高度", en_def: "how tall a person or thing is",
    sentence: "The nurse checked her {{BLANK}} during the yearly checkup.",
    cn: "護士在每年的健康檢查中測量了她的身高。" },
  { word: "weight", pos: "n.", cn_def: "重量", en_def: "how heavy a person or thing is",
    sentence: "The doctor recorded his {{BLANK}} before the appointment ended.",
    cn: "醫生在看診結束前記錄了他的體重。" },
  { word: "heavy", pos: "adj.", cn_def: "重的", en_def: "weighing a lot",
    sentence: "The {{BLANK}} backpack made it hard for him to climb the stairs.",
    cn: "這個沉重的背包讓他爬樓梯變得很困難。" },
  { word: "over-weight", pos: "adj.", cn_def: "超(過)重的", en_def: "weighing more than is healthy or allowed",
    sentence: "The airline charged extra for the {{BLANK}} suitcase.",
    cn: "這家航空公司對超重的行李箱收取額外費用。" },
  { word: "high", pos: "adj.", cn_def: "高的", en_def: "having a great distance from top to bottom",
    sentence: "The climbers reached the {{BLANK}}est point on the mountain by noon.",
    cn: "登山客在中午前抵達了這座山的最高點。" },
  { word: "low", pos: "adj.", cn_def: "小聲的", en_def: "not loud; quiet in volume",
    sentence: "She spoke in a {{BLANK}} voice so she wouldn't wake the baby.",
    cn: "她說話聲音很小，以免吵醒寶寶。" },
  { word: "shape", pos: "n.", cn_def: "形狀", en_def: "the outer form or outline of something",
    sentence: "The cookie cutter pressed the dough into a star {{BLANK}}.",
    cn: "餅乾模把麵團壓成星星的形狀。" },
  { word: "rectangle", pos: "n.", cn_def: "長方形", en_def: "a shape with four sides and four right angles",
    sentence: "She drew a large {{BLANK}} to represent the classroom on the map.",
    cn: "她畫了一個大長方形來代表地圖上的教室。" },
  { word: "triangle", pos: "n.", cn_def: "三角形", en_def: "a shape with three straight sides",
    sentence: "He folded the paper twice to make a small {{BLANK}}.",
    cn: "他把紙對折兩次做成一個小三角形。" },
  { word: "round", pos: "adj.", cn_def: "圓形的", en_def: "shaped like a circle",
    sentence: "The table in the kitchen is small and perfectly {{BLANK}}.",
    cn: "廚房裡的桌子又小又非常圓。" },
  { word: "a/an", pos: "art.", cn_def: "一個", en_def: "used before a noun to mean one of something",
    sentence: "She wanted to buy {{BLANK}} umbrella before the rain started.",
    cn: "她想在下雨前買一把雨傘。" },
  { word: "a few", pos: "adv.", cn_def: "一些", en_def: "a small number of something",
    sentence: "He only needed {{BLANK}} more minutes to finish his homework.",
    cn: "他只需要再幾分鐘就能完成作業。" },
  { word: "a little", pos: "adv.", cn_def: "少量", en_def: "a small amount of something",
    sentence: "She added {{BLANK}} salt to the soup before serving it.",
    cn: "她在端出湯之前加了一點點鹽。" },
  { word: "a lot", pos: "adv.", cn_def: "大量", en_def: "a large amount of something",
    sentence: "He learned {{BLANK}} about history during his trip to the museum.",
    cn: "他在這次博物館之旅中學到了很多歷史知識。" },
  { word: "few", pos: "adj.", cn_def: "一些", en_def: "not many; a small number",
    sentence: "Very {{BLANK}} students stayed after class to ask questions.",
    cn: "下課後留下來問問題的學生很少。" },
  { word: "less", pos: "adj.", cn_def: "較少的", en_def: "a smaller amount of something",
    sentence: "She tried to spend {{BLANK}} time on her phone this week.",
    cn: "她這個星期試著少花一點時間看手機。" }
];

// ---- Part 2 data: 31 MCQs ----
// Continuing the simpler/shorter MCQ style from Group 37:
// ~16-26 words, exactly 2 sentences, one blank, 4 options.
// Answer letters balanced across A/B/C/D, no adjacent repeats.
// vocabIndex points to the exact VOCAB array entry being tested.
const MCQS = [
  { q: "The shoes she tried on were a little too tight. She asked the clerk for a smaller ______ of the same pair.",
    options: ["size", "shape", "weight", "height"], answer: 0, vocabIndex: 0 },
  { q: "She was checking her homework before turning it in. The ruler showed the pencil was exactly fifteen ______s long.",
    options: ["inch", "centimeter", "meter", "mile"], answer: 1, vocabIndex: 1 },
  { q: "He was comparing different phone models at the store. The new phone screen measures about six ______es across.",
    options: ["centimeter", "meter", "inch", "kilometer"], answer: 2, vocabIndex: 2 },
  { q: "She practices swimming every weekend after school. The swimming pool at school is twenty-five ______s long.",
    options: ["inch", "centimeter", "mile", "meter"], answer: 3, vocabIndex: 3 },
  { q: "He walks to school with his neighbor every morning. Her house is about three ______s away from the school.",
    options: ["kilometer", "meter", "mile", "centimeter"], answer: 0, vocabIndex: 4 },
  { q: "Staying active is part of his daily morning routine. He runs about two ______s every morning before breakfast.",
    options: ["kilometer", "mile", "meter", "centimeter"], answer: 1, vocabIndex: 5 },
  { q: "She is baking a cake for the weekend with her mom. The recipe calls for two hundred ______s of flour.",
    options: ["kilogram", "liter", "gram", "meter"], answer: 2, vocabIndex: 6 },
  { q: "The new parents shared the happy news with their family. The baby weighed about three ______s at birth.",
    options: ["gram", "liter", "pound", "kilogram"], answer: 3, vocabIndex: 7 },
  { q: "She was restocking the fridge with fresh drinks for the week. She bought a two-______ bottle of orange juice.",
    options: ["liter", "gram", "kilogram", "mile"], answer: 0, vocabIndex: 8 },
  { q: "The school's annual trip is always very popular. Over one ______ students signed up for the trip.",
    options: ["thousand", "hundred", "million", "dozen"], answer: 1, vocabIndex: 9 },
  { q: "The concert venue is known for being especially large. The stadium can hold more than ten ______ fans.",
    options: ["hundred", "million", "thousand", "dozen"], answer: 2, vocabIndex: 10 },
  { q: "The video went viral almost overnight online. It reached over one ______ views in a week.",
    options: ["hundred", "thousand", "dozen", "million"], answer: 3, vocabIndex: 11 },
  { q: "There was plenty of pie left after the family party. She cut the apple pie into a ______ and shared the rest.",
    options: ["quarter", "half", "slice", "piece"], answer: 0, vocabIndex: 12 },
  { q: "He was building a small wooden shelf for his room. He used a tape to ______ the length of the table.",
    options: ["count", "measure", "divide", "weigh"], answer: 1, vocabIndex: 13 },
  { q: "Nobody wanted to go outside during the hottest part of summer. Everyone stayed indoors because of the extreme summer ______.",
    options: ["weight", "height", "heat", "shape"], answer: 2, vocabIndex: 14 },
  { q: "She had her yearly physical exam at the clinic this morning. The nurse checked her ______ during the checkup.",
    options: ["weight", "heat", "shape", "height"], answer: 3, vocabIndex: 15 },
  { q: "The doctor reviewed several health details during the visit. He recorded his ______ before the appointment ended.",
    options: ["weight", "height", "heat", "size"], answer: 0, vocabIndex: 16 },
  { q: "Carrying his school bag up the stairs wasn't easy today. The ______ backpack made it hard for him to climb.",
    options: ["light", "heavy", "small", "soft"], answer: 1, vocabIndex: 17 },
  { q: "She had to pay extra fees at the airport check-in counter. The airline charged extra for the ______ suitcase.",
    options: ["heavy", "light", "over-weight", "small"], answer: 2, vocabIndex: 18 },
  { q: "The hikers worked hard to finish their climb before lunchtime. They reached the ______est point on the mountain by noon.",
    options: ["low", "round", "heavy", "high"], answer: 3, vocabIndex: 19 },
  { q: "It was very late, and the house was completely quiet. She spoke in a ______ voice so she wouldn't wake the baby.",
    options: ["low", "high", "loud", "round"], answer: 0, vocabIndex: 20 },
  { q: "She was decorating cookies for a holiday party this weekend. The cookie cutter pressed the dough into a star ______.",
    options: ["size", "shape", "weight", "height"], answer: 1, vocabIndex: 21 },
  { q: "She was drawing a simple floor plan for her class project. She drew a large ______ to represent the classroom.",
    options: ["triangle", "circle", "rectangle", "square"], answer: 2, vocabIndex: 22 },
  { q: "He was making paper decorations for the classroom party. He folded the paper twice to make a small ______.",
    options: ["rectangle", "circle", "square", "triangle"], answer: 3, vocabIndex: 23 },
  { q: "The kitchen furniture was chosen carefully to fit the small space. The table in the kitchen is small and perfectly ______.",
    options: ["round", "square", "triangle", "rectangle"], answer: 0, vocabIndex: 24 },
  { q: "She checked the weather forecast before leaving the house. She wanted to buy ______ umbrella before the rain started.",
    options: ["the", "a/an", "some", "many"], answer: 1, vocabIndex: 25 },
  { q: "He was almost finished with tonight's assignment. He only needed ______ more minutes to finish his homework.",
    options: ["a little", "much", "a few", "less"], answer: 2, vocabIndex: 26 },
  { q: "The soup tasted a bit bland before she fixed it. She added ______ salt to the soup before serving it.",
    options: ["a few", "many", "less", "a little"], answer: 3, vocabIndex: 27 },
  { q: "His school trip to the museum was full of new discoveries. He learned ______ about history during his visit.",
    options: ["a lot", "a little", "a few", "less"], answer: 0, vocabIndex: 28 },
  { q: "The lecture ended quickly, and most students left right away. Very ______ students stayed after class to ask questions.",
    options: ["a lot", "few", "much", "more"], answer: 1, vocabIndex: 29 },
  { q: "She noticed she was spending too much time scrolling lately. She tried to spend ______ time on her phone this week.",
    options: ["more", "many", "less", "much"], answer: 2, vocabIndex: 30 },
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
  "a": { pos: "art.", en_def: "used before a noun to mean one of something", cn_def: "一個" },
  "annual": { pos: "adj.", en_def: "happening once a year", cn_def: "年度的" },
  "appointment": { pos: "n.", en_def: "an arranged meeting, often with a doctor", cn_def: "（看診）約診" },
  "checkup": { pos: "n.", en_def: "a routine medical examination", cn_def: "健康檢查" },
  "circle": { pos: "n.", en_def: "a perfectly round shape", cn_def: "圓形" },
  "clerk": { pos: "n.", en_def: "a person who works in a shop or office", cn_def: "店員；職員" },
  "clinic": { pos: "n.", en_def: "a place where people receive medical treatment", cn_def: "診所" },
  "concert": { pos: "n.", en_def: "a musical performance", cn_def: "音樂會" },
  "count": { pos: "v.", en_def: "to find the total number of something", cn_def: "計算" },
  "discoveries": { pos: "n.", en_def: "things found or learned for the first time", cn_def: "發現（複數）" },
  "divide": { pos: "v.", en_def: "to separate something into smaller parts", cn_def: "分配" },
  "dozen": { pos: "n.", en_def: "a group of twelve", cn_def: "一打（十二個）" },
  "fees": { pos: "n.", en_def: "amounts of money charged for a service", cn_def: "費用（複數）" },
  "floor plan": { pos: "n.", en_def: "a drawing showing the layout of a room or building", cn_def: "平面圖" },
  "half": { pos: "n.", en_def: "one of two equal parts", cn_def: "一半" },
  "lecture": { pos: "n.", en_def: "a talk given to teach a subject", cn_def: "講座" },
  "light": { pos: "adj.", en_def: "not heavy", cn_def: "輕的" },
  "loud": { pos: "adj.", en_def: "having a high volume of sound", cn_def: "大聲的" },
  "lunchtime": { pos: "n.", en_def: "the time when lunch is usually eaten", cn_def: "午餐時間" },
  "many": { pos: "adj.", en_def: "a large number of something", cn_def: "許多" },
  "more": { pos: "adj.", en_def: "a greater amount of something", cn_def: "更多的" },
  "much": { pos: "adj.", en_def: "a large amount of something", cn_def: "許多的" },
  "neighbor": { pos: "n.", en_def: "a person who lives or sits near you", cn_def: "鄰居" },
  "overnight": { pos: "adv.", en_def: "during a single night; very quickly", cn_def: "一夜之間" },
  "physical exam": { pos: "n.", en_def: "a medical checkup of the whole body", cn_def: "身體檢查" },
  "piece": { pos: "n.", en_def: "a part of something larger", cn_def: "一張(片、塊)" },
  "pound": { pos: "n.", en_def: "a unit of weight equal to about 0.45 kilograms", cn_def: "磅（重量單位）" },
  "restocking": { pos: "v.", en_def: "filling something with new supplies", cn_def: "補貨（進行式）" },
  "shelf": { pos: "n.", en_def: "a flat surface used for holding objects", cn_def: "架子" },
  "slice": { pos: "n.", en_def: "a thin piece cut from something larger", cn_def: "（一）片；（一）塊" },
  "small": { pos: "adj.", en_def: "little in size", cn_def: "小的" },
  "soft": { pos: "adj.", en_def: "not hard or firm", cn_def: "軟的" },
  "some": { pos: "det.", en_def: "an unspecified amount of something", cn_def: "一些" },
  "square": { pos: "n.", en_def: "a shape with four equal sides", cn_def: "正方形" },
  "stadium": { pos: "n.", en_def: "a large structure used for sports events", cn_def: "體育場" },
  "the": { pos: "art.", en_def: "used before a noun to refer to a specific thing", cn_def: "這個；那個（定冠詞）" },
  "venue": { pos: "n.", en_def: "the place where an event happens", cn_def: "場地" },
  "viral": { pos: "adj.", en_def: "spreading quickly online among many people", cn_def: "（網路上）瘋傳的" },
  "weigh": { pos: "v.", en_def: "to find out how heavy something is", cn_def: "稱重" },
};
Object.keys(EXTRA_GLOSSES).forEach(key => {
  const g = EXTRA_GLOSSES[key];
  if (!LOOKUP[key]) {
    LOOKUP[key] = { pos: g.pos, en_def: g.en_def, cn_def: g.cn_def, combined: [g] };
  }
});
