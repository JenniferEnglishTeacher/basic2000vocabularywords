// 學測6000字 Level 6 Group 33 (setback-smuggle) — word-family edition
const QUIZ_CONFIG = {
  groupName: "6000字 L6 Group 33 - setback – smuggle (word family)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};
const VOCAB = [
 {
  "word": "setback",
  "answer": "setback",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "挫折；阻礙",
  "en_def": "a problem that stops you from making progress for a while",
  "sentence": "Losing the first game was a big {{BLANK}} for our team, but the coach told us to learn from it and keep training hard.",
  "cn": "輸掉第一場比賽對我們球隊是個很大的挫折，但教練要我們從中學習並繼續努力訓練。",
  "cnMarked": "輸掉第一場比賽對我們球隊是個很大的【挫折】，但教練要我們從中學習並繼續努力訓練。",
  "isHead": true,
  "level": 6,
  "family": "setback"
 },
 {
  "word": "set back",
  "answer": "set back",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "使延後；耗費",
  "en_def": "to delay something; to cost someone a lot of money",
  "sentence": "The heavy rain {{BLANK}} the building work by two weeks, so the new library will not open until the end of March.",
  "cn": "大雨讓建築工程延後了兩週，所以新圖書館要到三月底才會開放。",
  "cnMarked": "大雨讓建築工程【延後】了兩週，所以新圖書館要到三月底才會開放。",
  "isHead": false,
  "level": null,
  "family": "setback"
 },
 {
  "word": "suffer a setback",
  "answer": "suffered a setback",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "遭遇挫折",
  "en_def": "to have a problem that slows your progress",
  "sentence": "The young singer {{BLANK}} when she lost her voice a week before the big concert, but she recovered in time.",
  "cn": "這位年輕歌手在大型演唱會前一週失聲，遭遇了挫折，但她及時康復了。",
  "cnMarked": "這位年輕歌手在大型演唱會前一週失聲，【遭遇了挫折】，但她及時康復了。",
  "isHead": false,
  "level": null,
  "family": "setback"
 },
 {
  "word": "shabby",
  "answer": "shabby",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "破舊的；寒酸的",
  "en_def": "old and in bad condition; poorly dressed",
  "sentence": "The old man wore a {{BLANK}} coat with holes in the sleeves, but he always gave a warm smile to everyone he met.",
  "cn": "那位老人穿著一件袖子有破洞的破舊外套，但他總是對遇到的每個人露出溫暖的微笑。",
  "cnMarked": "那位老人穿著一件袖子有破洞的【破舊】外套，但他總是對遇到的每個人露出溫暖的微笑。",
  "isHead": true,
  "level": 6,
  "family": "shabby"
 },
 {
  "word": "shabbily",
  "answer": "shabbily",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "寒酸地；不公平地",
  "en_def": "in a poor or unfair way",
  "sentence": "The guests were {{BLANK}} treated at the hotel: their room was dirty, and nobody answered when they called the front desk.",
  "cn": "客人在飯店受到糟糕的對待：房間很髒，打電話到櫃台也沒人接。",
  "cnMarked": "客人在飯店受到【糟糕的】對待：房間很髒，打電話到櫃台也沒人接。",
  "isHead": false,
  "level": null,
  "family": "shabby"
 },
 {
  "word": "shabbiness",
  "answer": "shabbiness",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "破舊；寒酸",
  "en_def": "the state of being old and in bad condition",
  "sentence": "Despite the {{BLANK}} of the little restaurant, with its broken chairs and old walls, the noodles there are the best in town.",
  "cn": "儘管這家小餐館很破舊，椅子壞了、牆也老舊，那裡的麵卻是鎮上最好吃的。",
  "cnMarked": "儘管這家小餐館很【破舊】，椅子壞了、牆也老舊，那裡的麵卻是鎮上最好吃的。",
  "isHead": false,
  "level": null,
  "family": "shabby"
 },
 {
  "word": "sharpen",
  "answer": "sharpen",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "削尖；磨利",
  "en_def": "to make something sharp or sharper",
  "sentence": "Before the cooking class, the chef showed us how to {{BLANK}} a knife safely so that it cuts vegetables cleanly.",
  "cn": "烹飪課開始前，主廚示範如何安全地磨利刀子，好讓它能乾淨俐落地切蔬菜。",
  "cnMarked": "烹飪課開始前，主廚示範如何安全地【磨利】刀子，好讓它能乾淨俐落地切蔬菜。",
  "isHead": true,
  "level": 6,
  "family": "sharpen"
 },
 {
  "word": "sharp",
  "answer": "sharp",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "鋒利的；尖的",
  "en_def": "having a thin edge or point that can cut",
  "sentence": "Be careful with that knife; it is very {{BLANK}}, and you could cut your finger badly if you hold it the wrong way.",
  "cn": "小心那把刀；它非常鋒利，如果拿的方式不對，你可能會把手指割得很深。",
  "cnMarked": "小心那把刀；它非常【鋒利】，如果拿的方式不對，你可能會把手指割得很深。",
  "isHead": false,
  "level": 1,
  "family": "sharpen"
 },
 {
  "word": "sharpener",
  "answer": "sharpener",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "削鉛筆機；磨刀器",
  "en_def": "a tool for making pencils or knives sharp",
  "sentence": "I left my pencil {{BLANK}} at home, so I had to borrow one from my classmate before the drawing test started.",
  "cn": "我把削鉛筆機忘在家裡，所以繪畫測驗開始前得向同學借一個。",
  "cnMarked": "我把【削鉛筆機】忘在家裡，所以繪畫測驗開始前得向同學借一個。",
  "isHead": false,
  "level": null,
  "family": "sharpen"
 },
 {
  "word": "sharpen one's skills",
  "answer": "sharpen their skills",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "磨練技能",
  "en_def": "to improve your ability to do something",
  "sentence": "Many students join the debate club to {{BLANK}} in speaking English in front of other people.",
  "cn": "許多學生加入辯論社，以磨練在眾人面前說英語的技巧。",
  "cnMarked": "許多學生加入辯論社，以【磨練】在眾人面前說英語的【技巧】。",
  "isHead": false,
  "level": null,
  "family": "sharpen"
 },
 {
  "word": "shaver",
  "answer": "shaver",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "電動刮鬍刀",
  "en_def": "an electric tool for removing hair from the face or body",
  "sentence": "My father uses an electric {{BLANK}} every morning because it is faster and safer than a razor with a blade.",
  "cn": "我爸爸每天早上都用電動刮鬍刀，因為它比有刀片的剃刀更快也更安全。",
  "cnMarked": "我爸爸每天早上都用電動【刮鬍刀】，因為它比有刀片的剃刀更快也更安全。",
  "isHead": true,
  "level": 6,
  "family": "shaver"
 },
 {
  "word": "shave",
  "answer": "shave",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "刮（鬍子）；剃",
  "en_def": "to cut hair off your face or body with a razor",
  "sentence": "My older brother has to {{BLANK}} every day now, and he complains that it takes him ten extra minutes in the morning.",
  "cn": "我哥哥現在每天都得刮鬍子，他抱怨這讓他早上多花十分鐘。",
  "cnMarked": "我哥哥現在每天都得【刮鬍子】，他抱怨這讓他早上多花十分鐘。",
  "isHead": false,
  "level": 4,
  "family": "shaver"
 },
 {
  "word": "shave",
  "answer": "shave",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "刮鬍子",
  "en_def": "the act of shaving",
  "sentence": "After a long week of camping without a mirror, Dad was happy to have a hot shower and a clean {{BLANK}}.",
  "cn": "在沒有鏡子的露營一週後，爸爸很高興能洗個熱水澡，好好刮個鬍子。",
  "cnMarked": "在沒有鏡子的露營一週後，爸爸很高興能洗個熱水澡，好好【刮個鬍子】。",
  "isHead": false,
  "level": 4,
  "family": "shaver"
 },
 {
  "word": "shortcoming",
  "answer": "shortcoming",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "缺點；短處",
  "en_def": "a fault or weakness in someone or something",
  "sentence": "The new phone has one big {{BLANK}}: its battery only lasts about five hours if you watch videos on it.",
  "cn": "這款新手機有一個很大的缺點：如果用它看影片，電池只能撐大約五個小時。",
  "cnMarked": "這款新手機有一個很大的【缺點】：如果用它看影片，電池只能撐大約五個小時。",
  "isHead": true,
  "level": 6,
  "family": "shortcoming"
 },
 {
  "word": "shortage",
  "answer": "shortage",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "短缺；不足",
  "en_def": "a situation in which there is not enough of something",
  "sentence": "There was a {{BLANK}} of eggs across the island last spring, so many breakfast shops raised their prices or stopped selling egg sandwiches.",
  "cn": "去年春天全島雞蛋短缺，所以許多早餐店漲價或停賣蛋三明治。",
  "cnMarked": "去年春天全島雞蛋【短缺】，所以許多早餐店漲價或停賣蛋三明治。",
  "isHead": false,
  "level": 5,
  "family": "shortcoming"
 },
 {
  "word": "shorten",
  "answer": "shorten",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "縮短",
  "en_def": "to make something shorter",
  "sentence": "The teacher decided to {{BLANK}} the test from fifty questions to thirty because the class had lost two days to the typhoon.",
  "cn": "因為颱風讓班上少上了兩天課，老師決定把考試從五十題縮短為三十題。",
  "cnMarked": "因為颱風讓班上少上了兩天課，老師決定把考試從五十題【縮短】為三十題。",
  "isHead": false,
  "level": 3,
  "family": "shortcoming"
 },
 {
  "word": "fall short of",
  "answer": "fell short of",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "未達到；不足",
  "en_def": "to fail to reach a goal or standard",
  "sentence": "Our class {{BLANK}} the goal of collecting one thousand bottles, but we still recycled more than any other class.",
  "cn": "我們班沒有達到收集一千個瓶子的目標，但我們回收的數量仍然比其他任何班級多。",
  "cnMarked": "我們班【沒有達到】收集一千個瓶子的目標，但我們回收的數量仍然比其他任何班級多。",
  "isHead": false,
  "level": null,
  "family": "shortcoming"
 },
 {
  "word": "shortsighted",
  "answer": "shortsighted",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "近視的",
  "en_def": "not able to see things clearly when they are far away",
  "sentence": "My sister is {{BLANK}} and cannot read the board from the back of the classroom, so she always sits in the front row.",
  "cn": "我妹妹近視，從教室後面看不清黑板，所以她總是坐在第一排。",
  "cnMarked": "我妹妹【近視】，從教室後面看不清黑板，所以她總是坐在第一排。",
  "isHead": true,
  "level": 6,
  "family": "shortsighted"
 },
 {
  "word": "shortsighted",
  "answer": "shortsighted",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "短視的；目光短淺的",
  "en_def": "not thinking about what will happen in the future",
  "sentence": "Cutting down the whole forest to sell the wood is a {{BLANK}} plan, because the village will lose its clean water and tourists.",
  "cn": "砍掉整片森林賣木材是個短視的計畫，因為村子會失去乾淨的水源和觀光客。",
  "cnMarked": "砍掉整片森林賣木材是個【短視的】計畫，因為村子會失去乾淨的水源和觀光客。",
  "isHead": false,
  "level": 6,
  "family": "shortsighted"
 },
 {
  "word": "shortsightedness",
  "answer": "shortsightedness",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "短視；目光短淺",
  "en_def": "the failure to think about the future",
  "sentence": "The company's {{BLANK}} cost it dearly: it saved money by not training workers, and then lost its best staff to other firms.",
  "cn": "這家公司的短視讓它付出慘痛代價：它省下訓練員工的錢，之後卻把最好的員工輸給了其他公司。",
  "cnMarked": "這家公司的【短視】讓它付出慘痛代價：它省下訓練員工的錢，之後卻把最好的員工輸給了其他公司。",
  "isHead": false,
  "level": null,
  "family": "shortsighted"
 },
 {
  "word": "shred",
  "answer": "shred",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "撕碎；切碎",
  "en_def": "to cut or tear something into very small pieces",
  "sentence": "Please {{BLANK}} these old bank letters before you throw them away so that nobody can read your account number.",
  "cn": "請在丟掉這些舊的銀行信件前先把它們撕碎，這樣就沒有人能看到你的帳號。",
  "cnMarked": "請在丟掉這些舊的銀行信件前先把它們【撕碎】，這樣就沒有人能看到你的帳號。",
  "isHead": true,
  "level": 6,
  "family": "shred"
 },
 {
  "word": "shred",
  "answer": "shreds",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "碎片；細條",
  "en_def": "a small, thin piece torn or cut from something",
  "sentence": "The strong wind tore the kite into {{BLANK}}, and the children sadly picked up the pieces of paper from the grass.",
  "cn": "強風把風箏撕成碎片，孩子們難過地從草地上撿起紙片。",
  "cnMarked": "強風把風箏撕成【碎片】，孩子們難過地從草地上撿起紙片。",
  "isHead": false,
  "level": 6,
  "family": "shred"
 },
 {
  "word": "shredder",
  "answer": "shredder",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "碎紙機",
  "en_def": "a machine that cuts paper into thin strips",
  "sentence": "Our office bought a paper {{BLANK}} last month, and now all documents with customer names are destroyed before being recycled.",
  "cn": "我們辦公室上個月買了一台碎紙機，現在所有有客戶姓名的文件在回收前都會先銷毀。",
  "cnMarked": "我們辦公室上個月買了一台【碎紙機】，現在所有有客戶姓名的文件在回收前都會先銷毀。",
  "isHead": false,
  "level": null,
  "family": "shred"
 },
 {
  "word": "not a shred of",
  "answer": "not a shred of",
  "nblanks": 4,
  "pos": "phr.",
  "cn_def": "一點…也沒有",
  "en_def": "not even a very small amount of something",
  "sentence": "The police found {{BLANK}} evidence against the man, so they had to let him go home the same evening.",
  "cn": "警方完全沒有找到對那名男子不利的證據，所以當天晚上就必須放他回家。",
  "cnMarked": "警方【完全沒有】找到對那名男子不利的證據，所以當天晚上就必須放他回家。",
  "isHead": false,
  "level": null,
  "family": "shred"
 },
 {
  "word": "shriek",
  "answer": "shrieked",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "尖叫",
  "en_def": "to give a loud, high cry because of fear, excitement, or pain",
  "sentence": "The girls {{BLANK}} with excitement when their favorite singer walked onto the stage and waved to the crowd.",
  "cn": "當她們最喜歡的歌手走上舞台向群眾揮手時，女孩們興奮地尖叫。",
  "cnMarked": "當她們最喜歡的歌手走上舞台向群眾揮手時，女孩們興奮地【尖叫】。",
  "isHead": true,
  "level": 6,
  "family": "shriek"
 },
 {
  "word": "shriek",
  "answer": "shriek",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "尖叫聲",
  "en_def": "a loud, high cry",
  "sentence": "A loud {{BLANK}} came from the kitchen, and we ran in to find my mother standing on a chair, pointing at a tiny mouse.",
  "cn": "廚房傳來一聲響亮的尖叫，我們跑進去，發現媽媽站在椅子上指著一隻小老鼠。",
  "cnMarked": "廚房傳來一聲響亮的【尖叫】，我們跑進去，發現媽媽站在椅子上指著一隻小老鼠。",
  "isHead": false,
  "level": 6,
  "family": "shriek"
 },
 {
  "word": "shriek with laughter",
  "answer": "shrieked with laughter",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "尖聲大笑",
  "en_def": "to laugh very loudly",
  "sentence": "The children {{BLANK}} as the clown fell over his own giant shoes for the third time during the show.",
  "cn": "表演中小丑第三次被自己的大鞋子絆倒時，孩子們尖聲大笑。",
  "cnMarked": "表演中小丑第三次被自己的大鞋子絆倒時，孩子們【尖聲大笑】。",
  "isHead": false,
  "level": null,
  "family": "shriek"
 },
 {
  "word": "shrub",
  "answer": "shrubs",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "灌木",
  "en_def": "a plant like a small tree with many woody stems",
  "sentence": "My grandmother planted a row of small {{BLANK}} along the fence, and in spring they are covered with tiny pink flowers.",
  "cn": "我奶奶沿著籬笆種了一排小灌木，春天時它們開滿了小小的粉紅色花朵。",
  "cnMarked": "我奶奶沿著籬笆種了一排小【灌木】，春天時它們開滿了小小的粉紅色花朵。",
  "isHead": true,
  "level": 6,
  "family": "shrub"
 },
 {
  "word": "shrubbery",
  "answer": "shrubbery",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "灌木叢",
  "en_def": "an area where many shrubs grow close together",
  "sentence": "The cat hid in the thick {{BLANK}} beside the house and refused to come out until the fireworks had finished.",
  "cn": "貓躲在屋子旁邊茂密的灌木叢裡，直到煙火結束才肯出來。",
  "cnMarked": "貓躲在屋子旁邊茂密的【灌木叢】裡，直到煙火結束才肯出來。",
  "isHead": false,
  "level": null,
  "family": "shrub"
 },
 {
  "word": "evergreen shrub",
  "answer": "evergreen shrub",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "常綠灌木",
  "en_def": "a shrub that keeps its green leaves all year",
  "sentence": "The garden center sells an {{BLANK}} that stays green all year, so your yard will not look empty in winter.",
  "cn": "園藝中心賣一種全年常綠的常綠灌木，這樣你的院子在冬天就不會看起來光禿禿的。",
  "cnMarked": "園藝中心賣一種全年常綠的【常綠灌木】，這樣你的院子在冬天就不會看起來光禿禿的。",
  "isHead": false,
  "level": null,
  "family": "shrub"
 },
 {
  "word": "shuffle",
  "answer": "shuffled",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "拖著腳走",
  "en_def": "to walk slowly without lifting your feet off the ground",
  "sentence": "The tired old man {{BLANK}} slowly across the room in his slippers, holding the wall for support as he went.",
  "cn": "疲憊的老人穿著拖鞋慢慢地拖著腳走過房間，一邊扶著牆支撐自己。",
  "cnMarked": "疲憊的老人穿著拖鞋慢慢地【拖著腳】走過房間，一邊扶著牆支撐自己。",
  "isHead": true,
  "level": 6,
  "family": "shuffle"
 },
 {
  "word": "shuffle",
  "answer": "shuffle",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "洗牌",
  "en_def": "to mix playing cards before a game",
  "sentence": "Let me {{BLANK}} the cards properly before we start the game, because you got all the best cards in the last round.",
  "cn": "開始遊戲前讓我好好洗牌，因為上一輪最好的牌全都在你手上。",
  "cnMarked": "開始遊戲前讓我好好【洗牌】，因為上一輪最好的牌全都在你手上。",
  "isHead": false,
  "level": 6,
  "family": "shuffle"
 },
 {
  "word": "shuffle",
  "answer": "shuffle",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "隨機播放",
  "en_def": "to play songs in a random order",
  "sentence": "I like to {{BLANK}} my playlist on long bus rides so that I never know which song is coming next.",
  "cn": "坐長途巴士時我喜歡隨機播放我的播放清單，這樣我永遠不知道下一首是什麼歌。",
  "cnMarked": "坐長途巴士時我喜歡【隨機播放】我的播放清單，這樣我永遠不知道下一首是什麼歌。",
  "isHead": false,
  "level": 6,
  "family": "shuffle"
 },
 {
  "word": "shuffle",
  "answer": "shuffle",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "拖著腳走；洗牌",
  "en_def": "a slow walk without lifting the feet; the act of mixing cards",
  "sentence": "With a tired {{BLANK}} of his feet, the boy walked to the front of the class to read his homework aloud.",
  "cn": "男孩疲憊地拖著腳步走到教室前面，大聲朗讀他的作業。",
  "cnMarked": "男孩疲憊地【拖著腳步】走到教室前面，大聲朗讀他的作業。",
  "isHead": false,
  "level": 6,
  "family": "shuffle"
 },
 {
  "word": "shutter",
  "answer": "shutter",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "百葉窗；鐵捲門",
  "en_def": "a wooden or metal cover that closes over a window or shop front",
  "sentence": "Before the typhoon arrived, the shop owners closed every {{BLANK}} and tied down the signs outside their doors.",
  "cn": "颱風來臨前，店家關上每一扇鐵捲門，並把門外的招牌綁好。",
  "cnMarked": "颱風來臨前，店家關上每一扇【鐵捲門】，並把門外的招牌綁好。",
  "isHead": true,
  "level": 6,
  "family": "shutter"
 },
 {
  "word": "shutter",
  "answer": "shutter",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "快門",
  "en_def": "the part of a camera that opens to let light in",
  "sentence": "The camera's {{BLANK}} opened and closed so fast that the photo of the running horse was perfectly clear.",
  "cn": "相機的快門開合得非常快，所以奔跑中的馬的照片非常清晰。",
  "cnMarked": "相機的【快門】開合得非常快，所以奔跑中的馬的照片非常清晰。",
  "isHead": false,
  "level": 6,
  "family": "shutter"
 },
 {
  "word": "shutter",
  "answer": "shutter",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "關閉（商店、工廠）",
  "en_def": "to close a business or building permanently",
  "sentence": "The company decided to {{BLANK}} its three oldest stores and move all its business online by next summer.",
  "cn": "這家公司決定關閉三家最老的門市，並在明年夏天前把所有生意移到網路上。",
  "cnMarked": "這家公司決定【關閉】三家最老的門市，並在明年夏天前把所有生意移到網路上。",
  "isHead": false,
  "level": 6,
  "family": "shutter"
 },
 {
  "word": "shut",
  "answer": "shut",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "關上；關閉",
  "en_def": "to close something",
  "sentence": "Please {{BLANK}} the window before you leave the room, because it looks like it is going to rain this afternoon.",
  "cn": "離開房間前請把窗戶關上，因為今天下午看起來要下雨了。",
  "cnMarked": "離開房間前請把窗戶【關上】，因為今天下午看起來要下雨了。",
  "isHead": false,
  "level": 2,
  "family": "shutter"
 },
 {
  "word": "simplicity",
  "answer": "simplicity",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "簡單；簡樸",
  "en_def": "the quality of being simple and easy",
  "sentence": "The beauty of this Japanese garden lies in its {{BLANK}}: just white stones, a few trees, and a small pool of water.",
  "cn": "這座日本庭園的美在於它的簡樸：只有白色石頭、幾棵樹和一個小水池。",
  "cnMarked": "這座日本庭園的美在於它的【簡樸】：只有白色石頭、幾棵樹和一個小水池。",
  "isHead": true,
  "level": 6,
  "family": "simplicity"
 },
 {
  "word": "simplify",
  "answer": "simplify",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "簡化",
  "en_def": "to make something easier to do or understand",
  "sentence": "The teacher tried to {{BLANK}} the difficult grammar rule by drawing a picture on the board, and suddenly everyone understood.",
  "cn": "老師試著在黑板上畫圖來簡化這條困難的文法規則，突然間大家都懂了。",
  "cnMarked": "老師試著在黑板上畫圖來【簡化】這條困難的文法規則，突然間大家都懂了。",
  "isHead": true,
  "level": 6,
  "family": "simplicity"
 },
 {
  "word": "simple",
  "answer": "simple",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "簡單的",
  "en_def": "easy to understand or do; not complicated",
  "sentence": "The recipe is very {{BLANK}}, with only four ingredients, so even a child can make these cookies without help.",
  "cn": "這個食譜非常簡單，只有四種材料，所以連小孩都能不用幫忙做出這些餅乾。",
  "cnMarked": "這個食譜非常【簡單】，只有四種材料，所以連小孩都能不用幫忙做出這些餅乾。",
  "isHead": false,
  "level": 1,
  "family": "simplicity"
 },
 {
  "word": "simply",
  "answer": "simply",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "只是；僅僅；簡單地",
  "en_def": "just; only; in a simple way",
  "sentence": "I {{BLANK}} forgot about the meeting, so I owe my teammates an apology for leaving them waiting for half an hour.",
  "cn": "我只是忘了那場會議，所以我該向隊友道歉，讓他們等了半小時。",
  "cnMarked": "我【只是】忘了那場會議，所以我該向隊友道歉，讓他們等了半小時。",
  "isHead": false,
  "level": 2,
  "family": "simplicity"
 },
 {
  "word": "simplification",
  "answer": "simplification",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "簡化",
  "en_def": "the act of making something simpler",
  "sentence": "The {{BLANK}} of the application form was welcomed by everyone, because the old one had taken an hour to fill in.",
  "cn": "申請表的簡化受到大家的歡迎，因為舊的表格要花一個小時才能填完。",
  "cnMarked": "申請表的【簡化】受到大家的歡迎，因為舊的表格要花一個小時才能填完。",
  "isHead": false,
  "level": null,
  "family": "simplicity"
 },
 {
  "word": "simultaneous",
  "answer": "simultaneous",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "同時的",
  "en_def": "happening at exactly the same time",
  "sentence": "The two explosions were {{BLANK}}, so people in the city heard only one loud bang and did not know what had happened.",
  "cn": "兩次爆炸是同時的，所以城裡的人只聽到一聲巨響，不知道發生了什麼事。",
  "cnMarked": "兩次爆炸是【同時的】，所以城裡的人只聽到一聲巨響，不知道發生了什麼事。",
  "isHead": true,
  "level": 6,
  "family": "simultaneous"
 },
 {
  "word": "simultaneously",
  "answer": "simultaneously",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "同時地",
  "en_def": "at exactly the same time",
  "sentence": "It is hard to listen to the teacher and text your friends {{BLANK}}, which is why phones are not allowed in class.",
  "cn": "很難同時聽老師講課又傳訊息給朋友，這就是為什麼上課不准用手機。",
  "cnMarked": "很難【同時】聽老師講課又傳訊息給朋友，這就是為什麼上課不准用手機。",
  "isHead": false,
  "level": null,
  "family": "simultaneous"
 },
 {
  "word": "simultaneous interpretation",
  "answer": "simultaneous interpretation",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "同步口譯",
  "en_def": "translating speech into another language while the person is still speaking",
  "sentence": "At the international meeting, {{BLANK}} was provided through headphones so that guests from twenty countries could all understand.",
  "cn": "在這場國際會議上，透過耳機提供同步口譯，讓來自二十個國家的來賓都能聽懂。",
  "cnMarked": "在這場國際會議上，透過耳機提供【同步口譯】，讓來自二十個國家的來賓都能聽懂。",
  "isHead": false,
  "level": null,
  "family": "simultaneous"
 },
 {
  "word": "skeptical",
  "answer": "skeptical",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "懷疑的",
  "en_def": "not sure that something is true or will work",
  "sentence": "I am {{BLANK}} about the advertisement that promises you can learn English in just one week without any effort.",
  "cn": "我對那則承諾一週內不用努力就能學會英文的廣告感到懷疑。",
  "cnMarked": "我對那則承諾一週內不用努力就能學會英文的廣告感到【懷疑】。",
  "isHead": true,
  "level": 6,
  "family": "skeptical"
 },
 {
  "word": "skeptic",
  "answer": "skeptic",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "懷疑論者",
  "en_def": "a person who doubts that something is true",
  "sentence": "My uncle is a {{BLANK}} who does not believe anything he reads online until he has checked it in at least two newspapers.",
  "cn": "我叔叔是個懷疑論者，他在網路上讀到的任何東西，都要先在至少兩份報紙上查證才相信。",
  "cnMarked": "我叔叔是個【懷疑論者】，他在網路上讀到的任何東西，都要先在至少兩份報紙上查證才相信。",
  "isHead": false,
  "level": null,
  "family": "skeptical"
 },
 {
  "word": "skepticism",
  "answer": "skepticism",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "懷疑態度",
  "en_def": "an attitude of doubting that something is true",
  "sentence": "The scientist's new idea was met with {{BLANK}} at first, but later experiments proved that she had been right all along.",
  "cn": "這位科學家的新想法起初受到質疑，但後來的實驗證明她一直都是對的。",
  "cnMarked": "這位科學家的新想法起初受到【質疑】，但後來的實驗證明她一直都是對的。",
  "isHead": false,
  "level": null,
  "family": "skeptical"
 },
 {
  "word": "skeptically",
  "answer": "skeptically",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "懷疑地",
  "en_def": "in a way that shows doubt",
  "sentence": "\"Are you sure that is a real diamond?\" she asked {{BLANK}}, holding the cheap-looking ring up to the light.",
  "cn": "「你確定那是真鑽石嗎？」她懷疑地問，把看起來很廉價的戒指舉到光線下。",
  "cnMarked": "「你確定那是真鑽石嗎？」她【懷疑地】問，把看起來很廉價的戒指舉到光線下。",
  "isHead": false,
  "level": null,
  "family": "skeptical"
 },
 {
  "word": "skim",
  "answer": "skim",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "瀏覽；略讀",
  "en_def": "to read something quickly to get the main ideas",
  "sentence": "Before the test, I only had time to {{BLANK}} the chapter, so I missed some important details in the middle.",
  "cn": "考試前我只有時間略讀這一章，所以漏掉了中間一些重要的細節。",
  "cnMarked": "考試前我只有時間【略讀】這一章，所以漏掉了中間一些重要的細節。",
  "isHead": true,
  "level": 6,
  "family": "skim"
 },
 {
  "word": "skim",
  "answer": "skim",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "撇去（表面的東西）",
  "en_def": "to remove something from the surface of a liquid",
  "sentence": "When the soup starts to boil, {{BLANK}} the fat off the top with a spoon so that the broth stays clear.",
  "cn": "湯開始滾的時候，用湯匙把表面的油撇掉，這樣湯才會保持清澈。",
  "cnMarked": "湯開始滾的時候，用湯匙把表面的油【撇掉】，這樣湯才會保持清澈。",
  "isHead": false,
  "level": 6,
  "family": "skim"
 },
 {
  "word": "skim through",
  "answer": "skim through",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "快速翻閱",
  "en_def": "to look through something quickly",
  "sentence": "I {{BLANK}} the newspaper every morning on the MRT, reading only the headlines and the sports page.",
  "cn": "我每天早上在捷運上快速翻閱報紙，只看標題和體育版。",
  "cnMarked": "我每天早上在捷運上【快速翻閱】報紙，只看標題和體育版。",
  "isHead": false,
  "level": null,
  "family": "skim"
 },
 {
  "word": "skim milk",
  "answer": "skim milk",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "脫脂牛奶",
  "en_def": "milk that has had the fat removed",
  "sentence": "My mother switched to {{BLANK}} last year because her doctor told her to eat less fat, and now she prefers the taste.",
  "cn": "我媽媽去年改喝脫脂牛奶，因為醫生要她少吃油脂，現在她反而更喜歡這個味道。",
  "cnMarked": "我媽媽去年改喝【脫脂牛奶】，因為醫生要她少吃油脂，現在她反而更喜歡這個味道。",
  "isHead": false,
  "level": null,
  "family": "skim"
 },
 {
  "word": "slang",
  "answer": "slang",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "俚語",
  "en_def": "very informal words used by a particular group of people",
  "sentence": "Teenagers use a lot of {{BLANK}} when they talk to each other, so their parents often have no idea what they are saying.",
  "cn": "青少年彼此交談時會用很多俚語，所以父母常常完全不知道他們在說什麼。",
  "cnMarked": "青少年彼此交談時會用很多【俚語】，所以父母常常完全不知道他們在說什麼。",
  "isHead": true,
  "level": 6,
  "family": "slang"
 },
 {
  "word": "slang word",
  "answer": "slang word",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "俚語字",
  "en_def": "an informal word used by a group of people",
  "sentence": "\"Cool\" was once a {{BLANK}} used only by young people, but now even grandparents say it all the time.",
  "cn": "「Cool」曾經是只有年輕人用的俚語字，但現在連爺爺奶奶都常常說。",
  "cnMarked": "「Cool」曾經是只有年輕人用的【俚語字】，但現在連爺爺奶奶都常常說。",
  "isHead": false,
  "level": null,
  "family": "slang"
 },
 {
  "word": "slangy",
  "answer": "slangy",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "俚俗的；充滿俚語的",
  "en_def": "using a lot of slang",
  "sentence": "His essay was too {{BLANK}} for a school report, so the teacher asked him to rewrite it in more formal English.",
  "cn": "他的作文對學校報告來說太俚俗了，所以老師要他用更正式的英文重寫。",
  "cnMarked": "他的作文對學校報告來說太【俚俗】了，所以老師要他用更正式的英文重寫。",
  "isHead": false,
  "level": null,
  "family": "slang"
 },
 {
  "word": "slash",
  "answer": "slashed",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "砍；劃破",
  "en_def": "to cut something with a quick, strong movement",
  "sentence": "Someone {{BLANK}} the tires of three cars on our street last night, and the police are now checking the cameras.",
  "cn": "昨晚有人劃破了我們這條街上三輛車的輪胎，警察正在調閱監視器。",
  "cnMarked": "昨晚有人【劃破】了我們這條街上三輛車的輪胎，警察正在調閱監視器。",
  "isHead": true,
  "level": 6,
  "family": "slash"
 },
 {
  "word": "slash",
  "answer": "slash",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "大幅削減",
  "en_def": "to reduce something by a large amount",
  "sentence": "The store decided to {{BLANK}} its prices by half after Christmas to clear out all the winter coats and boots.",
  "cn": "這家店決定在聖誕節後把價格大砍一半，以清掉所有的冬季外套和靴子。",
  "cnMarked": "這家店決定在聖誕節後把價格【大砍】一半，以清掉所有的冬季外套和靴子。",
  "isHead": false,
  "level": 6,
  "family": "slash"
 },
 {
  "word": "slash",
  "answer": "slash",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "斜線",
  "en_def": "the symbol / used in writing",
  "sentence": "When you type a web address, remember to put a {{BLANK}} between the name of the website and the name of the page.",
  "cn": "輸入網址時，記得在網站名稱和頁面名稱之間加一個斜線。",
  "cnMarked": "輸入網址時，記得在網站名稱和頁面名稱之間加一個【斜線】。",
  "isHead": false,
  "level": 6,
  "family": "slash"
 },
 {
  "word": "slash prices",
  "answer": "slash prices",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "大幅降價",
  "en_def": "to make prices much lower",
  "sentence": "Airlines often {{BLANK}} in the weeks after Chinese New Year, so that is a good time to plan a short trip to Japan.",
  "cn": "航空公司常在農曆新年後的幾週大幅降價，所以那是計畫日本短期旅行的好時機。",
  "cnMarked": "航空公司常在農曆新年後的幾週【大幅降價】，所以那是計畫日本短期旅行的好時機。",
  "isHead": false,
  "level": null,
  "family": "slash"
 },
 {
  "word": "slaughter",
  "answer": "slaughter",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "屠宰；屠殺",
  "en_def": "to kill animals for food; to kill many people cruelly",
  "sentence": "Farmers used to {{BLANK}} a pig before every big festival, and the whole village would share the meat at a feast.",
  "cn": "農夫以前會在每個大節日前宰一頭豬，全村的人會在宴席上分享豬肉。",
  "cnMarked": "農夫以前會在每個大節日前【宰】一頭豬，全村的人會在宴席上分享豬肉。",
  "isHead": true,
  "level": 6,
  "family": "slaughter"
 },
 {
  "word": "slaughter",
  "answer": "slaughter",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "屠殺",
  "en_def": "the cruel killing of many people or animals",
  "sentence": "The war brought terrible {{BLANK}} to the region, and thousands of families lost their homes and their loved ones.",
  "cn": "戰爭給這個地區帶來可怕的屠殺，成千上萬的家庭失去了家園和親人。",
  "cnMarked": "戰爭給這個地區帶來可怕的【屠殺】，成千上萬的家庭失去了家園和親人。",
  "isHead": false,
  "level": 6,
  "family": "slaughter"
 },
 {
  "word": "slaughterhouse",
  "answer": "slaughterhouse",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "屠宰場",
  "en_def": "a building where animals are killed for meat",
  "sentence": "The truck full of chickens was on its way to the {{BLANK}} when it broke down outside the school, and the birds escaped.",
  "cn": "那輛載滿雞的卡車在前往屠宰場的路上，在學校外面拋錨了，雞全都跑了出來。",
  "cnMarked": "那輛載滿雞的卡車在前往【屠宰場】的路上，在學校外面拋錨了，雞全都跑了出來。",
  "isHead": false,
  "level": null,
  "family": "slaughter"
 },
 {
  "word": "slay, slew, slain",
  "answer": "slay",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "殺死（文學用語）",
  "en_def": "to kill someone or something violently (used in stories)",
  "sentence": "In the old story, the brave knight must {{BLANK}} the dragon before he can marry the princess and become king.",
  "cn": "在那個古老的故事裡，勇敢的騎士必須先殺死惡龍，才能娶公主並成為國王。",
  "cnMarked": "在那個古老的故事裡，勇敢的騎士必須先【殺死】惡龍，才能娶公主並成為國王。",
  "isHead": true,
  "level": 6,
  "family": "slay"
 },
 {
  "word": "dragon slayer",
  "answer": "dragon slayer",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "屠龍者",
  "en_def": "a hero who kills a dragon in a story",
  "sentence": "The children loved the movie about the young {{BLANK}} who protects her village from a fire-breathing monster.",
  "cn": "孩子們很喜歡那部電影，講的是一位年輕的屠龍者保護村子不受噴火怪物攻擊。",
  "cnMarked": "孩子們很喜歡那部電影，講的是一位年輕的【屠龍者】保護村子不受噴火怪物攻擊。",
  "isHead": false,
  "level": null,
  "family": "slay"
 },
 {
  "word": "be slain",
  "answer": "was slain",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "被殺",
  "en_def": "to be killed violently",
  "sentence": "According to the legend, the king {{BLANK}} in battle, and his sword was lost in the lake for a thousand years.",
  "cn": "根據傳說，國王在戰鬥中被殺，他的劍在湖裡遺失了一千年。",
  "cnMarked": "根據傳說，國王在戰鬥中【被殺】，他的劍在湖裡遺失了一千年。",
  "isHead": false,
  "level": null,
  "family": "slay"
 },
 {
  "word": "sloppy",
  "answer": "sloppy",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "馬虎的；邋遢的",
  "en_def": "careless and untidy",
  "sentence": "Your homework is too {{BLANK}}; the handwriting is hard to read, and there are coffee stains on the first page.",
  "cn": "你的作業太馬虎了；字跡難以辨認，第一頁還有咖啡漬。",
  "cnMarked": "你的作業太【馬虎】了；字跡難以辨認，第一頁還有咖啡漬。",
  "isHead": true,
  "level": 6,
  "family": "sloppy"
 },
 {
  "word": "sloppily",
  "answer": "sloppily",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "馬虎地",
  "en_def": "in a careless and untidy way",
  "sentence": "The boxes were packed so {{BLANK}} that half of the plates were broken by the time the truck arrived at our new house.",
  "cn": "箱子打包得太馬虎，卡車到我們新家時，有一半的盤子都破了。",
  "cnMarked": "箱子打包得太【馬虎】，卡車到我們新家時，有一半的盤子都破了。",
  "isHead": false,
  "level": null,
  "family": "sloppy"
 },
 {
  "word": "sloppiness",
  "answer": "sloppiness",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "馬虎；草率",
  "en_def": "careless and untidy behavior",
  "sentence": "The manager said that {{BLANK}} in the kitchen could make customers sick, so every cook must now wear gloves and a hat.",
  "cn": "經理說廚房裡的馬虎可能會讓顧客生病，所以現在每位廚師都必須戴手套和帽子。",
  "cnMarked": "經理說廚房裡的【馬虎】可能會讓顧客生病，所以現在每位廚師都必須戴手套和帽子。",
  "isHead": false,
  "level": null,
  "family": "sloppy"
 },
 {
  "word": "slum",
  "answer": "slum",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "貧民窟",
  "en_def": "a very poor and crowded area of a city",
  "sentence": "Many families in the {{BLANK}} live in houses made of metal sheets, with no clean water and only one toilet shared by fifty people.",
  "cn": "貧民窟裡的許多家庭住在鐵皮搭的房子裡，沒有乾淨的水，五十個人共用一間廁所。",
  "cnMarked": "【貧民窟】裡的許多家庭住在鐵皮搭的房子裡，沒有乾淨的水，五十個人共用一間廁所。",
  "isHead": true,
  "level": 6,
  "family": "slum"
 },
 {
  "word": "slum it",
  "answer": "slum it",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "過窮日子；克難生活",
  "en_def": "to live in a cheaper or poorer way than usual, often for fun",
  "sentence": "On our backpacking trip we decided to {{BLANK}}, staying in cheap hostels and eating street food every day.",
  "cn": "背包旅行時我們決定克難生活，住便宜的青年旅館，每天吃街頭小吃。",
  "cnMarked": "背包旅行時我們決定【克難生活】，住便宜的青年旅館，每天吃街頭小吃。",
  "isHead": false,
  "level": null,
  "family": "slum"
 },
 {
  "word": "slum dweller",
  "answer": "slum dwellers",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "貧民窟居民",
  "en_def": "a person who lives in a slum",
  "sentence": "The city built new apartments for the {{BLANK}}, who had lived beside the dirty river for more than twenty years.",
  "cn": "市政府為那些在骯髒河邊住了二十多年的貧民窟居民蓋了新公寓。",
  "cnMarked": "市政府為那些在骯髒河邊住了二十多年的【貧民窟居民】蓋了新公寓。",
  "isHead": false,
  "level": null,
  "family": "slum"
 },
 {
  "word": "slump",
  "answer": "slumped",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "暴跌；驟降",
  "en_def": "to fall suddenly by a large amount",
  "sentence": "Sales of umbrellas {{BLANK}} during the long dry summer, and the small shop nearly had to close.",
  "cn": "在漫長乾燥的夏天，雨傘的銷量暴跌，那家小店差點關門。",
  "cnMarked": "在漫長乾燥的夏天，雨傘的銷量【暴跌】，那家小店差點關門。",
  "isHead": true,
  "level": 6,
  "family": "slump"
 },
 {
  "word": "slump",
  "answer": "slumped",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "癱坐；倒下",
  "en_def": "to sit or fall down heavily because you are tired or weak",
  "sentence": "After running the whole marathon, he {{BLANK}} into a chair and could not move for almost an hour.",
  "cn": "跑完整場馬拉松後，他癱坐在椅子上，將近一小時動彈不得。",
  "cnMarked": "跑完整場馬拉松後，他【癱坐】在椅子上，將近一小時動彈不得。",
  "isHead": false,
  "level": 6,
  "family": "slump"
 },
 {
  "word": "slump",
  "answer": "slump",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "衰退期；低潮",
  "en_def": "a period when something falls or does badly",
  "sentence": "The baseball team is in a {{BLANK}}; they have lost eight games in a row, and the fans are starting to stay home.",
  "cn": "這支棒球隊正處於低潮；他們已經連輸八場，球迷開始不來看球了。",
  "cnMarked": "這支棒球隊正處於【低潮】；他們已經連輸八場，球迷開始不來看球了。",
  "isHead": false,
  "level": 6,
  "family": "slump"
 },
 {
  "word": "sly",
  "answer": "sly",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "狡猾的",
  "en_def": "clever at tricking people in a secret way",
  "sentence": "The {{BLANK}} fox waited until the farmer went to lunch, and then it quietly carried off the fattest chicken.",
  "cn": "狡猾的狐狸等到農夫去吃午餐，然後悄悄地叼走了最肥的那隻雞。",
  "cnMarked": "【狡猾的】狐狸等到農夫去吃午餐，然後悄悄地叼走了最肥的那隻雞。",
  "isHead": true,
  "level": 6,
  "family": "sly"
 },
 {
  "word": "slyly",
  "answer": "slyly",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "狡猾地；偷偷地",
  "en_def": "in a secret and clever way",
  "sentence": "The boy {{BLANK}} slipped the last cookie into his pocket while his mother was busy talking on the phone.",
  "cn": "男孩趁媽媽忙著講電話時，偷偷地把最後一塊餅乾塞進口袋。",
  "cnMarked": "男孩趁媽媽忙著講電話時，【偷偷地】把最後一塊餅乾塞進口袋。",
  "isHead": false,
  "level": null,
  "family": "sly"
 },
 {
  "word": "on the sly",
  "answer": "on the sly",
  "nblanks": 3,
  "pos": "phr.",
  "cn_def": "偷偷地；暗中",
  "en_def": "secretly, so that nobody knows",
  "sentence": "My grandfather is not supposed to eat sweets, but he buys ice cream {{BLANK}} whenever he walks past the shop.",
  "cn": "我爺爺不應該吃甜食，但每次經過那家店他都會偷偷地買冰淇淋。",
  "cnMarked": "我爺爺不應該吃甜食，但每次經過那家店他都會【偷偷地】買冰淇淋。",
  "isHead": false,
  "level": null,
  "family": "sly"
 },
 {
  "word": "smuggle",
  "answer": "smuggle",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "走私；偷運",
  "en_def": "to take things or people into or out of a country illegally",
  "sentence": "The man tried to {{BLANK}} two rare birds through the airport in his jacket, but the officers heard them singing.",
  "cn": "那名男子試圖把兩隻稀有鳥類藏在外套裡偷運過機場，但官員聽到了牠們的叫聲。",
  "cnMarked": "那名男子試圖把兩隻稀有鳥類藏在外套裡【偷運】過機場，但官員聽到了牠們的叫聲。",
  "isHead": true,
  "level": 6,
  "family": "smuggle"
 },
 {
  "word": "smuggler",
  "answer": "smuggler",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "走私者",
  "en_def": "a person who takes things into or out of a country illegally",
  "sentence": "Coast guards caught the {{BLANK}} at night, and his boat was full of cigarettes that he planned to sell without paying tax.",
  "cn": "海巡人員在夜裡抓到了那名走私者，他的船上裝滿了打算不繳稅就賣掉的香菸。",
  "cnMarked": "海巡人員在夜裡抓到了那名【走私者】，他的船上裝滿了打算不繳稅就賣掉的香菸。",
  "isHead": false,
  "level": null,
  "family": "smuggle"
 },
 {
  "word": "smuggling",
  "answer": "smuggling",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "走私",
  "en_def": "the crime of taking things into or out of a country illegally",
  "sentence": "Drug {{BLANK}} is a very serious crime in Taiwan, and the signs at the airport warn travelers about it in several languages.",
  "cn": "毒品走私在台灣是非常嚴重的罪行，機場的標示用好幾種語言警告旅客。",
  "cnMarked": "毒品【走私】在台灣是非常嚴重的罪行，機場的標示用好幾種語言警告旅客。",
  "isHead": false,
  "level": null,
  "family": "smuggle"
 }
];
const MCQS = [
 {
  "q": "Our team lost the first game of the season by one point. It was a ______ for us, but the coach said we would learn a lot from it.",
  "options": [
   "slang",
   "setback",
   "shrub",
   "shortage"
  ],
  "answer": 1,
  "vocabIndex": 0
 },
 {
  "q": "The old man's coat had holes in both sleeves and most of its buttons were gone. Though his clothes were ______, he always smiled warmly at everyone.",
  "options": [
   "sharp",
   "sly",
   "simultaneous",
   "shabby"
  ],
  "answer": 3,
  "vocabIndex": 3
 },
 {
  "q": "The chef says a dull knife is more dangerous than a sharp one. Before cutting the vegetables, he always takes a minute to ______ his knives.",
  "options": [
   "sharpen",
   "smuggle",
   "slaughter",
   "shuffle"
  ],
  "answer": 0,
  "vocabIndex": 6
 },
 {
  "q": "My father does not like using a razor with a blade because he often cuts himself. Last month he bought an electric ______, and now his mornings are easier.",
  "options": [
   "slump",
   "shaver",
   "shred",
   "shutter"
  ],
  "answer": 1,
  "vocabIndex": 10
 },
 {
  "q": "The new phone takes great photos and has a big, bright screen. Its one ______ is the battery, which dies after only five hours of use.",
  "options": [
   "skeptic",
   "slaughter",
   "shortcoming",
   "shriek"
  ],
  "answer": 2,
  "vocabIndex": 13
 },
 {
  "q": "Cutting down the whole forest will bring money quickly this year. However, the plan is ______, because the village will lose its clean water and its visitors.",
  "options": [
   "skeptical",
   "shabby",
   "sloppy",
   "shortsighted"
  ],
  "answer": 3,
  "vocabIndex": 17
 },
 {
  "q": "These old bank letters have your account number printed on them. Please ______ them before you throw them away so that nobody can read the numbers.",
  "options": [
   "slash",
   "shred",
   "shave",
   "skim"
  ],
  "answer": 1,
  "vocabIndex": 20
 },
 {
  "q": "We heard a loud ______ from the kitchen and ran in to see what was wrong. Mom was standing on a chair, pointing at a tiny gray mouse.",
  "options": [
   "slang",
   "sharpener",
   "shriek",
   "shrub"
  ],
  "answer": 2,
  "vocabIndex": 24
 },
 {
  "q": "Grandma planted a row of small plants along the fence last spring. Each ______ is now covered with tiny pink flowers that the bees love to visit.",
  "options": [
   "shrub",
   "shutter",
   "slum",
   "shaver"
  ],
  "answer": 0,
  "vocabIndex": 27
 },
 {
  "q": "You got all the best cards in the last two rounds of the game. Let me ______ the cards properly this time before I give them out.",
  "options": [
   "slay",
   "smuggle",
   "shuffle",
   "shorten"
  ],
  "answer": 2,
  "vocabIndex": 30
 },
 {
  "q": "A strong typhoon will hit the island tonight. Shop owners along the street are closing every ______ and tying down their signs to protect their windows.",
  "options": [
   "shutter",
   "shred",
   "slaughterhouse",
   "shortage"
  ],
  "answer": 0,
  "vocabIndex": 34
 },
 {
  "q": "The Japanese garden has only white stones, a few trees, and a small pool. Its beauty lies in its ______, and visitors feel calm the moment they enter.",
  "options": [
   "skepticism",
   "smuggling",
   "simplicity",
   "shrubbery"
  ],
  "answer": 2,
  "vocabIndex": 38
 },
 {
  "q": "The new grammar rule was too hard for most of the class to understand. The teacher drew a picture to ______ it, and suddenly everyone got the idea.",
  "options": [
   "simplify",
   "sharpen",
   "slump",
   "shred"
  ],
  "answer": 0,
  "vocabIndex": 39
 },
 {
  "q": "People in the city heard only one loud bang last night. In fact, there were two explosions, but they were ______, so nobody could tell them apart.",
  "options": [
   "slangy",
   "simultaneous",
   "shortsighted",
   "sly"
  ],
  "answer": 1,
  "vocabIndex": 43
 },
 {
  "q": "The advertisement says you can learn English in one week without any effort. I am very ______ about such promises, because learning a new language takes years.",
  "options": [
   "skeptical",
   "sloppy",
   "shabby",
   "simple"
  ],
  "answer": 0,
  "vocabIndex": 46
 },
 {
  "q": "I only had ten minutes left before the history test this morning. I could just ______ the long chapter quickly, so I missed some important details in it.",
  "options": [
   "shut",
   "shriek",
   "slaughter",
   "skim"
  ],
  "answer": 3,
  "vocabIndex": 50
 },
 {
  "q": "Teenagers often use words that their parents do not understand. This kind of ______ changes quickly, and a word that is popular now may sound old next year.",
  "options": [
   "slang",
   "slash",
   "shriek",
   "simplification"
  ],
  "answer": 0,
  "vocabIndex": 54
 },
 {
  "q": "The winter coats did not sell well, and spring is coming. The store will ______ its prices by half this weekend to clear out all of them.",
  "options": [
   "shutter",
   "slash",
   "shave",
   "simplify"
  ],
  "answer": 1,
  "vocabIndex": 57
 },
 {
  "q": "In the past, farmers in the village raised their own pigs. Before every big festival, they would ______ one and share the meat with their neighbors.",
  "options": [
   "skim",
   "shorten",
   "shuffle",
   "slaughter"
  ],
  "answer": 3,
  "vocabIndex": 61
 },
 {
  "q": "In the old story, a dragon lives in the mountains and burns the farms every night. The brave knight must ______ it before he can marry the princess.",
  "options": [
   "shred",
   "slay",
   "sharpen",
   "smuggle"
  ],
  "answer": 1,
  "vocabIndex": 64
 },
 {
  "q": "Your report has coffee stains on the first page, and the writing is hard to read. It is too ______, so please do it again more carefully.",
  "options": [
   "simultaneous",
   "sharp",
   "sloppy",
   "skeptical"
  ],
  "answer": 2,
  "vocabIndex": 67
 },
 {
  "q": "Many poor families in the big city live beside the dirty river. Their homes in the ______ are made of metal sheets and have no running water.",
  "options": [
   "slash",
   "slum",
   "shaver",
   "setback"
  ],
  "answer": 1,
  "vocabIndex": 70
 },
 {
  "q": "Our baseball team has lost eight games in a row this month. The coach hopes the team will come out of this ______ before the playoffs begin.",
  "options": [
   "shrub",
   "shortcoming",
   "sharpener",
   "slump"
  ],
  "answer": 3,
  "vocabIndex": 73
 },
 {
  "q": "The ______ fox waited quietly until the farmer and his dog went inside for lunch. Then it walked into the yard and carried off the fattest chicken.",
  "options": [
   "simple",
   "sly",
   "skeptical",
   "shortsighted"
  ],
  "answer": 1,
  "vocabIndex": 76
 },
 {
  "q": "The man hid two rare birds inside his jacket at the airport. He was trying to ______ them into the country, but the officers heard them singing.",
  "options": [
   "shuffle",
   "slay",
   "shave",
   "smuggle"
  ],
  "answer": 3,
  "vocabIndex": 79
 },
 {
  "q": "There were not enough eggs anywhere on the island last spring. Because of the ______, many breakfast shops raised their prices or even stopped selling egg sandwiches.",
  "options": [
   "shortage",
   "smuggler",
   "shutter",
   "slang"
  ],
  "answer": 0,
  "vocabIndex": 14
 },
 {
  "q": "The class lost two days of lessons because of the typhoon. The teacher decided to ______ the test from fifty questions to thirty to be fair.",
  "options": [
   "slash",
   "shut",
   "shorten",
   "shriek"
  ],
  "answer": 2,
  "vocabIndex": 15
 },
 {
  "q": "My uncle never believes anything he reads online until he checks it in two newspapers. He is a real ______, and he teaches us to ask questions too.",
  "options": [
   "shredder",
   "shave",
   "slump",
   "skeptic"
  ],
  "answer": 3,
  "vocabIndex": 47
 },
 {
  "q": "Coast guards stopped a small boat near the harbor last night. The ______ had filled it with cigarettes that he planned to sell without paying any tax.",
  "options": [
   "smuggler",
   "shrubbery",
   "skeptic",
   "shuffle"
  ],
  "answer": 0,
  "vocabIndex": 80
 },
 {
  "q": "This cookie recipe needs only flour, sugar, butter, and an egg. It is so ______ that even my seven-year-old cousin can make it without any help.",
  "options": [
   "slangy",
   "sly",
   "simple",
   "shabby"
  ],
  "answer": 2,
  "vocabIndex": 40
 }
];
const LOOKUP = {};
VOCAB.forEach(v => { const key = v.word.toLowerCase(); const sense = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def };
  if (LOOKUP[key]) LOOKUP[key].combined.push(sense); else LOOKUP[key] = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def, combined: [sense] }; });
const EXTRA_GLOSSES = {};