// 學測6000字 Level 5 Group 15 (exaggeration-fabulous) — word-family edition
const QUIZ_CONFIG = {
  groupName: "6000字 L5 Group 15 - exaggeration – fabulous (word family)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};
const VOCAB = [
 {
  "word": "exaggeration",
  "answer": "exaggeration",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "誇張；誇大",
  "en_def": "a statement that makes something seem bigger, better, or worse than it really is",
  "sentence": "When my brother says he caught a fish as big as a car, everyone knows it is an {{BLANK}}, because the lake only has small fish.",
  "cn": "當我哥哥說他釣到一條跟汽車一樣大的魚時，大家都知道那是誇張，因為那座湖裡只有小魚。",
  "cnMarked": "當我哥哥說他釣到一條跟汽車一樣大的魚時，大家都知道那是【誇張】，因為那座湖裡只有小魚。",
  "isHead": true,
  "level": 5,
  "family": "exaggeration"
 },
 {
  "word": "exaggerate",
  "answer": "exaggerate",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "誇大；誇張",
  "en_def": "to make something seem bigger, better, or worse than it really is",
  "sentence": "Please do not {{BLANK}} how long the trip took; it was two hours, not five, and we even stopped for lunch on the way.",
  "cn": "請不要誇大這趟旅程花了多久；是兩小時，不是五小時，而且我們途中還停下來吃午餐。",
  "cnMarked": "請不要【誇大】這趟旅程花了多久；是兩小時，不是五小時，而且我們途中還停下來吃午餐。",
  "isHead": false,
  "level": 4,
  "family": "exaggeration"
 },
 {
  "word": "exaggerated",
  "answer": "exaggerated",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "誇大的；誇張的",
  "en_def": "made to seem bigger or more important than it really is",
  "sentence": "The ad makes {{BLANK}} claims about the cream, saying it can make you look ten years younger in only one week.",
  "cn": "這則廣告對這款乳霜做了誇大的宣稱，說它能讓你在短短一週內看起來年輕十歲。",
  "cnMarked": "這則廣告對這款乳霜做了【誇大的】宣稱，說它能讓你在短短一週內看起來年輕十歲。",
  "isHead": false,
  "level": null,
  "family": "exaggeration"
 },
 {
  "word": "exceed",
  "answer": "exceed",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "超過；超出",
  "en_def": "to be greater than a number or amount; to go beyond a limit",
  "sentence": "The number of visitors to the night market this weekend is expected to {{BLANK}} fifty thousand because of the long holiday.",
  "cn": "由於連假的關係，這個週末夜市的遊客人數預計會超過五萬人。",
  "cnMarked": "由於連假的關係，這個週末夜市的遊客人數預計會【超過】五萬人。",
  "isHead": true,
  "level": 5,
  "family": "exceed"
 },
 {
  "word": "excessive",
  "answer": "excessive",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "過多的；過度的",
  "en_def": "more than is necessary, normal, or reasonable",
  "sentence": "Doctors warn that {{BLANK}} use of smartphones at night can hurt your eyes and make it hard to fall asleep.",
  "cn": "醫生警告，夜間過度使用智慧型手機會傷害眼睛，並讓人難以入睡。",
  "cnMarked": "醫生警告，夜間【過度】使用智慧型手機會傷害眼睛，並讓人難以入睡。",
  "isHead": true,
  "level": 5,
  "family": "exceed"
 },
 {
  "word": "excess",
  "answer": "excess",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "過量；超過的部分",
  "en_def": "an amount that is more than what is needed or allowed",
  "sentence": "The airline charges extra money for any {{BLANK}} baggage, so make sure your suitcase weighs less than twenty-three kilograms.",
  "cn": "航空公司對任何超重行李都會加收費用，所以請確認你的行李箱不到二十三公斤。",
  "cnMarked": "航空公司對任何【超重】行李都會加收費用，所以請確認你的行李箱不到二十三公斤。",
  "isHead": false,
  "level": 6,
  "family": "exceed"
 },
 {
  "word": "excessively",
  "answer": "excessively",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "過度地；過分地",
  "en_def": "too much; more than is reasonable",
  "sentence": "My grandmother worries {{BLANK}} about my health, so she calls me every evening to ask if I have eaten enough vegetables.",
  "cn": "我奶奶過度擔心我的健康，所以她每天晚上都打電話問我有沒有吃夠蔬菜。",
  "cnMarked": "我奶奶【過度】擔心我的健康，所以她每天晚上都打電話問我有沒有吃夠蔬菜。",
  "isHead": false,
  "level": null,
  "family": "exceed"
 },
 {
  "word": "exceed the speed limit",
  "answer": "exceed the speed limit",
  "nblanks": 4,
  "pos": "v.phr.",
  "cn_def": "超速",
  "en_def": "to drive faster than the law allows",
  "sentence": "The police officer stopped my uncle because he had been caught on camera trying to {{BLANK}} on the highway near the airport.",
  "cn": "警察攔下我叔叔，因為他在機場附近的高速公路上被相機拍到超速。",
  "cnMarked": "警察攔下我叔叔，因為他在機場附近的高速公路上被相機拍到【超速】。",
  "isHead": false,
  "level": null,
  "family": "exceed"
 },
 {
  "word": "exceptional",
  "answer": "exceptional",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "卓越的；傑出的；異常的",
  "en_def": "unusually good; much better than usual",
  "sentence": "Only students with {{BLANK}} grades in both math and science are invited to join the special program at the national university.",
  "cn": "只有數學和自然都拿到卓越成績的學生，才會受邀參加國立大學的特別課程。",
  "cnMarked": "只有數學和自然都拿到【卓越】成績的學生，才會受邀參加國立大學的特別課程。",
  "isHead": true,
  "level": 5,
  "family": "exceptional"
 },
 {
  "word": "exceptionally",
  "answer": "exceptionally",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "格外地；異常地",
  "en_def": "unusually; to a much greater degree than normal",
  "sentence": "It was an {{BLANK}} cold winter last year, and snow even fell on some low mountains near Taipei for the first time in decades.",
  "cn": "去年冬天異常寒冷，台北附近一些低矮的山上甚至幾十年來第一次下雪。",
  "cnMarked": "去年冬天【異常】寒冷，台北附近一些低矮的山上甚至幾十年來第一次下雪。",
  "isHead": false,
  "level": null,
  "family": "exceptional"
 },
 {
  "word": "exception",
  "answer": "exception",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "例外",
  "en_def": "a person or thing that is not included in a rule or group",
  "sentence": "Everyone must wear a uniform to school, and the only {{BLANK}} is on Fridays, when students can wear their club T-shirts.",
  "cn": "每個人上學都必須穿制服，唯一的例外是星期五，那天學生可以穿社團 T 恤。",
  "cnMarked": "每個人上學都必須穿制服，唯一的【例外】是星期五，那天學生可以穿社團 T 恤。",
  "isHead": false,
  "level": 4,
  "family": "exceptional"
 },
 {
  "word": "except",
  "answer": "except",
  "nblanks": 1,
  "pos": "prep.",
  "cn_def": "除了…之外",
  "en_def": "not including; apart from",
  "sentence": "The small restaurant is open every day {{BLANK}} Monday, so we will have to go there on Tuesday evening instead.",
  "cn": "這家小餐廳除了星期一以外每天都營業，所以我們得改在星期二晚上去。",
  "cnMarked": "這家小餐廳【除了】星期一以外每天都營業，所以我們得改在星期二晚上去。",
  "isHead": false,
  "level": 1,
  "family": "exceptional"
 },
 {
  "word": "exclaim",
  "answer": "exclaim",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "驚呼；大聲說",
  "en_def": "to say something suddenly and loudly because you are surprised, excited, or angry",
  "sentence": "\"Look at the size of that cake!\" the little girl began to {{BLANK}} when her mother opened the box on her birthday.",
  "cn": "「看看那個蛋糕有多大！」小女孩在生日那天看到媽媽打開盒子時驚呼起來。",
  "cnMarked": "「看看那個蛋糕有多大！」小女孩在生日那天看到媽媽打開盒子時【驚呼】起來。",
  "isHead": true,
  "level": 5,
  "family": "exclaim"
 },
 {
  "word": "exclamation",
  "answer": "exclamation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "驚呼；感嘆",
  "en_def": "a short sound or words said suddenly to show surprise, pain, or excitement",
  "sentence": "There was an {{BLANK}} of joy from the crowd when the home team scored the winning goal in the last minute.",
  "cn": "當主隊在最後一分鐘踢進致勝球時，人群中響起一陣喜悅的驚呼。",
  "cnMarked": "當主隊在最後一分鐘踢進致勝球時，人群中響起一陣喜悅的【驚呼】。",
  "isHead": false,
  "level": null,
  "family": "exclaim"
 },
 {
  "word": "exclamation mark",
  "answer": "exclamation mark",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "驚嘆號",
  "en_def": "the sign (!) used after a sentence to show strong feeling",
  "sentence": "In formal writing, you should use an {{BLANK}} very rarely, because too many of them make your essay look childish.",
  "cn": "在正式寫作中，你應該很少使用驚嘆號，因為太多驚嘆號會讓你的文章看起來很幼稚。",
  "cnMarked": "在正式寫作中，你應該很少使用【驚嘆號】，因為太多驚嘆號會讓你的文章看起來很幼稚。",
  "isHead": false,
  "level": null,
  "family": "exclaim"
 },
 {
  "word": "exclude",
  "answer": "exclude",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "排除；不包括",
  "en_def": "to keep someone or something out; to not include",
  "sentence": "The coach decided to {{BLANK}} two players from the final game because they had missed practice three times without any reason.",
  "cn": "教練決定將兩名球員排除在決賽之外，因為他們無故缺席了三次練習。",
  "cnMarked": "教練決定將兩名球員【排除】在決賽之外，因為他們無故缺席了三次練習。",
  "isHead": true,
  "level": 5,
  "family": "exclude"
 },
 {
  "word": "exclusive",
  "answer": "exclusive",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "獨家的；專屬的",
  "en_def": "only for a particular group of people; not shared with others",
  "sentence": "The hotel has an {{BLANK}} beach that only its guests can use, so it is never crowded even in the middle of summer.",
  "cn": "這家飯店有一片只有房客能使用的專屬海灘，所以即使在盛夏也從不擁擠。",
  "cnMarked": "這家飯店有一片只有房客能使用的【專屬】海灘，所以即使在盛夏也從不擁擠。",
  "isHead": true,
  "level": 5,
  "family": "exclude"
 },
 {
  "word": "exclude sb from",
  "answer": "exclude her from",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "把某人排除在…之外",
  "en_def": "to stop someone from taking part in something",
  "sentence": "It is unfair to {{BLANK}} the game just because she is new and does not know all the rules yet.",
  "cn": "只因為她是新來的、還不懂所有規則，就把她排除在遊戲之外是不公平的。",
  "cnMarked": "只因為她是新來的、還不懂所有規則，就【把她排除在】遊戲【之外】是不公平的。",
  "isHead": false,
  "level": null,
  "family": "exclude"
 },
 {
  "word": "exclusion",
  "answer": "exclusion",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "排除；排斥",
  "en_def": "the act of keeping someone or something out",
  "sentence": "The {{BLANK}} of younger students from the school trip made many of them cry, so the principal promised a special trip just for them.",
  "cn": "校外教學排除了低年級學生，讓許多人哭了，所以校長承諾會為他們安排一趟專屬的旅行。",
  "cnMarked": "校外教學【排除】了低年級學生，讓許多人哭了，所以校長承諾會為他們安排一趟專屬的旅行。",
  "isHead": false,
  "level": 6,
  "family": "exclude"
 },
 {
  "word": "exclusively",
  "answer": "exclusively",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "僅僅；專門地",
  "en_def": "only; and nothing or no one else",
  "sentence": "This small shop sells {{BLANK}} handmade chocolate, so you will not find any candy or cookies on its shelves.",
  "cn": "這家小店只賣手工巧克力，所以你在它的架上找不到任何糖果或餅乾。",
  "cnMarked": "這家小店【只】賣手工巧克力，所以你在它的架上找不到任何糖果或餅乾。",
  "isHead": false,
  "level": null,
  "family": "exclude"
 },
 {
  "word": "execute",
  "answer": "execute",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "執行；實行",
  "en_def": "to do or carry out a plan, order, or piece of work",
  "sentence": "It is easy to make a plan, but it takes hard work and good teamwork to {{BLANK}} it successfully from beginning to end.",
  "cn": "制定計畫很容易，但要從頭到尾成功執行它，需要努力和良好的團隊合作。",
  "cnMarked": "制定計畫很容易，但要從頭到尾成功【執行】它，需要努力和良好的團隊合作。",
  "isHead": true,
  "level": 5,
  "family": "execute"
 },
 {
  "word": "execute",
  "answer": "execute",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "處決；處死",
  "en_def": "to kill someone as a legal punishment for a crime",
  "sentence": "In the past, kings had the power to {{BLANK}} anyone who disagreed with them, so most people were afraid to speak freely.",
  "cn": "過去，國王有權處決任何與他意見不合的人，所以大多數人都不敢自由發言。",
  "cnMarked": "過去，國王有權【處決】任何與他意見不合的人，所以大多數人都不敢自由發言。",
  "isHead": true,
  "level": 5,
  "family": "execute"
 },
 {
  "word": "execution",
  "answer": "execution",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "執行；處決",
  "en_def": "the carrying out of a plan; the killing of someone as a punishment",
  "sentence": "The idea for the school festival was wonderful, but its {{BLANK}} was poor because nobody checked the weather or booked the equipment.",
  "cn": "校慶的構想很棒，但執行得很差，因為沒有人查天氣，也沒有人預訂設備。",
  "cnMarked": "校慶的構想很棒，但【執行】得很差，因為沒有人查天氣，也沒有人預訂設備。",
  "isHead": true,
  "level": 5,
  "family": "execute"
 },
 {
  "word": "executive",
  "answer": "executive",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "主管；高階經理",
  "en_def": "a senior manager in a company or organization",
  "sentence": "My aunt is a top {{BLANK}} at a bank, so she travels to Hong Kong and Singapore almost every month for important meetings.",
  "cn": "我阿姨是一家銀行的高階主管，所以她幾乎每個月都要到香港和新加坡參加重要會議。",
  "cnMarked": "我阿姨是一家銀行的高階【主管】，所以她幾乎每個月都要到香港和新加坡參加重要會議。",
  "isHead": false,
  "level": 5,
  "family": "execute"
 },
 {
  "word": "executive",
  "answer": "executive",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "行政的；管理的",
  "en_def": "connected with managing a company or making important decisions",
  "sentence": "The company's {{BLANK}} team meets every Monday morning to decide which new products should be sold next year.",
  "cn": "公司的管理團隊每週一早上開會，決定明年要販售哪些新產品。",
  "cnMarked": "公司的【管理】團隊每週一早上開會，決定明年要販售哪些新產品。",
  "isHead": false,
  "level": 5,
  "family": "execute"
 },
 {
  "word": "chief executive officer",
  "answer": "chief executive officer",
  "nblanks": 3,
  "pos": "n.phr.",
  "cn_def": "執行長",
  "en_def": "the person with the most power in a company (CEO)",
  "sentence": "At only thirty-five, she became the {{BLANK}} of the company and quickly doubled its sales by opening stores in Japan.",
  "cn": "她在三十五歲時就成為公司的執行長，並透過在日本開店迅速讓銷售額翻倍。",
  "cnMarked": "她在三十五歲時就成為公司的【執行長】，並透過在日本開店迅速讓銷售額翻倍。",
  "isHead": false,
  "level": null,
  "family": "execute"
 },
 {
  "word": "exile",
  "answer": "exile",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "流放；流亡；流亡者",
  "en_def": "the state of being forced to live away from your own country; a person in this state",
  "sentence": "After the war, the king spent twenty years in {{BLANK}} in France and never saw his home country again before he died.",
  "cn": "戰後，國王在法國流亡了二十年，去世前再也沒有見過自己的祖國。",
  "cnMarked": "戰後，國王在法國【流亡】了二十年，去世前再也沒有見過自己的祖國。",
  "isHead": true,
  "level": 5,
  "family": "exile"
 },
 {
  "word": "exile",
  "answer": "exile",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "流放；放逐",
  "en_def": "to force someone to leave their country as a punishment",
  "sentence": "The new government decided to {{BLANK}} the old leader to a small island, where he lived quietly for the rest of his life.",
  "cn": "新政府決定把前領導人流放到一座小島，他在那裡安靜地度過餘生。",
  "cnMarked": "新政府決定把前領導人【流放】到一座小島，他在那裡安靜地度過餘生。",
  "isHead": false,
  "level": 5,
  "family": "exile"
 },
 {
  "word": "in exile",
  "answer": "in exile",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "流亡中",
  "en_def": "living away from your own country because you are not allowed to return",
  "sentence": "The writer lived {{BLANK}} for many years, but his books were secretly passed from hand to hand in his home country.",
  "cn": "這位作家流亡多年，但他的書在祖國被人們偷偷地一手傳一手。",
  "cnMarked": "這位作家【流亡】多年，但他的書在祖國被人們偷偷地一手傳一手。",
  "isHead": false,
  "level": null,
  "family": "exile"
 },
 {
  "word": "exotic",
  "answer": "exotic",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "異國的；外來的",
  "en_def": "from a far-away country and therefore unusual and interesting",
  "sentence": "The zoo has many {{BLANK}} animals from Africa and South America, including a bird that can copy human speech.",
  "cn": "這座動物園有許多來自非洲和南美洲的異國動物，包括一隻會模仿人說話的鳥。",
  "cnMarked": "這座動物園有許多來自非洲和南美洲的【異國】動物，包括一隻會模仿人說話的鳥。",
  "isHead": true,
  "level": 5,
  "family": "exotic"
 },
 {
  "word": "exotic",
  "answer": "exotic",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "奇異的；充滿異國情調的",
  "en_def": "unusual and exciting in a way that seems different from everyday life",
  "sentence": "The restaurant is famous for its {{BLANK}} flavors, like mango with chili and ice cream made from black sesame.",
  "cn": "這家餐廳以奇特的風味聞名，像是芒果配辣椒，以及用黑芝麻做的冰淇淋。",
  "cnMarked": "這家餐廳以【奇特的】風味聞名，像是芒果配辣椒，以及用黑芝麻做的冰淇淋。",
  "isHead": false,
  "level": 5,
  "family": "exotic"
 },
 {
  "word": "exotic food",
  "answer": "exotic food",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "異國料理",
  "en_def": "unusual dishes from other countries",
  "sentence": "My father loves trying {{BLANK}} when he travels, so last year he ate fried insects in Thailand and snails in France.",
  "cn": "我爸爸旅行時喜歡嘗試異國料理，所以去年他在泰國吃了炸昆蟲，在法國吃了蝸牛。",
  "cnMarked": "我爸爸旅行時喜歡嘗試【異國料理】，所以去年他在泰國吃了炸昆蟲，在法國吃了蝸牛。",
  "isHead": false,
  "level": null,
  "family": "exotic"
 },
 {
  "word": "expedition",
  "answer": "expedition",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "遠征；探險",
  "en_def": "a long journey made for a special purpose, such as science or exploring",
  "sentence": "In 1911, a small team reached the South Pole after a dangerous {{BLANK}} across hundreds of kilometers of ice and snow.",
  "cn": "1911 年，一支小隊在穿越數百公里冰雪的危險遠征後抵達了南極點。",
  "cnMarked": "1911 年，一支小隊在穿越數百公里冰雪的危險【遠征】後抵達了南極點。",
  "isHead": true,
  "level": 5,
  "family": "expedition"
 },
 {
  "word": "go on an expedition",
  "answer": "go on an expedition",
  "nblanks": 4,
  "pos": "v.phr.",
  "cn_def": "去探險；進行遠征",
  "en_def": "to make a long journey for exploring or research",
  "sentence": "Next summer, a group of scientists will {{BLANK}} to the deep sea near Taiwan to look for animals nobody has ever seen.",
  "cn": "明年夏天，一群科學家將前往台灣附近的深海探險，尋找從來沒有人見過的動物。",
  "cnMarked": "明年夏天，一群科學家將【前往】台灣附近的深海【探險】，尋找從來沒有人見過的動物。",
  "isHead": false,
  "level": null,
  "family": "expedition"
 },
 {
  "word": "expedition team",
  "answer": "expedition team",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "探險隊；遠征隊",
  "en_def": "the group of people who make a special journey together",
  "sentence": "The {{BLANK}} carried enough food for forty days, because there would be no villages or shops on the way up the mountain.",
  "cn": "探險隊帶了足夠四十天的食物，因為上山的路上不會有任何村莊或商店。",
  "cnMarked": "【探險隊】帶了足夠四十天的食物，因為上山的路上不會有任何村莊或商店。",
  "isHead": false,
  "level": null,
  "family": "expedition"
 },
 {
  "word": "expertise",
  "answer": "expertise",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "專門知識；專長",
  "en_def": "special skill or knowledge that you get from experience or training",
  "sentence": "We asked Mr. Wang to fix the old computer because of his {{BLANK}} in repairing machines that nobody else can save.",
  "cn": "我們請王先生修那台舊電腦，因為他在修理別人都救不了的機器方面有專業知識。",
  "cnMarked": "我們請王先生修那台舊電腦，因為他在修理別人都救不了的機器方面有【專業知識】。",
  "isHead": true,
  "level": 5,
  "family": "expertise"
 },
 {
  "word": "expert",
  "answer": "expert",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "專家",
  "en_def": "a person who knows a lot about a subject or is very skilled at something",
  "sentence": "My grandfather is an {{BLANK}} on tea, and he can tell which mountain a tea comes from just by smelling it.",
  "cn": "我爺爺是茶葉專家，光靠聞一聞就能說出一款茶來自哪座山。",
  "cnMarked": "我爺爺是茶葉【專家】，光靠聞一聞就能說出一款茶來自哪座山。",
  "isHead": false,
  "level": 2,
  "family": "expertise"
 },
 {
  "word": "expert",
  "answer": "expert",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "專業的；熟練的",
  "en_def": "having or showing special skill or knowledge",
  "sentence": "Thanks to the {{BLANK}} advice of our coach, the team learned to pass the ball faster and won the city championship.",
  "cn": "多虧教練專業的建議，球隊學會了更快地傳球，贏得了市冠軍。",
  "cnMarked": "多虧教練【專業的】建議，球隊學會了更快地傳球，贏得了市冠軍。",
  "isHead": false,
  "level": 2,
  "family": "expertise"
 },
 {
  "word": "expertly",
  "answer": "expertly",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "熟練地；專業地",
  "en_def": "in a very skillful way",
  "sentence": "The chef {{BLANK}} cut the fish into thin slices in less than a minute while the customers watched in silence.",
  "cn": "廚師在不到一分鐘內熟練地把魚切成薄片，顧客們安靜地看著。",
  "cnMarked": "廚師在不到一分鐘內【熟練地】把魚切成薄片，顧客們安靜地看著。",
  "isHead": false,
  "level": null,
  "family": "expertise"
 },
 {
  "word": "explicit",
  "answer": "explicit",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "明確的；清楚直接的",
  "en_def": "said or shown clearly and directly, so there is no doubt about the meaning",
  "sentence": "The teacher gave {{BLANK}} instructions about the homework, so nobody could say later that they did not understand what to do.",
  "cn": "老師對作業給了明確的指示，所以之後沒有人能說自己不知道要做什麼。",
  "cnMarked": "老師對作業給了【明確的】指示，所以之後沒有人能說自己不知道要做什麼。",
  "isHead": true,
  "level": 5,
  "family": "explicit"
 },
 {
  "word": "explicitly",
  "answer": "explicitly",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "明確地；清楚地",
  "en_def": "clearly and directly",
  "sentence": "The sign {{BLANK}} says that no food or drinks are allowed in the library, but some students still bring snacks inside.",
  "cn": "告示牌明確地寫著圖書館內不准攜帶食物或飲料，但有些學生仍然把零食帶進去。",
  "cnMarked": "告示牌【明確地】寫著圖書館內不准攜帶食物或飲料，但有些學生仍然把零食帶進去。",
  "isHead": false,
  "level": null,
  "family": "explicit"
 },
 {
  "word": "implicit",
  "answer": "implicit",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "含蓄的；暗示的",
  "en_def": "suggested but not said directly",
  "sentence": "There was an {{BLANK}} promise in the manager's words that anyone who worked hard this year would get a raise next spring.",
  "cn": "經理的話中有一個含蓄的承諾：今年努力工作的人明年春天都會加薪。",
  "cnMarked": "經理的話中有一個【含蓄的】承諾：今年努力工作的人明年春天都會加薪。",
  "isHead": false,
  "level": 6,
  "family": "explicit"
 },
 {
  "word": "exploit",
  "answer": "exploit",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "剝削；利用",
  "en_def": "to treat someone unfairly in order to get something from them",
  "sentence": "Some factories {{BLANK}} young workers by paying them very little and making them work twelve hours a day without a break.",
  "cn": "有些工廠剝削年輕工人，付他們很少的薪水，還讓他們每天工作十二小時不休息。",
  "cnMarked": "有些工廠【剝削】年輕工人，付他們很少的薪水，還讓他們每天工作十二小時不休息。",
  "isHead": true,
  "level": 5,
  "family": "exploit"
 },
 {
  "word": "exploit",
  "answer": "exploit",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "開發；充分利用",
  "en_def": "to use something fully and get as much benefit from it as possible",
  "sentence": "The island plans to {{BLANK}} its strong winds by building fifty wind machines that will produce electricity for the whole town.",
  "cn": "這座島計畫充分利用強風，建造五十座風力機組，為整個城鎮發電。",
  "cnMarked": "這座島計畫【充分利用】強風，建造五十座風力機組，為整個城鎮發電。",
  "isHead": false,
  "level": 5,
  "family": "exploit"
 },
 {
  "word": "exploit",
  "answer": "exploits",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "英勇事蹟；壯舉",
  "en_def": "a brave, exciting, or interesting act",
  "sentence": "The book tells the {{BLANK}} of a young pilot who flew across the ocean alone at a time when planes were still very simple.",
  "cn": "這本書講述一位年輕飛行員的英勇事蹟，他在飛機還很簡陋的年代獨自飛越海洋。",
  "cnMarked": "這本書講述一位年輕飛行員的【英勇事蹟】，他在飛機還很簡陋的年代獨自飛越海洋。",
  "isHead": false,
  "level": 5,
  "family": "exploit"
 },
 {
  "word": "exploitation",
  "answer": "exploitation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "剝削；利用",
  "en_def": "the act of treating people unfairly to benefit from their work",
  "sentence": "The new law aims to stop the {{BLANK}} of foreign workers, who often receive less pay than local workers for the same job.",
  "cn": "新法律旨在阻止對外籍勞工的剝削，他們做同樣的工作卻常常拿到比本地勞工少的薪水。",
  "cnMarked": "新法律旨在阻止對外籍勞工的【剝削】，他們做同樣的工作卻常常拿到比本地勞工少的薪水。",
  "isHead": false,
  "level": null,
  "family": "exploit"
 },
 {
  "word": "exploration",
  "answer": "exploration",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "探索；探勘；探究",
  "en_def": "the act of traveling through a place to learn about it; careful study of a subject",
  "sentence": "The {{BLANK}} of the deep ocean is still in its early days, and scientists believe thousands of sea animals are waiting to be found.",
  "cn": "深海探索仍在起步階段，科學家相信有數千種海洋動物等著被發現。",
  "cnMarked": "深海【探索】仍在起步階段，科學家相信有數千種海洋動物等著被發現。",
  "isHead": true,
  "level": 5,
  "family": "exploration"
 },
 {
  "word": "explore",
  "answer": "explore",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "探索；探究",
  "en_def": "to travel around a place to learn about it; to examine something carefully",
  "sentence": "On the first day of our trip, we decided to {{BLANK}} the old town on foot and found a tiny bookstore hidden in a narrow lane.",
  "cn": "旅行的第一天，我們決定步行探索舊城區，結果發現一家藏在窄巷裡的小書店。",
  "cnMarked": "旅行的第一天，我們決定步行【探索】舊城區，結果發現一家藏在窄巷裡的小書店。",
  "isHead": false,
  "level": 3,
  "family": "exploration"
 },
 {
  "word": "explorer",
  "answer": "explorer",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "探險家",
  "en_def": "a person who travels to unknown places to find out about them",
  "sentence": "The famous {{BLANK}} spent three years in the jungle and drew the first map of the river for people back home.",
  "cn": "這位著名的探險家在叢林裡待了三年，為家鄉的人畫出了這條河的第一張地圖。",
  "cnMarked": "這位著名的【探險家】在叢林裡待了三年，為家鄉的人畫出了這條河的第一張地圖。",
  "isHead": false,
  "level": null,
  "family": "exploration"
 },
 {
  "word": "space exploration",
  "answer": "space exploration",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "太空探索",
  "en_def": "the study of space by sending rockets, machines, and people there",
  "sentence": "Many countries spend billions of dollars on {{BLANK}}, hoping to send people to Mars within the next twenty years.",
  "cn": "許多國家在太空探索上花費數十億美元，希望在未來二十年內把人送上火星。",
  "cnMarked": "許多國家在【太空探索】上花費數十億美元，希望在未來二十年內把人送上火星。",
  "isHead": false,
  "level": null,
  "family": "exploration"
 },
 {
  "word": "extension",
  "answer": "extension",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "延期；延長；擴建部分",
  "en_def": "extra time given to finish something; a part added to make something longer or bigger",
  "sentence": "Because I was sick for a week, the teacher gave me a three-day {{BLANK}} to finish my science report.",
  "cn": "因為我病了一個星期，老師給我三天的延期來完成科學報告。",
  "cnMarked": "因為我病了一個星期，老師給我三天的【延期】來完成科學報告。",
  "isHead": true,
  "level": 5,
  "family": "extension"
 },
 {
  "word": "extensive",
  "answer": "extensive",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "廣泛的；大量的",
  "en_def": "covering a large area or a lot of things; very great in amount",
  "sentence": "The typhoon caused {{BLANK}} damage along the east coast, and some roads will take months to repair.",
  "cn": "颱風在東海岸造成大範圍的損害，有些道路需要幾個月才能修好。",
  "cnMarked": "颱風在東海岸造成【大範圍的】損害，有些道路需要幾個月才能修好。",
  "isHead": true,
  "level": 5,
  "family": "extension"
 },
 {
  "word": "extend",
  "answer": "extend",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "延長；擴大；延伸",
  "en_def": "to make something longer or bigger; to continue for a distance or time",
  "sentence": "The city plans to {{BLANK}} the MRT line to the airport, so travelers will no longer need to take a bus or a taxi.",
  "cn": "市政府計畫把捷運線延伸到機場，這樣旅客就不用再搭公車或計程車了。",
  "cnMarked": "市政府計畫把捷運線【延伸】到機場，這樣旅客就不用再搭公車或計程車了。",
  "isHead": false,
  "level": 4,
  "family": "extension"
 },
 {
  "word": "extent",
  "answer": "extent",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "程度；範圍",
  "en_def": "the size, amount, or degree of something",
  "sentence": "After the fire, the owner walked through the building to see the {{BLANK}} of the damage before calling the insurance company.",
  "cn": "火災過後，屋主走過整棟建築查看損害的程度，然後才打電話給保險公司。",
  "cnMarked": "火災過後，屋主走過整棟建築查看損害的【程度】，然後才打電話給保險公司。",
  "isHead": false,
  "level": 4,
  "family": "extension"
 },
 {
  "word": "extensively",
  "answer": "extensively",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "廣泛地；大量地",
  "en_def": "widely; in a way that covers a lot",
  "sentence": "Before writing her book about Taiwan's temples, the author traveled {{BLANK}} around the island for more than two years.",
  "cn": "在撰寫關於台灣寺廟的書之前，作者花了兩年多的時間在島上廣泛地旅行。",
  "cnMarked": "在撰寫關於台灣寺廟的書之前，作者花了兩年多的時間在島上【廣泛地】旅行。",
  "isHead": false,
  "level": null,
  "family": "extension"
 },
 {
  "word": "exterior",
  "answer": "exterior",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "外部；外觀",
  "en_def": "the outside of something, especially a building",
  "sentence": "The {{BLANK}} of the old house looks plain and gray, but the rooms inside are full of color and beautiful furniture.",
  "cn": "這棟老房子的外觀看起來樸素又灰暗，但裡面的房間充滿色彩和漂亮的家具。",
  "cnMarked": "這棟老房子的【外觀】看起來樸素又灰暗，但裡面的房間充滿色彩和漂亮的家具。",
  "isHead": true,
  "level": 5,
  "family": "exterior"
 },
 {
  "word": "exterior",
  "answer": "exterior",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "外部的；外面的",
  "en_def": "on or from the outside",
  "sentence": "The {{BLANK}} walls of the school were painted bright yellow last summer, so now you can see the building from far away.",
  "cn": "學校的外牆去年夏天漆成了亮黃色，所以現在你從很遠的地方就能看見這棟建築。",
  "cnMarked": "學校的【外】牆去年夏天漆成了亮黃色，所以現在你從很遠的地方就能看見這棟建築。",
  "isHead": false,
  "level": 5,
  "family": "exterior"
 },
 {
  "word": "interior",
  "answer": "interior",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "內部；室內",
  "en_def": "the inside of something, especially a building or car",
  "sentence": "The {{BLANK}} of the new library is bright and quiet, with soft chairs by the windows where students love to read.",
  "cn": "新圖書館的內部明亮又安靜，窗邊有舒適的椅子，學生們很喜歡在那裡閱讀。",
  "cnMarked": "新圖書館的【內部】明亮又安靜，窗邊有舒適的椅子，學生們很喜歡在那裡閱讀。",
  "isHead": false,
  "level": 5,
  "family": "exterior"
 },
 {
  "word": "external",
  "answer": "external",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "外部的；外來的",
  "en_def": "coming from or connected with the outside",
  "sentence": "The doctor said the cut was only an {{BLANK}} wound, so it would heal in a week without any need for an operation.",
  "cn": "醫生說這道傷口只是外部的傷，一週內就會癒合，不需要手術。",
  "cnMarked": "醫生說這道傷口只是【外部的】傷，一週內就會癒合，不需要手術。",
  "isHead": true,
  "level": 5,
  "family": "external"
 },
 {
  "word": "externally",
  "answer": "externally",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "在外部；從外部",
  "en_def": "on or from the outside",
  "sentence": "This medicine should only be used {{BLANK}} on the skin, so never swallow it, even if the pain is very bad.",
  "cn": "這種藥只能外用在皮膚上，所以即使疼痛很嚴重也絕對不要吞下去。",
  "cnMarked": "這種藥只能【外】用在皮膚上，所以即使疼痛很嚴重也絕對不要吞下去。",
  "isHead": false,
  "level": null,
  "family": "external"
 },
 {
  "word": "internal",
  "answer": "internal",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "內部的；體內的",
  "en_def": "inside something; happening within a country, company, or body",
  "sentence": "The company is holding an {{BLANK}} meeting this afternoon, so no visitors or reporters are allowed into the building.",
  "cn": "公司今天下午要開內部會議，所以不允許任何訪客或記者進入大樓。",
  "cnMarked": "公司今天下午要開【內部】會議，所以不允許任何訪客或記者進入大樓。",
  "isHead": false,
  "level": 2,
  "family": "external"
 },
 {
  "word": "extinct",
  "answer": "extinct",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "絕種的；滅絕的",
  "en_def": "(of an animal or plant) no longer existing",
  "sentence": "Dinosaurs have been {{BLANK}} for about sixty-five million years, but we can still learn about them from their bones.",
  "cn": "恐龍已經絕種大約六千五百萬年了，但我們仍然可以從牠們的骨頭了解牠們。",
  "cnMarked": "恐龍已經【絕種】大約六千五百萬年了，但我們仍然可以從牠們的骨頭了解牠們。",
  "isHead": true,
  "level": 5,
  "family": "extinct"
 },
 {
  "word": "extinction",
  "answer": "extinction",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "絕種；滅絕",
  "en_def": "the situation in which an animal or plant stops existing",
  "sentence": "Many sea turtles are in danger of {{BLANK}} because plastic bags in the ocean look like the jellyfish they eat.",
  "cn": "許多海龜面臨絕種的危險，因為海洋裡的塑膠袋看起來就像牠們吃的水母。",
  "cnMarked": "許多海龜面臨【絕種】的危險，因為海洋裡的塑膠袋看起來就像牠們吃的水母。",
  "isHead": false,
  "level": null,
  "family": "extinct"
 },
 {
  "word": "become extinct",
  "answer": "become extinct",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "滅絕；絕種",
  "en_def": "to die out completely",
  "sentence": "If we keep cutting down the forest, this rare bird will {{BLANK}} within twenty years, and our children will only see it in pictures.",
  "cn": "如果我們繼續砍伐森林，這種稀有的鳥將在二十年內絕種，我們的孩子就只能在圖片上看到牠了。",
  "cnMarked": "如果我們繼續砍伐森林，這種稀有的鳥將在二十年內【絕種】，我們的孩子就只能在圖片上看到牠了。",
  "isHead": false,
  "level": null,
  "family": "extinct"
 },
 {
  "word": "extraordinary",
  "answer": "extraordinary",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "非凡的；驚人的",
  "en_def": "very unusual, surprising, or special",
  "sentence": "The young pianist has an {{BLANK}} memory and can play a whole concert without looking at a single page of music.",
  "cn": "這位年輕的鋼琴家有驚人的記憶力，可以不看一頁樂譜就演奏整場音樂會。",
  "cnMarked": "這位年輕的鋼琴家有【驚人的】記憶力，可以不看一頁樂譜就演奏整場音樂會。",
  "isHead": true,
  "level": 5,
  "family": "extraordinary"
 },
 {
  "word": "extraordinarily",
  "answer": "extraordinarily",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "非常；格外地",
  "en_def": "extremely; in a very unusual way",
  "sentence": "The test was {{BLANK}} difficult this time, and even the best student in our class could not finish all the questions.",
  "cn": "這次考試格外困難，連我們班最優秀的學生都無法做完所有題目。",
  "cnMarked": "這次考試【格外】困難，連我們班最優秀的學生都無法做完所有題目。",
  "isHead": false,
  "level": null,
  "family": "extraordinary"
 },
 {
  "word": "ordinary",
  "answer": "ordinary",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "普通的；平凡的",
  "en_def": "normal and not special or different in any way",
  "sentence": "It started as an {{BLANK}} Monday morning, but by noon the whole school was talking about the surprise visit from a famous singer.",
  "cn": "那天一開始只是個普通的星期一早晨，但到了中午，全校都在談論一位知名歌手的驚喜造訪。",
  "cnMarked": "那天一開始只是個【普通的】星期一早晨，但到了中午，全校都在談論一位知名歌手的驚喜造訪。",
  "isHead": false,
  "level": 2,
  "family": "extraordinary"
 },
 {
  "word": "fabric",
  "answer": "fabric",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "布料；織物",
  "en_def": "cloth used for making clothes, curtains, and other things",
  "sentence": "My mother bought three meters of soft blue {{BLANK}} at the market to make new curtains for my bedroom.",
  "cn": "我媽媽在市場買了三公尺柔軟的藍色布料，要為我的臥室做新窗簾。",
  "cnMarked": "我媽媽在市場買了三公尺柔軟的藍色【布料】，要為我的臥室做新窗簾。",
  "isHead": true,
  "level": 5,
  "family": "fabric"
 },
 {
  "word": "the fabric of society",
  "answer": "the fabric of society",
  "nblanks": 4,
  "pos": "n.phr.",
  "cn_def": "社會結構；社會基礎",
  "en_def": "the basic structure that holds a society together",
  "sentence": "Many people believe that trust between neighbors is part of {{BLANK}}, and when it disappears, crime and fear increase.",
  "cn": "許多人相信鄰居之間的信任是社會結構的一部分，一旦它消失，犯罪和恐懼就會增加。",
  "cnMarked": "許多人相信鄰居之間的信任是【社會結構】的一部分，一旦它消失，犯罪和恐懼就會增加。",
  "isHead": false,
  "level": null,
  "family": "fabric"
 },
 {
  "word": "fabricate",
  "answer": "fabricate",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "捏造；編造",
  "en_def": "to invent false information in order to trick people",
  "sentence": "The student tried to {{BLANK}} a story about a sick grandmother to explain why his homework was late, but the teacher did not believe him.",
  "cn": "這個學生試圖編造一個關於生病奶奶的故事來解釋作業為什麼遲交，但老師不相信他。",
  "cnMarked": "這個學生試圖【編造】一個關於生病奶奶的故事來解釋作業為什麼遲交，但老師不相信他。",
  "isHead": false,
  "level": null,
  "family": "fabric"
 },
 {
  "word": "fabulous",
  "answer": "fabulous",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "極好的；美妙的",
  "en_def": "extremely good; wonderful",
  "sentence": "We had a {{BLANK}} time at the beach yesterday; the weather was perfect, and the water was warm enough for swimming all afternoon.",
  "cn": "我們昨天在海邊玩得非常開心；天氣完美，海水也溫暖到可以游一整個下午。",
  "cnMarked": "我們昨天在海邊玩得【非常開心】；天氣完美，海水也溫暖到可以游一整個下午。",
  "isHead": true,
  "level": 5,
  "family": "fabulous"
 },
 {
  "word": "fabulously",
  "answer": "fabulously",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "極其；非常地",
  "en_def": "extremely; in a wonderful way",
  "sentence": "The singer is {{BLANK}} rich now, but she still visits the small town where she grew up and gives free concerts there every year.",
  "cn": "這位歌手現在極其富有，但她仍然每年回到她長大的小鎮，在那裡舉辦免費演唱會。",
  "cnMarked": "這位歌手現在【極其】富有，但她仍然每年回到她長大的小鎮，在那裡舉辦免費演唱會。",
  "isHead": false,
  "level": null,
  "family": "fabulous"
 },
 {
  "word": "fable",
  "answer": "fable",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "寓言",
  "en_def": "a short story, often with animals as characters, that teaches a lesson",
  "sentence": "\"The Tortoise and the Hare\" is a famous {{BLANK}} that teaches children that slow and steady effort can win the race.",
  "cn": "《龜兔賽跑》是一則著名的寓言，教導孩子緩慢而穩定的努力也能贏得比賽。",
  "cnMarked": "《龜兔賽跑》是一則著名的【寓言】，教導孩子緩慢而穩定的努力也能贏得比賽。",
  "isHead": false,
  "level": 6,
  "family": "fabulous"
 }
];
const MCQS = [
 {
  "q": "Tom says he studied for ten hours last night, but I saw him playing games at nine o'clock. His story is a clear ______, because nobody can study that long without sleeping.",
  "options": [
   "extension",
   "exaggeration",
   "exclamation",
   "expedition"
  ],
  "answer": 1,
  "vocabIndex": 0
 },
 {
  "q": "The elevator can carry twelve people at most. If the number of people inside begins to ______ that limit, a loud sound will warn everyone to step out and wait.",
  "options": [
   "explore",
   "exile",
   "exceed",
   "exclaim"
  ],
  "answer": 2,
  "vocabIndex": 3
 },
 {
  "q": "Most students in the class got around seventy points on the test. Jenny, however, got a perfect score, and the teacher praised her ______ work in front of everyone.",
  "options": [
   "exceptional",
   "extinct",
   "external",
   "exotic"
  ],
  "answer": 0,
  "vocabIndex": 8
 },
 {
  "q": "Eating a little chocolate now and then is fine for your health. However, ______ amounts of sugar every day can lead to serious problems like bad teeth and weight gain.",
  "options": [
   "explicit",
   "exclusive",
   "excessive",
   "extraordinary"
  ],
  "answer": 2,
  "vocabIndex": 4
 },
 {
  "q": "When the lights came on, Amy saw all her friends standing in the living room. \"I can't believe you did this for me!\" she began to ______ with tears in her eyes.",
  "options": [
   "execute",
   "exploit",
   "extend",
   "exclaim"
  ],
  "answer": 3,
  "vocabIndex": 12
 },
 {
  "q": "The team only has room for eleven players on the field. The coach had to ______ three boys from the final game, and they watched sadly from the side.",
  "options": [
   "exceed",
   "exaggerate",
   "exclude",
   "fabricate"
  ],
  "answer": 2,
  "vocabIndex": 15
 },
 {
  "q": "This new phone will not be sold in ordinary stores for the first month. The company is making it ______ to its own website, so you must order it online to get one.",
  "options": [
   "excessive",
   "exterior",
   "expert",
   "exclusive"
  ],
  "answer": 3,
  "vocabIndex": 16
 },
 {
  "q": "The students spent a month planning the school fair. On the big day, they had to ______ their plan carefully, setting up every booth and game before the gates opened.",
  "options": [
   "execute",
   "exclude",
   "exceed",
   "exile"
  ],
  "answer": 0,
  "vocabIndex": 20
 },
 {
  "q": "The plan for cleaning the beach sounded simple on paper. However, its ______ was difficult, because the wind was strong and half of the volunteers arrived late.",
  "options": [
   "exception",
   "execution",
   "extinction",
   "exploration"
  ],
  "answer": 1,
  "vocabIndex": 22
 },
 {
  "q": "Ms. Chen makes the most important decisions at the company and manages hundreds of workers. As a senior ______, she often works late and travels abroad every month.",
  "options": [
   "executive",
   "exile",
   "expert",
   "explorer"
  ],
  "answer": 0,
  "vocabIndex": 23
 },
 {
  "q": "After the king lost the war, he was forced to leave the country and could never return. He lived in ______ in a foreign land until the day he died.",
  "options": [
   "excess",
   "exile",
   "extent",
   "expertise"
  ],
  "answer": 1,
  "vocabIndex": 26
 },
 {
  "q": "Every year, the night market invites cooks from faraway countries. Visitors line up to taste ______ dishes made with fruits and spices that are not grown in Taiwan.",
  "options": [
   "extinct",
   "external",
   "exceptional",
   "exotic"
  ],
  "answer": 3,
  "vocabIndex": 29
 },
 {
  "q": "The scientists packed warm clothes, tents, and food for sixty days. Their ______ to the frozen land of the South Pole would be long, cold, and full of danger.",
  "options": [
   "expedition",
   "exclamation",
   "exaggeration",
   "execution"
  ],
  "answer": 0,
  "vocabIndex": 32
 },
 {
  "q": "Dr. Wu has studied earthquakes for over thirty years. Because of his great ______, the government asked him to check whether the old bridge was still safe to use.",
  "options": [
   "exterior",
   "expertise",
   "extension",
   "exploitation"
  ],
  "answer": 1,
  "vocabIndex": 35
 },
 {
  "q": "The rules of the camp were written in large letters on a sign at the gate. They were so clear and ______ that no child could say later that they did not understand.",
  "options": [
   "explicit",
   "extinct",
   "fabulous",
   "exotic"
  ],
  "answer": 0,
  "vocabIndex": 39
 },
 {
  "q": "The factory pays its workers very little and makes them work twelve hours a day with no rest. People say the owner likes to ______ the poor who cannot find other jobs.",
  "options": [
   "exaggerate",
   "exploit",
   "extend",
   "exclaim"
  ],
  "answer": 1,
  "vocabIndex": 42
 },
 {
  "q": "Humans have sent machines to the bottom of the ocean, but there is still much we do not know. The ______ of the deep sea will take many more years of hard work.",
  "options": [
   "exception",
   "exclusion",
   "extinction",
   "exploration"
  ],
  "answer": 3,
  "vocabIndex": 46
 },
 {
  "q": "I was sick for a week and could not finish my science report on time. Luckily, the teacher gave me a three-day ______, so I handed it in on Friday instead.",
  "options": [
   "expedition",
   "extension",
   "exile",
   "explorer"
  ],
  "answer": 1,
  "vocabIndex": 50
 },
 {
  "q": "The typhoon hit the east coast with strong winds and heavy rain for two days. It caused ______ damage to roads, farms, and houses across the whole area.",
  "options": [
   "extensive",
   "exclusive",
   "expert",
   "explicit"
  ],
  "answer": 0,
  "vocabIndex": 51
 },
 {
  "q": "The old church looks dark and simple from the street outside. However, its ______ hides a beautiful hall inside, full of golden light and colored glass windows.",
  "options": [
   "fable",
   "exterior",
   "extent",
   "excess"
  ],
  "answer": 1,
  "vocabIndex": 55
 },
 {
  "q": "The doctor looked at the cut on the boy's arm and said it was not serious. It was only an ______ wound, so it would heal in a few days without any medicine.",
  "options": [
   "extinct",
   "exotic",
   "external",
   "internal"
  ],
  "answer": 2,
  "vocabIndex": 58
 },
 {
  "q": "Dinosaurs lived on Earth millions of years ago, but none of them are alive today. They became ______ long before the first humans ever walked on the planet.",
  "options": [
   "ordinary",
   "extinct",
   "excessive",
   "exceptional"
  ],
  "answer": 1,
  "vocabIndex": 61
 },
 {
  "q": "The little boy can do math problems that most adults find difficult. Everyone who meets him agrees that he has an ______ mind for a child of only six.",
  "options": [
   "exclusive",
   "exterior",
   "implicit",
   "extraordinary"
  ],
  "answer": 3,
  "vocabIndex": 64
 },
 {
  "q": "My aunt makes beautiful dresses by hand in her small shop. She chooses soft and colorful ______ from the market and spends days sewing each piece carefully.",
  "options": [
   "exception",
   "fable",
   "fabric",
   "excess"
  ],
  "answer": 2,
  "vocabIndex": 67
 },
 {
  "q": "We spent the whole day at the beach, swimming and playing games in the warm sun. It was a ______ day, and nobody wanted to go home when evening came.",
  "options": [
   "fabulous",
   "extinct",
   "internal",
   "explicit"
  ],
  "answer": 0,
  "vocabIndex": 70
 },
 {
  "q": "Grandpa likes to tell stories about the fish he caught when he was young. He always makes them bigger than they really were, so we know he likes to ______ a little.",
  "options": [
   "exclude",
   "explore",
   "exaggerate",
   "execute"
  ],
  "answer": 2,
  "vocabIndex": 1
 },
 {
  "q": "Students must wear uniforms to school every day of the week. The only ______ is Friday, when they can wear the T-shirts of their school clubs instead.",
  "options": [
   "extension",
   "exploit",
   "exile",
   "exception"
  ],
  "answer": 3,
  "vocabIndex": 10
 },
 {
  "q": "The old town has many narrow streets and hidden shops that most tourists never find. We decided to ______ it on foot and found a tiny café in a quiet lane.",
  "options": [
   "explore",
   "exceed",
   "exclaim",
   "exploit"
  ],
  "answer": 0,
  "vocabIndex": 47
 },
 {
  "q": "The MRT line now ends at the edge of the city. The government plans to ______ it all the way to the airport so that travelers will not need a taxi.",
  "options": [
   "fabricate",
   "execute",
   "exile",
   "extend"
  ],
  "answer": 3,
  "vocabIndex": 52
 },
 {
  "q": "Fewer than one hundred of these birds are left in the wild. If people keep cutting down the forest, the birds will face ______ within twenty years.",
  "options": [
   "execution",
   "exaggeration",
   "extinction",
   "expertise"
  ],
  "answer": 2,
  "vocabIndex": 62
 }
];
const LOOKUP = {};
VOCAB.forEach(v => { const key = v.word.toLowerCase(); const sense = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def };
  if (LOOKUP[key]) LOOKUP[key].combined.push(sense); else LOOKUP[key] = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def, combined: [sense] }; });
const EXTRA_GLOSSES = {};