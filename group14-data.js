// ============================================================
// Group 14 Quiz Data: Media / Entertainment / Time & Eras
// Full word set (31 words) — media and entertainment vocabulary
// plus time/era words from the "school / work / media /
// communication" theme. This is the final group completing the
// theme started in Group 11 (Jobs/Office/Technology), continued
// in Group 12 (School Life) and Group 13 (Work/Business/Money).
// ============================================================

const QUIZ_CONFIG = {
  groupName: "Group 14 - Media / Entertainment / Time & Eras (媒體/娛樂/時代)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

// ---- Part 1 data: spelling practice (31 words) ----
const VOCAB = [
  { word: "advertisement", pos: "n.", cn_def: "廣告", en_def: "a public message that tries to sell a product or service",
    sentence: "During the show, a long {{BLANK}} for a new phone played before the next scene.",
    cn: "節目播放期間，下一個場景前播了一則新手機的長廣告。" },
  { word: "broadcast", pos: "v.", cn_def: "廣播", en_def: "to send out a program on television or radio",
    sentence: "The station will {{BLANK}} the basketball final live tonight at eight o'clock.",
    cn: "電視台今晚八點將現場直播這場籃球決賽。" },
  { word: "cable", pos: "n.", cn_def: "電纜", en_def: "a thick wire used to carry electricity or send television signals",
    sentence: "After the storm, a fallen tree damaged the {{BLANK}} connected to our television.",
    cn: "暴風雨後，一棵倒下的樹弄壞了連接我們電視的電纜線。" },
  { word: "cartoon", pos: "n.", cn_def: "卡通", en_def: "a funny drawn film, often made for children",
    sentence: "Every Saturday morning, my little cousin watches the same {{BLANK}} before breakfast.",
    cn: "每個星期六早上，我的小表弟都會在早餐前看同一部卡通。" },
  { word: "drama", pos: "n.", cn_def: "戲劇", en_def: "a serious play or show, often about emotional situations",
    sentence: "My mother never misses an episode of her favorite evening {{BLANK}} on television.",
    cn: "我媽媽從不錯過她最喜歡的那部晚間電視劇的任何一集。" },
  { word: "news", pos: "n.", cn_def: "新聞", en_def: "information about recent events, often shown on TV or in papers",
    sentence: "My grandfather watches the evening {{BLANK}} every night before going to bed.",
    cn: "我爺爺每天晚上睡前都會看晚間新聞。" },
  { word: "movie", pos: "n.", cn_def: "電影", en_def: "a story shown using moving pictures, usually in a theater",
    sentence: "We waited in a long line to buy tickets for the new superhero {{BLANK}}.",
    cn: "我們排了很長的隊伍買新上映超級英雄電影的票。" },
  { word: "channel", pos: "n.", cn_def: "頻道", en_def: "a specific station on television that shows certain programs",
    sentence: "My father always switches to the sports {{BLANK}} as soon as he gets home.",
    cn: "我爸爸一回家就會立刻轉到體育頻道。" },
  { word: "program", pos: "n.", cn_def: "節目", en_def: "a show broadcast on television or radio",
    sentence: "This cooking {{BLANK}} teaches viewers how to make simple dishes at home.",
    cn: "這個烹飪節目教觀眾如何在家做簡單的菜。" },
  { word: "camera", pos: "n.", cn_def: "相機", en_def: "a device used to take photos or record video",
    sentence: "My uncle brought his new {{BLANK}} to take pictures at the family reunion.",
    cn: "我叔叔帶了他的新相機去家庭聚會拍照。" },
  { word: "film", pos: "n.", cn_def: "影片", en_def: "a movie, or the material used to record images in an old-style camera",
    sentence: "The director spent two years working on this powerful {{BLANK}} about ocean life.",
    cn: "這位導演花了兩年時間製作這部關於海洋生物的精彩影片。" },
  { word: "tape", pos: "n.", cn_def: "錄音帶；錄影帶", en_def: "a strip of plastic used to record sound or video",
    sentence: "My mother still keeps an old {{BLANK}} of our family's first trip to the beach.",
    cn: "我媽媽還保留著一捲我們家第一次去海邊旅行的舊錄影帶。" },
  { word: "photo", pos: "n.", cn_def: "相片", en_def: "a picture taken with a camera",
    sentence: "She printed a {{BLANK}} of her dog and put it on the refrigerator.",
    cn: "她把一張她的狗的相片印出來，貼在冰箱上。" },
  { word: "picture", pos: "n.", cn_def: "圖片", en_def: "an image, drawing, or photo of something",
    sentence: "He drew a {{BLANK}} of his house for the art class assignment.",
    cn: "他為美術課的作業畫了一張他家的圖片。" },
  { word: "video", pos: "n.", cn_def: "影片", en_def: "a recording of moving images, often watched on a screen",
    sentence: "My sister uploaded a short {{BLANK}} of her new puppy playing in the yard.",
    cn: "我姐姐上傳了一段她的新小狗在院子裡玩耍的短影片。" },
  { word: "scene", pos: "n.", cn_def: "場景", en_def: "a part of a movie or play that happens in one place or time",
    sentence: "Everyone in the theater gasped during the most exciting {{BLANK}} of the film.",
    cn: "電影最精彩的場景出現時，劇院裡的每個人都驚呼了起來。" },
  { word: "live", pos: "adj.", cn_def: "現場的", en_def: "happening and being shown at the same time it occurs",
    sentence: "We watched the singer's {{BLANK}} performance on a huge outdoor stage downtown.",
    cn: "我們在市中心的一個巨大戶外舞台上觀看了那位歌手的現場表演。" },
  { word: "record", pos: "v.", cn_def: "錄音；錄影", en_def: "to save sound or video so it can be played later",
    sentence: "My brother used his phone to {{BLANK}} the entire school concert for our parents.",
    cn: "我哥哥用他的手機錄下了整場學校音樂會，給我們的父母看。" },
  { word: "ago", pos: "adv.", cn_def: "以前", en_def: "in the past, counted back from now",
    sentence: "My grandparents moved to this small town more than forty years {{BLANK}}.",
    cn: "我祖父母在四十多年前搬到了這個小鎮。" },
  { word: "ever", pos: "adv.", cn_def: "曾經", en_def: "at any time",
    sentence: "Have you {{BLANK}} tried durian, the famous fruit with a very strong smell?",
    cn: "你曾經試過榴槤這種有著強烈氣味的著名水果嗎？" },
  { word: "now", pos: "adv.", cn_def: "現在", en_def: "at the present moment",
    sentence: "Right {{BLANK}}, my brother is finishing his homework before dinner.",
    cn: "現在，我哥哥正在完成他的作業準備吃晚餐。" },
  { word: "ancient", pos: "adj.", cn_def: "古代的", en_def: "belonging to a time very long ago",
    sentence: "We visited an {{BLANK}} temple that was built more than a thousand years ago.",
    cn: "我們參觀了一座一千多年前建造的古代寺廟。" },
  { word: "current", pos: "adj.", cn_def: "現行的", en_def: "happening or existing right now",
    sentence: "Our teacher asked us to write a short report about a {{BLANK}} news event.",
    cn: "老師要我們寫一篇關於現行新聞事件的短報告。" },
  { word: "modern", pos: "adj.", cn_def: "現代的", en_def: "relating to the present time, not the past",
    sentence: "The new art museum downtown displays only {{BLANK}} paintings and sculptures.",
    cn: "市中心新開的美術館只展出現代的繪畫和雕塑作品。" },
  { word: "traditional", pos: "adj.", cn_def: "傳統的", en_def: "following customs that have existed for a long time",
    sentence: "For the festival, my grandmother always cooks several {{BLANK}} dishes from her hometown.",
    cn: "每逢節日，我奶奶總是會做幾道她家鄉的傳統菜。" },
  { word: "present", pos: "adj.", cn_def: "現在的", en_def: "existing or happening now",
    sentence: "Compared to the {{BLANK}} situation, prices were much lower ten years ago.",
    cn: "與現在的情況相比，十年前的物價便宜許多。" },
  { word: "past", pos: "adj.", cn_def: "過去的", en_def: "having happened before now",
    sentence: "In {{BLANK}} years, this quiet street used to be full of small shops.",
    cn: "在過去的幾年裡，這條安靜的街道曾經滿是小商店。" },
  { word: "century", pos: "n.", cn_def: "世紀", en_def: "a period of one hundred years",
    sentence: "This old bridge was first built in the early twentieth {{BLANK}}.",
    cn: "這座老橋最初建於二十世紀初。" },
  { word: "period", pos: "n.", cn_def: "時期", en_def: "a length of time with a particular start and end",
    sentence: "During the rainy {{BLANK}}, the river near our village often rises quickly.",
    cn: "在雨季期間，我們村莊附近的河流經常會迅速上漲。" },
  { word: "childhood", pos: "n.", cn_def: "童年", en_def: "the time of a person's life when they are a child",
    sentence: "My father often tells stories about his {{BLANK}} growing up on a small farm.",
    cn: "我爸爸經常講述他在一個小農場長大的童年故事。" },
  { word: "youth", pos: "n.", cn_def: "青年時期", en_def: "the period of a person's life when they are young",
    sentence: "During her {{BLANK}}, my grandmother traveled to many countries before settling down.",
    cn: "我奶奶在青年時期去過許多國家旅行，後來才定居下來。" }
];

// ---- Part 2 data: 31 MCQs ----
// CEFR A2 / 國中會考 level: exactly 2 sentences, ~18-30 words total,
// rich concrete context clue, one blank, simple surrounding vocabulary.
// Answer letters balanced across A/B/C/D (8/8/8/7), no adjacent repeats.
// vocabIndex points to the exact VOCAB array entry being tested.
const MCQS = [
  { q: "Right before the next scene began, a long message tried to sell us a new phone. That ______ lasted almost two full minutes.",
    options: ["channel","program","advertisement","news"], answer: 2, vocabIndex: 0 },
  { q: "Tonight at exactly eight o'clock, viewers everywhere will be able to watch the basketball final as it happens. The station plans to ______ it live.",
    options: ["record","film","advertise","broadcast"], answer: 3, vocabIndex: 1 },
  { q: "After a powerful storm knocked down a large tree in our yard, our television suddenly stopped working completely. The fallen tree had damaged the ______.",
    options: ["channel","camera","cable","screen"], answer: 2, vocabIndex: 2 },
  { q: "Every single Saturday morning before breakfast, my little cousin sits in front of the television. She always watches the exact same colorful ______.",
    options: ["news","cartoon","drama","advertisement"], answer: 1, vocabIndex: 3 },
  { q: "Each evening, my mother sits down with a cup of tea and turns on the television. She never misses a single episode of her favorite ______.",
    options: ["cartoon","news","movie","drama"], answer: 3, vocabIndex: 4 },
  { q: "Every night before going to sleep, my grandfather sits quietly in his chair watching television. He always checks the evening ______ first.",
    options: ["program","news","drama","channel"], answer: 1, vocabIndex: 5 },
  { q: "Outside the theater, a long line of excited fans stretched around the corner waiting for tickets. They were all there for the new superhero ______.",
    options: ["movie","program","drama","video"], answer: 0, vocabIndex: 6 },
  { q: "The moment my father walks through the front door after work, he reaches straight for the remote control. He always switches to the sports ______.",
    options: ["program","channel","scene","film"], answer: 1, vocabIndex: 7 },
  { q: "Every Sunday afternoon, viewers at home learn simple recipes step by step from a friendly host on television. This cooking ______ is very popular.",
    options: ["program","channel","scene","video"], answer: 0, vocabIndex: 8 },
  { q: "At the big family reunion last weekend, my uncle proudly showed off something he had just bought. He used his brand-new ______ to take pictures.",
    options: ["phone","camera","tape","screen"], answer: 1, vocabIndex: 9 },
  { q: "For nearly two whole years, a talented director worked carefully on a project about life beneath the ocean. The finished ______ amazed audiences everywhere.",
    options: ["program","drama","film","channel"], answer: 2, vocabIndex: 10 },
  { q: "In an old box in the closet, my mother still keeps something from our family's very first beach trip together. That old ______ is precious to her.",
    options: ["photo","picture","film","tape"], answer: 3, vocabIndex: 11 },
  { q: "After taking a cute picture of her dog with her phone, she decided to make it more permanent. She printed a ______ and stuck it on the fridge.",
    options: ["photo","video","scene","tape"], answer: 0, vocabIndex: 12 },
  { q: "For his weekend art homework, he sat at his desk with colored pencils and carefully sketched something familiar. He drew a ______ of his own house.",
    options: ["photo","film","picture","tape"], answer: 2, vocabIndex: 13 },
  { q: "Excited about her new puppy, my sister grabbed her phone and recorded it running happily around the backyard. She later shared that short ______ online.",
    options: ["picture","video","photo","scene"], answer: 1, vocabIndex: 14 },
  { q: "During the most thrilling part of the movie, the entire audience suddenly gasped together in surprise. That unforgettable ______ left everyone speechless for a moment.",
    options: ["scene","channel","program","video"], answer: 0, vocabIndex: 15 },
  { q: "On a huge outdoor stage in the middle of downtown, thousands of fans gathered to watch their favorite singer perform in person. The amazing ______ show went on for hours.",
    options: ["recorded","filmed","live","taped"], answer: 2, vocabIndex: 16 },
  { q: "Wanting to share the school concert with his parents who could not attend, my brother pulled out his phone. He decided to ______ the entire performance.",
    options: ["broadcast","record","advertise","interrupt"], answer: 1, vocabIndex: 17 },
  { q: "More than forty years before today, a young couple packed everything they owned into one small car. They moved to this quiet town long ______.",
    options: ["ever","now","past","ago"], answer: 3, vocabIndex: 18 },
  { q: "At dinner one evening, my friend asked me a curious question about unusual fruit from Southeast Asia. Had I ______ tried durian, the famously smelly fruit?",
    options: ["now","ever","ago","past"], answer: 1, vocabIndex: 19 },
  { q: "Looking up from his homework for just a moment, my brother glanced at the clock on the wall. Right ______, he still had two pages left to finish.",
    options: ["now","ago","ever","past"], answer: 0, vocabIndex: 20 },
  { q: "On our trip through the countryside, we stopped to explore a stone temple that had stood for over a thousand years. That ______ building amazed everyone in our group.",
    options: ["modern","ancient","current","present"], answer: 1, vocabIndex: 21 },
  { q: "For homework this week, our teacher wants every student to choose a topic happening in the world right now. We must write about a ______ news event.",
    options: ["past","ancient","current","traditional"], answer: 2, vocabIndex: 22 },
  { q: "The brand-new art museum that just opened downtown looks nothing like the old buildings nearby. Inside, it displays only paintings and sculptures from today's ______ artists.",
    options: ["ancient","past","traditional","modern"], answer: 3, vocabIndex: 23 },
  { q: "Every year during the spring festival, my grandmother spends the whole morning cooking dishes passed down through her family. These ______ recipes never change.",
    options: ["traditional","modern","current","present"], answer: 0, vocabIndex: 24 },
  { q: "Comparing prices from ten years ago to today, my father often points out how much things have changed. Compared to the ______ situation, life was once much cheaper.",
    options: ["past","ancient","traditional","present"], answer: 3, vocabIndex: 25 },
  { q: "Looking through old photographs of our neighborhood, my grandmother pointed out streets that looked completely different long ago. In ______ years, this area was full of small family shops.",
    options: ["present","current","past","modern"], answer: 2, vocabIndex: 26 },
  { q: "While studying the history of this old stone bridge in town, our class learned an interesting fact about when construction first began. It started early in the twentieth ______.",
    options: ["century","period","youth","childhood"], answer: 0, vocabIndex: 27 },
  { q: "Every year when the rainy season arrives, our small village faces a familiar challenge near the river. During this wet ______, the water level rises very quickly.",
    options: ["century","youth","period","childhood"], answer: 2, vocabIndex: 28 },
  { q: "Whenever my father feels nostalgic, he loves telling long stories about growing up on a small countryside farm. He talks fondly about his ______ surrounded by animals and fields.",
    options: ["childhood","youth","period","century"], answer: 0, vocabIndex: 29 },
  { q: "Long before she settled into her quiet life here, my grandmother traveled across many different countries when she was much younger. She explored the world during her ______.",
    options: ["childhood","century","period","youth"], answer: 3, vocabIndex: 30 },
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
  "advertise": { pos: "v.", en_def: "to publicly promote a product or service", cn_def: "宣傳；廣告" },
  "assignment": { pos: "n.", en_def: "a task or piece of work given to someone", cn_def: "作業；任務" },
  "basketball": { pos: "n.", en_def: "a sport played with a round ball and a high hoop", cn_def: "籃球" },
  "beach": { pos: "n.", en_def: "the sandy or rocky area next to the ocean", cn_def: "海灘" },
  "bridge": { pos: "n.", en_def: "a structure built over a river or road so people can cross", cn_def: "橋" },
  "built": { pos: "v.", en_def: "made or constructed something (past tense of build)", cn_def: "建造（過去式）" },
  "compared": { pos: "v.", en_def: "looked at the differences and similarities between things", cn_def: "比較（過去式）" },
  "concert": { pos: "n.", en_def: "a public music performance", cn_def: "演唱會；音樂會" },
  "connected": { pos: "adj.", en_def: "joined or linked to something", cn_def: "連接的" },
  "cooking": { pos: "n.", en_def: "the activity of preparing food", cn_def: "烹飪" },
  "countries": { pos: "n.", en_def: "nations; areas of land with their own government", cn_def: "國家（複數）" },
  "cousin": { pos: "n.", en_def: "the child of your aunt or uncle", cn_def: "表/堂兄弟姊妹" },
  "damaged": { pos: "v.", en_def: "harmed or broke something", cn_def: "損壞（過去式）" },
  "director": { pos: "n.", en_def: "a person who controls how a film or play is made", cn_def: "導演" },
  "dishes": { pos: "n.", en_def: "particular foods prepared as part of a meal", cn_def: "菜（複數）" },
  "displays": { pos: "v.", en_def: "shows something publicly", cn_def: "展示" },
  "downtown": { pos: "n.", en_def: "the central business area of a city", cn_def: "市中心" },
  "durian": { pos: "n.", en_def: "a tropical fruit known for its strong smell", cn_def: "榴槤" },
  "episode": { pos: "n.", en_def: "one part of a TV show that is shown separately", cn_def: "（電視劇的）一集" },
  "event": { pos: "n.", en_def: "something that happens, especially something important", cn_def: "事件" },
  "exciting": { pos: "adj.", en_def: "making you feel very interested or happy", cn_def: "令人興奮的" },
  "fallen": { pos: "adj.", en_def: "having dropped down from a higher place", cn_def: "倒下的" },
  "famous": { pos: "adj.", en_def: "known by many people", cn_def: "有名的" },
  "farm": { pos: "n.", en_def: "land used for growing crops or raising animals", cn_def: "農場" },
  "festival": { pos: "n.", en_def: "a special day or time of celebration", cn_def: "節日" },
  "filmed": { pos: "v.", en_def: "recorded something using a camera", cn_def: "拍攝（過去式）" },
  "gasped": { pos: "v.", en_def: "took a sudden sharp breath, often from surprise", cn_def: "驚呼；喘息（過去式）" },
  "grandparents": { pos: "n.", en_def: "the parents of your mother or father", cn_def: "祖父母" },
  "growing": { pos: "v.", en_def: "becoming bigger or developing over time", cn_def: "成長" },
  "hometown": { pos: "n.", en_def: "the town or city where a person was born or grew up", cn_def: "家鄉" },
  "homework": { pos: "n.", en_def: "school work done at home", cn_def: "作業" },
  "interrupt": { pos: "v.", en_def: "to stop someone while they are speaking or doing something", cn_def: "打斷" },
  "lower": { pos: "adj.", en_def: "smaller in amount, level, or position", cn_def: "較低的" },
  "museum": { pos: "n.", en_def: "a building where interesting old or rare things are shown", cn_def: "博物館" },
  "ocean": { pos: "n.", en_def: "a very large area of salt water", cn_def: "海洋" },
  "outdoor": { pos: "adj.", en_def: "happening or used outside, not indoors", cn_def: "戶外的" },
  "paintings": { pos: "n.", en_def: "pictures made with paint", cn_def: "畫作（複數）" },
  "performance": { pos: "n.", en_def: "an act of performing in front of an audience", cn_def: "表演" },
  "phone": { pos: "n.", en_def: "a device used to talk to people far away", cn_def: "電話" },
  "powerful": { pos: "adj.", en_def: "having great strength or effect", cn_def: "強大的；強烈的" },
  "printed": { pos: "v.", en_def: "produced text or images on paper using a machine", cn_def: "印出（過去式）" },
  "puppy": { pos: "n.", en_def: "a baby dog", cn_def: "小狗" },
  "quiet": { pos: "adj.", en_def: "making little or no noise", cn_def: "安靜的" },
  "rainy": { pos: "adj.", en_def: "having a lot of rain", cn_def: "多雨的" },
  "refrigerator": { pos: "n.", en_def: "a machine that keeps food cold", cn_def: "冰箱" },
  "report": { pos: "n.", en_def: "a written or spoken account of facts or events", cn_def: "報告" },
  "reunion": { pos: "n.", en_def: "a gathering of people who have not seen each other for a while", cn_def: "團聚；聚會" },
  "rises": { pos: "v.", en_def: "goes up", cn_def: "上升" },
  "screen": { pos: "n.", en_def: "the flat surface on a device where images and text appear", cn_def: "螢幕" },
  "sculptures": { pos: "n.", en_def: "works of art made by carving or shaping material", cn_def: "雕塑（複數）" },
  "settling": { pos: "v.", en_def: "moving to a place to live for a long time", cn_def: "定居" },
  "situation": { pos: "n.", en_def: "the set of circumstances at a particular time", cn_def: "情況" },
  "stage": { pos: "n.", en_def: "a raised platform where performances happen", cn_def: "舞台" },
  "station": { pos: "n.", en_def: "a company that broadcasts TV or radio programs, or a place where trains stop", cn_def: "電台；車站" },
  "storm": { pos: "n.", en_def: "very bad weather with strong wind and rain", cn_def: "風暴" },
  "superhero": { pos: "n.", en_def: "a fictional character with special powers who fights evil", cn_def: "超級英雄" },
  "switches": { pos: "v.", en_def: "changes from one thing to another", cn_def: "切換" },
  "taped": { pos: "v.", en_def: "recorded something using a tape recorder", cn_def: "錄製（過去式）" },
  "teaches": { pos: "v.", en_def: "helps someone learn something", cn_def: "教導" },
  "television": { pos: "n.", en_def: "a device used to watch shows and news", cn_def: "電視" },
  "temple": { pos: "n.", en_def: "a building used for worship", cn_def: "寺廟" },
  "theater": { pos: "n.", en_def: "a building where movies or plays are shown", cn_def: "劇院；電影院" },
  "traveled": { pos: "v.", en_def: "went from one place to another", cn_def: "旅行；前往（過去式）" },
  "twentieth": { pos: "adj.", en_def: "coming after the nineteenth; number 20 in order", cn_def: "第二十的" },
  "uploaded": { pos: "v.", en_def: "sent data, like a video, to the Internet", cn_def: "上傳（過去式）" },
  "viewers": { pos: "n.", en_def: "people who watch something, like television", cn_def: "觀眾（複數）" },
  "village": { pos: "n.", en_def: "a small group of houses, smaller than a town", cn_def: "村莊" }
};
Object.keys(EXTRA_GLOSSES).forEach(key => {
  const g = EXTRA_GLOSSES[key];
  if (!LOOKUP[key]) {
    LOOKUP[key] = { pos: g.pos, en_def: g.en_def, cn_def: g.cn_def, combined: [g] };
  }
});

// ---- Plural / variant aliases so MCQ option lookups resolve correctly ----
const PLURAL_ALIASES = {
  "recorded": "record", "channels": "channel", "programs": "program",
  "movies": "movie", "photos": "photo", "pictures": "picture", "videos": "video",
  "scenes": "scene", "tapes": "tape", "cameras": "camera", "films": "film"
};
Object.keys(PLURAL_ALIASES).forEach(plural => {
  const singular = PLURAL_ALIASES[plural];
  if (!LOOKUP[plural] && LOOKUP[singular]) {
    LOOKUP[plural] = LOOKUP[singular];
  }
});
