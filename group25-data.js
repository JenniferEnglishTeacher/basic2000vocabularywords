// ============================================================
// Group 25 Quiz Data: Sports / Games / Outdoor Activities
// Full word set (21 words) — sports, games, and outdoor
// activities from the "sports / countries / transportation /
// places" theme. Music/hobbies will follow as the next group.
// ============================================================

const QUIZ_CONFIG = {
  groupName: "Group 25 - Sports / Games / Outdoor Activities (運動/遊戲/戶外活動)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

// ---- Part 1 data: spelling practice (21 words) ----
const VOCAB = [
  { word: "baseball", pos: "n.", cn_def: "棒球", en_def: "a sport played with a bat and ball between two teams",
    sentence: "Every Saturday afternoon, my brother and his friends play {{BLANK}} at the local park.",
    cn: "每個星期六下午，我哥哥和他的朋友都會在當地的公園打棒球。" },
  { word: "basketball", pos: "n.", cn_def: "籃球", en_def: "a sport in which two teams try to throw a ball through a high hoop",
    sentence: "He practices {{BLANK}} in the school gym every day after class.",
    cn: "他每天下課後都會在學校體育館練習打籃球。" },
  { word: "bowling", pos: "n.", cn_def: "保齡球", en_def: "a game in which a heavy ball is rolled to knock down pins",
    sentence: "We went {{BLANK}} together for my cousin's birthday party last weekend.",
    cn: "我們上週末為了表哥的生日派對一起去打保齡球。" },
  { word: "dodge ball", pos: "n.", cn_def: "躲避球", en_def: "a game where players try to avoid being hit by a thrown ball",
    sentence: "During PE class, the whole class played {{BLANK}} in the gym today.",
    cn: "今天的體育課上，全班在體育館裡玩了躲避球。" },
  { word: "football", pos: "n.", cn_def: "美式足球", en_def: "a sport played with an oval ball, popular in the United States",
    sentence: "He watches {{BLANK}} games with his father on television every Sunday.",
    cn: "他每個星期天都會和爸爸一起在電視上看美式足球比賽。" },
  { word: "golf", pos: "n.", cn_def: "高爾夫球", en_def: "a sport in which players hit a small ball into holes using clubs",
    sentence: "My grandfather still plays {{BLANK}} with his old friends every weekend.",
    cn: "我爺爺每個週末還是會和他的老朋友一起打高爾夫球。" },
  { word: "soccer", pos: "n.", cn_def: "足球", en_def: "a sport in which two teams try to kick a ball into a goal",
    sentence: "She joined the school {{BLANK}} team after moving to her new school.",
    cn: "她搬到新學校後加入了學校的足球隊。" },
  { word: "table tennis", pos: "n.", cn_def: "桌球", en_def: "a sport played on a table with small paddles and a light ball",
    sentence: "We set up a {{BLANK}} table in the garage to play during the summer.",
    cn: "我們在車庫裡擺了一張桌球桌，要在夏天玩。" },
  { word: "tennis", pos: "n.", cn_def: "網球", en_def: "a sport played with rackets and a ball over a net",
    sentence: "My older sister takes {{BLANK}} lessons at the community center twice a week.",
    cn: "我姐姐每週兩次在社區中心上網球課。" },
  { word: "volleyball", pos: "n.", cn_def: "排球", en_def: "a sport in which two teams hit a ball over a high net",
    sentence: "The students set up a net to play {{BLANK}} on the beach.",
    cn: "學生們在海邊架了一個網子來打排球。" },
  { word: "frisbee", pos: "n.", cn_def: "飛盤", en_def: "a flat plastic disk that is thrown and caught for fun",
    sentence: "He brought a {{BLANK}} to the park so we could play with his dog.",
    cn: "他帶了一個飛盤去公園，這樣我們就能跟他的狗一起玩。" },
  { word: "roller blade", pos: "n.", cn_def: "直排輪", en_def: "a boot with a single row of small wheels, used for skating",
    sentence: "She wore her new {{BLANK}} to skate around the smooth path by the river.",
    cn: "她穿著新買的直排輪沿著河邊那條平滑的步道溜冰。" },
  { word: "roller skate", pos: "n.", cn_def: "輪式溜冰鞋", en_def: "a shoe with small wheels attached to the bottom",
    sentence: "My little cousin got a pair of {{BLANK}} for her birthday this year.",
    cn: "我的小表妹今年生日收到了一雙輪式溜冰鞋。" },
  { word: "seesaw", pos: "n.", cn_def: "蹺蹺板", en_def: "a long board balanced in the middle for children to ride up and down",
    sentence: "The two children took turns going up and down on the {{BLANK}}.",
    cn: "那兩個小孩輪流坐在蹺蹺板上一上一下地玩。" },
  { word: "slide", pos: "n.", cn_def: "滑梯", en_def: "a smooth sloped surface that children climb up and slide down",
    sentence: "The toddler laughed happily every time she went down the {{BLANK}}.",
    cn: "那個幼兒每次滑下滑梯時都笑得很開心。" },
  { word: "softball", pos: "n.", cn_def: "壘球", en_def: "a sport similar to baseball, played with a larger, softer ball",
    sentence: "Our school's {{BLANK}} team won the regional championship this spring.",
    cn: "我們學校的壘球隊在今年春天贏得了區域冠軍。" },
  { word: "swim", pos: "v.", cn_def: "游泳", en_def: "to move through water using your arms and legs",
    sentence: "She learned to {{BLANK}} when she was only four years old.",
    cn: "她在四歲的時候就學會了游泳。" },
  { word: "jog", pos: "v.", cn_def: "慢跑", en_def: "to run slowly, usually for exercise",
    sentence: "He likes to {{BLANK}} around the neighborhood early every morning.",
    cn: "他喜歡每天早上在社區附近慢跑。" },
  { word: "skate", pos: "v.", cn_def: "溜冰", en_def: "to glide smoothly on ice or wheels",
    sentence: "They went to the indoor rink to {{BLANK}} during their winter vacation.",
    cn: "他們在寒假期間去室內溜冰場溜冰。" },
  { word: "ski", pos: "v.", cn_def: "滑雪", en_def: "to glide over snow using long narrow boards attached to the feet",
    sentence: "My family travels to the mountains every winter to {{BLANK}} together.",
    cn: "我家每年冬天都會一起去山上滑雪。" },
  { word: "surf", pos: "v.", cn_def: "衝浪", en_def: "to ride on ocean waves using a board",
    sentence: "He wakes up before sunrise to {{BLANK}} when the waves are the best.",
    cn: "他會在日出前起床去衝浪，因為那時的海浪最棒。" }
];

// ---- Part 2 data: 21 MCQs ----
// CEFR A2 / 國中會考 level: exactly 2 sentences, ~18-30 words total,
// rich concrete context clue, one blank, simple surrounding vocabulary.
// Answer letters balanced across A/B/C/D (6/5/5/5), no adjacent repeats.
// vocabIndex points to the exact VOCAB array entry being tested.
const MCQS = [
  { q: "Every Saturday afternoon, my brother grabs his bat and glove and heads to the park with friends. They always play ______ together until it gets dark.",
    options: ["golf","baseball","bowling","tennis"], answer: 1, vocabIndex: 0 },
  { q: "After school every single day, he heads straight to the school gym carrying a round orange ball. He practices ______ there for almost an hour.",
    options: ["soccer","golf","bowling","basketball"], answer: 3, vocabIndex: 1 },
  { q: "For my cousin's birthday celebration last weekend, our whole family went somewhere fun with heavy round balls and tall pins. We all went ______ together that evening.",
    options: ["swimming","jogging","bowling","skiing"], answer: 2, vocabIndex: 2 },
  { q: "During PE class today, the teacher brought out a few soft rubber balls for everyone to use. The whole class played ______ in the gym.",
    options: ["golf","tennis","softball","dodge ball"], answer: 3, vocabIndex: 3 },
  { q: "Every single Sunday, he sits on the couch with his father watching players in big helmets and shoulder pads. They always enjoy a ______ game on television.",
    options: ["basketball","football","baseball","soccer"], answer: 1, vocabIndex: 4 },
  { q: "Every weekend without fail, my grandfather meets his old friends at the same grassy course with eighteen holes. They spend the whole morning playing ______ together.",
    options: ["tennis","bowling","baseball","golf"], answer: 3, vocabIndex: 5 },
  { q: "After switching schools last month, she wanted to make new friends quickly through something she loved. She joined the school ______ team right away.",
    options: ["basketball","soccer","golf","bowling"], answer: 1, vocabIndex: 6 },
  { q: "Wanting something fun to do during summer break, we cleared space in the garage for small paddles and a light ball. We set up a ______ table there.",
    options: ["table tennis","tennis","basketball","volleyball"], answer: 0, vocabIndex: 7 },
  { q: "Twice every week, my older sister heads to the community center carrying a racket and a few yellow balls. She takes ______ lessons there with a coach.",
    options: ["golf","bowling","tennis","soccer"], answer: 2, vocabIndex: 8 },
  { q: "Down at the sunny beach last weekend, the students set up a tall net stuck into the sand. They spent the whole afternoon playing ______ together.",
    options: ["volleyball","basketball","baseball","tennis"], answer: 0, vocabIndex: 9 },
  { q: "Heading to the park with his energetic dog, he remembered to bring along a flat plastic disk for them to play with. He tossed the ______ across the grass.",
    options: ["softball","golf ball","frisbee","tennis ball"], answer: 2, vocabIndex: 10 },
  { q: "Along the smooth path beside the river, she laced up something new with small wheels attached to the bottom. She wore her ______ to skate around for hours.",
    options: ["roller blade","sneakers","slippers","sandals"], answer: 0, vocabIndex: 11 },
  { q: "For her birthday this year, my little cousin unwrapped a colorful box and found something exciting with tiny wheels inside. She got a pair of ______ to try out immediately.",
    options: ["sneakers","sandals","roller skate","boots"], answer: 2, vocabIndex: 12 },
  { q: "At the playground after school, two small children climbed onto a long wooden board balanced in the middle. They took turns going up and down on the ______.",
    options: ["slide","swing","ladder","seesaw"], answer: 3, vocabIndex: 13 },
  { q: "At the same playground, a tired toddler climbed up a tall metal ladder near the sandbox every afternoon. She laughed happily each time she went down the ______.",
    options: ["seesaw","swing","slide","ladder"], answer: 2, vocabIndex: 14 },
  { q: "This spring, our school's team practiced hard every afternoon using a ball larger and softer than the one used in baseball. Their ______ team finally won the regional championship.",
    options: ["basketball","softball","soccer","volleyball"], answer: 1, vocabIndex: 15 },
  { q: "At only four years old, she already felt completely comfortable in deep water without any floats. She had learned to ______ at an unusually young age.",
    options: ["swim","dive","float","splash"], answer: 0, vocabIndex: 16 },
  { q: "Every single morning before the sun fully rises, he laces up his running shoes and heads outside. He likes to ______ around the neighborhood for exercise.",
    options: ["walk","jog","bike","drive"], answer: 1, vocabIndex: 17 },
  { q: "During their winter vacation last year, the whole family visited an indoor rink filled with cold, smooth ice. They spent hours learning to ______ together.",
    options: ["skate","swim","surf","jog"], answer: 0, vocabIndex: 18 },
  { q: "Every single winter, my entire family packs warm clothes and travels together to the snowy mountains nearby. We always go there to ______ as a family.",
    options: ["swim","surf","jog","ski"], answer: 3, vocabIndex: 19 },
  { q: "Long before sunrise, he checks the ocean conditions and grabs his board from the garage right away. He always wakes up early to ______ when the waves are perfect.",
    options: ["surf","swim","sail","row"], answer: 0, vocabIndex: 20 },
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
  "beach": { pos: "n.", en_def: "the sandy or rocky area next to the ocean", cn_def: "海灘" },
  "bike": { pos: "v.", en_def: "to ride a bicycle", cn_def: "騎自行車" },
  "birthday": { pos: "n.", en_def: "the day of the year a person was born", cn_def: "生日" },
  "boots": { pos: "n.", en_def: "shoes that cover the foot and part of the leg", cn_def: "靴子" },
  "championship": { pos: "n.", en_def: "a competition to find the best team or player", cn_def: "冠軍賽" },
  "community": { pos: "n.", en_def: "a group of people living in the same area", cn_def: "社區" },
  "dive": { pos: "v.", en_def: "to jump head-first into water", cn_def: "跳水" },
  "drive": { pos: "v.", en_def: "to operate and control a car", cn_def: "開車" },
  "float": { pos: "v.", en_def: "to stay on top of water without sinking", cn_def: "漂浮" },
  "garage": { pos: "n.", en_def: "a building where a car is kept", cn_def: "車庫" },
  "gym": { pos: "n.", en_def: "a place with equipment for exercise", cn_def: "體育館；健身房" },
  "indoor": { pos: "adj.", en_def: "happening or used inside a building", cn_def: "室內的" },
  "jogging": { pos: "n.", en_def: "the activity of running slowly for exercise", cn_def: "慢跑" },
  "ladder": { pos: "n.", en_def: "a structure with steps used to climb up or down", cn_def: "梯子" },
  "neighborhood": { pos: "n.", en_def: "the area around where you live", cn_def: "社區；鄰里" },
  "park": { pos: "n.", en_def: "a public area with grass and trees for people to enjoy", cn_def: "公園" },
  "path": { pos: "n.", en_def: "a narrow way for walking", cn_def: "小路" },
  "regional": { pos: "adj.", en_def: "relating to a particular area", cn_def: "區域的" },
  "rink": { pos: "n.", en_def: "a smooth area used for ice skating", cn_def: "溜冰場" },
  "river": { pos: "n.", en_def: "a long natural flow of water", cn_def: "河流" },
  "row": { pos: "v.", en_def: "to move a boat using oars", cn_def: "划船" },
  "sail": { pos: "v.", en_def: "to travel on water using a boat with sails", cn_def: "航行" },
  "sandals": { pos: "n.", en_def: "light open shoes worn in warm weather", cn_def: "涼鞋" },
  "skiing": { pos: "n.", en_def: "the activity of moving over snow on skis", cn_def: "滑雪（活動）" },
  "slippers": { pos: "n.", en_def: "soft, comfortable shoes worn indoors", cn_def: "拖鞋" },
  "sneakers": { pos: "n.", en_def: "comfortable sports shoes used for running or exercise", cn_def: "運動鞋" },
  "splash": { pos: "v.", en_def: "to make liquid scatter by hitting it suddenly", cn_def: "潑水" },
  "sunrise": { pos: "n.", en_def: "the time in the morning when the sun first appears", cn_def: "日出" },
  "swimming": { pos: "n.", en_def: "the activity of moving through water using the body", cn_def: "游泳（活動）" },
  "swing": { pos: "n.", en_def: "a seat hung from ropes or chains for swinging back and forth", cn_def: "鞦韆" },
  "vacation": { pos: "n.", en_def: "a period of time away from school or work for rest", cn_def: "假期" },
  "waves": { pos: "n.", en_def: "moving ridges of water in the ocean", cn_def: "海浪（複數）" },
  "walk": { pos: "v.", en_def: "to move on foot at a normal pace", cn_def: "走路" }
};
Object.keys(EXTRA_GLOSSES).forEach(key => {
  const g = EXTRA_GLOSSES[key];
  if (!LOOKUP[key]) {
    LOOKUP[key] = { pos: g.pos, en_def: g.en_def, cn_def: g.cn_def, combined: [g] };
  }
});

// ---- Compound-option aliases so MCQ option lookups resolve correctly ----
const COMPOUND_ALIASES = {
  "golf ball": "golf", "tennis ball": "tennis"
};
Object.keys(COMPOUND_ALIASES).forEach(compound => {
  const base = COMPOUND_ALIASES[compound];
  if (!LOOKUP[compound] && LOOKUP[base]) {
    LOOKUP[compound] = LOOKUP[base];
  }
});
