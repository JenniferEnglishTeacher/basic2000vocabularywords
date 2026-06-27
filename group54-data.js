// ============================================================
// Group 54 Quiz Data: Function Words / Common Nouns, Part 7
// Full word set (30 words) — abstract and concrete common
// nouns from the "function words / common nouns" theme.
// Continues from Group 53 (Common Nouns, Part 4). This is the
// seventh of ~9 groups (48-56) covering this theme at ~30
// words per group.
// Continues the simpler/shorter MCQ style introduced in
// Group 37 (~16-26 words, 2 sentences, one blank).
// ============================================================

const QUIZ_CONFIG = {
  groupName: "Group 54 - Common Nouns, Part 5 (常見名詞 五)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

// ---- Part 1 data: spelling practice (30 words) ----
const VOCAB = [
  { word: "safety", pos: "n.", cn_def: "安全性", en_def: "the state of being free from harm or danger",
    sentence: "The coach reminded everyone about {{BLANK}} before the swim meet began.",
    cn: "教練在游泳比賽開始前提醒大家注意安全。" },
  { word: "sale", pos: "n.", cn_def: "出售", en_def: "the act of selling something",
    sentence: "The shop held a big {{BLANK}} on winter coats last weekend.",
    cn: "這家店上週末舉行了冬季外套的大特賣。" },
  { word: "sample", pos: "n.", cn_def: "樣本", en_def: "a small part used to show what something is like",
    sentence: "She tried a free {{BLANK}} of cheese at the grocery store.",
    cn: "她在雜貨店試吃了一塊免費的起司樣本。" },
  { word: "scenery", pos: "n.", cn_def: "風景", en_def: "the natural features of a landscape",
    sentence: "They stopped the car to admire the beautiful mountain {{BLANK}}.",
    cn: "他們停下車欣賞美麗的山中風景。" },
  { word: "seat", pos: "n.", cn_def: "座位", en_def: "a place where someone can sit",
    sentence: "He saved a {{BLANK}} for his friend near the front of the bus.",
    cn: "他在公車前面幫朋友留了一個座位。" },
  { word: "secret", pos: "n.", cn_def: "秘密", en_def: "something kept hidden from others",
    sentence: "She promised never to tell anyone his {{BLANK}}.",
    cn: "她答應永遠不告訴任何人他的秘密。" },
  { word: "section", pos: "n.", cn_def: "節", en_def: "a part of something larger",
    sentence: "The library has a special {{BLANK}} just for comic books.",
    cn: "圖書館有一個專門放漫畫書的區域。" },
  { word: "sentence", pos: "n.", cn_def: "句子", en_def: "a group of words that expresses a complete thought",
    sentence: "She underlined the most important {{BLANK}} in the paragraph.",
    cn: "她在段落中畫線標出最重要的句子。" },
  { word: "service", pos: "n.", cn_def: "服務", en_def: "help or work done for someone else",
    sentence: "The restaurant was known for its fast, friendly {{BLANK}}.",
    cn: "這家餐廳以快速又友善的服務聞名。" },
  { word: "shore", pos: "n.", cn_def: "岸邊", en_def: "the land along the edge of the sea or a lake",
    sentence: "They walked slowly along the {{BLANK}} collecting seashells.",
    cn: "他們沿著岸邊慢慢散步並收集貝殼。" },
  { word: "side", pos: "n.", cn_def: "旁邊", en_def: "a position next to or part of something",
    sentence: "She placed her backpack on the {{BLANK}} of her desk.",
    cn: "她把背包放在書桌的旁邊。" },
  { word: "skill", pos: "n.", cn_def: "技能", en_def: "the ability to do something well",
    sentence: "Playing the violin well takes years of practice and {{BLANK}}.",
    cn: "把小提琴拉好需要多年的練習和技能。" },
  { word: "smoke", pos: "n.", cn_def: "煙霧", en_def: "the gray or black cloud produced by something burning",
    sentence: "Thick {{BLANK}} rose from the campfire into the evening sky.",
    cn: "濃濃的煙霧從營火升起，飄向夜空。" },
  { word: "society", pos: "n.", cn_def: "社會", en_def: "a large group of people living together with shared customs",
    sentence: "The teacher discussed how technology has changed modern {{BLANK}}.",
    cn: "老師討論了科技如何改變了現代社會。" },
  { word: "song", pos: "n.", cn_def: "歌曲", en_def: "a piece of music with words that is sung",
    sentence: "She hummed her favorite {{BLANK}} while doing the dishes.",
    cn: "她在洗碗時哼著她最喜歡的歌曲。" },
  { word: "soul", pos: "n.", cn_def: "靈魂", en_def: "the spiritual part of a person",
    sentence: "The old folk tale spoke of a brave warrior's {{BLANK}}.",
    cn: "這個古老的民間故事講述了一位勇敢戰士的靈魂。" },
  { word: "sound", pos: "n.", cn_def: "聲音", en_def: "something that can be heard",
    sentence: "A strange {{BLANK}} came from the attic late at night.",
    cn: "深夜時閣樓傳出一個奇怪的聲音。" },
  { word: "space", pos: "n.", cn_def: "空間", en_def: "an empty area or amount of room",
    sentence: "They cleared a {{BLANK}} in the garage for the new bicycles.",
    cn: "他們在車庫裡清出一個空間放新的自行車。" },
  { word: "speaker", pos: "n.", cn_def: "演講者", en_def: "a person who gives a speech",
    sentence: "The school invited a guest {{BLANK}} to talk about careers.",
    cn: "學校邀請了一位嘉賓演講者來談論職業生涯。" },
  { word: "speech", pos: "n.", cn_def: "演講", en_def: "a formal talk given to an audience",
    sentence: "She practiced her graduation {{BLANK}} in front of the mirror.",
    cn: "她在鏡子前練習她的畢業演講。" },
  { word: "speed", pos: "n.", cn_def: "速度", en_def: "how fast something moves",
    sentence: "The cyclist increased her {{BLANK}} as she neared the finish line.",
    cn: "這位自行車手在接近終點線時加快了她的速度。" },
  { word: "spirit", pos: "n.", cn_def: "精神", en_def: "a person's mood or attitude",
    sentence: "The whole team showed great {{BLANK}} despite the difficult loss.",
    cn: "儘管輸了一場艱難的比賽，全隊仍展現出極佳的精神。" },
  { word: "step", pos: "n.", cn_def: "步", en_def: "a movement made by lifting the foot and putting it down",
    sentence: "She took a careful {{BLANK}} onto the icy sidewalk.",
    cn: "她小心地踏出一步走上結冰的人行道。" },
  { word: "story", pos: "n.", cn_def: "故事", en_def: "an account of events, real or imagined",
    sentence: "Grandpa told the same funny {{BLANK}} every holiday dinner.",
    cn: "爺爺每年節日晚餐都講同一個有趣的故事。" },
  { word: "style", pos: "n.", cn_def: "風格", en_def: "a particular way of doing or making something",
    sentence: "Her painting {{BLANK}} changed a lot after studying abroad.",
    cn: "她的繪畫風格在出國留學後改變了很多。" },
  { word: "success", pos: "n.", cn_def: "成功", en_def: "the achievement of a goal or aim",
    sentence: "Her hard work finally led to {{BLANK}} on the final exam.",
    cn: "她的努力最終讓她在期末考試上取得成功。" },
  { word: "swing", pos: "n.", cn_def: "鞦韆", en_def: "a seat hung by ropes or chains for swinging back and forth",
    sentence: "The children took turns on the old wooden {{BLANK}} in the yard.",
    cn: "孩子們輪流玩院子裡那個老舊的木製鞦韆。" },
  { word: "symbol", pos: "n.", cn_def: "符號", en_def: "a sign or mark that represents something else",
    sentence: "A red heart is often used as a {{BLANK}} of love.",
    cn: "紅心常常被用作愛的符號。" },
  { word: "system", pos: "n.", cn_def: "系統", en_def: "a set of connected parts working together",
    sentence: "The school installed a new {{BLANK}} to track student attendance.",
    cn: "學校安裝了一套新系統來追蹤學生的出席狀況。" },
  { word: "tail", pos: "n.", cn_def: "尾巴", en_def: "the part at the back of an animal's body",
    sentence: "The puppy wagged its {{BLANK}} excitedly when she came home.",
    cn: "她回家時，小狗興奮地搖著尾巴。" }
];

// ---- Part 2 data: 30 MCQs ----
// Continuing the simpler/shorter MCQ style from Group 37:
// ~16-26 words, exactly 2 sentences, one blank, 4 options.
// Answer letters balanced across A/B/C/D, no adjacent repeats.
// vocabIndex points to the exact VOCAB array entry being tested.
const MCQS = [
  { q: "Athletes were told to stretch carefully before entering the pool. The coach reminded everyone about ______ before the meet began.",
    options: ["safety", "sale", "sample", "secret"], answer: 0, vocabIndex: 0 },
  { q: "Shoppers lined up early to take advantage of discounted prices. The shop held a big ______ on winter coats last weekend.",
    options: ["safety", "sale", "section", "service"], answer: 1, vocabIndex: 1 },
  { q: "She wanted to taste something new before deciding to buy a whole block. She tried a free ______ of cheese at the store.",
    options: ["sale", "skill", "sample", "speech"], answer: 2, vocabIndex: 2 },
  { q: "They pulled over along the road to take in the breathtaking view. They stopped to admire the beautiful mountain ______.",
    options: ["sample", "side", "sound", "scenery"], answer: 3, vocabIndex: 3 },
  { q: "The bus filled up quickly during the busy morning commute. He saved a ______ for his friend near the front.",
    options: ["seat", "side", "section", "space"], answer: 0, vocabIndex: 4 },
  { q: "She knew how much it meant to him that nobody else found out. She promised never to tell anyone his ______.",
    options: ["sentence", "secret", "story", "song"], answer: 1, vocabIndex: 5 },
  { q: "Fans of graphic novels always headed straight to one corner of the building. The library has a special ______ just for comic books.",
    options: ["system", "service", "section", "speech"], answer: 2, vocabIndex: 6 },
  { q: "She wanted to remember the key point from her reading homework. She underlined the most important ______ in the paragraph.",
    options: ["secret", "symbol", "step", "sentence"], answer: 3, vocabIndex: 7 },
  { q: "Customers often praised how quickly their orders arrived at the table. The restaurant was known for its fast, friendly ______.",
    options: ["service", "sale", "skill", "sound"], answer: 0, vocabIndex: 8 },
  { q: "They wandered slowly near the water, looking down at the sand. They walked along the ______ collecting seashells.",
    options: ["side", "shore", "space", "scenery"], answer: 1, vocabIndex: 9 },
  { q: "She wanted her bag within easy reach during class today. She placed her backpack on the ______ of her desk.",
    options: ["shore", "seat", "side", "step"], answer: 2, vocabIndex: 10 },
  { q: "Mastering a musical instrument doesn't happen overnight for most students. Playing the violin well takes years of practice and ______.",
    options: ["speed", "sound", "spirit", "skill"], answer: 3, vocabIndex: 11 },
  { q: "Marshmallows roasted slowly as everyone gathered closer for warmth that night. Thick ______ rose from the campfire into the evening sky.",
    options: ["smoke", "sound", "speech", "scenery"], answer: 0, vocabIndex: 12 },
  { q: "Class conversation turned to how daily habits have shifted with new devices. The teacher discussed how technology changed modern ______.",
    options: ["system", "society", "symbol", "style"], answer: 1, vocabIndex: 13 },
  { q: "A familiar tune kept her company during the evening chores. She hummed her favorite ______ while doing the dishes.",
    options: ["sound", "speech", "song", "sentence"], answer: 2, vocabIndex: 14 },
  { q: "The story passed down through generations described great inner strength. The old folk tale spoke of a brave warrior's ______.",
    options: ["skill", "side", "speed", "soul"], answer: 3, vocabIndex: 15 },
  { q: "Something unusual could be heard above the bedroom ceiling that night. A strange ______ came from the attic late at night.",
    options: ["sound", "smoke", "speech", "symbol"], answer: 0, vocabIndex: 16 },
  { q: "The family wanted somewhere new to park the kids' new bikes. They cleared a ______ in the garage for the bicycles.",
    options: ["seat", "space", "side", "section"], answer: 1, vocabIndex: 17 },
  { q: "An expert in several fields visited the assembly to talk with students. The school invited a guest ______ to talk about careers.",
    options: ["society", "system", "speaker", "symbol"], answer: 2, vocabIndex: 18 },
  { q: "She rehearsed every line carefully before the ceremony next week. She practiced her graduation ______ in front of the mirror.",
    options: ["song", "story", "secret", "speech"], answer: 3, vocabIndex: 19 },
  { q: "The competitor pushed harder during the last stretch of the course. The cyclist increased her ______ as she neared the finish line.",
    options: ["speed", "skill", "style", "spirit"], answer: 0, vocabIndex: 20 },
  { q: "Even after losing the championship, the players stayed positive together. The whole team showed great ______ despite the difficult loss.",
    options: ["speed", "spirit", "style", "skill"], answer: 1, vocabIndex: 21 },
  { q: "The path looked slippery after the freezing rain overnight. She took a careful ______ onto the icy sidewalk.",
    options: ["side", "sound", "step", "seat"], answer: 2, vocabIndex: 22 },
  { q: "Every family dinner included one particular tale that always made everyone laugh. Grandpa told the same funny ______ every holiday dinner.",
    options: ["song", "speech", "secret", "story"], answer: 3, vocabIndex: 23 },
  { q: "Her artwork looked noticeably different after spending a year overseas. Her painting ______ changed a lot after studying abroad.",
    options: ["style", "speed", "spirit", "system"], answer: 0, vocabIndex: 24 },
  { q: "Months of studying every night finally paid off when the grades came out. Her hard work finally led to ______ on the exam.",
    options: ["service", "success", "sale", "sample"], answer: 1, vocabIndex: 25 },
  { q: "An old favorite in the backyard kept the children entertained all afternoon. The children took turns on the old wooden ______.",
    options: ["seat", "side", "swing", "step"], answer: 2, vocabIndex: 26 },
  { q: "A particular shape has come to represent affection in many cultures. A red heart is often used as a ______ of love.",
    options: ["sound", "speech", "style", "symbol"], answer: 3, vocabIndex: 27 },
  { q: "The school wanted a more accurate way to record who showed up each day. The school installed a new ______ to track attendance.",
    options: ["system", "society", "symbol", "service"], answer: 0, vocabIndex: 28 },
  { q: "The little dog couldn't hide its excitement at the front door. The puppy wagged its ______ excitedly when she came home.",
    options: ["sound", "tail", "spirit", "step"], answer: 1, vocabIndex: 29 },
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
  "abroad": { pos: "adv.", en_def: "in or to a foreign country", cn_def: "在海外；出國" },
  "assembly": { pos: "n.", en_def: "a gathering of people, often at a school", cn_def: "全校集會" },
  "attic": { pos: "n.", en_def: "a room or space just below the roof of a house", cn_def: "閣樓" },
  "campfire": { pos: "n.", en_def: "a fire built outdoors, often for warmth or cooking", cn_def: "營火" },
  "ceremony": { pos: "n.", en_def: "a formal event held to mark something important", cn_def: "典禮" },
  "championship": { pos: "n.", en_def: "a competition to find the best team or player", cn_def: "冠軍賽" },
  "chores": { pos: "n.", en_def: "small jobs done regularly, especially around the house", cn_def: "家務（複數）" },
  "commute": { pos: "n.", en_def: "the journey between home and work or school", cn_def: "通勤" },
  "competitor": { pos: "n.", en_def: "a person who takes part in a contest", cn_def: "參賽者" },
  "cyclist": { pos: "n.", en_def: "a person who rides a bicycle", cn_def: "自行車手" },
  "devices": { pos: "n.", en_def: "machines or tools, especially electronic ones", cn_def: "裝置（複數）" },
  "graphic novels": { pos: "n.", en_def: "books that tell a story using comic-style art", cn_def: "圖像小說" },
  "marshmallows": { pos: "n.", en_def: "soft, sweet treats often roasted over a fire", cn_def: "棉花糖（複數）" },
  "overseas": { pos: "adv.", en_def: "in or to a foreign country", cn_def: "海外地" },
  "paragraph": { pos: "n.", en_def: "a section of writing made up of several sentences", cn_def: "段落" },
  "rehearsed": { pos: "v.", en_def: "practiced something before performing it for real", cn_def: "排練（過去式）" },
  "seashells": { pos: "n.", en_def: "the hard outer coverings of sea creatures", cn_def: "貝殼（複數）" },
  "warrior": { pos: "n.", en_def: "a person who fights in battle", cn_def: "戰士" },
};
Object.keys(EXTRA_GLOSSES).forEach(key => {
  const g = EXTRA_GLOSSES[key];
  if (!LOOKUP[key]) {
    LOOKUP[key] = { pos: g.pos, en_def: g.en_def, cn_def: g.cn_def, combined: [g] };
  }
});
