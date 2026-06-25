// ============================================================
// Group 27 Quiz Data: Countries / Nationality / Government
// Full word set (18 words) — countries, nationality, and
// government vocabulary from the "sports / countries /
// transportation / places" theme. Continues from Group 26
// (Music/Hobbies). Streets/roads/infrastructure will follow
// as the next group.
// ============================================================

const QUIZ_CONFIG = {
  groupName: "Group 27 - Countries / Nationality / Government (國家/國籍/政府)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

// ---- Part 1 data: spelling practice (18 words) ----
const VOCAB = [
  { word: "country", pos: "n.", cn_def: "國家", en_def: "an area of land with its own government and people",
    sentence: "Every {{BLANK}} has its own flag, language, and set of laws.",
    cn: "每個國家都有自己的國旗、語言和法律。" },
  { word: "nation", pos: "n.", cn_def: "國家", en_def: "a large group of people living in one area under one government",
    sentence: "Leaders from every {{BLANK}} gathered together to discuss the climate problem.",
    cn: "來自每個國家的領導人聚在一起討論氣候問題。" },
  { word: "U.S.A.", pos: "n.", cn_def: "美國", en_def: "an abbreviation for the United States of America",
    sentence: "Her cousin moved to the {{BLANK}} last year to study engineering.",
    cn: "她的表姐去年搬到美國去學工程學。" },
  { word: "America", pos: "n.", cn_def: "美國", en_def: "another common name for the United States",
    sentence: "Many tourists travel to {{BLANK}} every summer to visit national parks.",
    cn: "每年夏天，許多遊客會前往美國參觀國家公園。" },
  { word: "American", pos: "n.", cn_def: "美國人", en_def: "a person from the United States",
    sentence: "My English teacher is {{BLANK}} and grew up in California.",
    cn: "我的英文老師是美國人，在加州長大。" },
  { word: "China", pos: "n.", cn_def: "中國", en_def: "a large country in East Asia",
    sentence: "The Great Wall in {{BLANK}} is one of the most famous landmarks in the world.",
    cn: "中國的萬里長城是世界上最著名的地標之一。" },
  { word: "R.O.C.", pos: "n.", cn_def: "中華民國", en_def: "an abbreviation for the Republic of China",
    sentence: "Students learn about the history of the {{BLANK}} in their social studies class.",
    cn: "學生在社會課上學習中華民國的歷史。" },
  { word: "Taiwan", pos: "n.", cn_def: "臺灣", en_def: "an island country in East Asia, also called the Republic of China",
    sentence: "My family has lived in {{BLANK}} for three generations.",
    cn: "我家三代都住在臺灣。" },
  { word: "national", pos: "adj.", cn_def: "國家的", en_def: "relating to a whole country, not just one area",
    sentence: "The president gave a {{BLANK}} speech that was broadcast on every channel.",
    cn: "總統發表了一場在每個頻道都播出的全國演說。" },
  { word: "foreigner", pos: "n.", cn_def: "外國人", en_def: "a person who comes from a different country",
    sentence: "The friendly {{BLANK}} asked a local shopkeeper for directions to the train station.",
    cn: "那位友善的外國人向當地的店主問了去車站的方向。" },
  { word: "foreign", pos: "adj.", cn_def: "外國的", en_def: "belonging to or coming from a country other than your own",
    sentence: "She enjoys trying new {{BLANK}} foods whenever she travels abroad.",
    cn: "她每次出國旅行時都喜歡嘗試新的外國美食。" },
  { word: "local", pos: "adj.", cn_def: "本地的", en_def: "relating to a particular area or neighborhood",
    sentence: "We always buy fresh vegetables from the {{BLANK}} farmers market on weekends.",
    cn: "我們週末總是會去當地的農夫市集買新鮮蔬菜。" },
  { word: "international", pos: "adj.", cn_def: "國際的", en_def: "involving two or more countries",
    sentence: "Students from many countries attend this {{BLANK}} school in the city.",
    cn: "許多國家的學生都就讀這所市內的國際學校。" },
  { word: "overseas", pos: "adj.", cn_def: "海外的", en_def: "located in or coming from a foreign country, across the sea",
    sentence: "He received an {{BLANK}} job offer that required moving to another continent.",
    cn: "他收到了一份海外工作邀約，需要搬到另一個大陸去。" },
  { word: "abroad", pos: "adv.", cn_def: "到國外", en_def: "in or to a foreign country",
    sentence: "She plans to study {{BLANK}} for one semester during her final year of college.",
    cn: "她計畫在大學最後一年出國留學一個學期。" },
  { word: "elect", pos: "v.", cn_def: "選舉", en_def: "to choose someone for a position by voting",
    sentence: "Citizens will {{BLANK}} a new mayor for their city next month.",
    cn: "市民們下個月將為他們的城市選出一位新市長。" },
  { word: "vote", pos: "v.", cn_def: "投票", en_def: "to officially choose someone or something by marking a ballot",
    sentence: "Every adult citizen has the right to {{BLANK}} in the national election.",
    cn: "每位成年公民都有權在全國選舉中投票。" },
  { word: "government", pos: "n.", cn_def: "政府", en_def: "the group of people who officially run a country",
    sentence: "The local {{BLANK}} announced a new plan to build more public parks.",
    cn: "當地政府宣布了一項建造更多公共公園的新計畫。" }
];

// ---- Part 2 data: 18 MCQs ----
// CEFR A2 / 國中會考 level: exactly 2 sentences, ~18-30 words total,
// rich concrete context clue, one blank, simple surrounding vocabulary.
// Answer letters balanced across A/B/C/D (5/5/4/4), no adjacent repeats.
// vocabIndex points to the exact VOCAB array entry being tested.
const MCQS = [
  { q: "Studying the map in social studies class, students noticed how different each region looked from the next. Every ______ has its own flag, language, and laws.",
    options: ["city","town","country","village"], answer: 2, vocabIndex: 0 },
  { q: "At the international meeting about climate change, representatives sat at one long table together. Leaders from every ______ discussed the growing problem.",
    options: ["city","school","team","nation"], answer: 3, vocabIndex: 1 },
  { q: "After accepting a place at a university overseas, her cousin packed two suitcases and said goodbye to everyone. He moved to the ______ last year to study engineering.",
    options: ["China","Taiwan","U.S.A.","R.O.C."], answer: 2, vocabIndex: 2 },
  { q: "Every summer, families from all over the world board long flights with cameras and guidebooks in hand. Many tourists travel to ______ to visit the national parks there.",
    options: ["America","China","Taiwan","Japan"], answer: 0, vocabIndex: 3 },
  { q: "Growing up near the beaches of California before moving overseas to teach, she brought her own culture into the classroom. My English teacher is ______ and shares stories about home.",
    options: ["foreign","local","American","national"], answer: 2, vocabIndex: 4 },
  { q: "Built over many centuries to protect the northern border, this massive structure stretches for thousands of miles. The Great Wall in ______ remains one of the world's most famous landmarks.",
    options: ["China","Taiwan","America","Japan"], answer: 0, vocabIndex: 5 },
  { q: "During social studies class this semester, students researched a government with a long and complicated past. They learned about the history of the ______ in their textbooks.",
    options: ["U.S.A.","R.O.C.","America","nation"], answer: 1, vocabIndex: 6 },
  { q: "Looking through old family photo albums, she realized her grandparents, parents, and she herself had all called the same island home. Her family has lived in ______ for three generations.",
    options: ["China","America","Taiwan","Japan"], answer: 2, vocabIndex: 7 },
  { q: "Watched live by millions across every channel, the speech focused on important issues facing the whole country. The president gave a ______ address that everyone could watch.",
    options: ["local","national","foreign","overseas"], answer: 1, vocabIndex: 8 },
  { q: "Lost near the busy train station with only a map and a confused expression, a visitor stopped a nearby shop owner for help. The friendly ______ asked for directions politely.",
    options: ["citizen","tourist","resident","foreigner"], answer: 3, vocabIndex: 9 },
  { q: "Whenever she travels to a new country, she skips the familiar restaurants and searches for something completely unfamiliar instead. She enjoys trying new ______ foods on every trip abroad.",
    options: ["foreign","national","local","overseas"], answer: 0, vocabIndex: 10 },
  { q: "Every Saturday morning, our family skips the supermarket and heads instead to a small outdoor market near our neighborhood. We always buy fresh vegetables from the ______ farmers there.",
    options: ["foreign","local","overseas","national"], answer: 1, vocabIndex: 11 },
  { q: "Walking through the hallways of this particular school, you can hear students speaking five or six different languages at once. Students from many countries attend this ______ school in the city.",
    options: ["international","local","national","foreign"], answer: 0, vocabIndex: 12 },
  { q: "After several rounds of interviews over video calls, he received exciting news about an opportunity far from home that would require relocating. He accepted an ______ job offer on another continent.",
    options: ["local","national","international","overseas"], answer: 3, vocabIndex: 13 },
  { q: "Excited about spending time away from her usual campus, she filled out the paperwork and chose a university in another country. She plans to study ______ during her final year of college.",
    options: ["locally","abroad","nationally","internationally"], answer: 1, vocabIndex: 14 },
  { q: "Posters appeared on every street corner downtown as the campaign season began heating up across the city. Citizens will ______ a new mayor for their city next month.",
    options: ["choose","name","select","elect"], answer: 3, vocabIndex: 15 },
  { q: "Standing in line outside the polling station early in the morning, residents waited patiently with their identification cards ready. Every adult citizen has the right to ______ in the national election.",
    options: ["choose","vote","decide","speak"], answer: 1, vocabIndex: 16 },
  { q: "After months of public meetings and budget discussions, city officials finally shared their plans with everyone at a press conference. The local ______ announced a new plan to build more parks.",
    options: ["government","company","school","committee"], answer: 0, vocabIndex: 17 },
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
  "adult": { pos: "n.", en_def: "a fully grown person", cn_def: "成人" },
  "announced": { pos: "v.", en_def: "made something known publicly", cn_def: "宣布（過去式）" },
  "attend": { pos: "v.", en_def: "to go to an event or place", cn_def: "出席；就讀" },
  "broadcast": { pos: "v.", en_def: "to send out a program on television or radio", cn_def: "廣播" },
  "channel": { pos: "n.", en_def: "a specific station on television", cn_def: "頻道" },
  "citizen": { pos: "n.", en_def: "a person who is a legal member of a country", cn_def: "公民" },
  "citizens": { pos: "n.", en_def: "people who are legal members of a country", cn_def: "公民（複數）" },
  "city": { pos: "n.", en_def: "a large town", cn_def: "城市" },
  "climate": { pos: "n.", en_def: "the usual weather conditions of an area", cn_def: "氣候" },
  "college": { pos: "n.", en_def: "a school for higher education after high school", cn_def: "大學" },
  "continent": { pos: "n.", en_def: "a very large area of land, like Asia or Africa", cn_def: "大陸；洲" },
  "countries": { pos: "n.", en_def: "nations; areas of land with their own government", cn_def: "國家（複數）" },
  "cousin": { pos: "n.", en_def: "the child of your aunt or uncle", cn_def: "表/堂兄弟姊妹" },
  "directions": { pos: "n.", en_def: "instructions for how to get to a place", cn_def: "方向；指引" },
  "discuss": { pos: "v.", en_def: "to talk about something with other people", cn_def: "討論" },
  "election": { pos: "n.", en_def: "the process of choosing someone by voting", cn_def: "選舉" },
  "engineering": { pos: "n.", en_def: "the field of designing and building machines or structures", cn_def: "工程學" },
  "flag": { pos: "n.", en_def: "a piece of cloth with colors and patterns representing a country", cn_def: "國旗" },
  "gathered": { pos: "v.", en_def: "came together in a group", cn_def: "聚集（過去式）" },
  "generations": { pos: "n.", en_def: "groups of people born and living at around the same time", cn_def: "世代（複數）" },
  "history": { pos: "n.", en_def: "the study of events that happened in the past", cn_def: "歷史" },
  "job": { pos: "n.", en_def: "the work a person does regularly to earn money", cn_def: "工作" },
  "landmarks": { pos: "n.", en_def: "famous or easily recognized buildings or places", cn_def: "地標（複數）" },
  "language": { pos: "n.", en_def: "a system of words used by people to communicate", cn_def: "語言" },
  "laws": { pos: "n.", en_def: "official rules of a country or area", cn_def: "法律（複數）" },
  "leaders": { pos: "n.", en_def: "people who guide or are in charge of a group", cn_def: "領導人（複數）" },
  "market": { pos: "n.", en_def: "a place where food and goods are sold", cn_def: "市場" },
  "mayor": { pos: "n.", en_def: "the leader of a city or town's government", cn_def: "市長" },
  "offer": { pos: "n.", en_def: "a proposal to give or do something", cn_def: "提議；邀約" },
  "president": { pos: "n.", en_def: "the leader of a country or organization", cn_def: "總統" },
  "semester": { pos: "n.", en_def: "one of the main periods a school year is divided into", cn_def: "學期" },
  "shopkeeper": { pos: "n.", en_def: "a person who owns or manages a small shop", cn_def: "店主" },
  "speech": { pos: "n.", en_def: "a talk given to an audience", cn_def: "演說" },
  "station": { pos: "n.", en_def: "a place where trains or buses stop", cn_def: "車站" },
  "studies": { pos: "n.", en_def: "subjects learned in school", cn_def: "學習科目" },
  "teacher": { pos: "n.", en_def: "a person whose job is to help students learn", cn_def: "老師" },
  "tourist": { pos: "n.", en_def: "a person who travels to visit a place for fun", cn_def: "遊客" },
  "tourists": { pos: "n.", en_def: "people who travel to visit a place for fun", cn_def: "遊客（複數）" },
  "train": { pos: "n.", en_def: "a long vehicle that runs on tracks", cn_def: "火車" },
  "wall": { pos: "n.", en_def: "a solid upright structure that forms the side of a building or area", cn_def: "牆" }
};
Object.keys(EXTRA_GLOSSES).forEach(key => {
  const g = EXTRA_GLOSSES[key];
  if (!LOOKUP[key]) {
    LOOKUP[key] = { pos: g.pos, en_def: g.en_def, cn_def: g.cn_def, combined: [g] };
  }
});

// ---- Additional distractor-word glosses for MCQ options ----
const DISTRACTOR_GLOSSES = {
  "choose": { pos: "v.", en_def: "to pick one thing from a group", cn_def: "選擇" },
  "committee": { pos: "n.", en_def: "a group of people chosen to do a particular job", cn_def: "委員會" },
  "company": { pos: "n.", en_def: "a business that makes or sells things", cn_def: "公司" },
  "decide": { pos: "v.", en_def: "to make a choice about something", cn_def: "決定" },
  "japan": { pos: "n.", en_def: "an island country in East Asia", cn_def: "日本" },
  "name": { pos: "v.", en_def: "to choose and give a title to someone or something", cn_def: "命名；指定" },
  "resident": { pos: "n.", en_def: "a person who lives in a particular place", cn_def: "居民" },
  "school": { pos: "n.", en_def: "a place where children go to learn", cn_def: "學校" },
  "select": { pos: "v.", en_def: "to choose something carefully", cn_def: "挑選" },
  "speak": { pos: "v.", en_def: "to say words out loud", cn_def: "說話" },
  "team": { pos: "n.", en_def: "a group of people playing or working together", cn_def: "隊伍" },
  "town": { pos: "n.", en_def: "a place with houses and shops, smaller than a city", cn_def: "鎮" },
  "village": { pos: "n.", en_def: "a small group of houses, smaller than a town", cn_def: "村莊" }
};
Object.keys(DISTRACTOR_GLOSSES).forEach(key => {
  const g = DISTRACTOR_GLOSSES[key];
  if (!LOOKUP[key]) {
    LOOKUP[key] = { pos: g.pos, en_def: g.en_def, cn_def: g.cn_def, combined: [g] };
  }
});

// ---- Adverb-form aliases so MCQ option lookups resolve correctly ----
const ADVERB_ALIASES = {
  "locally": "local", "nationally": "national", "internationally": "international"
};
Object.keys(ADVERB_ALIASES).forEach(form => {
  const base = ADVERB_ALIASES[form];
  if (!LOOKUP[form] && LOOKUP[base]) {
    LOOKUP[form] = LOOKUP[base];
  }
});
