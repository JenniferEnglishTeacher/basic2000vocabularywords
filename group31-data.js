// ============================================================
// Group 31 Quiz Data: Places / Buildings (Part 2 - Final)
// Full word set (19 words) — public buildings, institutions,
// and outdoor places from the "sports / countries /
// transportation / places" theme. Continues from Group 30
// (Places/Buildings, Part 1). This is the FINAL group in the
// theme, completing all 145 words across Groups 25-31.
// Note: the spreadsheet entry "musem" is a misspelling of
// "museum" (confirmed by the Chinese gloss 博物館); corrected
// here with a proper definition.
// ============================================================

const QUIZ_CONFIG = {
  groupName: "Group 31 - Places / Buildings, Part 2 (地方/建築物 二)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

// ---- Part 1 data: spelling practice (19 words) ----
const VOCAB = [
  { word: "hospital", pos: "n.", cn_def: "醫院", en_def: "a place where sick or injured people receive medical care",
    sentence: "The doctor checked on her patients at the {{BLANK}} every morning before lunch.",
    cn: "醫生每天早上午餐前都會去醫院探視她的病人。" },
  { word: "hotel", pos: "n.", cn_def: "旅館", en_def: "a building where travelers pay to sleep and eat",
    sentence: "Our family booked a room at a comfortable {{BLANK}} near the beach.",
    cn: "我們全家在海邊附近訂了一間舒適的旅館房間。" },
  { word: "library", pos: "n.", cn_def: "圖書館", en_def: "a building where books are kept for people to read or borrow",
    sentence: "I spend almost every Saturday afternoon studying quietly at the {{BLANK}}.",
    cn: "我幾乎每個星期六下午都在圖書館安靜地學習。" },
  { word: "museum", pos: "n.", cn_def: "博物館", en_def: "a building where interesting or historic objects are displayed",
    sentence: "We saw ancient pottery and old paintings at the city {{BLANK}}.",
    cn: "我們在市立博物館看到了古老的陶器和畫作。" },
  { word: "park", pos: "n.", cn_def: "公園", en_def: "a public area with grass and trees for people to enjoy",
    sentence: "Children love to feed the ducks at the pond in the {{BLANK}}.",
    cn: "孩子們喜歡在公園的池塘邊餵鴨子。" },
  { word: "square", pos: "n.", cn_def: "廣場", en_def: "an open public space, often surrounded by buildings",
    sentence: "Every evening, dozens of people gather in the city {{BLANK}} to dance.",
    cn: "每天晚上，數十人會聚集在市區廣場跳舞。" },
  { word: "playground", pos: "n.", cn_def: "操場", en_def: "an outdoor area with equipment where children can play",
    sentence: "After lunch, the students ran outside to the {{BLANK}} to play basketball.",
    cn: "午餐後，學生們跑到操場去打籃球。" },
  { word: "parking lot", pos: "n.", cn_def: "停車場", en_def: "an outdoor area where vehicles can be parked",
    sentence: "We searched for an empty space in the crowded {{BLANK}} for ten minutes.",
    cn: "我們在擁擠的停車場找了十分鐘才找到空位。" },
  { word: "theater", pos: "n.", cn_def: "戲院", en_def: "a building where movies or live performances are shown",
    sentence: "My sister and I watched the new superhero film at the {{BLANK}} last night.",
    cn: "我和姊姊昨晚在戲院看了新上映的超級英雄電影。" },
  { word: "zoo", pos: "n.", cn_def: "動物園", en_def: "a place where wild animals are kept for people to see",
    sentence: "The little boy was thrilled to see real elephants at the {{BLANK}}.",
    cn: "小男孩在動物園看到真正的大象，興奮極了。" },
  { word: "court", pos: "n.", cn_def: "法庭", en_def: "a place where legal cases are decided by a judge",
    sentence: "The lawyer presented her evidence carefully in front of the {{BLANK}}.",
    cn: "律師在法庭上小心地提出她的證據。" },
  { word: "factory", pos: "n.", cn_def: "工廠", en_def: "a building where goods are made by machines",
    sentence: "My uncle has worked at the same shoe {{BLANK}} for over twenty years.",
    cn: "我叔叔在同一家鞋廠工作了二十多年。" },
  { word: "farm", pos: "n.", cn_def: "農場", en_def: "an area of land used for growing crops or raising animals",
    sentence: "Every summer, we visit my grandparents' {{BLANK}} to help pick fresh vegetables.",
    cn: "每年夏天，我們都會去祖父母的農場幫忙採收新鮮蔬菜。" },
  { word: "temple", pos: "n.", cn_def: "寺廟", en_def: "a building used for worship",
    sentence: "Tourists lit incense and bowed quietly inside the ancient {{BLANK}}.",
    cn: "遊客在古老的寺廟裡點香並安靜地鞠躬。" },
  { word: "company", pos: "n.", cn_def: "公司", en_def: "a business that makes or sells goods or services",
    sentence: "My father has worked at the same technology {{BLANK}} since college.",
    cn: "我爸爸從大學畢業後就一直在同一家科技公司工作。" },
  { word: "apartment", pos: "n.", cn_def: "公寓", en_def: "a set of rooms for living in, usually in a larger building",
    sentence: "My cousin just moved into a small {{BLANK}} near the train station.",
    cn: "我表哥剛搬進火車站附近的一間小公寓。" },
  { word: "castle", pos: "n.", cn_def: "城堡", en_def: "a large, old building built for defense, often with thick stone walls",
    sentence: "Tourists climbed the tall stone tower of the ancient {{BLANK}} for the view.",
    cn: "遊客爬上那座古老城堡的高聳石塔欣賞風景。" },
  { word: "beach", pos: "n.", cn_def: "海灘", en_def: "an area of sand next to the sea",
    sentence: "We built a tall sandcastle together on the {{BLANK}} all afternoon.",
    cn: "我們整個下午都在海灘上一起堆一座高高的沙堡。" },
  { word: "building", pos: "n.", cn_def: "建築物", en_def: "a structure with a roof and walls, such as a house or office",
    sentence: "That tall glass {{BLANK}} downtown has over fifty floors.",
    cn: "市區那棟高聳的玻璃建築物有超過五十層樓。" }
];

// ---- Part 2 data: 19 MCQs ----
// CEFR A2 / 國中會考 level: exactly 2 sentences, ~27-32 words total,
// rich concrete context clue, one blank, simple surrounding vocabulary.
// Answer letters balanced across A/B/C/D, no adjacent repeats.
// vocabIndex points to the exact VOCAB array entry being tested.
const MCQS = [
  { q: "Wearing a white coat and carrying a clipboard, she walks from room to room checking on every patient before her lunch break. The doctor checked on her patients at the ______ every morning.",
    options: ["hospital", "library", "factory", "court"], answer: 0, vocabIndex: 0 },
  { q: "Wanting an ocean view from their window every morning during the trip, the family chose a comfortable place to stay close to the sand. They booked a room at a ______ near the beach.",
    options: ["castle", "hotel", "temple", "square"], answer: 1, vocabIndex: 1 },
  { q: "Surrounded by quiet rows of bookshelves and the soft sound of turning pages, this is the best place to focus on homework. I spend almost every Saturday afternoon studying quietly at the ______.",
    options: ["zoo", "farm", "library", "playground"], answer: 2, vocabIndex: 2 },
  { q: "Glass cases displayed ancient pottery and faded old paintings collected from many centuries ago for visitors to admire. We saw ancient pottery and old paintings at the city ______ on our field trip.",
    options: ["factory", "company", "apartment", "museum"], answer: 3, vocabIndex: 3 },
  { q: "Bright green grass and a small pond full of friendly ducks make this a favorite spot for families on sunny weekends. Children love to feed the ducks at the pond in the ______.",
    options: ["park", "court", "castle", "hotel"], answer: 0, vocabIndex: 4 },
  { q: "Surrounded by old stone buildings and bright string lights, this open public space fills with music and laughter after sunset. Every evening, dozens of people gather in the city ______ to dance.",
    options: ["museum", "square", "factory", "farm"], answer: 1, vocabIndex: 5 },
  { q: "Right after the lunch bell rang, a crowd of energetic students rushed outside carrying a basketball under one arm. After lunch, the students ran outside to the ______ to play basketball.",
    options: ["theater", "courthouse", "playground", "library"], answer: 2, vocabIndex: 6 },
  { q: "Driving slowly between rows of parked vehicles, we circled the crowded area near the mall entrance again and again. We searched for an empty space in the crowded ______ for ten minutes.",
    options: ["square", "playground", "beach", "parking lot"], answer: 3, vocabIndex: 7 },
  { q: "Sitting in comfortable seats with popcorn in hand, the two sisters watched a new superhero film light up the huge screen. They watched the new film at the ______ last night together.",
    options: ["theater", "temple", "court", "farm"], answer: 0, vocabIndex: 8 },
  { q: "Pressing his face against the glass with wide eyes, the little boy pointed excitedly at the huge gray animals nearby. He was thrilled to see real elephants at the ______ for the first time.",
    options: ["beach", "zoo", "company", "apartment"], answer: 1, vocabIndex: 9 },
  { q: "Standing nervously before a serious judge, the young lawyer carefully laid out every piece of evidence she had gathered. The lawyer presented her evidence carefully in front of the ______ that morning.",
    options: ["castle", "museum", "court", "park"], answer: 2, vocabIndex: 10 },
  { q: "Surrounded by the constant hum of machines stitching leather day after day, my uncle has built his whole career in one place. He has worked at the same shoe ______ for over twenty years.",
    options: ["temple", "library", "square", "factory"], answer: 3, vocabIndex: 11 },
  { q: "Wearing old boots and carrying baskets, the whole family walks between rows of tomatoes and corn under the hot summer sun. Every summer, we visit my grandparents' ______ to help pick fresh vegetables.",
    options: ["farm", "beach", "hotel", "building"], answer: 0, vocabIndex: 12 },
  { q: "Removing their shoes quietly at the entrance, the tourists lit sticks of incense and bowed before the old wooden statues inside. Tourists lit incense and bowed quietly inside the ancient ______ that afternoon.",
    options: ["apartment", "temple", "company", "playground"], answer: 1, vocabIndex: 13 },
  { q: "Wearing a suit every day since graduation, my father has built his entire career writing code for the same growing business. My father has worked at the same technology ______ since college.",
    options: ["hospital", "castle", "company", "court"], answer: 2, vocabIndex: 14 },
  { q: "Carrying boxes up three flights of stairs, my cousin finally settled into a cozy set of rooms close to the rails. My cousin just moved into a small ______ near the train station.",
    options: ["museum", "factory", "zoo", "apartment"], answer: 3, vocabIndex: 15 },
  { q: "Climbing higher up the worn stone steps inside the thick tower walls, visitors finally reached the breathtaking view at the top. Tourists climbed the tall stone tower of the ancient ______ for the view.",
    options: ["castle", "library", "park", "theater"], answer: 0, vocabIndex: 16 },
  { q: "Digging with plastic shovels and patting wet sand into tall, lopsided towers, the children laughed together under the bright afternoon sun. We built a tall sandcastle together on the ______ all afternoon.",
    options: ["square", "beach", "farm", "hospital"], answer: 1, vocabIndex: 17 },
  { q: "Made almost entirely of shining glass and steel, this towering structure rises high above every other rooftop in the busy city center. That tall glass ______ downtown has over fifty floors.",
    options: ["playground", "court", "building", "hotel"], answer: 2, vocabIndex: 18 },
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
  "admire": { pos: "v.", en_def: "to look at something with pleasure or respect", cn_def: "欣賞；讚賞" },
  "ancient": { pos: "adj.", en_def: "very old; from a long time ago", cn_def: "古老的" },
  "boots": { pos: "n.", en_def: "heavy shoes that cover the foot and ankle", cn_def: "靴子（複數）" },
  "bowed": { pos: "v.", en_def: "bent the body forward as a sign of respect", cn_def: "鞠躬（過去式）" },
  "breathtaking": { pos: "adj.", en_def: "extremely beautiful or exciting", cn_def: "令人驚嘆的" },
  "career": { pos: "n.", en_def: "a person's long-term job or profession", cn_def: "職業生涯" },
  "centuries": { pos: "n.", en_def: "periods of one hundred years", cn_def: "世紀（複數）" },
  "circled": { pos: "v.", en_def: "moved around in a circle", cn_def: "繞圈（過去式）" },
  "clipboard": { pos: "n.", en_def: "a flat board with a clip for holding papers", cn_def: "文件夾板" },
  "code": { pos: "n.", en_def: "instructions written for a computer program", cn_def: "程式碼" },
  "comfortable": { pos: "adj.", en_def: "providing physical ease and relaxation", cn_def: "舒適的" },
  "corn": { pos: "n.", en_def: "a tall plant with yellow seeds eaten as food", cn_def: "玉米" },
  "courthouse": { pos: "n.", en_def: "a building where legal trials take place", cn_def: "法院" },
  "crowd": { pos: "n.", en_def: "a large group of people gathered together", cn_def: "人群" },
  "elephants": { pos: "n.", en_def: "very large gray animals with long trunks", cn_def: "大象（複數）" },
  "energetic": { pos: "adj.", en_def: "full of energy; active", cn_def: "精力充沛的" },
  "entrance": { pos: "n.", en_def: "the way into a place", cn_def: "入口" },
  "evidence": { pos: "n.", en_def: "facts or information that show something is true", cn_def: "證據" },
  "field trip": { pos: "n.", en_def: "a school trip to a place outside the classroom", cn_def: "校外教學" },
  "flights": { pos: "n.", en_def: "sets of stairs between two levels", cn_def: "（樓梯的）一段" },
  "floors": { pos: "n.", en_def: "levels of a building", cn_def: "樓層（複數）" },
  "gathered": { pos: "v.", en_def: "came together in a group", cn_def: "聚集（過去式）" },
  "graduation": { pos: "n.", en_def: "the act of completing a course of study", cn_def: "畢業" },
  "grandparents": { pos: "n.", en_def: "the parents of your mother or father", cn_def: "祖父母（複數）" },
  "incense": { pos: "n.", en_def: "a substance burned to produce a sweet smell", cn_def: "香" },
  "judge": { pos: "n.", en_def: "a person who decides cases in a court of law", cn_def: "法官" },
  "laughter": { pos: "n.", en_def: "the sound of laughing", cn_def: "笑聲" },
  "lawyer": { pos: "n.", en_def: "a person trained to give advice about the law", cn_def: "律師" },
  "leather": { pos: "n.", en_def: "material made from animal skin", cn_def: "皮革" },
  "lopsided": { pos: "adj.", en_def: "leaning more to one side than the other", cn_def: "不對稱的；歪斜的" },
  "machines": { pos: "n.", en_def: "devices that use power to do work", cn_def: "機器（複數）" },
  "patients": { pos: "n.", en_def: "people receiving medical treatment", cn_def: "病人（複數）" },
  "patting": { pos: "v.", en_def: "touching gently and repeatedly with the hand", cn_def: "輕拍（進行式）" },
  "pond": { pos: "n.", en_def: "a small area of still water", cn_def: "池塘" },
  "popcorn": { pos: "n.", en_def: "a snack made from corn kernels that puff up when heated", cn_def: "爆米花" },
  "pottery": { pos: "n.", en_def: "objects made from clay, such as bowls and vases", cn_def: "陶器" },
  "removing": { pos: "v.", en_def: "taking something off or away", cn_def: "移除（進行式）" },
  "rooftops": { pos: "n.", en_def: "the tops of the roofs of buildings", cn_def: "屋頂（複數）" },
  "sandcastle": { pos: "n.", en_def: "a model of a castle built from sand on a beach", cn_def: "沙堡" },
  "screen": { pos: "n.", en_def: "a flat surface on which images are shown", cn_def: "螢幕" },
  "shoe": { pos: "n.", en_def: "an outer covering for the foot", cn_def: "鞋子" },
  "shovels": { pos: "n.", en_def: "tools used for digging", cn_def: "鏟子（複數）" },
  "statues": { pos: "n.", en_def: "carved or shaped figures of people or animals", cn_def: "雕像（複數）" },
  "stitching": { pos: "v.", en_def: "sewing pieces of material together", cn_def: "縫製（進行式）" },
  "suit": { pos: "n.", en_def: "a matching jacket and pants worn for formal occasions", cn_def: "西裝" },
  "thrilled": { pos: "adj.", en_def: "extremely excited and happy", cn_def: "非常興奮的" },
  "tomatoes": { pos: "n.", en_def: "soft red fruits eaten as a vegetable", cn_def: "番茄（複數）" },
  "tower": { pos: "n.", en_def: "a tall, narrow structure or part of a building", cn_def: "塔" },
  "towers": { pos: "n.", en_def: "tall, narrow structures", cn_def: "塔（複數）" },
  "towering": { pos: "adj.", en_def: "very tall", cn_def: "高聳的" },
  "trains": { pos: "n.", en_def: "long vehicles that run on tracks", cn_def: "火車（複數）" },
  "visitors": { pos: "n.", en_def: "people who visit a place", cn_def: "訪客（複數）" },
  "wooden": { pos: "adj.", en_def: "made of wood", cn_def: "木製的" }
};
Object.keys(EXTRA_GLOSSES).forEach(key => {
  const g = EXTRA_GLOSSES[key];
  if (!LOOKUP[key]) {
    LOOKUP[key] = { pos: g.pos, en_def: g.en_def, cn_def: g.cn_def, combined: [g] };
  }
});
