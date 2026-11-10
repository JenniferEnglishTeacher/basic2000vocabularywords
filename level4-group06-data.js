// 學測6000字 Level 4 Group 06 (catalogue-cliff) — word-family edition
const QUIZ_CONFIG = {
  groupName: "6000字 L4 Group 6 - catalogue – cliff (word family)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};
const VOCAB = [
 {
  "word": "catalogue",
  "answer": "catalogue",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "目錄",
  "en_def": "a list of all the things you can buy, see, or borrow from a place",
  "sentence": "Before we visited the furniture store, my mother looked through the {{BLANK}} and marked the sofas she liked.",
  "cn": "在我們去家具店之前，媽媽先翻閱了目錄，並標出她喜歡的沙發。",
  "cnMarked": "在我們去家具店之前，媽媽先翻閱了【目錄】，並標出她喜歡的沙發。",
  "isHead": true,
  "level": 4,
  "family": "catalogue"
 },
 {
  "word": "catalogue",
  "answer": "catalogue",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "編目；列入目錄",
  "en_def": "to make a complete list of things in order",
  "sentence": "The librarian spent the whole summer trying to {{BLANK}} the old books that were donated by a retired professor.",
  "cn": "圖書館員花了整個夏天，努力把一位退休教授捐贈的舊書編目。",
  "cnMarked": "圖書館員花了整個夏天，努力把一位退休教授捐贈的舊書【編目】。",
  "isHead": false,
  "level": 4,
  "family": "catalogue"
 },
 {
  "word": "catalog",
  "answer": "catalog",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "目錄（美式拼法）",
  "en_def": "the American spelling of catalogue",
  "sentence": "The university sends a course {{BLANK}} to every new student, so they can choose their classes before the semester starts.",
  "cn": "大學會寄一本課程目錄給每位新生，讓他們在學期開始前選課。",
  "cnMarked": "大學會寄一本課程【目錄】給每位新生，讓他們在學期開始前選課。",
  "isHead": false,
  "level": null,
  "family": "catalogue"
 },
 {
  "word": "category",
  "answer": "category",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "類別；種類",
  "en_def": "a group of people or things that are similar in some way",
  "sentence": "Movies in this {{BLANK}} are only for adults, so the cinema staff checked our ID cards at the door.",
  "cn": "這個類別的電影只限成人觀看，所以電影院員工在門口檢查了我們的身分證。",
  "cnMarked": "這個【類別】的電影只限成人觀看，所以電影院員工在門口檢查了我們的身分證。",
  "isHead": true,
  "level": 4,
  "family": "category"
 },
 {
  "word": "categorize",
  "answer": "categorize",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "分類",
  "en_def": "to put people or things into groups by type",
  "sentence": "The teacher asked us to {{BLANK}} the animals into three groups: those that fly, swim, or walk.",
  "cn": "老師要我們把動物分類成三組：會飛的、會游的和會走的。",
  "cnMarked": "老師要我們把動物【分類】成三組：會飛的、會游的和會走的。",
  "isHead": false,
  "level": null,
  "family": "category"
 },
 {
  "word": "fall into a category",
  "answer": "fall into the category",
  "nblanks": 4,
  "pos": "v.phr.",
  "cn_def": "屬於某一類別",
  "en_def": "to belong to a certain group or type",
  "sentence": "Whales {{BLANK}} of mammals rather than fish, even though they live in the sea and look like huge fish.",
  "cn": "鯨魚屬於哺乳動物的類別而不是魚類，即使它們生活在海裡，看起來像巨大的魚。",
  "cnMarked": "鯨魚【屬於】哺乳動物的【類別】而不是魚類，即使它們生活在海裡，看起來像巨大的魚。",
  "isHead": false,
  "level": null,
  "family": "category"
 },
 {
  "word": "cease",
  "answer": "cease",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "停止",
  "en_def": "to stop happening or stop doing something",
  "sentence": "The heavy rain finally began to {{BLANK}} at midnight, and the workers were able to repair the broken bridge the next morning.",
  "cn": "大雨終於在午夜開始停止，工人隔天早上才得以修理損壞的橋。",
  "cnMarked": "大雨終於在午夜開始【停止】，工人隔天早上才得以修理損壞的橋。",
  "isHead": true,
  "level": 4,
  "family": "cease"
 },
 {
  "word": "cease to do sth",
  "answer": "ceased to",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "不再做某事",
  "en_def": "to no longer do something",
  "sentence": "After the factory closed, the small town slowly {{BLANK}} be a busy place, and many young people moved to the city.",
  "cn": "工廠關閉後，這個小鎮慢慢地不再是個熱鬧的地方，許多年輕人搬到城市去了。",
  "cnMarked": "工廠關閉後，這個小鎮慢慢地【不再】是個熱鬧的地方，許多年輕人搬到城市去了。",
  "isHead": false,
  "level": null,
  "family": "cease"
 },
 {
  "word": "ceaseless",
  "answer": "ceaseless",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "不停的；不斷的",
  "en_def": "never stopping; continuing all the time",
  "sentence": "The {{BLANK}} noise from the construction site next door made it impossible for me to study for my final exams.",
  "cn": "隔壁工地不停的噪音讓我根本無法為期末考讀書。",
  "cnMarked": "隔壁工地【不停的】噪音讓我根本無法為期末考讀書。",
  "isHead": false,
  "level": null,
  "family": "cease"
 },
 {
  "word": "ceasefire",
  "answer": "ceasefire",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "停火",
  "en_def": "an agreement to stop fighting for a period of time",
  "sentence": "Both sides agreed to a {{BLANK}} so that doctors could enter the city and help the people who were hurt.",
  "cn": "雙方同意停火，這樣醫生才能進入城市幫助受傷的人。",
  "cnMarked": "雙方同意【停火】，這樣醫生才能進入城市幫助受傷的人。",
  "isHead": false,
  "level": null,
  "family": "cease"
 },
 {
  "word": "celebration",
  "answer": "celebration",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "慶祝活動；慶典",
  "en_def": "a party or special event for an important day",
  "sentence": "The {{BLANK}} of my grandparents' fiftieth wedding anniversary was held in a big restaurant, and over a hundred relatives came.",
  "cn": "我爺爺奶奶金婚五十週年的慶祝活動在一家大餐廳舉行，來了一百多位親戚。",
  "cnMarked": "我爺爺奶奶金婚五十週年的【慶祝活動】在一家大餐廳舉行，來了一百多位親戚。",
  "isHead": true,
  "level": 4,
  "family": "celebration"
 },
 {
  "word": "celebrate",
  "answer": "celebrate",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "慶祝",
  "en_def": "to do something special and enjoyable for an important event",
  "sentence": "We are going to {{BLANK}} my sister's graduation by having dinner at her favorite Japanese restaurant this Saturday.",
  "cn": "這個星期六我們要到我姐姐最愛的日本餐廳吃晚餐，來慶祝她畢業。",
  "cnMarked": "這個星期六我們要到我姐姐最愛的日本餐廳吃晚餐，來【慶祝】她畢業。",
  "isHead": false,
  "level": 1,
  "family": "celebration"
 },
 {
  "word": "celebrated",
  "answer": "celebrated",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "著名的；備受讚譽的",
  "en_def": "famous and praised by many people",
  "sentence": "The {{BLANK}} chef opened a new restaurant in Taipei, and people waited in line for three hours to taste his food.",
  "cn": "這位著名的廚師在台北開了一家新餐廳，人們排隊三小時只為品嚐他的料理。",
  "cnMarked": "這位【著名的】廚師在台北開了一家新餐廳，人們排隊三小時只為品嚐他的料理。",
  "isHead": false,
  "level": null,
  "family": "celebration"
 },
 {
  "word": "celebrity",
  "answer": "celebrity",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "名人",
  "en_def": "a famous person, especially in entertainment",
  "sentence": "When the {{BLANK}} walked into the shopping mall, hundreds of fans ran toward her and asked for photos.",
  "cn": "當那位名人走進購物中心時，數百名粉絲衝向她要求合照。",
  "cnMarked": "當那位【名人】走進購物中心時，數百名粉絲衝向她要求合照。",
  "isHead": false,
  "level": 5,
  "family": "celebration"
 },
 {
  "word": "in celebration of",
  "answer": "in celebration of",
  "nblanks": 3,
  "pos": "phr.",
  "cn_def": "為了慶祝…",
  "en_def": "in order to celebrate something",
  "sentence": "The city held a huge fireworks show {{BLANK}} its one hundredth birthday, and the sky was bright for twenty minutes.",
  "cn": "這座城市為了慶祝一百歲生日舉辦了盛大的煙火秀，天空亮了二十分鐘。",
  "cnMarked": "這座城市【為了慶祝】一百歲生日舉辦了盛大的煙火秀，天空亮了二十分鐘。",
  "isHead": false,
  "level": null,
  "family": "celebration"
 },
 {
  "word": "chamber",
  "answer": "chamber",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "房間；室；腔",
  "en_def": "a room used for a special purpose; a closed space inside something",
  "sentence": "The king's secret {{BLANK}} was hidden behind a large painting, and only his most trusted servants knew about it.",
  "cn": "國王的秘密房間藏在一幅大畫後面，只有他最信任的僕人知道。",
  "cnMarked": "國王的秘密【房間】藏在一幅大畫後面，只有他最信任的僕人知道。",
  "isHead": true,
  "level": 4,
  "family": "chamber"
 },
 {
  "word": "chamber music",
  "answer": "chamber music",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "室內樂",
  "en_def": "classical music played by a small group of musicians",
  "sentence": "My aunt plays the cello in a {{BLANK}} group, and they perform in small halls where the audience can sit very close.",
  "cn": "我阿姨在一個室內樂團裡拉大提琴，他們在觀眾可以坐得很近的小廳演出。",
  "cnMarked": "我阿姨在一個【室內樂】團裡拉大提琴，他們在觀眾可以坐得很近的小廳演出。",
  "isHead": false,
  "level": null,
  "family": "chamber"
 },
 {
  "word": "chamber of commerce",
  "answer": "chamber of commerce",
  "nblanks": 3,
  "pos": "n.phr.",
  "cn_def": "商會",
  "en_def": "a group of business people who work together to help local business",
  "sentence": "The local {{BLANK}} organized a night market festival to bring more visitors to the shops in the old town.",
  "cn": "當地商會舉辦了夜市節，為老城區的商店帶來更多遊客。",
  "cnMarked": "當地【商會】舉辦了夜市節，為老城區的商店帶來更多遊客。",
  "isHead": false,
  "level": null,
  "family": "chamber"
 },
 {
  "word": "championship",
  "answer": "championship",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "錦標賽；冠軍賽",
  "en_def": "a competition to find the best player or team",
  "sentence": "Our school basketball team won the national {{BLANK}} last year, and the whole town celebrated with a big parade.",
  "cn": "我們學校的籃球隊去年贏得全國錦標賽，全鎮舉辦了一場大遊行來慶祝。",
  "cnMarked": "我們學校的籃球隊去年贏得全國【錦標賽】，全鎮舉辦了一場大遊行來慶祝。",
  "isHead": true,
  "level": 4,
  "family": "championship"
 },
 {
  "word": "champion",
  "answer": "champion",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "冠軍",
  "en_def": "a person or team that wins a competition",
  "sentence": "The young tennis player became the youngest {{BLANK}} in the history of the tournament when she was only seventeen.",
  "cn": "這位年輕的網球選手在十七歲時成為該賽事史上最年輕的冠軍。",
  "cnMarked": "這位年輕的網球選手在十七歲時成為該賽事史上最年輕的【冠軍】。",
  "isHead": false,
  "level": 3,
  "family": "championship"
 },
 {
  "word": "defending champion",
  "answer": "defending champion",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "衛冕冠軍",
  "en_def": "the player or team that won the last competition",
  "sentence": "Nobody expected the {{BLANK}} to lose in the first round, so the fans in the stadium were shocked and silent.",
  "cn": "沒有人預料到衛冕冠軍會在第一輪就輸掉，所以體育場裡的球迷震驚又沉默。",
  "cnMarked": "沒有人預料到【衛冕冠軍】會在第一輪就輸掉，所以體育場裡的球迷震驚又沉默。",
  "isHead": false,
  "level": null,
  "family": "championship"
 },
 {
  "word": "champion",
  "answer": "champion",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "擁護；支持",
  "en_def": "to support or fight for an idea or a group of people",
  "sentence": "The famous actress has used her fame to {{BLANK}} the rights of children who cannot afford to go to school.",
  "cn": "這位知名女演員利用她的名氣來擁護無法負擔上學費用的孩子的權利。",
  "cnMarked": "這位知名女演員利用她的名氣來【擁護】無法負擔上學費用的孩子的權利。",
  "isHead": false,
  "level": 3,
  "family": "championship"
 },
 {
  "word": "characteristic",
  "answer": "characteristic",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "特徵；特色",
  "en_def": "a typical quality or feature of a person or thing",
  "sentence": "Patience is an important {{BLANK}} of a good teacher, because students do not always understand things the first time.",
  "cn": "耐心是好老師的重要特徵，因為學生不一定第一次就能理解。",
  "cnMarked": "耐心是好老師的重要【特徵】，因為學生不一定第一次就能理解。",
  "isHead": true,
  "level": 4,
  "family": "characteristic"
 },
 {
  "word": "characteristic",
  "answer": "characteristic",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "典型的；特有的",
  "en_def": "typical of a particular person or thing",
  "sentence": "With his {{BLANK}} big smile, the host welcomed every guest at the door and remembered all of their names.",
  "cn": "主持人帶著他特有的大笑容在門口歡迎每位來賓，而且記得他們所有人的名字。",
  "cnMarked": "主持人帶著他【特有的】大笑容在門口歡迎每位來賓，而且記得他們所有人的名字。",
  "isHead": false,
  "level": 4,
  "family": "characteristic"
 },
 {
  "word": "character",
  "answer": "character",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "性格；人物；角色",
  "en_def": "the qualities that make a person who they are; a person in a story",
  "sentence": "My favorite {{BLANK}} in the novel is the brave little girl who saves her village from the dragon.",
  "cn": "這本小說裡我最喜歡的角色是那個勇敢的小女孩，她從惡龍手中救了她的村子。",
  "cnMarked": "這本小說裡我最喜歡的【角色】是那個勇敢的小女孩，她從惡龍手中救了她的村子。",
  "isHead": false,
  "level": 2,
  "family": "characteristic"
 },
 {
  "word": "characterize",
  "answer": "characterize",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "描繪…的特性；是…的特徵",
  "en_def": "to describe the typical qualities of something",
  "sentence": "Heavy rain and strong winds {{BLANK}} the typhoon season in Taiwan, so people always prepare extra food and water.",
  "cn": "大雨和強風是台灣颱風季節的特徵，所以人們總是會準備額外的食物和水。",
  "cnMarked": "大雨和強風【是】台灣颱風季節【的特徵】，所以人們總是會準備額外的食物和水。",
  "isHead": false,
  "level": 5,
  "family": "characteristic"
 },
 {
  "word": "charity",
  "answer": "charity",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "慈善機構；慈善",
  "en_def": "an organization that helps poor or sick people; the act of giving to them",
  "sentence": "Every winter, my family gives warm clothes to a {{BLANK}} that takes care of homeless people in the city.",
  "cn": "每年冬天，我們家都會把保暖衣物送給一個照顧城裡無家可歸者的慈善機構。",
  "cnMarked": "每年冬天，我們家都會把保暖衣物送給一個照顧城裡無家可歸者的【慈善機構】。",
  "isHead": true,
  "level": 4,
  "family": "charity"
 },
 {
  "word": "charitable",
  "answer": "charitable",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "慈善的；仁慈的",
  "en_def": "kind and generous in helping people who need it",
  "sentence": "The {{BLANK}} businessman donated half of his money to build free hospitals for children in poor villages.",
  "cn": "這位慈善的企業家捐出一半的財產，為貧窮村莊的孩子蓋免費醫院。",
  "cnMarked": "這位【慈善的】企業家捐出一半的財產，為貧窮村莊的孩子蓋免費醫院。",
  "isHead": false,
  "level": 6,
  "family": "charity"
 },
 {
  "word": "for charity",
  "answer": "for charity",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "為了慈善；為公益",
  "en_def": "in order to raise money to help people in need",
  "sentence": "The students sold homemade cookies at the school fair {{BLANK}}, and they raised twenty thousand dollars in one day.",
  "cn": "學生們在園遊會上為公益販售自製餅乾，一天就募到了兩萬元。",
  "cnMarked": "學生們在園遊會上【為公益】販售自製餅乾，一天就募到了兩萬元。",
  "isHead": false,
  "level": null,
  "family": "charity"
 },
 {
  "word": "chemistry",
  "answer": "chemistry",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "化學",
  "en_def": "the science that studies what things are made of and how they change",
  "sentence": "In our {{BLANK}} class today, we mixed two clear liquids together, and they suddenly turned bright blue.",
  "cn": "今天的化學課上，我們把兩種透明液體混合在一起，它們突然變成了亮藍色。",
  "cnMarked": "今天的【化學】課上，我們把兩種透明液體混合在一起，它們突然變成了亮藍色。",
  "isHead": true,
  "level": 4,
  "family": "chemistry"
 },
 {
  "word": "chemical",
  "answer": "chemical",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "化學的",
  "en_def": "relating to chemistry or produced by it",
  "sentence": "The {{BLANK}} smell in the swimming pool was so strong that some of the children started coughing and had to leave.",
  "cn": "游泳池裡的化學味太重了，有些孩子開始咳嗽，不得不離開。",
  "cnMarked": "游泳池裡的【化學】味太重了，有些孩子開始咳嗽，不得不離開。",
  "isHead": false,
  "level": 2,
  "family": "chemistry"
 },
 {
  "word": "chemical",
  "answer": "chemical",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "化學物質；化學品",
  "en_def": "a substance made by or used in chemistry",
  "sentence": "Farmers should be careful when they spray this {{BLANK}} on their fruit trees, because it can be harmful to bees.",
  "cn": "農民在果樹上噴灑這種化學藥劑時應該小心，因為它可能對蜜蜂有害。",
  "cnMarked": "農民在果樹上噴灑這種【化學藥劑】時應該小心，因為它可能對蜜蜂有害。",
  "isHead": false,
  "level": 2,
  "family": "chemistry"
 },
 {
  "word": "chemist",
  "answer": "chemist",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "化學家；藥劑師",
  "en_def": "a scientist who studies chemistry; a pharmacist (UK)",
  "sentence": "The {{BLANK}} worked in her laboratory for ten years before she finally discovered a safer way to clean drinking water.",
  "cn": "這位化學家在實驗室裡工作了十年，終於找到一種更安全的淨化飲用水的方法。",
  "cnMarked": "這位【化學家】在實驗室裡工作了十年，終於找到一種更安全的淨化飲用水的方法。",
  "isHead": false,
  "level": 6,
  "family": "chemistry"
 },
 {
  "word": "cherish",
  "answer": "cherish",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "珍惜；珍愛",
  "en_def": "to love and take great care of someone or something",
  "sentence": "I will always {{BLANK}} the handmade scarf my grandmother gave me, even though it is old and a little torn now.",
  "cn": "我會一直珍惜奶奶送我的手織圍巾，雖然它現在已經舊了，還有點破。",
  "cnMarked": "我會一直【珍惜】奶奶送我的手織圍巾，雖然它現在已經舊了，還有點破。",
  "isHead": true,
  "level": 4,
  "family": "cherish"
 },
 {
  "word": "cherished",
  "answer": "cherished",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "珍愛的；珍視的",
  "en_def": "loved and very important to someone",
  "sentence": "Her most {{BLANK}} dream is to open a small bookstore by the sea, where people can read all day.",
  "cn": "她最珍視的夢想是在海邊開一家小書店，讓人們可以整天閱讀。",
  "cnMarked": "她最【珍視的】夢想是在海邊開一家小書店，讓人們可以整天閱讀。",
  "isHead": false,
  "level": null,
  "family": "cherish"
 },
 {
  "word": "cherish the memory of",
  "answer": "cherishes the memory of",
  "nblanks": 4,
  "pos": "v.phr.",
  "cn_def": "珍藏…的回憶",
  "en_def": "to keep a happy memory of someone or something in your heart",
  "sentence": "Even after fifty years, my grandfather still {{BLANK}} the summer he spent fishing with his brothers by the river.",
  "cn": "即使過了五十年，我爺爺仍然珍藏著他和兄弟們在河邊釣魚的那個夏天的回憶。",
  "cnMarked": "即使過了五十年，我爺爺仍然【珍藏著】他和兄弟們在河邊釣魚的那個夏天【的回憶】。",
  "isHead": false,
  "level": null,
  "family": "cherish"
 },
 {
  "word": "chew",
  "answer": "chew",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "咀嚼；咬",
  "en_def": "to bite food several times with your teeth before swallowing",
  "sentence": "The dentist told me to {{BLANK}} my food slowly on both sides, because my new tooth is still a little weak.",
  "cn": "牙醫告訴我要用兩側慢慢咀嚼食物，因為我的新牙還有點脆弱。",
  "cnMarked": "牙醫告訴我要用兩側慢慢【咀嚼】食物，因為我的新牙還有點脆弱。",
  "isHead": true,
  "level": 4,
  "family": "chew"
 },
 {
  "word": "chewing gum",
  "answer": "chewing gum",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "口香糖",
  "en_def": "a soft sweet that you chew but do not swallow",
  "sentence": "You are not allowed to eat {{BLANK}} in class, because some students stick it under the desks when they finish.",
  "cn": "上課時不可以吃口香糖，因為有些學生吃完後會把它黏在桌子底下。",
  "cnMarked": "上課時不可以吃【口香糖】，因為有些學生吃完後會把它黏在桌子底下。",
  "isHead": false,
  "level": null,
  "family": "chew"
 },
 {
  "word": "chew on/over",
  "answer": "chew on",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "仔細考慮；反覆思量",
  "en_def": "to think carefully about something for a long time",
  "sentence": "The job offer sounds good, but let me {{BLANK}} it for a few days before I give you my final answer.",
  "cn": "這份工作機會聽起來不錯，但在給你最後答覆之前，讓我仔細考慮幾天。",
  "cnMarked": "這份工作機會聽起來不錯，但在給你最後答覆之前，讓我【仔細考慮】幾天。",
  "isHead": false,
  "level": null,
  "family": "chew"
 },
 {
  "word": "chewy",
  "answer": "chewy",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "有嚼勁的；耐嚼的",
  "en_def": "needing to be chewed a lot before you can swallow it",
  "sentence": "The bread at this bakery is soft on the outside but {{BLANK}} inside, which is why my brother buys it every week.",
  "cn": "這家麵包店的麵包外軟內有嚼勁，這就是我哥哥每週都去買的原因。",
  "cnMarked": "這家麵包店的麵包外軟內【有嚼勁】，這就是我哥哥每週都去買的原因。",
  "isHead": false,
  "level": null,
  "family": "chew"
 },
 {
  "word": "choke",
  "answer": "choke",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "窒息；噎住；使窒息",
  "en_def": "to be unable to breathe because something is blocking your throat",
  "sentence": "The thick smoke from the fire made the people in the building {{BLANK}} and cough as they ran toward the exit.",
  "cn": "火災產生的濃煙使大樓裡的人們在跑向出口時窒息咳嗽。",
  "cnMarked": "火災產生的濃煙使大樓裡的人們在跑向出口時【窒息】咳嗽。",
  "isHead": true,
  "level": 4,
  "family": "choke"
 },
 {
  "word": "choke on",
  "answer": "choked on",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "被…噎住",
  "en_def": "to have trouble breathing because of something in your throat",
  "sentence": "My little cousin almost {{BLANK}} a piece of candy, so now my aunt only gives him soft food to eat.",
  "cn": "我的小表弟差點被一顆糖果噎住，所以現在我阿姨只給他吃軟的食物。",
  "cnMarked": "我的小表弟差點【被】一顆糖果【噎住】，所以現在我阿姨只給他吃軟的食物。",
  "isHead": false,
  "level": null,
  "family": "choke"
 },
 {
  "word": "choke back",
  "answer": "choke back",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "強忍（淚水、情緒）",
  "en_def": "to stop yourself from showing a strong feeling such as tears",
  "sentence": "At the end of the graduation ceremony, the teacher had to {{BLANK}} her tears as she said goodbye to the students.",
  "cn": "畢業典禮結束時，老師在向學生道別時不得不強忍淚水。",
  "cnMarked": "畢業典禮結束時，老師在向學生道別時不得不【強忍】淚水。",
  "isHead": false,
  "level": null,
  "family": "choke"
 },
 {
  "word": "chorus",
  "answer": "chorus",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "合唱部分；副歌",
  "en_def": "the part of a song that is repeated after each verse",
  "sentence": "Most people cannot remember the words to the whole song, but everyone sings along when the {{BLANK}} begins.",
  "cn": "大多數人記不住整首歌的歌詞，但副歌一開始大家就會跟著唱。",
  "cnMarked": "大多數人記不住整首歌的歌詞，但【副歌】一開始大家就會跟著唱。",
  "isHead": true,
  "level": 4,
  "family": "chorus"
 },
 {
  "word": "chorus",
  "answer": "chorus",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "合唱團",
  "en_def": "a large group of people who sing together",
  "sentence": "My brother joined the school {{BLANK}} this year, and they will perform at the Christmas concert in December.",
  "cn": "我哥哥今年加入了學校的合唱團，他們將在十二月的聖誕音樂會上表演。",
  "cnMarked": "我哥哥今年加入了學校的【合唱團】，他們將在十二月的聖誕音樂會上表演。",
  "isHead": false,
  "level": 4,
  "family": "chorus"
 },
 {
  "word": "in chorus",
  "answer": "in chorus",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "齊聲；一致地",
  "en_def": "said or sung by many people at the same time",
  "sentence": "When the teacher asked who wanted to go on the field trip, the whole class shouted \"Yes!\" {{BLANK}}.",
  "cn": "當老師問誰想去校外教學時，全班齊聲大喊：「要！」",
  "cnMarked": "當老師問誰想去校外教學時，全班【齊聲】大喊：「要！」",
  "isHead": false,
  "level": null,
  "family": "chorus"
 },
 {
  "word": "choir",
  "answer": "choir",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "合唱團；唱詩班",
  "en_def": "a group of people who sing together, especially in a church or school",
  "sentence": "The church {{BLANK}} practices every Thursday evening, and their beautiful singing can be heard from the street.",
  "cn": "教堂的唱詩班每週四晚上練習，從街上就能聽到他們美妙的歌聲。",
  "cnMarked": "教堂的【唱詩班】每週四晚上練習，從街上就能聽到他們美妙的歌聲。",
  "isHead": false,
  "level": 5,
  "family": "chorus"
 },
 {
  "word": "circular",
  "answer": "circular",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "圓形的；環形的",
  "en_def": "shaped like a circle; moving around in a circle",
  "sentence": "The new library has a {{BLANK}} reading room in the center, so sunlight comes in from windows on every side.",
  "cn": "新圖書館中央有一間圓形的閱覽室，所以陽光能從四面的窗戶照進來。",
  "cnMarked": "新圖書館中央有一間【圓形的】閱覽室，所以陽光能從四面的窗戶照進來。",
  "isHead": true,
  "level": 4,
  "family": "circular"
 },
 {
  "word": "circulate",
  "answer": "circulate",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "循環；流通；傳播",
  "en_def": "to move around freely; to pass from person to person",
  "sentence": "Open the windows for a few minutes so that fresh air can {{BLANK}} through the classroom before the test begins.",
  "cn": "把窗戶打開幾分鐘，讓新鮮空氣在考試開始前能在教室裡流通。",
  "cnMarked": "把窗戶打開幾分鐘，讓新鮮空氣在考試開始前能在教室裡【流通】。",
  "isHead": true,
  "level": 4,
  "family": "circular"
 },
 {
  "word": "circulation",
  "answer": "circulation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "循環；流通；發行量",
  "en_def": "the movement of blood around the body; the movement of air, money, or news",
  "sentence": "Regular exercise improves your blood {{BLANK}}, which is why your hands and feet feel warmer after a long walk.",
  "cn": "規律運動能改善血液循環，這就是為什麼長時間散步後你的手腳會覺得比較暖。",
  "cnMarked": "規律運動能改善血液【循環】，這就是為什麼長時間散步後你的手腳會覺得比較暖。",
  "isHead": true,
  "level": 4,
  "family": "circular"
 },
 {
  "word": "circle",
  "answer": "circle",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "圓圈；圈子",
  "en_def": "a round shape; a group of people who know each other",
  "sentence": "The children sat in a {{BLANK}} on the floor while the teacher read them a story about a clever fox.",
  "cn": "孩子們在地板上坐成一圈，老師則念一個關於聰明狐狸的故事給他們聽。",
  "cnMarked": "孩子們在地板上坐成一【圈】，老師則念一個關於聰明狐狸的故事給他們聽。",
  "isHead": false,
  "level": 1,
  "family": "circular"
 },
 {
  "word": "in circulation",
  "answer": "in circulation",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "在流通中；在使用中",
  "en_def": "being used or passed around among people",
  "sentence": "The old five-dollar bills are no longer {{BLANK}}, so you should take them to the bank and exchange them.",
  "cn": "舊的五元紙鈔已經不再流通，所以你應該拿去銀行兌換。",
  "cnMarked": "舊的五元紙鈔已經不再【流通】，所以你應該拿去銀行兌換。",
  "isHead": false,
  "level": null,
  "family": "circular"
 },
 {
  "word": "circumstance",
  "answer": "circumstances",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "情況；環境",
  "en_def": "the facts or conditions that affect a situation",
  "sentence": "The police are still looking into the exact {{BLANK}} of the accident, so they have not told the family anything yet.",
  "cn": "警方仍在調查這場意外的確切情況，所以還沒有告訴家屬任何事。",
  "cnMarked": "警方仍在調查這場意外的確切【情況】，所以還沒有告訴家屬任何事。",
  "isHead": true,
  "level": 4,
  "family": "circumstance"
 },
 {
  "word": "under the circumstances",
  "answer": "under the circumstances",
  "nblanks": 3,
  "pos": "phr.",
  "cn_def": "在這種情況下",
  "en_def": "because of the particular situation",
  "sentence": "Our best player was sick and it rained all afternoon, so {{BLANK}}, a tied game was actually a good result.",
  "cn": "我們最好的球員生病了，而且整個下午都在下雨，所以在這種情況下，打成平手其實算是好結果。",
  "cnMarked": "我們最好的球員生病了，而且整個下午都在下雨，所以【在這種情況下】，打成平手其實算是好結果。",
  "isHead": false,
  "level": null,
  "family": "circumstance"
 },
 {
  "word": "under no circumstances",
  "answer": "Under no circumstances",
  "nblanks": 3,
  "pos": "phr.",
  "cn_def": "無論如何都不",
  "en_def": "never, whatever happens",
  "sentence": "{{BLANK}} should you open the door to a stranger when your parents are not at home, even if he says he is a police officer.",
  "cn": "父母不在家時，無論如何都不可以幫陌生人開門，即使他說他是警察。",
  "cnMarked": "父母不在家時，【無論如何都不】可以幫陌生人開門，即使他說他是警察。",
  "isHead": false,
  "level": null,
  "family": "circumstance"
 },
 {
  "word": "civilian",
  "answer": "civilians",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "平民；百姓",
  "en_def": "a person who is not a member of the army or police",
  "sentence": "During the war, thousands of {{BLANK}} left the city on foot, carrying only what they could hold in their hands.",
  "cn": "戰爭期間，數千名平民徒步離開這座城市，只帶著手裡拿得動的東西。",
  "cnMarked": "戰爭期間，數千名【平民】徒步離開這座城市，只帶著手裡拿得動的東西。",
  "isHead": true,
  "level": 4,
  "family": "civilian"
 },
 {
  "word": "civilian",
  "answer": "civilian",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "平民的；民用的",
  "en_def": "not belonging to the army or police",
  "sentence": "After twenty years as a soldier, my uncle returned to {{BLANK}} life and opened a small coffee shop near the station.",
  "cn": "當了二十年軍人之後，我叔叔回到平民生活，在車站附近開了一家小咖啡店。",
  "cnMarked": "當了二十年軍人之後，我叔叔回到【平民】生活，在車站附近開了一家小咖啡店。",
  "isHead": true,
  "level": 4,
  "family": "civilian"
 },
 {
  "word": "civilization",
  "answer": "civilization",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "文明",
  "en_def": "a society with its own culture, laws, and way of life, especially an advanced one",
  "sentence": "The ancient Egyptian {{BLANK}} built huge pyramids thousands of years ago, and people still wonder how they did it.",
  "cn": "古埃及文明在數千年前建造了巨大的金字塔，人們至今仍在猜想他們是如何做到的。",
  "cnMarked": "古埃及【文明】在數千年前建造了巨大的金字塔，人們至今仍在猜想他們是如何做到的。",
  "isHead": false,
  "level": 4,
  "family": "civilian"
 },
 {
  "word": "civil",
  "answer": "civil",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "公民的；國內的；有禮的",
  "en_def": "connected with the people of a country; polite",
  "sentence": "The two neighbors do not like each other, but they always stay {{BLANK}} and say good morning when they meet.",
  "cn": "這兩個鄰居彼此不喜歡，但見面時總是保持有禮，互道早安。",
  "cnMarked": "這兩個鄰居彼此不喜歡，但見面時總是保持【有禮】，互道早安。",
  "isHead": false,
  "level": 3,
  "family": "civilian"
 },
 {
  "word": "civilize",
  "answer": "civilize",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "使文明；開化",
  "en_def": "to teach people to live in a more organized and polite way",
  "sentence": "Some people believed that building schools and roads would {{BLANK}} the villagers, but the villagers already had a rich culture.",
  "cn": "有些人認為蓋學校和道路會開化村民，但村民們本來就擁有豐富的文化。",
  "cnMarked": "有些人認為蓋學校和道路會【開化】村民，但村民們本來就擁有豐富的文化。",
  "isHead": false,
  "level": 6,
  "family": "civilian"
 },
 {
  "word": "civilized",
  "answer": "civilized",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "文明的；有教養的",
  "en_def": "having a well-developed society; polite and reasonable",
  "sentence": "In a {{BLANK}} society, people solve their problems by talking and voting rather than by fighting in the streets.",
  "cn": "在文明的社會裡，人們透過對話和投票來解決問題，而不是在街上打架。",
  "cnMarked": "在【文明的】社會裡，人們透過對話和投票來解決問題，而不是在街上打架。",
  "isHead": false,
  "level": null,
  "family": "civilian"
 },
 {
  "word": "clarify",
  "answer": "clarify",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "澄清；闡明",
  "en_def": "to make something easier to understand by explaining it",
  "sentence": "Could you {{BLANK}} the homework rules, please, because half of the class is not sure when the report is due?",
  "cn": "可以請你說明清楚作業規定嗎？因為全班有一半的人不確定報告什麼時候要交。",
  "cnMarked": "可以請你【說明清楚】作業規定嗎？因為全班有一半的人不確定報告什麼時候要交。",
  "isHead": true,
  "level": 4,
  "family": "clarify"
 },
 {
  "word": "clarification",
  "answer": "clarification",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "澄清；說明",
  "en_def": "an explanation that makes something clearer",
  "sentence": "The students asked for {{BLANK}} after reading the exam notice, because the time and the room number did not match.",
  "cn": "學生們讀完考試公告後要求澄清，因為時間和教室號碼對不起來。",
  "cnMarked": "學生們讀完考試公告後要求【澄清】，因為時間和教室號碼對不起來。",
  "isHead": false,
  "level": null,
  "family": "clarify"
 },
 {
  "word": "clarity",
  "answer": "clarity",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "清晰；清楚",
  "en_def": "the quality of being clear and easy to understand or see",
  "sentence": "The speaker explained the difficult science topic with such {{BLANK}} that even the youngest children in the room understood it.",
  "cn": "講者把困難的科學主題講得非常清楚，連現場最小的孩子都聽懂了。",
  "cnMarked": "講者把困難的科學主題講得非常【清楚】，連現場最小的孩子都聽懂了。",
  "isHead": false,
  "level": 5,
  "family": "clarify"
 },
 {
  "word": "clear",
  "answer": "clear",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "清楚的；清晰的",
  "en_def": "easy to understand, see, or hear; without doubt",
  "sentence": "The teacher's instructions were so {{BLANK}} that nobody had to ask any questions before starting the group project.",
  "cn": "老師的指示非常清楚，所以開始小組專題之前沒有人需要提問。",
  "cnMarked": "老師的指示非常【清楚】，所以開始小組專題之前沒有人需要提問。",
  "isHead": false,
  "level": 1,
  "family": "clarify"
 },
 {
  "word": "clash",
  "answer": "clash",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "衝突；爭執",
  "en_def": "a short fight or a strong disagreement between people or groups",
  "sentence": "There was a {{BLANK}} between the two groups of fans outside the stadium, and the police had to separate them.",
  "cn": "體育場外兩群球迷之間發生了衝突，警察不得不把他們分開。",
  "cnMarked": "體育場外兩群球迷之間發生了【衝突】，警察不得不把他們分開。",
  "isHead": true,
  "level": 4,
  "family": "clash"
 },
 {
  "word": "clash",
  "answer": "clash",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "衝突；不相配",
  "en_def": "to fight or argue; to look bad together (of colors)",
  "sentence": "The bright pink curtains {{BLANK}} with the green walls, so my mother decided to paint the whole room white.",
  "cn": "亮粉色的窗簾和綠色的牆壁不相配，所以媽媽決定把整個房間漆成白色。",
  "cnMarked": "亮粉色的窗簾和綠色的牆壁【不相配】，所以媽媽決定把整個房間漆成白色。",
  "isHead": false,
  "level": 4,
  "family": "clash"
 },
 {
  "word": "clash with",
  "answer": "clashes with",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "與…時間衝突",
  "en_def": "to happen at the same time as something else, so you cannot do both",
  "sentence": "Unfortunately, the piano concert {{BLANK}} my cousin's wedding, so I had to give my ticket to a friend.",
  "cn": "很不巧，鋼琴音樂會與我表姊的婚禮時間衝突，所以我只好把票送給朋友。",
  "cnMarked": "很不巧，鋼琴音樂會【與】我表姊的婚禮【時間衝突】，所以我只好把票送給朋友。",
  "isHead": false,
  "level": null,
  "family": "clash"
 },
 {
  "word": "classification",
  "answer": "classification",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "分類；類別",
  "en_def": "the act of putting things into groups; a group in such a system",
  "sentence": "Scientists use a system of {{BLANK}} to group millions of living things by how they look and how they are related.",
  "cn": "科學家使用一套分類系統，依據外觀和親緣關係把數百萬種生物分組。",
  "cnMarked": "科學家使用一套【分類】系統，依據外觀和親緣關係把數百萬種生物分組。",
  "isHead": true,
  "level": 4,
  "family": "classification"
 },
 {
  "word": "classify",
  "answer": "classify",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "分類；歸類",
  "en_def": "to put things into groups according to their type",
  "sentence": "Librarians {{BLANK}} books by subject, so all the cookbooks sit together on the same shelf near the window.",
  "cn": "圖書館員按主題分類書籍，所以所有的食譜書都放在靠窗的同一個書架上。",
  "cnMarked": "圖書館員按主題【分類】書籍，所以所有的食譜書都放在靠窗的同一個書架上。",
  "isHead": true,
  "level": 4,
  "family": "classification"
 },
 {
  "word": "classified",
  "answer": "classified",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "機密的；分類的",
  "en_def": "officially secret; (of ads) arranged in groups in a newspaper",
  "sentence": "The report was marked {{BLANK}}, so only three people in the whole company were allowed to read it.",
  "cn": "這份報告被標記為機密，所以全公司只有三個人可以閱讀。",
  "cnMarked": "這份報告被標記為【機密】，所以全公司只有三個人可以閱讀。",
  "isHead": false,
  "level": null,
  "family": "classification"
 },
 {
  "word": "class",
  "answer": "class",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "班級；類；階級",
  "en_def": "a group of students; a group of things of the same type; a social group",
  "sentence": "In the hotel's top {{BLANK}} of rooms, every guest gets a private pool and a view of the whole bay.",
  "cn": "在這家飯店最高等級的房型裡，每位客人都有私人泳池，而且能看到整個海灣。",
  "cnMarked": "在這家飯店最高【等級】的房型裡，每位客人都有私人泳池，而且能看到整個海灣。",
  "isHead": false,
  "level": 1,
  "family": "classification"
 },
 {
  "word": "claw",
  "answer": "claws",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "爪；爪子",
  "en_def": "a sharp curved nail on the foot of an animal or bird",
  "sentence": "The kitten dug her sharp {{BLANK}} into the sofa, and my mother shouted that we had to buy a scratching post.",
  "cn": "小貓把尖尖的爪子扎進沙發裡，媽媽大喊我們必須買一個貓抓板。",
  "cnMarked": "小貓把尖尖的【爪子】扎進沙發裡，媽媽大喊我們必須買一個貓抓板。",
  "isHead": true,
  "level": 4,
  "family": "claw"
 },
 {
  "word": "claw",
  "answer": "claw",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "用爪抓；抓住",
  "en_def": "to tear or pull at something with claws or fingers",
  "sentence": "The trapped dog tried to {{BLANK}} its way out of the hole, and its paws were covered with mud when we found it.",
  "cn": "被困住的狗努力用爪抓著想爬出洞口，我們找到它時，它的腳掌滿是泥巴。",
  "cnMarked": "被困住的狗努力【用爪抓】著想爬出洞口，我們找到它時，它的腳掌滿是泥巴。",
  "isHead": false,
  "level": 4,
  "family": "claw"
 },
 {
  "word": "claw one's way",
  "answer": "clawed their way",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "艱苦地奮鬥向上",
  "en_def": "to succeed only by working extremely hard against difficulties",
  "sentence": "After losing everything in the fire, the family {{BLANK}} back to a normal life over the next five years.",
  "cn": "在火災中失去一切之後，這家人在接下來的五年裡艱苦地奮鬥，重新回到正常生活。",
  "cnMarked": "在火災中失去一切之後，這家人在接下來的五年裡【艱苦地奮鬥】，重新回到正常生活。",
  "isHead": false,
  "level": null,
  "family": "claw"
 },
 {
  "word": "cliff",
  "answer": "cliff",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "懸崖；峭壁",
  "en_def": "a high, steep rock face, especially by the sea",
  "sentence": "From the top of the {{BLANK}}, we could see the waves hit the rocks far below, so we stayed behind the fence.",
  "cn": "從懸崖頂端，我們可以看到海浪撞擊遠處下方的岩石，所以我們待在圍欄後面。",
  "cnMarked": "從【懸崖】頂端，我們可以看到海浪撞擊遠處下方的岩石，所以我們待在圍欄後面。",
  "isHead": true,
  "level": 4,
  "family": "cliff"
 },
 {
  "word": "cliffhanger",
  "answer": "cliffhanger",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "懸疑結局；扣人心弦的情節",
  "en_def": "an exciting story or situation whose ending is unknown until the last moment",
  "sentence": "The season ended with a {{BLANK}}, and now we have to wait six months to find out whether the hero survived.",
  "cn": "這一季以一個懸疑結局收尾，現在我們得等六個月才能知道主角是否活了下來。",
  "cnMarked": "這一季以一個【懸疑結局】收尾，現在我們得等六個月才能知道主角是否活了下來。",
  "isHead": false,
  "level": null,
  "family": "cliff"
 },
 {
  "word": "fall off a cliff",
  "answer": "fell off a cliff",
  "nblanks": 4,
  "pos": "v.phr.",
  "cn_def": "從懸崖掉落；驟降",
  "en_def": "to drop from a high rock face; (informal) to decrease suddenly and sharply",
  "sentence": "The hiker nearly {{BLANK}} when the wet path gave way, but his friend grabbed his backpack just in time.",
  "cn": "當濕滑的小路塌陷時，那位登山客差點從懸崖掉下去，但他的朋友及時抓住了他的背包。",
  "cnMarked": "當濕滑的小路塌陷時，那位登山客差點【從懸崖掉下去】，但他的朋友及時抓住了他的背包。",
  "isHead": false,
  "level": null,
  "family": "cliff"
 }
];
const MCQS = [
 {
  "q": "Before you buy anything from this furniture company, look through their new ______ first. It shows pictures and prices of every table, chair, and bed they sell.",
  "options": [
   "claw",
   "chamber",
   "chorus",
   "catalogue"
  ],
  "answer": 3,
  "vocabIndex": 0
 },
 {
  "q": "These shoes are too small for running but too sporty for the office. They do not really fit into any ______, so I do not know where to put them in the shop.",
  "options": [
   "civilization",
   "category",
   "celebration",
   "charity"
  ],
  "answer": 1,
  "vocabIndex": 3
 },
 {
  "q": "The two countries have been fighting for almost three years. Many people around the world hope the war will ______ soon so that children can go back to school.",
  "options": [
   "cease",
   "cherish",
   "classify",
   "chew"
  ],
  "answer": 0,
  "vocabIndex": 6
 },
 {
  "q": "My grandfather turns eighty next week, and the whole family is coming home. We are planning a big ______ with a cake, songs, and lots of his favorite dishes.",
  "options": [
   "circulation",
   "classification",
   "celebration",
   "clarification"
  ],
  "answer": 2,
  "vocabIndex": 10
 },
 {
  "q": "The old castle has a small hidden ______ behind the library wall. Long ago, the royal family used this secret room to keep their gold and important papers safe.",
  "options": [
   "chemist",
   "chorus",
   "cliff",
   "chamber"
  ],
  "answer": 3,
  "vocabIndex": 15
 },
 {
  "q": "Our volleyball team practiced every morning before school this year. All the hard work paid off when we won the city ______ and brought home the gold cup.",
  "options": [
   "championship",
   "chemistry",
   "civilization",
   "circumstance"
  ],
  "answer": 0,
  "vocabIndex": 18
 },
 {
  "q": "Being honest is the most important ______ of a good friend. If a person often lies to you, it is very hard to trust him or her with your secrets.",
  "options": [
   "classification",
   "characteristic",
   "chamber",
   "celebration"
  ],
  "answer": 1,
  "vocabIndex": 22
 },
 {
  "q": "Instead of buying gifts this Christmas, my family gave money to a ______. It uses the money to buy food and blankets for people who live on the street.",
  "options": [
   "charity",
   "circle",
   "chorus",
   "chemistry"
  ],
  "answer": 0,
  "vocabIndex": 26
 },
 {
  "q": "In today's ______ class, we learned why baking soda and vinegar make bubbles when you mix them. The teacher said it was a simple reaction between two substances.",
  "options": [
   "charity",
   "civilization",
   "championship",
   "chemistry"
  ],
  "answer": 3,
  "vocabIndex": 29
 },
 {
  "q": "This gold ring belonged to my great-grandmother, and she gave it to my mother before she died. I will ______ it forever and never sell it, no matter what happens.",
  "options": [
   "classify",
   "cherish",
   "choke",
   "chew"
  ],
  "answer": 1,
  "vocabIndex": 33
 },
 {
  "q": "The doctor says my brother eats far too fast. He should ______ each bite slowly and carefully, because this helps his stomach do its job and keeps him from feeling sick.",
  "options": [
   "clash",
   "cease",
   "chew",
   "claw"
  ],
  "answer": 2,
  "vocabIndex": 36
 },
 {
  "q": "Do not let the baby play with those small buttons. If she puts one in her mouth, she could ______ on it and stop breathing, so please keep them far away from her.",
  "options": [
   "circulate",
   "cherish",
   "clarify",
   "choke"
  ],
  "answer": 3,
  "vocabIndex": 40
 },
 {
  "q": "Not many people know all the words to the new pop song. However, everyone sings along loudly when the ______ comes, because it repeats the same easy line four times.",
  "options": [
   "chamber",
   "chorus",
   "cliff",
   "charity"
  ],
  "answer": 1,
  "vocabIndex": 43
 },
 {
  "q": "The new park has a large ______ pond in the middle. Children love running around its round edge, and in the center there is a fountain that lights up at night.",
  "options": [
   "civil",
   "classified",
   "circular",
   "charitable"
  ],
  "answer": 2,
  "vocabIndex": 47
 },
 {
  "q": "It is very hot in the classroom today, and the air feels heavy. Please open all the windows so that fresh air can ______ and everyone can think more clearly.",
  "options": [
   "circulate",
   "characterize",
   "celebrate",
   "categorize"
  ],
  "answer": 0,
  "vocabIndex": 48
 },
 {
  "q": "Sitting in the same position for many hours is bad for your health. Doctors say that moving your legs often helps your blood ______ and keeps your feet from feeling cold.",
  "options": [
   "classification",
   "clarification",
   "civilization",
   "circulation"
  ],
  "answer": 3,
  "vocabIndex": 49
 },
 {
  "q": "The judge listened carefully to every detail of the story before making a decision. She said that in this unusual ______, the young man should not go to prison.",
  "options": [
   "chorus",
   "claw",
   "circumstance",
   "charity"
  ],
  "answer": 2,
  "vocabIndex": 52
 },
 {
  "q": "During the war, soldiers on both sides were told not to shoot at anyone who was not fighting. Sadly, one young ______ was still hurt while trying to escape from the city.",
  "options": [
   "civilian",
   "champion",
   "celebrity",
   "chemist"
  ],
  "answer": 0,
  "vocabIndex": 55
 },
 {
  "q": "Thousands of years ago, people living by the Nile River developed a rich ______. They built great buildings, invented a form of writing, and studied the stars.",
  "options": [
   "celebration",
   "civilization",
   "circulation",
   "classification"
  ],
  "answer": 1,
  "vocabIndex": 57
 },
 {
  "q": "Half of the class did not understand the rules for the group project. The teacher agreed to ______ them again, and this time she wrote the main points on the board.",
  "options": [
   "categorize",
   "chew",
   "cherish",
   "clarify"
  ],
  "answer": 3,
  "vocabIndex": 61
 },
 {
  "q": "The fans of the two teams started shouting at each other after the game. The police arrived quickly to stop the ______ before anyone got seriously hurt.",
  "options": [
   "cliff",
   "clash",
   "catalogue",
   "chamber"
  ],
  "answer": 1,
  "vocabIndex": 65
 },
 {
  "q": "At the museum, the animals are not placed in random order. Each one has a label that shows its scientific ______, so visitors can see which animals belong to the same group.",
  "options": [
   "championship",
   "circumstance",
   "classification",
   "celebration"
  ],
  "answer": 2,
  "vocabIndex": 68
 },
 {
  "q": "The library has thousands of books, so you need a clear system to find them. Librarians ______ the books by subject and give each one a number on its spine.",
  "options": [
   "circulate",
   "classify",
   "choke",
   "cease"
  ],
  "answer": 1,
  "vocabIndex": 69
 },
 {
  "q": "Our cat loves to sharpen her nails on the wooden chair legs. Yesterday she left a long deep mark on the table with one sharp ______, and Dad was not happy at all.",
  "options": [
   "claw",
   "chorus",
   "cliff",
   "chemical"
  ],
  "answer": 0,
  "vocabIndex": 72
 },
 {
  "q": "The road along the coast is beautiful but dangerous in some places. On one side, there is a tall ______ that drops straight down to the sea, so drive slowly and carefully.",
  "options": [
   "catalogue",
   "cliff",
   "circle",
   "chamber"
  ],
  "answer": 1,
  "vocabIndex": 75
 },
 {
  "q": "My parents got married exactly twenty-five years ago today. To ______ this special day, my father is taking my mother to the small restaurant where they first met.",
  "options": [
   "celebrate",
   "circulate",
   "classify",
   "clarify"
  ],
  "answer": 0,
  "vocabIndex": 11
 },
 {
  "q": "Do not drink water from that river, even if it looks clean. The factory nearby has been pouring a dangerous ______ into it for years, and the fish have all died.",
  "options": [
   "celebrity",
   "champion",
   "civilian",
   "chemical"
  ],
  "answer": 3,
  "vocabIndex": 30
 },
 {
  "q": "The little boy in the story is poor and often hungry, but he never steals or lies. His strong ______ is the reason so many readers love this book.",
  "options": [
   "chorus",
   "cliff",
   "character",
   "chamber"
  ],
  "answer": 2,
  "vocabIndex": 24
 },
 {
  "q": "The new school rule about phones is confusing, and students have many questions. Tomorrow the principal will give a ______ so that everyone knows exactly what is allowed.",
  "options": [
   "clarification",
   "circulation",
   "celebration",
   "civilization"
  ],
  "answer": 0,
  "vocabIndex": 62
 },
 {
  "q": "She has won the national swimming competition three years in a row. As the ______, she will carry the flag for our country at the big international games next summer.",
  "options": [
   "chemist",
   "celebrity",
   "champion",
   "civilian"
  ],
  "answer": 2,
  "vocabIndex": 19
 }
];
const LOOKUP = {};
VOCAB.forEach(v => { const key = v.word.toLowerCase(); const sense = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def };
  if (LOOKUP[key]) LOOKUP[key].combined.push(sense); else LOOKUP[key] = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def, combined: [sense] }; });
const EXTRA_GLOSSES = {};