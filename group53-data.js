// ============================================================
// Group 53 Quiz Data: Function Words / Common Nouns, Part 6
// Full word set (30 words) — abstract and concrete common
// nouns from the "function words / common nouns" theme.
// Continues from Group 52 (Common Nouns, Part 3). This is the
// sixth of ~9 groups (48-56) covering this theme at ~30 words
// per group.
// Continues the simpler/shorter MCQ style introduced in
// Group 37 (~16-26 words, 2 sentences, one blank).
// ============================================================

const QUIZ_CONFIG = {
  groupName: "Group 53 - Common Nouns, Part 4 (常見名詞 四)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

// ---- Part 1 data: spelling practice (30 words) ----
const VOCAB = [
  { word: "moment", pos: "n.", cn_def: "瞬間", en_def: "a very short period of time",
    sentence: "She paused for a {{BLANK}} before answering the difficult question.",
    cn: "她在回答這個困難的問題前停頓了一瞬間。" },
  { word: "motion", pos: "n.", cn_def: "動作", en_def: "the act or process of moving",
    sentence: "He made a quick {{BLANK}} with his hand to call the waiter over.",
    cn: "他用手做了一個快速的動作叫服務生過來。" },
  { word: "movement", pos: "n.", cn_def: "運動", en_def: "an act of changing position or location",
    sentence: "The dancer's smooth {{BLANK}} impressed the entire audience.",
    cn: "這位舞者流暢的運動讓全場觀眾印象深刻。" },
  { word: "mud", pos: "n.", cn_def: "泥漿", en_def: "soft, wet earth",
    sentence: "Her boots were covered in {{BLANK}} after the rainy hike.",
    cn: "經過這場雨中健行後，她的靴子上沾滿了泥漿。" },
  { word: "name", pos: "n.", cn_def: "名字", en_def: "what a person or thing is called",
    sentence: "She wrote her {{BLANK}} neatly at the top of the test paper.",
    cn: "她在考卷最上面整齊地寫上她的名字。" },
  { word: "nest", pos: "n.", cn_def: "巢", en_def: "a structure built by a bird to lay its eggs in",
    sentence: "A pair of sparrows built a small {{BLANK}} under the roof.",
    cn: "一對麻雀在屋頂下築了一個小巢。" },
  { word: "owner", pos: "n.", cn_def: "擁有者", en_def: "a person who possesses something",
    sentence: "The {{BLANK}} of the small bakery greeted every customer warmly.",
    cn: "這家小麵包店的擁有者熱情地問候每位顧客。" },
  { word: "part", pos: "n.", cn_def: "一部份", en_def: "a piece or section of something larger",
    sentence: "She finished the hardest {{BLANK}} of her homework first.",
    cn: "她先完成了作業中最難的部分。" },
  { word: "pattern", pos: "n.", cn_def: "格式", en_def: "a regularly repeated arrangement or design",
    sentence: "The fabric had a colorful {{BLANK}} of stripes and dots.",
    cn: "這塊布料有色彩鮮豔的條紋與點點圖案。" },
  { word: "peace", pos: "n.", cn_def: "和平", en_def: "a state of calm without war or conflict",
    sentence: "After the long argument, the two friends finally made {{BLANK}}.",
    cn: "經過長時間的爭吵後，這兩位朋友終於和解了。" },
  { word: "picnic", pos: "n.", cn_def: "野餐", en_def: "an outdoor meal eaten on the ground or grass",
    sentence: "They packed sandwiches and fruit for a {{BLANK}} in the park.",
    cn: "他們準備了三明治和水果，要在公園野餐。" },
  { word: "poem", pos: "n.", cn_def: "詩", en_def: "a piece of writing arranged in lines, often with rhythm",
    sentence: "She wrote a short {{BLANK}} about the changing seasons.",
    cn: "她寫了一首關於季節變化的短詩。" },
  { word: "point", pos: "n.", cn_def: "看法", en_def: "an opinion or idea expressed",
    sentence: "He made a strong {{BLANK}} during the class debate.",
    cn: "他在班級辯論中表達了一個有力的看法。" },
  { word: "poison", pos: "n.", cn_def: "毒藥", en_def: "a substance that can cause illness or death",
    sentence: "The label warned that the chemical was a dangerous {{BLANK}}.",
    cn: "標籤警告這種化學物質是危險的毒藥。" },
  { word: "pollution", pos: "n.", cn_def: "污染", en_def: "harmful substances that damage the environment",
    sentence: "The city worked hard to reduce air {{BLANK}} downtown.",
    cn: "這座城市努力減少市區的空氣污染。" },
  { word: "population", pos: "n.", cn_def: "人口", en_def: "the number of people living in a place",
    sentence: "The small town's {{BLANK}} grew quickly after the new factory opened.",
    cn: "這座小鎮的人口在新工廠開設後迅速增長。" },
  { word: "position", pos: "n.", cn_def: "位置", en_def: "the place where something is located",
    sentence: "The coach asked him to switch to a new {{BLANK}} on the field.",
    cn: "教練要求他在球場上換到一個新的位置。" },
  { word: "powder", pos: "n.", cn_def: "粉", en_def: "a substance made of fine, dry particles",
    sentence: "She sprinkled a little {{BLANK}} of sugar on top of the cake.",
    cn: "她在蛋糕上撒了一點糖粉。" },
  { word: "power", pos: "n.", cn_def: "力量", en_def: "the ability to control or influence",
    sentence: "The mayor has the {{BLANK}} to approve new park projects.",
    cn: "市長有權力批准新的公園計畫。" },
  { word: "pressure", pos: "n.", cn_def: "壓力", en_def: "a feeling of stress, or a physical force pushing on something",
    sentence: "She felt a lot of {{BLANK}} before the final exam this week.",
    cn: "她在這週的期末考試前感到很大的壓力。" },
  { word: "principle", pos: "n.", cn_def: "原則", en_def: "a basic rule or belief that guides behavior",
    sentence: "Honesty is an important {{BLANK}} that her parents taught her.",
    cn: "誠實是她父母教給她的一個重要原則。" },
  { word: "prize", pos: "n.", cn_def: "獎賞", en_def: "something given to a winner",
    sentence: "She won a small {{BLANK}} for the best science project.",
    cn: "她因為最佳科學作業而贏得了一個小獎賞。" },
  { word: "production", pos: "n.", cn_def: "產品", en_def: "the process of making goods",
    sentence: "The factory increased its {{BLANK}} of bicycles this year.",
    cn: "這家工廠今年增加了自行車的產量。" },
  { word: "progress", pos: "n.", cn_def: "進步", en_def: "forward movement toward a goal",
    sentence: "She made great {{BLANK}} in math after weeks of extra practice.",
    cn: "經過幾週的額外練習後，她在數學上有了很大的進步。" },
  { word: "purpose", pos: "n.", cn_def: "目的", en_def: "the reason something is done",
    sentence: "The main {{BLANK}} of the meeting was to plan the school trip.",
    cn: "這次會議的主要目的是規劃校外教學。" },
  { word: "question", pos: "n.", cn_def: "問題", en_def: "something asked to get information",
    sentence: "She raised her hand to ask an important {{BLANK}} in class.",
    cn: "她舉手在課堂上問了一個重要的問題。" },
  { word: "race", pos: "n.", cn_def: "賽跑", en_def: "a competition to see who is fastest",
    sentence: "He trained every morning before the big school {{BLANK}}.",
    cn: "他在這場學校重要的賽跑前每天早上都訓練。" },
  { word: "robot", pos: "n.", cn_def: "機器人", en_def: "a machine that can move and perform tasks automatically",
    sentence: "The students built a small {{BLANK}} for the science fair.",
    cn: "學生們為科展製作了一個小機器人。" },
  { word: "rubber", pos: "n.", cn_def: "橡膠", en_def: "a stretchy material used to make tires and other products",
    sentence: "The shoes had a thick {{BLANK}} sole for extra grip.",
    cn: "這雙鞋有厚厚的橡膠鞋底，能增加抓地力。" },
  { word: "rule", pos: "n.", cn_def: "規則", en_def: "an official instruction that tells people what to do",
    sentence: "The teacher reminded the class about the new library {{BLANK}}.",
    cn: "老師提醒全班關於新的圖書館規則。" }
];

// ---- Part 2 data: 30 MCQs ----
// Continuing the simpler/shorter MCQ style from Group 37:
// ~16-26 words, exactly 2 sentences, one blank, 4 options.
// Answer letters balanced across A/B/C/D, no adjacent repeats.
// vocabIndex points to the exact VOCAB array entry being tested.
const MCQS = [
  { q: "The teacher waited quietly while she thought through her response. She paused for a ______ before answering the difficult question.",
    options: ["moment", "motion", "pattern", "position"], answer: 0, vocabIndex: 0 },
  { q: "He needed the server's attention to order more drinks for the table. He made a quick ______ with his hand to call the waiter.",
    options: ["moment", "motion", "movement", "powder"], answer: 1, vocabIndex: 1 },
  { q: "Every step of her performance flowed gracefully into the next. The dancer's smooth ______ impressed the entire audience.",
    options: ["moment", "motion", "movement", "position"], answer: 2, vocabIndex: 2 },
  { q: "She didn't expect the trail to be quite this messy after the storm. Her boots were covered in ______ after the rainy hike.",
    options: ["powder", "rubber", "poison", "mud"], answer: 3, vocabIndex: 3 },
  { q: "She made sure her test would be properly identified by the teacher. She wrote her ______ neatly at the top of the test paper.",
    options: ["name", "question", "point", "purpose"], answer: 0, vocabIndex: 4 },
  { q: "Two small birds were busy gathering twigs near the roof all week. A pair of sparrows built a small ______ under the roof.",
    options: ["pattern", "nest", "position", "part"], answer: 1, vocabIndex: 5 },
  { q: "Every regular customer felt instantly welcomed walking through the bakery door. The ______ of the small bakery greeted every customer warmly.",
    options: ["name", "population", "owner", "robot"], answer: 2, vocabIndex: 6 },
  { q: "She tackled the most challenging section of her assignment right away. She finished the hardest ______ of her homework first.",
    options: ["pattern", "position", "principle", "part"], answer: 3, vocabIndex: 7 },
  { q: "The fabric stood out on the shelf because of its lively design. It had a colorful ______ of stripes and dots.",
    options: ["pattern", "pressure", "powder", "prize"], answer: 0, vocabIndex: 8 },
  { q: "Tension finally faded between the two classmates after their long disagreement. After the long argument, they finally made ______.",
    options: ["progress", "peace", "power", "prize"], answer: 1, vocabIndex: 9 },
  { q: "They wanted to enjoy a relaxing meal outside under the warm sun. They packed sandwiches and fruit for a ______ in the park.",
    options: ["race", "pattern", "picnic", "robot"], answer: 2, vocabIndex: 10 },
  { q: "Her writing assignment focused on the beauty of autumn turning into winter. She wrote a short ______ about the changing seasons.",
    options: ["question", "purpose", "principle", "poem"], answer: 3, vocabIndex: 11 },
  { q: "His argument during the debate stood out to everyone in the room. He made a strong ______ during the class debate.",
    options: ["point", "poison", "powder", "pollution"], answer: 0, vocabIndex: 12 },
  { q: "The container in the science lab had a clear caution symbol printed on it. The label warned that the chemical was a dangerous ______.",
    options: ["powder", "poison", "rubber", "mud"], answer: 1, vocabIndex: 13 },
  { q: "City officials made new plans to improve air quality this year. The city worked hard to reduce air ______ downtown.",
    options: ["pressure", "production", "pollution", "progress"], answer: 2, vocabIndex: 14 },
  { q: "More families moved to the area once new jobs became available nearby. The town's ______ grew quickly after the new factory opened.",
    options: ["pollution", "pattern", "principle", "population"], answer: 3, vocabIndex: 15 },
  { q: "His role on the team needed adjusting after the injury to another player. The coach asked him to switch to a new ______.",
    options: ["position", "pattern", "part", "pressure"], answer: 0, vocabIndex: 16 },
  { q: "Her dessert needed a finishing touch before serving it to the guests. She sprinkled a little ______ of sugar on top of the cake.",
    options: ["pattern", "powder", "poison", "rubber"], answer: 1, vocabIndex: 17 },
  { q: "City officials sometimes need final approval before new projects can begin. The mayor has the ______ to approve new park projects.",
    options: ["peace", "principle", "power", "purpose"], answer: 2, vocabIndex: 18 },
  { q: "She had been studying nonstop, worried about doing well on the test. She felt a lot of ______ before the final exam.",
    options: ["peace", "powder", "production", "pressure"], answer: 3, vocabIndex: 19 },
  { q: "Her family always emphasized telling the truth no matter the situation. Honesty is an important ______ that her parents taught her.",
    options: ["principle", "pattern", "position", "powder"], answer: 0, vocabIndex: 20 },
  { q: "Her detailed research stood out among all the other entries at the fair. She won a small ______ for the best science project.",
    options: ["purpose", "prize", "pressure", "point"], answer: 1, vocabIndex: 21 },
  { q: "Demand for bicycles grew steadily as the weather improved this spring. The factory increased its ______ of bicycles this year.",
    options: ["pollution", "population", "production", "pattern"], answer: 2, vocabIndex: 22 },
  { q: "Her grades steadily improved after she started getting extra tutoring help. She made great ______ in math after weeks of practice.",
    options: ["purpose", "pressure", "principle", "progress"], answer: 3, vocabIndex: 23 },
  { q: "Teachers and parents gathered to organize details for the upcoming class outing. The main ______ of the meeting was to plan the trip.",
    options: ["purpose", "point", "prize", "production"], answer: 0, vocabIndex: 24 },
  { q: "She wasn't sure she understood the new topic and wanted clarification. She raised her hand to ask an important ______ in class.",
    options: ["point", "question", "purpose", "principle"], answer: 1, vocabIndex: 25 },
  { q: "He woke up early every day to prepare for the upcoming competition. He trained every morning before the big school ______.",
    options: ["picnic", "nest", "race", "rule"], answer: 2, vocabIndex: 26 },
  { q: "Their group project combined engineering and creativity for the school showcase. The students built a small ______ for the science fair.",
    options: ["owner", "name", "poem", "robot"], answer: 3, vocabIndex: 27 },
  { q: "These sneakers were designed to handle slippery surfaces during gym class. The shoes had a thick ______ sole for extra grip.",
    options: ["rubber", "mud", "powder", "poison"], answer: 0, vocabIndex: 28 },
  { q: "Students were told about an updated policy for borrowing books this semester. The teacher reminded the class about the new library ______.",
    options: ["principle", "rule", "pattern", "position"], answer: 1, vocabIndex: 29 },
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
  "approval": { pos: "n.", en_def: "official permission for something", cn_def: "批准" },
  "audience": { pos: "n.", en_def: "a group of people watching a performance", cn_def: "觀眾" },
  "caution": { pos: "n.", en_def: "great care taken to avoid danger", cn_def: "謹慎；警示" },
  "clarification": { pos: "n.", en_def: "an explanation that makes something easier to understand", cn_def: "澄清" },
  "debate": { pos: "n.", en_def: "a formal discussion of opposing views", cn_def: "辯論" },
  "demand": { pos: "n.", en_def: "the desire of customers to buy a product", cn_def: "需求" },
  "disagreement": { pos: "n.", en_def: "a situation in which people do not agree", cn_def: "意見不合" },
  "engineering": { pos: "n.", en_def: "the use of science to design and build things", cn_def: "工程學" },
  "fabric": { pos: "n.", en_def: "cloth made from threads", cn_def: "布料" },
  "grip": { pos: "n.", en_def: "a firm hold or traction", cn_def: "抓地力；握力" },
  "honesty": { pos: "n.", en_def: "the quality of being truthful", cn_def: "誠實" },
  "identified": { pos: "v.", en_def: "recognized or established who or what someone is", cn_def: "識別；確認（過去式）" },
  "injury": { pos: "n.", en_def: "physical harm or damage to the body", cn_def: "受傷" },
  "label": { pos: "n.", en_def: "a piece of paper or text attached to something to give information", cn_def: "標籤" },
  "mayor": { pos: "n.", en_def: "the elected head of a city or town", cn_def: "市長" },
  "outing": { pos: "n.", en_def: "a short trip taken for pleasure", cn_def: "出遊；郊遊" },
  "research": { pos: "n.", en_def: "careful study to discover new information", cn_def: "研究" },
  "showcase": { pos: "n.", en_def: "an event to display something to an audience", cn_def: "展示（會）" },
  "sole": { pos: "n.", en_def: "the bottom part of a shoe", cn_def: "鞋底" },
  "sparrows": { pos: "n.", en_def: "small brown birds common in cities and towns", cn_def: "麻雀（複數）" },
  "trail": { pos: "n.", en_def: "a path, often through nature", cn_def: "山路；小徑" },
  "tutoring": { pos: "n.", en_def: "extra teaching help given to a student", cn_def: "課業輔導" },
  "twigs": { pos: "n.", en_def: "small, thin branches from a tree", cn_def: "細枝（複數）" },
};
Object.keys(EXTRA_GLOSSES).forEach(key => {
  const g = EXTRA_GLOSSES[key];
  if (!LOOKUP[key]) {
    LOOKUP[key] = { pos: g.pos, en_def: g.en_def, cn_def: g.cn_def, combined: [g] };
  }
});
