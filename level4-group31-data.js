// 學測6000字 Level 4 Group 31 (possession-promising) — word-family edition
const QUIZ_CONFIG = {
  groupName: "6000字 L4 Group 31 - possession – promising (word family)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};
const VOCAB = [
 {
  "word": "possession",
  "answer": "possession",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "擁有；持有",
  "en_def": "the state of having or owning something",
  "sentence": "When the police stopped the car, they found that the driver was in {{BLANK}} of a knife and a large amount of cash.",
  "cn": "警察攔下車子時，發現駕駛持有一把刀和大量現金。",
  "cnMarked": "警察攔下車子時，發現駕駛【持有】一把刀和大量現金。",
  "isHead": true,
  "level": 4,
  "family": "possession"
 },
 {
  "word": "possessions",
  "answer": "possessions",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "財產；所有物",
  "en_def": "the things that you own",
  "sentence": "The old man did not have many {{BLANK}}, but he said his books and his garden were all he needed.",
  "cn": "那位老先生沒有很多財物，但他說他的書和花園就是他所需要的一切。",
  "cnMarked": "那位老先生沒有很多【財物】，但他說他的書和花園就是他所需要的一切。",
  "isHead": false,
  "level": 4,
  "family": "possession"
 },
 {
  "word": "possess",
  "answer": "possess",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "擁有；具有",
  "en_def": "to have or own something",
  "sentence": "Few people {{BLANK}} the courage to speak the truth when everyone around them is saying something different.",
  "cn": "很少人擁有在周圍所有人都說不同話時說出真相的勇氣。",
  "cnMarked": "很少人【擁有】在周圍所有人都說不同話時說出真相的勇氣。",
  "isHead": false,
  "level": 4,
  "family": "possession"
 },
 {
  "word": "possessive",
  "answer": "possessive",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "佔有慾強的",
  "en_def": "wanting to keep someone or something only for yourself",
  "sentence": "Her boyfriend was so {{BLANK}} that he got upset whenever she spent an evening with her other friends.",
  "cn": "她的男朋友佔有慾太強，每當她和其他朋友共度一個晚上他就會不高興。",
  "cnMarked": "她的男朋友【佔有慾太強】，每當她和其他朋友共度一個晚上他就會不高興。",
  "isHead": false,
  "level": null,
  "family": "possession"
 },
 {
  "word": "take possession of",
  "answer": "take possession of",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "取得…的所有權；接管",
  "en_def": "to start to own or control something",
  "sentence": "The new owners will {{BLANK}} the restaurant next month and plan to change the menu completely.",
  "cn": "新老闆下個月將接管這家餐廳，並計畫完全更換菜單。",
  "cnMarked": "新老闆下個月將【接管】這家餐廳，並計畫完全更換菜單。",
  "isHead": false,
  "level": null,
  "family": "possession"
 },
 {
  "word": "postage",
  "answer": "postage",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "郵資",
  "en_def": "the money you pay to send a letter or package",
  "sentence": "Sending a small gift to Japan is easy, but the {{BLANK}} can be higher than the price of the gift itself.",
  "cn": "寄小禮物到日本很容易，但郵資可能比禮物本身的價格還高。",
  "cnMarked": "寄小禮物到日本很容易，但【郵資】可能比禮物本身的價格還高。",
  "isHead": true,
  "level": 4,
  "family": "postage"
 },
 {
  "word": "post",
  "answer": "post",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "寄；郵寄",
  "en_def": "to send a letter or package by mail",
  "sentence": "Please {{BLANK}} this letter on your way to school, because the application must arrive at the office by Friday.",
  "cn": "請在上學路上寄這封信，因為申請書必須在星期五前送到辦公室。",
  "cnMarked": "請在上學路上【寄】這封信，因為申請書必須在星期五前送到辦公室。",
  "isHead": false,
  "level": 2,
  "family": "postage"
 },
 {
  "word": "post office",
  "answer": "post office",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "郵局",
  "en_def": "a place where you buy stamps and send letters and packages",
  "sentence": "My grandmother goes to the {{BLANK}} every month to pay her bills and send a package to my uncle in Tainan.",
  "cn": "我奶奶每個月都去郵局繳帳單，並寄包裹給我在台南的叔叔。",
  "cnMarked": "我奶奶每個月都去【郵局】繳帳單，並寄包裹給我在台南的叔叔。",
  "isHead": false,
  "level": null,
  "family": "postage"
 },
 {
  "word": "postcard",
  "answer": "postcard",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "明信片",
  "en_def": "a card with a picture on one side that you send without an envelope",
  "sentence": "Whenever my aunt travels abroad, she sends me a {{BLANK}} with a picture of a famous building on the front.",
  "cn": "每當我阿姨出國旅行，她都會寄給我一張正面印著著名建築圖片的明信片。",
  "cnMarked": "每當我阿姨出國旅行，她都會寄給我一張正面印著著名建築圖片的【明信片】。",
  "isHead": false,
  "level": 2,
  "family": "postage"
 },
 {
  "word": "potential",
  "answer": "potential",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "潛在的；可能的",
  "en_def": "possible in the future; that may become something",
  "sentence": "The company is looking at the small town as a {{BLANK}} site for its new factory, which could bring hundreds of jobs.",
  "cn": "這家公司正把這個小鎮視為新工廠的潛在地點，可能帶來數百個工作機會。",
  "cnMarked": "這家公司正把這個小鎮視為新工廠的【潛在】地點，可能帶來數百個工作機會。",
  "isHead": true,
  "level": 4,
  "family": "potential"
 },
 {
  "word": "potential",
  "answer": "potential",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "潛力",
  "en_def": "the ability to become good or successful in the future",
  "sentence": "The coach believes the young swimmer has the {{BLANK}} to win a medal at the Olympic Games one day.",
  "cn": "教練相信這位年輕的游泳選手有朝一日能在奧運贏得獎牌的潛力。",
  "cnMarked": "教練相信這位年輕的游泳選手有朝一日能在奧運贏得獎牌的【潛力】。",
  "isHead": false,
  "level": 4,
  "family": "potential"
 },
 {
  "word": "potentially",
  "answer": "potentially",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "潛在地；可能地",
  "en_def": "possibly, in a way that may happen in the future",
  "sentence": "Leaving a candle burning in an empty room is {{BLANK}} dangerous, so always blow it out before you go to bed.",
  "cn": "讓蠟燭在空房間裡燃燒可能很危險，所以睡前一定要吹熄它。",
  "cnMarked": "讓蠟燭在空房間裡燃燒【可能】很危險，所以睡前一定要吹熄它。",
  "isHead": false,
  "level": null,
  "family": "potential"
 },
 {
  "word": "reach one's full potential",
  "answer": "reach their full potential",
  "nblanks": 4,
  "pos": "v.phr.",
  "cn_def": "充分發揮潛力",
  "en_def": "to become as good as you can possibly be",
  "sentence": "A good teacher helps every student {{BLANK}}, not just the ones who already get high grades.",
  "cn": "好老師幫助每個學生充分發揮潛力，而不只是那些已經拿高分的學生。",
  "cnMarked": "好老師幫助每個學生【充分發揮潛力】，而不只是那些已經拿高分的學生。",
  "isHead": false,
  "level": null,
  "family": "potential"
 },
 {
  "word": "precise",
  "answer": "precise",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "精確的；準確的",
  "en_def": "exact and correct in every detail",
  "sentence": "The doctor needs the {{BLANK}} time you took the medicine, so please check the message on your phone.",
  "cn": "醫生需要你吃藥的確切時間，所以請查看你手機上的訊息。",
  "cnMarked": "醫生需要你吃藥的【確切】時間，所以請查看你手機上的訊息。",
  "isHead": true,
  "level": 4,
  "family": "precise"
 },
 {
  "word": "precisely",
  "answer": "precisely",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "精確地；正好",
  "en_def": "exactly",
  "sentence": "The train leaves at {{BLANK}} 8:15 every morning, so if you arrive one minute late, you will miss it.",
  "cn": "火車每天早上準八點十五分開，所以如果你晚到一分鐘，就會錯過它。",
  "cnMarked": "火車每天早上【準】八點十五分開，所以如果你晚到一分鐘，就會錯過它。",
  "isHead": false,
  "level": null,
  "family": "precise"
 },
 {
  "word": "precision",
  "answer": "precision",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "精確；精準",
  "en_def": "the quality of being exact and correct",
  "sentence": "Watchmakers must work with great {{BLANK}}, because even a tiny mistake can stop the whole watch from working.",
  "cn": "鐘錶匠必須非常精準地工作，因為即使是微小的錯誤也可能讓整隻錶停擺。",
  "cnMarked": "鐘錶匠必須非常【精準】地工作，因為即使是微小的錯誤也可能讓整隻錶停擺。",
  "isHead": false,
  "level": 6,
  "family": "precise"
 },
 {
  "word": "to be precise",
  "answer": "to be precise",
  "nblanks": 3,
  "pos": "phr.",
  "cn_def": "確切地說",
  "en_def": "used to give exact information",
  "sentence": "The trip will take about three hours, or {{BLANK}}, two hours and fifty minutes if there is no traffic.",
  "cn": "這趟車程大約三小時，確切地說，如果沒有塞車是兩小時五十分鐘。",
  "cnMarked": "這趟車程大約三小時，【確切地說】，如果沒有塞車是兩小時五十分鐘。",
  "isHead": false,
  "level": null,
  "family": "precise"
 },
 {
  "word": "predict",
  "answer": "predict",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "預測；預言",
  "en_def": "to say what will happen in the future",
  "sentence": "Nobody can {{BLANK}} exactly when the next big earthquake will hit, so every family should prepare an emergency bag.",
  "cn": "沒有人能預測下一次大地震確切會在何時發生，所以每個家庭都應該準備緊急避難包。",
  "cnMarked": "沒有人能【預測】下一次大地震確切會在何時發生，所以每個家庭都應該準備緊急避難包。",
  "isHead": true,
  "level": 4,
  "family": "predict"
 },
 {
  "word": "prediction",
  "answer": "prediction",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "預測；預言",
  "en_def": "a statement about what will happen in the future",
  "sentence": "The weather {{BLANK}} for the weekend is sunny and warm, so we are planning a picnic by the river.",
  "cn": "週末的天氣預測是晴朗溫暖，所以我們計畫去河邊野餐。",
  "cnMarked": "週末的天氣【預測】是晴朗溫暖，所以我們計畫去河邊野餐。",
  "isHead": true,
  "level": 4,
  "family": "predict"
 },
 {
  "word": "predictable",
  "answer": "predictable",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "可預測的；意料中的",
  "en_def": "happening in a way that you can expect",
  "sentence": "The ending of the movie was so {{BLANK}} that I guessed who the thief was in the first ten minutes.",
  "cn": "這部電影的結局太可預測了，我在前十分鐘就猜到誰是小偷。",
  "cnMarked": "這部電影的結局太【可預測】了，我在前十分鐘就猜到誰是小偷。",
  "isHead": false,
  "level": null,
  "family": "predict"
 },
 {
  "word": "unpredictable",
  "answer": "unpredictable",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "難以預測的",
  "en_def": "changing often, so that you cannot know what will happen",
  "sentence": "Mountain weather is {{BLANK}}; it can be sunny at noon and then pour with rain an hour later.",
  "cn": "山區的天氣難以預測；中午可能是晴天，一小時後就下起傾盆大雨。",
  "cnMarked": "山區的天氣【難以預測】；中午可能是晴天，一小時後就下起傾盆大雨。",
  "isHead": false,
  "level": null,
  "family": "predict"
 },
 {
  "word": "make a prediction",
  "answer": "made a prediction",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "做出預測",
  "en_def": "to say what you think will happen",
  "sentence": "Before the game, the sports reporter {{BLANK}} that the home team would win by at least ten points.",
  "cn": "比賽前，體育記者做出預測，認為主隊會贏至少十分。",
  "cnMarked": "比賽前，體育記者【做出預測】，認為主隊會贏至少十分。",
  "isHead": false,
  "level": null,
  "family": "predict"
 },
 {
  "word": "pregnancy",
  "answer": "pregnancy",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "懷孕；孕期",
  "en_def": "the time when a woman has a baby growing inside her",
  "sentence": "During her {{BLANK}}, my sister stopped drinking coffee and went to the doctor for a check-up every month.",
  "cn": "懷孕期間，我姐姐不再喝咖啡，並且每個月去醫生那裡做檢查。",
  "cnMarked": "【懷孕】期間，我姐姐不再喝咖啡，並且每個月去醫生那裡做檢查。",
  "isHead": true,
  "level": 4,
  "family": "pregnancy"
 },
 {
  "word": "pregnant",
  "answer": "pregnant",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "懷孕的",
  "en_def": "having a baby growing inside the body",
  "sentence": "A young man stood up on the bus and gave his seat to a {{BLANK}} woman who was holding a heavy bag.",
  "cn": "一位年輕男子在公車上站起來，把座位讓給一位提著重袋子的懷孕婦女。",
  "cnMarked": "一位年輕男子在公車上站起來，把座位讓給一位提著重袋子的【懷孕】婦女。",
  "isHead": true,
  "level": 4,
  "family": "pregnancy"
 },
 {
  "word": "get pregnant",
  "answer": "got pregnant",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "懷孕",
  "en_def": "to start having a baby growing inside the body",
  "sentence": "My aunt and uncle were married for five years before she {{BLANK}} with their first child.",
  "cn": "我阿姨和姨丈結婚五年後，她才懷了他們的第一個孩子。",
  "cnMarked": "我阿姨和姨丈結婚五年後，她才【懷了】他們的第一個孩子。",
  "isHead": false,
  "level": null,
  "family": "pregnancy"
 },
 {
  "word": "presentation",
  "answer": "presentation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "簡報；報告",
  "en_def": "a talk in which you show and explain something to a group",
  "sentence": "Each group will give a ten-minute {{BLANK}} about a country in Asia, using pictures, maps, and music.",
  "cn": "每一組將做一個十分鐘的簡報，介紹一個亞洲國家，使用圖片、地圖和音樂。",
  "cnMarked": "每一組將做一個十分鐘的【簡報】，介紹一個亞洲國家，使用圖片、地圖和音樂。",
  "isHead": true,
  "level": 4,
  "family": "presentation"
 },
 {
  "word": "give a presentation",
  "answer": "give a presentation",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "做簡報",
  "en_def": "to speak to a group to explain something",
  "sentence": "I was nervous about having to {{BLANK}} in English, but my classmates clapped loudly when I finished.",
  "cn": "我對要用英文做簡報感到緊張，但我講完時同學們大聲鼓掌。",
  "cnMarked": "我對要用英文【做簡報】感到緊張，但我講完時同學們大聲鼓掌。",
  "isHead": false,
  "level": null,
  "family": "presentation"
 },
 {
  "word": "present",
  "answer": "present",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "發表；呈現",
  "en_def": "to show or give something to people formally",
  "sentence": "The scientist will {{BLANK}} her new research at the meeting in Tokyo next month in front of experts from twenty countries.",
  "cn": "這位科學家下個月將在東京的會議上，在來自二十個國家的專家面前發表她的新研究。",
  "cnMarked": "這位科學家下個月將在東京的會議上，在來自二十個國家的專家面前【發表】她的新研究。",
  "isHead": false,
  "level": 1,
  "family": "presentation"
 },
 {
  "word": "presenter",
  "answer": "presenter",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "主持人；報告者",
  "en_def": "a person who introduces a TV or radio program, or gives a talk",
  "sentence": "The {{BLANK}} of the morning news show has such a warm voice that my grandmother watches it every day.",
  "cn": "晨間新聞節目的主持人聲音很溫暖，我奶奶每天都看。",
  "cnMarked": "晨間新聞節目的【主持人】聲音很溫暖，我奶奶每天都看。",
  "isHead": false,
  "level": null,
  "family": "presentation"
 },
 {
  "word": "preservation",
  "answer": "preservation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "保存；保護",
  "en_def": "the act of keeping something safe or in good condition",
  "sentence": "The {{BLANK}} of the old forest is important because many rare birds build their nests there every spring.",
  "cn": "這片古老森林的保護很重要，因為每年春天許多稀有鳥類都在那裡築巢。",
  "cnMarked": "這片古老森林的【保護】很重要，因為每年春天許多稀有鳥類都在那裡築巢。",
  "isHead": true,
  "level": 4,
  "family": "preservation"
 },
 {
  "word": "preserve",
  "answer": "preserve",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "保存；保護",
  "en_def": "to keep something safe or in good condition",
  "sentence": "Grandma uses sugar to {{BLANK}} the strawberries from her garden so that we can eat jam all winter long.",
  "cn": "奶奶用糖來保存她花園裡的草莓，這樣我們整個冬天都能吃到果醬。",
  "cnMarked": "奶奶用糖來【保存】她花園裡的草莓，這樣我們整個冬天都能吃到果醬。",
  "isHead": true,
  "level": 4,
  "family": "preservation"
 },
 {
  "word": "preservative",
  "answer": "preservative",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "防腐劑",
  "en_def": "a chemical added to food to keep it from going bad",
  "sentence": "This bread has no {{BLANK}} in it, so you should eat it within two days or keep it in the fridge.",
  "cn": "這種麵包不含防腐劑，所以你應該在兩天內吃完，或放進冰箱保存。",
  "cnMarked": "這種麵包不含【防腐劑】，所以你應該在兩天內吃完，或放進冰箱保存。",
  "isHead": false,
  "level": null,
  "family": "preservation"
 },
 {
  "word": "well-preserved",
  "answer": "well-preserved",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "保存良好的",
  "en_def": "kept in good condition over a long time",
  "sentence": "The {{BLANK}} temple looks almost the same as it did three hundred years ago, thanks to careful repairs.",
  "cn": "這座保存良好的寺廟看起來幾乎和三百年前一樣，這要歸功於細心的修繕。",
  "cnMarked": "這座【保存良好的】寺廟看起來幾乎和三百年前一樣，這要歸功於細心的修繕。",
  "isHead": false,
  "level": null,
  "family": "preservation"
 },
 {
  "word": "prevention",
  "answer": "prevention",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "預防",
  "en_def": "the act of stopping something bad from happening",
  "sentence": "Fire {{BLANK}} is everyone's job, so never leave the stove on when you go out, even for a few minutes.",
  "cn": "火災預防是每個人的責任，所以出門時絕不要讓爐火開著，即使只是幾分鐘。",
  "cnMarked": "火災【預防】是每個人的責任，所以出門時絕不要讓爐火開著，即使只是幾分鐘。",
  "isHead": true,
  "level": 4,
  "family": "prevention"
 },
 {
  "word": "prevent",
  "answer": "prevent",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "防止；預防",
  "en_def": "to stop something from happening",
  "sentence": "Brushing your teeth twice a day helps {{BLANK}} tooth decay, which is why dentists keep reminding us to do it.",
  "cn": "每天刷牙兩次有助於預防蛀牙，這就是為什麼牙醫一直提醒我們要刷牙。",
  "cnMarked": "每天刷牙兩次有助於【預防】蛀牙，這就是為什麼牙醫一直提醒我們要刷牙。",
  "isHead": false,
  "level": 3,
  "family": "prevention"
 },
 {
  "word": "prevent sb from doing",
  "answer": "prevented us from",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "阻止某人做某事",
  "en_def": "to stop someone from doing something",
  "sentence": "The heavy snow {{BLANK}} getting to the airport, so we missed our flight to Hokkaido.",
  "cn": "大雪使我們無法到達機場，所以我們錯過了飛往北海道的班機。",
  "cnMarked": "大雪【使我們無法】到達機場，所以我們錯過了飛往北海道的班機。",
  "isHead": false,
  "level": null,
  "family": "prevention"
 },
 {
  "word": "preventive",
  "answer": "preventive",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "預防性的",
  "en_def": "done to stop something bad from happening",
  "sentence": "A yearly health check is a {{BLANK}} measure that can find small problems before they become serious illnesses.",
  "cn": "每年的健康檢查是一種預防性措施，能在小問題變成嚴重疾病前發現它們。",
  "cnMarked": "每年的健康檢查是一種【預防性】措施，能在小問題變成嚴重疾病前發現它們。",
  "isHead": false,
  "level": 6,
  "family": "prevention"
 },
 {
  "word": "prime",
  "answer": "prime",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "主要的；最好的",
  "en_def": "most important; of the best quality",
  "sentence": "Heavy traffic is the {{BLANK}} reason why many people in Taipei choose to ride the MRT instead of driving.",
  "cn": "交通擁擠是許多台北人選擇搭捷運而不開車的主要原因。",
  "cnMarked": "交通擁擠是許多台北人選擇搭捷運而不開車的【主要】原因。",
  "isHead": true,
  "level": 4,
  "family": "prime"
 },
 {
  "word": "prime minister",
  "answer": "prime minister",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "首相；總理",
  "en_def": "the leader of the government in some countries",
  "sentence": "The {{BLANK}} of Japan will visit three countries in Europe next week to talk about trade and energy.",
  "cn": "日本首相下週將訪問歐洲三個國家，討論貿易和能源問題。",
  "cnMarked": "日本【首相】下週將訪問歐洲三個國家，討論貿易和能源問題。",
  "isHead": false,
  "level": null,
  "family": "prime"
 },
 {
  "word": "primary",
  "answer": "primary",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "主要的；初級的",
  "en_def": "most important; main; first",
  "sentence": "Her {{BLANK}} goal this year is to pass the English test, so she practices listening for an hour every day.",
  "cn": "她今年的主要目標是通過英文檢定，所以她每天練習聽力一小時。",
  "cnMarked": "她今年的【主要】目標是通過英文檢定，所以她每天練習聽力一小時。",
  "isHead": false,
  "level": 2,
  "family": "prime"
 },
 {
  "word": "in one's prime",
  "answer": "in her prime",
  "nblanks": 3,
  "pos": "phr.",
  "cn_def": "在全盛時期",
  "en_def": "at the time of life when you are strongest or most successful",
  "sentence": "The singer was {{BLANK}} in the 1990s, when every one of her albums sold more than a million copies.",
  "cn": "這位歌手在 1990 年代正值全盛時期，當時她每張專輯都賣超過一百萬張。",
  "cnMarked": "這位歌手在 1990 年代正值【全盛時期】，當時她每張專輯都賣超過一百萬張。",
  "isHead": false,
  "level": null,
  "family": "prime"
 },
 {
  "word": "primitive",
  "answer": "primitive",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "原始的",
  "en_def": "belonging to a very early stage of human history",
  "sentence": "Scientists found tools made by {{BLANK}} people in a cave in the mountains, along with drawings of animals on the walls.",
  "cn": "科學家在山上的一個洞穴裡發現了原始人類製作的工具，還有牆上的動物圖畫。",
  "cnMarked": "科學家在山上的一個洞穴裡發現了【原始】人類製作的工具，還有牆上的動物圖畫。",
  "isHead": true,
  "level": 4,
  "family": "primitive"
 },
 {
  "word": "primitive",
  "answer": "primitive",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "簡陋的；簡單的",
  "en_def": "very simple and basic, without modern comforts",
  "sentence": "The cabin was quite {{BLANK}}, with no electricity or running water, but the view of the lake was wonderful.",
  "cn": "這間小屋相當簡陋，沒有電也沒有自來水，但湖景美極了。",
  "cnMarked": "這間小屋相當【簡陋】，沒有電也沒有自來水，但湖景美極了。",
  "isHead": false,
  "level": 4,
  "family": "primitive"
 },
 {
  "word": "primitive society",
  "answer": "primitive society",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "原始社會",
  "en_def": "a human group living in a very early and simple way",
  "sentence": "In a {{BLANK}}, people hunted animals and gathered fruit instead of growing food on farms.",
  "cn": "在原始社會裡，人們打獵和採集水果，而不是在農場種植食物。",
  "cnMarked": "在【原始社會】裡，人們打獵和採集水果，而不是在農場種植食物。",
  "isHead": false,
  "level": null,
  "family": "primitive"
 },
 {
  "word": "priority",
  "answer": "priority",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "優先事項；優先",
  "en_def": "something that is more important than other things",
  "sentence": "Safety is our first {{BLANK}}, so every worker must wear a helmet before entering the building site.",
  "cn": "安全是我們的第一優先事項，所以每位工人進入工地前都必須戴安全帽。",
  "cnMarked": "安全是我們的第一【優先事項】，所以每位工人進入工地前都必須戴安全帽。",
  "isHead": true,
  "level": 4,
  "family": "priority"
 },
 {
  "word": "top priority",
  "answer": "top priority",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "首要任務",
  "en_def": "the most important thing to do",
  "sentence": "Finding clean water for the villagers became the {{BLANK}} after the typhoon destroyed the pipes.",
  "cn": "颱風摧毀水管後，為村民找到乾淨的水成了首要任務。",
  "cnMarked": "颱風摧毀水管後，為村民找到乾淨的水成了【首要任務】。",
  "isHead": false,
  "level": null,
  "family": "priority"
 },
 {
  "word": "give priority to",
  "answer": "give priority to",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "優先考慮；優先處理",
  "en_def": "to treat something as more important than other things",
  "sentence": "Hospitals must {{BLANK}} patients whose lives are in danger, even if other people have waited longer.",
  "cn": "醫院必須優先處理生命有危險的病人，即使其他人等得比較久。",
  "cnMarked": "醫院必須【優先處理】生命有危險的病人，即使其他人等得比較久。",
  "isHead": false,
  "level": null,
  "family": "priority"
 },
 {
  "word": "prior",
  "answer": "prior",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "先前的；事先的",
  "en_def": "happening or existing before something else",
  "sentence": "You cannot enter the laboratory without {{BLANK}} permission from the professor, so please send her an email first.",
  "cn": "沒有教授事先的許可，你不能進入實驗室，所以請先寄電子郵件給她。",
  "cnMarked": "沒有教授【事先】的許可，你不能進入實驗室，所以請先寄電子郵件給她。",
  "isHead": false,
  "level": 5,
  "family": "priority"
 },
 {
  "word": "prioritize",
  "answer": "prioritize",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "優先處理；排定優先順序",
  "en_def": "to decide which things are most important and do them first",
  "sentence": "When you have too much homework, learn to {{BLANK}} and finish the most difficult subject while your mind is still fresh.",
  "cn": "當你功課太多時，要學會排定優先順序，趁頭腦還清醒時先完成最難的科目。",
  "cnMarked": "當你功課太多時，要學會【排定優先順序】，趁頭腦還清醒時先完成最難的科目。",
  "isHead": false,
  "level": null,
  "family": "priority"
 },
 {
  "word": "privacy",
  "answer": "privacy",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "隱私",
  "en_def": "the state of being alone and not watched or bothered by others",
  "sentence": "Teenagers need some {{BLANK}}, so my parents always knock on my door before they come into my room.",
  "cn": "青少年需要一些隱私，所以我爸媽進我房間前總是會先敲門。",
  "cnMarked": "青少年需要一些【隱私】，所以我爸媽進我房間前總是會先敲門。",
  "isHead": true,
  "level": 4,
  "family": "privacy"
 },
 {
  "word": "private",
  "answer": "private",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "私人的；私密的",
  "en_def": "for one person or group only; not public",
  "sentence": "This is a {{BLANK}} beach, so only the people who live in the apartments nearby are allowed to swim here.",
  "cn": "這是私人海灘，所以只有住在附近公寓的人可以在這裡游泳。",
  "cnMarked": "這是【私人】海灘，所以只有住在附近公寓的人可以在這裡游泳。",
  "isHead": false,
  "level": 2,
  "family": "privacy"
 },
 {
  "word": "in private",
  "answer": "in private",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "私下地",
  "en_def": "with nobody else present",
  "sentence": "The teacher asked to speak with Tom {{BLANK}} after class, because she did not want to embarrass him in front of everyone.",
  "cn": "老師要求下課後私下和湯姆談談，因為她不想在大家面前讓他難堪。",
  "cnMarked": "老師要求下課後【私下】和湯姆談談，因為她不想在大家面前讓他難堪。",
  "isHead": false,
  "level": null,
  "family": "privacy"
 },
 {
  "word": "privately",
  "answer": "privately",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "私下地；私人地",
  "en_def": "in a way that is not public",
  "sentence": "The two leaders talked {{BLANK}} for an hour before they walked out to answer questions from the reporters.",
  "cn": "兩位領導人私下談了一小時，然後才走出來回答記者的問題。",
  "cnMarked": "兩位領導人【私下】談了一小時，然後才走出來回答記者的問題。",
  "isHead": false,
  "level": null,
  "family": "privacy"
 },
 {
  "word": "privilege",
  "answer": "privilege",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "特權；殊榮",
  "en_def": "a special right or advantage that only some people have",
  "sentence": "In the past, only rich families had the {{BLANK}} of sending their children to school, while poor children worked.",
  "cn": "過去只有富裕家庭才有送孩子上學的特權，而貧窮的孩子則要工作。",
  "cnMarked": "過去只有富裕家庭才有送孩子上學的【特權】，而貧窮的孩子則要工作。",
  "isHead": true,
  "level": 4,
  "family": "privilege"
 },
 {
  "word": "privileged",
  "answer": "privileged",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "享有特權的；優渥的",
  "en_def": "having special rights or advantages",
  "sentence": "Students from {{BLANK}} families often have private tutors, so they get extra help with difficult subjects.",
  "cn": "來自優渥家庭的學生常有家教，所以他們在困難科目上能獲得額外幫助。",
  "cnMarked": "來自【優渥】家庭的學生常有家教，所以他們在困難科目上能獲得額外幫助。",
  "isHead": false,
  "level": null,
  "family": "privilege"
 },
 {
  "word": "have the privilege of",
  "answer": "had the privilege of",
  "nblanks": 4,
  "pos": "v.phr.",
  "cn_def": "有幸做某事",
  "en_def": "to be lucky enough to be able to do something special",
  "sentence": "Last year our class {{BLANK}} meeting a famous writer who answered all of our questions about her books.",
  "cn": "去年我們班有幸見到一位著名的作家，她回答了我們關於她作品的所有問題。",
  "cnMarked": "去年我們班【有幸】見到一位著名的作家，她回答了我們關於她作品的所有問題。",
  "isHead": false,
  "level": null,
  "family": "privilege"
 },
 {
  "word": "procedure",
  "answer": "procedure",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "程序；步驟",
  "en_def": "the correct or usual way of doing something",
  "sentence": "Follow the safety {{BLANK}} carefully: put on your goggles first, and never touch the chemicals with your bare hands.",
  "cn": "請仔細遵守安全程序：先戴上護目鏡，而且絕對不要用手直接碰化學藥品。",
  "cnMarked": "請仔細遵守安全【程序】：先戴上護目鏡，而且絕對不要用手直接碰化學藥品。",
  "isHead": true,
  "level": 4,
  "family": "procedure"
 },
 {
  "word": "proceed",
  "answer": "proceed",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "繼續進行；前進",
  "en_def": "to continue doing something; to go on",
  "sentence": "After the short break, the judge told everyone to sit down so that the meeting could {{BLANK}}.",
  "cn": "短暫休息後，法官請大家坐下，好讓會議可以繼續進行。",
  "cnMarked": "短暫休息後，法官請大家坐下，好讓會議可以【繼續進行】。",
  "isHead": true,
  "level": 4,
  "family": "procedure"
 },
 {
  "word": "proceed with",
  "answer": "proceed with",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "繼續進行（某事）",
  "en_def": "to continue with a plan or action",
  "sentence": "Even though it was raining, the school decided to {{BLANK}} the sports day as planned.",
  "cn": "儘管下著雨，學校還是決定按原計畫繼續舉行運動會。",
  "cnMarked": "儘管下著雨，學校還是決定按原計畫【繼續舉行】運動會。",
  "isHead": false,
  "level": null,
  "family": "procedure"
 },
 {
  "word": "process",
  "answer": "process",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "過程；流程",
  "en_def": "a series of actions done to achieve something",
  "sentence": "Learning a language is a slow {{BLANK}}, so do not be upset if you still make mistakes after a year.",
  "cn": "學習語言是一個緩慢的過程，所以如果一年後你還會犯錯，別難過。",
  "cnMarked": "學習語言是一個緩慢的【過程】，所以如果一年後你還會犯錯，別難過。",
  "isHead": false,
  "level": 3,
  "family": "procedure"
 },
 {
  "word": "process",
  "answer": "process",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "處理；加工",
  "en_def": "to deal with information or materials in a series of steps",
  "sentence": "It takes the office about two weeks to {{BLANK}} a passport application, so apply early if you travel in July.",
  "cn": "辦公室大約需要兩週來處理護照申請，所以如果你七月要旅行，請提早申請。",
  "cnMarked": "辦公室大約需要兩週來【處理】護照申請，所以如果你七月要旅行，請提早申請。",
  "isHead": false,
  "level": 3,
  "family": "procedure"
 },
 {
  "word": "productive",
  "answer": "productive",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "多產的；有效率的",
  "en_def": "making or achieving a lot",
  "sentence": "I am most {{BLANK}} early in the morning, so I do my hardest homework before breakfast.",
  "cn": "我在清晨最有效率，所以我在早餐前做最難的功課。",
  "cnMarked": "我在清晨【最有效率】，所以我在早餐前做最難的功課。",
  "isHead": true,
  "level": 4,
  "family": "productive"
 },
 {
  "word": "productivity",
  "answer": "productivity",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "生產力",
  "en_def": "the rate at which work is done or things are made",
  "sentence": "The factory's {{BLANK}} doubled after the new machines were installed, so the workers finished early most days.",
  "cn": "新機器安裝後，工廠的生產力倍增，所以工人大多數日子都提早完工。",
  "cnMarked": "新機器安裝後，工廠的【生產力】倍增，所以工人大多數日子都提早完工。",
  "isHead": false,
  "level": 5,
  "family": "productive"
 },
 {
  "word": "produce",
  "answer": "produce",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "生產；製造",
  "en_def": "to make or grow something",
  "sentence": "This small farm in Yunlin can {{BLANK}} enough rice every year to feed about five hundred families.",
  "cn": "雲林這座小農場每年能生產足夠餵飽大約五百個家庭的稻米。",
  "cnMarked": "雲林這座小農場每年能【生產】足夠餵飽大約五百個家庭的稻米。",
  "isHead": false,
  "level": 2,
  "family": "productive"
 },
 {
  "word": "product",
  "answer": "product",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "產品",
  "en_def": "something that is made or grown to be sold",
  "sentence": "The company's newest {{BLANK}} is a water bottle that keeps drinks cold for twenty-four hours, even in summer.",
  "cn": "這家公司最新的產品是一個即使在夏天也能讓飲料保冷二十四小時的水瓶。",
  "cnMarked": "這家公司最新的【產品】是一個即使在夏天也能讓飲料保冷二十四小時的水瓶。",
  "isHead": false,
  "level": 3,
  "family": "productive"
 },
 {
  "word": "production",
  "answer": "production",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "生產；製作",
  "en_def": "the process of making or growing things in large amounts",
  "sentence": "The {{BLANK}} of electric cars has grown quickly, and the company now builds a thousand of them every day.",
  "cn": "電動車的生產快速成長，這家公司現在每天製造一千輛。",
  "cnMarked": "電動車的【生產】快速成長，這家公司現在每天製造一千輛。",
  "isHead": false,
  "level": 2,
  "family": "productive"
 },
 {
  "word": "profession",
  "answer": "profession",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "職業；專業",
  "en_def": "a job that needs special training, such as teaching or medicine",
  "sentence": "Nursing is a caring {{BLANK}}, and my cousin says helping sick people get better makes her long hours worth it.",
  "cn": "護理是一個充滿關懷的職業，我表姐說幫助病人康復讓她漫長的工時變得值得。",
  "cnMarked": "護理是一個充滿關懷的【職業】，我表姐說幫助病人康復讓她漫長的工時變得值得。",
  "isHead": true,
  "level": 4,
  "family": "profession"
 },
 {
  "word": "professional",
  "answer": "professional",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "專業的；職業的",
  "en_def": "connected with a job that needs special training; done for money",
  "sentence": "You should get {{BLANK}} advice from a lawyer before you sign a contract for the new apartment.",
  "cn": "在簽新公寓的合約之前，你應該先向律師尋求專業建議。",
  "cnMarked": "在簽新公寓的合約之前，你應該先向律師尋求【專業】建議。",
  "isHead": true,
  "level": 4,
  "family": "profession"
 },
 {
  "word": "professional",
  "answer": "professional",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "專業人士；職業選手",
  "en_def": "a person who does a job that needs special training; a paid player",
  "sentence": "After winning several big tournaments, the young golfer decided to become a {{BLANK}} at the age of eighteen.",
  "cn": "贏得幾場大型錦標賽後，這位年輕的高爾夫選手決定在十八歲時成為職業選手。",
  "cnMarked": "贏得幾場大型錦標賽後，這位年輕的高爾夫選手決定在十八歲時成為【職業選手】。",
  "isHead": false,
  "level": 4,
  "family": "profession"
 },
 {
  "word": "professionally",
  "answer": "professionally",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "專業地",
  "en_def": "in a way that shows skill and training",
  "sentence": "The waiter handled the angry customer very {{BLANK}}, staying calm and polite until the problem was solved.",
  "cn": "服務生非常專業地應對那位生氣的顧客，保持冷靜有禮直到問題解決。",
  "cnMarked": "服務生非常【專業地】應對那位生氣的顧客，保持冷靜有禮直到問題解決。",
  "isHead": false,
  "level": null,
  "family": "profession"
 },
 {
  "word": "professor",
  "answer": "professor",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "教授",
  "en_def": "a teacher of the highest rank at a university",
  "sentence": "My chemistry {{BLANK}} explains difficult ideas so clearly that even students who hate science enjoy her class.",
  "cn": "我的化學教授把困難的概念解釋得很清楚，連討厭科學的學生都喜歡她的課。",
  "cnMarked": "我的化學【教授】把困難的概念解釋得很清楚，連討厭科學的學生都喜歡她的課。",
  "isHead": false,
  "level": 3,
  "family": "profession"
 },
 {
  "word": "profitable",
  "answer": "profitable",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "有利可圖的；獲利的",
  "en_def": "making money; bringing an advantage",
  "sentence": "The night market stand was so {{BLANK}} that the owner opened a second one on the other side of town.",
  "cn": "這個夜市攤位非常有利可圖，老闆在城市另一邊開了第二家。",
  "cnMarked": "這個夜市攤位非常【有利可圖】，老闆在城市另一邊開了第二家。",
  "isHead": true,
  "level": 4,
  "family": "profitable"
 },
 {
  "word": "profit",
  "answer": "profit",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "利潤",
  "en_def": "the money you make after paying your costs",
  "sentence": "The students sold cookies at the fair and made a {{BLANK}} of three thousand dollars for the animal shelter.",
  "cn": "學生們在園遊會賣餅乾，為動物收容所賺到三千元的利潤。",
  "cnMarked": "學生們在園遊會賣餅乾，為動物收容所賺到三千元的【利潤】。",
  "isHead": false,
  "level": 3,
  "family": "profitable"
 },
 {
  "word": "profit from",
  "answer": "profit from",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "從…獲益",
  "en_def": "to get an advantage or money from something",
  "sentence": "Everyone in the class can {{BLANK}} reading more English stories, not just the students who plan to study abroad.",
  "cn": "班上每個人都能從多讀英文故事中獲益，不只是打算出國留學的學生。",
  "cnMarked": "班上每個人都能【從】多讀英文故事中【獲益】，不只是打算出國留學的學生。",
  "isHead": false,
  "level": null,
  "family": "profitable"
 },
 {
  "word": "make a profit",
  "answer": "make a profit",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "獲利；賺錢",
  "en_def": "to earn more money than you spend",
  "sentence": "The new café did not {{BLANK}} in its first year, but the owner believes business will improve this summer.",
  "cn": "新咖啡館第一年沒有獲利，但老闆相信今年夏天生意會好轉。",
  "cnMarked": "新咖啡館第一年沒有【獲利】，但老闆相信今年夏天生意會好轉。",
  "isHead": false,
  "level": null,
  "family": "profitable"
 },
 {
  "word": "prominent",
  "answer": "prominent",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "著名的；重要的",
  "en_def": "important and well known",
  "sentence": "Several {{BLANK}} doctors spoke at the meeting about the dangers of sitting too long in front of screens.",
  "cn": "幾位著名的醫生在會議上談到長時間坐在螢幕前的危險。",
  "cnMarked": "幾位【著名的】醫生在會議上談到長時間坐在螢幕前的危險。",
  "isHead": true,
  "level": 4,
  "family": "prominent"
 },
 {
  "word": "prominent",
  "answer": "prominent",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "顯眼的；突出的",
  "en_def": "easy to see; sticking out",
  "sentence": "The red lighthouse is the most {{BLANK}} building in the harbor, and sailors can see it from miles away.",
  "cn": "這座紅色燈塔是港口裡最顯眼的建築，水手們從幾英里外就能看到它。",
  "cnMarked": "這座紅色燈塔是港口裡最【顯眼的】建築，水手們從幾英里外就能看到它。",
  "isHead": false,
  "level": 4,
  "family": "prominent"
 },
 {
  "word": "prominence",
  "answer": "prominence",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "卓越；顯著；聲望",
  "en_def": "the state of being important or well known",
  "sentence": "The young actor rose to {{BLANK}} after his first movie became a surprise hit across Asia.",
  "cn": "這位年輕演員在他的第一部電影意外在亞洲大受歡迎後聲名大噪。",
  "cnMarked": "這位年輕演員在他的第一部電影意外在亞洲大受歡迎後【聲名大噪】。",
  "isHead": false,
  "level": null,
  "family": "prominent"
 },
 {
  "word": "promising",
  "answer": "promising",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "有前途的；有希望的",
  "en_def": "likely to be successful in the future",
  "sentence": "The doctors say the new treatment looks {{BLANK}}, and patients in the first test group are already feeling better.",
  "cn": "醫生說這種新療法看起來很有希望，第一組測試的病人已經感覺好多了。",
  "cnMarked": "醫生說這種新療法看起來【很有希望】，第一組測試的病人已經感覺好多了。",
  "isHead": true,
  "level": 4,
  "family": "promising"
 },
 {
  "word": "promise",
  "answer": "promise",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "承諾；諾言",
  "en_def": "a statement that you will certainly do something",
  "sentence": "My father made a {{BLANK}} to take us to the beach this weekend if we finished all our homework by Friday.",
  "cn": "我爸爸做了一個承諾，如果我們星期五前做完所有功課，週末就帶我們去海邊。",
  "cnMarked": "我爸爸做了一個【承諾】，如果我們星期五前做完所有功課，週末就帶我們去海邊。",
  "isHead": false,
  "level": 2,
  "family": "promising"
 },
 {
  "word": "promise",
  "answer": "promise",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "承諾；答應",
  "en_def": "to say that you will certainly do something",
  "sentence": "I {{BLANK}} to call my grandmother every Sunday evening, and I have not missed a single week since March.",
  "cn": "我答應每個星期天晚上打電話給奶奶，從三月以來我沒有漏掉任何一週。",
  "cnMarked": "我【答應】每個星期天晚上打電話給奶奶，從三月以來我沒有漏掉任何一週。",
  "isHead": false,
  "level": 2,
  "family": "promising"
 },
 {
  "word": "keep a promise",
  "answer": "keep a promise",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "信守承諾",
  "en_def": "to do what you said you would do",
  "sentence": "A good friend always tries to {{BLANK}}, even when it is not easy or convenient.",
  "cn": "好朋友總是努力信守承諾，即使那並不容易或方便。",
  "cnMarked": "好朋友總是努力【信守承諾】，即使那並不容易或方便。",
  "isHead": false,
  "level": null,
  "family": "promising"
 }
];
const MCQS = [
 {
  "q": "The ring has been in my family for over a hundred years. It first came into my great-grandmother's ______ on her wedding day in the spring of 1920.",
  "options": [
   "procedure",
   "possession",
   "privilege",
   "privacy"
  ],
  "answer": 1,
  "vocabIndex": 0
 },
 {
  "q": "I want to send this heavy box of books to my cousin in Canada. The clerk said the ______ would cost more than the books themselves.",
  "options": [
   "profession",
   "prediction",
   "privacy",
   "postage"
  ],
  "answer": 3,
  "vocabIndex": 5
 },
 {
  "q": "The old bridge has cracks in it, and heavy trucks still cross it every day. Engineers warned the city about the ______ danger before someone gets hurt.",
  "options": [
   "pregnant",
   "potential",
   "precise",
   "primitive"
  ],
  "answer": 1,
  "vocabIndex": 9
 },
 {
  "q": "The new watch is never late, not even by a second. Scientists need such ______ tools when they measure the speed of light in their experiments.",
  "options": [
   "promising",
   "profitable",
   "precise",
   "prime"
  ],
  "answer": 2,
  "vocabIndex": 13
 },
 {
  "q": "Weather reports are much better than they were fifty years ago. Today scientists can ______ a typhoon's path several days before it reaches the island of Taiwan.",
  "options": [
   "possess",
   "preserve",
   "proceed",
   "predict"
  ],
  "answer": 3,
  "vocabIndex": 17
 },
 {
  "q": "Last month, the old fisherman said we would have a very wet summer. His ______ came true, because it has rained almost every day since June.",
  "options": [
   "prediction",
   "procedure",
   "prevention",
   "presentation"
  ],
  "answer": 0,
  "vocabIndex": 18
 },
 {
  "q": "During the nine months before her baby was born, my aunt ate carefully and walked every day. Her doctor said she had a very healthy ______.",
  "options": [
   "privacy",
   "priority",
   "profession",
   "pregnancy"
  ],
  "answer": 3,
  "vocabIndex": 22
 },
 {
  "q": "Mrs. Chen is going to have a baby in March, so her stomach is getting bigger. Since she is ______, she should not carry heavy boxes at work.",
  "options": [
   "pregnant",
   "productive",
   "primitive",
   "prominent"
  ],
  "answer": 0,
  "vocabIndex": 23
 },
 {
  "q": "Each group has to stand in front of the class and explain its science project. Our ______ will use ten slides and a short video to show our results.",
  "options": [
   "possession",
   "presentation",
   "preservation",
   "prevention"
  ],
  "answer": 1,
  "vocabIndex": 25
 },
 {
  "q": "The 300-year-old temple is in danger of falling down. The city has spent millions of dollars on the ______ of this important and beautiful historical building.",
  "options": [
   "procedure",
   "productivity",
   "preservation",
   "prediction"
  ],
  "answer": 2,
  "vocabIndex": 29
 },
 {
  "q": "Before there were refrigerators, people used salt and sunlight to keep fish from going bad. These old ways to ______ food are still used in some villages.",
  "options": [
   "predict",
   "preserve",
   "proceed",
   "prevent"
  ],
  "answer": 1,
  "vocabIndex": 30
 },
 {
  "q": "Washing your hands often and wearing a mask on the bus can stop many illnesses before they start. Doctors always say that ______ is better than cure.",
  "options": [
   "presentation",
   "promise",
   "possession",
   "prevention"
  ],
  "answer": 3,
  "vocabIndex": 33
 },
 {
  "q": "Our restaurant is on the busiest corner of the night market, right next to the MRT exit. This ______ location brings us hundreds of customers every evening.",
  "options": [
   "prime",
   "private",
   "precise",
   "pregnant"
  ],
  "answer": 0,
  "vocabIndex": 37
 },
 {
  "q": "Thousands of years ago, people lived in caves and made tools from stones and bones. Life in those ______ times was hard, and few people lived past forty.",
  "options": [
   "profitable",
   "primitive",
   "potential",
   "professional"
  ],
  "answer": 1,
  "vocabIndex": 41
 },
 {
  "q": "With exams only two weeks away, Linda has stopped watching TV and playing games. Right now, studying is her top ______, and everything else can wait.",
  "options": [
   "priority",
   "privilege",
   "procedure",
   "prediction"
  ],
  "answer": 0,
  "vocabIndex": 44
 },
 {
  "q": "My little sister reads my diary and tells my parents everything I write. I wish she would respect my ______ and stay out of my room.",
  "options": [
   "possession",
   "prevention",
   "privacy",
   "postage"
  ],
  "answer": 2,
  "vocabIndex": 49
 },
 {
  "q": "Only the top three students in each grade may use the special reading room. Jenny says it is a great ______ to study in such a quiet place.",
  "options": [
   "profession",
   "prediction",
   "priority",
   "privilege"
  ],
  "answer": 3,
  "vocabIndex": 53
 },
 {
  "q": "Before the flight, the passengers must check in, show their passports, and put their bags through a machine. This ______ takes about an hour at a busy airport.",
  "options": [
   "procedure",
   "profession",
   "prediction",
   "preservation"
  ],
  "answer": 0,
  "vocabIndex": 56
 },
 {
  "q": "The teacher waited until the room was completely quiet. Then she told us to ______ with the test and reminded us that we had only forty minutes.",
  "options": [
   "predict",
   "possess",
   "proceed",
   "preserve"
  ],
  "answer": 2,
  "vocabIndex": 57
 },
 {
  "q": "I finished my homework, cleaned my room, and read fifty pages of a book before noon. It was the most ______ morning I have had all year.",
  "options": [
   "productive",
   "prominent",
   "primitive",
   "pregnant"
  ],
  "answer": 0,
  "vocabIndex": 61
 },
 {
  "q": "Teaching is hard work, but my aunt says she would never do anything else. She loves her ______ because she can watch her students grow year after year.",
  "options": [
   "pregnancy",
   "profession",
   "privacy",
   "postage"
  ],
  "answer": 1,
  "vocabIndex": 66
 },
 {
  "q": "Joe used to play basketball only on weekends with his friends. Now he gets paid to play for a team in the city, so he is a ______ player.",
  "options": [
   "pregnant",
   "primitive",
   "professional",
   "precise"
  ],
  "answer": 2,
  "vocabIndex": 67
 },
 {
  "q": "My uncle opened a small bubble tea shop near the university two years ago. The business has been so ______ that he is now opening a second shop.",
  "options": [
   "primitive",
   "prime",
   "pregnant",
   "profitable"
  ],
  "answer": 3,
  "vocabIndex": 71
 },
 {
  "q": "Dr. Lee has written five books and is often invited to speak on television about science. She is one of the most ______ scientists in Taiwan today.",
  "options": [
   "pregnant",
   "productive",
   "prominent",
   "precise"
  ],
  "answer": 2,
  "vocabIndex": 75
 },
 {
  "q": "Kevin is only fifteen, but he already plays the violin better than most adults. His teacher says he is the most ______ young musician she has ever taught.",
  "options": [
   "promising",
   "profitable",
   "pregnant",
   "primitive"
  ],
  "answer": 0,
  "vocabIndex": 78
 },
 {
  "q": "A good doctor needs more than knowledge from books. He or she must also ______ the patience to listen carefully to every patient's story, no matter how long it is.",
  "options": [
   "predict",
   "proceed",
   "possess",
   "preserve"
  ],
  "answer": 2,
  "vocabIndex": 2
 },
 {
  "q": "The new fence around the pool is nearly two meters high and has a lock on the gate. It is there to ______ small children from falling into the water.",
  "options": [
   "proceed",
   "prevent",
   "predict",
   "produce"
  ],
  "answer": 1,
  "vocabIndex": 34
 },
 {
  "q": "This beach belongs to the hotel, and only its guests may use it. Because it is ______, you will not see the crowds that fill the public beaches.",
  "options": [
   "productive",
   "prime",
   "professional",
   "private"
  ],
  "answer": 3,
  "vocabIndex": 50
 },
 {
  "q": "The students bought cookies for 100 dollars and sold them at the school fair for 250. They gave the ______ of 150 dollars to an animal shelter.",
  "options": [
   "postage",
   "profit",
   "privilege",
   "priority"
  ],
  "answer": 1,
  "vocabIndex": 72
 },
 {
  "q": "Dad was angry when I came home two hours late last Saturday. Before he let me go out again, I had to ______ that I would be back before ten.",
  "options": [
   "promise",
   "preserve",
   "predict",
   "prevent"
  ],
  "answer": 0,
  "vocabIndex": 79
 }
];
const LOOKUP = {};
VOCAB.forEach(v => { const key = v.word.toLowerCase(); const sense = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def };
  if (LOOKUP[key]) LOOKUP[key].combined.push(sense); else LOOKUP[key] = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def, combined: [sense] }; });
const EXTRA_GLOSSES = {};