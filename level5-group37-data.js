// 學測6000字 Level 5 Group 37 (threshold-tribute) — word-family edition
const QUIZ_CONFIG = {
  groupName: "6000字 L5 Group 37 - threshold – tribute (word family)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};
const VOCAB = [
 {
  "word": "threshold",
  "answer": "threshold",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "門檻；臨界點；起點",
  "en_def": "the level or point at which something starts to happen",
  "sentence": "The government raised the income {{BLANK}} for free school lunches, so about two thousand more children can now get them.",
  "cn": "政府提高了免費營養午餐的收入門檻，所以現在大約多了兩千名孩子可以領取。",
  "cnMarked": "政府提高了免費營養午餐的收入【門檻】，所以現在大約多了兩千名孩子可以領取。",
  "isHead": true,
  "level": 5,
  "family": "threshold"
 },
 {
  "word": "threshold",
  "answer": "threshold",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "門檻；門口",
  "en_def": "the floor at the entrance of a door",
  "sentence": "In many old Taiwanese houses, the wooden {{BLANK}} at the front door is high, so visitors must step over it carefully.",
  "cn": "在許多台灣老房子裡，大門的木製門檻很高，所以訪客必須小心地跨過去。",
  "cnMarked": "在許多台灣老房子裡，大門的木製【門檻】很高，所以訪客必須小心地跨過去。",
  "isHead": false,
  "level": 5,
  "family": "threshold"
 },
 {
  "word": "on the threshold of",
  "answer": "on the threshold of",
  "nblanks": 4,
  "pos": "phr.",
  "cn_def": "即將開始…；在…的開端",
  "en_def": "at the beginning of an important new time or event",
  "sentence": "Scientists say we are {{BLANK}} a new age of medicine, in which many diseases will be cured by changing our genes.",
  "cn": "科學家說我們正處於醫學新時代的開端，許多疾病將透過改變基因而被治癒。",
  "cnMarked": "科學家說我們【正處於】醫學新時代【的開端】，許多疾病將透過改變基因而被治癒。",
  "isHead": false,
  "level": null,
  "family": "threshold"
 },
 {
  "word": "pain threshold",
  "answer": "pain threshold",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "痛覺閾值；忍痛能力",
  "en_def": "the amount of pain a person can bear",
  "sentence": "My brother has a very high {{BLANK}}, so he did not even cry when the dentist pulled out two of his teeth.",
  "cn": "我弟弟的忍痛能力非常高，所以牙醫拔掉他兩顆牙時他連哭都沒哭。",
  "cnMarked": "我弟弟的【忍痛能力】非常高，所以牙醫拔掉他兩顆牙時他連哭都沒哭。",
  "isHead": false,
  "level": null,
  "family": "threshold"
 },
 {
  "word": "thrill",
  "answer": "thrill",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "興奮；刺激；激動",
  "en_def": "a sudden strong feeling of excitement",
  "sentence": "Riding the roller coaster for the first time gave me a {{BLANK}} that I will never forget as long as I live.",
  "cn": "第一次搭雲霄飛車給了我一種只要活著就永遠不會忘記的刺激感。",
  "cnMarked": "第一次搭雲霄飛車給了我一種只要活著就永遠不會忘記的【刺激感】。",
  "isHead": true,
  "level": 5,
  "family": "thrill"
 },
 {
  "word": "thriller",
  "answer": "thriller",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "驚悚片；驚悚小說",
  "en_def": "a book, film, or play with an exciting story, often about crime",
  "sentence": "We watched a {{BLANK}} about a detective chasing a killer through Tokyo, and nobody dared to go to the bathroom.",
  "cn": "我們看了一部關於偵探在東京追捕殺手的驚悚片，沒有人敢去上廁所。",
  "cnMarked": "我們看了一部關於偵探在東京追捕殺手的【驚悚片】，沒有人敢去上廁所。",
  "isHead": true,
  "level": 5,
  "family": "thrill"
 },
 {
  "word": "thrill",
  "answer": "thrill",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "使興奮；使激動",
  "en_def": "to make someone feel very excited and happy",
  "sentence": "The news that the famous singer would visit our school managed to {{BLANK}} every student, even the teachers.",
  "cn": "那位知名歌手將造訪我們學校的消息令每個學生都興奮不已，連老師也是。",
  "cnMarked": "那位知名歌手將造訪我們學校的消息【令】每個學生都【興奮不已】，連老師也是。",
  "isHead": false,
  "level": 5,
  "family": "thrill"
 },
 {
  "word": "thrilled",
  "answer": "thrilled",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "非常興奮的；欣喜的",
  "en_def": "very excited and pleased",
  "sentence": "My grandmother was {{BLANK}} to receive a video call from all of her grandchildren on her ninetieth birthday.",
  "cn": "我奶奶九十歲生日時收到所有孫子的視訊電話，她非常開心。",
  "cnMarked": "我奶奶九十歲生日時收到所有孫子的視訊電話，她【非常開心】。",
  "isHead": false,
  "level": null,
  "family": "thrill"
 },
 {
  "word": "thrilling",
  "answer": "thrilling",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "驚險刺激的；令人興奮的",
  "en_def": "very exciting",
  "sentence": "The final game of the season was {{BLANK}} from start to finish, and our team won by a single point in the last second.",
  "cn": "本季最後一場比賽從頭到尾都驚險刺激，我們的球隊在最後一秒以一分之差獲勝。",
  "cnMarked": "本季最後一場比賽從頭到尾都【驚險刺激】，我們的球隊在最後一秒以一分之差獲勝。",
  "isHead": false,
  "level": null,
  "family": "thrill"
 },
 {
  "word": "thrive",
  "answer": "thrive",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "茁壯成長；蓬勃發展；興旺",
  "en_def": "to grow, develop, or become successful",
  "sentence": "Small coffee shops {{BLANK}} in this neighborhood because thousands of university students live within walking distance.",
  "cn": "小咖啡店在這個社區蓬勃發展，因為有數千名大學生住在步行可達的範圍內。",
  "cnMarked": "小咖啡店在這個社區【蓬勃發展】，因為有數千名大學生住在步行可達的範圍內。",
  "isHead": true,
  "level": 5,
  "family": "thrive"
 },
 {
  "word": "thrive on",
  "answer": "thrive on",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "在…中成長茁壯；樂於面對",
  "en_def": "to enjoy or do well in a situation that others may find difficult",
  "sentence": "Some people hate working under pressure, but my sister seems to {{BLANK}} tight deadlines and difficult clients.",
  "cn": "有些人討厭在壓力下工作，但我姊姊似乎樂於面對緊迫的期限和難搞的客戶。",
  "cnMarked": "有些人討厭在壓力下工作，但我姊姊似乎【樂於面對】緊迫的期限和難搞的客戶。",
  "isHead": false,
  "level": null,
  "family": "thrive"
 },
 {
  "word": "thriving",
  "answer": "thriving",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "繁榮的；興旺的",
  "en_def": "growing and successful",
  "sentence": "Twenty years ago this street was almost empty, but today it is a {{BLANK}} market full of food stalls and music.",
  "cn": "二十年前這條街幾乎空無一人，但今天它是一個充滿小吃攤和音樂的繁榮市集。",
  "cnMarked": "二十年前這條街幾乎空無一人，但今天它是一個充滿小吃攤和音樂的【繁榮】市集。",
  "isHead": false,
  "level": null,
  "family": "thrive"
 },
 {
  "word": "throne",
  "answer": "throne",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "王座；王位",
  "en_def": "the special chair of a king or queen; the position of being king or queen",
  "sentence": "The young prince sat nervously on the golden {{BLANK}} while hundreds of guests watched him become king.",
  "cn": "年輕的王子緊張地坐在金色王座上，數百名賓客看著他成為國王。",
  "cnMarked": "年輕的王子緊張地坐在金色【王座】上，數百名賓客看著他成為國王。",
  "isHead": true,
  "level": 5,
  "family": "throne"
 },
 {
  "word": "come to the throne",
  "answer": "came to the throne",
  "nblanks": 4,
  "pos": "v.phr.",
  "cn_def": "登基；即位",
  "en_def": "to become king or queen",
  "sentence": "Queen Elizabeth II {{BLANK}} in 1952 when she was only twenty-five, and she ruled for seventy years.",
  "cn": "伊莉莎白二世女王於一九五二年登基時只有二十五歲，她統治了七十年。",
  "cnMarked": "伊莉莎白二世女王於一九五二年【登基】時只有二十五歲，她統治了七十年。",
  "isHead": false,
  "level": null,
  "family": "throne"
 },
 {
  "word": "heir to the throne",
  "answer": "heir to the throne",
  "nblanks": 4,
  "pos": "n.phr.",
  "cn_def": "王位繼承人",
  "en_def": "the person who will become the next king or queen",
  "sentence": "As the {{BLANK}}, the princess had to study history, law, and five languages before she turned eighteen.",
  "cn": "身為王位繼承人，公主在十八歲之前必須學習歷史、法律和五種語言。",
  "cnMarked": "身為【王位繼承人】，公主在十八歲之前必須學習歷史、法律和五種語言。",
  "isHead": false,
  "level": null,
  "family": "throne"
 },
 {
  "word": "thrust, thrust, thrust",
  "answer": "thrust",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "猛推；猛塞；用力插入",
  "en_def": "to push something suddenly and strongly",
  "sentence": "The angry customer {{BLANK}} the broken phone into the clerk's hands and demanded to get his money back immediately.",
  "cn": "憤怒的顧客把壞掉的手機猛塞進店員手中，要求立刻退錢。",
  "cnMarked": "憤怒的顧客把壞掉的手機【猛塞】進店員手中，要求立刻退錢。",
  "isHead": true,
  "level": 5,
  "family": "thrust"
 },
 {
  "word": "thrust",
  "answer": "thrust",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "推力",
  "en_def": "the force that pushes a plane or rocket forward",
  "sentence": "The rocket's engines must produce enough {{BLANK}} to lift more than five hundred tons off the ground in a few seconds.",
  "cn": "火箭的引擎必須產生足夠的推力，才能在幾秒鐘內把超過五百噸的重量推離地面。",
  "cnMarked": "火箭的引擎必須產生足夠的【推力】，才能在幾秒鐘內把超過五百噸的重量推離地面。",
  "isHead": false,
  "level": 5,
  "family": "thrust"
 },
 {
  "word": "thrust",
  "answer": "thrust",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "主旨；要點；重點",
  "en_def": "the main point or purpose of something",
  "sentence": "The main {{BLANK}} of her speech was that students should spend less time on their phones and more time outdoors.",
  "cn": "她演講的主要重點是學生應該少花時間在手機上，多花時間在戶外。",
  "cnMarked": "她演講的主要【重點】是學生應該少花時間在手機上，多花時間在戶外。",
  "isHead": false,
  "level": 5,
  "family": "thrust"
 },
 {
  "word": "tick",
  "answer": "tick",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "勾號；打勾記號",
  "en_def": "a mark (✓) that shows something is correct or done",
  "sentence": "The teacher put a red {{BLANK}} next to every correct answer, and I was happy to count twenty of them on my paper.",
  "cn": "老師在每個正確答案旁邊打了一個紅色勾，我很高興數到考卷上有二十個。",
  "cnMarked": "老師在每個正確答案旁邊打了一個紅色【勾】，我很高興數到考卷上有二十個。",
  "isHead": true,
  "level": 5,
  "family": "tick"
 },
 {
  "word": "tick",
  "answer": "tick",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "打勾",
  "en_def": "to make a mark (✓) next to something on a list",
  "sentence": "Please {{BLANK}} the box at the bottom of the form if you want to receive our newsletter by email every month.",
  "cn": "如果你想每個月透過電子郵件收到我們的電子報，請在表格底部的方框打勾。",
  "cnMarked": "如果你想每個月透過電子郵件收到我們的電子報，請在表格底部的方框【打勾】。",
  "isHead": false,
  "level": 5,
  "family": "tick"
 },
 {
  "word": "tick",
  "answer": "tick",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "滴答聲",
  "en_def": "the short regular sound that a clock makes",
  "sentence": "The room was so quiet during the exam that I could hear every {{BLANK}} of the clock on the wall.",
  "cn": "考試期間教室非常安靜，我能聽到牆上時鐘的每一聲滴答。",
  "cnMarked": "考試期間教室非常安靜，我能聽到牆上時鐘的每一聲【滴答】。",
  "isHead": false,
  "level": 5,
  "family": "tick"
 },
 {
  "word": "tick off",
  "answer": "tick off",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "在清單上勾掉；逐項核對",
  "en_def": "to mark items on a list as done",
  "sentence": "Before we leave for the camping trip, let's {{BLANK}} everything on the packing list so that nothing is forgotten.",
  "cn": "出發去露營之前，我們把行李清單上的每一項都勾掉，這樣才不會忘記東西。",
  "cnMarked": "出發去露營之前，我們把行李清單上的每一項都【勾掉】，這樣才不會忘記東西。",
  "isHead": false,
  "level": null,
  "family": "tick"
 },
 {
  "word": "tile",
  "answer": "tile",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "磁磚；瓦片",
  "en_def": "a flat, thin piece of baked clay or stone used to cover floors, walls, or roofs",
  "sentence": "Be careful in the bathroom, because the white floor {{BLANK}} becomes very slippery when it gets wet.",
  "cn": "在浴室裡要小心，因為白色的地板磁磚弄濕後會變得非常滑。",
  "cnMarked": "在浴室裡要小心，因為白色的地板【磁磚】弄濕後會變得非常滑。",
  "isHead": true,
  "level": 5,
  "family": "tile"
 },
 {
  "word": "tile",
  "answer": "tile",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "鋪磁磚",
  "en_def": "to cover a surface with tiles",
  "sentence": "My father decided to {{BLANK}} the kitchen floor himself last summer, and it took him three whole weekends.",
  "cn": "我爸爸去年夏天決定自己鋪廚房地板的磁磚，花了他整整三個週末。",
  "cnMarked": "我爸爸去年夏天決定自己【鋪】廚房地板的【磁磚】，花了他整整三個週末。",
  "isHead": false,
  "level": 5,
  "family": "tile"
 },
 {
  "word": "tiled",
  "answer": "tiled",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "鋪了磁磚的",
  "en_def": "covered with tiles",
  "sentence": "The {{BLANK}} roofs of the old temple shine bright orange in the morning sun, and tourists love to photograph them.",
  "cn": "古廟鋪瓦的屋頂在早晨的陽光下閃耀著明亮的橘色，遊客喜歡拍攝它們。",
  "cnMarked": "古廟【鋪瓦的】屋頂在早晨的陽光下閃耀著明亮的橘色，遊客喜歡拍攝它們。",
  "isHead": false,
  "level": null,
  "family": "tile"
 },
 {
  "word": "roof tile",
  "answer": "roof tiles",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "屋瓦",
  "en_def": "a tile used to cover a roof",
  "sentence": "Strong winds blew several {{BLANK}} off the house last night, so Dad will climb up and replace them this weekend.",
  "cn": "昨晚強風吹掉了房子的幾片屋瓦，所以爸爸這個週末會爬上去更換。",
  "cnMarked": "昨晚強風吹掉了房子的幾片【屋瓦】，所以爸爸這個週末會爬上去更換。",
  "isHead": false,
  "level": null,
  "family": "tile"
 },
 {
  "word": "tin",
  "answer": "tin",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "錫",
  "en_def": "a soft silver-colored metal",
  "sentence": "Long ago, people mixed copper with {{BLANK}} to make bronze, which was strong enough for tools and weapons.",
  "cn": "很久以前，人們把銅和錫混合製成青銅，它堅固到足以製作工具和武器。",
  "cnMarked": "很久以前，人們把銅和【錫】混合製成青銅，它堅固到足以製作工具和武器。",
  "isHead": true,
  "level": 5,
  "family": "tin"
 },
 {
  "word": "tin",
  "answer": "tin",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "罐頭；金屬罐",
  "en_def": "a metal container for food or drink; a can",
  "sentence": "We opened a {{BLANK}} of tomatoes and added it to the soup because we did not have any fresh ones at home.",
  "cn": "我們開了一罐番茄加進湯裡，因為家裡沒有新鮮的番茄。",
  "cnMarked": "我們開了一【罐】番茄加進湯裡，因為家裡沒有新鮮的番茄。",
  "isHead": false,
  "level": 5,
  "family": "tin"
 },
 {
  "word": "tin foil",
  "answer": "tin foil",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "錫箔紙；鋁箔紙",
  "en_def": "very thin metal sheet used to wrap food",
  "sentence": "Wrap the fish in {{BLANK}} with some lemon and butter before you put it in the oven for twenty minutes.",
  "cn": "把魚和一些檸檬及奶油用錫箔紙包起來，再放進烤箱烤二十分鐘。",
  "cnMarked": "把魚和一些檸檬及奶油用【錫箔紙】包起來，再放進烤箱烤二十分鐘。",
  "isHead": false,
  "level": null,
  "family": "tin"
 },
 {
  "word": "toll",
  "answer": "toll",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "通行費；過路費",
  "en_def": "money you pay to use a road, bridge, or tunnel",
  "sentence": "Drivers must pay a {{BLANK}} of forty dollars to cross the new bridge, but the old road is still free.",
  "cn": "駕駛人必須支付四十元的通行費才能過新橋，但舊路仍然免費。",
  "cnMarked": "駕駛人必須支付四十元的【通行費】才能過新橋，但舊路仍然免費。",
  "isHead": true,
  "level": 5,
  "family": "toll"
 },
 {
  "word": "toll",
  "answer": "toll",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "（事故、災難的）傷亡人數",
  "en_def": "the number of people killed or hurt in an accident or disaster",
  "sentence": "The {{BLANK}} from the earthquake rose to over three hundred as rescue workers searched the fallen buildings for survivors.",
  "cn": "隨著救難人員在倒塌的建築中搜尋生還者，地震的傷亡人數上升到三百多人。",
  "cnMarked": "隨著救難人員在倒塌的建築中搜尋生還者，地震的【傷亡人數】上升到三百多人。",
  "isHead": false,
  "level": 5,
  "family": "toll"
 },
 {
  "word": "toll",
  "answer": "toll",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "（緩慢地）鳴鐘",
  "en_def": "to ring a bell slowly, especially for a death",
  "sentence": "The church bells began to {{BLANK}} at noon to remember the soldiers who died in the war one hundred years ago.",
  "cn": "教堂的鐘在中午開始鳴響，以紀念一百年前在戰爭中陣亡的士兵。",
  "cnMarked": "教堂的鐘在中午開始【鳴響】，以紀念一百年前在戰爭中陣亡的士兵。",
  "isHead": false,
  "level": 5,
  "family": "toll"
 },
 {
  "word": "take a toll on",
  "answer": "took a toll on",
  "nblanks": 4,
  "pos": "v.phr.",
  "cn_def": "對…造成損害",
  "en_def": "to cause harm or damage over time",
  "sentence": "Years of working at night {{BLANK}} his health, and the doctor told him to find a daytime job as soon as possible.",
  "cn": "多年的夜班工作對他的健康造成了損害，醫生要他儘快找一份日班工作。",
  "cnMarked": "多年的夜班工作【對】他的健康【造成了損害】，醫生要他儘快找一份日班工作。",
  "isHead": false,
  "level": null,
  "family": "toll"
 },
 {
  "word": "death toll",
  "answer": "death toll",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "死亡人數",
  "en_def": "the number of people killed in an accident, war, or disaster",
  "sentence": "The {{BLANK}} from the flood is expected to rise, because many villages in the mountains still cannot be reached.",
  "cn": "洪水的死亡人數預計會上升，因為山區許多村莊仍然無法到達。",
  "cnMarked": "洪水的【死亡人數】預計會上升，因為山區許多村莊仍然無法到達。",
  "isHead": false,
  "level": null,
  "family": "toll"
 },
 {
  "word": "torch",
  "answer": "torch",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "火炬；火把；手電筒",
  "en_def": "a stick with a flame at the end that gives light; a small electric light you carry",
  "sentence": "The villagers carried a burning {{BLANK}} through the dark streets during the festival, and children followed with lanterns.",
  "cn": "慶典期間，村民們舉著燃燒的火炬走過黑暗的街道，孩子們提著燈籠跟在後面。",
  "cnMarked": "慶典期間，村民們舉著燃燒的【火炬】走過黑暗的街道，孩子們提著燈籠跟在後面。",
  "isHead": true,
  "level": 5,
  "family": "torch"
 },
 {
  "word": "torch",
  "answer": "torch",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "放火燒；縱火",
  "en_def": "to set fire to something on purpose",
  "sentence": "The police believe that someone tried to {{BLANK}} the empty shop last night, because they found matches and gasoline nearby.",
  "cn": "警方認為昨晚有人試圖縱火燒那間空店鋪，因為他們在附近發現了火柴和汽油。",
  "cnMarked": "警方認為昨晚有人試圖【縱火燒】那間空店鋪，因為他們在附近發現了火柴和汽油。",
  "isHead": false,
  "level": 5,
  "family": "torch"
 },
 {
  "word": "Olympic torch",
  "answer": "Olympic torch",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "奧運聖火",
  "en_def": "the flame carried from Greece to the city where the Olympic Games are held",
  "sentence": "Thousands of people lined the streets to watch a famous runner carry the {{BLANK}} through the center of the city.",
  "cn": "數千人站在街道兩旁，觀看一位著名跑者舉著奧運聖火穿過市中心。",
  "cnMarked": "數千人站在街道兩旁，觀看一位著名跑者舉著【奧運聖火】穿過市中心。",
  "isHead": false,
  "level": null,
  "family": "torch"
 },
 {
  "word": "torment",
  "answer": "torment",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "折磨；痛苦",
  "en_def": "great physical or mental pain",
  "sentence": "Waiting a whole month for the exam results was pure {{BLANK}} for her, and she checked the website ten times a day.",
  "cn": "等待整整一個月的考試成績對她來說是純粹的折磨，她每天查看網站十次。",
  "cnMarked": "等待整整一個月的考試成績對她來說是純粹的【折磨】，她每天查看網站十次。",
  "isHead": true,
  "level": 5,
  "family": "torment"
 },
 {
  "word": "torment",
  "answer": "torment",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "折磨；使痛苦",
  "en_def": "to make someone suffer greatly",
  "sentence": "The older boys used to {{BLANK}} him at school by hiding his bag and laughing when he could not find it.",
  "cn": "那些大男孩以前在學校常常折磨他，把他的書包藏起來，在他找不到時嘲笑他。",
  "cnMarked": "那些大男孩以前在學校常常【折磨】他，把他的書包藏起來，在他找不到時嘲笑他。",
  "isHead": false,
  "level": 5,
  "family": "torment"
 },
 {
  "word": "be tormented by",
  "answer": "was tormented by",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "受…折磨；飽受…之苦",
  "en_def": "to suffer greatly because of something",
  "sentence": "For years after the accident, the driver {{BLANK}} the thought that he could have stopped the car in time.",
  "cn": "事故發生後多年，那位駕駛一直飽受「他本來可以及時停車」這個念頭的折磨。",
  "cnMarked": "事故發生後多年，那位駕駛一直【飽受】「他本來可以及時停車」這個念頭【的折磨】。",
  "isHead": false,
  "level": null,
  "family": "torment"
 },
 {
  "word": "tournament",
  "answer": "tournament",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "錦標賽；聯賽",
  "en_def": "a competition with many players or teams, in which the winner goes on to the next round",
  "sentence": "Our school's basketball team will play in the national {{BLANK}} next month, and the first game is against last year's champions.",
  "cn": "我們學校的籃球隊下個月將參加全國錦標賽，第一場比賽的對手是去年的冠軍。",
  "cnMarked": "我們學校的籃球隊下個月將參加全國【錦標賽】，第一場比賽的對手是去年的冠軍。",
  "isHead": true,
  "level": 5,
  "family": "tournament"
 },
 {
  "word": "tennis tournament",
  "answer": "tennis tournament",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "網球錦標賽",
  "en_def": "a competition for tennis players",
  "sentence": "She won her first {{BLANK}} at the age of fourteen, beating players who were five or six years older.",
  "cn": "她十四歲時贏得了第一座網球錦標賽冠軍，擊敗了比她大五六歲的選手。",
  "cnMarked": "她十四歲時贏得了第一座【網球錦標賽】冠軍，擊敗了比她大五六歲的選手。",
  "isHead": false,
  "level": null,
  "family": "tournament"
 },
 {
  "word": "tour",
  "answer": "tour",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "旅行；巡迴（演出、比賽）",
  "en_def": "a journey to visit several places; a series of performances or games in different places",
  "sentence": "The band is going on a world {{BLANK}} next year, and the first concert will be held in Taipei in March.",
  "cn": "這個樂團明年將進行世界巡迴演出，第一場演唱會將於三月在台北舉行。",
  "cnMarked": "這個樂團明年將進行世界【巡迴演出】，第一場演唱會將於三月在台北舉行。",
  "isHead": false,
  "level": 2,
  "family": "tournament"
 },
 {
  "word": "toxic",
  "answer": "toxic",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "有毒的",
  "en_def": "poisonous; harmful to living things",
  "sentence": "The smoke from burning plastic is highly {{BLANK}}, so you should never burn garbage in your backyard.",
  "cn": "燃燒塑膠產生的煙是高度有毒的，所以你絕不應該在後院燒垃圾。",
  "cnMarked": "燃燒塑膠產生的煙是高度【有毒的】，所以你絕不應該在後院燒垃圾。",
  "isHead": true,
  "level": 5,
  "family": "toxic"
 },
 {
  "word": "toxic waste",
  "answer": "toxic waste",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "有毒廢棄物",
  "en_def": "poisonous material left over from factories",
  "sentence": "The factory was fined ten million dollars for dumping {{BLANK}} into the river that supplies the town with drinking water.",
  "cn": "這家工廠因為把有毒廢棄物倒入供應小鎮飲用水的河流而被罰款一千萬元。",
  "cnMarked": "這家工廠因為把【有毒廢棄物】倒入供應小鎮飲用水的河流而被罰款一千萬元。",
  "isHead": false,
  "level": null,
  "family": "toxic"
 },
 {
  "word": "toxin",
  "answer": "toxin",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "毒素",
  "en_def": "a poisonous substance, especially one made by living things",
  "sentence": "Some fish contain a powerful {{BLANK}} that can kill a person, so only trained chefs are allowed to prepare them.",
  "cn": "有些魚含有能致人於死的強烈毒素，所以只有受過訓練的廚師才可以料理牠們。",
  "cnMarked": "有些魚含有能致人於死的強烈【毒素】，所以只有受過訓練的廚師才可以料理牠們。",
  "isHead": false,
  "level": null,
  "family": "toxic"
 },
 {
  "word": "non-toxic",
  "answer": "non-toxic",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "無毒的",
  "en_def": "not poisonous; safe",
  "sentence": "These crayons are {{BLANK}}, so parents do not have to worry if their small children put them in their mouths.",
  "cn": "這些蠟筆是無毒的，所以如果小孩把它們放進嘴裡，父母不必擔心。",
  "cnMarked": "這些蠟筆是【無毒的】，所以如果小孩把它們放進嘴裡，父母不必擔心。",
  "isHead": false,
  "level": null,
  "family": "toxic"
 },
 {
  "word": "trait",
  "answer": "trait",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "特徵；特質；特點",
  "en_def": "a particular quality in someone's character or in a living thing",
  "sentence": "Honesty is the {{BLANK}} that I admire most in my best friend, because she always tells me the truth even when it hurts.",
  "cn": "誠實是我最欣賞我最好的朋友的特質，因為即使真相令人難受，她也總是對我說實話。",
  "cnMarked": "誠實是我最欣賞我最好的朋友的【特質】，因為即使真相令人難受，她也總是對我說實話。",
  "isHead": true,
  "level": 5,
  "family": "trait"
 },
 {
  "word": "personality trait",
  "answer": "personality trait",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "人格特質；性格特徵",
  "en_def": "a quality that is part of someone's character",
  "sentence": "Patience is an important {{BLANK}} for a teacher, because students do not always understand things the first time.",
  "cn": "耐心是老師重要的人格特質，因為學生並不總是第一次就能理解事情。",
  "cnMarked": "耐心是老師重要的【人格特質】，因為學生並不總是第一次就能理解事情。",
  "isHead": false,
  "level": null,
  "family": "trait"
 },
 {
  "word": "genetic trait",
  "answer": "genetic trait",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "遺傳特徵",
  "en_def": "a quality passed from parents to children through genes",
  "sentence": "Eye color is a {{BLANK}}, which is why two brown-eyed parents usually have children with brown eyes too.",
  "cn": "眼睛的顏色是一種遺傳特徵，這就是為什麼兩個棕眼睛的父母通常也會生出棕眼睛的孩子。",
  "cnMarked": "眼睛的顏色是一種【遺傳特徵】，這就是為什麼兩個棕眼睛的父母通常也會生出棕眼睛的孩子。",
  "isHead": false,
  "level": null,
  "family": "trait"
 },
 {
  "word": "traitor",
  "answer": "traitor",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "叛徒；叛國者",
  "en_def": "a person who is not loyal to their country, group, or friends",
  "sentence": "The general was called a {{BLANK}} after he secretly sold his country's military plans to the enemy during the war.",
  "cn": "那位將軍在戰爭期間秘密把國家的軍事計畫賣給敵人後，被稱為叛徒。",
  "cnMarked": "那位將軍在戰爭期間秘密把國家的軍事計畫賣給敵人後，被稱為【叛徒】。",
  "isHead": true,
  "level": 5,
  "family": "traitor"
 },
 {
  "word": "betray",
  "answer": "betray",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "背叛；出賣",
  "en_def": "to hurt someone who trusts you by not being loyal to them",
  "sentence": "I would never {{BLANK}} my best friend by telling her secrets to other people, no matter how angry I was at her.",
  "cn": "無論我多生她的氣，我絕不會把最好的朋友的秘密告訴別人來背叛她。",
  "cnMarked": "無論我多生她的氣，我絕不會把最好的朋友的秘密告訴別人來【背叛】她。",
  "isHead": false,
  "level": 5,
  "family": "traitor"
 },
 {
  "word": "betrayal",
  "answer": "betrayal",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "背叛；出賣",
  "en_def": "the act of hurting someone who trusts you",
  "sentence": "Reading her private diary was a {{BLANK}} of trust, and it took months before she could forgive her brother.",
  "cn": "偷看她的私人日記是一種對信任的背叛，她花了好幾個月才原諒她的哥哥。",
  "cnMarked": "偷看她的私人日記是一種對信任的【背叛】，她花了好幾個月才原諒她的哥哥。",
  "isHead": false,
  "level": null,
  "family": "traitor"
 },
 {
  "word": "treason",
  "answer": "treason",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "叛國罪",
  "en_def": "the crime of trying to harm your own country or its leader",
  "sentence": "In the past, anyone found guilty of {{BLANK}} was put to death, and even the king's closest friends were not safe.",
  "cn": "過去，任何被判叛國罪的人都會被處死，連國王最親近的朋友也不安全。",
  "cnMarked": "過去，任何被判【叛國罪】的人都會被處死，連國王最親近的朋友也不安全。",
  "isHead": false,
  "level": null,
  "family": "traitor"
 },
 {
  "word": "transaction",
  "answer": "transaction",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "交易；買賣",
  "en_def": "the act of buying or selling something; a business deal",
  "sentence": "You can see every {{BLANK}} on your bank app within seconds, so check it carefully if your card is lost or stolen.",
  "cn": "你可以在幾秒內在銀行 App 上看到每一筆交易，所以如果卡片遺失或被偷，請仔細檢查。",
  "cnMarked": "你可以在幾秒內在銀行 App 上看到每一筆【交易】，所以如果卡片遺失或被偷，請仔細檢查。",
  "isHead": true,
  "level": 5,
  "family": "transaction"
 },
 {
  "word": "transact",
  "answer": "transact",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "交易；辦理（業務）",
  "en_def": "to do business, such as buying or selling",
  "sentence": "Many small companies now {{BLANK}} most of their business online, so they no longer need an office in the city center.",
  "cn": "許多小公司現在大部分業務都在網路上交易，所以不再需要市中心的辦公室。",
  "cnMarked": "許多小公司現在大部分業務都在網路上【交易】，所以不再需要市中心的辦公室。",
  "isHead": false,
  "level": null,
  "family": "transaction"
 },
 {
  "word": "business transaction",
  "answer": "business transaction",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "商業交易",
  "en_def": "an act of buying or selling between companies or people",
  "sentence": "Every {{BLANK}} over one million dollars must be reported to the government, which helps to stop criminals from hiding money.",
  "cn": "每筆超過一百萬元的商業交易都必須向政府申報，這有助於防止罪犯藏匿資金。",
  "cnMarked": "每筆超過一百萬元的【商業交易】都必須向政府申報，這有助於防止罪犯藏匿資金。",
  "isHead": false,
  "level": null,
  "family": "transaction"
 },
 {
  "word": "transformation",
  "answer": "transformation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "轉變；變革；改造",
  "en_def": "a complete change in the form or appearance of something",
  "sentence": "The {{BLANK}} of the old factory into a modern art museum took five years and cost the city over a billion dollars.",
  "cn": "把舊工廠改造成現代藝術博物館花了五年，耗費市政府超過十億元。",
  "cnMarked": "把舊工廠【改造】成現代藝術博物館花了五年，耗費市政府超過十億元。",
  "isHead": true,
  "level": 5,
  "family": "transformation"
 },
 {
  "word": "transform",
  "answer": "transform",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "使徹底改變；改造",
  "en_def": "to change something completely, usually in a good way",
  "sentence": "A fresh coat of paint and some new furniture can {{BLANK}} a dark room into a bright and comfortable place to study.",
  "cn": "一層新油漆和一些新傢俱可以把一間昏暗的房間改造成明亮舒適的讀書空間。",
  "cnMarked": "一層新油漆和一些新傢俱可以【把】一間昏暗的房間【改造】成明亮舒適的讀書空間。",
  "isHead": false,
  "level": 4,
  "family": "transformation"
 },
 {
  "word": "transform into",
  "answer": "transform into",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "轉變成；變成",
  "en_def": "to change completely into something different",
  "sentence": "Over the summer, the shy boy seemed to {{BLANK}} a confident young man who could speak in front of hundreds of people.",
  "cn": "經過一個夏天，這個害羞的男孩似乎變成了一個能在數百人面前演講的自信年輕人。",
  "cnMarked": "經過一個夏天，這個害羞的男孩似乎【變成】了一個能在數百人面前演講的自信年輕人。",
  "isHead": false,
  "level": null,
  "family": "transformation"
 },
 {
  "word": "transit",
  "answer": "transit",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "運輸；運送；過境",
  "en_def": "the movement of people or goods from one place to another",
  "sentence": "Passengers who are only in {{BLANK}} through the airport do not need a visa, as long as they stay inside the building.",
  "cn": "只是在機場過境的旅客不需要簽證，只要他們待在航廈內。",
  "cnMarked": "只是在機場【過境】的旅客不需要簽證，只要他們待在航廈內。",
  "isHead": true,
  "level": 5,
  "family": "transit"
 },
 {
  "word": "in transit",
  "answer": "in transit",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "運送途中；在途中",
  "en_def": "being moved from one place to another",
  "sentence": "Your package is currently {{BLANK}} and should arrive at your door within two working days, according to the website.",
  "cn": "根據網站的資訊，你的包裹目前在運送途中，應該會在兩個工作天內送到你家門口。",
  "cnMarked": "根據網站的資訊，你的包裹目前【在運送途中】，應該會在兩個工作天內送到你家門口。",
  "isHead": false,
  "level": null,
  "family": "transit"
 },
 {
  "word": "mass transit",
  "answer": "mass transit",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "大眾運輸",
  "en_def": "public transportation such as buses and trains that carry many people",
  "sentence": "The city is spending billions on {{BLANK}} so that fewer people will drive to work and the air will be cleaner.",
  "cn": "市政府正花費數十億在大眾運輸上，這樣就會有更少的人開車上班，空氣也會更乾淨。",
  "cnMarked": "市政府正花費數十億在【大眾運輸】上，這樣就會有更少的人開車上班，空氣也會更乾淨。",
  "isHead": false,
  "level": null,
  "family": "transit"
 },
 {
  "word": "transition",
  "answer": "transition",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "過渡；轉變；轉換",
  "en_def": "the process of changing from one state or condition to another",
  "sentence": "The {{BLANK}} from elementary school to junior high was hard for me, because suddenly I had seven different teachers.",
  "cn": "從國小到國中的過渡期對我來說很難，因為突然間我有七個不同的老師。",
  "cnMarked": "從國小到國中的【過渡期】對我來說很難，因為突然間我有七個不同的老師。",
  "isHead": true,
  "level": 5,
  "family": "transition"
 },
 {
  "word": "transition to",
  "answer": "transition to",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "轉變為；過渡到",
  "en_def": "to change gradually to a new state or way of doing things",
  "sentence": "Many companies decided to {{BLANK}} a four-day work week last year, and most of their workers say they are happier now.",
  "cn": "許多公司去年決定轉變為每週工作四天，他們大多數的員工說現在更快樂了。",
  "cnMarked": "許多公司去年決定【轉變為】每週工作四天，他們大多數的員工說現在更快樂了。",
  "isHead": false,
  "level": null,
  "family": "transition"
 },
 {
  "word": "transitional",
  "answer": "transitional",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "過渡性的；過渡期的",
  "en_def": "connected with a change from one state to another",
  "sentence": "The new government will serve for a {{BLANK}} period of six months before the country holds its first free election.",
  "cn": "新政府將在國家舉行第一次自由選舉之前，先執政六個月的過渡期。",
  "cnMarked": "新政府將在國家舉行第一次自由選舉之前，先執政六個月的【過渡】期。",
  "isHead": false,
  "level": null,
  "family": "transition"
 },
 {
  "word": "transmission",
  "answer": "transmission",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "傳播；傳染；傳送",
  "en_def": "the act of passing something from one person or place to another, such as a disease or a message",
  "sentence": "Washing your hands often is the easiest way to stop the {{BLANK}} of the virus from one person to another.",
  "cn": "經常洗手是阻止病毒在人與人之間傳播最簡單的方法。",
  "cnMarked": "經常洗手是阻止病毒在人與人之間【傳播】最簡單的方法。",
  "isHead": true,
  "level": 5,
  "family": "transmission"
 },
 {
  "word": "transmit",
  "answer": "transmit",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "傳送；傳播；傳染",
  "en_def": "to send a signal or message; to pass a disease to someone",
  "sentence": "The satellite can {{BLANK}} a television signal to every home on the island within a fraction of a second.",
  "cn": "這顆衛星可以在不到一秒的時間內把電視訊號傳送到島上的每個家庭。",
  "cnMarked": "這顆衛星可以在不到一秒的時間內把電視訊號【傳送】到島上的每個家庭。",
  "isHead": false,
  "level": 6,
  "family": "transmission"
 },
 {
  "word": "transmitter",
  "answer": "transmitter",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "發射器；發射機",
  "en_def": "a piece of equipment that sends out radio or television signals",
  "sentence": "The radio station built a taller {{BLANK}} on the hill, so people in the valley can finally hear its programs clearly.",
  "cn": "電台在山丘上建了一座更高的發射器，所以山谷裡的人終於能清楚聽到它的節目。",
  "cnMarked": "電台在山丘上建了一座更高的【發射器】，所以山谷裡的人終於能清楚聽到它的節目。",
  "isHead": false,
  "level": null,
  "family": "transmission"
 },
 {
  "word": "transmission",
  "answer": "transmission",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "變速箱；傳動裝置",
  "en_def": "the part of a car that carries power from the engine to the wheels",
  "sentence": "The mechanic said the {{BLANK}} in my old car needs to be replaced, and the repair will cost more than the car is worth.",
  "cn": "技師說我那輛舊車的變速箱需要更換，而修理費會比車子本身的價值還高。",
  "cnMarked": "技師說我那輛舊車的【變速箱】需要更換，而修理費會比車子本身的價值還高。",
  "isHead": false,
  "level": 5,
  "family": "transmission"
 },
 {
  "word": "transparent",
  "answer": "transparent",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "透明的",
  "en_def": "clear enough to see through",
  "sentence": "The restaurant uses {{BLANK}} boxes for its cakes, so customers can see exactly what they are buying before they pay.",
  "cn": "這家餐廳的蛋糕使用透明的盒子，所以顧客在付錢前就能清楚看到自己買的東西。",
  "cnMarked": "這家餐廳的蛋糕使用【透明的】盒子，所以顧客在付錢前就能清楚看到自己買的東西。",
  "isHead": true,
  "level": 5,
  "family": "transparent"
 },
 {
  "word": "transparent",
  "answer": "transparent",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "公開透明的；坦率的",
  "en_def": "open and honest, with nothing hidden",
  "sentence": "Voters want the government to be more {{BLANK}} about how it spends their tax money every year.",
  "cn": "選民希望政府對每年如何使用他們的稅金更加公開透明。",
  "cnMarked": "選民希望政府對每年如何使用他們的稅金更加【公開透明】。",
  "isHead": false,
  "level": 5,
  "family": "transparent"
 },
 {
  "word": "transparency",
  "answer": "transparency",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "透明度；公開透明",
  "en_def": "the quality of being open and honest; the quality of being easy to see through",
  "sentence": "The charity publishes a full report every year to ensure {{BLANK}}, so donors know exactly where their money goes.",
  "cn": "這個慈善機構每年發布完整報告以確保透明度，讓捐款人清楚知道他們的錢去了哪裡。",
  "cnMarked": "這個慈善機構每年發布完整報告以確保【透明度】，讓捐款人清楚知道他們的錢去了哪裡。",
  "isHead": false,
  "level": null,
  "family": "transparent"
 },
 {
  "word": "trauma",
  "answer": "trauma",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "精神創傷；創傷",
  "en_def": "a very bad experience that causes lasting emotional pain; a serious injury",
  "sentence": "Losing their home in the fire was a terrible {{BLANK}} for the children, and they still have bad dreams about it.",
  "cn": "在火災中失去家園對孩子們來說是可怕的創傷，他們現在仍會做關於它的惡夢。",
  "cnMarked": "在火災中失去家園對孩子們來說是可怕的【創傷】，他們現在仍會做關於它的惡夢。",
  "isHead": true,
  "level": 5,
  "family": "trauma"
 },
 {
  "word": "traumatic",
  "answer": "traumatic",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "造成創傷的；令人痛苦的",
  "en_def": "causing great emotional pain that lasts a long time",
  "sentence": "The car accident was so {{BLANK}} for my aunt that she did not drive again for almost three years.",
  "cn": "那場車禍對我阿姨來說創傷太大，以至於她將近三年沒有再開車。",
  "cnMarked": "那場車禍對我阿姨來說【創傷太大】，以至於她將近三年沒有再開車。",
  "isHead": false,
  "level": null,
  "family": "trauma"
 },
 {
  "word": "traumatize",
  "answer": "traumatize",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "使受到精神創傷",
  "en_def": "to shock and upset someone so badly that it affects them for a long time",
  "sentence": "Seeing the earthquake destroy their school seemed to {{BLANK}} some of the younger students, so counselors were sent to help them.",
  "cn": "看到地震摧毀學校似乎使一些年幼的學生受到創傷，所以學校派了輔導人員去幫助他們。",
  "cnMarked": "看到地震摧毀學校似乎【使】一些年幼的學生【受到創傷】，所以學校派了輔導人員去幫助他們。",
  "isHead": false,
  "level": null,
  "family": "trauma"
 },
 {
  "word": "treaty",
  "answer": "treaty",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "條約；協定",
  "en_def": "a formal written agreement between two or more countries",
  "sentence": "The two countries signed a {{BLANK}} in 1895 that gave the island to Japan for the next fifty years.",
  "cn": "兩國在一八九五年簽署了一項條約，把這座島交給日本統治接下來的五十年。",
  "cnMarked": "兩國在一八九五年簽署了一項【條約】，把這座島交給日本統治接下來的五十年。",
  "isHead": true,
  "level": 5,
  "family": "treaty"
 },
 {
  "word": "peace treaty",
  "answer": "peace treaty",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "和平條約",
  "en_def": "an agreement that ends a war between countries",
  "sentence": "After four years of fighting, the leaders finally met in Paris to sign a {{BLANK}} and end the terrible war.",
  "cn": "經過四年的戰鬥，領導人終於在巴黎會面，簽署和平條約以結束那場可怕的戰爭。",
  "cnMarked": "經過四年的戰鬥，領導人終於在巴黎會面，簽署【和平條約】以結束那場可怕的戰爭。",
  "isHead": false,
  "level": null,
  "family": "treaty"
 },
 {
  "word": "sign a treaty",
  "answer": "signed a treaty",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "簽署條約",
  "en_def": "to formally agree to a written agreement between countries",
  "sentence": "More than one hundred countries {{BLANK}} promising to cut their carbon emissions in half by the year 2050.",
  "cn": "一百多個國家簽署了一項條約，承諾在二○五○年前將碳排放減半。",
  "cnMarked": "一百多個國家【簽署了一項條約】，承諾在二○五○年前將碳排放減半。",
  "isHead": false,
  "level": null,
  "family": "treaty"
 },
 {
  "word": "tribute",
  "answer": "tribute",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "致敬；讚頌；悼念",
  "en_def": "something you say or do to show respect or admiration for someone",
  "sentence": "The concert was a {{BLANK}} to the famous singer who died last year, and many of her old friends performed her songs.",
  "cn": "這場演唱會是對去年過世的知名歌手的致敬，她的許多老朋友演唱了她的歌。",
  "cnMarked": "這場演唱會是對去年過世的知名歌手的【致敬】，她的許多老朋友演唱了她的歌。",
  "isHead": true,
  "level": 5,
  "family": "tribute"
 },
 {
  "word": "pay tribute to",
  "answer": "paid tribute to",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "向…致敬；讚揚",
  "en_def": "to show respect or admiration for someone publicly",
  "sentence": "At the ceremony, the mayor {{BLANK}} the firefighters who saved more than fifty people from the burning hotel.",
  "cn": "在典禮上，市長向從燃燒的飯店中救出五十多人的消防員致敬。",
  "cnMarked": "在典禮上，市長【向】從燃燒的飯店中救出五十多人的消防員【致敬】。",
  "isHead": false,
  "level": null,
  "family": "tribute"
 },
 {
  "word": "tribute",
  "answer": "tribute",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "貢品；貢金",
  "en_def": "money or goods that one country or ruler had to pay to a more powerful one in the past",
  "sentence": "In ancient times, smaller kingdoms sent gold, silk, and horses as {{BLANK}} to the emperor every single year.",
  "cn": "古代，較小的王國每年都要把黃金、絲綢和馬匹作為貢品送給皇帝。",
  "cnMarked": "古代，較小的王國每年都要把黃金、絲綢和馬匹作為【貢品】送給皇帝。",
  "isHead": false,
  "level": 5,
  "family": "tribute"
 }
];
const MCQS = [
 {
  "q": "Families that earn less than thirty thousand dollars a month can get free lunches for their children. The government raised this ______ last year so that more families could join.",
  "options": [
   "treaty",
   "throne",
   "tribute",
   "threshold"
  ],
  "answer": 3,
  "vocabIndex": 0
 },
 {
  "q": "I had never been on a roller coaster before last Saturday. The ride was so fast that I still remember the ______ of racing down the first big hill.",
  "options": [
   "tile",
   "torment",
   "thrill",
   "toll"
  ],
  "answer": 2,
  "vocabIndex": 4
 },
 {
  "q": "My brother only likes books about detectives and dangerous killers. He read the whole ______ in one night because he had to find out who did it.",
  "options": [
   "thriller",
   "transit",
   "treaty",
   "tournament"
  ],
  "answer": 0,
  "vocabIndex": 5
 },
 {
  "q": "Hundreds of new families have moved into the area in the past two years. Because of all these new customers, the small shops along the street now ______ .",
  "options": [
   "thrust",
   "thrive",
   "transmit",
   "betray"
  ],
  "answer": 1,
  "vocabIndex": 9
 },
 {
  "q": "The old king died last month after ruling the country for forty years. His oldest daughter will now sit on the ______ and become the first queen in a century.",
  "options": [
   "toll",
   "threshold",
   "throne",
   "trait"
  ],
  "answer": 2,
  "vocabIndex": 12
 },
 {
  "q": "A rocket is very heavy, and it needs a huge amount of power to leave the ground. Its engines must produce enough ______ to push it up into the sky.",
  "options": [
   "thrust",
   "torch",
   "tick",
   "tin"
  ],
  "answer": 0,
  "vocabIndex": 15
 },
 {
  "q": "Please read each sentence on the form carefully before you answer. If you agree with a sentence, put a ______ in the small box next to it.",
  "options": [
   "tile",
   "tick",
   "toll",
   "trait"
  ],
  "answer": 1,
  "vocabIndex": 18
 },
 {
  "q": "Grandpa is making the bathroom floor look new again. He is covering it with small blue and white pieces, and each ______ must be placed very carefully.",
  "options": [
   "torch",
   "tick",
   "tile",
   "tin"
  ],
  "answer": 2,
  "vocabIndex": 22
 },
 {
  "q": "Thousands of years ago, people did not have iron tools yet. They mixed copper with ______ to make bronze, which was strong enough for knives and swords.",
  "options": [
   "tile",
   "trauma",
   "toll",
   "tin"
  ],
  "answer": 3,
  "vocabIndex": 26
 },
 {
  "q": "It costs forty dollars to drive across the new bridge, but the old road is free. Many drivers still take the old road because they do not want to pay the ______ .",
  "options": [
   "tin",
   "toll",
   "torment",
   "tick"
  ],
  "answer": 1,
  "vocabIndex": 29
 },
 {
  "q": "The electricity went out during the storm, and the whole house was dark. Luckily, Dad found a ______ in the kitchen drawer so that we could see.",
  "options": [
   "trait",
   "treaty",
   "throne",
   "torch"
  ],
  "answer": 3,
  "vocabIndex": 34
 },
 {
  "q": "The older boys hid Jimmy's shoes and laughed at him every day after school. For a whole year, going to school was a daily ______ for the poor boy.",
  "options": [
   "tribute",
   "torment",
   "transaction",
   "tournament"
  ],
  "answer": 1,
  "vocabIndex": 37
 },
 {
  "q": "Sixteen teams from all over Asia will come to Taipei next month to play basketball. The winner of each game goes on to the next round of the ______ .",
  "options": [
   "tournament",
   "transition",
   "treaty",
   "threshold"
  ],
  "answer": 0,
  "vocabIndex": 40
 },
 {
  "q": "Do not burn plastic bags or old batteries in your backyard. The smoke they produce is ______ , and breathing it can make people and animals very sick.",
  "options": [
   "transitional",
   "toxic",
   "thrilling",
   "transparent"
  ],
  "answer": 1,
  "vocabIndex": 43
 },
 {
  "q": "My grandfather never gives up, even when a job is very difficult. I hope I have the same ______ , because it has helped him succeed in his life.",
  "options": [
   "thrust",
   "tile",
   "toll",
   "trait"
  ],
  "answer": 3,
  "vocabIndex": 47
 },
 {
  "q": "During the war, the officer secretly gave his country's plans to the enemy. When the truth came out, everyone in the army called him a ______ .",
  "options": [
   "transmitter",
   "toxin",
   "traitor",
   "thriller"
  ],
  "answer": 2,
  "vocabIndex": 50
 },
 {
  "q": "I bought a new phone with my credit card yesterday afternoon. When I checked my bank app last night, the ______ was already there with the shop's name.",
  "options": [
   "transaction",
   "transmission",
   "transformation",
   "transit"
  ],
  "answer": 0,
  "vocabIndex": 54
 },
 {
  "q": "Ten years ago, this part of the city was full of empty factories and broken windows. Today it has parks, cafes, and new apartments. What a ______ !",
  "options": [
   "treason",
   "transmission",
   "transaction",
   "transformation"
  ],
  "answer": 3,
  "vocabIndex": 57
 },
 {
  "q": "Our plane stopped in Hong Kong for three hours before flying on to London. Passengers in ______ did not need a visa, but we had to stay inside the airport.",
  "options": [
   "tin",
   "transit",
   "trauma",
   "tribute"
  ],
  "answer": 1,
  "vocabIndex": 60
 },
 {
  "q": "Moving from a small village to a big city was not easy for my family. The ______ took almost a year, but now we all enjoy living here.",
  "options": [
   "transition",
   "tournament",
   "transmitter",
   "throne"
  ],
  "answer": 0,
  "vocabIndex": 63
 },
 {
  "q": "Doctors say that washing your hands often is the best way to stay healthy during flu season. It helps to stop the ______ of the virus from one person to another.",
  "options": [
   "transit",
   "transaction",
   "transmission",
   "torment"
  ],
  "answer": 2,
  "vocabIndex": 66
 },
 {
  "q": "The new office building has walls made entirely of glass. They are so ______ that people walking by on the street can see the workers at their desks.",
  "options": [
   "thrilled",
   "thriving",
   "toxic",
   "transparent"
  ],
  "answer": 3,
  "vocabIndex": 70
 },
 {
  "q": "The big fire destroyed the family's home and everything in it. The children still have bad dreams about that night, and doctors say it may take years to recover from the ______ .",
  "options": [
   "trauma",
   "tribute",
   "treaty",
   "threshold"
  ],
  "answer": 0,
  "vocabIndex": 73
 },
 {
  "q": "The two countries fought for five long years. Finally, their leaders met in Paris and signed a ______ that ended the war and opened the borders again.",
  "options": [
   "tournament",
   "toll",
   "treaty",
   "torch"
  ],
  "answer": 2,
  "vocabIndex": 76
 },
 {
  "q": "The famous singer died last spring after fifty years of making music. Last night, dozens of artists sang her best songs on stage as a ______ to her life and work.",
  "options": [
   "trait",
   "tribute",
   "transit",
   "tile"
  ],
  "answer": 1,
  "vocabIndex": 79
 },
 {
  "q": "The old train station was dark and dirty, and nobody liked to wait there. The city plans to ______ it into a bright shopping center with restaurants and a cinema.",
  "options": [
   "transmit",
   "thrive",
   "torch",
   "transform"
  ],
  "answer": 3,
  "vocabIndex": 58
 },
 {
  "q": "The new radio tower on the hill is very powerful. It can ______ music and news to every village in the valley, even those that are far away.",
  "options": [
   "transmit",
   "thrust",
   "betray",
   "tile"
  ],
  "answer": 0,
  "vocabIndex": 67
 },
 {
  "q": "I told Amy my biggest secret because she promised not to tell anyone. The next day, the whole class knew. I cannot believe she would ______ me like that.",
  "options": [
   "thrill",
   "betray",
   "transact",
   "tick"
  ],
  "answer": 1,
  "vocabIndex": 51
 },
 {
  "q": "The last five minutes of the game were so ______ that nobody in the stadium sat down. Our team scored the winning goal with only two seconds left.",
  "options": [
   "thrilling",
   "tiled",
   "traumatic",
   "toxic"
  ],
  "answer": 0,
  "vocabIndex": 8
 },
 {
  "q": "The charity publishes a report every year showing exactly how it spends its money. Donors trust it because of this ______ , and they keep giving generously.",
  "options": [
   "treason",
   "transformation",
   "transparency",
   "torment"
  ],
  "answer": 2,
  "vocabIndex": 72
 }
];
const LOOKUP = {};
VOCAB.forEach(v => { const key = v.word.toLowerCase(); const sense = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def };
  if (LOOKUP[key]) LOOKUP[key].combined.push(sense); else LOOKUP[key] = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def, combined: [sense] }; });
const EXTRA_GLOSSES = {};