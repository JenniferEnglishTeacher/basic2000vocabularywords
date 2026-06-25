// ============================================================
// Group 24 Quiz Data: Physical Appearance / Age / Beauty
// Full word set (18 words) — adjectives describing physical
// appearance, age, and the noun "beauty" from the "body /
// health / feelings / clothing / appearance" theme. This is
// the FINAL group completing the entire theme, which began
// with Group 20 (Body Parts).
// ============================================================

const QUIZ_CONFIG = {
  groupName: "Group 24 - Physical Appearance / Age / Beauty (外貌/年齡/美貌)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

// ---- Part 1 data: spelling practice (18 words) ----
const VOCAB = [
  { word: "beautiful", pos: "adj.", cn_def: "漂亮的", en_def: "very pleasing to look at",
    sentence: "Everyone agreed that the sunset over the ocean looked absolutely {{BLANK}} that evening.",
    cn: "大家都認為那天晚上海洋上的日落美得令人讚嘆。" },
  { word: "pretty", pos: "adj.", cn_def: "漂亮的", en_def: "attractive in a delicate or graceful way",
    sentence: "She wore a {{BLANK}} flower in her hair for the school dance.",
    cn: "她在學校舞會上戴了一朵漂亮的花在頭髮上。" },
  { word: "ugly", pos: "adj.", cn_def: "醜的", en_def: "unpleasant to look at",
    sentence: "The old, broken fence looked quite {{BLANK}} next to the new garden.",
    cn: "那座老舊破損的籬笆在新花園旁邊看起來相當醜陋。" },
  { word: "chubby", pos: "adj.", cn_def: "圓胖的", en_def: "slightly fat in a pleasant way, often used for babies",
    sentence: "The baby's {{BLANK}} cheeks made everyone want to give her a hug.",
    cn: "這個寶寶圓胖的臉頰讓大家都想抱抱她。" },
  { word: "fat", pos: "adj.", cn_def: "胖的", en_def: "having a large amount of body weight",
    sentence: "The {{BLANK}} cat napped lazily in a sunny spot by the window all afternoon.",
    cn: "那隻胖貓整個下午都懶洋洋地在窗邊有陽光的地方睡覺。" },
  { word: "cute", pos: "adj.", cn_def: "可愛的", en_def: "attractive in a charming or sweet way",
    sentence: "Everyone at the shelter thought the small puppy was incredibly {{BLANK}}.",
    cn: "收容所裡的每個人都覺得那隻小狗非常可愛。" },
  { word: "lovely", pos: "adj.", cn_def: "可愛的；討人喜歡的", en_def: "very pleasant or attractive",
    sentence: "We had a {{BLANK}} afternoon picnic together under the cherry blossom trees.",
    cn: "我們在櫻花樹下度過了一個愉快可愛的午後野餐時光。" },
  { word: "handsome", pos: "adj.", cn_def: "英俊的", en_def: "good-looking, usually describing a man",
    sentence: "Everyone said the groom looked especially {{BLANK}} in his new gray suit.",
    cn: "大家都說新郎穿著他的新灰色西裝顯得特別英俊。" },
  { word: "nice-looking", pos: "adj.", cn_def: "外表好看的", en_def: "having a pleasant or attractive appearance",
    sentence: "The new restaurant downtown has a {{BLANK}} sign that catches everyone's eye.",
    cn: "市中心那家新餐廳有一個吸引大家目光的好看招牌。" },
  { word: "tall", pos: "adj.", cn_def: "高的", en_def: "having a greater than average height",
    sentence: "My older brother grew very {{BLANK}} during his last year of middle school.",
    cn: "我哥哥在國中最後一年長得很高。" },
  { word: "short", pos: "adj.", cn_def: "矮的", en_def: "having a less than average height",
    sentence: "Even though she is {{BLANK}}, she is the fastest runner on the whole team.",
    cn: "雖然她個子矮，但她是整個隊伍裡跑得最快的。" },
  { word: "skinny", pos: "adj.", cn_def: "骨瘦如柴的", en_def: "extremely thin, often in a way that is not healthy",
    sentence: "After being sick for two weeks, he looked noticeably {{BLANK}} when he returned to school.",
    cn: "生病兩週後，他回到學校時看起來明顯瘦了很多。" },
  { word: "slender", pos: "adj.", cn_def: "修長的", en_def: "thin in an attractive or graceful way",
    sentence: "The dancer's {{BLANK}} arms moved gracefully across the stage during the performance.",
    cn: "那位舞者修長的手臂在表演中優雅地在舞台上揮動。" },
  { word: "slim", pos: "adj.", cn_def: "纖細的", en_def: "thin in a pleasing or attractive way",
    sentence: "She has stayed {{BLANK}} for years by exercising and eating healthy meals every day.",
    cn: "她多年來每天運動並健康飲食，一直保持纖細的身材。" },
  { word: "thin", pos: "adj.", cn_def: "瘦的", en_def: "not fat; having little extra flesh on the body",
    sentence: "His grandfather looked much {{BLANK}}er after recovering from his long illness.",
    cn: "他爺爺從長期的病痛中恢復後看起來瘦了許多。" },
  { word: "elder", pos: "adj.", cn_def: "年長的", en_def: "older, often used to describe the older of two siblings",
    sentence: "His {{BLANK}} sister always helps him with his math homework after dinner.",
    cn: "他年長的姐姐每天晚餐後都會幫他做數學作業。" },
  { word: "young", pos: "adj.", cn_def: "年輕的", en_def: "having lived only a short time; not old",
    sentence: "The {{BLANK}} couple just moved into the apartment down the hall from us.",
    cn: "那對年輕夫妻剛搬進我們這條走廊盡頭的公寓。" },
  { word: "beauty", pos: "n.", cn_def: "美貌；美麗", en_def: "the quality of being pleasing to look at",
    sentence: "Visitors travel from all over the world just to see the natural {{BLANK}} of the mountains.",
    cn: "遊客從世界各地前來，就是為了欣賞這些山脈的自然美景。" }
];

// ---- Part 2 data: 18 MCQs ----
// CEFR A2 / 國中會考 level: exactly 2 sentences, ~18-30 words total,
// rich concrete context clue, one blank, simple surrounding vocabulary.
// Answer letters balanced across A/B/C/D (5/5/4/4), no adjacent repeats.
// vocabIndex points to the exact VOCAB array entry being tested.
const MCQS = [
  { q: "Standing together on the beach as the sun went down, everyone stopped talking to watch the sky. The colors over the ocean looked absolutely ______ that evening.",
    options: ["ugly","fat","skinny","beautiful"], answer: 3, vocabIndex: 0 },
  { q: "Getting ready for the school dance with her friends, she wanted a small finishing touch for her outfit. She wore a ______ flower in her hair.",
    options: ["pretty","ugly","fat","tall"], answer: 0, vocabIndex: 1 },
  { q: "Walking past the old garden on her way to school, she noticed something near the fence had not been repaired in years. The broken fence looked quite ______ next to the flowers.",
    options: ["beautiful","ugly","pretty","cute"], answer: 1, vocabIndex: 2 },
  { q: "Visiting her new baby cousin for the first time, she could not stop smiling the whole afternoon. The baby's ______ cheeks made everyone want to give her a hug.",
    options: ["tall","short","chubby","slender"], answer: 2, vocabIndex: 3 },
  { q: "Every afternoon by the sunny window, the same furry visitor curls up for a long nap. The ______ cat seems to enjoy that warm spot the most.",
    options: ["thin","fat","slim","tall"], answer: 1, vocabIndex: 4 },
  { q: "Visiting the animal shelter on Saturday morning, the whole family gathered around the smallest cage in the room. Everyone agreed the tiny puppy inside was incredibly ______.",
    options: ["ugly","fat","cute","tall"], answer: 2, vocabIndex: 5 },
  { q: "Spreading a blanket beneath the blooming trees in the park, the whole family enjoyed sandwiches and quiet conversation. It turned into a truly ______ afternoon together.",
    options: ["ugly","lovely","skinny","short"], answer: 1, vocabIndex: 6 },
  { q: "Walking down the aisle at his best friend's wedding, he noticed how sharp the groom looked in his suit. Everyone agreed the groom seemed especially ______ that day.",
    options: ["handsome","chubby","ugly","short"], answer: 0, vocabIndex: 7 },
  { q: "Driving through downtown last weekend, she noticed a new restaurant with something that caught her eye immediately. Its ______ sign made her want to stop and look inside.",
    options: ["fat","thin","nice-looking","short"], answer: 2, vocabIndex: 8 },
  { q: "Comparing old photographs from a few years ago, his parents could hardly believe how much had changed. Their son grew incredibly ______ during his final year of middle school.",
    options: ["fat","tall","chubby","young"], answer: 1, vocabIndex: 9 },
  { q: "Despite being the smallest player on the entire soccer team, nobody could ever catch up to her on the field. Even though she is ______, she runs faster than everyone else.",
    options: ["short","tall","fat","elder"], answer: 0, vocabIndex: 10 },
  { q: "Returning to school after missing two weeks because of a bad illness, his classmates noticed something different about him right away. He looked noticeably ______ after being sick for so long.",
    options: ["tall","chubby","elder","skinny"], answer: 3, vocabIndex: 11 },
  { q: "Watching the performance from the front row of the theater, the audience admired how smoothly the dancer moved across the stage. Her ______ arms seemed to glide gracefully through the air.",
    options: ["fat","short","slender","chubby"], answer: 2, vocabIndex: 12 },
  { q: "After years of regular exercise and careful eating habits, she finally reached the goal she had been working toward. She has managed to stay ______ for a long time now.",
    options: ["fat","chubby","tall","slim"], answer: 3, vocabIndex: 13 },
  { q: "Visiting his grandfather in the hospital after a long illness, he was surprised by how different he looked since the last visit. His grandfather seemed much ______ than before.",
    options: ["thinner","taller","shorter","younger"], answer: 0, vocabIndex: 14 },
  { q: "Struggling with a difficult math problem after dinner one evening, he finally asked someone in his family for help. His ______ sister patiently explained each step until he understood.",
    options: ["young","elder","short","tall"], answer: 1, vocabIndex: 15 },
  { q: "Moving into the apartment down the hall from us last month, our new neighbors introduced themselves with warm smiles. The ______ couple seems excited to start their new life here.",
    options: ["elder","tall","fat","young"], answer: 3, vocabIndex: 16 },
  { q: "Traveling from countries all around the world, visitors arrive at the national park every single year. They come simply to admire the natural ______ of the towering mountains.",
    options: ["beauty","height","size","weight"], answer: 0, vocabIndex: 17 },
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
  "absolutely": { pos: "adv.", en_def: "completely; totally", cn_def: "完全地；絕對地" },
  "blossom": { pos: "n.", en_def: "a flower, especially on a fruit tree", cn_def: "花朵" },
  "cherry": { pos: "n.", en_def: "a small round red fruit", cn_def: "櫻桃" },
  "downtown": { pos: "n.", en_def: "the central business area of a city", cn_def: "市中心" },
  "fence": { pos: "n.", en_def: "a structure that encloses an area, often made of wood or metal", cn_def: "圍籬" },
  "gracefully": { pos: "adv.", en_def: "in a smooth and elegant way", cn_def: "優雅地" },
  "groom": { pos: "n.", en_def: "a man on his wedding day", cn_def: "新郎" },
  "height": { pos: "n.", en_def: "how tall something or someone is", cn_def: "身高；高度" },
  "illness": { pos: "n.", en_def: "a disease or period of being sick", cn_def: "疾病" },
  "noticeably": { pos: "adv.", en_def: "in a way that is easy to notice", cn_def: "明顯地" },
  "ocean": { pos: "n.", en_def: "a very large area of salt water", cn_def: "海洋" },
  "performance": { pos: "n.", en_def: "an act of performing in front of an audience", cn_def: "表演" },
  "puppy": { pos: "n.", en_def: "a baby dog", cn_def: "小狗" },
  "recovering": { pos: "v.", en_def: "becoming healthy again after being sick", cn_def: "復原中" },
  "shelter": { pos: "n.", en_def: "a place that takes care of animals or people in need", cn_def: "收容所" },
  "size": { pos: "n.", en_def: "how big or small something is", cn_def: "尺寸" },
  "stage": { pos: "n.", en_def: "a raised platform where performances happen", cn_def: "舞台" },
  "sunset": { pos: "n.", en_def: "the time when the sun goes down in the evening", cn_def: "日落" },
  "weight": { pos: "n.", en_def: "how heavy something or someone is", cn_def: "重量；體重" }
};
Object.keys(EXTRA_GLOSSES).forEach(key => {
  const g = EXTRA_GLOSSES[key];
  if (!LOOKUP[key]) {
    LOOKUP[key] = { pos: g.pos, en_def: g.en_def, cn_def: g.cn_def, combined: [g] };
  }
});

// ---- Comparative-form aliases so MCQ option lookups resolve correctly ----
const COMPARATIVE_ALIASES = {
  "taller": "tall", "shorter": "short", "thinner": "thin", "younger": "young",
  "fatter": "fat", "elder": "elder"
};
Object.keys(COMPARATIVE_ALIASES).forEach(form => {
  const base = COMPARATIVE_ALIASES[form];
  if (!LOOKUP[form] && LOOKUP[base]) {
    LOOKUP[form] = LOOKUP[base];
  }
});
