// ============================================================
// Group 48 Quiz Data: Function Words / Common Nouns, Part 1
// Full word set (30 words) — question words, personal pronouns,
// reflexive pronouns, possessive adjectives, and modal
// auxiliary verbs from the new "function words / common nouns"
// theme (269 words total). This is the first of ~9 groups
// (48-56) covering this theme at ~30 words per group.
// Continues the simpler/shorter MCQ style introduced in
// Group 37 (~16-26 words, 2 sentences, one blank).
// Note: several spreadsheet dictionary definitions in this
// slice are wrong-sense homonym mismatches caused by automated
// lookup (e.g. "who" defined as the World Health Organization,
// "he" defined as the element helium, "it"/"its" defined as
// Information Technology, "do" defined as a party, "may"
// defined as the month). All corrected here using the Chinese
// glosses as ground truth, consistent with prior corrections.
// Because this group tests grammar function words rather than
// concrete-meaning vocabulary, Part 2 MCQs focus on correct
// grammatical usage in context rather than dictionary meaning.
// ============================================================

const QUIZ_CONFIG = {
  groupName: "Group 48 - Function Words, Part 1 (功能詞 一)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};

// ---- Part 1 data: spelling practice (30 words) ----
const VOCAB = [
  { word: "what", pos: "interrog.", cn_def: "什麼", en_def: "used to ask for information about something",
    sentence: "{{BLANK}} is your favorite subject at school this year?",
    cn: "你今年在學校最喜歡的科目是什麼？" },
  { word: "when", pos: "interrog.", cn_def: "何時", en_def: "used to ask about the time something happens",
    sentence: "{{BLANK}} does the school bus usually arrive in the morning?",
    cn: "校車通常什麼時候在早上抵達？" },
  { word: "where", pos: "interrog.", cn_def: "在哪裡", en_def: "used to ask about a place or location",
    sentence: "{{BLANK}} did you leave your umbrella this afternoon?",
    cn: "你今天下午把雨傘放在哪裡了？" },
  { word: "whether", pos: "interrog.", cn_def: "是否", en_def: "used to express a choice between two possibilities",
    sentence: "She couldn't decide {{BLANK}} to take the bus or walk home.",
    cn: "她無法決定是否要搭公車還是走路回家。" },
  { word: "which", pos: "interrog.", cn_def: "哪個", en_def: "used to ask someone to choose from a set of things",
    sentence: "{{BLANK}} jacket do you want to wear to the party tonight?",
    cn: "你今晚要穿哪件外套去派對？" },
  { word: "who", pos: "interrog.", cn_def: "誰", en_def: "used to ask about the identity of a person",
    sentence: "{{BLANK}} is going to lead the class project this semester?",
    cn: "這學期誰要帶領班級的專題報告？" },
  { word: "whose", pos: "interrog.", cn_def: "誰的", en_def: "used to ask who owns something",
    sentence: "{{BLANK}} backpack is this sitting by the classroom door?",
    cn: "教室門邊的這個背包是誰的？" },
  { word: "why", pos: "interrog.", cn_def: "為什麼", en_def: "used to ask the reason for something",
    sentence: "{{BLANK}} did the teacher cancel today's science experiment?",
    cn: "老師為什麼取消了今天的科學實驗？" },
  { word: "how", pos: "interrog.", cn_def: "如何", en_def: "used to ask about the way something is done",
    sentence: "{{BLANK}} did she manage to finish all her homework so fast?",
    cn: "她是如何那麼快完成所有作業的？" },
  { word: "we", pos: "pron.", cn_def: "我們", en_def: "used by a speaker to refer to themselves and others",
    sentence: "{{BLANK}} are planning a surprise party for our teacher.",
    cn: "我們正在為老師計畫一場驚喜派對。" },
  { word: "you", pos: "pron.", cn_def: "你（們）", en_def: "used to refer to the person being spoken to",
    sentence: "Did {{BLANK}} remember to bring your gym clothes today?",
    cn: "你今天記得帶體育服了嗎？" },
  { word: "he", pos: "pron.", cn_def: "他", en_def: "used to refer to a male person already mentioned",
    sentence: "My brother said {{BLANK}} would help me with my math homework.",
    cn: "我哥哥說他會幫我做數學作業。" },
  { word: "she", pos: "pron.", cn_def: "她", en_def: "used to refer to a female person already mentioned",
    sentence: "My sister told me {{BLANK}} would be late for dinner tonight.",
    cn: "我姊姊告訴我她今晚晚餐會遲到。" },
  { word: "it", pos: "pron.", cn_def: "它(牠)", en_def: "used to refer to a thing already mentioned",
    sentence: "The cat was hungry, so {{BLANK}} meowed loudly by the door.",
    cn: "這隻貓很餓，所以牠在門邊大聲地叫。" },
  { word: "they", pos: "pron.", cn_def: "他們", en_def: "used to refer to two or more people or things",
    sentence: "My cousins called to say {{BLANK}} would visit next weekend.",
    cn: "我的表親們打電話來說他們下週末會來拜訪。" },
  { word: "myself", pos: "pron.", cn_def: "我自己", en_def: "used to refer back to the speaker",
    sentence: "I made this birthday card all by {{BLANK}} last night.",
    cn: "我昨晚自己一個人做了這張生日卡片。" },
  { word: "themselves", pos: "pron.", cn_def: "他們自己", en_def: "used to refer back to the people already mentioned",
    sentence: "The twins cleaned their messy room all by {{BLANK}}.",
    cn: "這對雙胞胎自己把凌亂的房間打掃乾淨了。" },
  { word: "oneself", pos: "pron.", cn_def: "自己", en_def: "used to refer back to a person in general",
    sentence: "Learning to solve a problem by {{BLANK}} builds real confidence.",
    cn: "學會自己解決問題能建立真正的自信。" },
  { word: "her", pos: "adj.", cn_def: "她的", en_def: "belonging to a female already mentioned",
    sentence: "She forgot to bring {{BLANK}} lunch box to school today.",
    cn: "她今天忘了帶她的便當盒去學校。" },
  { word: "his", pos: "adj.", cn_def: "他的", en_def: "belonging to a male already mentioned",
    sentence: "He left {{BLANK}} bicycle parked outside the library entrance.",
    cn: "他把他的自行車停在圖書館入口外面。" },
  { word: "its", pos: "adj.", cn_def: "它的", en_def: "belonging to a thing or animal already mentioned",
    sentence: "The little bird built {{BLANK}} nest high in the old tree.",
    cn: "這隻小鳥把牠的巢築在那棵老樹的高處。" },
  { word: "my", pos: "adj.", cn_def: "我的", en_def: "belonging to the speaker",
    sentence: "I left {{BLANK}} jacket on the chair by the front door.",
    cn: "我把我的外套留在前門旁的椅子上。" },
  { word: "our", pos: "adj.", cn_def: "我們的", en_def: "belonging to the speaker and others",
    sentence: "We decorated {{BLANK}} classroom with colorful paper lanterns.",
    cn: "我們用色彩鮮豔的紙燈籠裝飾了我們的教室。" },
  { word: "their", pos: "adj.", cn_def: "他們的", en_def: "belonging to people or things already mentioned",
    sentence: "The students packed {{BLANK}} bags before the field trip.",
    cn: "學生們在校外教學前打包好他們的背包。" },
  { word: "your", pos: "adj.", cn_def: "你的", en_def: "belonging to the person being spoken to",
    sentence: "Please remember to bring {{BLANK}} permission slip tomorrow.",
    cn: "請記得明天帶你的家長同意書。" },
  { word: "do", pos: "aux.", cn_def: "做（助動詞）", en_def: "used with another verb to form questions or negatives",
    sentence: "{{BLANK}} you usually walk to school or take the bus?",
    cn: "你通常是走路去上學還是搭公車？" },
  { word: "may", pos: "aux.", cn_def: "可以", en_def: "used to ask for or give permission",
    sentence: "{{BLANK}} I borrow your pencil for a moment, please?",
    cn: "我可以借用一下你的鉛筆嗎？" },
  { word: "must", pos: "aux.", cn_def: "必須", en_def: "used to say something is necessary",
    sentence: "Students {{BLANK}} hand in their reports by Friday afternoon.",
    cn: "學生必須在星期五下午前交報告。" },
  { word: "shall", pos: "aux.", cn_def: "將要", en_def: "used to talk about the future or to make a suggestion",
    sentence: "{{BLANK}} we begin the meeting now that everyone has arrived?",
    cn: "既然大家都到了，我們現在開始開會好嗎？" },
  { word: "should", pos: "aux.", cn_def: "應該", en_def: "used to say what is the right or expected thing to do",
    sentence: "You {{BLANK}} finish your vegetables before having any dessert.",
    cn: "你應該先吃完蔬菜才能吃甜點。" }
];

// ---- Part 2 data: 30 MCQs ----
// Since this group covers grammar function words rather than
// concrete vocabulary, questions test correct grammatical usage
// in natural classroom/family contexts. Continuing the simpler/
// shorter MCQ style from Group 37: ~16-26 words, exactly 2
// sentences, one blank, 4 options. Answer letters balanced
// across A/B/C/D, no adjacent repeats. vocabIndex points to the
// exact VOCAB array entry being tested.
const MCQS = [
  { q: "He wanted to know more about her interests at school. ______ is your favorite subject at school this year?",
    options: ["What", "When", "Where", "Why"], answer: 0, vocabIndex: 0 },
  { q: "She wanted to be at the bus stop on time tomorrow. ______ does the school bus usually arrive in the morning?",
    options: ["What", "When", "Whose", "How"], answer: 1, vocabIndex: 1 },
  { q: "It started raining, and she couldn't find something important. ______ did you leave your umbrella this afternoon?",
    options: ["When", "Why", "Where", "Which"], answer: 2, vocabIndex: 2 },
  { q: "Looking at the cloudy sky, she felt unsure about her plans. She couldn't decide ______ to take the bus or walk.",
    options: ["which", "who", "why", "whether"], answer: 3, vocabIndex: 3 },
  { q: "Two coats were hanging by the door before the party started. ______ jacket do you want to wear tonight?",
    options: ["Which", "What", "Whose", "Who"], answer: 0, vocabIndex: 4 },
  { q: "The class needed someone responsible for the big assignment. ______ is going to lead the class project this semester?",
    options: ["What", "Who", "Which", "Whose"], answer: 1, vocabIndex: 5 },
  { q: "A backpack was left behind near the classroom entrance. ______ backpack is this sitting by the classroom door?",
    options: ["Who", "Which", "Whose", "What"], answer: 2, vocabIndex: 6 },
  { q: "Students were surprised when class plans suddenly changed. ______ did the teacher cancel today's science experiment?",
    options: ["When", "Where", "Whose", "Why"], answer: 3, vocabIndex: 7 },
  { q: "Her classmates were impressed by how quickly she worked. ______ did she manage to finish all her homework so fast?",
    options: ["How", "Why", "Where", "What"], answer: 0, vocabIndex: 8 },
  { q: "The students were excited about an upcoming surprise for their teacher. ______ are planning a party for our teacher.",
    options: ["They", "We", "You", "She"], answer: 1, vocabIndex: 9 },
  { q: "He noticed his friend wasn't wearing the usual sports outfit. Did ______ remember to bring your gym clothes today?",
    options: ["he", "she", "you", "we"], answer: 2, vocabIndex: 10 },
  { q: "My brother offered to help with a difficult subject after school. My brother said ______ would help me with math homework.",
    options: ["she", "they", "it", "he"], answer: 3, vocabIndex: 11 },
  { q: "There was a small change in our dinner plans tonight. My sister told me ______ would be late for dinner.",
    options: ["she", "he", "they", "we"], answer: 0, vocabIndex: 12 },
  { q: "The hungry pet wanted attention right away near the front door. The cat was hungry, so ______ meowed loudly.",
    options: ["they", "it", "he", "she"], answer: 1, vocabIndex: 13 },
  { q: "There was good news about a family visit coming up soon. My cousins called to say ______ would visit next weekend.",
    options: ["he", "she", "they", "it"], answer: 2, vocabIndex: 14 },
  { q: "She felt proud of finishing the craft project without any help. I made this birthday card all by ______ last night.",
    options: ["yourself", "himself", "themselves", "myself"], answer: 3, vocabIndex: 15 },
  { q: "Without anyone reminding them, the siblings handled the mess on their own. The twins cleaned their messy room by ______.",
    options: ["themselves", "myself", "ourselves", "herself"], answer: 0, vocabIndex: 16 },
  { q: "Working through challenges alone can teach valuable lessons over time. Learning to solve a problem by ______ builds confidence.",
    options: ["myself", "oneself", "ourselves", "themselves"], answer: 1, vocabIndex: 17 },
  { q: "Something important got left behind before school started today. She forgot to bring ______ lunch box to school today.",
    options: ["his", "their", "her", "its"], answer: 2, vocabIndex: 18 },
  { q: "A bicycle stayed outside while its owner studied indoors all afternoon. He left ______ bicycle parked outside the library.",
    options: ["her", "their", "its", "his"], answer: 3, vocabIndex: 19 },
  { q: "High in the branches, a small creature had made a cozy home. The bird built ______ nest in the old tree.",
    options: ["its", "his", "her", "their"], answer: 0, vocabIndex: 20 },
  { q: "He hurried out the door but forgot something warm for the cold weather. I left ______ jacket on the chair.",
    options: ["your", "my", "his", "their"], answer: 1, vocabIndex: 21 },
  { q: "The students worked together to make their learning space feel festive. We decorated ______ classroom with paper lanterns.",
    options: ["my", "your", "our", "his"], answer: 2, vocabIndex: 22 },
  { q: "Everyone got ready early for the trip to the science museum. The students packed ______ bags before the field trip.",
    options: ["my", "our", "your", "their"], answer: 3, vocabIndex: 23 },
  { q: "An important form needed to come back to school the next day. Please remember to bring ______ permission slip tomorrow.",
    options: ["your", "my", "their", "our"], answer: 0, vocabIndex: 24 },
  { q: "Some students live close to school, while others live farther away. ______ you usually walk to school or take the bus?",
    options: ["Does", "Do", "Did", "Are"], answer: 1, vocabIndex: 25 },
  { q: "He had forgotten his pencil right before the quiz began. ______ I borrow your pencil for a moment, please?",
    options: ["Should", "Must", "May", "Do"], answer: 2, vocabIndex: 26 },
  { q: "The teacher reminded everyone about an upcoming deadline this week. Students ______ hand in their reports by Friday afternoon.",
    options: ["may", "should", "shall", "must"], answer: 3, vocabIndex: 27 },
  { q: "Everyone had finally taken their seats around the conference table. ______ we begin the meeting now that everyone has arrived?",
    options: ["Shall", "May", "Must", "Should"], answer: 0, vocabIndex: 28 },
  { q: "His mother reminded him about healthy eating habits at dinner. You ______ finish your vegetables before having any dessert.",
    options: ["may", "should", "must", "shall"], answer: 1, vocabIndex: 29 },
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
  "are": { pos: "aux.", en_def: "the present tense form of 'be' used with you/we/they", cn_def: "是（be動詞，複數現在式）" },
  "confidence": { pos: "n.", en_def: "a feeling of being sure about something", cn_def: "自信" },
  "conference": { pos: "n.", en_def: "a formal meeting for discussion", cn_def: "會議" },
  "craft": { pos: "n.", en_def: "an activity involving skill in making things by hand", cn_def: "手工藝" },
  "creature": { pos: "n.", en_def: "a living being, especially an animal", cn_def: "生物" },
  "deadline": { pos: "n.", en_def: "the latest time something must be finished", cn_def: "截止日期" },
  "did": { pos: "aux.", en_def: "the past tense form of 'do' used to form questions or negatives", cn_def: "做（助動詞，過去式）" },
  "does": { pos: "aux.", en_def: "used with he/she/it to form questions or negatives", cn_def: "做（助動詞，第三人稱單數）" },
  "experiment": { pos: "n.", en_def: "a scientific test to discover something", cn_def: "實驗" },
  "festive": { pos: "adj.", en_def: "suitable for or characteristic of a celebration", cn_def: "節慶氣氛的" },
  "herself": { pos: "pron.", en_def: "used to refer back to a female already mentioned", cn_def: "她自己" },
  "himself": { pos: "pron.", en_def: "used to refer back to a male already mentioned", cn_def: "他自己" },
  "lanterns": { pos: "n.", en_def: "lights that can be carried or hung up", cn_def: "燈籠（複數）" },
  "ourselves": { pos: "pron.", en_def: "used to refer back to the speaker and others", cn_def: "我們自己" },
  "outfit": { pos: "n.", en_def: "a set of clothes worn together", cn_def: "服裝；裝備" },
  "permission slip": { pos: "n.", en_def: "a form parents sign to allow a student to do something", cn_def: "家長同意書" },
  "quiz": { pos: "n.", en_def: "a short test of knowledge", cn_def: "小考" },
  "responsible": { pos: "adj.", en_def: "having a duty to take care of something", cn_def: "負責任的" },
  "siblings": { pos: "n.", en_def: "brothers or sisters", cn_def: "兄弟姊妹（複數）" },
  "twins": { pos: "n.", en_def: "two children born to the same mother at the same time", cn_def: "雙胞胎（複數）" },
  "yourself": { pos: "pron.", en_def: "used to refer back to the person being spoken to", cn_def: "你自己" },
};
Object.keys(EXTRA_GLOSSES).forEach(key => {
  const g = EXTRA_GLOSSES[key];
  if (!LOOKUP[key]) {
    LOOKUP[key] = { pos: g.pos, en_def: g.en_def, cn_def: g.cn_def, combined: [g] };
  }
});
