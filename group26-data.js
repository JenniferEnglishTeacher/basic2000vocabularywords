// ============================================================
// Group 26 Quiz Data: Music / Hobbies
// Full word set (21 words) — music, instruments, and hobbies
// from the "sports / countries / transportation / places"
// theme. Continues from Group 25 (Sports/Games/Outdoor
// Activities). Countries/nationality/government will follow
// as the next group.
// ============================================================

const QUIZ_CONFIG = {
  groupName: "Group 26 - Music / Hobbies (音樂/愛好)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

// ---- Part 1 data: spelling practice (21 words) ----
const VOCAB = [
  { word: "band", pos: "n.", cn_def: "樂隊", en_def: "a group of musicians who play music together",
    sentence: "My older brother plays the drums in a rock {{BLANK}} with his friends.",
    cn: "我哥哥和他的朋友組了一個搖滾樂隊，他負責打鼓。" },
  { word: "music", pos: "n.", cn_def: "音樂", en_def: "sounds arranged in a pleasing way, often with rhythm and melody",
    sentence: "She always listens to calm {{BLANK}} while doing her homework in the evening.",
    cn: "她晚上做作業時總是會聽一些輕柔的音樂。" },
  { word: "jazz", pos: "n.", cn_def: "爵士樂", en_def: "a style of music with a strong rhythm, often improvised",
    sentence: "My grandfather loves {{BLANK}} music and plays old records every Sunday afternoon.",
    cn: "我爺爺很喜歡爵士樂，每個星期天下午都會播放老唱片。" },
  { word: "pop music", pos: "n.", cn_def: "流行音樂", en_def: "popular music that is widely enjoyed, especially by young people",
    sentence: "My little sister only listens to {{BLANK}} on her way to school.",
    cn: "我妹妹上學路上只聽流行音樂。" },
  { word: "instrument", pos: "n.", cn_def: "樂器", en_def: "an object used to produce musical sounds",
    sentence: "Before joining the school band, every student must choose one {{BLANK}} to learn.",
    cn: "在加入校隊樂團之前，每位學生都必須選擇一種樂器來學習。" },
  { word: "drum", pos: "n.", cn_def: "鼓", en_def: "a musical instrument played by hitting it with hands or sticks",
    sentence: "He practices the {{BLANK}} in the garage so he won't disturb the neighbors.",
    cn: "他在車庫裡練鼓，這樣就不會打擾到鄰居。" },
  { word: "flute", pos: "n.", cn_def: "長笛", en_def: "a thin metal musical instrument played by blowing across a hole",
    sentence: "She has played the {{BLANK}} in the school orchestra since fifth grade.",
    cn: "她從五年級開始就在學校管弦樂團裡吹長笛。" },
  { word: "guitar", pos: "n.", cn_def: "吉他", en_def: "a musical instrument with strings that is played by plucking or strumming",
    sentence: "He taught himself to play the {{BLANK}} by watching videos online.",
    cn: "他靠看網路上的影片自學彈吉他。" },
  { word: "piano", pos: "n.", cn_def: "鋼琴", en_def: "a large musical instrument with black and white keys",
    sentence: "My cousin has taken {{BLANK}} lessons every Saturday morning for three years.",
    cn: "我表姐三年來每個星期六早上都會去上鋼琴課。" },
  { word: "trumpet", pos: "n.", cn_def: "小喇叭", en_def: "a brass musical instrument played by blowing into a mouthpiece",
    sentence: "The {{BLANK}} player led the marching band down the main street.",
    cn: "那位吹小喇叭的人帶領遊行樂隊走在主要街道上。" },
  { word: "violin", pos: "n.", cn_def: "小提琴", en_def: "a wooden musical instrument with strings, played with a bow",
    sentence: "She practices the {{BLANK}} for an hour every day after school.",
    cn: "她每天放學後都會練習一個小時的小提琴。" },
  { word: "string", pos: "n.", cn_def: "弦", en_def: "a thin tight wire or cord on a musical instrument",
    sentence: "One {{BLANK}} on his guitar snapped right in the middle of the concert.",
    cn: "他吉他上的一條弦在演唱會進行到一半時突然斷了。" },
  { word: "play", pos: "v.", cn_def: "演奏", en_def: "to perform music using an instrument",
    sentence: "He learned to {{BLANK}} the piano when he was only five years old.",
    cn: "他在五歲時就學會了彈鋼琴。" },
  { word: "hobby", pos: "n.", cn_def: "愛好", en_def: "an activity done regularly for enjoyment in one's free time",
    sentence: "Collecting old stamps has been his favorite {{BLANK}} since he was a child.",
    cn: "收集舊郵票是他從小就喜歡的愛好。" },
  { word: "interest", pos: "n.", cn_def: "興趣", en_def: "a feeling of wanting to learn more about something",
    sentence: "She has always had a strong {{BLANK}} in painting and drawing.",
    cn: "她一直對畫畫和繪圖有著強烈的興趣。" },
  { word: "camp", pos: "v.", cn_def: "露營", en_def: "to stay outdoors in a tent for a short time",
    sentence: "Our whole family likes to {{BLANK}} near the lake every summer.",
    cn: "我們全家每年夏天都喜歡在湖邊露營。" },
  { word: "dance", pos: "v.", cn_def: "跳舞", en_def: "to move your body to music",
    sentence: "Everyone got up to {{BLANK}} as soon as the band started playing.",
    cn: "樂隊一開始演奏，大家就站起來跳舞了。" },
  { word: "draw", pos: "v.", cn_def: "畫畫", en_def: "to make a picture using a pencil or pen",
    sentence: "My little brother loves to {{BLANK}} dinosaurs in his notebook during class.",
    cn: "我弟弟上課時喜歡在筆記本上畫恐龍。" },
  { word: "hike", pos: "v.", cn_def: "健行", en_def: "to walk for a long time, often in nature",
    sentence: "We plan to {{BLANK}} up the mountain trail early this weekend.",
    cn: "我們計畫這個週末一早就去爬山健行。" },
  { word: "paint", pos: "v.", cn_def: "畫圖（用顏料）", en_def: "to create a picture using paint",
    sentence: "She likes to {{BLANK}} pictures of flowers in her backyard garden.",
    cn: "她喜歡在自家後院的花園裡畫花的圖畫。" },
  { word: "sing", pos: "v.", cn_def: "唱歌", en_def: "to make musical sounds with your voice",
    sentence: "The children love to {{BLANK}} their favorite songs during the long car ride.",
    cn: "孩子們在長途車程中喜歡唱他們最喜歡的歌。" }
];

// ---- Part 2 data: 21 MCQs ----
// CEFR A2 / 國中會考 level: exactly 2 sentences, ~18-30 words total,
// rich concrete context clue, one blank, simple surrounding vocabulary.
// Answer letters balanced across A/B/C/D (6/5/5/5), no adjacent repeats.
// vocabIndex points to the exact VOCAB array entry being tested.
const MCQS = [
  { q: "Every Friday night, my older brother gathers in the garage with three of his closest friends. They practice as a rock ______ for hours together.",
    options: ["band","team","club","choir"], answer: 0, vocabIndex: 0 },
  { q: "While finishing her homework every evening, she always plays something calm and quiet through her headphones. She finds that soft ______ helps her focus better.",
    options: ["noise","sound","music","drumming"], answer: 2, vocabIndex: 1 },
  { q: "Every Sunday afternoon, my grandfather pulls out his collection of old vinyl records and turns up the volume. He has always loved the smooth, rhythmic sound of ______.",
    options: ["rock","pop music","classical","jazz"], answer: 3, vocabIndex: 2 },
  { q: "On her walk to school each morning, my little sister keeps her earphones in the entire time. She only listens to upbeat ______ that her friends also enjoy.",
    options: ["jazz","classical music","pop music","instruments"], answer: 2, vocabIndex: 3 },
  { q: "Before officially joining the school's music program this semester, every new student faces an important decision. Each one must pick a single ______ to begin learning.",
    options: ["song","instrument","band","hobby"], answer: 1, vocabIndex: 4 },
  { q: "Worried about bothering the people living next door, he sets up his equipment in the garage instead of his bedroom. That's where he quietly practices the ______ each evening.",
    options: ["guitar","violin","drum","flute"], answer: 2, vocabIndex: 5 },
  { q: "Ever since fifth grade, she has carried the same silver instrument to orchestra practice twice a week. She has played the ______ in that group for years now.",
    options: ["trumpet","drum","guitar","flute"], answer: 3, vocabIndex: 6 },
  { q: "Instead of paying for expensive lessons, he spent countless hours watching tutorials on his phone after school. That's how he taught himself to play the ______.",
    options: ["piano","trumpet","guitar","violin"], answer: 2, vocabIndex: 7 },
  { q: "For three straight years now, my cousin has woken up early every Saturday to head to her music teacher's house. She has been taking ______ lessons the whole time.",
    options: ["guitar","piano","drum","flute"], answer: 1, vocabIndex: 8 },
  { q: "During the holiday parade downtown, one musician walked confidently at the very front of the group. The ______ player led the entire marching band down the street.",
    options: ["piano","guitar","trumpet","drum"], answer: 2, vocabIndex: 9 },
  { q: "After school every single day, she sets aside exactly one hour to sit down with her favorite wooden instrument and bow. She practices the ______ without skipping a single day.",
    options: ["guitar","violin","piano","trumpet"], answer: 1, vocabIndex: 10 },
  { q: "In the middle of the big concert, something unexpected suddenly happened on stage that surprised the whole audience. One ______ on his guitar snapped without warning.",
    options: ["string","key","pedal","switch"], answer: 0, vocabIndex: 11 },
  { q: "Starting at just five years old, he sat down at the family piano every single afternoon to practice. He eventually learned to ______ it quite well for his age.",
    options: ["sing","play","draw","paint"], answer: 1, vocabIndex: 12 },
  { q: "Ever since he was a young child, he has spent his weekends sorting through small colorful pieces of paper. Collecting old stamps has remained his favorite ______ for years.",
    options: ["job","sport","subject","hobby"], answer: 3, vocabIndex: 13 },
  { q: "Spending hours at the art table every weekend, she fills entire notebooks with colorful sketches and designs. She has always had a strong ______ in painting and drawing.",
    options: ["interest","job","talent","skill"], answer: 0, vocabIndex: 14 },
  { q: "Every summer without exception, our entire family loads up the car with tents and sleeping bags. We always head to the same quiet spot to ______ near the lake.",
    options: ["swim","fish","hike","camp"], answer: 3, vocabIndex: 15 },
  { q: "The moment the live band began playing their first upbeat song, the whole crowd jumped up from their chairs. Everyone wanted to ______ together on the dance floor.",
    options: ["dance","sing","clap","cheer"], answer: 0, vocabIndex: 16 },
  { q: "During quiet moments in class when the teacher isn't looking, my little brother grabs his pencil and notebook. He especially loves to ______ dinosaurs whenever he gets bored.",
    options: ["write","draw","paint","color"], answer: 1, vocabIndex: 17 },
  { q: "Setting their alarms early for the long weekend ahead, the whole family packed water bottles and sturdy boots the night before. They planned to ______ up the mountain trail together.",
    options: ["hike","climb","run","walk"], answer: 0, vocabIndex: 18 },
  { q: "Spending quiet afternoons in her backyard surrounded by blooming flowers, she sets up her easel near the garden. She enjoys using bright colors to ______ pictures of the flowers there.",
    options: ["draw","color","sketch","paint"], answer: 3, vocabIndex: 19 },
  { q: "On long car rides during family vacations, the children in the back seat always find a way to keep themselves entertained. They love to ______ their favorite songs the whole way.",
    options: ["sing","play","hum","shout"], answer: 0, vocabIndex: 20 },
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
  "backyard": { pos: "n.", en_def: "an outdoor area behind a house", cn_def: "後院" },
  "calm": { pos: "adj.", en_def: "quiet and peaceful", cn_def: "平靜的" },
  "cheer": { pos: "v.", en_def: "to shout happily to show support", cn_def: "歡呼" },
  "choir": { pos: "n.", en_def: "a group of people who sing together", cn_def: "合唱團" },
  "clap": { pos: "v.", en_def: "to hit your hands together to make a sound", cn_def: "拍手" },
  "class": { pos: "n.", en_def: "a group of students who study together", cn_def: "班級" },
  "classical": { pos: "adj.", en_def: "relating to traditional styles of music or art", cn_def: "古典的" },
  "climb": { pos: "v.", en_def: "to go up something using your hands and feet", cn_def: "爬" },
  "club": { pos: "n.", en_def: "a group of people who meet because they share an interest", cn_def: "社團" },
  "collecting": { pos: "v.", en_def: "gathering things together as a hobby", cn_def: "收集" },
  "color": { pos: "v.", en_def: "to add color to a picture", cn_def: "上色" },
  "concert": { pos: "n.", en_def: "a public music performance", cn_def: "演唱會；音樂會" },
  "disturb": { pos: "v.", en_def: "to interrupt or bother someone", cn_def: "打擾" },
  "drumming": { pos: "n.", en_def: "the activity of playing drums", cn_def: "打鼓" },
  "fish": { pos: "v.", en_def: "to try to catch fish", cn_def: "釣魚" },
  "garage": { pos: "n.", en_def: "a building where a car is kept", cn_def: "車庫" },
  "hum": { pos: "v.", en_def: "to make a musical sound with closed lips, without words", cn_def: "哼唱" },
  "instruments": { pos: "n.", en_def: "objects used to produce musical sounds", cn_def: "樂器（複數）" },
  "job": { pos: "n.", en_def: "the work a person does regularly to earn money", cn_def: "工作" },
  "key": { pos: "n.", en_def: "a button pressed on a piano or keyboard", cn_def: "琴鍵" },
  "lake": { pos: "n.", en_def: "a large area of water surrounded by land", cn_def: "湖" },
  "marching": { pos: "adj.", en_def: "walking together in a line, like soldiers", cn_def: "遊行的；行進的" },
  "mountain": { pos: "n.", en_def: "a very high area of land", cn_def: "山" },
  "neighbors": { pos: "n.", en_def: "people who live near you", cn_def: "鄰居（複數）" },
  "noise": { pos: "n.", en_def: "a sound, especially an unpleasant or loud one", cn_def: "噪音；聲音" },
  "notebook": { pos: "n.", en_def: "a book with blank pages used for writing notes", cn_def: "筆記本" },
  "orchestra": { pos: "n.", en_def: "a large group of musicians who play together", cn_def: "管弦樂團" },
  "pedal": { pos: "n.", en_def: "a part of a machine pressed with the foot", cn_def: "踏板" },
  "records": { pos: "n.", en_def: "round flat discs used to play recorded music", cn_def: "唱片" },
  "rock": { pos: "n.", en_def: "a style of music with a strong beat, often with electric guitars", cn_def: "搖滾樂" },
  "run": { pos: "v.", en_def: "to move quickly on foot", cn_def: "跑步" },
  "shout": { pos: "v.", en_def: "to say something very loudly", cn_def: "大喊" },
  "sketch": { pos: "v.", en_def: "to draw something quickly and simply", cn_def: "素描" },
  "skill": { pos: "n.", en_def: "the ability to do something well", cn_def: "技能" },
  "song": { pos: "n.", en_def: "a piece of music with words that is sung", cn_def: "歌曲" },
  "sound": { pos: "n.", en_def: "something that can be heard", cn_def: "聲音" },
  "sport": { pos: "n.", en_def: "a physical activity played with rules, often as a game", cn_def: "運動" },
  "stamps": { pos: "n.", en_def: "small pieces of paper stuck on mail to show payment", cn_def: "郵票" },
  "street": { pos: "n.", en_def: "a public road in a town or city, usually with buildings", cn_def: "街道" },
  "student": { pos: "n.", en_def: "a person who is studying at a school", cn_def: "學生" },
  "subject": { pos: "n.", en_def: "an area of knowledge studied in school", cn_def: "科目" },
  "swim": { pos: "v.", en_def: "to move through water using your arms and legs", cn_def: "游泳" },
  "switch": { pos: "n.", en_def: "a small device used to turn something on or off", cn_def: "開關" },
  "talent": { pos: "n.", en_def: "a natural ability to do something well", cn_def: "天賦；才能" },
  "team": { pos: "n.", en_def: "a group of people playing or working together", cn_def: "隊伍" },
  "trail": { pos: "n.", en_def: "a path through nature used for walking or hiking", cn_def: "小徑" },
  "videos": { pos: "n.", en_def: "recordings of moving images, often watched on a screen", cn_def: "影片（複數）" },
  "walk": { pos: "v.", en_def: "to move on foot at a normal pace", cn_def: "走路" },
  "write": { pos: "v.", en_def: "to put words on paper using a pen or pencil", cn_def: "寫" }
};
Object.keys(EXTRA_GLOSSES).forEach(key => {
  const g = EXTRA_GLOSSES[key];
  if (!LOOKUP[key]) {
    LOOKUP[key] = { pos: g.pos, en_def: g.en_def, cn_def: g.cn_def, combined: [g] };
  }
});

// ---- Compound-option aliases so MCQ option lookups resolve correctly ----
const COMPOUND_ALIASES = {
  "classical music": "classical"
};
Object.keys(COMPOUND_ALIASES).forEach(compound => {
  const base = COMPOUND_ALIASES[compound];
  if (!LOOKUP[compound] && LOOKUP[base]) {
    LOOKUP[compound] = LOOKUP[base];
  }
});
