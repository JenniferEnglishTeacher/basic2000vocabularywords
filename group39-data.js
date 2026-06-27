// ============================================================
// Group 39 Quiz Data: Home / Household / Objects, Part 1
// Full word set (36 words) — house parts, rooms, and basic
// furniture from the new "home / household / objects" theme
// (178 words total). This is the first of 5 groups (39-43)
// covering this theme at ~36 words per group.
// Continues the simpler/shorter MCQ style introduced in
// Group 37 (~16-26 words, 2 sentences, one blank).
// Note: the spreadsheet's dictionary definition for "yard" is
// the measurement-unit sense (3 feet), not the household sense;
// corrected here using the 庭院 Chinese gloss as confirmation.
// ============================================================

const QUIZ_CONFIG = {
  groupName: "Group 39 - Home / Household, Part 1 (居家環境 一)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

// ---- Part 1 data: spelling practice (36 words) ----
const VOCAB = [
  { word: "house", pos: "n.", cn_def: "房子", en_def: "a building where people live",
    sentence: "Our new {{BLANK}} has a small garden in the back.",
    cn: "我們的新房子後面有一個小花園。" },
  { word: "gate", pos: "n.", cn_def: "大門", en_def: "a movable barrier in a fence or wall",
    sentence: "Please remember to close the {{BLANK}} after you come inside.",
    cn: "進來後請記得關上大門。" },
  { word: "hall", pos: "n.", cn_def: "大廳", en_def: "a passage inside a building that leads to other rooms",
    sentence: "Her bedroom is just down the {{BLANK}} from the kitchen.",
    cn: "她的臥室就在廚房旁邊的大廳走道過去。" },
  { word: "garden", pos: "n.", cn_def: "花園", en_def: "an area where flowers or vegetables are grown",
    sentence: "My grandmother grows roses in her small {{BLANK}} every spring.",
    cn: "我奶奶每年春天都在她的小花園裡種玫瑰。" },
  { word: "yard", pos: "n.", cn_def: "庭院", en_def: "an outdoor area of land next to a house",
    sentence: "The children love to play catch in the front {{BLANK}}.",
    cn: "孩子們喜歡在前院玩接球遊戲。" },
  { word: "garage", pos: "n.", cn_def: "車庫", en_def: "a building or room where a car is kept",
    sentence: "He parked his bicycle in the {{BLANK}} next to the car.",
    cn: "他把自行車停在車庫裡，就在汽車旁邊。" },
  { word: "room", pos: "n.", cn_def: "房間", en_def: "a part of a building enclosed by walls",
    sentence: "She decorated her {{BLANK}} with photos of her favorite singer.",
    cn: "她用她最喜歡歌手的照片裝飾她的房間。" },
  { word: "living room", pos: "n.", cn_def: "客廳", en_def: "a room in a house where people relax together",
    sentence: "Every evening, the family watches TV together in the {{BLANK}}.",
    cn: "每天晚上，全家人會一起在客廳看電視。" },
  { word: "dining room", pos: "n.", cn_def: "飯廳", en_def: "a room used for eating meals",
    sentence: "We set the table in the {{BLANK}} for the holiday dinner.",
    cn: "我們在飯廳擺好桌子準備節日晚餐。" },
  { word: "kitchen", pos: "n.", cn_def: "廚房", en_def: "a room used for cooking food",
    sentence: "The smell of fresh bread filled the whole {{BLANK}} this morning.",
    cn: "今天早上新鮮麵包的香味充滿了整個廚房。" },
  { word: "bedroom", pos: "n.", cn_def: "臥室", en_def: "a room used mainly for sleeping",
    sentence: "He keeps his books neatly stacked beside his {{BLANK}} window.",
    cn: "他把書整齊地疊放在臥室窗邊。" },
  { word: "bathroom", pos: "n.", cn_def: "浴室", en_def: "a room with a bathtub or shower and a toilet",
    sentence: "She left a clean towel hanging in the {{BLANK}} for her guest.",
    cn: "她在浴室裡留了一條乾淨的毛巾給客人用。" },
  { word: "restroom", pos: "n.", cn_def: "洗手間", en_def: "a public toilet for general use",
    sentence: "Excuse me, could you tell me where the {{BLANK}} is?",
    cn: "不好意思，你可以告訴我洗手間在哪裡嗎？" },
  { word: "basement", pos: "n.", cn_def: "地下室", en_def: "the part of a building that is below ground level",
    sentence: "Old boxes and tools are usually stored in the {{BLANK}}.",
    cn: "舊的箱子和工具通常存放在地下室。" },
  { word: "balcony", pos: "n.", cn_def: "陽台", en_def: "a platform attached to the outside of a building",
    sentence: "She likes to drink her coffee on the {{BLANK}} every morning.",
    cn: "她每天早上喜歡在陽台上喝咖啡。" },
  { word: "roof", pos: "n.", cn_def: "屋頂", en_def: "the covering on top of a building",
    sentence: "A strong wind blew several tiles off the old {{BLANK}}.",
    cn: "強風把這座老屋頂的幾片瓦片吹落了。" },
  { word: "ceiling", pos: "n.", cn_def: "天花板", en_def: "the inside surface at the top of a room",
    sentence: "A small spider was slowly crawling across the {{BLANK}}.",
    cn: "一隻小蜘蛛正緩緩爬過天花板。" },
  { word: "floor", pos: "n.", cn_def: "地板", en_def: "the surface of a room that you walk on",
    sentence: "Please take off your shoes before stepping on the wooden {{BLANK}}.",
    cn: "踩上木地板前請先脫鞋。" },
  { word: "stairs", pos: "n.", cn_def: "樓梯", en_def: "a set of steps leading from one floor to another",
    sentence: "He ran quickly up the {{BLANK}} to grab his forgotten bag.",
    cn: "他快速跑上樓梯去拿他忘記的包包。" },
  { word: "wall", pos: "n.", cn_def: "牆壁", en_def: "an upright structure that divides or encloses a space",
    sentence: "They hung a large painting on the living room {{BLANK}}.",
    cn: "他們在客廳的牆上掛了一幅大畫。" },
  { word: "window", pos: "n.", cn_def: "窗戶", en_def: "an opening in a wall, usually covered with glass",
    sentence: "Sunlight streamed through the open {{BLANK}} every morning.",
    cn: "每天早上陽光都會透過敞開的窗戶照進來。" },
  { word: "fence", pos: "n.", cn_def: "柵欄", en_def: "a barrier built around an area of land",
    sentence: "The dog likes to bark at people walking past the {{BLANK}}.",
    cn: "這隻狗喜歡對著經過柵欄的路人吠叫。" },
  { word: "home", pos: "n.", cn_def: "家", en_def: "the place where a person lives",
    sentence: "After a long trip, it felt wonderful to finally be {{BLANK}}.",
    cn: "經過一場長途旅行，終於回到家的感覺真好。" },
  { word: "furniture", pos: "n.", cn_def: "家具", en_def: "movable items such as tables, chairs, and beds",
    sentence: "They bought new {{BLANK}} for their apartment last weekend.",
    cn: "他們上週末為公寓買了新家具。" },
  { word: "armchair", pos: "n.", cn_def: "扶手椅", en_def: "a comfortable chair with supports for the arms",
    sentence: "Grandpa always falls asleep in his favorite {{BLANK}} after lunch.",
    cn: "爺爺午餐後總是在他最喜歡的扶手椅上睡著。" },
  { word: "basket", pos: "n.", cn_def: "籃子", en_def: "a container made of woven material, often with handles",
    sentence: "She filled the {{BLANK}} with fresh fruit from the market.",
    cn: "她用從市場買來的新鮮水果裝滿了籃子。" },
  { word: "bed", pos: "n.", cn_def: "床", en_def: "a piece of furniture used for sleeping",
    sentence: "He jumped straight into {{BLANK}} after his long, tiring day.",
    cn: "他度過漫長疲憊的一天後就直接跳上床。" },
  { word: "bench", pos: "n.", cn_def: "長椅", en_def: "a long seat for more than one person",
    sentence: "They sat together on a {{BLANK}} and watched the sunset.",
    cn: "他們一起坐在長椅上看夕陽。" },
  { word: "blanket", pos: "n.", cn_def: "毯子", en_def: "a covering used to keep warm in bed",
    sentence: "She pulled the warm {{BLANK}} up to her chin and fell asleep.",
    cn: "她把溫暖的毯子拉到下巴然後就睡著了。" },
  { word: "bookcase", pos: "n.", cn_def: "書架", en_def: "a piece of furniture with shelves for books",
    sentence: "His {{BLANK}} was filled with comic books and old novels.",
    cn: "他的書架擺滿了漫畫書和舊小說。" },
  { word: "shelf", pos: "n.", cn_def: "架子", en_def: "a flat surface used for holding objects",
    sentence: "She placed the photo frame neatly on the top {{BLANK}}.",
    cn: "她把相框整齊地放在最上面的架子上。" },
  { word: "carpet", pos: "n.", cn_def: "地毯", en_def: "a thick fabric covering used on floors",
    sentence: "The cat loves to sleep on the soft, warm {{BLANK}}.",
    cn: "這隻貓喜歡睡在又軟又暖的地毯上。" },
  { word: "closet", pos: "n.", cn_def: "衣櫥", en_def: "a small room or cabinet used for storage",
    sentence: "She hung her winter coats neatly inside the bedroom {{BLANK}}.",
    cn: "她把冬天的外套整齊地掛在臥室衣櫥裡。" },
  { word: "couch", pos: "n.", cn_def: "沙發", en_def: "a long, soft seat for more than one person",
    sentence: "He fell asleep on the {{BLANK}} while watching a movie.",
    cn: "他在看電影時在沙發上睡著了。" },
  { word: "sofa", pos: "n.", cn_def: "沙發", en_def: "another word for couch, a long soft seat",
    sentence: "They bought a new gray {{BLANK}} for the living room.",
    cn: "他們為客廳買了一張新的灰色沙發。" },
  { word: "curtain", pos: "n.", cn_def: "窗簾", en_def: "a piece of cloth hung over a window",
    sentence: "She closed the {{BLANK}} so the room would stay cool.",
    cn: "她拉上窗簾讓房間保持涼爽。" }
];

// ---- Part 2 data: 36 MCQs ----
// Continuing the simpler/shorter MCQ style from Group 37:
// ~16-26 words, exactly 2 sentences, one blank, 4 options.
// Answer letters balanced across A/B/C/D, no adjacent repeats.
// vocabIndex points to the exact VOCAB array entry being tested.
const MCQS = [
  { q: "They just moved into a new neighborhood last month. Their new ______ has a small garden in the back.",
    options: ["house", "gate", "hall", "garden"], answer: 0, vocabIndex: 0 },
  { q: "Visitors must walk through the front entrance to enter. Please remember to close the ______ after coming inside.",
    options: ["wall", "gate", "fence", "window"], answer: 1, vocabIndex: 1 },
  { q: "Her bedroom is near the kitchen on the same floor. It is just down the ______ from the kitchen.",
    options: ["yard", "roof", "hall", "floor"], answer: 2, vocabIndex: 2 },
  { q: "Every spring, colorful flowers bloom near my grandmother's house. She grows roses in her small ______ each year.",
    options: ["basement", "closet", "carpet", "garden"], answer: 3, vocabIndex: 3 },
  { q: "The children often play outside after school every day. They love to play catch in the front ______.",
    options: ["yard", "hall", "ceiling", "stairs"], answer: 0, vocabIndex: 4 },
  { q: "He rides his bicycle to school every morning. He parked it in the ______ next to the car.",
    options: ["balcony", "garage", "bathroom", "basement"], answer: 1, vocabIndex: 5 },
  { q: "She loves music and has many posters of her favorite singer. She decorated her ______ with these photos.",
    options: ["hall", "yard", "room", "garage"], answer: 2, vocabIndex: 6 },
  { q: "The family enjoys spending time together after dinner each night. They watch TV together in the ______.",
    options: ["kitchen", "bedroom", "bathroom", "living room"], answer: 3, vocabIndex: 7 },
  { q: "It was a special holiday, so the family prepared a big meal. They set the table in the ______.",
    options: ["dining room", "garage", "basement", "hall"], answer: 0, vocabIndex: 8 },
  { q: "Someone was baking early this morning before anyone woke up. The smell of fresh bread filled the whole ______.",
    options: ["bathroom", "kitchen", "garage", "balcony"], answer: 1, vocabIndex: 9 },
  { q: "He loves to read before falling asleep every night. He keeps his books stacked beside his ______ window.",
    options: ["kitchen", "garage", "bedroom", "restroom"], answer: 2, vocabIndex: 10 },
  { q: "A guest was staying overnight for the first time. She left a clean towel hanging in the ______.",
    options: ["hall", "garage", "yard", "bathroom"], answer: 3, vocabIndex: 11 },
  { q: "A stranger at the mall looked a bit lost and confused. Excuse me, could you tell me where the ______ is?",
    options: ["restroom", "basement", "balcony", "fence"], answer: 0, vocabIndex: 12 },
  { q: "Old boxes are usually too bulky to keep upstairs. They are usually stored in the ______ instead.",
    options: ["roof", "basement", "ceiling", "balcony"], answer: 1, vocabIndex: 13 },
  { q: "Every morning, she enjoys some fresh air before work. She drinks her coffee on the ______ each day.",
    options: ["basement", "garage", "balcony", "closet"], answer: 2, vocabIndex: 14 },
  { q: "Strong winds passed through the neighborhood last night. The storm blew several tiles off the old ______.",
    options: ["floor", "wall", "carpet", "roof"], answer: 3, vocabIndex: 15 },
  { q: "She noticed something small moving slowly above her bed. A tiny spider was crawling across the ______.",
    options: ["ceiling", "floor", "wall", "window"], answer: 0, vocabIndex: 16 },
  { q: "The new wooden surface in the living room looked beautiful. Please take off your shoes before stepping on the ______.",
    options: ["wall", "floor", "ceiling", "roof"], answer: 1, vocabIndex: 17 },
  { q: "He suddenly remembered his forgotten bag upstairs before leaving. He ran quickly up the ______ to grab it.",
    options: ["fence", "gate", "stairs", "hall"], answer: 2, vocabIndex: 18 },
  { q: "They wanted to add some color to the empty space. They hung a large painting on the living room ______.",
    options: ["floor", "ceiling", "roof", "wall"], answer: 3, vocabIndex: 19 },
  { q: "She loves waking up to natural light in her bedroom. Sunlight streamed through the open ______ every morning.",
    options: ["window", "door", "wall", "closet"], answer: 0, vocabIndex: 20 },
  { q: "Their dog gets excited whenever someone walks by outside. It likes to bark at people near the ______.",
    options: ["ceiling", "fence", "roof", "basement"], answer: 1, vocabIndex: 21 },
  { q: "His vacation lasted three exhausting but exciting weeks abroad. It felt wonderful to finally be back ______.",
    options: ["garden", "yard", "home", "garage"], answer: 2, vocabIndex: 22 },
  { q: "They just moved into a brand new apartment downtown. They bought new ______ for it last weekend.",
    options: ["curtain", "carpet", "basket", "furniture"], answer: 3, vocabIndex: 23 },
  { q: "Lunch always makes him feel relaxed and a little sleepy. He falls asleep in his favorite ______ afterward.",
    options: ["armchair", "bench", "couch", "bookcase"], answer: 0, vocabIndex: 24 },
  { q: "She went to the market early to buy fresh produce. She filled the ______ with fruit she had chosen.",
    options: ["shelf", "basket", "closet", "bench"], answer: 1, vocabIndex: 25 },
  { q: "It had been an unusually long and tiring day at work. He jumped straight into ______ once he got home.",
    options: ["closet", "shelf", "bed", "carpet"], answer: 2, vocabIndex: 26 },
  { q: "They wanted a quiet, peaceful spot to enjoy the evening sky. They sat together on a ______ to watch it.",
    options: ["shelf", "closet", "carpet", "bench"], answer: 3, vocabIndex: 27 },
  { q: "The night was cold, and she felt sleepy after a long day. She pulled the warm ______ up and fell asleep.",
    options: ["blanket", "carpet", "curtain", "couch"], answer: 0, vocabIndex: 28 },
  { q: "He loves comic books and collects them from every series. His ______ was filled with comics and old novels.",
    options: ["basket", "bookcase", "closet", "bench"], answer: 1, vocabIndex: 29 },
  { q: "She wanted her photo displayed somewhere everyone could see it. She placed the frame neatly on the top ______.",
    options: ["carpet", "couch", "shelf", "curtain"], answer: 2, vocabIndex: 30 },
  { q: "The cat always finds the warmest, softest spot in the house. It loves to sleep on the soft, warm ______.",
    options: ["shelf", "bench", "closet", "carpet"], answer: 3, vocabIndex: 31 },
  { q: "Winter clothes need a place to stay neat and organized. She hung her coats inside the bedroom ______.",
    options: ["closet", "shelf", "carpet", "curtain"], answer: 0, vocabIndex: 32 },
  { q: "The movie was so relaxing that he could barely stay awake. He fell asleep on the ______ before it ended.",
    options: ["shelf", "couch", "bench", "closet"], answer: 1, vocabIndex: 33 },
  { q: "Their old living room seating looked worn and outdated. They bought a new gray ______ to replace it.",
    options: ["curtain", "shelf", "sofa", "carpet"], answer: 2, vocabIndex: 34 },
  { q: "The afternoon sun was making the room too warm and bright. She closed the ______ to keep it cool.",
    options: ["sofa", "shelf", "bench", "curtain"], answer: 3, vocabIndex: 35 },
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
  "apartment": { pos: "n.", en_def: "a set of rooms for living in, usually in a larger building", cn_def: "公寓" },
  "bloom": { pos: "v.", en_def: "to produce flowers", cn_def: "開花" },
  "chin": { pos: "n.", en_def: "the part of the face below the mouth", cn_def: "下巴" },
  "comics": { pos: "n.", en_def: "magazines or books with drawings telling a story", cn_def: "漫畫書（複數）" },
  "downtown": { pos: "n.", en_def: "the central business area of a city", cn_def: "市區" },
  "door": { pos: "n.", en_def: "a movable barrier used to open or close an entrance", cn_def: "門" },
  "entrance": { pos: "n.", en_def: "the way into a place", cn_def: "入口" },
  "exhausting": { pos: "adj.", en_def: "making someone feel very tired", cn_def: "令人疲憊的" },
  "frame": { pos: "n.", en_def: "a border that holds a picture", cn_def: "相框；框架" },
  "guest": { pos: "n.", en_def: "a person who visits or stays in someone's home", cn_def: "客人" },
  "mall": { pos: "n.", en_def: "a large building with many shops inside", cn_def: "購物中心" },
  "neighborhood": { pos: "n.", en_def: "the area around where someone lives", cn_def: "社區；鄰近地區" },
  "novels": { pos: "n.", en_def: "long written stories", cn_def: "小說（複數）" },
  "outdated": { pos: "adj.", en_def: "old-fashioned; no longer modern", cn_def: "過時的" },
  "overnight": { pos: "adv.", en_def: "during the night", cn_def: "過夜" },
  "peaceful": { pos: "adj.", en_def: "calm and quiet", cn_def: "平靜的" },
  "produce": { pos: "n.", en_def: "fresh fruits and vegetables", cn_def: "農產品" },
  "series": { pos: "n.", en_def: "a group of related things, such as comic books", cn_def: "系列" },
  "stranger": { pos: "n.", en_def: "a person you do not know", cn_def: "陌生人" },
  "sunset": { pos: "n.", en_def: "the time when the sun goes down", cn_def: "日落" },
  "tiles": { pos: "n.", en_def: "flat pieces used to cover roofs or floors", cn_def: "瓦片；磚（複數）" },
  "vacation": { pos: "n.", en_def: "a period of time spent away from home for rest or travel", cn_def: "假期" },
};
Object.keys(EXTRA_GLOSSES).forEach(key => {
  const g = EXTRA_GLOSSES[key];
  if (!LOOKUP[key]) {
    LOOKUP[key] = { pos: g.pos, en_def: g.en_def, cn_def: g.cn_def, combined: [g] };
  }
});
