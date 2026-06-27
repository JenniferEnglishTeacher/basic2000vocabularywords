// ============================================================
// Group 37 Quiz Data: Actions, Part 6
// Full word set (36 words) — the sixth portion of the
// "actions" theme (252-word flat verb list). Continues from
// Group 36 (Actions, Part 5). Split into 7 groups of 36 words
// each (Groups 32-38) per the person's request.
// Per the person's request, Part 2 MCQ questions in this group
// are written simpler and shorter (~20-26 words) than prior
// groups, while still keeping exactly 2 sentences, one blank,
// and a clear context clue.
// ============================================================

const QUIZ_CONFIG = {
  groupName: "Group 37 - Actions, Part 6 (動作 六)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

// ---- Part 1 data: spelling practice (36 words) ----
const VOCAB = [
  { word: "please", pos: "v.", cn_def: "取悅", en_def: "to make someone feel happy or satisfied",
    sentence: "She baked cookies just to {{BLANK}} her tired classmates after the test.",
    cn: "她烤餅乾只是為了取悅考完試後疲累的同學。" },
  { word: "pollute", pos: "v.", cn_def: "污染", en_def: "to make air, water, or soil dirty and harmful",
    sentence: "Factories that {{BLANK}} the river were finally forced to close down.",
    cn: "污染河流的工廠最終被迫關閉。" },
  { word: "practice", pos: "v.", cn_def: "練習", en_def: "to do something repeatedly to improve a skill",
    sentence: "He likes to {{BLANK}} the piano for thirty minutes every evening.",
    cn: "他喜歡每天晚上練習彈三十分鐘的鋼琴。" },
  { word: "praise", pos: "v.", cn_def: "讚美", en_def: "to say good things about someone's work or behavior",
    sentence: "The coach stopped to {{BLANK}} the team after their hard-fought win.",
    cn: "教練停下來讚美球隊辛苦贏得的勝利。" },
  { word: "pray", pos: "v.", cn_def: "祈禱", en_def: "to speak to God or a god, often asking for help",
    sentence: "Many villagers gather at the temple to {{BLANK}} before the harvest.",
    cn: "許多村民在收成前聚集到寺廟祈禱。" },
  { word: "prepare", pos: "v.", cn_def: "準備", en_def: "to get something ready for use or for an event",
    sentence: "We stayed up late to {{BLANK}} snacks for tomorrow's class party.",
    cn: "我們熬夜準備明天班級派對的零食。" },
  { word: "print", pos: "v.", cn_def: "印刷", en_def: "to put words or pictures onto paper using a machine",
    sentence: "Could you {{BLANK}} two copies of this worksheet for me, please?",
    cn: "你可以幫我印兩份這張練習卷嗎？" },
  { word: "produce", pos: "v.", cn_def: "製造", en_def: "to make or create something, often in large amounts",
    sentence: "This small farm can {{BLANK}} enough eggs for the whole village.",
    cn: "這座小農場能夠製造足夠全村食用的雞蛋。" },
  { word: "promise", pos: "v.", cn_def: "承諾", en_def: "to tell someone you will definitely do something",
    sentence: "He had to {{BLANK}} his mother he would call when he arrived.",
    cn: "他必須向媽媽承諾抵達時會打電話。" },
  { word: "pronounce", pos: "v.", cn_def: "發...音", en_def: "to say a word in a certain way using sounds",
    sentence: "It took her weeks to {{BLANK}} that long French word correctly.",
    cn: "她花了好幾週才能正確發出那個長法文單字的音。" },
  { word: "protect", pos: "v.", cn_def: "保護", en_def: "to keep someone or something safe from harm",
    sentence: "A thick layer of fur helps {{BLANK}} the seal from the cold.",
    cn: "厚厚的毛皮幫助保護海豹抵禦寒冷。" },
  { word: "pump", pos: "v.", cn_def: "抽送", en_def: "to push liquid or gas through a pipe or tube",
    sentence: "The old machine still works to {{BLANK}} water up from the well.",
    cn: "這台舊機器仍能把水從井裡抽送上來。" },
  { word: "punish", pos: "v.", cn_def: "處罰", en_def: "to make someone suffer for doing something wrong",
    sentence: "The teacher chose not to {{BLANK}} the whole class for one mistake.",
    cn: "老師選擇不因為一個錯誤就處罰全班。" },
  { word: "put", pos: "v.", cn_def: "投入", en_def: "to move something into a certain place",
    sentence: "Please {{BLANK}} your shoes neatly by the front door tonight.",
    cn: "請今晚把你的鞋子整齊地放在前門旁。" },
  { word: "puzzle", pos: "v.", cn_def: "使困惑", en_def: "to confuse someone because something is hard to understand",
    sentence: "The strange noise from the engine began to {{BLANK}} the mechanic.",
    cn: "引擎發出的奇怪聲音讓技師感到困惑。" },
  { word: "reach", pos: "v.", cn_def: "抵達", en_def: "to arrive at a place after traveling",
    sentence: "We hope to {{BLANK}} the summit before the sun sets tonight.",
    cn: "我們希望今晚在太陽下山前抵達山頂。" },
  { word: "read", pos: "v.", cn_def: "閱讀", en_def: "to look at words and understand their meaning",
    sentence: "She likes to {{BLANK}} a short story before going to sleep.",
    cn: "她喜歡睡前閱讀一篇短篇故事。" },
  { word: "recover", pos: "v.", cn_def: "恢復", en_def: "to get better after being sick or hurt",
    sentence: "It took him two full weeks to {{BLANK}} from the flu.",
    cn: "他花了整整兩週才從流感中恢復。" },
  { word: "recycle", pos: "v.", cn_def: "回收", en_def: "to treat used items so they can be used again",
    sentence: "Our class learned how to {{BLANK}} old paper and plastic bottles.",
    cn: "我們班學到如何回收舊紙張和塑膠瓶。" },
  { word: "remind", pos: "v.", cn_def: "提醒", en_def: "to help someone remember something",
    sentence: "Could you {{BLANK}} me to bring my umbrella tomorrow morning?",
    cn: "你可以提醒我明天早上帶傘嗎？" },
  { word: "repeat", pos: "v.", cn_def: "重複", en_def: "to say or do something again",
    sentence: "The teacher had to {{BLANK}} the instructions one more time.",
    cn: "老師必須再重複一次指示。" },
  { word: "rest", pos: "v.", cn_def: "休息", en_def: "to relax or stop working for a while",
    sentence: "After the long hike, we decided to {{BLANK}} by the river.",
    cn: "經過長途健行後，我們決定在河邊休息。" },
  { word: "return", pos: "v.", cn_def: "返回", en_def: "to go back to a place",
    sentence: "She promised to {{BLANK}} the library book before it was due.",
    cn: "她答應在到期前把圖書館的書還回去。" },
  { word: "revise", pos: "v.", cn_def: "修訂", en_def: "to change and improve something you have written",
    sentence: "He had to {{BLANK}} his essay after his teacher's feedback.",
    cn: "他在老師給予回饋後必須修訂他的文章。" },
  { word: "rob", pos: "v.", cn_def: "搶劫", en_def: "to steal money or property from someone",
    sentence: "Two masked men tried to {{BLANK}} the small corner store.",
    cn: "兩名戴口罩的男子試圖搶劫這間小型雜貨店。" },
  { word: "roll", pos: "v.", cn_def: "滾動", en_def: "to move by turning over and over",
    sentence: "The ball began to {{BLANK}} slowly down the grassy hill.",
    cn: "球開始緩緩地滾下這片草地斜坡。" },
  { word: "rub", pos: "v.", cn_def: "磨擦", en_def: "to press and move your hand over a surface",
    sentence: "She began to {{BLANK}} her cold hands together near the fire.",
    cn: "她開始在火堆旁磨擦她冰冷的雙手。" },
  { word: "ruin", pos: "v.", cn_def: "毀壞(滅)", en_def: "to spoil or destroy something completely",
    sentence: "Heavy rain almost began to {{BLANK}} our outdoor birthday party.",
    cn: "大雨幾乎要毀掉我們的戶外生日派對。" },
  { word: "run", pos: "v.", cn_def: "跑", en_def: "to move quickly using your legs and feet",
    sentence: "The children love to {{BLANK}} around the park after school.",
    cn: "孩子們放學後喜歡在公園裡到處跑。" },
  { word: "walk", pos: "v.", cn_def: "走路", en_def: "to move on foot at a normal speed",
    sentence: "Every morning, my grandfather likes to {{BLANK}} around the block.",
    cn: "我爺爺每天早上喜歡在街區附近走路。" },
  { word: "rush", pos: "v.", cn_def: "催促", en_def: "to do something very quickly, often because of little time",
    sentence: "Please don't {{BLANK}} me while I finish my homework.",
    cn: "請別在我寫完作業前催促我。" },
  { word: "satisfy", pos: "v.", cn_def: "使滿意", en_def: "to make someone pleased by meeting their needs",
    sentence: "The new menu seemed to {{BLANK}} even the pickiest customers.",
    cn: "這份新菜單似乎讓最挑剔的顧客都感到滿意。" },
  { word: "save", pos: "v.", cn_def: "節省", en_def: "to keep money instead of spending it",
    sentence: "She tries to {{BLANK}} a little money from her allowance each week.",
    cn: "她每週都試著從零用錢裡節省一點錢。" },
  { word: "score", pos: "v.", cn_def: "得分", en_def: "to earn points in a game or test",
    sentence: "Our striker managed to {{BLANK}} two goals in the final match.",
    cn: "我們的前鋒在決賽中成功得了兩分。" },
  { word: "seem", pos: "v.", cn_def: "似乎", en_def: "to give the impression of being a certain way",
    sentence: "The new student didn't {{BLANK}} nervous on her very first day.",
    cn: "這位新生在第一天似乎並不緊張。" },
  { word: "set", pos: "v.", cn_def: "設置", en_def: "to put something in a particular place or position",
    sentence: "Could you please {{BLANK}} the table before dinner is ready?",
    cn: "你可以在晚餐準備好之前先擺好餐桌嗎？" }
];

// ---- Part 2 data: 36 MCQs ----
// Per the person's request, these questions are simpler and
// shorter than prior groups: ~20-26 words, still exactly 2
// sentences, one blank, 4 options, with a clear context clue.
// Answer letters balanced across A/B/C/D, no adjacent repeats.
// vocabIndex points to the exact VOCAB array entry being tested.
const MCQS = [
  { q: "She baked a batch of cookies for her tired friends. She wanted to ______ them after their hard test.",
    options: ["please", "punish", "pollute", "puzzle"], answer: 0, vocabIndex: 0 },
  { q: "Black smoke poured out of the old factory every day. People said it began to ______ the nearby river.",
    options: ["produce", "pollute", "protect", "promise"], answer: 1, vocabIndex: 1 },
  { q: "He sits at the piano every single evening. He likes to ______ for thirty quiet minutes after dinner.",
    options: ["prepare", "pray", "practice", "print"], answer: 2, vocabIndex: 2 },
  { q: "The team played hard and finally won the game. The coach stopped to ______ everyone for their effort.",
    options: ["punish", "pollute", "puzzle", "praise"], answer: 3, vocabIndex: 3 },
  { q: "Before the harvest each year, the village holds a quiet ceremony. Many people gather at the temple to ______.",
    options: ["pray", "produce", "protect", "promise"], answer: 0, vocabIndex: 4 },
  { q: "Tomorrow is the big class party at school. We stayed up late to ______ snacks for everyone.",
    options: ["pump", "prepare", "punish", "pronounce"], answer: 1, vocabIndex: 5 },
  { q: "My teacher needs an extra copy of my homework. Could you ______ one more page for me?",
    options: ["produce", "promise", "print", "protect"], answer: 2, vocabIndex: 6 },
  { q: "This small farm has many healthy hens. It can easily ______ enough eggs for the whole village.",
    options: ["pump", "pollute", "punish", "produce"], answer: 3, vocabIndex: 7 },
  { q: "Before leaving for his trip, he spoke seriously to his mother. He had to ______ he would call when he arrived.",
    options: ["promise", "please", "pray", "puzzle"], answer: 0, vocabIndex: 8 },
  { q: "The French word looked simple, but it was hard to say. It took her weeks to ______ it correctly.",
    options: ["print", "pronounce", "prepare", "punish"], answer: 1, vocabIndex: 9 },
  { q: "Seals live in very cold ocean water all year. A thick layer of fur helps ______ them from the cold.",
    options: ["pump", "please", "protect", "pollute"], answer: 2, vocabIndex: 10 },
  { q: "There is no electricity near the old farmhouse. The machine still works to ______ water from the well.",
    options: ["produce", "praise", "promise", "pump"], answer: 3, vocabIndex: 11 },
  { q: "One student forgot to do the homework last night. The kind teacher chose not to ______ the whole class.",
    options: ["punish", "please", "pray", "print"], answer: 0, vocabIndex: 12 },
  { q: "It was getting late and the house was a mess. Please ______ your shoes neatly by the door.",
    options: ["pump", "put", "pray", "praise"], answer: 1, vocabIndex: 13 },
  { q: "A strange noise kept coming from under the car. The sound began to ______ the confused mechanic.",
    options: ["please", "protect", "puzzle", "produce"], answer: 2, vocabIndex: 14 },
  { q: "The hikers had been climbing the mountain for hours. They hoped to ______ the top before sunset.",
    options: ["read", "rest", "repeat", "reach"], answer: 3, vocabIndex: 15 },
  { q: "Every night before bed, she opens a small book. She likes to ______ just one short story.",
    options: ["read", "return", "rob", "rush"], answer: 0, vocabIndex: 16 },
  { q: "He stayed home in bed with a bad fever last week. It took two full weeks to ______ from the flu.",
    options: ["recycle", "recover", "remind", "repeat"], answer: 1, vocabIndex: 17 },
  { q: "Our class learned about protecting the environment this week. We learned how to ______ old paper and bottles.",
    options: ["recover", "rob", "recycle", "ruin"], answer: 2, vocabIndex: 18 },
  { q: "Dark clouds were forming outside the classroom window. Could you ______ me to bring my umbrella tomorrow?",
    options: ["rest", "return", "revise", "remind"], answer: 3, vocabIndex: 19 },
  { q: "Some students looked confused after the first explanation. The teacher had to ______ the instructions again.",
    options: ["repeat", "rush", "rob", "roll"], answer: 0, vocabIndex: 20 },
  { q: "The hike had been long and tiring for everyone. We decided to ______ for a while by the river.",
    options: ["run", "rest", "rub", "ruin"], answer: 1, vocabIndex: 21 },
  { q: "She borrowed a book from the library two weeks ago. She promised to ______ it before it was due.",
    options: ["rob", "rush", "return", "roll"], answer: 2, vocabIndex: 22 },
  { q: "His teacher gave him helpful notes on his first draft. He had to ______ his essay before turning it in.",
    options: ["rob", "roll", "rub", "revise"], answer: 3, vocabIndex: 23 },
  { q: "Late at night, two men wearing masks entered the shop. They tried to ______ the small corner store.",
    options: ["rob", "ruin", "rest", "run"], answer: 0, vocabIndex: 24 },
  { q: "She let go of the ball at the top of the hill. It began to ______ slowly down the grass.",
    options: ["rush", "roll", "rub", "ruin"], answer: 1, vocabIndex: 25 },
  { q: "Her hands were freezing after walking in the snow. She began to ______ them together near the fire.",
    options: ["roll", "run", "rub", "rob"], answer: 2, vocabIndex: 26 },
  { q: "Dark clouds rolled in just before the outdoor party started. Heavy rain almost began to ______ everything.",
    options: ["run", "rest", "revise", "ruin"], answer: 3, vocabIndex: 27 },
  { q: "After the final school bell rings, the playground gets noisy. The children love to ______ around for an hour.",
    options: ["run", "walk", "rest", "rob"], answer: 0, vocabIndex: 28 },
  { q: "Every single morning before breakfast, he puts on his shoes. My grandfather likes to ______ around the block.",
    options: ["run", "walk", "rush", "roll"], answer: 1, vocabIndex: 29 },
  { q: "I still have ten more math problems to finish tonight. Please don't ______ me while I work.",
    options: ["ruin", "rob", "rush", "rest"], answer: 2, vocabIndex: 30 },
  { q: "The new restaurant added several new dishes to its menu. The food seemed to ______ even picky customers.",
    options: ["score", "seem", "set", "satisfy"], answer: 3, vocabIndex: 31 },
  { q: "She gets a small amount of allowance from her parents each week. She tries to ______ a little of it.",
    options: ["save", "score", "seem", "set"], answer: 0, vocabIndex: 32 },
  { q: "The match was close, but our forward played brilliantly today. She managed to ______ two goals before the end.",
    options: ["satisfy", "score", "seem", "save"], answer: 1, vocabIndex: 33 },
  { q: "It was her very first day at the new school. She didn't ______ nervous at all in class.",
    options: ["set", "save", "seem", "score"], answer: 2, vocabIndex: 34 },
  { q: "Dinner was almost ready and the food smelled wonderful. Could you please ______ the table for us?",
    options: ["seem", "save", "score", "set"], answer: 3, vocabIndex: 35 },
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
  "allowance": { pos: "n.", en_def: "a regular amount of money given, often to children", cn_def: "零用錢" },
  "batch": { pos: "n.", en_def: "a group of things made or done together", cn_def: "一批" },
  "ceremony": { pos: "n.", en_def: "a formal event held to mark something important", cn_def: "儀式" },
  "draft": { pos: "n.", en_def: "an early, unfinished version of a piece of writing", cn_def: "草稿" },
  "environment": { pos: "n.", en_def: "the natural world, including air, water, and land", cn_def: "環境" },
  "essay": { pos: "n.", en_def: "a short piece of writing on a topic", cn_def: "文章；作文" },
  "farmhouse": { pos: "n.", en_def: "a house on a farm", cn_def: "農舍" },
  "fever": { pos: "n.", en_def: "a higher than normal body temperature caused by illness", cn_def: "發燒" },
  "flu": { pos: "n.", en_def: "a common illness that causes fever and tiredness", cn_def: "流感" },
  "forward": { pos: "n.", en_def: "a player whose main job is to score goals", cn_def: "（球隊的）前鋒" },
  "harvest": { pos: "n.", en_def: "the time when crops are gathered, or the crops themselves", cn_def: "收成" },
  "hens": { pos: "n.", en_def: "female chickens", cn_def: "母雞（複數）" },
  "mechanic": { pos: "n.", en_def: "a person who repairs vehicles or machines", cn_def: "技工" },
  "menu": { pos: "n.", en_def: "a list of food available at a restaurant", cn_def: "菜單" },
  "picky": { pos: "adj.", en_def: "very particular about what one likes", cn_def: "挑剔的" },
  "seal": { pos: "n.", en_def: "a sea animal with flippers that lives in cold water", cn_def: "海豹" },
  "striker": { pos: "n.", en_def: "a soccer player whose main job is to score goals", cn_def: "（足球）前鋒" },
  "summit": { pos: "n.", en_def: "the highest point of a mountain", cn_def: "山頂" },
  "village": { pos: "n.", en_def: "a small community in the countryside", cn_def: "村莊" },
  "villagers": { pos: "n.", en_def: "people who live in a village", cn_def: "村民（複數）" },
  "well": { pos: "n.", en_def: "a deep hole in the ground used to get water", cn_def: "井" },
};
Object.keys(EXTRA_GLOSSES).forEach(key => {
  const g = EXTRA_GLOSSES[key];
  if (!LOOKUP[key]) {
    LOOKUP[key] = { pos: g.pos, en_def: g.en_def, cn_def: g.cn_def, combined: [g] };
  }
});
