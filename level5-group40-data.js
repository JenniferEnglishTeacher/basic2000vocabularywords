// 學測6000字 Level 5 Group 40 (vomit-yield) — word-family edition
const QUIZ_CONFIG = {
  groupName: "6000字 L5 Group 40 - vomit – yield (word family)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};
const VOCAB = [
 {
  "word": "vomit",
  "answer": "vomit",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "嘔吐",
  "en_def": "to bring food from your stomach back out through your mouth",
  "sentence": "The little boy began to {{BLANK}} after eating too much cake at the party, so his mother quickly took him to the bathroom.",
  "cn": "小男孩在派對上吃了太多蛋糕後開始嘔吐，所以他媽媽趕緊帶他去廁所。",
  "cnMarked": "小男孩在派對上吃了太多蛋糕後開始【嘔吐】，所以他媽媽趕緊帶他去廁所。",
  "isHead": true,
  "level": 5,
  "family": "vomit"
 },
 {
  "word": "vomit",
  "answer": "vomit",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "嘔吐物",
  "en_def": "food that has come back up from the stomach",
  "sentence": "The bus driver had to stop and clean the {{BLANK}} off the floor after a passenger got carsick on the mountain road.",
  "cn": "一名乘客在山路上暈車後，公車司機只好停車把地上的嘔吐物清乾淨。",
  "cnMarked": "一名乘客在山路上暈車後，公車司機只好停車把地上的【嘔吐物】清乾淨。",
  "isHead": false,
  "level": 5,
  "family": "vomit"
 },
 {
  "word": "throw up",
  "answer": "throw up",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "吐；嘔吐",
  "en_def": "to vomit (informal)",
  "sentence": "The road to Alishan has so many curves that my sister always feels like she is going to {{BLANK}}.",
  "cn": "去阿里山的路彎道太多，我妹妹總是覺得自己快要吐了。",
  "cnMarked": "去阿里山的路彎道太多，我妹妹總是覺得自己快要【吐】了。",
  "isHead": false,
  "level": null,
  "family": "vomit"
 },
 {
  "word": "voucher",
  "answer": "voucher",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "代金券；禮券；票券",
  "en_def": "a printed paper that can be used instead of money to buy something",
  "sentence": "I got a five-hundred-dollar {{BLANK}} for my birthday, so I can buy any book I like at that bookstore.",
  "cn": "我生日時收到一張五百元的禮券，所以我可以在那家書店買任何我喜歡的書。",
  "cnMarked": "我生日時收到一張五百元的【禮券】，所以我可以在那家書店買任何我喜歡的書。",
  "isHead": true,
  "level": 5,
  "family": "voucher"
 },
 {
  "word": "gift voucher",
  "answer": "gift voucher",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "禮券",
  "en_def": "a voucher given as a present",
  "sentence": "If you don't know what to buy for your teacher, a {{BLANK}} for a nice restaurant is always a good choice.",
  "cn": "如果你不知道要送老師什麼，一張高級餐廳的禮券總是不錯的選擇。",
  "cnMarked": "如果你不知道要送老師什麼，一張高級餐廳的【禮券】總是不錯的選擇。",
  "isHead": false,
  "level": null,
  "family": "voucher"
 },
 {
  "word": "coupon",
  "answer": "coupon",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "優惠券；折價券",
  "en_def": "a small piece of paper that lets you pay less for something",
  "sentence": "With this {{BLANK}}, you can get a second cup of coffee for only ten dollars before eleven in the morning.",
  "cn": "憑這張優惠券，早上十一點以前第二杯咖啡只要十元。",
  "cnMarked": "憑這張【優惠券】，早上十一點以前第二杯咖啡只要十元。",
  "isHead": false,
  "level": 6,
  "family": "voucher"
 },
 {
  "word": "vow",
  "answer": "vow",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "發誓；立誓",
  "en_def": "to promise very seriously",
  "sentence": "After failing the math test, Tom decided to {{BLANK}} that he would study for at least two hours every night until the final exam.",
  "cn": "數學考試不及格後，湯姆決定發誓在期末考前每晚至少讀書兩小時。",
  "cnMarked": "數學考試不及格後，湯姆決定【發誓】在期末考前每晚至少讀書兩小時。",
  "isHead": true,
  "level": 5,
  "family": "vow"
 },
 {
  "word": "vow",
  "answer": "vow",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "誓言；誓約",
  "en_def": "a serious promise",
  "sentence": "At the wedding, the bride and groom each made a {{BLANK}} in front of two hundred guests, promising to love each other forever.",
  "cn": "在婚禮上，新娘和新郎在兩百位賓客面前各自許下誓言，承諾永遠相愛。",
  "cnMarked": "在婚禮上，新娘和新郎在兩百位賓客面前各自許下【誓言】，承諾永遠相愛。",
  "isHead": false,
  "level": 5,
  "family": "vow"
 },
 {
  "word": "break one's vow",
  "answer": "broke his vow",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "違背誓言",
  "en_def": "to not do what you seriously promised",
  "sentence": "He promised never to smoke again, but he {{BLANK}} only three weeks later at a friend's party.",
  "cn": "他承諾再也不抽菸，但僅僅三週後就在朋友的派對上違背了他的誓言。",
  "cnMarked": "他承諾再也不抽菸，但僅僅三週後就在朋友的派對上【違背了他的誓言】。",
  "isHead": false,
  "level": null,
  "family": "vow"
 },
 {
  "word": "vulnerable",
  "answer": "vulnerable",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "易受傷害的；脆弱的",
  "en_def": "easily hurt physically or emotionally",
  "sentence": "Old people and small children are more {{BLANK}} to the flu, so they should get a flu shot every autumn.",
  "cn": "老人和小孩比較容易受到流感侵襲，所以他們每年秋天都應該打流感疫苗。",
  "cnMarked": "老人和小孩比較【容易受到】流感【侵襲】，所以他們每年秋天都應該打流感疫苗。",
  "isHead": true,
  "level": 5,
  "family": "vulnerable"
 },
 {
  "word": "vulnerability",
  "answer": "vulnerability",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "弱點；脆弱性",
  "en_def": "a weakness that makes something easy to attack or hurt",
  "sentence": "The hackers found a {{BLANK}} in the bank's computer system and stole the personal information of thousands of customers.",
  "cn": "駭客在銀行的電腦系統中找到一個漏洞，偷走了數千名客戶的個人資料。",
  "cnMarked": "駭客在銀行的電腦系統中找到一個【漏洞】，偷走了數千名客戶的個人資料。",
  "isHead": false,
  "level": null,
  "family": "vulnerable"
 },
 {
  "word": "invulnerable",
  "answer": "invulnerable",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "刀槍不入的；無懈可擊的",
  "en_def": "impossible to hurt or damage",
  "sentence": "In the movie, the hero seems {{BLANK}}, because bullets and fire never hurt him at all.",
  "cn": "在電影裡，主角似乎刀槍不入，因為子彈和火焰完全傷不了他。",
  "cnMarked": "在電影裡，主角似乎【刀槍不入】，因為子彈和火焰完全傷不了他。",
  "isHead": false,
  "level": null,
  "family": "vulnerable"
 },
 {
  "word": "warehouse",
  "answer": "warehouse",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "倉庫",
  "en_def": "a large building where goods are stored",
  "sentence": "All the online orders are packed in a huge {{BLANK}} outside the city and then sent to customers by truck.",
  "cn": "所有網路訂單都在城外一座巨大的倉庫打包，然後用卡車送到顧客手上。",
  "cnMarked": "所有網路訂單都在城外一座巨大的【倉庫】打包，然後用卡車送到顧客手上。",
  "isHead": true,
  "level": 5,
  "family": "warehouse"
 },
 {
  "word": "warehouse",
  "answer": "warehouses",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "把…存放在倉庫",
  "en_def": "to keep goods in a warehouse",
  "sentence": "The company {{BLANK}} its extra furniture in Taoyuan until the new store opens next spring.",
  "cn": "這家公司把多餘的家具存放在桃園的倉庫，直到明年春天新店開幕。",
  "cnMarked": "這家公司把多餘的家具【存放在】桃園的【倉庫】，直到明年春天新店開幕。",
  "isHead": false,
  "level": 5,
  "family": "warehouse"
 },
 {
  "word": "warehouse sale",
  "answer": "warehouse sale",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "倉庫拍賣；清倉特賣",
  "en_def": "a sale of goods at very low prices, often held in a warehouse",
  "sentence": "The shoe company is holding a {{BLANK}} this weekend, and everything is sold at half price or even less.",
  "cn": "這家鞋業公司這個週末舉辦倉庫特賣，所有商品都半價甚至更便宜。",
  "cnMarked": "這家鞋業公司這個週末舉辦【倉庫特賣】，所有商品都半價甚至更便宜。",
  "isHead": false,
  "level": null,
  "family": "warehouse"
 },
 {
  "word": "warrior",
  "answer": "warrior",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "戰士；勇士",
  "en_def": "a brave soldier or fighter, especially in the past",
  "sentence": "In the old story, a brave {{BLANK}} fought against a huge dragon to save the people of his village.",
  "cn": "在古老的故事裡，一位勇敢的戰士和一條巨龍搏鬥，拯救了他村子裡的人。",
  "cnMarked": "在古老的故事裡，一位勇敢的【戰士】和一條巨龍搏鬥，拯救了他村子裡的人。",
  "isHead": true,
  "level": 5,
  "family": "warrior"
 },
 {
  "word": "war",
  "answer": "war",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "戰爭",
  "en_def": "fighting between countries or groups using weapons",
  "sentence": "My great-grandfather lived through the {{BLANK}} and often told us how hard life was when there was not enough food.",
  "cn": "我曾祖父經歷過那場戰爭，常常告訴我們食物不夠吃時生活有多艱苦。",
  "cnMarked": "我曾祖父經歷過那場【戰爭】，常常告訴我們食物不夠吃時生活有多艱苦。",
  "isHead": false,
  "level": 2,
  "family": "warrior"
 },
 {
  "word": "weekend warrior",
  "answer": "weekend warrior",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "週末運動族；週末戰士",
  "en_def": "a person who does sports or hobbies very hard only on weekends",
  "sentence": "My dad is a {{BLANK}}; he sits at a desk all week but plays basketball for five hours every Saturday.",
  "cn": "我爸爸是個週末戰士；他整個星期都坐在辦公桌前，但每週六打五個小時的籃球。",
  "cnMarked": "我爸爸是個【週末戰士】；他整個星期都坐在辦公桌前，但每週六打五個小時的籃球。",
  "isHead": false,
  "level": null,
  "family": "warrior"
 },
 {
  "word": "wary",
  "answer": "wary",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "小心的；警惕的",
  "en_def": "careful because you think something may be dangerous",
  "sentence": "Be {{BLANK}} of strangers who call and say you have won a prize, because many of them are trying to steal your money.",
  "cn": "要提防那些打電話來說你中獎的陌生人，因為他們很多都想偷你的錢。",
  "cnMarked": "要【提防】那些打電話來說你中獎的陌生人，因為他們很多都想偷你的錢。",
  "isHead": true,
  "level": 5,
  "family": "wary"
 },
 {
  "word": "warily",
  "answer": "warily",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "小心翼翼地；警惕地",
  "en_def": "in a careful way, because of possible danger",
  "sentence": "The cat looked {{BLANK}} at the new dog for a whole day before it finally came close enough to smell it.",
  "cn": "那隻貓警戒地盯著新來的狗看了一整天，最後才靠近到能聞牠的距離。",
  "cnMarked": "那隻貓【警戒地】盯著新來的狗看了一整天，最後才靠近到能聞牠的距離。",
  "isHead": false,
  "level": null,
  "family": "wary"
 },
 {
  "word": "beware",
  "answer": "beware",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "小心；提防",
  "en_def": "to be careful of something dangerous",
  "sentence": "Signs at the beach tell swimmers to {{BLANK}} of strong waves, especially when a typhoon is coming.",
  "cn": "海灘上的告示牌提醒泳客小心大浪，尤其是颱風快來的時候。",
  "cnMarked": "海灘上的告示牌提醒泳客【小心】大浪，尤其是颱風快來的時候。",
  "isHead": false,
  "level": 5,
  "family": "wary"
 },
 {
  "word": "weird",
  "answer": "weird",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "奇怪的；詭異的",
  "en_def": "very strange and unusual",
  "sentence": "I heard a {{BLANK}} noise coming from the kitchen at midnight, but when I turned on the light, nothing was there.",
  "cn": "半夜我聽到廚房傳來奇怪的聲音，但我開燈時什麼也沒有。",
  "cnMarked": "半夜我聽到廚房傳來【奇怪的】聲音，但我開燈時什麼也沒有。",
  "isHead": true,
  "level": 5,
  "family": "weird"
 },
 {
  "word": "weirdly",
  "answer": "weirdly",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "奇怪地；出奇地",
  "en_def": "in a strange way; strangely",
  "sentence": "The streets were {{BLANK}} quiet on New Year's morning, because almost everyone was still asleep after the fireworks.",
  "cn": "元旦早上街道出奇地安靜，因為幾乎每個人看完煙火後都還在睡。",
  "cnMarked": "元旦早上街道【出奇地】安靜，因為幾乎每個人看完煙火後都還在睡。",
  "isHead": false,
  "level": null,
  "family": "weird"
 },
 {
  "word": "weirdo",
  "answer": "weirdo",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "怪人；怪胎",
  "en_def": "a person who behaves strangely (informal, not polite)",
  "sentence": "Some classmates called him a {{BLANK}} because he wore a cape to school, but he didn't care at all.",
  "cn": "有些同學叫他怪胎，因為他穿披風來上學，但他一點也不在乎。",
  "cnMarked": "有些同學叫他【怪胎】，因為他穿披風來上學，但他一點也不在乎。",
  "isHead": false,
  "level": null,
  "family": "weird"
 },
 {
  "word": "whatsoever",
  "answer": "whatsoever",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "任何的；一點也（不）",
  "en_def": "at all (used after a noun in negative sentences for emphasis)",
  "sentence": "I have no interest {{BLANK}} in horror movies, so please don't ask me to watch one with you.",
  "cn": "我對恐怖片一點興趣也沒有，所以請不要叫我陪你看。",
  "cnMarked": "我對恐怖片【一點】興趣【也】沒有，所以請不要叫我陪你看。",
  "isHead": true,
  "level": 5,
  "family": "whatsoever"
 },
 {
  "word": "whatever",
  "answer": "whatever",
  "nblanks": 1,
  "pos": "pron.",
  "cn_def": "任何事物；凡是…的東西",
  "en_def": "anything or everything",
  "sentence": "You can order {{BLANK}} you like from the menu tonight, because it's your birthday and I'm paying.",
  "cn": "今晚你可以從菜單上點任何你喜歡的東西，因為今天是你生日，我請客。",
  "cnMarked": "今晚你可以從菜單上點【任何】你喜歡的東西，因為今天是你生日，我請客。",
  "isHead": false,
  "level": 2,
  "family": "whatsoever"
 },
 {
  "word": "whatever",
  "answer": "whatever",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "無論什麼樣的；任何的",
  "en_def": "any; no matter what",
  "sentence": "Please call me immediately if you have any problems, {{BLANK}} time it is, even in the middle of the night.",
  "cn": "如果你有任何問題請馬上打給我，不管幾點，就算是半夜也可以。",
  "cnMarked": "如果你有任何問題請馬上打給我，【不管】幾點，就算是半夜也可以。",
  "isHead": false,
  "level": 2,
  "family": "whatsoever"
 },
 {
  "word": "none whatsoever",
  "answer": "none whatsoever",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "完全沒有",
  "en_def": "none at all",
  "sentence": "Did he show any regret for breaking the window? No, {{BLANK}}; he just laughed and walked away.",
  "cn": "他打破窗戶有表現出任何悔意嗎？不，完全沒有；他只是笑一笑就走了。",
  "cnMarked": "他打破窗戶有表現出任何悔意嗎？不，【完全沒有】；他只是笑一笑就走了。",
  "isHead": false,
  "level": null,
  "family": "whatsoever"
 },
 {
  "word": "wheelchair",
  "answer": "wheelchair",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "輪椅",
  "en_def": "a chair with wheels for people who cannot walk",
  "sentence": "After he broke his leg, my grandfather had to use a {{BLANK}} for two months, so we pushed him around the park every day.",
  "cn": "爺爺摔斷腿後必須坐兩個月的輪椅，所以我們每天推他在公園裡散步。",
  "cnMarked": "爺爺摔斷腿後必須坐兩個月的【輪椅】，所以我們每天推他在公園裡散步。",
  "isHead": true,
  "level": 5,
  "family": "wheelchair"
 },
 {
  "word": "wheelchair-accessible",
  "answer": "wheelchair-accessible",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "無障礙的；輪椅可通行的",
  "en_def": "easy for people in wheelchairs to enter and use",
  "sentence": "All new MRT stations must be {{BLANK}}, with elevators and wide doors for people who cannot walk.",
  "cn": "所有新的捷運站都必須是無障礙的，要有電梯和寬大的門給無法行走的人使用。",
  "cnMarked": "所有新的捷運站都必須是【無障礙的】，要有電梯和寬大的門給無法行走的人使用。",
  "isHead": false,
  "level": null,
  "family": "wheelchair"
 },
 {
  "word": "wheel",
  "answer": "wheel",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "輪子；車輪",
  "en_def": "a round object that turns to help a vehicle move",
  "sentence": "One {{BLANK}} of my suitcase broke at the airport, so I had to carry the heavy bag up the stairs.",
  "cn": "我的行李箱有一個輪子在機場壞掉了，所以我只好把沉重的箱子扛上樓梯。",
  "cnMarked": "我的行李箱有一個【輪子】在機場壞掉了，所以我只好把沉重的箱子扛上樓梯。",
  "isHead": false,
  "level": 2,
  "family": "wheelchair"
 },
 {
  "word": "whereabouts",
  "answer": "whereabouts",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "下落；行蹤",
  "en_def": "the place where someone or something is",
  "sentence": "The police are still trying to find out the {{BLANK}} of the missing hiker, who was last seen near the top of the mountain.",
  "cn": "警方仍在設法查出失蹤登山客的下落，他最後一次被看到是在山頂附近。",
  "cnMarked": "警方仍在設法查出失蹤登山客的【下落】，他最後一次被看到是在山頂附近。",
  "isHead": true,
  "level": 5,
  "family": "whereabouts"
 },
 {
  "word": "whereabouts",
  "answer": "whereabouts",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "在哪裡；大概在什麼地方",
  "en_def": "in or near what place (used in questions)",
  "sentence": "Excuse me, {{BLANK}} in Taipei do you live? I'm also from the north, so I might know your neighborhood.",
  "cn": "不好意思，你住在台北哪一帶？我也是北部人，所以可能知道你住的社區。",
  "cnMarked": "不好意思，你住在台北【哪一帶】？我也是北部人，所以可能知道你住的社區。",
  "isHead": false,
  "level": 5,
  "family": "whereabouts"
 },
 {
  "word": "wherever",
  "answer": "wherever",
  "nblanks": 1,
  "pos": "conj.",
  "cn_def": "無論何處；不管到哪裡",
  "en_def": "in any place; to any place",
  "sentence": "My little dog follows me {{BLANK}} I go, even into the bathroom, because she does not like to be alone.",
  "cn": "我的小狗不管我到哪裡都跟著我，連進廁所也是，因為牠不喜歡獨處。",
  "cnMarked": "我的小狗【不管】我【到哪裡】都跟著我，連進廁所也是，因為牠不喜歡獨處。",
  "isHead": false,
  "level": 2,
  "family": "whereabouts"
 },
 {
  "word": "whereas",
  "answer": "whereas",
  "nblanks": 1,
  "pos": "conj.",
  "cn_def": "然而；而",
  "en_def": "used to compare two different facts or situations",
  "sentence": "My older sister loves spicy food, {{BLANK}} I can't eat even a little chili without drinking a lot of water.",
  "cn": "我姊姊很愛吃辣，而我連一點點辣椒都吃不了，一吃就得喝很多水。",
  "cnMarked": "我姊姊很愛吃辣，【而】我連一點點辣椒都吃不了，一吃就得喝很多水。",
  "isHead": true,
  "level": 5,
  "family": "whereas"
 },
 {
  "word": "while",
  "answer": "while",
  "nblanks": 1,
  "pos": "conj.",
  "cn_def": "而；然而",
  "en_def": "used to show a difference between two things",
  "sentence": "Some students prefer to study in the library, {{BLANK}} others like to study at home with music on.",
  "cn": "有些學生喜歡在圖書館讀書，而其他人喜歡在家一邊聽音樂一邊讀。",
  "cnMarked": "有些學生喜歡在圖書館讀書，【而】其他人喜歡在家一邊聽音樂一邊讀。",
  "isHead": false,
  "level": 1,
  "family": "whereas"
 },
 {
  "word": "whenever",
  "answer": "whenever",
  "nblanks": 1,
  "pos": "conj.",
  "cn_def": "每當；無論何時",
  "en_def": "every time that; at any time that",
  "sentence": "My grandmother makes my favorite beef soup {{BLANK}} I visit her, even if it is a hot summer day.",
  "cn": "每當我去看奶奶時，她都會煮我最愛的牛肉湯，就算是大熱天也一樣。",
  "cnMarked": "【每當】我去看奶奶時，她都會煮我最愛的牛肉湯，就算是大熱天也一樣。",
  "isHead": false,
  "level": 2,
  "family": "whereas"
 },
 {
  "word": "whether",
  "answer": "whether",
  "nblanks": 1,
  "pos": "conj.",
  "cn_def": "是否；究竟是…還是…",
  "en_def": "used to talk about a choice between two things",
  "sentence": "I can't decide {{BLANK}} to join the basketball team or the school band, because practice for both is on Friday.",
  "cn": "我無法決定要參加籃球隊還是學校樂隊，因為兩者都在星期五練習。",
  "cnMarked": "我無法決定【要】參加籃球隊【還是】學校樂隊，因為兩者都在星期五練習。",
  "isHead": false,
  "level": 1,
  "family": "whereas"
 },
 {
  "word": "whine",
  "answer": "whining",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "抱怨；發牢騷",
  "en_def": "to complain in an annoying way",
  "sentence": "Stop {{BLANK}} about the homework and just start doing it; you will finish faster if you stop complaining.",
  "cn": "別再抱怨作業了，趕快開始寫；不再發牢騷的話你會更快寫完。",
  "cnMarked": "別再【抱怨】作業了，趕快開始寫；不再發牢騷的話你會更快寫完。",
  "isHead": true,
  "level": 5,
  "family": "whine"
 },
 {
  "word": "whine",
  "answer": "whine",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "（狗）嗚咽；哀鳴",
  "en_def": "(of a dog) to make a long high sad sound",
  "sentence": "Our puppy began to {{BLANK}} at the door because she wanted to go outside for a walk.",
  "cn": "我們的小狗開始在門口嗚嗚叫，因為牠想出去散步。",
  "cnMarked": "我們的小狗開始在門口【嗚嗚叫】，因為牠想出去散步。",
  "isHead": false,
  "level": 5,
  "family": "whine"
 },
 {
  "word": "whine",
  "answer": "whine",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "嗡嗡聲；哀鳴聲",
  "en_def": "a long high unpleasant sound",
  "sentence": "I could hear the high {{BLANK}} of a mosquito near my ear all night, so I didn't sleep well at all.",
  "cn": "我整晚都聽到耳邊蚊子尖細的嗡嗡聲，所以我完全沒睡好。",
  "cnMarked": "我整晚都聽到耳邊蚊子尖細的【嗡嗡聲】，所以我完全沒睡好。",
  "isHead": false,
  "level": 5,
  "family": "whine"
 },
 {
  "word": "widespread",
  "answer": "widespread",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "廣泛的；普遍的",
  "en_def": "happening in many places or among many people",
  "sentence": "The use of smartphones is now {{BLANK}} among elementary school students, and many parents are worried about it.",
  "cn": "智慧型手機的使用現在在小學生之間很普遍，許多家長對此感到擔憂。",
  "cnMarked": "智慧型手機的使用現在在小學生之間很【普遍】，許多家長對此感到擔憂。",
  "isHead": true,
  "level": 5,
  "family": "widespread"
 },
 {
  "word": "widely",
  "answer": "widely",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "廣泛地；普遍地",
  "en_def": "by a lot of people or in a lot of places",
  "sentence": "English is {{BLANK}} used in international business, so many companies want workers who can speak it well.",
  "cn": "英語在國際商務中被廣泛使用，所以許多公司想要英文說得好的員工。",
  "cnMarked": "英語在國際商務中被【廣泛】使用，所以許多公司想要英文說得好的員工。",
  "isHead": false,
  "level": null,
  "family": "widespread"
 },
 {
  "word": "spread, spread, spread",
  "answer": "spread",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "擴散；蔓延；散布",
  "en_def": "to move or cover a larger area; to make something known by more people",
  "sentence": "The fire {{BLANK}} quickly through the dry forest because of the strong winds, and hundreds of firefighters were sent there.",
  "cn": "由於強風，火勢在乾燥的森林中迅速蔓延，數百名消防員被派往現場。",
  "cnMarked": "由於強風，火勢在乾燥的森林中迅速【蔓延】，數百名消防員被派往現場。",
  "isHead": false,
  "level": 2,
  "family": "widespread"
 },
 {
  "word": "wig",
  "answer": "wig",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "假髮",
  "en_def": "a covering of false hair worn on the head",
  "sentence": "The actor wore a long white {{BLANK}} and a fake beard to play the old king in the school play.",
  "cn": "那位演員戴著長長的白色假髮和假鬍子，在學校話劇中飾演老國王。",
  "cnMarked": "那位演員戴著長長的白色【假髮】和假鬍子，在學校話劇中飾演老國王。",
  "isHead": true,
  "level": 5,
  "family": "wig"
 },
 {
  "word": "wear a wig",
  "answer": "wear a wig",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "戴假髮",
  "en_def": "to put on false hair",
  "sentence": "For the Halloween party, my brother decided to {{BLANK}} with bright green hair and dress up as a monster.",
  "cn": "萬聖節派對時，我哥哥決定戴一頂亮綠色的假髮，打扮成怪物。",
  "cnMarked": "萬聖節派對時，我哥哥決定【戴】一頂亮綠色的【假髮】，打扮成怪物。",
  "isHead": false,
  "level": null,
  "family": "wig"
 },
 {
  "word": "wig",
  "answer": "wig",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "（法官戴的）假髮",
  "en_def": "false white hair worn by judges in some countries",
  "sentence": "In British courts, judges traditionally wear a white {{BLANK}}, which makes them look very serious and old-fashioned.",
  "cn": "在英國的法庭上，法官傳統上會戴白色假髮，這讓他們看起來非常嚴肅又老派。",
  "cnMarked": "在英國的法庭上，法官傳統上會戴白色【假髮】，這讓他們看起來非常嚴肅又老派。",
  "isHead": false,
  "level": 5,
  "family": "wig"
 },
 {
  "word": "wilderness",
  "answer": "wilderness",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "荒野；荒地",
  "en_def": "a large natural area where no people live",
  "sentence": "The hikers spent five days in the {{BLANK}} without seeing another person, a road, or even a single building.",
  "cn": "登山客在荒野中度過五天，沒看到任何人、道路，甚至連一棟建築也沒有。",
  "cnMarked": "登山客在【荒野】中度過五天，沒看到任何人、道路，甚至連一棟建築也沒有。",
  "isHead": true,
  "level": 5,
  "family": "wilderness"
 },
 {
  "word": "wildlife",
  "answer": "wildlife",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "野生動物；野生生物",
  "en_def": "animals and plants that live in nature",
  "sentence": "The national park protects the local {{BLANK}}, including black bears, monkeys, and many kinds of rare birds.",
  "cn": "國家公園保護當地的野生動物，包括黑熊、獼猴和許多種稀有鳥類。",
  "cnMarked": "國家公園保護當地的【野生動物】，包括黑熊、獼猴和許多種稀有鳥類。",
  "isHead": true,
  "level": 5,
  "family": "wilderness"
 },
 {
  "word": "wild",
  "answer": "wild",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "野生的",
  "en_def": "living or growing in nature, not kept by people",
  "sentence": "These {{BLANK}} monkeys often steal food from tourists, so keep your bags closed when you walk on the mountain path.",
  "cn": "這些野生獼猴常常搶遊客的食物，所以走山路時要把包包關好。",
  "cnMarked": "這些【野生】獼猴常常搶遊客的食物，所以走山路時要把包包關好。",
  "isHead": false,
  "level": 2,
  "family": "wilderness"
 },
 {
  "word": "in the wild",
  "answer": "in the wild",
  "nblanks": 3,
  "pos": "phr.",
  "cn_def": "在野外",
  "en_def": "in natural conditions, not in a zoo",
  "sentence": "Fewer than two thousand of these pandas still live {{BLANK}}, so the government works hard to protect them.",
  "cn": "這種貓熊只剩不到兩千隻還生活在野外，所以政府努力保護牠們。",
  "cnMarked": "這種貓熊只剩不到兩千隻還生活【在野外】，所以政府努力保護牠們。",
  "isHead": false,
  "level": null,
  "family": "wilderness"
 },
 {
  "word": "wildfire",
  "answer": "wildfire",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "野火；森林大火",
  "en_def": "a large fire that spreads quickly through forests or grassland",
  "sentence": "The {{BLANK}} burned for two weeks and destroyed more than a thousand homes in California last summer.",
  "cn": "去年夏天那場野火燒了兩個星期，摧毀了加州一千多棟房屋。",
  "cnMarked": "去年夏天那場【野火】燒了兩個星期，摧毀了加州一千多棟房屋。",
  "isHead": false,
  "level": null,
  "family": "wilderness"
 },
 {
  "word": "windshield",
  "answer": "windshield",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "擋風玻璃",
  "en_def": "the large glass window at the front of a car",
  "sentence": "A small stone hit the car's {{BLANK}} on the highway and made a long crack right in front of the driver.",
  "cn": "一顆小石頭在高速公路上打到車子的擋風玻璃，就在駕駛正前方留下一道長長的裂痕。",
  "cnMarked": "一顆小石頭在高速公路上打到車子的【擋風玻璃】，就在駕駛正前方留下一道長長的裂痕。",
  "isHead": true,
  "level": 5,
  "family": "windshield"
 },
 {
  "word": "windshield wiper",
  "answer": "windshield wipers",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "雨刷",
  "en_def": "a long thin arm that moves across a windshield to clean off rain",
  "sentence": "It was raining so hard that even with the {{BLANK}} going at full speed, my father could hardly see the road.",
  "cn": "雨下得非常大，就算雨刷開到最快，我爸爸也幾乎看不到路。",
  "cnMarked": "雨下得非常大，就算【雨刷】開到最快，我爸爸也幾乎看不到路。",
  "isHead": false,
  "level": null,
  "family": "windshield"
 },
 {
  "word": "wind",
  "answer": "wind",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "風",
  "en_def": "moving air",
  "sentence": "A strong {{BLANK}} blew my umbrella inside out as I was walking to the bus stop this morning.",
  "cn": "今天早上我走去公車站時，一陣強風把我的雨傘吹翻了。",
  "cnMarked": "今天早上我走去公車站時，一陣強【風】把我的雨傘吹翻了。",
  "isHead": false,
  "level": 1,
  "family": "windshield"
 },
 {
  "word": "wither",
  "answer": "wither",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "枯萎；凋謝",
  "en_def": "(of a plant) to become dry and start to die",
  "sentence": "The flowers on my desk began to {{BLANK}} after only three days, because I forgot to change the water.",
  "cn": "我桌上的花才三天就開始枯萎了，因為我忘了換水。",
  "cnMarked": "我桌上的花才三天就開始【枯萎】了，因為我忘了換水。",
  "isHead": true,
  "level": 5,
  "family": "wither"
 },
 {
  "word": "wither",
  "answer": "wither",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "衰退；減弱；消失",
  "en_def": "to become weaker and slowly disappear",
  "sentence": "Her hope of winning the game began to {{BLANK}} when the other team scored three goals in five minutes.",
  "cn": "當對手在五分鐘內連進三球時，她贏球的希望開始破滅。",
  "cnMarked": "當對手在五分鐘內連進三球時，她贏球的希望開始【破滅】。",
  "isHead": false,
  "level": 5,
  "family": "wither"
 },
 {
  "word": "withered",
  "answer": "withered",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "枯萎的；乾枯的",
  "en_def": "dry and dead or dying",
  "sentence": "Grandpa picked up a {{BLANK}} leaf from the ground and told us that autumn had arrived in the mountains.",
  "cn": "爺爺從地上撿起一片枯葉，告訴我們山上已經入秋了。",
  "cnMarked": "爺爺從地上撿起一片【枯】葉，告訴我們山上已經入秋了。",
  "isHead": false,
  "level": null,
  "family": "wither"
 },
 {
  "word": "witty",
  "answer": "witty",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "機智的；風趣的",
  "en_def": "clever and funny in what you say",
  "sentence": "Our English teacher is so {{BLANK}} that even students who hate grammar laugh during her lessons.",
  "cn": "我們的英文老師非常風趣，連討厭文法的學生在她的課上都會笑。",
  "cnMarked": "我們的英文老師非常【風趣】，連討厭文法的學生在她的課上都會笑。",
  "isHead": true,
  "level": 5,
  "family": "witty"
 },
 {
  "word": "wit",
  "answer": "wit",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "機智；風趣",
  "en_def": "the ability to say clever and funny things",
  "sentence": "The comedian is famous for his quick {{BLANK}}, and he always has a funny answer to every question from the audience.",
  "cn": "那位喜劇演員以反應快、機智出名，他對觀眾的每個問題總有好笑的回答。",
  "cnMarked": "那位喜劇演員以反應快、【機智】出名，他對觀眾的每個問題總有好笑的回答。",
  "isHead": false,
  "level": 4,
  "family": "witty"
 },
 {
  "word": "wittily",
  "answer": "wittily",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "機智地；詼諧地",
  "en_def": "in a clever and funny way",
  "sentence": "She answered the reporter's difficult question {{BLANK}}, and the whole room burst into laughter at the press conference.",
  "cn": "她機智地回答了記者的難題，整個會場哄堂大笑。",
  "cnMarked": "她【機智地】回答了記者的難題，整個會場哄堂大笑。",
  "isHead": false,
  "level": null,
  "family": "witty"
 },
 {
  "word": "workshop",
  "answer": "workshop",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "研習會；工作坊",
  "en_def": "a meeting where people learn about a subject by discussing and practicing",
  "sentence": "Our teachers attended a two-day {{BLANK}} on how to use AI tools in the classroom during the winter vacation.",
  "cn": "我們的老師在寒假參加了一場為期兩天、關於如何在課堂上使用AI工具的研習工作坊。",
  "cnMarked": "我們的老師在寒假參加了一場為期兩天、關於如何在課堂上使用AI工具的【研習工作坊】。",
  "isHead": true,
  "level": 5,
  "family": "workshop"
 },
 {
  "word": "workshop",
  "answer": "workshop",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "工作室；工廠",
  "en_def": "a room or building where things are made or repaired",
  "sentence": "My uncle builds wooden chairs and tables in a small {{BLANK}} behind his house, and he sells them online.",
  "cn": "我舅舅在他家後面的一間小工作室裡做木椅和木桌，然後在網路上販售。",
  "cnMarked": "我舅舅在他家後面的一間小【工作室】裡做木椅和木桌，然後在網路上販售。",
  "isHead": false,
  "level": 5,
  "family": "workshop"
 },
 {
  "word": "writing workshop",
  "answer": "writing workshop",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "寫作工作坊",
  "en_def": "a class where people write and comment on each other's work",
  "sentence": "I joined a {{BLANK}} at the library, where we shared our stories and gave each other helpful comments.",
  "cn": "我參加了圖書館的寫作工作坊，我們在那裡分享故事並互相給予有用的意見。",
  "cnMarked": "我參加了圖書館的【寫作工作坊】，我們在那裡分享故事並互相給予有用的意見。",
  "isHead": false,
  "level": null,
  "family": "workshop"
 },
 {
  "word": "worship",
  "answer": "worship",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "敬拜；崇拜（神明）",
  "en_def": "to show love and respect to a god, often by praying",
  "sentence": "Many people in Taiwan {{BLANK}} Mazu, the goddess of the sea, and visit her temples during the big festival in spring.",
  "cn": "台灣許多人敬拜海上女神媽祖，並在春天的大型慶典期間參拜她的廟宇。",
  "cnMarked": "台灣許多人【敬拜】海上女神媽祖，並在春天的大型慶典期間參拜她的廟宇。",
  "isHead": true,
  "level": 5,
  "family": "worship"
 },
 {
  "word": "worship",
  "answer": "worship",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "禮拜；敬拜",
  "en_def": "the act of praying to or showing respect for a god",
  "sentence": "The old temple is still a place of {{BLANK}}, so visitors should speak quietly and not take photos inside.",
  "cn": "這座古廟仍是一個敬拜的場所，所以遊客應該輕聲說話，不要在裡面拍照。",
  "cnMarked": "這座古廟仍是一個【敬拜】的場所，所以遊客應該輕聲說話，不要在裡面拍照。",
  "isHead": false,
  "level": 5,
  "family": "worship"
 },
 {
  "word": "worship",
  "answer": "worships",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "崇拜；熱愛",
  "en_def": "to love and admire someone very much",
  "sentence": "My little brother {{BLANK}} his basketball coach and tries to copy everything he does on the court.",
  "cn": "我弟弟非常崇拜他的籃球教練，試著模仿他在球場上的一舉一動。",
  "cnMarked": "我弟弟非常【崇拜】他的籃球教練，試著模仿他在球場上的一舉一動。",
  "isHead": false,
  "level": 5,
  "family": "worship"
 },
 {
  "word": "worthwhile",
  "answer": "worthwhile",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "值得做的；有價值的",
  "en_def": "useful or important enough to spend time, money, or effort on",
  "sentence": "Volunteering at the animal shelter is hard work, but it is {{BLANK}} because you can help so many dogs find homes.",
  "cn": "在動物收容所當志工很辛苦，但很值得，因為你可以幫助許多狗狗找到家。",
  "cnMarked": "在動物收容所當志工很辛苦，但很【值得】，因為你可以幫助許多狗狗找到家。",
  "isHead": true,
  "level": 5,
  "family": "worthwhile"
 },
 {
  "word": "worthy",
  "answer": "worthy",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "值得的；配得上的",
  "en_def": "deserving respect, praise, or attention",
  "sentence": "Her brave actions during the fire are {{BLANK}} of our respect, and the mayor will give her a special award.",
  "cn": "她在火災中的勇敢行為值得我們尊敬，市長將頒給她一個特別獎。",
  "cnMarked": "她在火災中的勇敢行為【值得】我們尊敬，市長將頒給她一個特別獎。",
  "isHead": true,
  "level": 5,
  "family": "worthwhile"
 },
 {
  "word": "worth",
  "answer": "worth",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "值得；價值…",
  "en_def": "good or useful enough to do; having a certain value",
  "sentence": "The museum is a little far from the station, but it is definitely {{BLANK}} a visit if you love art.",
  "cn": "那間博物館離車站有點遠，但如果你熱愛藝術，絕對值得一遊。",
  "cnMarked": "那間博物館離車站有點遠，但如果你熱愛藝術，絕對【值得】一遊。",
  "isHead": false,
  "level": 2,
  "family": "worthwhile"
 },
 {
  "word": "worthless",
  "answer": "worthless",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "無價值的；沒用的",
  "en_def": "having no value or use",
  "sentence": "The old coins that we found in the box turned out to be {{BLANK}}, so we gave them to my little brother to play with.",
  "cn": "我們在盒子裡找到的舊硬幣結果是一文不值的，所以我們把它們給弟弟玩。",
  "cnMarked": "我們在盒子裡找到的舊硬幣結果是【一文不值的】，所以我們把它們給弟弟玩。",
  "isHead": false,
  "level": null,
  "family": "worthwhile"
 },
 {
  "word": "yacht",
  "answer": "yacht",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "遊艇；帆船",
  "en_def": "a large boat with sails or an engine, used for pleasure",
  "sentence": "The rich businessman spent his summer sailing around the Greek islands on his private {{BLANK}} with his family.",
  "cn": "那位富商和家人搭他的私人遊艇在希臘群島航行，度過了整個夏天。",
  "cnMarked": "那位富商和家人搭他的私人【遊艇】在希臘群島航行，度過了整個夏天。",
  "isHead": true,
  "level": 5,
  "family": "yacht"
 },
 {
  "word": "yacht club",
  "answer": "yacht club",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "遊艇俱樂部",
  "en_def": "a club for people who sail yachts",
  "sentence": "My uncle joined a {{BLANK}} in Kaohsiung, and now he goes sailing every weekend when the weather is good.",
  "cn": "我叔叔加入了高雄的一個遊艇俱樂部，現在天氣好的週末他都會去航行。",
  "cnMarked": "我叔叔加入了高雄的一個【遊艇俱樂部】，現在天氣好的週末他都會去航行。",
  "isHead": false,
  "level": null,
  "family": "yacht"
 },
 {
  "word": "sailing",
  "answer": "sailing",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "帆船運動；航行",
  "en_def": "the sport or activity of traveling in a boat with sails",
  "sentence": "Kenting is a great place for {{BLANK}}, because the wind is strong and the sea is clear and warm.",
  "cn": "墾丁是從事帆船運動的好地方，因為那裡風大，海水清澈又溫暖。",
  "cnMarked": "墾丁是從事【帆船運動】的好地方，因為那裡風大，海水清澈又溫暖。",
  "isHead": false,
  "level": null,
  "family": "yacht"
 },
 {
  "word": "yield",
  "answer": "yield",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "生產；產出；產生",
  "en_def": "to produce crops, profits, or results",
  "sentence": "This small farm can {{BLANK}} more than two tons of rice a year, because the soil is rich and there is plenty of rain.",
  "cn": "這座小農場一年可以生產兩噸多的稻米，因為土壤肥沃、雨量充足。",
  "cnMarked": "這座小農場一年可以【生產】兩噸多的稻米，因為土壤肥沃、雨量充足。",
  "isHead": true,
  "level": 5,
  "family": "yield"
 },
 {
  "word": "yield",
  "answer": "yield",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "讓路；讓行",
  "en_def": "to let other cars or people go first",
  "sentence": "Drivers must {{BLANK}} to people walking across the street, or they will have to pay a big fine.",
  "cn": "駕駛人必須禮讓過馬路的行人，否則要繳一大筆罰款。",
  "cnMarked": "駕駛人必須【禮讓】過馬路的行人，否則要繳一大筆罰款。",
  "isHead": false,
  "level": 5,
  "family": "yield"
 },
 {
  "word": "yield to",
  "answer": "yielded to",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "屈服於；向…讓步",
  "en_def": "to finally agree to do what someone wants after being forced",
  "sentence": "The company finally {{BLANK}} pressure from its workers and agreed to give them two more days of holiday.",
  "cn": "公司最後屈服於員工的壓力，同意再多給他們兩天假。",
  "cnMarked": "公司最後【屈服於】員工的壓力，同意再多給他們兩天假。",
  "isHead": false,
  "level": null,
  "family": "yield"
 },
 {
  "word": "yield",
  "answer": "yield",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "產量；收益",
  "en_def": "the amount of crops or profit produced",
  "sentence": "Because of the long dry season, this year's mango {{BLANK}} is much lower than last year's, so prices have gone up.",
  "cn": "由於漫長的乾季，今年芒果的產量比去年低很多，所以價格上漲了。",
  "cnMarked": "由於漫長的乾季，今年芒果的【產量】比去年低很多，所以價格上漲了。",
  "isHead": false,
  "level": 5,
  "family": "yield"
 }
];
const MCQS = [
 {
  "q": "Tom ate three hot dogs and then rode the roller coaster twice. Soon his face turned green, and he quickly ran to the bathroom to ______ .",
  "options": [
   "vomit",
   "worship",
   "vow",
   "wither"
  ],
  "answer": 0,
  "vocabIndex": 0
 },
 {
  "q": "For my birthday, my aunt gave me a five-hundred-dollar ______ for the bookstore. I can use it to buy any books I like before the end of the year.",
  "options": [
   "wig",
   "vow",
   "voucher",
   "yacht"
  ],
  "answer": 2,
  "vocabIndex": 3
 },
 {
  "q": "After failing the math test again, Peter made a ______ to himself. He promised to study for at least two hours every night until the final exam.",
  "options": [
   "warehouse",
   "wheelchair",
   "voucher",
   "vow"
  ],
  "answer": 3,
  "vocabIndex": 6
 },
 {
  "q": "Old people and small children are more ______ to the flu than other people. That is why doctors tell them to get a flu shot every autumn.",
  "options": [
   "widespread",
   "vulnerable",
   "worthwhile",
   "witty"
  ],
  "answer": 1,
  "vocabIndex": 9
 },
 {
  "q": "The online shop keeps all its products in a huge ______ outside the city. When you order something, workers there pack it and send it out by truck.",
  "options": [
   "warehouse",
   "wig",
   "windshield",
   "whine"
  ],
  "answer": 0,
  "vocabIndex": 12
 },
 {
  "q": "In the old legend, a brave young ______ fought a huge dragon with only a sword. He saved the village, and the king gave him a castle as a reward.",
  "options": [
   "wheelchair",
   "voucher",
   "warrior",
   "windshield"
  ],
  "answer": 2,
  "vocabIndex": 15
 },
 {
  "q": "Be ______ of strangers who call you and say you have won a prize. Many of them are trying to get your bank information and steal your money.",
  "options": [
   "witty",
   "wary",
   "weird",
   "worthy"
  ],
  "answer": 1,
  "vocabIndex": 18
 },
 {
  "q": "I heard a ______ noise from the kitchen at midnight. It sounded like someone was talking, but when I turned on the light, nobody was there.",
  "options": [
   "worthy",
   "widespread",
   "wary",
   "weird"
  ],
  "answer": 3,
  "vocabIndex": 21
 },
 {
  "q": "I have no interest ______ in horror movies. Please don't ask me to watch one with you, because I will have bad dreams for a week.",
  "options": [
   "whatsoever",
   "worthwhile",
   "wary",
   "vulnerable"
  ],
  "answer": 0,
  "vocabIndex": 24
 },
 {
  "q": "After my grandfather broke his leg, he couldn't walk for two months. We pushed him around the park in a ______ every afternoon so he could get some fresh air.",
  "options": [
   "warehouse",
   "windshield",
   "wheelchair",
   "workshop"
  ],
  "answer": 2,
  "vocabIndex": 28
 },
 {
  "q": "The hiker has been missing for three days. The police are still trying to find out his ______ , and many volunteers are searching the mountain to help.",
  "options": [
   "worship",
   "whereabouts",
   "voucher",
   "yield"
  ],
  "answer": 1,
  "vocabIndex": 31
 },
 {
  "q": "My sister loves spicy food, ______ I can't eat even a little chili without drinking three glasses of water. We never order the same dishes at restaurants.",
  "options": [
   "whereas",
   "whether",
   "whenever",
   "wherever"
  ],
  "answer": 0,
  "vocabIndex": 34
 },
 {
  "q": "Please don't ______ about the homework every single night. Just start doing it, because if you keep complaining, it will take you even longer to finish.",
  "options": [
   "wither",
   "yield",
   "whine",
   "vow"
  ],
  "answer": 2,
  "vocabIndex": 38
 },
 {
  "q": "Smartphones are now ______ among elementary school students. In some classes in Taipei, almost every child has one, and many parents are very worried about it.",
  "options": [
   "worthless",
   "wary",
   "witty",
   "widespread"
  ],
  "answer": 3,
  "vocabIndex": 41
 },
 {
  "q": "The actor playing the old king wore a long white ______ and a fake beard. Nobody in the audience could tell that he was only seventeen years old.",
  "options": [
   "wig",
   "vow",
   "yield",
   "whine"
  ],
  "answer": 0,
  "vocabIndex": 44
 },
 {
  "q": "The hikers spent five days in the ______ without seeing a road, a house, or another person. They had to carry all their food and water on their backs.",
  "options": [
   "warehouse",
   "wilderness",
   "windshield",
   "workshop"
  ],
  "answer": 1,
  "vocabIndex": 47
 },
 {
  "q": "The national park protects all kinds of ______ , including black bears, monkeys, and rare birds. Visitors are not allowed to feed or touch the wild animals.",
  "options": [
   "yacht",
   "voucher",
   "worship",
   "wildlife"
  ],
  "answer": 3,
  "vocabIndex": 48
 },
 {
  "q": "A small stone hit our car on the highway and made a long crack in the ______ . Dad could hardly see the road, so he drove slowly to the repair shop.",
  "options": [
   "wilderness",
   "windshield",
   "worship",
   "wheelchair"
  ],
  "answer": 1,
  "vocabIndex": 52
 },
 {
  "q": "I forgot to water the plants on my balcony while I was on vacation. When I came back, all the flowers had started to ______ and turn brown.",
  "options": [
   "wither",
   "vomit",
   "worship",
   "yield"
  ],
  "answer": 0,
  "vocabIndex": 55
 },
 {
  "q": "Our English teacher is very ______ . She always makes clever little jokes about grammar, and even students who hate English laugh during her lessons every day.",
  "options": [
   "wary",
   "widespread",
   "witty",
   "vulnerable"
  ],
  "answer": 2,
  "vocabIndex": 58
 },
 {
  "q": "Our teachers attended a two-day ______ on using AI in the classroom during winter vacation. They learned new teaching ideas and practiced them in small groups.",
  "options": [
   "wheelchair",
   "warehouse",
   "wilderness",
   "workshop"
  ],
  "answer": 3,
  "vocabIndex": 61
 },
 {
  "q": "Every spring, thousands of people walk for nine days to ______ Mazu, the goddess of the sea. They visit many temples along the way and pray for good luck.",
  "options": [
   "wither",
   "worship",
   "whine",
   "vomit"
  ],
  "answer": 1,
  "vocabIndex": 64
 },
 {
  "q": "Volunteering at the animal shelter is hard work, and I don't get paid. But it is ______ , because I have helped many dogs find a new home.",
  "options": [
   "vulnerable",
   "wary",
   "weird",
   "worthwhile"
  ],
  "answer": 3,
  "vocabIndex": 67
 },
 {
  "q": "The firefighter ran into the burning building three times to save a family. His brave actions are ______ of our respect, and the mayor will give him a medal.",
  "options": [
   "wary",
   "weird",
   "worthy",
   "widespread"
  ],
  "answer": 2,
  "vocabIndex": 68
 },
 {
  "q": "The rich businessman spent the whole summer sailing around the Greek islands. He and his family lived on his private ______ and swam in the sea every day.",
  "options": [
   "wig",
   "yacht",
   "vow",
   "whine"
  ],
  "answer": 1,
  "vocabIndex": 71
 },
 {
  "q": "This farm is small, but the soil is very rich, and there is plenty of rain. It can ______ more than two tons of rice every year.",
  "options": [
   "yield",
   "wither",
   "whine",
   "vomit"
  ],
  "answer": 0,
  "vocabIndex": 74
 },
 {
  "q": "Signs at the beach tell swimmers to ______ of strong waves. Last summer, two people were pulled out to sea when a strong typhoon was coming.",
  "options": [
   "worship",
   "wither",
   "beware",
   "yield"
  ],
  "answer": 2,
  "vocabIndex": 20
 },
 {
  "q": "My grandmother always cooks my favorite beef soup ______ I visit her. Even on hot summer days, there is a big bowl waiting for me on the table.",
  "options": [
   "whenever",
   "wherever",
   "whereas",
   "whether"
  ],
  "answer": 0,
  "vocabIndex": 36
 },
 {
  "q": "The comedian is famous for his quick ______ . No matter what question people in the audience ask, he always has a funny answer ready in a second.",
  "options": [
   "yacht",
   "wit",
   "vow",
   "wig"
  ],
  "answer": 1,
  "vocabIndex": 59
 },
 {
  "q": "English is ______ used in international business. That is why many companies in Taiwan want to hire workers who can speak and write it really well.",
  "options": [
   "wittily",
   "weirdly",
   "warily",
   "widely"
  ],
  "answer": 3,
  "vocabIndex": 42
 }
];
const LOOKUP = {};
VOCAB.forEach(v => { const key = v.word.toLowerCase(); const sense = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def };
  if (LOOKUP[key]) LOOKUP[key].combined.push(sense); else LOOKUP[key] = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def, combined: [sense] }; });
const EXTRA_GLOSSES = {};