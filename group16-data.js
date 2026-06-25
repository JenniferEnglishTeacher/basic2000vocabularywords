// ============================================================
// Group 16 Quiz Data: Difficulty / Quality / Judgment
// Full word set (16 words) — adjectives describing difficulty,
// truth, correctness, and quality from the "describing words"
// theme. Continues from Group 15 (Personality Traits/Emotions).
// Size/state/safety and general adjectives will follow as
// later groups.
// ============================================================

const QUIZ_CONFIG = {
  groupName: "Group 16 - Difficulty / Quality / Judgment (難易/真假/品質)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

// ---- Part 1 data: spelling practice (16 words) ----
const VOCAB = [
  { word: "difficult", pos: "adj.", cn_def: "困難的", en_def: "not easy to do or understand",
    sentence: "The final question on the math exam was so {{BLANK}} that nobody finished it.",
    cn: "數學考試的最後一題太難了，沒有人能做完。" },
  { word: "hard", pos: "adj.", cn_def: "困難的", en_def: "not easy; requiring a lot of effort",
    sentence: "Learning to play the violin is {{BLANK}} at first, but it gets easier with practice.",
    cn: "一開始學小提琴很困難，但練習久了就會變容易。" },
  { word: "easy", pos: "adj.", cn_def: "容易的", en_def: "not difficult; simple to do",
    sentence: "Once you understand the rule, this grammar pattern is actually quite {{BLANK}}.",
    cn: "一旦你理解了規則，這個文法句型其實相當容易。" },
  { word: "simple", pos: "adj.", cn_def: "簡單的", en_def: "easy to understand or do; not complicated",
    sentence: "The teacher explained the new idea using a {{BLANK}} example everyone could follow.",
    cn: "老師用一個簡單的例子解釋新概念，讓大家都能理解。" },
  { word: "real", pos: "adj.", cn_def: "真正的", en_def: "actually existing, not imagined or fake",
    sentence: "At first I thought the spider on the wall was a toy, but it was {{BLANK}}.",
    cn: "我一開始以為牆上的蜘蛛是玩具，但它是真的。" },
  { word: "true", pos: "adj.", cn_def: "真的", en_def: "in agreement with fact; not false",
    sentence: "It is {{BLANK}} that drinking enough water every day is good for your health.",
    cn: "每天喝足夠的水對健康有益，這是真的。" },
  { word: "false", pos: "adj.", cn_def: "假的", en_def: "not true or correct",
    sentence: "She quickly realized that the rumor about the school closing was completely {{BLANK}}.",
    cn: "她很快就意識到關於學校要關閉的謠言完全是假的。" },
  { word: "correct", pos: "adj.", cn_def: "正確的", en_def: "free from mistakes; accurate",
    sentence: "Out of twenty questions, she got nineteen {{BLANK}} answers on the quiz.",
    cn: "在二十題中，她在這次測驗裡答對了十九題。" },
  { word: "fantastic", pos: "adj.", cn_def: "極好的", en_def: "extremely good; wonderful",
    sentence: "The fireworks show on New Year's Eve looked absolutely {{BLANK}} from the rooftop.",
    cn: "在屋頂上看的新年煙火表演看起來棒極了。" },
  { word: "fine", pos: "adj.", cn_def: "美好的", en_def: "good; satisfactory or pleasant",
    sentence: "After resting for a few days, my grandmother said she felt {{BLANK}} again.",
    cn: "休息了幾天後，我奶奶說她又感覺好多了。" },
  { word: "great", pos: "adj.", cn_def: "很棒的", en_def: "very good; impressive or important",
    sentence: "We had a {{BLANK}} time at the amusement park, riding every roller coaster twice.",
    cn: "我們在遊樂園玩得很愉快，每個雲霄飛車都坐了兩次。" },
  { word: "nice", pos: "adj.", cn_def: "不錯的", en_def: "pleasant or agreeable",
    sentence: "It was {{BLANK}} of the neighbors to bring soup when our family was sick.",
    cn: "我們家人生病時，鄰居送湯來，這真是貼心。" },
  { word: "perfect", pos: "adj.", cn_def: "完美的", en_def: "complete and without any mistakes or flaws",
    sentence: "She practiced the piano piece for months until it sounded almost {{BLANK}}.",
    cn: "她練習這首鋼琴曲好幾個月，直到聽起來幾乎完美。" },
  { word: "wonderful", pos: "adj.", cn_def: "極好的", en_def: "extremely pleasing or impressive",
    sentence: "The view from the top of the mountain was simply {{BLANK}}.",
    cn: "從山頂上看到的風景簡直太美好了。" },
  { word: "terrific", pos: "adj.", cn_def: "非常好的", en_def: "extremely good or enjoyable",
    sentence: "Everyone said the school's spring concert was absolutely {{BLANK}} this year.",
    cn: "大家都說學校今年的春季音樂會非常精彩。" },
  { word: "terrible", pos: "adj.", cn_def: "糟糕的", en_def: "very bad or unpleasant",
    sentence: "We had {{BLANK}} weather during our camping trip, with rain every single day.",
    cn: "我們露營旅行時天氣很糟糕，每天都下雨。" }
];

// ---- Part 2 data: 16 MCQs ----
// CEFR A2 / 國中會考 level: exactly 2 sentences, ~18-30 words total,
// rich concrete context clue, one blank, simple surrounding vocabulary.
// Answer letters balanced across A/B/C/D (4 each), no adjacent repeats.
// vocabIndex points to the exact VOCAB array entry being tested.
const MCQS = [
  { q: "On the math exam, the final question was so confusing that nobody in the class finished it. Everyone agreed it was incredibly ______.",
    options: ["difficult","easy","simple","correct"], answer: 0, vocabIndex: 0 },
  { q: "When she first picked up the violin, every note sounded wrong and her fingers felt clumsy. Learning a new instrument always feels ______ at first.",
    options: ["easy","simple","hard","fine"], answer: 2, vocabIndex: 1 },
  { q: "After the teacher explained the grammar rule clearly with a few examples, students stopped raising their hands with confusion. Suddenly, the pattern seemed quite ______.",
    options: ["difficult","easy","terrible","hard"], answer: 1, vocabIndex: 2 },
  { q: "Instead of using complicated words, the teacher chose one short, clear example that everyone in the room could follow. Her explanation was wonderfully ______.",
    options: ["difficult","false","simple","terrible"], answer: 2, vocabIndex: 3 },
  { q: "At first glance, the spider sitting on the kitchen wall looked exactly like a rubber toy from a costume shop. To everyone's surprise, it was completely ______.",
    options: ["false","fine","perfect","real"], answer: 3, vocabIndex: 4 },
  { q: "Doctors agree that drinking enough water throughout the day supports good health in many different ways. This simple fact has always been ______.",
    options: ["false","difficult","true","terrible"], answer: 2, vocabIndex: 5 },
  { q: "After a few days of careful checking, the principal confirmed that the rumor about the school closing early had no basis at all. The story turned out to be totally ______.",
    options: ["false","true","real","correct"], answer: 0, vocabIndex: 6 },
  { q: "On the spelling quiz with twenty tricky words, she carefully checked each answer before turning in her paper. In the end, nineteen of her answers were marked ______.",
    options: ["false","correct","terrible","simple"], answer: 1, vocabIndex: 7 },
  { q: "From the rooftop, colorful lights exploded across the dark sky in shapes nobody had ever seen before. The whole New Year's Eve show looked absolutely ______.",
    options: ["terrible","false","simple","fantastic"], answer: 3, vocabIndex: 8 },
  { q: "After staying in bed and resting for several days, my grandmother slowly started feeling like her old self again. She smiled and said she felt ______ now.",
    options: ["terrible","fine","false","difficult"], answer: 1, vocabIndex: 9 },
  { q: "At the amusement park, my cousins and I rode every single roller coaster twice and laughed the entire afternoon. We all agreed it was a truly ______ day.",
    options: ["terrible","false","hard","great"], answer: 3, vocabIndex: 10 },
  { q: "When our whole family caught the flu last winter, several neighbors quietly brought warm soup to our front door without being asked. That was such a ______ gesture.",
    options: ["terrible","difficult","nice","false"], answer: 2, vocabIndex: 11 },
  { q: "For several months, she practiced the same piano piece every single afternoon until every note sounded exactly right. By the recital, her performance sounded nearly ______.",
    options: ["terrible","simple","false","perfect"], answer: 3, vocabIndex: 12 },
  { q: "Standing at the top of the mountain after a long hike, hikers often stop talking and simply stare at the scenery below. The view from up there was simply ______.",
    options: ["wonderful","terrible","false","hard"], answer: 0, vocabIndex: 13 },
  { q: "This year, the school's spring concert featured surprise solos, colorful costumes, and a standing ovation at the end. Everyone walking out agreed the show had been absolutely ______.",
    options: ["terrible","terrific","false","hard"], answer: 1, vocabIndex: 14 },
  { q: "During our camping trip last month, dark clouds rolled in every single morning and rain never seemed to stop falling. The weather that whole week was simply ______.",
    options: ["terrible","wonderful","fantastic","perfect"], answer: 0, vocabIndex: 15 },
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
  "absolutely": { pos: "adv.", en_def: "completely; totally", cn_def: "完全地；絕對地" },
  "actually": { pos: "adv.", en_def: "in fact; really", cn_def: "實際上" },
  "amusement": { pos: "n.", en_def: "enjoyment or fun, as in an amusement park", cn_def: "娛樂" },
  "camping": { pos: "n.", en_def: "the activity of sleeping and living outdoors, often in a tent", cn_def: "露營" },
  "coaster": { pos: "n.", en_def: "short for roller coaster, a fast amusement park ride", cn_def: "雲霄飛車" },
  "concert": { pos: "n.", en_def: "a public music performance", cn_def: "演唱會；音樂會" },
  "eve": { pos: "n.", en_def: "the evening or day before a special event, as in New Year's Eve", cn_def: "前夕" },
  "exam": { pos: "n.", en_def: "a formal test of knowledge or skill", cn_def: "考試" },
  "example": { pos: "n.", en_def: "something used to show or explain an idea", cn_def: "例子" },
  "explained": { pos: "v.", en_def: "made something clear or easy to understand", cn_def: "解釋（過去式）" },
  "fireworks": { pos: "n.", en_def: "explosive devices that create bright lights and sounds in the sky", cn_def: "煙火" },
  "grammar": { pos: "n.", en_def: "the rules for how words are used in a language", cn_def: "文法" },
  "health": { pos: "n.", en_def: "the condition of a person's body or mind", cn_def: "健康" },
  "idea": { pos: "n.", en_def: "a thought or plan", cn_def: "想法" },
  "mountain": { pos: "n.", en_def: "a very high area of land", cn_def: "山" },
  "neighbors": { pos: "n.", en_def: "people who live near you", cn_def: "鄰居（複數）" },
  "park": { pos: "n.", en_def: "a public area with grass and trees for people to enjoy", cn_def: "公園" },
  "pattern": { pos: "n.", en_def: "a regular or repeated way something is done", cn_def: "模式" },
  "piano": { pos: "n.", en_def: "a large musical instrument with black and white keys", cn_def: "鋼琴" },
  "piece": { pos: "n.", en_def: "a single musical or written work", cn_def: "作品；曲子" },
  "practiced": { pos: "v.", en_def: "did something repeatedly to improve a skill", cn_def: "練習（過去式）" },
  "realized": { pos: "v.", en_def: "became aware of or understood something", cn_def: "意識到（過去式）" },
  "resting": { pos: "v.", en_def: "relaxing or sleeping to recover energy", cn_def: "休息" },
  "rooftop": { pos: "n.", en_def: "the top surface of a building", cn_def: "屋頂" },
  "rule": { pos: "n.", en_def: "a statement that tells you what is allowed or how something works", cn_def: "規則" },
  "rumor": { pos: "n.", en_def: "information passed from person to person that may not be true", cn_def: "謠言" },
  "spider": { pos: "n.", en_def: "a small creature with eight legs that makes webs", cn_def: "蜘蛛" },
  "violin": { pos: "n.", en_def: "a small wooden musical instrument played with a bow", cn_def: "小提琴" }
};
Object.keys(EXTRA_GLOSSES).forEach(key => {
  const g = EXTRA_GLOSSES[key];
  if (!LOOKUP[key]) {
    LOOKUP[key] = { pos: g.pos, en_def: g.en_def, cn_def: g.cn_def, combined: [g] };
  }
});
