// ============================================================
// Group 41 Quiz Data: Home / Household / Objects, Part 3
// Full word set (36 words) — tableware, cookware, kitchen
// appliances, cooking verbs, and cleaning items from the
// "home / household / objects" theme. Continues from Group 40
// (Home & Household, Part 2). This is the third of 5 groups
// (39-43) covering this theme at ~36 words per group.
// Continues the simpler/shorter MCQ style introduced in
// Group 37 (~16-26 words, 2 sentences, one blank).
// Note: the spreadsheet's dictionary definition for "sink" is
// the verb sense (to descend/fall), but in this household
// context the intended word is the noun "sink" (kitchen
// fixture); corrected here accordingly.
// ============================================================

const QUIZ_CONFIG = {
  groupName: "Group 41 - Home / Household, Part 3 (居家環境 三)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

// ---- Part 1 data: spelling practice (36 words) ----
const VOCAB = [
  { word: "plate", pos: "n.", cn_def: "盤子", en_def: "a flat dish used for serving food",
    sentence: "She placed a slice of cake on a small {{BLANK}}.",
    cn: "她把一片蛋糕放在一個小盤子上。" },
  { word: "fork", pos: "n.", cn_def: "叉子", en_def: "a tool with prongs used for eating food",
    sentence: "He used a {{BLANK}} to pick up the noodles.",
    cn: "他用叉子夾起麵條。" },
  { word: "knife", pos: "n.", cn_def: "刀子", en_def: "a tool with a sharp blade used for cutting",
    sentence: "Be careful when you use a sharp {{BLANK}} in the kitchen.",
    cn: "在廚房使用鋒利的刀子時要小心。" },
  { word: "spoon", pos: "n.", cn_def: "湯匙", en_def: "a tool with a small bowl shape used for eating soup",
    sentence: "She stirred her tea slowly with a small {{BLANK}}.",
    cn: "她用一把小湯匙慢慢攪拌她的茶。" },
  { word: "saucer", pos: "n.", cn_def: "醬料碟", en_def: "a small, round plate placed under a cup",
    sentence: "He set the teacup carefully onto its matching {{BLANK}}.",
    cn: "他小心地把茶杯放在配套的碟子上。" },
  { word: "can", pos: "n.", cn_def: "罐頭", en_def: "a sealed metal container for food or drink",
    sentence: "She opened a {{BLANK}} of soup for a quick lunch.",
    cn: "她打開一罐湯，當作快速的午餐。" },
  { word: "straw", pos: "n.", cn_def: "吸管", en_def: "a thin tube used for drinking liquids",
    sentence: "He sipped his juice slowly through a colorful {{BLANK}}.",
    cn: "他用一根色彩鮮豔的吸管慢慢喝果汁。" },
  { word: "napkin", pos: "n.", cn_def: "餐巾紙", en_def: "a piece of cloth or paper used to wipe your mouth",
    sentence: "She wiped her hands with a clean {{BLANK}} after the meal.",
    cn: "她用餐後用一張乾淨的餐巾紙擦手。" },
  { word: "pan", pos: "n.", cn_def: "平底鍋", en_def: "a wide, flat cooking container",
    sentence: "He cracked two eggs into the hot {{BLANK}}.",
    cn: "他把兩顆蛋打進熱平底鍋裡。" },
  { word: "pot", pos: "n.", cn_def: "鍋子", en_def: "a deep, round container used for cooking",
    sentence: "She filled the {{BLANK}} with water to boil the pasta.",
    cn: "她把鍋子裝滿水來煮義大利麵。" },
  { word: "wok", pos: "n.", cn_def: "(帶把的中國)炒菜鍋", en_def: "a round-bottomed pan used in Chinese cooking",
    sentence: "My mother stir-fries vegetables quickly in a hot {{BLANK}}.",
    cn: "我媽媽用熱炒菜鍋快速地炒蔬菜。" },
  { word: "teapot", pos: "n.", cn_def: "茶壺", en_def: "a container used for brewing and pouring tea",
    sentence: "She poured hot water into the {{BLANK}} to make tea.",
    cn: "她把熱水倒進茶壺裡泡茶。" },
  { word: "freezer", pos: "n.", cn_def: "冰箱", en_def: "a device used to store food at very cold temperatures",
    sentence: "He kept a box of ice cream in the {{BLANK}}.",
    cn: "他把一盒冰淇淋放在冰箱的冷凍庫裡。" },
  { word: "refrigerator", pos: "n.", cn_def: "冰箱", en_def: "an appliance used to keep food cold and fresh",
    sentence: "She put the leftover soup in the {{BLANK}} for later.",
    cn: "她把剩下的湯放進冰箱裡，之後再吃。" },
  { word: "microwave", pos: "n.", cn_def: "微波爐", en_def: "an appliance that heats food quickly using waves",
    sentence: "He warmed up his lunch in the {{BLANK}} for two minutes.",
    cn: "他把午餐放進微波爐加熱兩分鐘。" },
  { word: "oven", pos: "n.", cn_def: "烤箱", en_def: "an appliance used for baking or roasting food",
    sentence: "She placed the cookies in the {{BLANK}} to bake.",
    cn: "她把餅乾放進烤箱裡烤。" },
  { word: "gas", pos: "n.", cn_def: "瓦斯", en_def: "a fuel used for cooking or heating",
    sentence: "The stove in their kitchen runs on natural {{BLANK}}.",
    cn: "他們廚房裡的爐子是用天然瓦斯運作的。" },
  { word: "stove", pos: "n.", cn_def: "爐灶", en_def: "an appliance used for cooking food on top",
    sentence: "She turned on the {{BLANK}} to heat the soup.",
    cn: "她打開爐灶來加熱湯。" },
  { word: "sink", pos: "n.", cn_def: "水槽", en_def: "a basin with a faucet used for washing dishes or hands",
    sentence: "He left a pile of dirty dishes in the {{BLANK}}.",
    cn: "他把一堆髒碗盤留在水槽裡。" },
  { word: "bake", pos: "v.", cn_def: "烤", en_def: "to cook food in an oven",
    sentence: "She likes to {{BLANK}} cookies on rainy weekends.",
    cn: "她喜歡在下雨的週末烤餅乾。" },
  { word: "boil", pos: "v.", cn_def: "沸騰", en_def: "to heat a liquid until it bubbles",
    sentence: "He waited for the water to {{BLANK}} before adding the noodles.",
    cn: "他等水沸騰後才加入麵條。" },
  { word: "cook", pos: "v.", cn_def: "煮", en_def: "to prepare food by heating it",
    sentence: "My father loves to {{BLANK}} dinner for the whole family.",
    cn: "我爸爸喜歡為全家人煮晚餐。" },
  { word: "fry", pos: "v.", cn_def: "油煎", en_def: "to cook food in hot oil",
    sentence: "She likes to {{BLANK}} an egg every morning for breakfast.",
    cn: "她每天早上喜歡煎一顆蛋當早餐。" },
  { word: "steam", pos: "v.", cn_def: "蒸", en_def: "to cook food using hot water vapor",
    sentence: "He prefers to {{BLANK}} his vegetables instead of frying them.",
    cn: "他比較喜歡蒸蔬菜而不是用油煎。" },
  { word: "slice", pos: "v.", cn_def: "切成薄片", en_def: "to cut something into thin pieces",
    sentence: "She asked her brother to {{BLANK}} the bread for sandwiches.",
    cn: "她要哥哥把麵包切成薄片來做三明治。" },
  { word: "housework", pos: "n.", cn_def: "家事", en_def: "tasks done to keep a home clean and tidy",
    sentence: "Every Saturday, the whole family helps with the {{BLANK}}.",
    cn: "每個星期六，全家人都會一起幫忙做家事。" },
  { word: "brush", pos: "n.", cn_def: "刷子", en_def: "a tool with bristles used for cleaning or painting",
    sentence: "She used a small {{BLANK}} to clean the dusty shelf.",
    cn: "她用一把小刷子清潔佈滿灰塵的架子。" },
  { word: "bucket", pos: "n.", cn_def: "水桶", en_def: "a round container with a handle used to carry liquid",
    sentence: "He filled the {{BLANK}} with soapy water to wash the car.",
    cn: "他把水桶裝滿肥皂水來洗車。" },
  { word: "mop", pos: "n.", cn_def: "拖把", en_def: "a tool with a long handle used to clean floors",
    sentence: "She used a {{BLANK}} to clean up the spilled juice.",
    cn: "她用拖把清理灑出來的果汁。" },
  { word: "garbage", pos: "n.", cn_def: "垃圾", en_def: "waste material that is thrown away",
    sentence: "He took the {{BLANK}} out before leaving for school.",
    cn: "他出門上學前先把垃圾拿出去。" },
  { word: "trash", pos: "n.", cn_def: "垃圾", en_def: "another word for garbage; waste material",
    sentence: "Please put your {{BLANK}} in the bin, not on the ground.",
    cn: "請把垃圾丟進垃圾桶，不要丟在地上。" },
  { word: "dirty", pos: "adj.", cn_def: "骯髒的", en_def: "covered with dirt; not clean",
    sentence: "His shoes were completely {{BLANK}} after the rainy hike.",
    cn: "他的鞋子在這場雨中健行後變得非常骯髒。" },
  { word: "sweep", pos: "v.", cn_def: "清掃", en_def: "to clean a floor using a broom",
    sentence: "She asked her brother to {{BLANK}} the kitchen floor.",
    cn: "她要哥哥清掃廚房地板。" },
  { word: "album", pos: "n.", cn_def: "相簿", en_def: "a book used to hold photographs",
    sentence: "She keeps all her vacation photos in a thick {{BLANK}}.",
    cn: "她把所有的旅遊照片都放在一本厚厚的相簿裡。" },
  { word: "book", pos: "n.", cn_def: "書本", en_def: "a set of printed pages bound together",
    sentence: "He borrowed an interesting {{BLANK}} from the school library.",
    cn: "他從學校圖書館借了一本有趣的書。" },
  { word: "calendar", pos: "n.", cn_def: "日(月)曆", en_def: "a chart showing the days, weeks, and months of a year",
    sentence: "She circled her birthday on the kitchen {{BLANK}}.",
    cn: "她在廚房的日曆上圈出她的生日。" }
];

// ---- Part 2 data: 36 MCQs ----
// Continuing the simpler/shorter MCQ style from Group 37:
// ~16-26 words, exactly 2 sentences, one blank, 4 options.
// Answer letters balanced across A/B/C/D, no adjacent repeats.
// vocabIndex points to the exact VOCAB array entry being tested.
const MCQS = [
  { q: "She wanted to enjoy a small dessert after lunch. She placed a slice of cake on a small ______.",
    options: ["plate", "bowl", "cup", "pot"], answer: 0, vocabIndex: 0 },
  { q: "He ordered a bowl of noodles at the restaurant. He used a ______ to pick up the noodles.",
    options: ["spoon", "fork", "knife", "straw"], answer: 1, vocabIndex: 1 },
  { q: "Cooking dinner sometimes means handling sharp tools carefully. Be careful when you use a sharp ______ in the kitchen.",
    options: ["fork", "spoon", "knife", "pan"], answer: 2, vocabIndex: 2 },
  { q: "She was enjoying a quiet cup of tea after dinner. She stirred it slowly with a small ______.",
    options: ["fork", "knife", "straw", "spoon"], answer: 3, vocabIndex: 3 },
  { q: "A neat table setting included matching dishware for each cup. He set the teacup carefully onto its matching ______.",
    options: ["saucer", "plate", "bowl", "pan"], answer: 0, vocabIndex: 4 },
  { q: "She didn't have much time to cook before her meeting. She opened a ______ of soup for a quick lunch.",
    options: ["bottle", "can", "bag", "box"], answer: 1, vocabIndex: 5 },
  { q: "He grabbed a cold drink from the fridge before heading outside. He sipped his juice slowly through a colorful ______.",
    options: ["spoon", "fork", "straw", "knife"], answer: 2, vocabIndex: 6 },
  { q: "After finishing her meal, she wanted to clean up neatly. She wiped her hands with a clean ______.",
    options: ["towel", "sponge", "cloth", "napkin"], answer: 3, vocabIndex: 7 },
  { q: "Breakfast was simple, but he wanted it to be tasty. He cracked two eggs into the hot ______.",
    options: ["pan", "pot", "wok", "oven"], answer: 0, vocabIndex: 8 },
  { q: "She was making pasta for dinner that evening. She filled the ______ with water to boil the noodles.",
    options: ["pan", "pot", "wok", "teapot"], answer: 1, vocabIndex: 9 },
  { q: "Cooking Chinese food often requires high heat and quick movements. My mother stir-fries vegetables quickly in a hot ______.",
    options: ["pot", "pan", "wok", "oven"], answer: 2, vocabIndex: 10 },
  { q: "She wanted something warm to drink on a chilly afternoon. She poured hot water into the ______ to make tea.",
    options: ["pot", "pan", "wok", "teapot"], answer: 3, vocabIndex: 11 },
  { q: "He had a sweet craving after dinner that night. He kept a box of ice cream in the ______.",
    options: ["freezer", "oven", "stove", "microwave"], answer: 0, vocabIndex: 12 },
  { q: "There was extra soup left over from last night's dinner. She put it in the ______ for later.",
    options: ["oven", "refrigerator", "stove", "sink"], answer: 1, vocabIndex: 13 },
  { q: "He was in a hurry to eat lunch before his next class. He warmed up his food in the ______.",
    options: ["freezer", "sink", "microwave", "stove"], answer: 2, vocabIndex: 14 },
  { q: "She wanted fresh cookies for the school bake sale. She placed the cookies in the ______ to bake.",
    options: ["microwave", "freezer", "sink", "oven"], answer: 3, vocabIndex: 15 },
  { q: "Most homes need a fuel source for cooking food. The stove in their kitchen runs on natural ______.",
    options: ["gas", "water", "electricity", "oil"], answer: 0, vocabIndex: 16 },
  { q: "She needed to warm up some soup for dinner. She turned on the ______ to heat the soup.",
    options: ["oven", "stove", "freezer", "sink"], answer: 1, vocabIndex: 17 },
  { q: "Nobody had cleaned up after lunch that day. He left a pile of dirty dishes in the ______.",
    options: ["oven", "freezer", "sink", "stove"], answer: 2, vocabIndex: 18 },
  { q: "Rainy days are perfect for staying inside and baking treats. She likes to ______ cookies on rainy weekends.",
    options: ["fry", "boil", "steam", "bake"], answer: 3, vocabIndex: 19 },
  { q: "Cooking pasta requires heating water until it bubbles. He waited for the water to ______ before adding the noodles.",
    options: ["boil", "bake", "fry", "steam"], answer: 0, vocabIndex: 20 },
  { q: "He really enjoys preparing meals for everyone in the house. My father loves to ______ dinner for the whole family.",
    options: ["bake", "cook", "boil", "slice"], answer: 1, vocabIndex: 21 },
  { q: "Breakfast wouldn't be complete without something hot and simple. She likes to ______ an egg every morning for breakfast.",
    options: ["bake", "boil", "fry", "steam"], answer: 2, vocabIndex: 22 },
  { q: "He prefers healthier ways of preparing his vegetables for dinner. He prefers to ______ his vegetables instead of frying them.",
    options: ["bake", "boil", "slice", "steam"], answer: 3, vocabIndex: 23 },
  { q: "Sandwiches need bread cut into the right thickness. She asked her brother to ______ the bread for sandwiches.",
    options: ["slice", "fry", "boil", "bake"], answer: 0, vocabIndex: 24 },
  { q: "Keeping a home clean takes effort from everyone in the family. Every Saturday, the whole family helps with the ______.",
    options: ["homework", "housework", "artwork", "teamwork"], answer: 1, vocabIndex: 25 },
  { q: "Dust had collected on an old shelf in the living room. She used a small ______ to clean it.",
    options: ["mop", "bucket", "brush", "towel"], answer: 2, vocabIndex: 26 },
  { q: "Washing the car outside requires soap and plenty of water. He filled the ______ with soapy water to wash it.",
    options: ["brush", "mop", "sink", "bucket"], answer: 3, vocabIndex: 27 },
  { q: "Juice spilled all over the kitchen floor by accident. She used a ______ to clean up the mess.",
    options: ["mop", "brush", "bucket", "towel"], answer: 0, vocabIndex: 28 },
  { q: "Before leaving for school each morning, he has a small chore. He took the ______ out before leaving.",
    options: ["book", "garbage", "calendar", "album"], answer: 1, vocabIndex: 29 },
  { q: "Keeping public areas clean means using the proper bins. Please put your ______ in the bin, not on the ground.",
    options: ["album", "calendar", "trash", "book"], answer: 2, vocabIndex: 30 },
  { q: "Walking through the muddy trail left a mess on his feet. His shoes were completely ______ after the rainy hike.",
    options: ["clean", "wet", "new", "dirty"], answer: 3, vocabIndex: 31 },
  { q: "The kitchen floor needed attention after the busy dinner. She asked her brother to ______ the kitchen floor.",
    options: ["sweep", "slice", "fry", "boil"], answer: 0, vocabIndex: 32 },
  { q: "She loves looking back at memories from past trips. She keeps all her vacation photos in a thick ______.",
    options: ["calendar", "album", "book", "napkin"], answer: 1, vocabIndex: 33 },
  { q: "He wanted something interesting to read over the weekend. He borrowed an interesting ______ from the school library.",
    options: ["album", "calendar", "book", "magazine"], answer: 2, vocabIndex: 34 },
  { q: "She wanted to remember her special day all year long. She circled her birthday on the kitchen ______.",
    options: ["book", "album", "napkin", "calendar"], answer: 3, vocabIndex: 35 },
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
  "artwork": { pos: "n.", en_def: "drawings, paintings, or other creative work", cn_def: "藝術作品" },
  "bag": { pos: "n.", en_def: "a container made of paper, plastic, or cloth", cn_def: "袋子" },
  "bin": { pos: "n.", en_def: "a container used to hold trash", cn_def: "垂圾桶" },
  "bottle": { pos: "n.", en_def: "a container used for holding liquids", cn_def: "瓶子" },
  "bowl": { pos: "n.", en_def: "a round, deep dish used for food", cn_def: "碗" },
  "box": { pos: "n.", en_def: "a square or rectangular container", cn_def: "盒子" },
  "chilly": { pos: "adj.", en_def: "somewhat cold", cn_def: "微涼的" },
  "clean": { pos: "adj.", en_def: "free from dirt", cn_def: "乾淨的" },
  "cloth": { pos: "n.", en_def: "fabric used for various purposes, including cleaning", cn_def: "布" },
  "craving": { pos: "n.", en_def: "a strong desire for something, especially food", cn_def: "渴望" },
  "cup": { pos: "n.", en_def: "a small container used for drinking", cn_def: "杯子" },
  "electricity": { pos: "n.", en_def: "a form of energy used to power devices", cn_def: "電力" },
  "fridge": { pos: "n.", en_def: "a short form of refrigerator", cn_def: "冰箱（口語）" },
  "fuel": { pos: "n.", en_def: "material burned to produce energy", cn_def: "燃料" },
  "homework": { pos: "n.", en_def: "school work done at home", cn_def: "作業" },
  "magazine": { pos: "n.", en_def: "a thin publication with articles and photos", cn_def: "雜誌" },
  "new": { pos: "adj.", en_def: "recently made or obtained", cn_def: "新的" },
  "oil": { pos: "n.", en_def: "a thick liquid used for cooking or fuel", cn_def: "油" },
  "sale": { pos: "n.", en_def: "an event where items are sold", cn_def: "銷售活動" },
  "setting": { pos: "n.", en_def: "the arrangement of dishes and utensils on a table", cn_def: "（餐具）擺設" },
  "sponge": { pos: "n.", en_def: "a soft material used for cleaning or washing", cn_def: "海綿" },
  "teamwork": { pos: "n.", en_def: "the combined effort of a group working together", cn_def: "團隊合作" },
  "towel": { pos: "n.", en_def: "a piece of cloth used to dry yourself", cn_def: "毛巾" },
  "trail": { pos: "n.", en_def: "a path, often through nature", cn_def: "山路；小徑" },
  "vacation": { pos: "n.", en_def: "a period of time spent away from home for rest or travel", cn_def: "假期" },
  "water": { pos: "n.", en_def: "a clear liquid needed for life", cn_def: "水" },
  "wet": { pos: "adj.", en_def: "covered or soaked with liquid", cn_def: "濕的" },
};
Object.keys(EXTRA_GLOSSES).forEach(key => {
  const g = EXTRA_GLOSSES[key];
  if (!LOOKUP[key]) {
    LOOKUP[key] = { pos: g.pos, en_def: g.en_def, cn_def: g.cn_def, combined: [g] };
  }
});
