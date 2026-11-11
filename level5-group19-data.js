// 學測6000字 Level 5 Group 19 (incorporate-institution) — word-family edition
const QUIZ_CONFIG = {
  groupName: "6000字 L5 Group 19 - incorporate – institution (word family)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};
const VOCAB = [
 {
  "word": "incorporate",
  "answer": "incorporate",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "包含；納入；合併",
  "en_def": "to include something as part of a bigger thing",
  "sentence": "The new English textbook will {{BLANK}} short videos and songs, so students can practice listening at home as well.",
  "cn": "新的英文教科書將納入短片和歌曲，讓學生在家也能練習聽力。",
  "cnMarked": "新的英文教科書將【納入】短片和歌曲，讓學生在家也能練習聽力。",
  "isHead": true,
  "level": 5,
  "family": "incorporate"
 },
 {
  "word": "incorporate ... into",
  "answer": "incorporate",
  "nblanks": 1,
  "pos": "v.phr.",
  "cn_def": "把…納入…",
  "en_def": "to add something so that it becomes part of something else",
  "sentence": "Our teacher tries to {{BLANK}} games into every lesson, which is why nobody falls asleep in her class.",
  "cn": "我們老師試著把遊戲納入每一堂課，這就是為什麼沒有人在她的課上睡著。",
  "cnMarked": "我們老師試著把遊戲【納入】每一堂課，這就是為什麼沒有人在她的課上睡著。",
  "isHead": false,
  "level": null,
  "family": "incorporate"
 },
 {
  "word": "incorporation",
  "answer": "incorporation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "納入；合併；公司成立",
  "en_def": "the act of including something as part of a whole",
  "sentence": "The {{BLANK}} of local history into the school program helped students feel proud of their hometown.",
  "cn": "把在地歷史納入學校課程，幫助學生對家鄉感到驕傲。",
  "cnMarked": "把在地歷史【納入】學校課程，幫助學生對家鄉感到驕傲。",
  "isHead": false,
  "level": null,
  "family": "incorporate"
 },
 {
  "word": "incorporated",
  "answer": "incorporated",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "股份有限公司的；合併的",
  "en_def": "formed as a legal company (often written Inc.)",
  "sentence": "After five years of selling cakes from her kitchen, my aunt turned her small business into an {{BLANK}} company.",
  "cn": "在廚房賣了五年蛋糕之後，我阿姨把她的小生意變成了一家股份有限公司。",
  "cnMarked": "在廚房賣了五年蛋糕之後，我阿姨把她的小生意變成了一家【股份有限】公司。",
  "isHead": false,
  "level": null,
  "family": "incorporate"
 },
 {
  "word": "index",
  "answer": "index",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "索引",
  "en_def": "an alphabetical list at the back of a book that shows where to find things",
  "sentence": "If you cannot find the topic you need, check the {{BLANK}} at the back of the book for the right page number.",
  "cn": "如果你找不到需要的主題，查一下書後面的索引，找到正確的頁碼。",
  "cnMarked": "如果你找不到需要的主題，查一下書後面的【索引】，找到正確的頁碼。",
  "isHead": true,
  "level": 5,
  "family": "index"
 },
 {
  "word": "index",
  "answer": "index",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "指數",
  "en_def": "a number that shows how prices or levels have changed",
  "sentence": "The air quality {{BLANK}} was so high this morning that the school canceled all outdoor sports for the day.",
  "cn": "今天早上空氣品質指數太高，學校取消了當天所有的戶外運動。",
  "cnMarked": "今天早上空氣品質【指數】太高，學校取消了當天所有的戶外運動。",
  "isHead": false,
  "level": 5,
  "family": "index"
 },
 {
  "word": "index finger",
  "answer": "index finger",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "食指",
  "en_def": "the finger next to your thumb",
  "sentence": "The little boy pointed his {{BLANK}} at the puppy in the window and begged his mother to buy it.",
  "cn": "小男孩用食指指著櫥窗裡的小狗，求媽媽買給他。",
  "cnMarked": "小男孩用【食指】指著櫥窗裡的小狗，求媽媽買給他。",
  "isHead": false,
  "level": null,
  "family": "index"
 },
 {
  "word": "index",
  "answer": "index",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "編索引；編入索引",
  "en_def": "to make a list of things in order so they can be found easily",
  "sentence": "The librarian spent the whole summer trying to {{BLANK}} every old newspaper so that students could search them by date.",
  "cn": "圖書館員花了整個暑假為每一份舊報紙編索引，讓學生可以依日期查找。",
  "cnMarked": "圖書館員花了整個暑假為每一份舊報紙【編索引】，讓學生可以依日期查找。",
  "isHead": false,
  "level": 5,
  "family": "index"
 },
 {
  "word": "indifferent",
  "answer": "indifferent",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "漠不關心的；冷淡的",
  "en_def": "not interested in or caring about something",
  "sentence": "The shop assistant seemed completely {{BLANK}} to our questions, so we left without buying the camera.",
  "cn": "那位店員對我們的問題似乎完全漠不關心，所以我們沒買相機就離開了。",
  "cnMarked": "那位店員對我們的問題似乎完全【漠不關心】，所以我們沒買相機就離開了。",
  "isHead": true,
  "level": 5,
  "family": "indifferent"
 },
 {
  "word": "indifference",
  "answer": "indifference",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "漠不關心；冷漠",
  "en_def": "lack of interest or care",
  "sentence": "The government's {{BLANK}} to the problem made the villagers angry, and they decided to protest in the capital.",
  "cn": "政府對這個問題的漠不關心讓村民很生氣，他們決定到首都抗議。",
  "cnMarked": "政府對這個問題的【漠不關心】讓村民很生氣，他們決定到首都抗議。",
  "isHead": false,
  "level": 6,
  "family": "indifferent"
 },
 {
  "word": "indifferent to",
  "answer": "indifferent to",
  "nblanks": 2,
  "pos": "adj.phr.",
  "cn_def": "對…漠不關心",
  "en_def": "not caring about something",
  "sentence": "My brother is {{BLANK}} fashion; he wears the same gray T-shirt and jeans almost every day of the year.",
  "cn": "我哥哥對時尚漠不關心；他一年中幾乎每天都穿同一件灰色T恤和牛仔褲。",
  "cnMarked": "我哥哥【對】時尚【漠不關心】；他一年中幾乎每天都穿同一件灰色T恤和牛仔褲。",
  "isHead": false,
  "level": null,
  "family": "indifferent"
 },
 {
  "word": "indifferently",
  "answer": "indifferently",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "冷淡地；漠不關心地",
  "en_def": "without interest or care",
  "sentence": "\"Do whatever you want,\" she said {{BLANK}}, without even looking up from the game on her phone.",
  "cn": "「隨便你，」她冷淡地說，甚至沒有從手機遊戲上抬起頭來。",
  "cnMarked": "「隨便你，」她【冷淡地】說，甚至沒有從手機遊戲上抬起頭來。",
  "isHead": false,
  "level": null,
  "family": "indifferent"
 },
 {
  "word": "indigenous",
  "answer": "indigenous",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "原住民的；本土的；原生的",
  "en_def": "belonging to a place naturally; native",
  "sentence": "Many {{BLANK}} languages in Taiwan are in danger of disappearing, so schools now offer classes to keep them alive.",
  "cn": "台灣許多原住民語言面臨消失的危險，所以學校現在開設課程讓它們延續下去。",
  "cnMarked": "台灣許多【原住民】語言面臨消失的危險，所以學校現在開設課程讓它們延續下去。",
  "isHead": true,
  "level": 5,
  "family": "indigenous"
 },
 {
  "word": "indigenous people",
  "answer": "indigenous people",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "原住民",
  "en_def": "the people who lived in a place before others arrived",
  "sentence": "The festival celebrates the music and dances of the {{BLANK}} who have lived in these mountains for thousands of years.",
  "cn": "這個節慶歌頌在這些山區生活了數千年的原住民的音樂和舞蹈。",
  "cnMarked": "這個節慶歌頌在這些山區生活了數千年的【原住民】的音樂和舞蹈。",
  "isHead": false,
  "level": null,
  "family": "indigenous"
 },
 {
  "word": "indigenous to",
  "answer": "indigenous to",
  "nblanks": 2,
  "pos": "adj.phr.",
  "cn_def": "原產於…的",
  "en_def": "naturally found in a particular place",
  "sentence": "The Formosan black bear is {{BLANK}} Taiwan, and you cannot find this animal anywhere else in the world.",
  "cn": "台灣黑熊是原產於台灣的動物，在世界其他地方都找不到。",
  "cnMarked": "台灣黑熊是【原產於】台灣的動物，在世界其他地方都找不到。",
  "isHead": false,
  "level": null,
  "family": "indigenous"
 },
 {
  "word": "indispensable",
  "answer": "indispensable",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "不可或缺的；必不可少的",
  "en_def": "so important that you cannot do without it",
  "sentence": "A good dictionary is {{BLANK}} for anyone learning a new language, even in the age of smartphone apps.",
  "cn": "即使在智慧型手機應用程式的時代，一本好字典對任何學習新語言的人來說都是不可或缺的。",
  "cnMarked": "即使在智慧型手機應用程式的時代，一本好字典對任何學習新語言的人來說都是【不可或缺的】。",
  "isHead": true,
  "level": 5,
  "family": "indispensable"
 },
 {
  "word": "indispensable to / for",
  "answer": "indispensable to",
  "nblanks": 2,
  "pos": "adj.phr.",
  "cn_def": "對…不可或缺",
  "en_def": "absolutely necessary for someone or something",
  "sentence": "Clean water is {{BLANK}} human life, yet millions of people around the world still do not have it.",
  "cn": "乾淨的水對人類生命不可或缺，但世界上仍有數百萬人沒有乾淨的水。",
  "cnMarked": "乾淨的水【對】人類生命【不可或缺】，但世界上仍有數百萬人沒有乾淨的水。",
  "isHead": false,
  "level": null,
  "family": "indispensable"
 },
 {
  "word": "dispensable",
  "answer": "dispensable",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "非必要的；可有可無的",
  "en_def": "not necessary; able to be removed",
  "sentence": "When money got tight, the family cut every {{BLANK}} cost, starting with the three streaming services they rarely watched.",
  "cn": "錢變緊時，這家人砍掉了所有非必要的開支，先從他們很少看的三個串流服務開始。",
  "cnMarked": "錢變緊時，這家人砍掉了所有【非必要的】開支，先從他們很少看的三個串流服務開始。",
  "isHead": false,
  "level": 6,
  "family": "indispensable"
 },
 {
  "word": "dispense",
  "answer": "dispense",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "分發；配藥；提供",
  "en_def": "to give out something to people; to provide a service",
  "sentence": "The machine in the lobby will {{BLANK}} hot coffee and tea for free to anyone who is waiting for an appointment.",
  "cn": "大廳裡的機器會免費提供熱咖啡和茶給任何等候預約的人。",
  "cnMarked": "大廳裡的機器會免費【提供】熱咖啡和茶給任何等候預約的人。",
  "isHead": false,
  "level": 6,
  "family": "indispensable"
 },
 {
  "word": "indulge",
  "answer": "indulge",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "放縱；沉溺；縱容",
  "en_def": "to allow yourself or someone else to have something enjoyable",
  "sentence": "On my birthday, I decided to {{BLANK}} myself with a huge chocolate cake and an afternoon of doing nothing.",
  "cn": "生日那天，我決定用一個巨大的巧克力蛋糕和一個無所事事的下午來放縱自己。",
  "cnMarked": "生日那天，我決定用一個巨大的巧克力蛋糕和一個無所事事的下午來【放縱】自己。",
  "isHead": true,
  "level": 5,
  "family": "indulge"
 },
 {
  "word": "indulge in",
  "answer": "indulged in",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "沉溺於；盡情享受",
  "en_def": "to let yourself enjoy something, especially something not good for you",
  "sentence": "After the exams were over, we {{BLANK}} ice cream and video games for a whole weekend without feeling guilty.",
  "cn": "考試結束後，我們整個週末盡情享受冰淇淋和電動遊戲，一點也不覺得內疚。",
  "cnMarked": "考試結束後，我們整個週末【盡情享受】冰淇淋和電動遊戲，一點也不覺得內疚。",
  "isHead": false,
  "level": null,
  "family": "indulge"
 },
 {
  "word": "indulgence",
  "answer": "indulgence",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "放縱；嗜好；享受",
  "en_def": "something you allow yourself to enjoy; the act of indulging",
  "sentence": "A warm bath with music is my only {{BLANK}} after a long week of work, and I never skip it on Friday nights.",
  "cn": "忙碌一週後，放著音樂泡個熱水澡是我唯一的享受，我星期五晚上從不錯過。",
  "cnMarked": "忙碌一週後，放著音樂泡個熱水澡是我唯一的【享受】，我星期五晚上從不錯過。",
  "isHead": false,
  "level": null,
  "family": "indulge"
 },
 {
  "word": "indulgent",
  "answer": "indulgent",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "縱容的；寬容的",
  "en_def": "allowing someone to have or do whatever they want",
  "sentence": "My {{BLANK}} grandparents let me stay up late and eat candy every time I visit, which drives my mother crazy.",
  "cn": "我縱容的爺爺奶奶每次我去都讓我熬夜、吃糖果，這讓我媽媽很抓狂。",
  "cnMarked": "我【縱容的】爺爺奶奶每次我去都讓我熬夜、吃糖果，這讓我媽媽很抓狂。",
  "isHead": false,
  "level": null,
  "family": "indulge"
 },
 {
  "word": "inevitable",
  "answer": "inevitable",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "不可避免的；必然的",
  "en_def": "certain to happen and impossible to avoid",
  "sentence": "With such heavy rain every afternoon this week, it was {{BLANK}} that the river would flood the low fields.",
  "cn": "這星期每天下午都下這麼大的雨，河水淹沒低窪農田是不可避免的。",
  "cnMarked": "這星期每天下午都下這麼大的雨，河水淹沒低窪農田是【不可避免的】。",
  "isHead": true,
  "level": 5,
  "family": "inevitable"
 },
 {
  "word": "inevitably",
  "answer": "inevitably",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "不可避免地；必然地",
  "en_def": "in a way that cannot be avoided",
  "sentence": "If you keep using your phone until midnight, you will {{BLANK}} feel tired and sleepy in your first class.",
  "cn": "如果你一直用手機到半夜，你第一堂課必然會覺得疲倦想睡。",
  "cnMarked": "如果你一直用手機到半夜，你第一堂課【必然】會覺得疲倦想睡。",
  "isHead": false,
  "level": null,
  "family": "inevitable"
 },
 {
  "word": "inevitability",
  "answer": "inevitability",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "必然性；不可避免",
  "en_def": "the fact that something is certain to happen",
  "sentence": "The old farmer accepted the {{BLANK}} of change, and he finally let his son use machines on the family farm.",
  "cn": "老農夫接受了改變的必然性，終於讓兒子在家裡的農場上使用機器。",
  "cnMarked": "老農夫接受了改變的【必然性】，終於讓兒子在家裡的農場上使用機器。",
  "isHead": false,
  "level": null,
  "family": "inevitable"
 },
 {
  "word": "infect",
  "answer": "infect",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "傳染；感染",
  "en_def": "to pass a disease to a person, animal, or plant",
  "sentence": "Please stay home if you have a fever, because you could {{BLANK}} your classmates before you even know you are sick.",
  "cn": "如果你發燒請待在家裡，因為你可能在自己知道生病之前就傳染給同學。",
  "cnMarked": "如果你發燒請待在家裡，因為你可能在自己知道生病之前就【傳染】給同學。",
  "isHead": true,
  "level": 5,
  "family": "infect"
 },
 {
  "word": "infection",
  "answer": "infection",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "感染；傳染病",
  "en_def": "a disease caused by germs entering the body",
  "sentence": "The doctor cleaned the cut on my knee carefully to prevent an {{BLANK}} and told me to change the bandage daily.",
  "cn": "醫生仔細清潔我膝蓋上的傷口以防止感染，並要我每天換繃帶。",
  "cnMarked": "醫生仔細清潔我膝蓋上的傷口以防止【感染】，並要我每天換繃帶。",
  "isHead": false,
  "level": 4,
  "family": "infect"
 },
 {
  "word": "infectious",
  "answer": "infectious",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "傳染性的；有感染力的",
  "en_def": "able to be passed from one person to another",
  "sentence": "Her laugh is so {{BLANK}} that within a minute the whole classroom was laughing, even the strict teacher.",
  "cn": "她的笑聲極具感染力，不到一分鐘整間教室都笑了起來，連嚴格的老師也是。",
  "cnMarked": "她的笑聲極具【感染力】，不到一分鐘整間教室都笑了起來，連嚴格的老師也是。",
  "isHead": false,
  "level": 6,
  "family": "infect"
 },
 {
  "word": "infected",
  "answer": "infected",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "受感染的",
  "en_def": "containing germs that cause disease",
  "sentence": "The {{BLANK}} wound became red and painful, so my mother took me to the clinic the next morning.",
  "cn": "受感染的傷口變得又紅又痛，所以我媽媽第二天早上帶我去診所。",
  "cnMarked": "【受感染的】傷口變得又紅又痛，所以我媽媽第二天早上帶我去診所。",
  "isHead": false,
  "level": null,
  "family": "infect"
 },
 {
  "word": "infinite",
  "answer": "infinite",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "無限的；無窮的",
  "en_def": "without any limit or end",
  "sentence": "Teaching young children requires {{BLANK}} patience, because they ask the same question again and again all day.",
  "cn": "教幼童需要無限的耐心，因為他們一整天都會一再問同樣的問題。",
  "cnMarked": "教幼童需要【無限的】耐心，因為他們一整天都會一再問同樣的問題。",
  "isHead": true,
  "level": 5,
  "family": "infinite"
 },
 {
  "word": "infinitely",
  "answer": "infinitely",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "無限地；非常",
  "en_def": "very much; without limit",
  "sentence": "The new apartment is {{BLANK}} better than our old one, mainly because it is quiet and only five minutes from the MRT.",
  "cn": "新公寓比我們的舊公寓好得太多了，主要是因為它很安靜，而且離捷運只要五分鐘。",
  "cnMarked": "新公寓比我們的舊公寓好得【太多了】，主要是因為它很安靜，而且離捷運只要五分鐘。",
  "isHead": false,
  "level": null,
  "family": "infinite"
 },
 {
  "word": "infinity",
  "answer": "infinity",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "無限；無窮",
  "en_def": "a space, time, or number without any end",
  "sentence": "Looking up at the stars, the little girl asked her father whether the universe really went on to {{BLANK}}.",
  "cn": "抬頭看著星星，小女孩問爸爸宇宙是不是真的延伸到無限遠。",
  "cnMarked": "抬頭看著星星，小女孩問爸爸宇宙是不是真的延伸到【無限遠】。",
  "isHead": false,
  "level": null,
  "family": "infinite"
 },
 {
  "word": "finite",
  "answer": "finite",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "有限的",
  "en_def": "having a limit or end",
  "sentence": "Oil and coal are {{BLANK}} resources, so countries are investing in wind and solar power before they run out.",
  "cn": "石油和煤是有限的資源，所以各國在它們用完之前投資風力和太陽能。",
  "cnMarked": "石油和煤是【有限的】資源，所以各國在它們用完之前投資風力和太陽能。",
  "isHead": false,
  "level": 6,
  "family": "infinite"
 },
 {
  "word": "infrastructure",
  "answer": "infrastructure",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "基礎建設；基礎設施",
  "en_def": "the basic systems a country needs, such as roads, power, and water",
  "sentence": "The earthquake damaged the city's {{BLANK}} so badly that some areas had no water or electricity for two weeks.",
  "cn": "地震嚴重破壞了這座城市的基礎設施，有些地區兩個星期沒有水電。",
  "cnMarked": "地震嚴重破壞了這座城市的【基礎設施】，有些地區兩個星期沒有水電。",
  "isHead": true,
  "level": 5,
  "family": "infrastructure"
 },
 {
  "word": "structure",
  "answer": "structure",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "結構；建築物",
  "en_def": "the way something is built or organized; a building",
  "sentence": "The old wooden {{BLANK}} by the river has stood for over a hundred years, surviving dozens of typhoons.",
  "cn": "河邊那座古老的木造建築已經矗立了一百多年，撐過了數十次颱風。",
  "cnMarked": "河邊那座古老的木造【建築】已經矗立了一百多年，撐過了數十次颱風。",
  "isHead": false,
  "level": 3,
  "family": "infrastructure"
 },
 {
  "word": "structural",
  "answer": "structural",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "結構上的；結構性的",
  "en_def": "connected with the way something is built",
  "sentence": "Engineers found {{BLANK}} problems in the bridge, so it was closed to trucks until the repairs were finished.",
  "cn": "工程師發現橋樑有結構上的問題，所以在修復完成前禁止卡車通行。",
  "cnMarked": "工程師發現橋樑有【結構上的】問題，所以在修復完成前禁止卡車通行。",
  "isHead": false,
  "level": 5,
  "family": "infrastructure"
 },
 {
  "word": "transport infrastructure",
  "answer": "transport infrastructure",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "交通基礎建設",
  "en_def": "roads, railways, airports, and ports",
  "sentence": "Taiwan's excellent {{BLANK}} means you can travel from Taipei to Kaohsiung in less than two hours by high-speed rail.",
  "cn": "台灣優良的交通基礎建設意味著你搭高鐵從台北到高雄不到兩小時。",
  "cnMarked": "台灣優良的【交通基礎建設】意味著你搭高鐵從台北到高雄不到兩小時。",
  "isHead": false,
  "level": null,
  "family": "infrastructure"
 },
 {
  "word": "inherent",
  "answer": "inherent",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "固有的；內在的",
  "en_def": "existing as a natural and basic part of something",
  "sentence": "There is an {{BLANK}} risk in every sport, which is why players wear helmets and coaches teach safety first.",
  "cn": "每項運動都有固有的風險，這就是為什麼球員要戴頭盔、教練要先教安全。",
  "cnMarked": "每項運動都有【固有的】風險，這就是為什麼球員要戴頭盔、教練要先教安全。",
  "isHead": true,
  "level": 5,
  "family": "inherent"
 },
 {
  "word": "inherently",
  "answer": "inherently",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "本質上；固有地",
  "en_def": "in a way that is a natural and basic part of something",
  "sentence": "Social media is not {{BLANK}} bad, but spending five hours a day on it can harm your sleep and your grades.",
  "cn": "社群媒體本質上並不壞，但每天花五小時在上面可能傷害你的睡眠和成績。",
  "cnMarked": "社群媒體【本質上】並不壞，但每天花五小時在上面可能傷害你的睡眠和成績。",
  "isHead": false,
  "level": null,
  "family": "inherent"
 },
 {
  "word": "inherent in",
  "answer": "inherent in",
  "nblanks": 2,
  "pos": "adj.phr.",
  "cn_def": "…所固有的",
  "en_def": "naturally part of something",
  "sentence": "Some stress is {{BLANK}} any job, so learning to relax after work is just as important as working hard.",
  "cn": "任何工作都固有一些壓力，所以學會下班後放鬆和努力工作同樣重要。",
  "cnMarked": "任何工作都【固有】一些壓力，所以學會下班後放鬆和努力工作同樣重要。",
  "isHead": false,
  "level": null,
  "family": "inherent"
 },
 {
  "word": "inherit",
  "answer": "inherit",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "繼承；遺傳到",
  "en_def": "to receive money, property, or a feature from someone after they die",
  "sentence": "If nobody writes a will, the law decides who will {{BLANK}} the house, which can cause arguments in the family.",
  "cn": "如果沒有人立遺囑，法律會決定誰繼承房子，這可能在家族中引起爭執。",
  "cnMarked": "如果沒有人立遺囑，法律會決定誰【繼承】房子，這可能在家族中引起爭執。",
  "isHead": true,
  "level": 5,
  "family": "inherit"
 },
 {
  "word": "inheritance",
  "answer": "inheritance",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "遺產；繼承物",
  "en_def": "money or property received from someone who has died",
  "sentence": "She spent her whole {{BLANK}} on a trip around the world, saying that her grandfather would have wanted her to enjoy life.",
  "cn": "她把全部遺產花在環遊世界的旅行上，說她爺爺會希望她享受人生。",
  "cnMarked": "她把全部【遺產】花在環遊世界的旅行上，說她爺爺會希望她享受人生。",
  "isHead": false,
  "level": null,
  "family": "inherit"
 },
 {
  "word": "heir",
  "answer": "heir",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "繼承人",
  "en_def": "a person who will receive money or property when someone dies",
  "sentence": "The rich businessman has three children, but he has not yet decided which one will be the main {{BLANK}} to his company.",
  "cn": "這位富商有三個孩子，但他還沒決定哪一個會成為公司的主要繼承人。",
  "cnMarked": "這位富商有三個孩子，但他還沒決定哪一個會成為公司的主要【繼承人】。",
  "isHead": false,
  "level": 5,
  "family": "inherit"
 },
 {
  "word": "inherit ... from",
  "answer": "inherited",
  "nblanks": 1,
  "pos": "v.phr.",
  "cn_def": "從…遺傳到；從…繼承",
  "en_def": "to get a quality or thing from a parent or relative",
  "sentence": "I {{BLANK}} my curly hair from my father, but my love of music clearly comes from my mother's side.",
  "cn": "我的捲髮遺傳自我爸爸，但我對音樂的熱愛顯然來自媽媽那一邊。",
  "cnMarked": "我的捲髮【遺傳自】我爸爸，但我對音樂的熱愛顯然來自媽媽那一邊。",
  "isHead": false,
  "level": null,
  "family": "inherit"
 },
 {
  "word": "initiate",
  "answer": "initiate",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "開始；發起；創始",
  "en_def": "to make something start, such as a plan or process",
  "sentence": "The new principal decided to {{BLANK}} a reading program in which every class spends twenty minutes a day with a book.",
  "cn": "新校長決定發起一項閱讀計畫，每個班級每天花二十分鐘看書。",
  "cnMarked": "新校長決定【發起】一項閱讀計畫，每個班級每天花二十分鐘看書。",
  "isHead": true,
  "level": 5,
  "family": "initiate"
 },
 {
  "word": "initiative",
  "answer": "initiative",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "倡議；新措施；計畫",
  "en_def": "a new plan or action to solve a problem or reach a goal",
  "sentence": "The city's latest green {{BLANK}} gives every family a free tree to plant in front of their house.",
  "cn": "市政府最新的綠化計畫送每個家庭一棵免費的樹，種在自家門前。",
  "cnMarked": "市政府最新的綠化【計畫】送每個家庭一棵免費的樹，種在自家門前。",
  "isHead": true,
  "level": 5,
  "family": "initiate"
 },
 {
  "word": "initiative",
  "answer": "initiative",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "主動性；進取心",
  "en_def": "the ability to decide and act on your own without being told",
  "sentence": "Employers love workers who show {{BLANK}}, like the new assistant who fixed the printer before anyone asked.",
  "cn": "雇主喜歡展現主動性的員工，就像那位在沒人要求前就把印表機修好的新助理。",
  "cnMarked": "雇主喜歡展現【主動性】的員工，就像那位在沒人要求前就把印表機修好的新助理。",
  "isHead": false,
  "level": 5,
  "family": "initiate"
 },
 {
  "word": "take the initiative",
  "answer": "took the initiative",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "採取主動；帶頭",
  "en_def": "to be the first to act in order to make something happen",
  "sentence": "Nobody wanted to clean the messy classroom, so Amy {{BLANK}} and started picking up the papers on the floor.",
  "cn": "沒有人想打掃凌亂的教室，所以艾咪主動帶頭，開始撿起地上的紙。",
  "cnMarked": "沒有人想打掃凌亂的教室，所以艾咪【主動帶頭】，開始撿起地上的紙。",
  "isHead": false,
  "level": null,
  "family": "initiate"
 },
 {
  "word": "initial",
  "answer": "initial",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "最初的；開始的",
  "en_def": "happening at the beginning; first",
  "sentence": "My {{BLANK}} plan was to study medicine, but after one biology class I realized I preferred languages.",
  "cn": "我最初的計畫是讀醫學，但上了一堂生物課後，我發現自己更喜歡語言。",
  "cnMarked": "我【最初的】計畫是讀醫學，但上了一堂生物課後，我發現自己更喜歡語言。",
  "isHead": false,
  "level": 4,
  "family": "initiate"
 },
 {
  "word": "initially",
  "answer": "Initially",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "起初；最初",
  "en_def": "at the beginning; at first",
  "sentence": "{{BLANK}}, the students were afraid of the new teacher, but by October they were all laughing at her jokes.",
  "cn": "起初學生們很怕新老師，但到了十月，他們都在笑她講的笑話。",
  "cnMarked": "【起初】學生們很怕新老師，但到了十月，他們都在笑她講的笑話。",
  "isHead": false,
  "level": null,
  "family": "initiate"
 },
 {
  "word": "inject",
  "answer": "inject",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "注射；注入",
  "en_def": "to put a liquid, especially medicine, into the body with a needle",
  "sentence": "The nurse will {{BLANK}} the medicine into your arm, and you should feel better within a few hours.",
  "cn": "護士會把藥注射到你的手臂裡，幾小時內你應該會覺得好一些。",
  "cnMarked": "護士會把藥【注射】到你的手臂裡，幾小時內你應該會覺得好一些。",
  "isHead": true,
  "level": 5,
  "family": "inject"
 },
 {
  "word": "injection",
  "answer": "injection",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "注射；打針",
  "en_def": "the act of putting medicine into the body with a needle",
  "sentence": "The doctor gave the crying child an {{BLANK}} so quickly that it was over before he even noticed the needle.",
  "cn": "醫生很快地給哭鬧的孩子打了一針，在他注意到針頭之前就結束了。",
  "cnMarked": "醫生很快地給哭鬧的孩子打了一【針】，在他注意到針頭之前就結束了。",
  "isHead": true,
  "level": 5,
  "family": "inject"
 },
 {
  "word": "inject ... into",
  "answer": "inject",
  "nblanks": 1,
  "pos": "v.phr.",
  "cn_def": "把…注入…",
  "en_def": "to add something new, such as money or energy, to something",
  "sentence": "The government hopes to {{BLANK}} new life into the old town by opening a night market and a youth center.",
  "cn": "政府希望透過開設夜市和青年中心，為老城區注入新生命。",
  "cnMarked": "政府希望透過開設夜市和青年中心，為老城區【注入】新生命。",
  "isHead": false,
  "level": null,
  "family": "inject"
 },
 {
  "word": "give sb an injection",
  "answer": "gave me an injection",
  "nblanks": 4,
  "pos": "v.phr.",
  "cn_def": "給某人打針",
  "en_def": "to put medicine into someone's body with a needle",
  "sentence": "Before the trip to Africa, the clinic {{BLANK}} to protect me from a dangerous fever carried by mosquitoes.",
  "cn": "去非洲旅行前，診所給我打了一針，以預防蚊子傳播的危險熱病。",
  "cnMarked": "去非洲旅行前，診所【給我打了一針】，以預防蚊子傳播的危險熱病。",
  "isHead": false,
  "level": null,
  "family": "inject"
 },
 {
  "word": "inning",
  "answer": "inning",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "（棒球的）一局",
  "en_def": "one of the nine parts of a baseball game in which each team bats",
  "sentence": "Our team was losing by three runs, but we scored four in the final {{BLANK}} and won the game.",
  "cn": "我們的球隊落後三分，但在最後一局得了四分，贏得了比賽。",
  "cnMarked": "我們的球隊落後三分，但在最後【一局】得了四分，贏得了比賽。",
  "isHead": true,
  "level": 5,
  "family": "inning"
 },
 {
  "word": "the ninth inning",
  "answer": "the ninth inning",
  "nblanks": 3,
  "pos": "n.phr.",
  "cn_def": "第九局",
  "en_def": "the last regular part of a baseball game",
  "sentence": "The stadium went crazy when the young batter hit a home run in {{BLANK}} to tie the game.",
  "cn": "當那位年輕打者在第九局擊出全壘打追平比數時，整個球場都瘋狂了。",
  "cnMarked": "當那位年輕打者在【第九局】擊出全壘打追平比數時，整個球場都瘋狂了。",
  "isHead": false,
  "level": null,
  "family": "inning"
 },
 {
  "word": "extra innings",
  "answer": "extra innings",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "延長賽",
  "en_def": "additional parts of a baseball game played when the score is tied",
  "sentence": "The game went into {{BLANK}} after both teams scored five runs, and it did not end until nearly midnight.",
  "cn": "兩隊各得五分後，比賽進入延長賽，一直到將近午夜才結束。",
  "cnMarked": "兩隊各得五分後，比賽進入【延長賽】，一直到將近午夜才結束。",
  "isHead": false,
  "level": null,
  "family": "inning"
 },
 {
  "word": "innovation",
  "answer": "innovation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "創新；新發明",
  "en_def": "a new idea, method, or invention",
  "sentence": "The smartphone was the biggest {{BLANK}} of the last twenty years, and it changed how we shop, study, and talk.",
  "cn": "智慧型手機是過去二十年最大的創新，它改變了我們購物、學習和交談的方式。",
  "cnMarked": "智慧型手機是過去二十年最大的【創新】，它改變了我們購物、學習和交談的方式。",
  "isHead": true,
  "level": 5,
  "family": "innovation"
 },
 {
  "word": "innovative",
  "answer": "innovative",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "創新的；革新的",
  "en_def": "using new ideas and methods",
  "sentence": "The {{BLANK}} teacher lets her students make short films instead of writing reports about the books they read.",
  "cn": "這位創新的老師讓學生拍短片，而不是寫讀書報告。",
  "cnMarked": "這位【創新的】老師讓學生拍短片，而不是寫讀書報告。",
  "isHead": true,
  "level": 5,
  "family": "innovation"
 },
 {
  "word": "innovate",
  "answer": "innovate",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "創新；革新",
  "en_def": "to introduce new ideas or methods",
  "sentence": "Companies that fail to {{BLANK}} are soon left behind, just as many film camera makers were when digital cameras arrived.",
  "cn": "無法創新的公司很快就會被淘汰，就像數位相機出現時許多底片相機製造商的下場一樣。",
  "cnMarked": "無法【創新】的公司很快就會被淘汰，就像數位相機出現時許多底片相機製造商的下場一樣。",
  "isHead": false,
  "level": null,
  "family": "innovation"
 },
 {
  "word": "innovator",
  "answer": "innovator",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "創新者；革新者",
  "en_def": "a person who introduces new ideas or methods",
  "sentence": "Steve Jobs is remembered as a great {{BLANK}} because he turned complicated computers into products everyone could use.",
  "cn": "史蒂夫·賈伯斯被人們記住是一位偉大的創新者，因為他把複雜的電腦變成人人都能使用的產品。",
  "cnMarked": "史蒂夫·賈伯斯被人們記住是一位偉大的【創新者】，因為他把複雜的電腦變成人人都能使用的產品。",
  "isHead": false,
  "level": null,
  "family": "innovation"
 },
 {
  "word": "inquiry",
  "answer": "inquiry",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "詢問；調查",
  "en_def": "a question asking for information; an official investigation",
  "sentence": "The hotel received an {{BLANK}} from a school that wanted to book forty rooms for a trip in July.",
  "cn": "飯店收到一所學校的詢問，他們想為七月的旅行預訂四十個房間。",
  "cnMarked": "飯店收到一所學校的【詢問】，他們想為七月的旅行預訂四十個房間。",
  "isHead": true,
  "level": 5,
  "family": "inquiry"
 },
 {
  "word": "inquire",
  "answer": "inquire",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "詢問；打聽",
  "en_def": "to ask for information",
  "sentence": "I called the station to {{BLANK}} whether the last train to Taichung had been canceled because of the typhoon.",
  "cn": "我打電話到車站詢問最後一班到台中的火車是否因颱風取消了。",
  "cnMarked": "我打電話到車站【詢問】最後一班到台中的火車是否因颱風取消了。",
  "isHead": false,
  "level": 6,
  "family": "inquiry"
 },
 {
  "word": "inquire about",
  "answer": "inquire about",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "詢問關於…",
  "en_def": "to ask for information about something",
  "sentence": "Several parents came to the office to {{BLANK}} the summer camp, so the school added two more sessions.",
  "cn": "好幾位家長來辦公室詢問夏令營的事，所以學校增加了兩個梯次。",
  "cnMarked": "好幾位家長來辦公室【詢問】夏令營的事，所以學校增加了兩個梯次。",
  "isHead": false,
  "level": null,
  "family": "inquiry"
 },
 {
  "word": "make inquiries",
  "answer": "made inquiries",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "打聽；查詢",
  "en_def": "to try to find out information by asking questions",
  "sentence": "The police {{BLANK}} in the neighborhood, and a shop owner finally remembered seeing the missing boy.",
  "cn": "警方在附近打聽，一位店主終於想起曾看見那個失蹤的男孩。",
  "cnMarked": "警方在附近【打聽】，一位店主終於想起曾看見那個失蹤的男孩。",
  "isHead": false,
  "level": null,
  "family": "inquiry"
 },
 {
  "word": "insane",
  "answer": "insane",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "瘋狂的；精神失常的",
  "en_def": "seriously mentally ill; very foolish or crazy",
  "sentence": "It would be {{BLANK}} to go hiking in the mountains today, because the weather report says a typhoon is coming tonight.",
  "cn": "今天去山上健行是瘋狂的，因為氣象報告說今晚颱風要來。",
  "cnMarked": "今天去山上健行是【瘋狂的】，因為氣象報告說今晚颱風要來。",
  "isHead": true,
  "level": 5,
  "family": "insane"
 },
 {
  "word": "insanity",
  "answer": "insanity",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "瘋狂；精神失常",
  "en_def": "the state of being seriously mentally ill; extreme foolishness",
  "sentence": "Spending your whole month's salary on one pair of shoes is pure {{BLANK}}, no matter how beautiful they are.",
  "cn": "把整個月的薪水花在一雙鞋上簡直是瘋狂，不管它們有多漂亮。",
  "cnMarked": "把整個月的薪水花在一雙鞋上簡直是【瘋狂】，不管它們有多漂亮。",
  "isHead": false,
  "level": null,
  "family": "insane"
 },
 {
  "word": "insanely",
  "answer": "insanely",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "極度地；瘋狂地",
  "en_def": "extremely; in a crazy way",
  "sentence": "The new roller coaster is {{BLANK}} fast, and my friend screamed from the first second to the last.",
  "cn": "新的雲霄飛車極度快速，我朋友從第一秒尖叫到最後一秒。",
  "cnMarked": "新的雲霄飛車【極度】快速，我朋友從第一秒尖叫到最後一秒。",
  "isHead": false,
  "level": null,
  "family": "insane"
 },
 {
  "word": "sane",
  "answer": "sane",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "神智正常的；理智的",
  "en_def": "having a healthy mind; sensible",
  "sentence": "No {{BLANK}} person would leave a small child alone at home all night, so the neighbors called the police.",
  "cn": "沒有理智的人會整夜把小孩單獨留在家裡，所以鄰居報了警。",
  "cnMarked": "沒有【理智的】人會整夜把小孩單獨留在家裡，所以鄰居報了警。",
  "isHead": false,
  "level": null,
  "family": "insane"
 },
 {
  "word": "insight",
  "answer": "insight",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "洞察力；深刻的了解",
  "en_def": "a clear and deep understanding of something",
  "sentence": "Talking with the old fisherman gave me real {{BLANK}} into how much the sea has changed in the last fifty years.",
  "cn": "和老漁夫聊天讓我深刻了解到過去五十年海洋改變了多少。",
  "cnMarked": "和老漁夫聊天讓我【深刻了解】到過去五十年海洋改變了多少。",
  "isHead": true,
  "level": 5,
  "family": "insight"
 },
 {
  "word": "insightful",
  "answer": "insightful",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "有洞察力的；見解深刻的",
  "en_def": "showing a clear and deep understanding",
  "sentence": "Her {{BLANK}} comments on the novel helped the whole class understand why the main character made such a strange choice.",
  "cn": "她對這部小說見解深刻的評論，幫助全班理解主角為何做出如此奇怪的選擇。",
  "cnMarked": "她對這部小說【見解深刻的】評論，幫助全班理解主角為何做出如此奇怪的選擇。",
  "isHead": false,
  "level": null,
  "family": "insight"
 },
 {
  "word": "gain insight into",
  "answer": "gained insight into",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "深入了解…",
  "en_def": "to come to understand something clearly",
  "sentence": "By living with a host family for a month, the students {{BLANK}} daily life in Japan that no textbook could give.",
  "cn": "透過和寄宿家庭住一個月，學生們深入了解了課本無法提供的日本日常生活。",
  "cnMarked": "透過和寄宿家庭住一個月，學生們【深入了解】了課本無法提供的日本日常生活。",
  "isHead": false,
  "level": null,
  "family": "insight"
 },
 {
  "word": "installation",
  "answer": "installation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "安裝；裝設",
  "en_def": "the act of putting equipment or software in place so it can be used",
  "sentence": "The {{BLANK}} of the new air conditioners in every classroom took the workers three days during the summer break.",
  "cn": "暑假期間，工人花了三天在每間教室安裝新冷氣。",
  "cnMarked": "暑假期間，工人花了三天在每間教室【安裝】新冷氣。",
  "isHead": true,
  "level": 5,
  "family": "installation"
 },
 {
  "word": "install",
  "answer": "install",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "安裝",
  "en_def": "to put equipment or software in place so it can be used",
  "sentence": "My father asked me to {{BLANK}} the new printer because he could not understand the instructions in the box.",
  "cn": "我爸爸要我安裝新印表機，因為他看不懂盒子裡的說明書。",
  "cnMarked": "我爸爸要我【安裝】新印表機，因為他看不懂盒子裡的說明書。",
  "isHead": false,
  "level": 4,
  "family": "installation"
 },
 {
  "word": "art installation",
  "answer": "art installation",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "裝置藝術",
  "en_def": "a large work of art built in a space for people to walk around",
  "sentence": "The {{BLANK}} in the park is made of ten thousand plastic bottles, and it reminds visitors how much waste we produce.",
  "cn": "公園裡的裝置藝術由一萬個塑膠瓶製成，提醒參觀者我們製造了多少垃圾。",
  "cnMarked": "公園裡的【裝置藝術】由一萬個塑膠瓶製成，提醒參觀者我們製造了多少垃圾。",
  "isHead": false,
  "level": null,
  "family": "installation"
 },
 {
  "word": "institute",
  "answer": "institute",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "學院；研究所；機構",
  "en_def": "an organization for research, education, or a special purpose",
  "sentence": "After college, she joined a research {{BLANK}} in Hsinchu, where scientists are developing faster computer chips.",
  "cn": "大學畢業後，她進入新竹的一家研究機構，那裡的科學家正在開發更快的電腦晶片。",
  "cnMarked": "大學畢業後，她進入新竹的一家研究【機構】，那裡的科學家正在開發更快的電腦晶片。",
  "isHead": true,
  "level": 5,
  "family": "institute"
 },
 {
  "word": "institution",
  "answer": "institution",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "機構；制度",
  "en_def": "a large important organization such as a university, bank, or hospital",
  "sentence": "The university is the oldest educational {{BLANK}} in the city, and it has trained doctors for over one hundred years.",
  "cn": "這所大學是本市最古老的教育機構，培養醫生已有一百多年。",
  "cnMarked": "這所大學是本市最古老的教育【機構】，培養醫生已有一百多年。",
  "isHead": true,
  "level": 5,
  "family": "institute"
 },
 {
  "word": "institute",
  "answer": "institute",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "制定；開始實施",
  "en_def": "to introduce or start a system, rule, or policy",
  "sentence": "The school decided to {{BLANK}} a new rule that bans sugary drinks from the campus starting next semester.",
  "cn": "學校決定制定一項新規定，從下學期開始禁止含糖飲料進入校園。",
  "cnMarked": "學校決定【制定】一項新規定，從下學期開始禁止含糖飲料進入校園。",
  "isHead": false,
  "level": 5,
  "family": "institute"
 },
 {
  "word": "institutional",
  "answer": "institutional",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "機構的；制度上的",
  "en_def": "connected with a large organization or system",
  "sentence": "The report found {{BLANK}} problems in the hospital, such as poor record keeping and too few night nurses.",
  "cn": "報告發現這家醫院有制度上的問題，例如紀錄保存不佳和夜班護士太少。",
  "cnMarked": "報告發現這家醫院有【制度上的】問題，例如紀錄保存不佳和夜班護士太少。",
  "isHead": false,
  "level": null,
  "family": "institute"
 },
 {
  "word": "research institute",
  "answer": "research institute",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "研究機構；研究所",
  "en_def": "an organization where scientists study a subject",
  "sentence": "The {{BLANK}} on the coast studies how warmer oceans are affecting the fish that local families depend on.",
  "cn": "海岸邊的研究機構研究暖化的海洋如何影響當地家庭賴以為生的魚類。",
  "cnMarked": "海岸邊的【研究機構】研究暖化的海洋如何影響當地家庭賴以為生的魚類。",
  "isHead": false,
  "level": null,
  "family": "institute"
 },
 {
  "word": "financial institution",
  "answer": "financial institution",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "金融機構",
  "en_def": "a bank or other organization that deals with money",
  "sentence": "Before you choose a {{BLANK}} for your savings, compare the interest rates and fees of at least three banks.",
  "cn": "在為你的存款選擇金融機構之前，先比較至少三家銀行的利率和手續費。",
  "cnMarked": "在為你的存款選擇【金融機構】之前，先比較至少三家銀行的利率和手續費。",
  "isHead": false,
  "level": null,
  "family": "institute"
 }
];
const MCQS = [
 {
  "q": "The new history textbook does not only have words and pictures. The writers decided to ______ short videos and online quizzes so that students can learn in different ways.",
  "options": [
   "inject",
   "incorporate",
   "inherit",
   "infect"
  ],
  "answer": 1,
  "vocabIndex": 0
 },
 {
  "q": "I could not find the chapter about volcanoes in this thick science book. Then my teacher told me to look at the ______ at the back, which lists every topic in order.",
  "options": [
   "injection",
   "insight",
   "index",
   "inning"
  ],
  "answer": 2,
  "vocabIndex": 4
 },
 {
  "q": "We asked the waiter three times for water, but he just looked away and kept playing with his phone. His ______ attitude made us decide never to return.",
  "options": [
   "infinite",
   "indifferent",
   "indispensable",
   "innovative"
  ],
  "answer": 1,
  "vocabIndex": 8
 },
 {
  "q": "The Formosan black bear is found only in the mountains of Taiwan and nowhere else. Because it is ______ to the island, the government works hard to protect it.",
  "options": [
   "indigenous",
   "initial",
   "insane",
   "infected"
  ],
  "answer": 0,
  "vocabIndex": 12
 },
 {
  "q": "Farmers cannot grow rice without water, and fishermen cannot work without boats. For doctors and nurses, a clean and quiet hospital is just as ______ to their daily work.",
  "options": [
   "inherent",
   "indifferent",
   "inevitable",
   "indispensable"
  ],
  "answer": 3,
  "vocabIndex": 15
 },
 {
  "q": "During the week, Lisa eats vegetables and runs every morning before school. On Sundays, however, she allows herself to ______ in a big bowl of ice cream.",
  "options": [
   "install",
   "indulge",
   "inquire",
   "innovate"
  ],
  "answer": 1,
  "vocabIndex": 19
 },
 {
  "q": "It rained heavily for five days, and the river rose higher every hour. By Friday afternoon, everyone in the small town knew that a flood was ______.",
  "options": [
   "insightful",
   "indigenous",
   "inevitable",
   "institutional"
  ],
  "answer": 2,
  "vocabIndex": 23
 },
 {
  "q": "If you have the flu, please do not come to school until you feel better. You could easily ______ your classmates just by coughing near them.",
  "options": [
   "indulge",
   "infect",
   "initiate",
   "inherit"
  ],
  "answer": 1,
  "vocabIndex": 26
 },
 {
  "q": "My little brother asks \"why\" about everything from morning until night. My mother says that raising him requires ______ patience, because the questions never stop all day.",
  "options": [
   "finite",
   "indifferent",
   "insane",
   "infinite"
  ],
  "answer": 3,
  "vocabIndex": 30
 },
 {
  "q": "The earthquake broke roads, bridges, water pipes, and power lines all over the city. Repairing the ______ will take the government at least two years and a lot of money.",
  "options": [
   "infrastructure",
   "innovator",
   "inheritance",
   "inquiry"
  ],
  "answer": 0,
  "vocabIndex": 34
 },
 {
  "q": "Riding a bike on a busy road always carries some danger, no matter how careful you are. Because this risk is ______ in cycling, a helmet is a must.",
  "options": [
   "initial",
   "infectious",
   "indulgent",
   "inherent"
  ],
  "answer": 3,
  "vocabIndex": 38
 },
 {
  "q": "When Grandpa died, he left his small bookstore to my mother in his will. She decided to ______ the shop and keep it open for the whole neighborhood.",
  "options": [
   "inquire",
   "index",
   "inherit",
   "inject"
  ],
  "answer": 2,
  "vocabIndex": 41
 },
 {
  "q": "The students complained that the school had no recycling bins at all. So the principal decided to ______ a program that puts three bins in every classroom.",
  "options": [
   "initiate",
   "dispense",
   "infect",
   "indulge"
  ],
  "answer": 0,
  "vocabIndex": 45
 },
 {
  "q": "Nobody told Jack to help, but he saw the old lady struggling with her bags and carried them home for her. His teacher praised him for showing ______.",
  "options": [
   "inheritance",
   "insanity",
   "infinity",
   "initiative"
  ],
  "answer": 3,
  "vocabIndex": 46
 },
 {
  "q": "The patient needs this medicine in her blood right away, and pills would take too long. The nurse will ______ it into her arm with a thin needle.",
  "options": [
   "inject",
   "innovate",
   "institute",
   "inherit"
  ],
  "answer": 0,
  "vocabIndex": 51
 },
 {
  "q": "Before traveling to the rainforest, you must visit a clinic to protect yourself from a dangerous fever. One ______ in the arm keeps you safe for ten years.",
  "options": [
   "inning",
   "institution",
   "injection",
   "indifference"
  ],
  "answer": 2,
  "vocabIndex": 52
 },
 {
  "q": "Our baseball team was losing three to one with only one chance left to bat. Then Tom hit a home run in the final ______, and we won the game.",
  "options": [
   "inning",
   "insight",
   "infection",
   "index"
  ],
  "answer": 0,
  "vocabIndex": 55
 },
 {
  "q": "Twenty years ago, nobody could imagine carrying a computer, a camera, and a phone in one pocket. The smartphone was a huge ______ that changed daily life.",
  "options": [
   "inheritance",
   "installation",
   "innovation",
   "inquiry"
  ],
  "answer": 2,
  "vocabIndex": 58
 },
 {
  "q": "Instead of boring tests, our science teacher lets us build small robots to show what we have learned. Everyone in our class loves her ______ way of teaching.",
  "options": [
   "infected",
   "innovative",
   "indigenous",
   "inevitable"
  ],
  "answer": 1,
  "vocabIndex": 59
 },
 {
  "q": "The hotel received a phone call from a school asking about prices for forty rooms in July. The manager answered the ______ and sent them a special offer.",
  "options": [
   "injection",
   "infinity",
   "inning",
   "inquiry"
  ],
  "answer": 3,
  "vocabIndex": 62
 },
 {
  "q": "The weather report says a strong typhoon will hit the island tonight with huge waves. Only an ______ person would go surfing at the beach this evening.",
  "options": [
   "insane",
   "indispensable",
   "infinite",
   "institutional"
  ],
  "answer": 0,
  "vocabIndex": 66
 },
 {
  "q": "Living with a farming family for a month taught me more than any book ever could. I gained real ______ into how hard it is to grow the rice we eat.",
  "options": [
   "inning",
   "insight",
   "innovator",
   "infrastructure"
  ],
  "answer": 1,
  "vocabIndex": 70
 },
 {
  "q": "The school bought new air conditioners for every classroom this summer. Workers spent three whole days on the ______, so the rooms were cool when school began.",
  "options": [
   "inevitability",
   "inheritance",
   "indulgence",
   "installation"
  ],
  "answer": 3,
  "vocabIndex": 73
 },
 {
  "q": "After finishing her degree, Mei joined a research ______ in Hsinchu where scientists design computer chips. She says every day there feels like solving a puzzle.",
  "options": [
   "insight",
   "institute",
   "inning",
   "injection"
  ],
  "answer": 1,
  "vocabIndex": 76
 },
 {
  "q": "This university was founded in 1899 and is the oldest in the city. As the most respected educational ______ in the area, it attracts students from all over Asia.",
  "options": [
   "institution",
   "innovation",
   "infrastructure",
   "inquiry"
  ],
  "answer": 0,
  "vocabIndex": 77
 },
 {
  "q": "Peter fell off his bike and got a deep cut on his knee, but he did not clean it. Two days later, the wound was red and swollen with a bad ______.",
  "options": [
   "insanity",
   "initiative",
   "infection",
   "indulgence"
  ],
  "answer": 2,
  "vocabIndex": 27
 },
 {
  "q": "My grandmother bought a new washing machine, but it is still sitting in its box. She is waiting for my uncle to come and ______ it this weekend.",
  "options": [
   "inherit",
   "install",
   "inject",
   "indulge"
  ],
  "answer": 1,
  "vocabIndex": 74
 },
 {
  "q": "Our train to Hualien might be canceled because of the typhoon, but nobody is sure. I will call the station to ______ whether it is still running tonight.",
  "options": [
   "initiate",
   "infect",
   "inquire",
   "institute"
  ],
  "answer": 2,
  "vocabIndex": 63
 },
 {
  "q": "If you keep eating fried chicken and never exercise, your health will suffer sooner or later. Such habits ______ lead to problems, no matter how young you are.",
  "options": [
   "inevitably",
   "infinitely",
   "insanely",
   "indifferently"
  ],
  "answer": 0,
  "vocabIndex": 24
 },
 {
  "q": "Twenty years ago this company made the best film cameras in the world, but it refused to change. Companies that do not ______ are soon left behind by newer ones.",
  "options": [
   "inherit",
   "indulge",
   "infect",
   "innovate"
  ],
  "answer": 3,
  "vocabIndex": 60
 }
];
const LOOKUP = {};
VOCAB.forEach(v => { const key = v.word.toLowerCase(); const sense = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def };
  if (LOOKUP[key]) LOOKUP[key].combined.push(sense); else LOOKUP[key] = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def, combined: [sense] }; });
const EXTRA_GLOSSES = {};