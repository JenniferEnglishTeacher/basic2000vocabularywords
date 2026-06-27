// ============================================================
// Group 45 Quiz Data: Time / Numbers / Measures, Part 2
// Full word set (31 words) — numbers five through ninety, basic
// math operations, ordinal numbers, and "angle" from the "time
// / numbers / measures" theme. Continues from Group 44 (Time &
// Numbers, Part 1). This is the second of 4 groups (44-47)
// covering this theme at ~31 words per group.
// Continues the simpler/shorter MCQ style introduced in
// Group 37 (~16-26 words, 2 sentences, one blank).
// ============================================================

const QUIZ_CONFIG = {
  groupName: "Group 45 - Time / Numbers, Part 2 (時間與數字 二)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

// ---- Part 1 data: spelling practice (31 words) ----
const VOCAB = [
  { word: "five", pos: "n.", cn_def: "五（5）", en_def: "the number 5",
    sentence: "She practices the piano for {{BLANK}} hours every week.",
    cn: "她每週練習彈鋼琴五個小時。" },
  { word: "six", pos: "n.", cn_def: "六（6）", en_def: "the number 6",
    sentence: "The bakery sells a box of {{BLANK}} fresh donuts each morning.",
    cn: "這家麵包店每天早上賣一盒六個的新鮮甜甜圈。" },
  { word: "seven", pos: "n.", cn_def: "七（7）", en_def: "the number 7",
    sentence: "There are {{BLANK}} days in a single week.",
    cn: "一個星期裡有七天。" },
  { word: "eight", pos: "n.", cn_def: "八（8）", en_def: "the number 8",
    sentence: "He set his alarm for {{BLANK}} o'clock every school morning.",
    cn: "他每個上學日早上都把鬧鐘設在八點。" },
  { word: "nine", pos: "n.", cn_def: "九（9）", en_def: "the number 9",
    sentence: "Our team scored {{BLANK}} points in the final round.",
    cn: "我們隊在最後一輪得了九分。" },
  { word: "ten", pos: "n.", cn_def: "十（10）", en_def: "the number 10",
    sentence: "She counted {{BLANK}} coins hidden inside the old jar.",
    cn: "她數出舊罐子裡藏著十枚硬幣。" },
  { word: "eleven", pos: "n.", cn_def: "十一（11）", en_def: "the number 11",
    sentence: "A soccer team needs exactly {{BLANK}} players on the field.",
    cn: "一支足球隊在場上正好需要十一名球員。" },
  { word: "twelve", pos: "n.", cn_def: "十二（12）", en_def: "the number 12",
    sentence: "There are {{BLANK}} months in every calendar year.",
    cn: "每個日曆年都有十二個月。" },
  { word: "thirteen", pos: "n.", cn_def: "十三（13）", en_def: "the number 13",
    sentence: "She turned {{BLANK}} years old at her birthday party last week.",
    cn: "她上週的生日派對滿十三歲。" },
  { word: "fourteen", pos: "n.", cn_def: "十四（14）", en_def: "the number 14",
    sentence: "The recipe says to bake the cookies for {{BLANK}} minutes.",
    cn: "食譜上說要把餅乾烤十四分鐘。" },
  { word: "fifteen", pos: "n.", cn_def: "十五（15）", en_def: "the number 15",
    sentence: "It only took us {{BLANK}} minutes to walk to the station.",
    cn: "我們只花了十五分鐘就走到車站。" },
  { word: "sixteen", pos: "n.", cn_def: "十六(16)", en_def: "the number 16",
    sentence: "He will be old enough to get his license at {{BLANK}}.",
    cn: "他到十六歲就有資格考駕照了。" },
  { word: "seventeen", pos: "n.", cn_def: "十七(17)", en_def: "the number 17",
    sentence: "She just turned {{BLANK}} and started her junior year.",
    cn: "她剛滿十七歲，開始升上高二。" },
  { word: "eighteen", pos: "n.", cn_def: "十八(18)", en_def: "the number 18",
    sentence: "Most students graduate from high school around the age of {{BLANK}}.",
    cn: "大多數學生在十八歲左右從高中畢業。" },
  { word: "nineteen", pos: "n.", cn_def: "十九(19)", en_def: "the number 19",
    sentence: "He scored {{BLANK}} points in last night's basketball game.",
    cn: "他昨晚的籃球比賽得了十九分。" },
  { word: "twenty", pos: "n.", cn_def: "二十(20)", en_def: "the number 20",
    sentence: "Our class has exactly {{BLANK}} students this semester.",
    cn: "我們班這學期正好有二十個學生。" },
  { word: "thirty", pos: "n.", cn_def: "三十(30)", en_def: "the number 30",
    sentence: "The bus ride to the museum took about {{BLANK}} minutes.",
    cn: "搭公車到博物館大約花了三十分鐘。" },
  { word: "forty", pos: "n.", cn_def: "四十(40)", en_def: "the number 40",
    sentence: "Grandma has been baking bread for over {{BLANK}} years.",
    cn: "奶奶已經烤麵包超過四十年了。" },
  { word: "fifty", pos: "n.", cn_def: "五十(50)", en_def: "the number 50",
    sentence: "He saved {{BLANK}} dollars from his allowance this month.",
    cn: "他這個月從零用錢裡存了五十元。" },
  { word: "sixty", pos: "n.", cn_def: "六十(60)", en_def: "the number 60",
    sentence: "There are {{BLANK}} seconds in exactly one minute.",
    cn: "一分鐘正好有六十秒。" },
  { word: "seventy", pos: "n.", cn_def: "七十(70)", en_def: "the number 70",
    sentence: "Grandpa just celebrated his {{BLANK}}th birthday with the whole family.",
    cn: "爺爺剛和全家人一起慶祝了他的七十歲生日。" },
  { word: "eighty", pos: "n.", cn_def: "八十(80)", en_def: "the number 80",
    sentence: "The old bridge has stood for more than {{BLANK}} years.",
    cn: "這座老橋已經屹立超過八十年了。" },
  { word: "ninety", pos: "n.", cn_def: "九十(90)", en_def: "the number 90",
    sentence: "She scored {{BLANK}} percent on her final science exam.",
    cn: "她在期末科學考試中得到九十分。" },
  { word: "count", pos: "v.", cn_def: "計算", en_def: "to find the total number of something",
    sentence: "The teacher asked the students to {{BLANK}} all the chairs in the room.",
    cn: "老師要學生計算房間裡所有的椅子數量。" },
  { word: "divide", pos: "v.", cn_def: "分配", en_def: "to separate something into smaller parts",
    sentence: "She decided to {{BLANK}} the pizza evenly among her four friends.",
    cn: "她決定把披薩平均分配給她的四個朋友。" },
  { word: "minus", pos: "prep.", cn_def: "減（去）", en_def: "used to show subtraction between numbers",
    sentence: "Ten {{BLANK}} four equals six, the teacher explained.",
    cn: "老師解釋說十減四等於六。" },
  { word: "plus", pos: "prep.", cn_def: "加(數學)", en_def: "used to show addition between numbers",
    sentence: "Two {{BLANK}} three equals five, the young boy answered proudly.",
    cn: "小男孩驕傲地回答二加三等於五。" },
  { word: "first", pos: "adj.", cn_def: "第一的", en_def: "coming before all others in order",
    sentence: "She was so nervous on her {{BLANK}} day at the new school.",
    cn: "她在新學校的第一天非常緊張。" },
  { word: "second", pos: "adj.", cn_def: "第二的", en_def: "coming right after the first",
    sentence: "He finished in {{BLANK}} place during the school running race.",
    cn: "他在學校的賽跑比賽中得到第二名。" },
  { word: "third", pos: "adj.", cn_def: "第三的", en_def: "coming right after the second",
    sentence: "This is already her {{BLANK}} attempt to pass the driving test.",
    cn: "這已經是她第三次嘗試通過駕照考試了。" },
  { word: "angle", pos: "n.", cn_def: "角度", en_def: "the space between two lines that meet at a point",
    sentence: "He measured the {{BLANK}} of the roof with a special tool.",
    cn: "他用一個特殊工具測量了屋頂的角度。" }
];

// ---- Part 2 data: 31 MCQs ----
// Continuing the simpler/shorter MCQ style from Group 37:
// ~16-26 words, exactly 2 sentences, one blank, 4 options.
// Answer letters balanced across A/B/C/D, no adjacent repeats.
// vocabIndex points to the exact VOCAB array entry being tested.
const MCQS = [
  { q: "She has been practicing for her upcoming recital every week. She practices the piano for ______ hours every week.",
    options: ["five", "four", "six", "seven"], answer: 0, vocabIndex: 0 },
  { q: "Customers love stopping by early for something sweet. The bakery sells a box of ______ fresh donuts each morning.",
    options: ["five", "six", "seven", "eight"], answer: 1, vocabIndex: 1 },
  { q: "School and work follow the same simple weekly pattern. There are ______ days in a single week.",
    options: ["five", "six", "seven", "eight"], answer: 2, vocabIndex: 2 },
  { q: "He never wants to be late for his first class. He set his alarm for ______ o'clock every school morning.",
    options: ["six", "seven", "nine", "eight"], answer: 3, vocabIndex: 3 },
  { q: "The basketball game ended with a satisfying result for the home team. Our team scored ______ points in the final round.",
    options: ["nine", "seven", "eight", "ten"], answer: 0, vocabIndex: 4 },
  { q: "She found something surprising while cleaning out an old container. She counted ______ coins hidden inside the old jar.",
    options: ["eight", "ten", "nine", "eleven"], answer: 1, vocabIndex: 5 },
  { q: "Sports rules sometimes require an exact number of players. A soccer team needs exactly ______ players on the field.",
    options: ["nine", "ten", "eleven", "twelve"], answer: 2, vocabIndex: 6 },
  { q: "She was studying for her calendar quiz at school. There are ______ months in every calendar year.",
    options: ["ten", "eleven", "thirteen", "twelve"], answer: 3, vocabIndex: 7 },
  { q: "Her family threw a small celebration last weekend. She turned ______ years old at her birthday party.",
    options: ["thirteen", "eleven", "twelve", "fourteen"], answer: 0, vocabIndex: 8 },
  { q: "She followed the baking instructions very carefully this time. The recipe says to bake the cookies for ______ minutes.",
    options: ["twelve", "fourteen", "thirteen", "fifteen"], answer: 1, vocabIndex: 9 },
  { q: "The walk to catch their train wasn't too far. It only took us ______ minutes to walk to the station.",
    options: ["thirteen", "fourteen", "fifteen", "sixteen"], answer: 2, vocabIndex: 10 },
  { q: "He's been counting down the days until he can legally drive. He will be old enough to get his license at ______.",
    options: ["fourteen", "fifteen", "seventeen", "sixteen"], answer: 3, vocabIndex: 11 },
  { q: "Another school year began with a new grade level. She just turned ______ and started her junior year.",
    options: ["seventeen", "fifteen", "sixteen", "eighteen"], answer: 0, vocabIndex: 12 },
  { q: "Many students reach an important milestone around this age. Most students graduate from high school around the age of ______.",
    options: ["sixteen", "eighteen", "seventeen", "nineteen"], answer: 1, vocabIndex: 13 },
  { q: "His performance last night really impressed the whole crowd. He scored ______ points in last night's basketball game.",
    options: ["seventeen", "eighteen", "nineteen", "twenty"], answer: 2, vocabIndex: 14 },
  { q: "The classroom felt full but not overcrowded this semester. Our class has exactly ______ students this semester.",
    options: ["eighteen", "nineteen", "twenty-one", "twenty"], answer: 3, vocabIndex: 15 },
  { q: "The school field trip required some travel time on the road. The bus ride to the museum took about ______ minutes.",
    options: ["thirty", "twenty", "forty", "fifty"], answer: 0, vocabIndex: 16 },
  { q: "Her grandmother has a long history in the kitchen. Grandma has been baking bread for over ______ years.",
    options: ["thirty", "forty", "fifty", "sixty"], answer: 1, vocabIndex: 17 },
  { q: "He had been putting aside a little money from his allowance regularly. He saved ______ dollars from his allowance this month.",
    options: ["forty", "sixty", "fifty", "seventy"], answer: 2, vocabIndex: 18 },
  { q: "She learned a basic fact about how time is measured. There are ______ seconds in exactly one minute.",
    options: ["fifty", "seventy", "eighty", "sixty"], answer: 3, vocabIndex: 19 },
  { q: "It was a big milestone birthday for someone in the family. Grandpa just celebrated his ______th birthday with everyone.",
    options: ["seventy", "sixty", "eighty", "ninety"], answer: 0, vocabIndex: 20 },
  { q: "The old structure has survived many decades of weather and traffic. The old bridge has stood for more than ______ years.",
    options: ["seventy", "eighty", "ninety", "one hundred"], answer: 1, vocabIndex: 21 },
  { q: "She studied hard and felt confident walking into the test. She scored ______ percent on her final science exam.",
    options: ["seventy", "eighty", "ninety", "one hundred"], answer: 2, vocabIndex: 22 },
  { q: "Cleaning up the classroom sometimes involves a simple math task. The teacher asked students to ______ all the chairs in the room.",
    options: ["divide", "measure", "add", "count"], answer: 3, vocabIndex: 23 },
  { q: "Sharing food fairly among friends takes a little planning. She decided to ______ the pizza evenly among her four friends.",
    options: ["divide", "count", "measure", "add"], answer: 0, vocabIndex: 24 },
  { q: "The teacher explained a simple subtraction problem on the board. Ten ______ four equals six, she explained.",
    options: ["plus", "minus", "times", "divided by"], answer: 1, vocabIndex: 25 },
  { q: "The young boy proudly solved a simple addition problem. Two ______ three equals five, he answered proudly.",
    options: ["minus", "times", "plus", "divided by"], answer: 2, vocabIndex: 26 },
  { q: "Walking into an unfamiliar building made her feel a little nervous. She was so nervous on her ______ day at the new school.",
    options: ["second", "third", "last", "first"], answer: 3, vocabIndex: 27 },
  { q: "He worked hard during the race but didn't quite win. He finished in ______ place during the school running race.",
    options: ["second", "first", "third", "last"], answer: 0, vocabIndex: 28 },
  { q: "She kept trying despite earlier setbacks with her driving test. This is already her ______ attempt to pass the test.",
    options: ["first", "third", "second", "fourth"], answer: 1, vocabIndex: 29 },
  { q: "He needed an exact measurement for the construction project. He measured the ______ of the roof with a special tool.",
    options: ["size", "height", "angle", "weight"], answer: 2, vocabIndex: 30 },
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
  "add": { pos: "v.", en_def: "to put something together with something else", cn_def: "添加；加" },
  "allowance": { pos: "n.", en_def: "a regular amount of money given, often to children", cn_def: "零用錢" },
  "attempt": { pos: "n.", en_def: "an effort to do something", cn_def: "嘗試" },
  "bridge": { pos: "n.", en_def: "a structure built over a river or road so people can cross", cn_def: "橋" },
  "celebration": { pos: "n.", en_def: "an event held to celebrate something", cn_def: "慶祝活動" },
  "confident": { pos: "adj.", en_def: "feeling sure of yourself", cn_def: "有自信的" },
  "construction": { pos: "n.", en_def: "the process of building something", cn_def: "建築；施工" },
  "crowd": { pos: "n.", en_def: "a large group of people gathered together", cn_def: "人群" },
  "decades": { pos: "n.", en_def: "periods of ten years", cn_def: "十年（複數）" },
  "divided by": { pos: "prep.", en_def: "used to show division between numbers", cn_def: "除以" },
  "exam": { pos: "n.", en_def: "a test of knowledge or skill", cn_def: "考試" },
  "field trip": { pos: "n.", en_def: "a school trip to a place outside the classroom", cn_def: "校外教學" },
  "four": { pos: "n.", en_def: "the number 4", cn_def: "四（4）" },
  "fourth": { pos: "adj.", en_def: "coming right after the third", cn_def: "第四的" },
  "height": { pos: "n.", en_def: "how tall something is", cn_def: "高度" },
  "junior year": { pos: "n.", en_def: "the third year of high school or college", cn_def: "（高中或大學的）三年級" },
  "last": { pos: "adj.", en_def: "coming after all others", cn_def: "最後的" },
  "license": { pos: "n.", en_def: "an official document allowing someone to do something, such as drive", cn_def: "執照；駕照" },
  "measure": { pos: "v.", en_def: "to find the size or amount of something", cn_def: "測量" },
  "milestone": { pos: "n.", en_def: "an important event or stage in development", cn_def: "里程碑" },
  "one hundred": { pos: "n.", en_def: "the number 100", cn_def: "一百（100）" },
  "overcrowded": { pos: "adj.", en_def: "too full of people or things", cn_def: "過度擁擠的" },
  "percent": { pos: "n.", en_def: "a part of a whole expressed as a number out of 100", cn_def: "百分之…" },
  "performance": { pos: "n.", en_def: "how well someone does something", cn_def: "表現" },
  "recital": { pos: "n.", en_def: "a musical performance, often by one performer", cn_def: "獨奏會；演奏會" },
  "result": { pos: "n.", en_def: "the outcome of an action or event", cn_def: "結果" },
  "semester": { pos: "n.", en_def: "half of a school year", cn_def: "學期" },
  "setbacks": { pos: "n.", en_def: "problems that delay or prevent progress", cn_def: "挫折（複數）" },
  "size": { pos: "n.", en_def: "how big or small something is", cn_def: "尺寸" },
  "times": { pos: "prep.", en_def: "used to show multiplication between numbers", cn_def: "乘" },
  "twenty-one": { pos: "n.", en_def: "the number 21", cn_def: "二十一（21）" },
  "weight": { pos: "n.", en_def: "how heavy something is", cn_def: "重量" },
};
Object.keys(EXTRA_GLOSSES).forEach(key => {
  const g = EXTRA_GLOSSES[key];
  if (!LOOKUP[key]) {
    LOOKUP[key] = { pos: g.pos, en_def: g.en_def, cn_def: g.cn_def, combined: [g] };
  }
});
