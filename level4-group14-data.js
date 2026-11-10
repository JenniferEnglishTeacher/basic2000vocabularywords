// 學測6000字 Level 4 Group 14 (earnest-engineering) — word-family edition
const QUIZ_CONFIG = {
  groupName: "6000字 L4 Group 14 - earnest – engineering (word family)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};
const VOCAB = [
 {
  "word": "earnest",
  "answer": "earnest",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "認真的；誠摯的",
  "en_def": "very serious and sincere",
  "sentence": "The young teacher made an {{BLANK}} effort to learn every student's name during the first week, and the class really appreciated it.",
  "cn": "這位年輕老師在第一週認真努力記住每個學生的名字，全班都非常感激。",
  "cnMarked": "這位年輕老師在第一週【認真】努力記住每個學生的名字，全班都非常感激。",
  "isHead": true,
  "level": 4,
  "family": "earnest"
 },
 {
  "word": "in earnest",
  "answer": "in earnest",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "認真地；正式地",
  "en_def": "seriously; in a real and determined way",
  "sentence": "After the holiday, the students began to study {{BLANK}} because the big exam was only three weeks away.",
  "cn": "假期過後，學生們開始認真地讀書，因為大考只剩三週了。",
  "cnMarked": "假期過後，學生們開始【認真地】讀書，因為大考只剩三週了。",
  "isHead": false,
  "level": null,
  "family": "earnest"
 },
 {
  "word": "earnestly",
  "answer": "earnestly",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "認真地；誠摯地",
  "en_def": "in a serious and sincere way",
  "sentence": "She {{BLANK}} asked her parents to let her join the school trip, promising that she would finish all her homework first.",
  "cn": "她誠摯地請求父母讓她參加學校旅行，並答應會先完成所有功課。",
  "cnMarked": "她【誠摯地】請求父母讓她參加學校旅行，並答應會先完成所有功課。",
  "isHead": false,
  "level": null,
  "family": "earnest"
 },
 {
  "word": "earphone",
  "answer": "earphones",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "耳機",
  "en_def": "a small piece of equipment you put in your ear to listen to sound",
  "sentence": "I always wear {{BLANK}} on the MRT so that my music does not bother the other passengers sitting around me.",
  "cn": "我在捷運上總是戴耳機，這樣我的音樂才不會打擾到坐在我周圍的其他乘客。",
  "cnMarked": "我在捷運上總是戴【耳機】，這樣我的音樂才不會打擾到坐在我周圍的其他乘客。",
  "isHead": true,
  "level": 4,
  "family": "earphone"
 },
 {
  "word": "a pair of earphones",
  "answer": "a pair of earphones",
  "nblanks": 4,
  "pos": "n.phr.",
  "cn_def": "一副耳機",
  "en_def": "two earphones that are used together",
  "sentence": "My brother gave me {{BLANK}} for my birthday, and the sound quality is much better than the old ones I had.",
  "cn": "我哥哥送我一副耳機當生日禮物，音質比我以前的那副好得多。",
  "cnMarked": "我哥哥送我【一副耳機】當生日禮物，音質比我以前的那副好得多。",
  "isHead": false,
  "level": null,
  "family": "earphone"
 },
 {
  "word": "headphones",
  "answer": "headphones",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "頭戴式耳機",
  "en_def": "a piece of equipment with two parts that cover your ears to listen to sound",
  "sentence": "The large {{BLANK}} in the music room block out all the noise, so students can hear every note clearly.",
  "cn": "音樂教室裡的大型頭戴式耳機隔絕了所有噪音，所以學生能清楚聽到每個音符。",
  "cnMarked": "音樂教室裡的大型【頭戴式耳機】隔絕了所有噪音，所以學生能清楚聽到每個音符。",
  "isHead": false,
  "level": 6,
  "family": "earphone"
 },
 {
  "word": "economic",
  "answer": "economic",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "經濟的",
  "en_def": "connected with trade, industry, and money",
  "sentence": "The country's {{BLANK}} growth slowed down last year because fewer tourists visited and factories sold fewer products abroad.",
  "cn": "這個國家去年的經濟成長放緩，因為來訪的觀光客減少，工廠賣到國外的產品也變少了。",
  "cnMarked": "這個國家去年的【經濟】成長放緩，因為來訪的觀光客減少，工廠賣到國外的產品也變少了。",
  "isHead": true,
  "level": 4,
  "family": "economic"
 },
 {
  "word": "economical",
  "answer": "economical",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "節省的；經濟實惠的",
  "en_def": "not using a lot of money, fuel, or time; cheap to use",
  "sentence": "A small car is more {{BLANK}} than a big one because it uses less gas and costs less to park in the city.",
  "cn": "小車比大車更省錢，因為它用的油比較少，在城市停車的費用也比較低。",
  "cnMarked": "小車比大車更【省錢】，因為它用的油比較少，在城市停車的費用也比較低。",
  "isHead": true,
  "level": 4,
  "family": "economic"
 },
 {
  "word": "economics",
  "answer": "economics",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "經濟學",
  "en_def": "the study of how money, goods, and services are produced and used",
  "sentence": "My sister studies {{BLANK}} at university because she wants to understand why prices go up and down.",
  "cn": "我姐姐在大學讀經濟學，因為她想了解為什麼物價會上漲和下跌。",
  "cnMarked": "我姐姐在大學讀【經濟學】，因為她想了解為什麼物價會上漲和下跌。",
  "isHead": true,
  "level": 4,
  "family": "economic"
 },
 {
  "word": "economist",
  "answer": "economist",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "經濟學家",
  "en_def": "a person who studies or writes about economics",
  "sentence": "The {{BLANK}} on TV explained that house prices in Taipei will probably keep rising over the next five years.",
  "cn": "電視上的經濟學家解釋說，台北的房價在未來五年可能會持續上漲。",
  "cnMarked": "電視上的【經濟學家】解釋說，台北的房價在未來五年可能會持續上漲。",
  "isHead": true,
  "level": 4,
  "family": "economic"
 },
 {
  "word": "economy",
  "answer": "economy",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "經濟",
  "en_def": "the system of money, trade, and industry in a country",
  "sentence": "When the {{BLANK}} is strong, more people have jobs and families feel comfortable spending money on travel and new clothes.",
  "cn": "當經濟強勁時，更多人有工作，家庭也樂於把錢花在旅遊和新衣服上。",
  "cnMarked": "當【經濟】強勁時，更多人有工作，家庭也樂於把錢花在旅遊和新衣服上。",
  "isHead": true,
  "level": 4,
  "family": "economic"
 },
 {
  "word": "economize",
  "answer": "economize",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "節省；節約",
  "en_def": "to spend less money or use fewer resources",
  "sentence": "Since Dad lost his job, our family has had to {{BLANK}} by eating at home and canceling our cable TV.",
  "cn": "自從爸爸失業後，我們家不得不節省開支，在家吃飯並取消有線電視。",
  "cnMarked": "自從爸爸失業後，我們家不得不【節省開支】，在家吃飯並取消有線電視。",
  "isHead": false,
  "level": null,
  "family": "economic"
 },
 {
  "word": "economically",
  "answer": "economically",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "在經濟上；節省地",
  "en_def": "in a way connected with the economy; in a way that saves money",
  "sentence": "The town has suffered {{BLANK}} since the big factory closed, and many young people have moved away to find work.",
  "cn": "自從大工廠關閉後，這個小鎮在經濟上深受其害，許多年輕人搬走去找工作。",
  "cnMarked": "自從大工廠關閉後，這個小鎮【在經濟上】深受其害，許多年輕人搬走去找工作。",
  "isHead": false,
  "level": null,
  "family": "economic"
 },
 {
  "word": "efficiency",
  "answer": "efficiency",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "效率",
  "en_def": "the quality of doing something well without wasting time or energy",
  "sentence": "The new computer system improved the {{BLANK}} of the office so much that workers now finish their reports in half the time.",
  "cn": "新電腦系統大大提升了辦公室的效率，員工現在只需一半的時間就能完成報告。",
  "cnMarked": "新電腦系統大大提升了辦公室的【效率】，員工現在只需一半的時間就能完成報告。",
  "isHead": true,
  "level": 4,
  "family": "efficiency"
 },
 {
  "word": "efficient",
  "answer": "efficient",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "有效率的",
  "en_def": "working well without wasting time, money, or energy",
  "sentence": "Taking the MRT is the most {{BLANK}} way to cross the city during rush hour, since it never gets stuck in traffic.",
  "cn": "尖峰時間搭捷運是穿越城市最有效率的方式，因為它永遠不會塞車。",
  "cnMarked": "尖峰時間搭捷運是穿越城市最【有效率的】方式，因為它永遠不會塞車。",
  "isHead": false,
  "level": 3,
  "family": "efficiency"
 },
 {
  "word": "efficiently",
  "answer": "efficiently",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "有效率地",
  "en_def": "in an efficient way",
  "sentence": "If you plan your homework schedule carefully, you can work more {{BLANK}} and still have time to play basketball.",
  "cn": "如果你仔細規劃做功課的時間，就能更有效率地工作，而且仍有時間打籃球。",
  "cnMarked": "如果你仔細規劃做功課的時間，就能更【有效率地】工作，而且仍有時間打籃球。",
  "isHead": false,
  "level": null,
  "family": "efficiency"
 },
 {
  "word": "inefficient",
  "answer": "inefficient",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "效率低的",
  "en_def": "wasting time, money, or energy",
  "sentence": "Heating the whole house with one old stove is {{BLANK}}, because most of the warm air escapes through the windows.",
  "cn": "用一個舊暖爐為整間房子取暖是效率低的，因為大部分的暖空氣都從窗戶跑掉了。",
  "cnMarked": "用一個舊暖爐為整間房子取暖是【效率低的】，因為大部分的暖空氣都從窗戶跑掉了。",
  "isHead": false,
  "level": null,
  "family": "efficiency"
 },
 {
  "word": "elastic",
  "answer": "elastic",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "有彈性的",
  "en_def": "able to stretch and then return to its original shape",
  "sentence": "The waistband of these pants is {{BLANK}}, so they still fit comfortably even after a big dinner.",
  "cn": "這條褲子的腰帶是有彈性的，所以即使吃了一頓大餐後仍然穿得很舒服。",
  "cnMarked": "這條褲子的腰帶是【有彈性的】，所以即使吃了一頓大餐後仍然穿得很舒服。",
  "isHead": true,
  "level": 4,
  "family": "elastic"
 },
 {
  "word": "elastic",
  "answer": "elastic",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "鬆緊帶",
  "en_def": "a type of rubber material that stretches",
  "sentence": "My mother sewed a piece of {{BLANK}} into the skirt so that it would not slip down when I run.",
  "cn": "我媽媽在裙子裡縫了一條鬆緊帶，這樣我跑步時裙子就不會滑下來。",
  "cnMarked": "我媽媽在裙子裡縫了一條【鬆緊帶】，這樣我跑步時裙子就不會滑下來。",
  "isHead": false,
  "level": 4,
  "family": "elastic"
 },
 {
  "word": "elastic band",
  "answer": "elastic band",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "橡皮筋",
  "en_def": "a thin circle of rubber used to hold things together",
  "sentence": "The teacher used an {{BLANK}} to keep the thirty test papers together before putting them in her bag.",
  "cn": "老師用一條橡皮筋把三十張考卷綑在一起，然後放進包包。",
  "cnMarked": "老師用一條【橡皮筋】把三十張考卷綑在一起，然後放進包包。",
  "isHead": false,
  "level": null,
  "family": "elastic"
 },
 {
  "word": "elasticity",
  "answer": "elasticity",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "彈性",
  "en_def": "the ability to stretch and return to the original shape",
  "sentence": "As people grow older, their skin slowly loses its {{BLANK}}, which is why wrinkles appear around the eyes.",
  "cn": "隨著年齡增長，人的皮膚會慢慢失去彈性，這就是為什麼眼睛周圍會出現皺紋。",
  "cnMarked": "隨著年齡增長，人的皮膚會慢慢失去【彈性】，這就是為什麼眼睛周圍會出現皺紋。",
  "isHead": false,
  "level": null,
  "family": "elastic"
 },
 {
  "word": "electronics",
  "answer": "electronics",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "電子學；電子產品",
  "en_def": "the science of electronic equipment; electronic devices",
  "sentence": "The {{BLANK}} store near the station sells phones, cameras, and laptops at lower prices than the department store.",
  "cn": "車站附近的電子產品商店賣的手機、相機和筆電，比百貨公司便宜。",
  "cnMarked": "車站附近的【電子產品】商店賣的手機、相機和筆電，比百貨公司便宜。",
  "isHead": true,
  "level": 4,
  "family": "electronics"
 },
 {
  "word": "electronic",
  "answer": "electronic",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "電子的",
  "en_def": "using electricity and small parts like chips to work",
  "sentence": "Students must turn off all {{BLANK}} devices, including smartwatches, before the listening test begins in ten minutes.",
  "cn": "聽力測驗十分鐘後開始，學生必須在測驗前關掉所有電子裝置，包括智慧手錶。",
  "cnMarked": "聽力測驗十分鐘後開始，學生必須在測驗前關掉所有【電子】裝置，包括智慧手錶。",
  "isHead": false,
  "level": 3,
  "family": "electronics"
 },
 {
  "word": "electricity",
  "answer": "electricity",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "電；電力",
  "en_def": "energy that gives power to lights and machines",
  "sentence": "During the typhoon, the {{BLANK}} went out for six hours, so we lit candles and played card games together.",
  "cn": "颱風期間電力中斷了六個小時，所以我們點了蠟燭一起玩撲克牌。",
  "cnMarked": "颱風期間【電力】中斷了六個小時，所以我們點了蠟燭一起玩撲克牌。",
  "isHead": false,
  "level": 3,
  "family": "electronics"
 },
 {
  "word": "electrical",
  "answer": "electrical",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "電的；與電有關的",
  "en_def": "connected with electricity",
  "sentence": "Never touch an {{BLANK}} socket with wet hands, because water makes it much easier for electricity to shock you.",
  "cn": "絕對不要用濕手觸碰電插座，因為水會讓電更容易電到你。",
  "cnMarked": "絕對不要用濕手觸碰【電】插座，因為水會讓電更容易電到你。",
  "isHead": false,
  "level": 2,
  "family": "electronics"
 },
 {
  "word": "electrician",
  "answer": "electrician",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "電工",
  "en_def": "a person whose job is to fix and connect electrical wires",
  "sentence": "The lights in our kitchen kept flashing, so my father called an {{BLANK}} to check the wires behind the wall.",
  "cn": "我們廚房的燈一直閃，所以爸爸叫了一位電工來檢查牆後的電線。",
  "cnMarked": "我們廚房的燈一直閃，所以爸爸叫了一位【電工】來檢查牆後的電線。",
  "isHead": false,
  "level": 6,
  "family": "electronics"
 },
 {
  "word": "elegant",
  "answer": "elegant",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "優雅的",
  "en_def": "attractive and graceful in style",
  "sentence": "She looked very {{BLANK}} in her long black dress at the concert, and many people turned to look at her.",
  "cn": "她在音樂會上穿著黑色長禮服看起來非常優雅，許多人都轉頭看她。",
  "cnMarked": "她在音樂會上穿著黑色長禮服看起來非常【優雅】，許多人都轉頭看她。",
  "isHead": true,
  "level": 4,
  "family": "elegant"
 },
 {
  "word": "elegance",
  "answer": "elegance",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "優雅",
  "en_def": "the quality of being graceful and attractive",
  "sentence": "The old hotel is famous for its {{BLANK}}, with high ceilings, soft music, and waiters in white gloves.",
  "cn": "這間老飯店以它的優雅聞名，有高高的天花板、輕柔的音樂和戴白手套的服務生。",
  "cnMarked": "這間老飯店以它的【優雅】聞名，有高高的天花板、輕柔的音樂和戴白手套的服務生。",
  "isHead": false,
  "level": null,
  "family": "elegant"
 },
 {
  "word": "elegantly",
  "answer": "elegantly",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "優雅地",
  "en_def": "in a graceful and attractive way",
  "sentence": "The dancer moved so {{BLANK}} across the stage that the audience forgot how difficult the steps actually were.",
  "cn": "那位舞者在舞台上動作如此優雅，觀眾都忘了那些舞步其實有多困難。",
  "cnMarked": "那位舞者在舞台上動作如此【優雅】，觀眾都忘了那些舞步其實有多困難。",
  "isHead": false,
  "level": null,
  "family": "elegant"
 },
 {
  "word": "elementary",
  "answer": "elementary",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "基礎的；初級的",
  "en_def": "basic; connected with the first stages of learning",
  "sentence": "This book teaches only {{BLANK}} Japanese, so you will need a harder one after you learn the basic greetings.",
  "cn": "這本書只教初級日語，所以學完基本問候語後，你會需要一本更難的書。",
  "cnMarked": "這本書只教【初級】日語，所以學完基本問候語後，你會需要一本更難的書。",
  "isHead": true,
  "level": 4,
  "family": "elementary"
 },
 {
  "word": "elementary school",
  "answer": "elementary school",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "小學",
  "en_def": "a school for children aged about six to twelve",
  "sentence": "My little cousin starts {{BLANK}} this September, and she is excited about carrying her new pink backpack.",
  "cn": "我的小表妹今年九月開始上小學，她對背她的新粉紅色書包感到很興奮。",
  "cnMarked": "我的小表妹今年九月開始上【小學】，她對背她的新粉紅色書包感到很興奮。",
  "isHead": false,
  "level": null,
  "family": "elementary"
 },
 {
  "word": "element",
  "answer": "element",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "元素；要素",
  "en_def": "one basic part of something; a simple chemical substance",
  "sentence": "Trust is the most important {{BLANK}} of a good friendship, because without it people cannot share their real feelings.",
  "cn": "信任是良好友誼最重要的要素，因為沒有它，人們無法分享真實的感受。",
  "cnMarked": "信任是良好友誼最重要的【要素】，因為沒有它，人們無法分享真實的感受。",
  "isHead": false,
  "level": 3,
  "family": "elementary"
 },
 {
  "word": "eliminate",
  "answer": "eliminate",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "消除；淘汰",
  "en_def": "to remove or get rid of something completely",
  "sentence": "The city hopes to {{BLANK}} plastic straws from all restaurants by next year in order to protect the ocean.",
  "cn": "這座城市希望明年前消除所有餐廳的塑膠吸管，以保護海洋。",
  "cnMarked": "這座城市希望明年前【消除】所有餐廳的塑膠吸管，以保護海洋。",
  "isHead": true,
  "level": 4,
  "family": "eliminate"
 },
 {
  "word": "be eliminated from",
  "answer": "was eliminated from",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "從…中被淘汰",
  "en_def": "to be removed from a competition after losing",
  "sentence": "Our basketball team {{BLANK}} the tournament in the second round, so we watched the final from the stands.",
  "cn": "我們的籃球隊在第二輪就被淘汰出錦標賽，所以我們只能從看台上觀看決賽。",
  "cnMarked": "我們的籃球隊在第二輪就【被淘汰出】錦標賽，所以我們只能從看台上觀看決賽。",
  "isHead": false,
  "level": null,
  "family": "eliminate"
 },
 {
  "word": "elimination",
  "answer": "elimination",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "消除；淘汰",
  "en_def": "the act of removing something completely",
  "sentence": "The {{BLANK}} of the entrance fee brought thousands of extra visitors to the museum during the summer holiday.",
  "cn": "免除入場費後，暑假期間博物館多了數千名訪客。",
  "cnMarked": "【免除】入場費後，暑假期間博物館多了數千名訪客。",
  "isHead": false,
  "level": null,
  "family": "eliminate"
 },
 {
  "word": "elsewhere",
  "answer": "elsewhere",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "在別處；到別處",
  "en_def": "in or to another place",
  "sentence": "The restaurant was full, so we decided to eat {{BLANK}} and found a nice noodle shop around the corner.",
  "cn": "那家餐廳客滿了，所以我們決定到別處吃飯，結果在轉角找到一家不錯的麵店。",
  "cnMarked": "那家餐廳客滿了，所以我們決定到【別處】吃飯，結果在轉角找到一家不錯的麵店。",
  "isHead": true,
  "level": 4,
  "family": "elsewhere"
 },
 {
  "word": "look elsewhere",
  "answer": "look elsewhere",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "另尋他處",
  "en_def": "to search in other places",
  "sentence": "If this shop does not have your size, you may have to {{BLANK}}, perhaps at the bigger store downtown.",
  "cn": "如果這家店沒有你的尺寸，你可能得另尋他處，也許去市中心那家更大的店。",
  "cnMarked": "如果這家店沒有你的尺寸，你可能得【另尋他處】，也許去市中心那家更大的店。",
  "isHead": false,
  "level": null,
  "family": "elsewhere"
 },
 {
  "word": "nowhere",
  "answer": "nowhere",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "無處；任何地方都不",
  "en_def": "not in any place",
  "sentence": "I looked for my keys everywhere in the house, but they were {{BLANK}} to be found until my brother checked the car.",
  "cn": "我在屋裡到處找鑰匙，卻到處都找不到，直到哥哥去車裡查看。",
  "cnMarked": "我在屋裡到處找鑰匙，卻【到處都】找不到，直到哥哥去車裡查看。",
  "isHead": false,
  "level": 5,
  "family": "elsewhere"
 },
 {
  "word": "embarrass",
  "answer": "embarrass",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "使尷尬",
  "en_def": "to make someone feel shy, ashamed, or uncomfortable",
  "sentence": "Please do not {{BLANK}} me by showing my baby photos to my friends when they come over this weekend.",
  "cn": "這個週末我朋友來的時候，請不要拿我的嬰兒照片給他們看來讓我尷尬。",
  "cnMarked": "這個週末我朋友來的時候，請不要拿我的嬰兒照片給他們看來【讓我尷尬】。",
  "isHead": true,
  "level": 4,
  "family": "embarrass(ment)"
 },
 {
  "word": "embarrassment",
  "answer": "embarrassment",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "尷尬",
  "en_def": "the feeling of being embarrassed",
  "sentence": "To my great {{BLANK}}, I called the new teacher 'Mom' in front of the whole class on the first day.",
  "cn": "讓我非常尷尬的是，第一天我在全班面前把新老師叫成「媽」。",
  "cnMarked": "讓我非常【尷尬】的是，第一天我在全班面前把新老師叫成「媽」。",
  "isHead": false,
  "level": 4,
  "family": "embarrass(ment)"
 },
 {
  "word": "embarrassed",
  "answer": "embarrassed",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "感到尷尬的",
  "en_def": "feeling shy, ashamed, or uncomfortable",
  "sentence": "I felt so {{BLANK}} when my phone rang loudly in the middle of the quiet library that my face turned red.",
  "cn": "當我的手機在安靜的圖書館中大聲響起時，我覺得非常尷尬，臉都紅了。",
  "cnMarked": "當我的手機在安靜的圖書館中大聲響起時，我覺得非常【尷尬】，臉都紅了。",
  "isHead": false,
  "level": null,
  "family": "embarrass(ment)"
 },
 {
  "word": "embarrassing",
  "answer": "embarrassing",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "令人尷尬的",
  "en_def": "making you feel embarrassed",
  "sentence": "It was really {{BLANK}} to forget my lines on stage, but the audience was kind and clapped anyway.",
  "cn": "在台上忘詞真的很令人尷尬，但觀眾很友善，還是給了掌聲。",
  "cnMarked": "在台上忘詞真的很【令人尷尬】，但觀眾很友善，還是給了掌聲。",
  "isHead": false,
  "level": null,
  "family": "embarrass(ment)"
 },
 {
  "word": "embassy",
  "answer": "embassy",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "大使館",
  "en_def": "the building where officials of a foreign country work",
  "sentence": "You must go to the Japanese {{BLANK}} to get a visa if you plan to stay in Japan for more than ninety days.",
  "cn": "如果你打算在日本停留超過九十天，必須去日本大使館辦簽證。",
  "cnMarked": "如果你打算在日本停留超過九十天，必須去日本【大使館】辦簽證。",
  "isHead": true,
  "level": 4,
  "family": "embassy"
 },
 {
  "word": "ambassador",
  "answer": "ambassador",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "大使",
  "en_def": "the most important official who represents a country abroad",
  "sentence": "The {{BLANK}} gave a speech at our school about the long friendship between Taiwan and her country.",
  "cn": "這位大使在我們學校演講，談到台灣和她的國家之間長久的友誼。",
  "cnMarked": "這位【大使】在我們學校演講，談到台灣和她的國家之間長久的友誼。",
  "isHead": false,
  "level": 3,
  "family": "embassy"
 },
 {
  "word": "diplomat",
  "answer": "diplomat",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "外交官",
  "en_def": "a person whose job is to represent their country in another country",
  "sentence": "My uncle works as a {{BLANK}} in Europe, so he has to speak three languages and attend many formal dinners.",
  "cn": "我叔叔在歐洲擔任外交官，所以他必須會說三種語言，還要出席許多正式晚宴。",
  "cnMarked": "我叔叔在歐洲擔任【外交官】，所以他必須會說三種語言，還要出席許多正式晚宴。",
  "isHead": false,
  "level": 4,
  "family": "embassy"
 },
 {
  "word": "emerge",
  "answer": "emerge",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "出現；浮現",
  "en_def": "to come out from somewhere; to appear",
  "sentence": "After the heavy rain stopped, the sun began to {{BLANK}} from behind the dark clouds and warmed the wet streets.",
  "cn": "大雨停後，太陽開始從烏雲後出現，溫暖了潮濕的街道。",
  "cnMarked": "大雨停後，太陽開始從烏雲後【出現】，溫暖了潮濕的街道。",
  "isHead": true,
  "level": 4,
  "family": "emerge"
 },
 {
  "word": "emerge from",
  "answer": "emerged from",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "從…出現／走出",
  "en_def": "to come out of a place or a difficult situation",
  "sentence": "The country slowly {{BLANK}} the war and began building new schools, roads, and hospitals for its people.",
  "cn": "這個國家慢慢從戰爭中走出來，開始為人民建造新的學校、道路和醫院。",
  "cnMarked": "這個國家慢慢【從】戰爭中【走出來】，開始為人民建造新的學校、道路和醫院。",
  "isHead": false,
  "level": null,
  "family": "emerge"
 },
 {
  "word": "emergence",
  "answer": "emergence",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "出現；興起",
  "en_def": "the process of appearing or becoming known",
  "sentence": "The {{BLANK}} of online shopping has changed the way people buy clothes, especially among young people in big cities.",
  "cn": "網路購物的興起改變了人們買衣服的方式，尤其是大城市的年輕人。",
  "cnMarked": "網路購物的【興起】改變了人們買衣服的方式，尤其是大城市的年輕人。",
  "isHead": false,
  "level": null,
  "family": "emerge"
 },
 {
  "word": "emergency",
  "answer": "emergency",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "緊急情況",
  "en_def": "a sudden dangerous situation that needs quick action",
  "sentence": "In an {{BLANK}}, call 119 right away and tell the operator exactly where you are and what happened.",
  "cn": "遇到緊急情況時，立刻打 119，並告訴接線員你的確切位置和發生了什麼事。",
  "cnMarked": "遇到【緊急情況】時，立刻打 119，並告訴接線員你的確切位置和發生了什麼事。",
  "isHead": false,
  "level": 3,
  "family": "emerge"
 },
 {
  "word": "emphasis",
  "answer": "emphasis",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "強調；重點",
  "en_def": "special importance given to something",
  "sentence": "Our school puts a lot of {{BLANK}} on reading, so every student must finish at least one English book a month.",
  "cn": "我們學校把很多重點放在閱讀上，所以每個學生每個月必須讀完至少一本英文書。",
  "cnMarked": "我們學校把很多【重點】放在閱讀上，所以每個學生每個月必須讀完至少一本英文書。",
  "isHead": true,
  "level": 4,
  "family": "emphasis"
 },
 {
  "word": "put emphasis on",
  "answer": "puts emphasis on",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "強調；重視",
  "en_def": "to give special importance to something",
  "sentence": "The new coach {{BLANK}} teamwork rather than individual skill, and the team started winning more games.",
  "cn": "新教練重視團隊合作而非個人技巧，球隊開始贏更多比賽。",
  "cnMarked": "新教練【重視】團隊合作而非個人技巧，球隊開始贏更多比賽。",
  "isHead": false,
  "level": null,
  "family": "emphasis"
 },
 {
  "word": "emphasize",
  "answer": "emphasized",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "強調",
  "en_def": "to give special importance to something",
  "sentence": "The doctor {{BLANK}} that I should drink more water and sleep at least eight hours every night to recover quickly.",
  "cn": "醫生強調我應該多喝水，每晚至少睡八小時才能快速康復。",
  "cnMarked": "醫生【強調】我應該多喝水，每晚至少睡八小時才能快速康復。",
  "isHead": false,
  "level": 2,
  "family": "emphasis"
 },
 {
  "word": "empire",
  "answer": "empire",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "帝國",
  "en_def": "a group of countries ruled by one ruler or government",
  "sentence": "The Roman {{BLANK}} was so large that it took weeks for a message to travel from one end to the other.",
  "cn": "羅馬帝國如此龐大，一則訊息從一端傳到另一端要花好幾週。",
  "cnMarked": "羅馬【帝國】如此龐大，一則訊息從一端傳到另一端要花好幾週。",
  "isHead": true,
  "level": 4,
  "family": "empire"
 },
 {
  "word": "emperor",
  "answer": "emperor",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "皇帝",
  "en_def": "the ruler of an empire",
  "sentence": "In ancient China, the {{BLANK}} lived in a huge palace, and ordinary people were not allowed to enter it.",
  "cn": "在古代中國，皇帝住在一座巨大的宮殿裡，普通百姓不准進入。",
  "cnMarked": "在古代中國，【皇帝】住在一座巨大的宮殿裡，普通百姓不准進入。",
  "isHead": false,
  "level": 3,
  "family": "empire"
 },
 {
  "word": "empress",
  "answer": "empress",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "女皇；皇后",
  "en_def": "a woman who rules an empire, or the wife of an emperor",
  "sentence": "The {{BLANK}} ruled the country wisely for forty years after her husband died, and people still remember her kindness.",
  "cn": "女皇在丈夫死後明智地統治國家四十年，人們至今仍記得她的仁慈。",
  "cnMarked": "【女皇】在丈夫死後明智地統治國家四十年，人們至今仍記得她的仁慈。",
  "isHead": false,
  "level": null,
  "family": "empire"
 },
 {
  "word": "imperial",
  "answer": "imperial",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "帝國的；皇家的",
  "en_def": "connected with an empire or emperor",
  "sentence": "Visitors to the {{BLANK}} palace in Beijing can see the golden throne where the emperor once sat.",
  "cn": "參觀北京皇家宮殿的遊客可以看到皇帝曾經坐過的金色王座。",
  "cnMarked": "參觀北京【皇家】宮殿的遊客可以看到皇帝曾經坐過的金色王座。",
  "isHead": false,
  "level": 6,
  "family": "empire"
 },
 {
  "word": "enclose",
  "answer": "enclose",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "附上；圍住",
  "en_def": "to put something inside a letter or package; to surround with a wall or fence",
  "sentence": "Please {{BLANK}} a photo of yourself with the application form and mail it to the office before Friday.",
  "cn": "請在申請表中附上一張你的照片，並在星期五前寄到辦公室。",
  "cnMarked": "請在申請表中【附上】一張你的照片，並在星期五前寄到辦公室。",
  "isHead": true,
  "level": 4,
  "family": "enclose"
 },
 {
  "word": "be enclosed by",
  "answer": "is enclosed by",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "被…圍住",
  "en_def": "to be surrounded by a wall, fence, etc.",
  "sentence": "The garden {{BLANK}} a tall stone wall, so the children can play safely without their parents worrying.",
  "cn": "這座花園被高高的石牆圍住，所以孩子們可以安全地玩耍，父母不必擔心。",
  "cnMarked": "這座花園【被】高高的石牆【圍住】，所以孩子們可以安全地玩耍，父母不必擔心。",
  "isHead": false,
  "level": null,
  "family": "enclose"
 },
 {
  "word": "enclosed",
  "answer": "enclosed",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "封閉的；附上的",
  "en_def": "surrounded by walls; included in an envelope",
  "sentence": "Please find the {{BLANK}} check for 500 dollars, which covers the cost of the books I ordered last week.",
  "cn": "請查收附上的五百元支票，用來支付我上週訂購的書款。",
  "cnMarked": "請查收【附上的】五百元支票，用來支付我上週訂購的書款。",
  "isHead": false,
  "level": null,
  "family": "enclose"
 },
 {
  "word": "enclosure",
  "answer": "enclosure",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "圍場；圍欄區",
  "en_def": "an area surrounded by a fence or wall",
  "sentence": "The zoo built a larger {{BLANK}} for the elephants so they have more space to walk around and cool off in the water.",
  "cn": "動物園為大象建了一個更大的圍欄區，讓它們有更多空間走動並在水裡消暑。",
  "cnMarked": "動物園為大象建了一個更大的【圍欄區】，讓它們有更多空間走動並在水裡消暑。",
  "isHead": false,
  "level": null,
  "family": "enclose"
 },
 {
  "word": "encounter",
  "answer": "encounter",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "遭遇；偶遇",
  "en_def": "to meet someone or experience something unexpectedly",
  "sentence": "Hikers who climb the mountain early in the morning sometimes {{BLANK}} wild monkeys looking for food near the trail.",
  "cn": "早上爬山的登山客有時會遇到在步道附近找食物的野生猴子。",
  "cnMarked": "早上爬山的登山客有時會【遇到】在步道附近找食物的野生猴子。",
  "isHead": true,
  "level": 4,
  "family": "encounter"
 },
 {
  "word": "encounter",
  "answer": "encounter",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "遭遇；邂逅",
  "en_def": "an unexpected meeting or experience",
  "sentence": "My first {{BLANK}} with a snake was on a camping trip, and I was too frightened to move for a full minute.",
  "cn": "我第一次與蛇的遭遇是在一次露營旅行中，我嚇得整整一分鐘動不了。",
  "cnMarked": "我第一次與蛇的【遭遇】是在一次露營旅行中，我嚇得整整一分鐘動不了。",
  "isHead": false,
  "level": 4,
  "family": "encounter"
 },
 {
  "word": "encounter difficulties",
  "answer": "encounter difficulties",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "遇到困難",
  "en_def": "to meet problems",
  "sentence": "Many students {{BLANK}} when they first write a long essay in English, but practice makes it easier.",
  "cn": "許多學生第一次用英文寫長篇文章時會遇到困難，但練習會讓它變得更容易。",
  "cnMarked": "許多學生第一次用英文寫長篇文章時會【遇到困難】，但練習會讓它變得更容易。",
  "isHead": false,
  "level": null,
  "family": "encounter"
 },
 {
  "word": "endanger",
  "answer": "endanger",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "危害；使遭危險",
  "en_def": "to put someone or something in danger",
  "sentence": "Driving after drinking alcohol can {{BLANK}} not only your own life but also the lives of other people on the road.",
  "cn": "酒後開車不僅會危害你自己的生命，也會危及路上其他人的生命。",
  "cnMarked": "酒後開車不僅會【危害】你自己的生命，也會危及路上其他人的生命。",
  "isHead": true,
  "level": 4,
  "family": "endanger"
 },
 {
  "word": "endangered",
  "answer": "endangered",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "瀕臨絕種的",
  "en_def": "in danger of disappearing from the world",
  "sentence": "The Formosan black bear is an {{BLANK}} animal, so hunting it is strictly forbidden by law in Taiwan.",
  "cn": "台灣黑熊是瀕臨絕種的動物，所以在台灣法律嚴格禁止獵捕它。",
  "cnMarked": "台灣黑熊是【瀕臨絕種的】動物，所以在台灣法律嚴格禁止獵捕它。",
  "isHead": false,
  "level": null,
  "family": "endanger"
 },
 {
  "word": "endangered species",
  "answer": "endangered species",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "瀕危物種",
  "en_def": "a type of animal or plant that may soon disappear",
  "sentence": "Pandas were once on the list of {{BLANK}}, but years of hard work by scientists helped their numbers grow.",
  "cn": "熊貓曾經被列為瀕危物種，但科學家多年的努力讓它們的數量增加了。",
  "cnMarked": "熊貓曾經被列為【瀕危物種】，但科學家多年的努力讓它們的數量增加了。",
  "isHead": false,
  "level": null,
  "family": "endanger"
 },
 {
  "word": "danger",
  "answer": "danger",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "危險",
  "en_def": "the possibility of being hurt or harmed",
  "sentence": "The sign by the river warns swimmers of the {{BLANK}} of strong currents, especially after heavy rain in the mountains.",
  "cn": "河邊的告示牌警告游泳的人注意強勁水流的危險，尤其是山區下大雨之後。",
  "cnMarked": "河邊的告示牌警告游泳的人注意強勁水流的【危險】，尤其是山區下大雨之後。",
  "isHead": false,
  "level": 2,
  "family": "endanger"
 },
 {
  "word": "dangerous",
  "answer": "dangerous",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "危險的",
  "en_def": "likely to hurt or harm you",
  "sentence": "It is {{BLANK}} to ride a scooter without a helmet, even if you are only going to the convenience store nearby.",
  "cn": "不戴安全帽騎機車是很危險的，即使你只是要去附近的便利商店。",
  "cnMarked": "不戴安全帽騎機車是很【危險的】，即使你只是要去附近的便利商店。",
  "isHead": false,
  "level": 1,
  "family": "endanger"
 },
 {
  "word": "endure",
  "answer": "endure",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "忍受；忍耐",
  "en_def": "to suffer something painful or difficult for a long time",
  "sentence": "The runners had to {{BLANK}} strong winds and cold rain for over four hours before they finally reached the finish line.",
  "cn": "跑者們必須忍受強風和冷雨超過四個小時，才終於抵達終點線。",
  "cnMarked": "跑者們必須【忍受】強風和冷雨超過四個小時，才終於抵達終點線。",
  "isHead": true,
  "level": 4,
  "family": "endure"
 },
 {
  "word": "endurance",
  "answer": "endurance",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "耐力",
  "en_def": "the ability to continue doing something difficult for a long time",
  "sentence": "Marathon running is a test of {{BLANK}} more than speed, so most runners train slowly for many months.",
  "cn": "跑馬拉松考驗的是耐力而非速度，所以大多數跑者會慢慢訓練好幾個月。",
  "cnMarked": "跑馬拉松考驗的是【耐力】而非速度，所以大多數跑者會慢慢訓練好幾個月。",
  "isHead": false,
  "level": 6,
  "family": "endure"
 },
 {
  "word": "enduring",
  "answer": "enduring",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "持久的",
  "en_def": "lasting for a long time",
  "sentence": "The two friends have an {{BLANK}} friendship that began in kindergarten and is still strong forty years later.",
  "cn": "這兩位朋友有一段持久的友誼，從幼兒園開始，四十年後依然深厚。",
  "cnMarked": "這兩位朋友有一段【持久的】友誼，從幼兒園開始，四十年後依然深厚。",
  "isHead": false,
  "level": null,
  "family": "endure"
 },
 {
  "word": "enforce",
  "answer": "enforce",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "執行；實施",
  "en_def": "to make people obey a law or rule",
  "sentence": "The police will strictly {{BLANK}} the new speed limit near schools, and drivers who break it will pay a heavy fine.",
  "cn": "警方將嚴格執行學校附近的新速限，違規的駕駛將付高額罰款。",
  "cnMarked": "警方將嚴格【執行】學校附近的新速限，違規的駕駛將付高額罰款。",
  "isHead": true,
  "level": 4,
  "family": "enforce(ment)"
 },
 {
  "word": "enforcement",
  "answer": "enforcement",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "執行；實施",
  "en_def": "the act of making people obey a law or rule",
  "sentence": "Strict {{BLANK}} of the no-smoking rule has made the park much cleaner and more pleasant for families with children.",
  "cn": "禁菸規定的嚴格執行讓公園變得更乾淨，對有孩子的家庭也更舒適。",
  "cnMarked": "禁菸規定的嚴格【執行】讓公園變得更乾淨，對有孩子的家庭也更舒適。",
  "isHead": false,
  "level": 4,
  "family": "enforce(ment)"
 },
 {
  "word": "law enforcement",
  "answer": "law enforcement",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "執法",
  "en_def": "the activity of making sure people obey the law; the police",
  "sentence": "Officers in {{BLANK}} often work at night and on holidays to keep the city safe while everyone else sleeps.",
  "cn": "執法人員經常在夜間和假日工作，在大家睡覺時保護城市安全。",
  "cnMarked": "【執法】人員經常在夜間和假日工作，在大家睡覺時保護城市安全。",
  "isHead": false,
  "level": null,
  "family": "enforce(ment)"
 },
 {
  "word": "force",
  "answer": "force",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "力量；武力",
  "en_def": "physical power or strength",
  "sentence": "The wind was so strong that the {{BLANK}} of it pushed the small boat all the way back to the shore.",
  "cn": "風太強了，風的力量把小船一路推回岸邊。",
  "cnMarked": "風太強了，風的【力量】把小船一路推回岸邊。",
  "isHead": false,
  "level": 2,
  "family": "enforce(ment)"
 },
 {
  "word": "force",
  "answer": "forced",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "強迫；迫使",
  "en_def": "to make someone do something they do not want to do",
  "sentence": "Heavy snow {{BLANK}} the airport to close for two days, and thousands of travelers slept on the floor.",
  "cn": "大雪迫使機場關閉兩天，數千名旅客睡在地板上。",
  "cnMarked": "大雪【迫使】機場關閉兩天，數千名旅客睡在地板上。",
  "isHead": false,
  "level": 2,
  "family": "enforce(ment)"
 },
 {
  "word": "engineering",
  "answer": "engineering",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "工程；工程學",
  "en_def": "the work of designing and building machines, roads, bridges, etc.",
  "sentence": "My brother studies {{BLANK}} at university because he has loved building model bridges since he was a child.",
  "cn": "我哥哥在大學讀工程，因為他從小就喜歡做橋的模型。",
  "cnMarked": "我哥哥在大學讀【工程】，因為他從小就喜歡做橋的模型。",
  "isHead": true,
  "level": 4,
  "family": "engineering"
 },
 {
  "word": "engineer",
  "answer": "engineer",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "工程師",
  "en_def": "a person whose job is to design or build machines, roads, bridges, etc.",
  "sentence": "The {{BLANK}} checked the old bridge carefully after the earthquake and said it was still safe for cars to cross.",
  "cn": "地震後，工程師仔細檢查了舊橋，說汽車通行仍然安全。",
  "cnMarked": "地震後，【工程師】仔細檢查了舊橋，說汽車通行仍然安全。",
  "isHead": false,
  "level": 1,
  "family": "engineering"
 },
 {
  "word": "engine",
  "answer": "engine",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "引擎",
  "en_def": "the part of a car or machine that makes it move",
  "sentence": "The car {{BLANK}} made a strange noise on the highway, so Dad stopped at the next gas station to check it.",
  "cn": "車子的引擎在高速公路上發出奇怪的聲音，所以爸爸在下一個加油站停下來檢查。",
  "cnMarked": "車子的【引擎】在高速公路上發出奇怪的聲音，所以爸爸在下一個加油站停下來檢查。",
  "isHead": false,
  "level": 2,
  "family": "engineering"
 },
 {
  "word": "software engineer",
  "answer": "software engineer",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "軟體工程師",
  "en_def": "a person who designs computer programs",
  "sentence": "After graduation, she worked as a {{BLANK}} at a game company and helped design a popular mobile game.",
  "cn": "畢業後，她在一家遊戲公司擔任軟體工程師，協助設計了一款受歡迎的手機遊戲。",
  "cnMarked": "畢業後，她在一家遊戲公司擔任【軟體工程師】，協助設計了一款受歡迎的手機遊戲。",
  "isHead": false,
  "level": null,
  "family": "engineering"
 }
];
const MCQS = [
 {
  "q": "Tom is not joking about becoming a doctor this time. He has been studying every night with an ______ look on his face, and his grades are getting better.",
  "options": [
   "earnest",
   "elastic",
   "elementary",
   "elegant"
  ],
  "answer": 0,
  "vocabIndex": 0
 },
 {
  "q": "The sound comes from only one side now. My left ______ stopped working on the train this morning, so I could only hear the music in one ear.",
  "options": [
   "engine",
   "earphone",
   "embassy",
   "element"
  ],
  "answer": 1,
  "vocabIndex": 3
 },
 {
  "q": "The news says fewer people have jobs this year and prices keep going up. Many families are worried about these ______ problems and are spending less money.",
  "options": [
   "elegant",
   "enduring",
   "electrical",
   "economic"
  ],
  "answer": 3,
  "vocabIndex": 6
 },
 {
  "q": "This small car uses very little gas and is cheap to repair. It is a much more ______ choice for a student than the big sports car.",
  "options": [
   "elementary",
   "embarrassing",
   "economical",
   "electronic"
  ],
  "answer": 2,
  "vocabIndex": 7
 },
 {
  "q": "Lisa wants to understand why prices rise and how countries become rich. She plans to study ______ at a university after she finishes high school next year.",
  "options": [
   "elegance",
   "electronics",
   "engineering",
   "economics"
  ],
  "answer": 3,
  "vocabIndex": 8
 },
 {
  "q": "Dr. Wang studies how money moves around the world and writes reports about it. As a famous ______, he is often invited to talk about prices on TV.",
  "options": [
   "electrician",
   "emperor",
   "economist",
   "engineer"
  ],
  "answer": 2,
  "vocabIndex": 9
 },
 {
  "q": "More tourists visited Taiwan this year, and factories sold many products abroad. Because of this, the country's ______ grew much faster than most experts had expected last spring.",
  "options": [
   "efficiency",
   "economy",
   "empire",
   "embassy"
  ],
  "answer": 1,
  "vocabIndex": 10
 },
 {
  "q": "The new machine can pack two hundred boxes an hour, while the old one did only fifty. The factory manager is very pleased with its ______ and plans to buy another one.",
  "options": [
   "efficiency",
   "endurance",
   "elegance",
   "emergence"
  ],
  "answer": 0,
  "vocabIndex": 13
 },
 {
  "q": "These sports pants are made of a special material. They stretch when you bend your knees and then return to their shape, because the cloth is very ______.",
  "options": [
   "earnest",
   "elementary",
   "elegant",
   "elastic"
  ],
  "answer": 3,
  "vocabIndex": 17
 },
 {
  "q": "Jason loves taking apart old radios and phones to see how they work inside. He wants to study ______ at a technical school and learn how the small parts inside these devices work.",
  "options": [
   "elegance",
   "economics",
   "electronics",
   "enforcement"
  ],
  "answer": 2,
  "vocabIndex": 21
 },
 {
  "q": "Grandma wore a long silk dress and pearl earrings to my sister's wedding. Everyone said she looked very ______, like a queen from a beautiful old movie.",
  "options": [
   "elegant",
   "embarrassed",
   "elastic",
   "economical"
  ],
  "answer": 0,
  "vocabIndex": 26
 },
 {
  "q": "My little brother is only seven years old and has just started reading. He goes to an ______ school near our home and comes back at four every day.",
  "options": [
   "electronic",
   "enduring",
   "imperial",
   "elementary"
  ],
  "answer": 3,
  "vocabIndex": 29
 },
 {
  "q": "There are too many mistakes in your essay, such as wrong spelling and missing words. Please read it again carefully and ______ all the errors before you hand it in.",
  "options": [
   "enclose",
   "eliminate",
   "endure",
   "endanger"
  ],
  "answer": 1,
  "vocabIndex": 32
 },
 {
  "q": "This bookstore does not have the novel I want, and the clerk says it is sold out. I guess I will have to look ______, maybe at the big store downtown.",
  "options": [
   "efficiently",
   "nowhere",
   "elsewhere",
   "elegantly"
  ],
  "answer": 2,
  "vocabIndex": 35
 },
 {
  "q": "Mom, please don't show my friends the video of me singing in the bathtub when I was three. It will really ______ me in front of everyone.",
  "options": [
   "enforce",
   "embarrass",
   "emerge",
   "endanger"
  ],
  "answer": 1,
  "vocabIndex": 38
 },
 {
  "q": "Kevin is going to study in France for a year and needs a student visa. He has to bring his passport and photos to the French ______ next Monday.",
  "options": [
   "empire",
   "engine",
   "embassy",
   "enclosure"
  ],
  "answer": 2,
  "vocabIndex": 42
 },
 {
  "q": "It rained hard all morning, and the sky was dark and gray. Around noon, the sun finally began to ______ from behind the clouds, and the children ran outside to play.",
  "options": [
   "emerge",
   "eliminate",
   "endure",
   "enclose"
  ],
  "answer": 0,
  "vocabIndex": 45
 },
 {
  "q": "Our English teacher believes that speaking is more important than grammar rules. She puts great ______ on conversation, so we talk in pairs for half of every class.",
  "options": [
   "endurance",
   "elimination",
   "emergency",
   "emphasis"
  ],
  "answer": 3,
  "vocabIndex": 49
 },
 {
  "q": "Two thousand years ago, Rome ruled many lands around the Mediterranean Sea. This great ______ had one leader, one army, and roads that connected all its cities.",
  "options": [
   "empire",
   "enclosure",
   "economy",
   "embassy"
  ],
  "answer": 0,
  "vocabIndex": 52
 },
 {
  "q": "I am sending you the application form for the summer camp today. Please fill it out, ______ a recent photo of yourself, and mail everything back before May 10.",
  "options": [
   "encounter",
   "enclose",
   "endure",
   "eliminate"
  ],
  "answer": 1,
  "vocabIndex": 56
 },
 {
  "q": "Be careful if you hike alone in the mountains at dawn. You may ______ wild animals such as monkeys or snakes, so stay on the main trail and make some noise.",
  "options": [
   "enclose",
   "embarrass",
   "enforce",
   "encounter"
  ],
  "answer": 3,
  "vocabIndex": 60
 },
 {
  "q": "Many drivers look at their phones while they are driving. This bad habit can ______ the lives of other people on the road, not just their own.",
  "options": [
   "economize",
   "endure",
   "endanger",
   "emerge"
  ],
  "answer": 2,
  "vocabIndex": 63
 },
 {
  "q": "The soldiers walked for three days through snow and freezing wind without much food. They had to ______ great pain, but nobody gave up or turned back.",
  "options": [
   "emphasize",
   "endure",
   "enforce",
   "enclose"
  ],
  "answer": 1,
  "vocabIndex": 68
 },
 {
  "q": "The school has a new rule that students cannot use phones in class. Teachers will ______ it strictly, and anyone who breaks it will lose the phone for a week.",
  "options": [
   "enforce",
   "endanger",
   "emerge",
   "encounter"
  ],
  "answer": 0,
  "vocabIndex": 71
 },
 {
  "q": "Peter has always enjoyed building model bridges and fixing broken machines at home. It is no surprise that he chose to study ______ at a university this fall.",
  "options": [
   "emphasis",
   "electricity",
   "engineering",
   "economics"
  ],
  "answer": 2,
  "vocabIndex": 76
 },
 {
  "q": "Taking the MRT is faster than driving during rush hour, and you never have to look for parking. It is the most ______ way to get to work in Taipei.",
  "options": [
   "enduring",
   "efficient",
   "elastic",
   "embarrassing"
  ],
  "answer": 1,
  "vocabIndex": 14
 },
 {
  "q": "I waved and shouted hello to a man I thought was my uncle at the station. When he turned around, it was a stranger, and I felt very ______.",
  "options": [
   "elegant",
   "endangered",
   "economical",
   "embarrassed"
  ],
  "answer": 3,
  "vocabIndex": 40
 },
 {
  "q": "Grandpa suddenly fell down in the kitchen and could not stand up. In an ______ like this, call 119 right away and stay calm until the ambulance arrives.",
  "options": [
   "emergency",
   "enforcement",
   "elegance",
   "economy"
  ],
  "answer": 0,
  "vocabIndex": 48
 },
 {
  "q": "The new bridge across the river is 2 kilometers long and took five years to build. The ______ who designed it studied for many years to make it strong and safe.",
  "options": [
   "ambassador",
   "engineer",
   "electrician",
   "economist"
  ],
  "answer": 1,
  "vocabIndex": 77
 },
 {
  "q": "Only about 500 Formosan black bears are left in the mountains of our island. They are an ______ animal, so hunting them is strictly against the law in Taiwan.",
  "options": [
   "endangered",
   "economic",
   "electrical",
   "elementary"
  ],
  "answer": 0,
  "vocabIndex": 64
 }
];
const LOOKUP = {};
VOCAB.forEach(v => { const key = v.word.toLowerCase(); const sense = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def };
  if (LOOKUP[key]) LOOKUP[key].combined.push(sense); else LOOKUP[key] = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def, combined: [sense] }; });
const EXTRA_GLOSSES = {};