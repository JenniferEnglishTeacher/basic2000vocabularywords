// ============================================================
// Group 22 Quiz Data: Clothing Items / Clothing Care & Fashion
// Full word set (25 words) — clothing items plus clothing care
// and fashion vocabulary from the "body / health / feelings /
// clothing / appearance" theme. Continues from Group 21
// (Health/Illness/Senses/Speech). Accessories and colors will
// follow as the next group.
// ============================================================

const QUIZ_CONFIG = {
  groupName: "Group 22 - Clothing Items / Care & Fashion (服飾/服裝保養與時尚)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

// ---- Part 1 data: spelling practice (25 words) ----
const VOCAB = [
  { word: "shirt", pos: "n.", cn_def: "襯衫", en_def: "a piece of clothing worn on the upper body, often with buttons and a collar",
    sentence: "He ironed his white {{BLANK}} carefully before the job interview.",
    cn: "他在面試前小心地把那件白襯衫燙好。" },
  { word: "T-shirt", pos: "n.", cn_def: "T恤", en_def: "a simple short-sleeved shirt with no collar or buttons",
    sentence: "She bought a new {{BLANK}} with her favorite band's logo printed on the front.",
    cn: "她買了一件印有她最喜歡樂團標誌的新T恤。" },
  { word: "sweater", pos: "n.", cn_def: "毛衣", en_def: "a warm knitted piece of clothing worn over the upper body",
    sentence: "My grandmother knitted me a cozy {{BLANK}} for my birthday this year.",
    cn: "我奶奶今年生日織了一件舒適的毛衣送我。" },
  { word: "dress", pos: "n.", cn_def: "洋裝", en_def: "a one-piece piece of clothing worn by women or girls",
    sentence: "She wore a beautiful blue {{BLANK}} to her cousin's wedding last weekend.",
    cn: "她上週末穿了一件漂亮的藍色洋裝去參加表姐的婚禮。" },
  { word: "skirt", pos: "n.", cn_def: "裙子", en_def: "a piece of clothing that hangs from the waist and covers the legs",
    sentence: "The school requires girls to wear a navy blue {{BLANK}} as part of the uniform.",
    cn: "學校規定女生要穿深藍色的裙子作為制服的一部分。" },
  { word: "jeans", pos: "n.", cn_def: "牛仔褲", en_def: "casual pants made from a thick blue cotton fabric called denim",
    sentence: "He wore his favorite pair of {{BLANK}} to the weekend barbecue.",
    cn: "他穿著他最喜歡的那條牛仔褲去參加週末的烤肉聚會。" },
  { word: "pants", pos: "n.", cn_def: "長褲", en_def: "a piece of clothing covering the body from the waist to the ankles, with two legs",
    sentence: "He needed to buy new {{BLANK}} after he grew two inches taller this year.",
    cn: "他今年長高了兩英吋，所以需要買新長褲。" },
  { word: "trousers", pos: "n.", cn_def: "長褲", en_def: "another word for pants, more common in British English",
    sentence: "The waiter wore black {{BLANK}} and a crisp white shirt at the formal restaurant.",
    cn: "服務生在這家正式的餐廳裡穿著黑色長褲和一件整潔的白襯衫。" },
  { word: "shorts", pos: "n.", cn_def: "短褲", en_def: "pants that end above or at the knee",
    sentence: "He packed a pair of swim {{BLANK}} for the trip to the beach.",
    cn: "他為這次海邊旅行打包了一條泳褲。" },
  { word: "vest", pos: "n.", cn_def: "背心", en_def: "a sleeveless piece of clothing worn over a shirt",
    sentence: "He wore a fancy {{BLANK}} under his suit jacket for the formal dinner.",
    cn: "他在正式晚宴的西裝外套下穿了一件講究的背心。" },
  { word: "coat", pos: "n.", cn_def: "大衣", en_def: "a long piece of outer clothing worn for warmth",
    sentence: "She buttoned up her warm winter {{BLANK}} before stepping outside into the snow.",
    cn: "她踏出門進入雪地前把溫暖的冬季大衣扣好。" },
  { word: "jacket", pos: "n.", cn_def: "夾克", en_def: "a short coat, often worn outdoors",
    sentence: "He grabbed his denim {{BLANK}} on the way out in case it got cold later.",
    cn: "他出門時拿了他的牛仔夾克，以防晚一點變冷。" },
  { word: "suit", pos: "n.", cn_def: "套裝", en_def: "a matching jacket and pants or skirt worn for formal occasions",
    sentence: "He wore a dark gray {{BLANK}} to his sister's graduation ceremony.",
    cn: "他穿了一套深灰色的套裝去參加姐姐的畢業典禮。" },
  { word: "uniform", pos: "n.", cn_def: "制服", en_def: "special clothing worn by everyone in a school, team, or job",
    sentence: "Every student at this school must wear the same blue {{BLANK}} on weekdays.",
    cn: "這所學校的每位學生在平日都必須穿同樣的藍色制服。" },
  { word: "pajamas", pos: "n.", cn_def: "睡衣", en_def: "loose, comfortable clothing worn for sleeping",
    sentence: "He changed into his favorite striped {{BLANK}} before climbing into bed.",
    cn: "他爬上床前換上了他最喜歡的條紋睡衣。" },
  { word: "underwear", pos: "n.", cn_def: "內衣", en_def: "clothing worn under your other clothes, next to your skin",
    sentence: "She always packs extra {{BLANK}} whenever she goes on a long trip.",
    cn: "她每次長途旅行都會多帶一些內衣。" },
  { word: "swimsuit", pos: "n.", cn_def: "泳裝", en_def: "clothing worn for swimming",
    sentence: "She packed her favorite {{BLANK}} for the family trip to the water park.",
    cn: "她為這次全家去水上樂園的旅行打包了她最喜歡的泳裝。" },
  { word: "socks", pos: "n.", cn_def: "襪子", en_def: "soft coverings worn on the feet, inside shoes",
    sentence: "He could never find two matching {{BLANK}} in his messy drawer.",
    cn: "他在亂糟糟的抽屜裡總是找不到兩隻一樣的襪子。" },
  { word: "shoes", pos: "n.", cn_def: "鞋子", en_def: "items worn to cover and protect the feet outdoors",
    sentence: "She bought a new pair of {{BLANK}} for the first day of school.",
    cn: "她為開學第一天買了一雙新鞋。" },
  { word: "slippers", pos: "n.", cn_def: "拖鞋", en_def: "soft, comfortable shoes worn indoors",
    sentence: "He slipped on his warm {{BLANK}} as soon as he got out of bed.",
    cn: "他一下床就立刻穿上他溫暖的拖鞋。" },
  { word: "sneakers", pos: "n.", cn_def: "運動鞋", en_def: "comfortable sports shoes used for running or exercise",
    sentence: "She wore her newest {{BLANK}} for the school's annual track and field day.",
    cn: "她穿著最新的運動鞋參加學校的年度田徑運動會。" },
  { word: "fit", pos: "v.", cn_def: "合身", en_def: "to be the right size or shape for someone",
    sentence: "The shirt was too small and did not {{BLANK}} him anymore.",
    cn: "這件襯衫太小了，已經不適合他穿了。" },
  { word: "iron", pos: "v.", cn_def: "熨燙", en_def: "to make clothes smooth using a heated tool",
    sentence: "She likes to {{BLANK}} her school uniform every Sunday evening for the week ahead.",
    cn: "她喜歡每個星期天晚上熨燙她下週要穿的學校制服。" },
  { word: "wear", pos: "v.", cn_def: "穿著", en_def: "to have clothing on your body",
    sentence: "Students must {{BLANK}} their name tags during the entire school field trip.",
    cn: "學生在整個校外教學期間都必須佩戴名牌。" },
  { word: "fashionable", pos: "adj.", cn_def: "時尚的", en_def: "stylish; in keeping with current trends",
    sentence: "My older sister always knows which colors and styles are the most {{BLANK}} this season.",
    cn: "我姐姐總是知道這個季節最流行的顏色和款式。" }
];

// ---- Part 2 data: 25 MCQs ----
// CEFR A2 / 國中會考 level: exactly 2 sentences, ~18-30 words total,
// rich concrete context clue, one blank, simple surrounding vocabulary.
// Answer letters balanced across A/B/C/D (7/6/6/6), no adjacent repeats.
// vocabIndex points to the exact VOCAB array entry being tested.
const MCQS = [
  { q: "Getting ready for his job interview, he stood in front of the mirror checking every detail. He had carefully ironed his white ______ that morning.",
    options: ["shirt","sweater","coat","vest"], answer: 0, vocabIndex: 0 },
  { q: "Excited about her favorite band's new album, she went to the merchandise shop right after the concert. She bought a ______ with the band's logo printed on the front.",
    options: ["dress","T-shirt","skirt","uniform"], answer: 1, vocabIndex: 1 },
  { q: "For her granddaughter's birthday this year, she spent weeks sitting by the fireplace with her knitting needles. She finally finished a cozy ______ as the perfect gift.",
    options: ["sweater","shorts","jeans","vest"], answer: 0, vocabIndex: 2 },
  { q: "At her cousin's wedding last weekend, she wanted to look elegant for the photos. She chose a beautiful blue ______ with a matching pair of earrings.",
    options: ["suit","dress","jacket","uniform"], answer: 1, vocabIndex: 3 },
  { q: "As part of the school's dress code, every girl follows the same rule each morning. The uniform requires a navy blue ______ paired with white socks.",
    options: ["pants","jeans","shorts","skirt"], answer: 3, vocabIndex: 4 },
  { q: "Heading to a casual weekend barbecue with friends, he wanted something comfortable yet stylish. He chose his favorite pair of ______ paired with sneakers.",
    options: ["pajamas","trousers","jeans","underwear"], answer: 2, vocabIndex: 5 },
  { q: "After a sudden growth spurt this year, nothing in his closet seemed to fit anymore. He needed to buy new ______ that were two inches longer.",
    options: ["shorts","socks","vest","pants"], answer: 3, vocabIndex: 6 },
  { q: "Working at the most formal restaurant downtown, every waiter follows a strict dress code. He wore black ______ along with a crisp white shirt.",
    options: ["trousers","jeans","shorts","pajamas"], answer: 0, vocabIndex: 7 },
  { q: "Packing his bag for a relaxing weekend at the beach, he made sure not to forget the essentials. He packed a pair of swim ______ along with sunscreen.",
    options: ["pants","trousers","jeans","shorts"], answer: 3, vocabIndex: 8 },
  { q: "Dressing up for the formal dinner party, he wanted to add an extra touch beneath his jacket. He wore a fancy ______ that matched his tie perfectly.",
    options: ["vest","coat","uniform","sweater"], answer: 0, vocabIndex: 9 },
  { q: "Stepping outside into the falling snow, she wanted to stay warm during her walk to school. She buttoned up her thick winter ______ before opening the door.",
    options: ["jacket","vest","sweater","coat"], answer: 3, vocabIndex: 10 },
  { q: "Checking the weather forecast before leaving the house, he noticed it might get colder later in the afternoon. He grabbed his denim ______ just in case.",
    options: ["coat","suit","jacket","uniform"], answer: 2, vocabIndex: 11 },
  { q: "Attending his sister's graduation ceremony at the university auditorium, he wanted to look his best for the photos. He wore a dark gray ______ with a matching tie.",
    options: ["jacket","vest","coat","suit"], answer: 3, vocabIndex: 12 },
  { q: "Following the strict dress code at his new school, every student looks identical on weekdays. They all wear the same blue ______ without exception.",
    options: ["suit","uniform","coat","vest"], answer: 1, vocabIndex: 13 },
  { q: "Getting ready for bed after a long, tiring day, he wanted something soft and comfortable to sleep in. He changed into his favorite striped ______ before climbing under the covers.",
    options: ["uniform","swimsuit","underwear","pajamas"], answer: 3, vocabIndex: 14 },
  { q: "Preparing for a long trip away from home, she carefully packed extra items just to be safe. She always brings extra ______ whenever she travels for more than a few days.",
    options: ["underwear","pajamas","uniform","swimsuit"], answer: 0, vocabIndex: 15 },
  { q: "Excited about the family trip to the water park this weekend, she checked her bag twice before leaving. She made sure to pack her favorite ______ for all the water slides.",
    options: ["underwear","swimsuit","uniform","pajamas"], answer: 1, vocabIndex: 16 },
  { q: "Getting dressed in a hurry every morning, he always struggles with the same small problem. He can never find two matching ______ in his messy drawer.",
    options: ["shoes","slippers","socks","sneakers"], answer: 2, vocabIndex: 17 },
  { q: "Excited for the first day of school after summer break, she wanted to start the year feeling confident. She bought a brand-new pair of ______ just for the occasion.",
    options: ["socks","shoes","slippers","sneakers"], answer: 1, vocabIndex: 18 },
  { q: "Waking up early on a cold winter morning, he hated the feeling of cold floors under his bare feet. He slipped on his warm ______ right after getting out of bed.",
    options: ["shoes","socks","slippers","sneakers"], answer: 2, vocabIndex: 19 },
  { q: "Competing in the school's annual track and field day, she wanted her feet to feel light and fast. She wore her newest ______ for every single race.",
    options: ["sneakers","slippers","shoes","socks"], answer: 0, vocabIndex: 20 },
  { q: "Trying on his old shirt from two years ago, he noticed something had clearly changed since then. The shirt was far too small and no longer ______ him at all.",
    options: ["match","suit","fit","wear"], answer: 2, vocabIndex: 21 },
  { q: "Every Sunday evening before the school week begins, she follows the same careful routine with her uniform. She likes to ______ it neatly so it looks fresh on Monday.",
    options: ["iron","wash","fold","wear"], answer: 0, vocabIndex: 22 },
  { q: "During the entire school field trip to the museum, the teacher reminded every student about an important rule. They must ______ their name tags at all times.",
    options: ["carry","wear","hold","bring"], answer: 1, vocabIndex: 23 },
  { q: "Always keeping up with the latest trends in clothing magazines, my older sister has a special talent for style. She always knows which colors are the most ______ each season.",
    options: ["comfortable","expensive","fashionable","traditional"], answer: 2, vocabIndex: 24 },
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
  "annual": { pos: "adj.", en_def: "happening once every year", cn_def: "年度的" },
  "band": { pos: "n.", en_def: "a group of musicians who play together", cn_def: "樂團" },
  "barbecue": { pos: "n.", en_def: "an outdoor meal where food is cooked over a fire", cn_def: "烤肉" },
  "beach": { pos: "n.", en_def: "the sandy or rocky area next to the ocean", cn_def: "海灘" },
  "birthday": { pos: "n.", en_def: "the day of the year a person was born", cn_def: "生日" },
  "bring": { pos: "v.", en_def: "to carry something to a place", cn_def: "帶來" },
  "buttoned": { pos: "v.", en_def: "closed something using buttons", cn_def: "扣上（過去式）" },
  "carry": { pos: "v.", en_def: "to hold and move something from one place to another", cn_def: "攜帶" },
  "ceremony": { pos: "n.", en_def: "a formal event held for a special occasion", cn_def: "典禮" },
  "comfortable": { pos: "adj.", en_def: "providing physical ease and relaxation", cn_def: "舒適的" },
  "cozy": { pos: "adj.", en_def: "warm and comfortable", cn_def: "溫暖舒適的" },
  "crisp": { pos: "adj.", en_def: "clean, fresh, and neatly pressed", cn_def: "乾淨整潔的" },
  "denim": { pos: "n.", en_def: "a thick strong blue cotton fabric used for jeans", cn_def: "丹寧布；牛仔布" },
  "drawer": { pos: "n.", en_def: "a sliding storage box, usually part of furniture", cn_def: "抽屜" },
  "expensive": { pos: "adj.", en_def: "costing a lot of money", cn_def: "昂貴的" },
  "fold": { pos: "v.", en_def: "to bend something over itself neatly", cn_def: "摺疊" },
  "formal": { pos: "adj.", en_def: "following accepted rules and traditions; not casual", cn_def: "正式的" },
  "graduation": { pos: "n.", en_def: "the act of finishing school and receiving a diploma", cn_def: "畢業" },
  "hold": { pos: "v.", en_def: "to have something in your hands or arms", cn_def: "拿著" },
  "interview": { pos: "n.", en_def: "a formal meeting where someone is asked questions about a job", cn_def: "面試" },
  "logo": { pos: "n.", en_def: "a symbol or design that represents a company or group", cn_def: "標誌" },
  "match": { pos: "v.", en_def: "to be the same as or go well with something else", cn_def: "搭配" },
  "matching": { pos: "adj.", en_def: "the same as or going well with something else", cn_def: "相配的" },
  "navy": { pos: "adj.", en_def: "a dark blue color", cn_def: "海軍藍" },
  "park": { pos: "n.", en_def: "a public area with grass and trees for people to enjoy", cn_def: "公園" },
  "season": { pos: "n.", en_def: "one of the four parts of the year, like summer or winter", cn_def: "季節" },
  "striped": { pos: "adj.", en_def: "having lines of different colors", cn_def: "有條紋的" },
  "tags": { pos: "n.", en_def: "small labels attached to something", cn_def: "標籤" },
  "traditional": { pos: "adj.", en_def: "following customs that have existed for a long time", cn_def: "傳統的" },
  "wash": { pos: "v.", en_def: "to clean something with water", cn_def: "洗" },
  "wedding": { pos: "n.", en_def: "a ceremony where two people get married", cn_def: "婚禮" }
};
Object.keys(EXTRA_GLOSSES).forEach(key => {
  const g = EXTRA_GLOSSES[key];
  if (!LOOKUP[key]) {
    LOOKUP[key] = { pos: g.pos, en_def: g.en_def, cn_def: g.cn_def, combined: [g] };
  }
});
