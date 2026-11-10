// 學測6000字 Level 4 Group 23 (intention-laboratorylab) — word-family edition
const QUIZ_CONFIG = {
  groupName: "6000字 L4 Group 23 - intention – laboratorylab (word family)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};
const VOCAB = [
 {
  "word": "intention",
  "answer": "intention",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "意圖；打算",
  "en_def": "something you plan or want to do",
  "sentence": "My {{BLANK}} was to study for only one hour, but the chapter was so interesting that I read until midnight.",
  "cn": "我的打算是只讀一小時，但那一章太有趣了，我一直讀到半夜。",
  "cnMarked": "我的【打算】是只讀一小時，但那一章太有趣了，我一直讀到半夜。",
  "isHead": true,
  "level": 4,
  "family": "intention"
 },
 {
  "word": "intend",
  "answer": "intend",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "打算；意圖",
  "en_def": "to plan to do something",
  "sentence": "We {{BLANK}} to open the new coffee shop in March, but the furniture arrived late, so we moved the date to May.",
  "cn": "我們打算在三月開新咖啡店，但家具晚到了，所以我們把日期改到五月。",
  "cnMarked": "我們【打算】在三月開新咖啡店，但家具晚到了，所以我們把日期改到五月。",
  "isHead": false,
  "level": 4,
  "family": "intention"
 },
 {
  "word": "intentional",
  "answer": "intentional",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "故意的",
  "en_def": "done on purpose, not by accident",
  "sentence": "The teacher believed that the broken window was not {{BLANK}}, so she only asked the boys to be more careful next time.",
  "cn": "老師相信窗戶不是故意打破的，所以她只要求男孩們下次更小心。",
  "cnMarked": "老師相信窗戶不是【故意】打破的，所以她只要求男孩們下次更小心。",
  "isHead": false,
  "level": null,
  "family": "intention"
 },
 {
  "word": "intentionally",
  "answer": "intentionally",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "故意地",
  "en_def": "on purpose",
  "sentence": "Some players {{BLANK}} fall down during a soccer game so that the referee will give them a free kick.",
  "cn": "有些球員在足球比賽中故意跌倒，好讓裁判判給他們一個自由球。",
  "cnMarked": "有些球員在足球比賽中【故意】跌倒，好讓裁判判給他們一個自由球。",
  "isHead": false,
  "level": null,
  "family": "intention"
 },
 {
  "word": "have no intention of",
  "answer": "has no intention of",
  "nblanks": 4,
  "pos": "v.phr.",
  "cn_def": "完全沒有…的打算",
  "en_def": "to not plan to do something at all",
  "sentence": "My grandfather {{BLANK}} retiring, and he still goes to his small shop every morning at seven o'clock.",
  "cn": "我爺爺完全沒有退休的打算，他仍然每天早上七點去他的小店。",
  "cnMarked": "我爺爺【完全沒有】退休【的打算】，他仍然每天早上七點去他的小店。",
  "isHead": false,
  "level": null,
  "family": "intention"
 },
 {
  "word": "interact",
  "answer": "interact",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "互動；交流",
  "en_def": "to talk to and do things with other people",
  "sentence": "Shy children often find it hard to {{BLANK}} with new classmates, so the teacher uses group games on the first day.",
  "cn": "害羞的孩子常常覺得很難和新同學互動，所以老師在第一天會用小組遊戲。",
  "cnMarked": "害羞的孩子常常覺得很難和新同學【互動】，所以老師在第一天會用小組遊戲。",
  "isHead": true,
  "level": 4,
  "family": "interact"
 },
 {
  "word": "interaction",
  "answer": "interaction",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "互動；交流",
  "en_def": "the activity of talking and doing things together",
  "sentence": "Playing with other kids at the park gives a child the social {{BLANK}} that watching cartoons at home cannot provide.",
  "cn": "在公園和其他孩子玩，能給孩子在家看卡通無法提供的社交互動。",
  "cnMarked": "在公園和其他孩子玩，能給孩子在家看卡通無法提供的社交【互動】。",
  "isHead": true,
  "level": 4,
  "family": "interact"
 },
 {
  "word": "interact with",
  "answer": "interact with",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "與…互動",
  "en_def": "to communicate or work together with someone or something",
  "sentence": "Modern robots can {{BLANK}} people by answering questions, and some of them even tell jokes to make customers laugh.",
  "cn": "現代機器人可以藉由回答問題與人互動，有些甚至會講笑話逗顧客笑。",
  "cnMarked": "現代機器人可以藉由回答問題【與】人【互動】，有些甚至會講笑話逗顧客笑。",
  "isHead": false,
  "level": null,
  "family": "interact"
 },
 {
  "word": "interactive",
  "answer": "interactive",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "互動的",
  "en_def": "allowing people and machines to communicate with each other",
  "sentence": "The museum has an {{BLANK}} map that lights up and plays sounds when visitors touch different parts of the screen.",
  "cn": "博物館有一張互動式地圖，當參觀者觸碰螢幕的不同部分時會發光並播放聲音。",
  "cnMarked": "博物館有一張【互動式】地圖，當參觀者觸碰螢幕的不同部分時會發光並播放聲音。",
  "isHead": false,
  "level": null,
  "family": "interact"
 },
 {
  "word": "interfere",
  "answer": "interfere",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "干涉；干擾",
  "en_def": "to get involved in a situation where you are not wanted",
  "sentence": "My aunt loves to {{BLANK}} in other people's business, so nobody in the family tells her their secrets anymore.",
  "cn": "我阿姨喜歡干涉別人的事，所以家裡再也沒有人告訴她秘密了。",
  "cnMarked": "我阿姨喜歡【干涉】別人的事，所以家裡再也沒有人告訴她秘密了。",
  "isHead": true,
  "level": 4,
  "family": "interfere"
 },
 {
  "word": "interfere with",
  "answer": "interfere with",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "妨礙；干擾",
  "en_def": "to stop something from happening in the normal way",
  "sentence": "Playing video games late at night can {{BLANK}} your sleep, which makes it hard to pay attention in class.",
  "cn": "深夜玩電動會干擾你的睡眠，讓你上課時很難專心。",
  "cnMarked": "深夜玩電動會【干擾】你的睡眠，讓你上課時很難專心。",
  "isHead": false,
  "level": null,
  "family": "interfere"
 },
 {
  "word": "interference",
  "answer": "interference",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "干涉；干擾",
  "en_def": "the act of getting involved where you are not wanted; noise that disturbs a signal",
  "sentence": "Teenagers often complain about their parents' {{BLANK}} in their lives, but most of them still ask for advice when they need it.",
  "cn": "青少年常抱怨父母對他們生活的干涉，但大多數人需要時仍會尋求建議。",
  "cnMarked": "青少年常抱怨父母對他們生活的【干涉】，但大多數人需要時仍會尋求建議。",
  "isHead": false,
  "level": 5,
  "family": "interfere"
 },
 {
  "word": "intermediate",
  "answer": "intermediate",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "中級的；中間的",
  "en_def": "between the beginning level and the advanced level",
  "sentence": "After passing the beginner's test, Jenny moved up to the {{BLANK}} swimming class, where she learned to swim longer distances.",
  "cn": "通過初級考試後，珍妮升到中級游泳班，在那裡她學會游更長的距離。",
  "cnMarked": "通過初級考試後，珍妮升到【中級】游泳班，在那裡她學會游更長的距離。",
  "isHead": true,
  "level": 4,
  "family": "intermediate"
 },
 {
  "word": "intermediate",
  "answer": "intermediates",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "中級學習者",
  "en_def": "a learner who is at the middle level",
  "sentence": "This textbook is written for {{BLANK}}, so beginners may find the stories a little too hard to understand.",
  "cn": "這本教科書是為中級學習者寫的，所以初學者可能會覺得故事有點難懂。",
  "cnMarked": "這本教科書是為【中級學習者】寫的，所以初學者可能會覺得故事有點難懂。",
  "isHead": false,
  "level": 4,
  "family": "intermediate"
 },
 {
  "word": "intermediate level",
  "answer": "intermediate level",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "中級程度",
  "en_def": "the middle level of skill in a subject",
  "sentence": "To join the study tour in Japan, students need Japanese at the {{BLANK}}, which means they can order food and ask for directions.",
  "cn": "要參加日本遊學團，學生需要中級程度的日語，也就是能點餐和問路。",
  "cnMarked": "要參加日本遊學團，學生需要【中級程度】的日語，也就是能點餐和問路。",
  "isHead": false,
  "level": null,
  "family": "intermediate"
 },
 {
  "word": "interpret",
  "answer": "interpret",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "解釋；口譯",
  "en_def": "to explain the meaning of something; to change spoken words into another language",
  "sentence": "People often {{BLANK}} the same painting in different ways; some see a happy family, while others see a lonely child.",
  "cn": "人們常常以不同的方式解讀同一幅畫；有些人看到幸福的家庭，有些人卻看到孤單的孩子。",
  "cnMarked": "人們常常以不同的方式【解讀】同一幅畫；有些人看到幸福的家庭，有些人卻看到孤單的孩子。",
  "isHead": true,
  "level": 4,
  "family": "interpret"
 },
 {
  "word": "interpretation",
  "answer": "interpretation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "解釋；詮釋",
  "en_def": "an explanation of the meaning of something",
  "sentence": "The actor's {{BLANK}} of the old king was so powerful that the audience stood up and clapped for five minutes.",
  "cn": "這位演員對老國王的詮釋非常有力，觀眾起立鼓掌了五分鐘。",
  "cnMarked": "這位演員對老國王的【詮釋】非常有力，觀眾起立鼓掌了五分鐘。",
  "isHead": false,
  "level": 5,
  "family": "interpret"
 },
 {
  "word": "interpreter",
  "answer": "interpreter",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "口譯員",
  "en_def": "a person who changes spoken words into another language",
  "sentence": "During the meeting with the Japanese company, an {{BLANK}} sat between the two managers and translated every sentence.",
  "cn": "與日本公司開會時，一位口譯員坐在兩位經理中間，翻譯每一句話。",
  "cnMarked": "與日本公司開會時，一位【口譯員】坐在兩位經理中間，翻譯每一句話。",
  "isHead": false,
  "level": 6,
  "family": "interpret"
 },
 {
  "word": "misinterpret",
  "answer": "misinterpret",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "誤解",
  "en_def": "to understand something in the wrong way",
  "sentence": "It is easy to {{BLANK}} a short text message, because you cannot hear the other person's voice or see their face.",
  "cn": "簡短的文字訊息很容易被誤解，因為你聽不到對方的聲音，也看不到他們的表情。",
  "cnMarked": "簡短的文字訊息很容易被【誤解】，因為你聽不到對方的聲音，也看不到他們的表情。",
  "isHead": false,
  "level": null,
  "family": "interpret"
 },
 {
  "word": "interruption",
  "answer": "interruption",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "中斷；打擾",
  "en_def": "something that stops an activity for a short time",
  "sentence": "The speaker asked everyone to turn off their phones so that she could finish her talk without any {{BLANK}}.",
  "cn": "講者請大家把手機關掉，好讓她能在沒有任何打擾的情況下完成演講。",
  "cnMarked": "講者請大家把手機關掉，好讓她能在沒有任何【打擾】的情況下完成演講。",
  "isHead": true,
  "level": 4,
  "family": "interruption"
 },
 {
  "word": "interrupt",
  "answer": "interrupt",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "打斷；中斷",
  "en_def": "to stop someone while they are speaking or doing something",
  "sentence": "Please do not {{BLANK}} me while I am on the phone with the doctor; I will answer your question in a few minutes.",
  "cn": "我和醫生講電話時請不要打斷我；幾分鐘後我就會回答你的問題。",
  "cnMarked": "我和醫生講電話時請不要【打斷】我；幾分鐘後我就會回答你的問題。",
  "isHead": false,
  "level": 3,
  "family": "interruption"
 },
 {
  "word": "without interruption",
  "answer": "without interruption",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "不間斷地",
  "en_def": "continuously, with no stops",
  "sentence": "The old clock in the hall has been running {{BLANK}} for over fifty years, and my grandfather still winds it every Sunday.",
  "cn": "大廳裡的老時鐘已經不間斷地走了五十多年，我爺爺仍然每個星期天幫它上發條。",
  "cnMarked": "大廳裡的老時鐘已經【不間斷地】走了五十多年，我爺爺仍然每個星期天幫它上發條。",
  "isHead": false,
  "level": null,
  "family": "interruption"
 },
 {
  "word": "intimate",
  "answer": "intimate",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "親密的；私人的",
  "en_def": "very close and friendly; private and personal",
  "sentence": "Lisa and I have been {{BLANK}} friends since kindergarten, so she knows all my secrets and I know hers.",
  "cn": "麗莎和我從幼兒園起就是親密的朋友，所以她知道我所有的秘密，我也知道她的。",
  "cnMarked": "麗莎和我從幼兒園起就是【親密的】朋友，所以她知道我所有的秘密，我也知道她的。",
  "isHead": true,
  "level": 4,
  "family": "intimate"
 },
 {
  "word": "intimacy",
  "answer": "intimacy",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "親密；親近",
  "en_def": "a close and loving relationship",
  "sentence": "Eating dinner together every evening without phones builds {{BLANK}} between family members, even if the meal is simple.",
  "cn": "每天晚上一起吃晚餐、不用手機，即使餐點簡單，也能建立家人之間的親密感。",
  "cnMarked": "每天晚上一起吃晚餐、不用手機，即使餐點簡單，也能建立家人之間的【親密感】。",
  "isHead": false,
  "level": 6,
  "family": "intimate"
 },
 {
  "word": "intimate friend",
  "answer": "intimate friend",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "知己；密友",
  "en_def": "a very close friend",
  "sentence": "Everyone needs at least one {{BLANK}} to talk to when life becomes difficult and nobody else seems to understand.",
  "cn": "每個人都需要至少一位知己，在生活變得艱難、似乎沒有人理解時可以傾訴。",
  "cnMarked": "每個人都需要至少一位【知己】，在生活變得艱難、似乎沒有人理解時可以傾訴。",
  "isHead": false,
  "level": null,
  "family": "intimate"
 },
 {
  "word": "intimately",
  "answer": "intimately",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "親密地；詳細地",
  "en_def": "in a very close or detailed way",
  "sentence": "The old fisherman knows the coast {{BLANK}}, so he can find his way home even on the darkest and foggiest night.",
  "cn": "那位老漁夫非常熟悉這片海岸，所以即使在最黑暗、霧最濃的夜晚，他也能找到回家的路。",
  "cnMarked": "那位老漁夫【非常熟悉】這片海岸，所以即使在最黑暗、霧最濃的夜晚，他也能找到回家的路。",
  "isHead": false,
  "level": null,
  "family": "intimate"
 },
 {
  "word": "intuition",
  "answer": "intuition",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "直覺",
  "en_def": "the feeling that you know something without thinking about it",
  "sentence": "My mother's {{BLANK}} told her that something was wrong, and she called me just as I was about to get lost.",
  "cn": "我媽媽的直覺告訴她有事不對勁，就在我快要迷路時她打電話給我。",
  "cnMarked": "我媽媽的【直覺】告訴她有事不對勁，就在我快要迷路時她打電話給我。",
  "isHead": true,
  "level": 4,
  "family": "intuition"
 },
 {
  "word": "intuitive",
  "answer": "intuitive",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "直覺的；易懂的",
  "en_def": "based on feelings rather than facts; easy to understand without instructions",
  "sentence": "The new phone has an {{BLANK}} design, so even my eighty-year-old grandmother learned to use it in one afternoon.",
  "cn": "這支新手機的設計很直覺，所以連我八十歲的奶奶也在一個下午就學會使用了。",
  "cnMarked": "這支新手機的設計很【直覺】，所以連我八十歲的奶奶也在一個下午就學會使用了。",
  "isHead": false,
  "level": null,
  "family": "intuition"
 },
 {
  "word": "intuitively",
  "answer": "intuitively",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "直覺地",
  "en_def": "by feeling, without thinking carefully first",
  "sentence": "The experienced nurse {{BLANK}} knew which patient needed help first, even before she had read any of the reports.",
  "cn": "那位經驗豐富的護士憑直覺就知道哪位病人需要優先幫助，甚至在她讀任何報告之前。",
  "cnMarked": "那位經驗豐富的護士【憑直覺】就知道哪位病人需要優先幫助，甚至在她讀任何報告之前。",
  "isHead": false,
  "level": null,
  "family": "intuition"
 },
 {
  "word": "invade",
  "answer": "invade",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "入侵；侵略",
  "en_def": "to enter a country or place by force",
  "sentence": "In the movie, aliens {{BLANK}} the Earth, and a small group of students must find a way to save their city.",
  "cn": "在電影中，外星人入侵地球，一小群學生必須想辦法拯救他們的城市。",
  "cnMarked": "在電影中，外星人【入侵】地球，一小群學生必須想辦法拯救他們的城市。",
  "isHead": true,
  "level": 4,
  "family": "invade"
 },
 {
  "word": "invasion",
  "answer": "invasion",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "入侵；侵略",
  "en_def": "the act of entering a place by force",
  "sentence": "The museum shows how the island's people fought bravely against the {{BLANK}} of foreign soldiers four hundred years ago.",
  "cn": "博物館展示了四百年前島上的人民如何勇敢對抗外國士兵的入侵。",
  "cnMarked": "博物館展示了四百年前島上的人民如何勇敢對抗外國士兵的【入侵】。",
  "isHead": true,
  "level": 4,
  "family": "invade"
 },
 {
  "word": "invader",
  "answer": "invaders",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "入侵者",
  "en_def": "a person, army, or thing that enters a place by force",
  "sentence": "The farmers built a high wall around the village to keep out {{BLANK}}, and parts of it are still standing today.",
  "cn": "農民們在村莊周圍築起高牆以阻擋入侵者，其中一部分至今仍然屹立。",
  "cnMarked": "農民們在村莊周圍築起高牆以阻擋【入侵者】，其中一部分至今仍然屹立。",
  "isHead": false,
  "level": null,
  "family": "invade"
 },
 {
  "word": "invade sb's privacy",
  "answer": "invades her privacy",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "侵犯某人的隱私",
  "en_def": "to look into someone's private life without permission",
  "sentence": "Reading your sister's diary without asking {{BLANK}}, and she will be very angry if she finds out.",
  "cn": "未經詢問就看你妹妹的日記是侵犯她的隱私，如果她發現了會非常生氣。",
  "cnMarked": "未經詢問就看你妹妹的日記是【侵犯她的隱私】，如果她發現了會非常生氣。",
  "isHead": false,
  "level": null,
  "family": "invade"
 },
 {
  "word": "invention",
  "answer": "invention",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "發明",
  "en_def": "a new thing that someone has made or designed",
  "sentence": "The smartphone is probably the most important {{BLANK}} of the past twenty years, and few people can live without one now.",
  "cn": "智慧型手機可能是過去二十年最重要的發明，現在很少有人能離開它。",
  "cnMarked": "智慧型手機可能是過去二十年最重要的【發明】，現在很少有人能離開它。",
  "isHead": true,
  "level": 4,
  "family": "invention"
 },
 {
  "word": "invent",
  "answer": "invent",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "發明",
  "en_def": "to make or design something completely new",
  "sentence": "Nobody knows exactly who first learned to {{BLANK}} paper, but we do know it was made in China about two thousand years ago.",
  "cn": "沒有人確切知道是誰最早發明了紙，但我們知道它是大約兩千年前在中國製造的。",
  "cnMarked": "沒有人確切知道是誰最早【發明】了紙，但我們知道它是大約兩千年前在中國製造的。",
  "isHead": false,
  "level": 3,
  "family": "invention"
 },
 {
  "word": "inventor",
  "answer": "inventor",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "發明家",
  "en_def": "a person who makes or designs new things",
  "sentence": "Thomas Edison was a famous {{BLANK}} who tried thousands of materials before he finally made a light bulb that worked.",
  "cn": "湯瑪斯·愛迪生是一位著名的發明家，他試了數千種材料才終於做出能用的燈泡。",
  "cnMarked": "湯瑪斯·愛迪生是一位著名的【發明家】，他試了數千種材料才終於做出能用的燈泡。",
  "isHead": false,
  "level": 3,
  "family": "invention"
 },
 {
  "word": "inventive",
  "answer": "inventive",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "有創造力的",
  "en_def": "good at thinking of new ideas",
  "sentence": "My little brother is very {{BLANK}}; he turned an old shoe box and some straws into a small house for his hamster.",
  "cn": "我弟弟非常有創意；他把一個舊鞋盒和一些吸管變成了倉鼠的小房子。",
  "cnMarked": "我弟弟非常【有創意】；他把一個舊鞋盒和一些吸管變成了倉鼠的小房子。",
  "isHead": false,
  "level": null,
  "family": "invention"
 },
 {
  "word": "invest",
  "answer": "invest",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "投資",
  "en_def": "to put money into something to make more money later",
  "sentence": "My parents decided to {{BLANK}} part of their savings in a small apartment, which they now rent to a young couple.",
  "cn": "我父母決定把一部分積蓄投資在一間小公寓上，現在他們把它租給一對年輕夫婦。",
  "cnMarked": "我父母決定把一部分積蓄【投資】在一間小公寓上，現在他們把它租給一對年輕夫婦。",
  "isHead": true,
  "level": 4,
  "family": "invest(ment)"
 },
 {
  "word": "investment",
  "answer": "investment",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "投資",
  "en_def": "money put into something to make a profit; the act of investing",
  "sentence": "Buying a good dictionary is a small {{BLANK}} that will help you with every English class for the next six years.",
  "cn": "買一本好字典是一項小投資，它會在接下來六年的每一堂英文課上幫助你。",
  "cnMarked": "買一本好字典是一項小【投資】，它會在接下來六年的每一堂英文課上幫助你。",
  "isHead": false,
  "level": 4,
  "family": "invest(ment)"
 },
 {
  "word": "investor",
  "answer": "investor",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "投資者",
  "en_def": "a person or company that puts money into a business",
  "sentence": "The young designer found an {{BLANK}} who gave her enough money to open her first clothing store in Taichung.",
  "cn": "這位年輕設計師找到了一位投資者，給了她足夠的錢在台中開第一家服飾店。",
  "cnMarked": "這位年輕設計師找到了一位【投資者】，給了她足夠的錢在台中開第一家服飾店。",
  "isHead": false,
  "level": null,
  "family": "invest(ment)"
 },
 {
  "word": "invest in",
  "answer": "invest in",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "投資於…",
  "en_def": "to spend money or time on something useful",
  "sentence": "Experts say that countries should {{BLANK}} education, because well-educated people create stronger economies in the future.",
  "cn": "專家表示各國應該投資於教育，因為受過良好教育的人會在未來創造更強的經濟。",
  "cnMarked": "專家表示各國應該【投資於】教育，因為受過良好教育的人會在未來創造更強的經濟。",
  "isHead": false,
  "level": null,
  "family": "invest(ment)"
 },
 {
  "word": "investigation",
  "answer": "investigation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "調查",
  "en_def": "an official attempt to find out the truth about something",
  "sentence": "The police began an {{BLANK}} into the fire at the factory, and they soon discovered that an old machine had caused it.",
  "cn": "警方開始對工廠火災進行調查，很快就發現是一台舊機器引起的。",
  "cnMarked": "警方開始對工廠火災進行【調查】，很快就發現是一台舊機器引起的。",
  "isHead": true,
  "level": 4,
  "family": "investigation"
 },
 {
  "word": "investigate",
  "answer": "investigate",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "調查",
  "en_def": "to try to find out the truth about something",
  "sentence": "Scientists are working to {{BLANK}} why so many fish died in the river last week, and they are testing the water every day.",
  "cn": "科學家正在努力調查上週河裡為什麼有這麼多魚死亡，他們每天都在檢測水質。",
  "cnMarked": "科學家正在努力【調查】上週河裡為什麼有這麼多魚死亡，他們每天都在檢測水質。",
  "isHead": false,
  "level": 3,
  "family": "investigation"
 },
 {
  "word": "investigator",
  "answer": "investigator",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "調查員",
  "en_def": "a person whose job is to find out the truth about something",
  "sentence": "A private {{BLANK}} followed the man for three days and found out that he was secretly meeting with the company's rival.",
  "cn": "一位私家調查員跟蹤那名男子三天，發現他正秘密與公司的競爭對手會面。",
  "cnMarked": "一位私家【調查員】跟蹤那名男子三天，發現他正秘密與公司的競爭對手會面。",
  "isHead": false,
  "level": 5,
  "family": "investigation"
 },
 {
  "word": "under investigation",
  "answer": "under investigation",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "在調查中",
  "en_def": "being officially examined",
  "sentence": "The cause of the accident is still {{BLANK}}, so the police have asked drivers to avoid that road for a few days.",
  "cn": "事故原因仍在調查中，所以警方已請駕駛人這幾天避開那條路。",
  "cnMarked": "事故原因仍【在調查中】，所以警方已請駕駛人這幾天避開那條路。",
  "isHead": false,
  "level": null,
  "family": "investigation"
 },
 {
  "word": "involve",
  "answer": "involve",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "涉及；使參與",
  "en_def": "to include something as a necessary part; to make someone take part",
  "sentence": "The job will {{BLANK}} a lot of travel, so the company is looking for someone who does not mind being away from home.",
  "cn": "這份工作會涉及大量出差，所以公司正在尋找不介意離家的人。",
  "cnMarked": "這份工作會【涉及】大量出差，所以公司正在尋找不介意離家的人。",
  "isHead": true,
  "level": 4,
  "family": "involve(ment)"
 },
 {
  "word": "involvement",
  "answer": "involvement",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "參與；涉入",
  "en_def": "the act of taking part in something",
  "sentence": "The school thanked the parents for their {{BLANK}} in the sports day, since more than fifty of them helped at the event.",
  "cn": "學校感謝家長們對運動會的參與，因為有五十多位家長在活動中幫忙。",
  "cnMarked": "學校感謝家長們對運動會的【參與】，因為有五十多位家長在活動中幫忙。",
  "isHead": false,
  "level": 4,
  "family": "involve(ment)"
 },
 {
  "word": "be involved in",
  "answer": "was involved in",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "參與；捲入",
  "en_def": "to take part in something; to be connected with something",
  "sentence": "My cousin {{BLANK}} a car accident last month, but luckily nobody was hurt and only the mirror was broken.",
  "cn": "我表哥上個月捲入一場車禍，但幸運的是沒有人受傷，只有後照鏡壞了。",
  "cnMarked": "我表哥上個月【捲入】一場車禍，但幸運的是沒有人受傷，只有後照鏡壞了。",
  "isHead": false,
  "level": null,
  "family": "involve(ment)"
 },
 {
  "word": "involved",
  "answer": "involved",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "複雜的",
  "en_def": "complicated; difficult to understand",
  "sentence": "The rules of the card game were so {{BLANK}} that we spent half an hour reading them before we could start playing.",
  "cn": "這個紙牌遊戲的規則太複雜了，我們花了半小時讀規則才能開始玩。",
  "cnMarked": "這個紙牌遊戲的規則太【複雜】了，我們花了半小時讀規則才能開始玩。",
  "isHead": false,
  "level": null,
  "family": "involve(ment)"
 },
 {
  "word": "isolate",
  "answer": "isolate",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "隔離；孤立",
  "en_def": "to keep a person or thing separate from others",
  "sentence": "Doctors had to {{BLANK}} the sick patients in a separate room so that the virus would not spread to other people.",
  "cn": "醫生必須把生病的病人隔離在另一個房間，以免病毒傳染給其他人。",
  "cnMarked": "醫生必須把生病的病人【隔離】在另一個房間，以免病毒傳染給其他人。",
  "isHead": true,
  "level": 4,
  "family": "isolate"
 },
 {
  "word": "isolation",
  "answer": "isolation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "隔離；孤立",
  "en_def": "the state of being separate from other people or things",
  "sentence": "After returning from abroad during the pandemic, travelers had to stay in {{BLANK}} at home for fourteen days.",
  "cn": "疫情期間從國外回來後，旅客必須在家隔離十四天。",
  "cnMarked": "疫情期間從國外回來後，旅客必須在家【隔離】十四天。",
  "isHead": true,
  "level": 4,
  "family": "isolate"
 },
 {
  "word": "isolated",
  "answer": "isolated",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "偏遠的；孤立的",
  "en_def": "far away from other places; feeling alone",
  "sentence": "The village is so {{BLANK}} that the nearest hospital is three hours away by car along a narrow mountain road.",
  "cn": "這個村莊非常偏遠，最近的醫院開車要沿著狹窄的山路走三小時。",
  "cnMarked": "這個村莊非常【偏遠】，最近的醫院開車要沿著狹窄的山路走三小時。",
  "isHead": false,
  "level": null,
  "family": "isolate"
 },
 {
  "word": "in isolation",
  "answer": "in isolation",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "單獨地；孤立地",
  "en_def": "separately, without considering other things",
  "sentence": "You cannot judge a student's ability by one test {{BLANK}}; you also need to look at homework and class performance.",
  "cn": "你不能單獨憑一次考試判斷學生的能力；你還需要看作業和課堂表現。",
  "cnMarked": "你不能【單獨】憑一次考試判斷學生的能力；你還需要看作業和課堂表現。",
  "isHead": false,
  "level": null,
  "family": "isolate"
 },
 {
  "word": "issue",
  "answer": "issue",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "議題；問題",
  "en_def": "an important subject or problem that people discuss",
  "sentence": "Air pollution is a serious {{BLANK}} in many big cities, and governments are trying to reduce the number of cars on the roads.",
  "cn": "空氣污染是許多大城市的嚴重問題，各國政府正努力減少路上的汽車數量。",
  "cnMarked": "空氣污染是許多大城市的嚴重【問題】，各國政府正努力減少路上的汽車數量。",
  "isHead": true,
  "level": 4,
  "family": "issue"
 },
 {
  "word": "issue",
  "answer": "issue",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "（期刊的）一期",
  "en_def": "one of a series of magazines or newspapers",
  "sentence": "The latest {{BLANK}} of the science magazine has a long article about black holes, which my brother read twice.",
  "cn": "這本科學雜誌的最新一期有一篇關於黑洞的長文，我哥哥讀了兩遍。",
  "cnMarked": "這本科學雜誌的最新【一期】有一篇關於黑洞的長文，我哥哥讀了兩遍。",
  "isHead": false,
  "level": 4,
  "family": "issue"
 },
 {
  "word": "issue",
  "answer": "issue",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "發給；發布",
  "en_def": "to give something officially; to announce",
  "sentence": "The government will {{BLANK}} a warning to the public if the typhoon gets stronger, so please keep watching the news.",
  "cn": "如果颱風增強，政府將向大眾發布警報，所以請持續關注新聞。",
  "cnMarked": "如果颱風增強，政府將向大眾【發布】警報，所以請持續關注新聞。",
  "isHead": false,
  "level": 4,
  "family": "issue"
 },
 {
  "word": "jealousy",
  "answer": "jealousy",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "嫉妒；妒忌",
  "en_def": "the unhappy feeling you have when someone has what you want",
  "sentence": "When her best friend won the prize, Amy felt a little {{BLANK}}, but she still smiled and said congratulations.",
  "cn": "當她最好的朋友贏得獎項時，艾咪感到一絲嫉妒，但她仍然微笑著說恭喜。",
  "cnMarked": "當她最好的朋友贏得獎項時，艾咪感到一絲【嫉妒】，但她仍然微笑著說恭喜。",
  "isHead": true,
  "level": 4,
  "family": "jealousy"
 },
 {
  "word": "jealous",
  "answer": "jealous",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "嫉妒的；吃醋的",
  "en_def": "unhappy because someone has what you want",
  "sentence": "My dog gets {{BLANK}} whenever I play with the neighbor's cat, and he pushes his way between us.",
  "cn": "每當我和鄰居的貓玩，我的狗就會吃醋，牠會擠進我們中間。",
  "cnMarked": "每當我和鄰居的貓玩，我的狗就會【吃醋】，牠會擠進我們中間。",
  "isHead": false,
  "level": 3,
  "family": "jealousy"
 },
 {
  "word": "be jealous of",
  "answer": "be jealous of",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "嫉妒…",
  "en_def": "to feel unhappy because of what someone else has",
  "sentence": "There is no reason to {{BLANK}} your sister's new phone; your own phone still works perfectly well.",
  "cn": "沒有理由嫉妒你姐姐的新手機；你自己的手機還能用得好好的。",
  "cnMarked": "沒有理由【嫉妒】你姐姐的新手機；你自己的手機還能用得好好的。",
  "isHead": false,
  "level": null,
  "family": "jealousy"
 },
 {
  "word": "jealously",
  "answer": "jealously",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "嫉妒地；小心守護地",
  "en_def": "in a way that shows you do not want to share something",
  "sentence": "The old man {{BLANK}} guarded his secret recipe and never let anyone, not even his son, into the kitchen while he cooked.",
  "cn": "老先生小心翼翼地守護著他的秘密食譜，做菜時從不讓任何人（連他兒子也不行）進廚房。",
  "cnMarked": "老先生【小心翼翼地】守護著他的秘密食譜，做菜時從不讓任何人（連他兒子也不行）進廚房。",
  "isHead": false,
  "level": null,
  "family": "jealousy"
 },
 {
  "word": "keen",
  "answer": "keen",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "熱衷的；渴望的",
  "en_def": "very interested in something; eager",
  "sentence": "Tom is a {{BLANK}} photographer who gets up before sunrise every weekend to take pictures of birds in the park.",
  "cn": "湯姆是個熱愛攝影的人，每個週末日出前就起床到公園拍鳥。",
  "cnMarked": "湯姆是個【熱愛】攝影的人，每個週末日出前就起床到公園拍鳥。",
  "isHead": true,
  "level": 4,
  "family": "keen"
 },
 {
  "word": "keen",
  "answer": "keen",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "敏銳的",
  "en_def": "sharp; very good at noticing things",
  "sentence": "Dogs have a {{BLANK}} sense of smell, which is why the police use them to find lost people in the mountains.",
  "cn": "狗有敏銳的嗅覺，這就是為什麼警察用牠們在山裡尋找失蹤的人。",
  "cnMarked": "狗有【敏銳的】嗅覺，這就是為什麼警察用牠們在山裡尋找失蹤的人。",
  "isHead": false,
  "level": 4,
  "family": "keen"
 },
 {
  "word": "be keen on",
  "answer": "is keen on",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "熱衷於；很喜歡",
  "en_def": "to like something very much",
  "sentence": "My sister {{BLANK}} Korean dramas, so she stays up late every night watching one more episode.",
  "cn": "我姐姐很喜歡韓劇，所以她每晚都熬夜再看一集。",
  "cnMarked": "我姐姐【很喜歡】韓劇，所以她每晚都熬夜再看一集。",
  "isHead": false,
  "level": null,
  "family": "keen"
 },
 {
  "word": "keenly",
  "answer": "keenly",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "強烈地；敏銳地",
  "en_def": "very much; strongly",
  "sentence": "The whole class {{BLANK}} felt the loss when their favorite teacher moved to another school last summer.",
  "cn": "去年夏天他們最喜歡的老師調到另一所學校時，全班都深深地感受到失落。",
  "cnMarked": "去年夏天他們最喜歡的老師調到另一所學校時，全班都【深深地】感受到失落。",
  "isHead": false,
  "level": null,
  "family": "keen"
 },
 {
  "word": "kettle",
  "answer": "kettle",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "水壺；茶壺",
  "en_def": "a container with a handle used for boiling water",
  "sentence": "Fill the {{BLANK}} with cold water and wait for it to boil before you pour the water over the tea leaves.",
  "cn": "把水壺裝滿冷水，等它煮沸後再把水倒在茶葉上。",
  "cnMarked": "把【水壺】裝滿冷水，等它煮沸後再把水倒在茶葉上。",
  "isHead": true,
  "level": 4,
  "family": "kettle"
 },
 {
  "word": "electric kettle",
  "answer": "electric kettle",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "電熱水壺",
  "en_def": "a kettle that boils water using electricity",
  "sentence": "An {{BLANK}} is the most useful thing in my dorm room, because I use it to make tea, coffee, and instant noodles.",
  "cn": "電熱水壺是我宿舍房間裡最有用的東西，因為我用它泡茶、泡咖啡和泡泡麵。",
  "cnMarked": "【電熱水壺】是我宿舍房間裡最有用的東西，因為我用它泡茶、泡咖啡和泡泡麵。",
  "isHead": false,
  "level": null,
  "family": "kettle"
 },
 {
  "word": "put the kettle on",
  "answer": "put the kettle on",
  "nblanks": 4,
  "pos": "v.phr.",
  "cn_def": "燒水（泡茶）",
  "en_def": "to start boiling water for tea or coffee",
  "sentence": "When guests arrive at my grandmother's house, the first thing she does is {{BLANK}} and bring out her best cookies.",
  "cn": "客人到我奶奶家時，她做的第一件事就是燒水泡茶，並拿出她最好的餅乾。",
  "cnMarked": "客人到我奶奶家時，她做的第一件事就是【燒水泡茶】，並拿出她最好的餅乾。",
  "isHead": false,
  "level": null,
  "family": "kettle"
 },
 {
  "word": "kneel, knelt, knelt",
  "answer": "kneel",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "跪；跪下",
  "en_def": "to be on your knees, or to go down onto your knees",
  "sentence": "The gardener had to {{BLANK}} on the wet grass for an hour to plant all the flowers before the rain started.",
  "cn": "園丁必須在濕草地上跪一小時，趕在下雨前種完所有的花。",
  "cnMarked": "園丁必須在濕草地上【跪】一小時，趕在下雨前種完所有的花。",
  "isHead": true,
  "level": 4,
  "family": "kneel"
 },
 {
  "word": "kneel down",
  "answer": "kneel down",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "跪下",
  "en_def": "to go down onto your knees",
  "sentence": "The young man decided to {{BLANK}} in front of everyone at the party and ask his girlfriend to marry him.",
  "cn": "那位年輕男子決定在派對上當著大家的面跪下，向女友求婚。",
  "cnMarked": "那位年輕男子決定在派對上當著大家的面【跪下】，向女友求婚。",
  "isHead": false,
  "level": null,
  "family": "kneel"
 },
 {
  "word": "knee",
  "answer": "knee",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "膝蓋",
  "en_def": "the joint in the middle of your leg where it bends",
  "sentence": "She hurt her {{BLANK}} when she fell off her bike, so she could not join the dance practice for two weeks.",
  "cn": "她從腳踏車上摔下來時傷到了膝蓋，所以兩週不能參加舞蹈練習。",
  "cnMarked": "她從腳踏車上摔下來時傷到了【膝蓋】，所以兩週不能參加舞蹈練習。",
  "isHead": false,
  "level": 1,
  "family": "kneel"
 },
 {
  "word": "knob",
  "answer": "knob",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "旋鈕；圓形把手",
  "en_def": "a round handle or button that you turn",
  "sentence": "Turn the {{BLANK}} on the left to make the water hotter, and turn the one on the right to make it colder.",
  "cn": "把左邊的旋鈕轉一下可以讓水更熱，轉右邊那個可以讓水更冷。",
  "cnMarked": "把左邊的【旋鈕】轉一下可以讓水更熱，轉右邊那個可以讓水更冷。",
  "isHead": true,
  "level": 4,
  "family": "knob"
 },
 {
  "word": "doorknob",
  "answer": "doorknob",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "門把",
  "en_def": "a round handle on a door",
  "sentence": "The {{BLANK}} was so old and loose that it came off in my hand when I tried to open the bathroom door.",
  "cn": "那個門把又舊又鬆，我想開浴室門時它竟然掉在我手裡。",
  "cnMarked": "那個【門把】又舊又鬆，我想開浴室門時它竟然掉在我手裡。",
  "isHead": false,
  "level": null,
  "family": "knob"
 },
 {
  "word": "turn the knob",
  "answer": "turn the knob",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "轉動旋鈕",
  "en_def": "to twist a round handle to open or control something",
  "sentence": "To change the channel on this old radio, you have to {{BLANK}} slowly until the music sounds clear and loud.",
  "cn": "要在這台老收音機上換頻道，你必須慢慢轉動旋鈕，直到音樂聽起來清楚又大聲。",
  "cnMarked": "要在這台老收音機上換頻道，你必須慢慢【轉動旋鈕】，直到音樂聽起來清楚又大聲。",
  "isHead": false,
  "level": null,
  "family": "knob"
 },
 {
  "word": "labor",
  "answer": "labor",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "勞動；勞力",
  "en_def": "hard physical work",
  "sentence": "Building the old stone bridge took years of hard {{BLANK}}, since the workers had no machines and carried every rock by hand.",
  "cn": "建造那座古老的石橋花了多年的辛苦勞動，因為工人沒有機器，每塊石頭都是用手搬的。",
  "cnMarked": "建造那座古老的石橋花了多年的辛苦【勞動】，因為工人沒有機器，每塊石頭都是用手搬的。",
  "isHead": true,
  "level": 4,
  "family": "labor"
 },
 {
  "word": "labor",
  "answer": "labor",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "勞工",
  "en_def": "workers as a group",
  "sentence": "The factory moved to another country because {{BLANK}} was cheaper there, and many local workers lost their jobs.",
  "cn": "那家工廠搬到另一個國家，因為那裡的勞工比較便宜，許多本地工人因此失業。",
  "cnMarked": "那家工廠搬到另一個國家，因為那裡的【勞工】比較便宜，許多本地工人因此失業。",
  "isHead": false,
  "level": 4,
  "family": "labor"
 },
 {
  "word": "labor",
  "answer": "labor",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "辛苦工作",
  "en_def": "to work very hard",
  "sentence": "The farmers {{BLANK}} in the fields from early morning until sunset during the rice harvest every June.",
  "cn": "每年六月稻米收割期間，農民從一大早到日落都在田裡辛苦工作。",
  "cnMarked": "每年六月稻米收割期間，農民從一大早到日落都在田裡【辛苦工作】。",
  "isHead": false,
  "level": 4,
  "family": "labor"
 },
 {
  "word": "Labor Day",
  "answer": "Labor Day",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "勞動節",
  "en_def": "a public holiday that honors workers",
  "sentence": "In Taiwan, {{BLANK}} is on May 1st, so most offices and factories are closed and workers enjoy a day off.",
  "cn": "在台灣，勞動節是五月一日，所以大多數辦公室和工廠都休息，勞工享有一天假期。",
  "cnMarked": "在台灣，【勞動節】是五月一日，所以大多數辦公室和工廠都休息，勞工享有一天假期。",
  "isHead": false,
  "level": null,
  "family": "labor"
 },
 {
  "word": "laborer",
  "answer": "laborer",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "勞工；工人",
  "en_def": "a person who does hard physical work",
  "sentence": "My grandfather worked as a {{BLANK}} on the railway for thirty years, and his hands were rough but strong.",
  "cn": "我爺爺在鐵路當了三十年的工人，他的手粗糙但有力。",
  "cnMarked": "我爺爺在鐵路當了三十年的【工人】，他的手粗糙但有力。",
  "isHead": false,
  "level": null,
  "family": "labor"
 },
 {
  "word": "laboratory",
  "answer": "laboratory",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "實驗室",
  "en_def": "a room or building where scientists do experiments",
  "sentence": "Students must wear safety glasses in the chemistry {{BLANK}}, because some of the liquids there can burn your eyes.",
  "cn": "學生在化學實驗室裡必須戴護目鏡，因為那裡有些液體會灼傷眼睛。",
  "cnMarked": "學生在化學【實驗室】裡必須戴護目鏡，因為那裡有些液體會灼傷眼睛。",
  "isHead": true,
  "level": 4,
  "family": "laboratory"
 },
 {
  "word": "lab",
  "answer": "lab",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "實驗室（簡稱）",
  "en_def": "a laboratory (short form)",
  "sentence": "Our biology teacher took us to the school {{BLANK}} to look at plant cells under a microscope for the first time.",
  "cn": "我們的生物老師帶我們到學校的實驗室，第一次用顯微鏡觀察植物細胞。",
  "cnMarked": "我們的生物老師帶我們到學校的【實驗室】，第一次用顯微鏡觀察植物細胞。",
  "isHead": false,
  "level": 4,
  "family": "laboratory"
 },
 {
  "word": "language lab",
  "answer": "language lab",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "語言教室",
  "en_def": "a room with computers and headphones for practicing languages",
  "sentence": "Every Friday we go to the {{BLANK}}, where we put on headphones and practice our English listening and speaking.",
  "cn": "每個星期五我們都去語言教室，戴上耳機練習英語聽力和口說。",
  "cnMarked": "每個星期五我們都去【語言教室】，戴上耳機練習英語聽力和口說。",
  "isHead": false,
  "level": null,
  "family": "laboratory"
 },
 {
  "word": "lab coat",
  "answer": "lab coat",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "實驗袍",
  "en_def": "a long white coat worn by scientists or doctors",
  "sentence": "The scientist put on her white {{BLANK}} and gloves before she started mixing the chemicals on the table.",
  "cn": "科學家穿上白色實驗袍並戴上手套，然後才開始混合桌上的化學藥品。",
  "cnMarked": "科學家穿上白色【實驗袍】並戴上手套，然後才開始混合桌上的化學藥品。",
  "isHead": false,
  "level": null,
  "family": "laboratory"
 }
];
const MCQS = [
 {
  "q": "I did not mean to break your cup when I was washing the dishes. It fell from my wet hands by accident, and it was never my ______ to hurt you.",
  "options": [
   "invasion",
   "intuition",
   "interaction",
   "intention"
  ],
  "answer": 3,
  "vocabIndex": 0
 },
 {
  "q": "Babies learn to talk by listening and copying the people around them. That is why doctors tell parents to ______ with their children as much as possible every day.",
  "options": [
   "interfere",
   "interact",
   "invade",
   "investigate"
  ],
  "answer": 1,
  "vocabIndex": 5
 },
 {
  "q": "Online classes are useful, but students often miss their friends. The ______ between classmates in a real classroom helps them learn how to work with other people.",
  "options": [
   "interruption",
   "investment",
   "isolation",
   "interaction"
  ],
  "answer": 3,
  "vocabIndex": 6
 },
 {
  "q": "My brother is old enough to choose his own clothes and friends. My mother tries not to ______ in his life, although she sometimes worries about his choices.",
  "options": [
   "isolate",
   "involve",
   "interfere",
   "interpret"
  ],
  "answer": 2,
  "vocabIndex": 9
 },
 {
  "q": "Jack finished the beginner's English book last year and now reads short novels. His teacher moved him to the ______ class, which is harder but not yet advanced.",
  "options": [
   "intimate",
   "intuitive",
   "jealous",
   "intermediate"
  ],
  "answer": 3,
  "vocabIndex": 12
 },
 {
  "q": "The old poem is written in a strange and difficult style. Even our teacher says that people can ______ its last line in several different ways.",
  "options": [
   "invent",
   "interrupt",
   "interpret",
   "isolate"
  ],
  "answer": 2,
  "vocabIndex": 15
 },
 {
  "q": "The speaker had to stop five times because people kept walking in late. After each ______, she had to find her place and start the sentence again.",
  "options": [
   "investigation",
   "interruption",
   "involvement",
   "intention"
  ],
  "answer": 1,
  "vocabIndex": 19
 },
 {
  "q": "Mary and Jane have known each other since they were three years old. They are such ______ friends that they can often finish each other's sentences.",
  "options": [
   "inventive",
   "intermediate",
   "intimate",
   "isolated"
  ],
  "answer": 2,
  "vocabIndex": 22
 },
 {
  "q": "The experienced doctor could not explain how she knew the boy was seriously ill. She said it was simply her ______, and the tests later proved she was right.",
  "options": [
   "investment",
   "intuition",
   "interference",
   "interpretation"
  ],
  "answer": 1,
  "vocabIndex": 26
 },
 {
  "q": "In the history book, we read that a powerful army crossed the river in the year 1200. They planned to ______ the small kingdom and take its gold.",
  "options": [
   "invent",
   "invest",
   "interact",
   "invade"
  ],
  "answer": 3,
  "vocabIndex": 29
 },
 {
  "q": "Many soldiers from a foreign country entered the island in 1624 and built a fort by the sea. This ______ changed the lives of the people who lived there.",
  "options": [
   "intuition",
   "jealousy",
   "invasion",
   "invention"
  ],
  "answer": 2,
  "vocabIndex": 30
 },
 {
  "q": "Before the washing machine, people spent hours cleaning clothes by hand. This clever ______ saved families a lot of time and hard work every single week.",
  "options": [
   "invention",
   "interaction",
   "investigation",
   "isolation"
  ],
  "answer": 0,
  "vocabIndex": 33
 },
 {
  "q": "My uncle wants his money to grow instead of just sitting in the bank. He has decided to ______ some of it in a small company that makes electric bikes.",
  "options": [
   "invade",
   "invest",
   "interfere",
   "interrupt"
  ],
  "answer": 1,
  "vocabIndex": 37
 },
 {
  "q": "A valuable painting disappeared from the city museum last night. The police have started an ______ and are now talking to everyone who worked there yesterday.",
  "options": [
   "interruption",
   "intention",
   "investigation",
   "invention"
  ],
  "answer": 2,
  "vocabIndex": 41
 },
 {
  "q": "Learning a language is not only about memorizing words. It will also ______ a lot of listening, speaking, and making mistakes in front of other people.",
  "options": [
   "involve",
   "invent",
   "interpret",
   "isolate"
  ],
  "answer": 0,
  "vocabIndex": 45
 },
 {
  "q": "Some of the chickens on the farm became sick last week. The farmer had to ______ them from the healthy ones so that the disease would not spread.",
  "options": [
   "interact",
   "interrupt",
   "invest",
   "isolate"
  ],
  "answer": 3,
  "vocabIndex": 49
 },
 {
  "q": "After the storm, the small village lost all its roads and phone lines. For a whole week, the people lived in complete ______ from the rest of the island.",
  "options": [
   "isolation",
   "interaction",
   "intention",
   "invention"
  ],
  "answer": 0,
  "vocabIndex": 50
 },
 {
  "q": "Too much homework is a hot topic among students and parents these days. The school will hold a meeting next week to discuss this ______ with everyone.",
  "options": [
   "labor",
   "kettle",
   "issue",
   "knob"
  ],
  "answer": 2,
  "vocabIndex": 53
 },
 {
  "q": "When Tina saw her sister's new bicycle, she felt unhappy and did not want to talk. Her mother told her that ______ is a normal feeling, but it should not control her.",
  "options": [
   "jealousy",
   "intuition",
   "isolation",
   "intimacy"
  ],
  "answer": 0,
  "vocabIndex": 56
 },
 {
  "q": "David loves science so much that he reads about space every night. He is a ______ student who always asks questions and stays after class to learn more.",
  "options": [
   "intermediate",
   "keen",
   "jealous",
   "involved"
  ],
  "answer": 1,
  "vocabIndex": 60
 },
 {
  "q": "I would like a cup of hot tea after walking in the cold. Please fill the ______ with water and put it on the stove for a few minutes.",
  "options": [
   "kettle",
   "laboratory",
   "knob",
   "investor"
  ],
  "answer": 0,
  "vocabIndex": 64
 },
 {
  "q": "The floor was wet, and the old woman had dropped her keys under the table. A young man stopped to ______ down and pick them up for her.",
  "options": [
   "invade",
   "kneel",
   "labor",
   "issue"
  ],
  "answer": 1,
  "vocabIndex": 67
 },
 {
  "q": "The water in the shower was too hot this morning. I turned the ______ to the left, but the water did not get cooler at all.",
  "options": [
   "knob",
   "intimacy",
   "issue",
   "kettle"
  ],
  "answer": 0,
  "vocabIndex": 70
 },
 {
  "q": "Picking fruit in the fields under the hot sun is hard ______. The workers start at five in the morning and rest only when the sun is at its highest.",
  "options": [
   "issue",
   "lab",
   "interaction",
   "labor"
  ],
  "answer": 3,
  "vocabIndex": 73
 },
 {
  "q": "Scientists test new medicines many times before they are sold to the public. Most of these tests are done on small animals in a ______, not in a hospital.",
  "options": [
   "kettle",
   "laborer",
   "laboratory",
   "knob"
  ],
  "answer": 2,
  "vocabIndex": 78
 },
 {
  "q": "The young engineer wanted a machine that could wash dishes and dry them at the same time. Since no such machine existed, he decided to ______ one himself.",
  "options": [
   "invent",
   "interfere",
   "interrupt",
   "isolate"
  ],
  "answer": 0,
  "vocabIndex": 34
 },
 {
  "q": "Kevin always gets angry when his classmates get higher scores than he does. His teacher told him that being ______ of others will not help him do better.",
  "options": [
   "intuitive",
   "jealous",
   "inventive",
   "intimate"
  ],
  "answer": 1,
  "vocabIndex": 57
 },
 {
  "q": "Several students became sick after lunch on the same day. The school asked a doctor to ______ the problem, and he soon found that the milk was bad.",
  "options": [
   "investigate",
   "interact",
   "invest",
   "invade"
  ],
  "answer": 0,
  "vocabIndex": 42
 },
 {
  "q": "It is rude to start talking while another person is still speaking. Please wait until your friend has finished, and do not ______ her in the middle of a sentence.",
  "options": [
   "isolate",
   "interrupt",
   "invest",
   "invent"
  ],
  "answer": 1,
  "vocabIndex": 20
 },
 {
  "q": "My father bought a small piece of land near the beach ten years ago. It turned out to be a wise ______, because the land is now worth ten times the price.",
  "options": [
   "interpretation",
   "interference",
   "investigator",
   "investment"
  ],
  "answer": 3,
  "vocabIndex": 38
 }
];
const LOOKUP = {};
VOCAB.forEach(v => { const key = v.word.toLowerCase(); const sense = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def };
  if (LOOKUP[key]) LOOKUP[key].combined.push(sense); else LOOKUP[key] = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def, combined: [sense] }; });
const EXTRA_GLOSSES = {};