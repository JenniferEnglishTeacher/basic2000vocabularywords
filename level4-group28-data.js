// 學測6000字 Level 4 Group 28 (nutritious-oval) — word-family edition
const QUIZ_CONFIG = {
  groupName: "6000字 L4 Group 28 - nutritious – oval (word family)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};
const VOCAB = [
 {
  "word": "nutritious",
  "answer": "nutritious",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "有營養的",
  "en_def": "full of the things your body needs to stay healthy",
  "sentence": "Brown rice and fresh vegetables are more {{BLANK}} than instant noodles, so my mother cooks them for dinner almost every night.",
  "cn": "糙米和新鮮蔬菜比泡麵更有營養，所以我媽媽幾乎每天晚餐都煮這些。",
  "cnMarked": "糙米和新鮮蔬菜比泡麵更【有營養】，所以我媽媽幾乎每天晚餐都煮這些。",
  "isHead": true,
  "level": 4,
  "family": "nutritious"
 },
 {
  "word": "nutrition",
  "answer": "nutrition",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "營養",
  "en_def": "the food you eat and the way it keeps your body healthy",
  "sentence": "Good {{BLANK}} is important for teenagers because their bodies are still growing and need enough protein and vitamins every day.",
  "cn": "良好的營養對青少年很重要，因為他們的身體仍在成長，每天都需要足夠的蛋白質和維生素。",
  "cnMarked": "良好的【營養】對青少年很重要，因為他們的身體仍在成長，每天都需要足夠的蛋白質和維生素。",
  "isHead": false,
  "level": 5,
  "family": "nutritious"
 },
 {
  "word": "nutrient",
  "answer": "nutrients",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "養分；營養素",
  "en_def": "a substance in food that living things need to grow",
  "sentence": "Plants take in water and {{BLANK}} from the soil through their roots, which is why farmers add fertilizer to their fields.",
  "cn": "植物透過根部從土壤中吸收水分和養分，這就是為什麼農夫要在田裡施肥。",
  "cnMarked": "植物透過根部從土壤中吸收水分和【養分】，這就是為什麼農夫要在田裡施肥。",
  "isHead": false,
  "level": 5,
  "family": "nutritious"
 },
 {
  "word": "nutritional",
  "answer": "nutritional",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "營養的；營養方面的",
  "en_def": "connected with nutrition",
  "sentence": "Read the {{BLANK}} information on the package before you buy snacks, because some of them contain a lot of sugar and salt.",
  "cn": "買零食前先看包裝上的營養標示，因為有些零食含有大量的糖和鹽。",
  "cnMarked": "買零食前先看包裝上的【營養】標示，因為有些零食含有大量的糖和鹽。",
  "isHead": false,
  "level": null,
  "family": "nutritious"
 },
 {
  "word": "obedience",
  "answer": "obedience",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "服從；順從",
  "en_def": "doing what you are told to do",
  "sentence": "Soldiers are trained to show complete {{BLANK}} to their officers, so they follow every order quickly without asking any questions.",
  "cn": "士兵被訓練要對長官完全服從，所以他們會迅速執行每個命令而不多問。",
  "cnMarked": "士兵被訓練要對長官完全【服從】，所以他們會迅速執行每個命令而不多問。",
  "isHead": true,
  "level": 4,
  "family": "obedience"
 },
 {
  "word": "obedient",
  "answer": "obedient",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "聽話的；順從的",
  "en_def": "doing what you are told to do",
  "sentence": "Our new puppy is very {{BLANK}}; it sits down, stays, and comes back as soon as my sister calls its name.",
  "cn": "我們的新小狗非常聽話；只要我妹妹叫牠的名字，牠就會坐下、待著不動，然後跑回來。",
  "cnMarked": "我們的新小狗非常【聽話】；只要我妹妹叫牠的名字，牠就會坐下、待著不動，然後跑回來。",
  "isHead": true,
  "level": 4,
  "family": "obedience"
 },
 {
  "word": "obediently",
  "answer": "obediently",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "順從地",
  "en_def": "in a way that shows you do what you are told",
  "sentence": "The children lined up {{BLANK}} behind their teacher and walked quietly to the school bus without pushing anyone.",
  "cn": "孩子們順從地在老師身後排好隊，安靜地走向校車，沒有推擠任何人。",
  "cnMarked": "孩子們【順從地】在老師身後排好隊，安靜地走向校車，沒有推擠任何人。",
  "isHead": false,
  "level": null,
  "family": "obedience"
 },
 {
  "word": "obey",
  "answer": "obey",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "服從；遵守",
  "en_def": "to do what a person, law, or rule tells you to do",
  "sentence": "Students must {{BLANK}} the school rules, and anyone who breaks them more than twice will have to stay after class.",
  "cn": "學生必須遵守校規，任何違反超過兩次的人都得在放學後留下來。",
  "cnMarked": "學生必須【遵守】校規，任何違反超過兩次的人都得在放學後留下來。",
  "isHead": false,
  "level": 2,
  "family": "obedience"
 },
 {
  "word": "disobey",
  "answer": "disobey",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "違抗；不服從",
  "en_def": "to refuse to do what you are told to do",
  "sentence": "If you {{BLANK}} your coach and skip practice again, you will not be allowed to play in the final game next week.",
  "cn": "如果你再違抗教練、不來練習，下週的決賽你就不能上場。",
  "cnMarked": "如果你再【違抗】教練、不來練習，下週的決賽你就不能上場。",
  "isHead": false,
  "level": null,
  "family": "obedience"
 },
 {
  "word": "disobedient",
  "answer": "disobedient",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "不聽話的",
  "en_def": "refusing to do what you are told",
  "sentence": "The {{BLANK}} child refused to turn off the TV when his parents told him to, so he lost his screen time for a week.",
  "cn": "那個不聽話的孩子在父母叫他關電視時拒絕照做，所以他一個星期不能看螢幕。",
  "cnMarked": "那個【不聽話的】孩子在父母叫他關電視時拒絕照做，所以他一個星期不能看螢幕。",
  "isHead": false,
  "level": null,
  "family": "obedience"
 },
 {
  "word": "objection",
  "answer": "objection",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "反對；異議",
  "en_def": "a reason you give for not agreeing with something",
  "sentence": "Does anyone have an {{BLANK}} to moving the meeting to Friday afternoon, when more members of the team will be free?",
  "cn": "有人對把會議改到星期五下午有異議嗎？那時候會有更多團隊成員有空。",
  "cnMarked": "有人對把會議改到星期五下午有【異議】嗎？那時候會有更多團隊成員有空。",
  "isHead": true,
  "level": 4,
  "family": "objection"
 },
 {
  "word": "objective",
  "answer": "objective",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "目標；目的",
  "en_def": "something you are trying to achieve",
  "sentence": "The main {{BLANK}} of this program is to help students read faster, so we practice with a short article every morning.",
  "cn": "這個課程的主要目標是幫助學生讀得更快，所以我們每天早上都用一篇短文練習。",
  "cnMarked": "這個課程的主要【目標】是幫助學生讀得更快，所以我們每天早上都用一篇短文練習。",
  "isHead": true,
  "level": 4,
  "family": "objection"
 },
 {
  "word": "objective",
  "answer": "objective",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "客觀的",
  "en_def": "based on facts, not on personal feelings",
  "sentence": "A good judge must stay {{BLANK}} and decide every case by the facts, not by his personal feelings about the people involved.",
  "cn": "好的法官必須保持客觀，根據事實而不是對當事人的個人感受來判決每個案件。",
  "cnMarked": "好的法官必須保持【客觀】，根據事實而不是對當事人的個人感受來判決每個案件。",
  "isHead": false,
  "level": 4,
  "family": "objection"
 },
 {
  "word": "objectively",
  "answer": "objectively",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "客觀地",
  "en_def": "in a way that is based on facts, not feelings",
  "sentence": "Try to look at your own essay {{BLANK}}, as if a stranger had written it, and you will find mistakes you missed before.",
  "cn": "試著客觀地看你自己的作文，就像它是陌生人寫的一樣，你會發現以前沒注意到的錯誤。",
  "cnMarked": "試著【客觀地】看你自己的作文，就像它是陌生人寫的一樣，你會發現以前沒注意到的錯誤。",
  "isHead": false,
  "level": null,
  "family": "objection"
 },
 {
  "word": "object",
  "answer": "object",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "反對",
  "en_def": "to say that you do not agree with something",
  "sentence": "Many residents {{BLANK}} to the plan for a new factory because they are worried about air pollution and heavy traffic.",
  "cn": "許多居民反對興建新工廠的計畫，因為他們擔心空氣污染和交通壅塞。",
  "cnMarked": "許多居民【反對】興建新工廠的計畫，因為他們擔心空氣污染和交通壅塞。",
  "isHead": false,
  "level": 2,
  "family": "objection"
 },
 {
  "word": "raise an objection",
  "answer": "raised an objection",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "提出異議",
  "en_def": "to say officially that you do not agree",
  "sentence": "Nobody {{BLANK}} when the manager suggested starting work an hour earlier in summer, so the new schedule began the next Monday.",
  "cn": "經理建議夏天提早一小時上班時，沒有人提出異議，所以新的時間表從下週一開始實施。",
  "cnMarked": "經理建議夏天提早一小時上班時，沒有人【提出異議】，所以新的時間表從下週一開始實施。",
  "isHead": false,
  "level": null,
  "family": "objection"
 },
 {
  "word": "subjective",
  "answer": "subjective",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "主觀的",
  "en_def": "based on your own feelings and ideas, not on facts",
  "sentence": "Which movie is the best is a {{BLANK}} question, because different people enjoy very different kinds of stories and actors.",
  "cn": "哪部電影最好是個主觀的問題，因為不同的人喜歡的故事類型和演員都大不相同。",
  "cnMarked": "哪部電影最好是個【主觀的】問題，因為不同的人喜歡的故事類型和演員都大不相同。",
  "isHead": false,
  "level": 6,
  "family": "objection"
 },
 {
  "word": "observation",
  "answer": "observation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "觀察",
  "en_def": "the act of watching something carefully",
  "sentence": "After three days of careful {{BLANK}}, the doctor decided that the patient was well enough to go home and rest.",
  "cn": "經過三天仔細的觀察，醫生判斷病人已經好到可以回家休養了。",
  "cnMarked": "經過三天仔細的【觀察】，醫生判斷病人已經好到可以回家休養了。",
  "isHead": true,
  "level": 4,
  "family": "observation"
 },
 {
  "word": "observe",
  "answer": "observe",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "觀察；遵守",
  "en_def": "to watch something carefully; to follow a rule or custom",
  "sentence": "Scientists {{BLANK}} the behavior of birds in the park every morning to find out how city noise affects them.",
  "cn": "科學家每天早上觀察公園裡鳥類的行為，想找出城市噪音對牠們有什麼影響。",
  "cnMarked": "科學家每天早上【觀察】公園裡鳥類的行為，想找出城市噪音對牠們有什麼影響。",
  "isHead": false,
  "level": 3,
  "family": "observation"
 },
 {
  "word": "observer",
  "answer": "observer",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "觀察者；旁觀者",
  "en_def": "a person who watches something",
  "sentence": "As an {{BLANK}} at the chess match, you may watch the players closely, but you must not talk or give them any hints.",
  "cn": "身為西洋棋比賽的觀察者，你可以仔細看選手下棋，但不能說話或給他們任何提示。",
  "cnMarked": "身為西洋棋比賽的【觀察者】，你可以仔細看選手下棋，但不能說話或給他們任何提示。",
  "isHead": false,
  "level": 5,
  "family": "observation"
 },
 {
  "word": "under observation",
  "answer": "under observation",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "接受觀察中",
  "en_def": "being watched carefully, especially in a hospital",
  "sentence": "The baby was kept {{BLANK}} in the hospital overnight because she had a high fever that did not go down.",
  "cn": "那個嬰兒因為高燒不退，被留在醫院觀察了一整晚。",
  "cnMarked": "那個嬰兒因為高燒不退，被留在醫院【觀察】了一整晚。",
  "isHead": false,
  "level": null,
  "family": "observation"
 },
 {
  "word": "obstacle",
  "answer": "obstacle",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "障礙；阻礙",
  "en_def": "something that makes it difficult to do or reach something",
  "sentence": "The biggest {{BLANK}} to learning English well is the fear of making mistakes, so do not be afraid to speak up in class.",
  "cn": "學好英文最大的障礙是害怕犯錯，所以在課堂上不要怕開口。",
  "cnMarked": "學好英文最大的【障礙】是害怕犯錯，所以在課堂上不要怕開口。",
  "isHead": true,
  "level": 4,
  "family": "obstacle"
 },
 {
  "word": "overcome obstacles",
  "answer": "overcome obstacles",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "克服障礙",
  "en_def": "to deal with difficulties and succeed",
  "sentence": "Successful people learn to {{BLANK}} instead of giving up, and they often say that each failure taught them something useful.",
  "cn": "成功的人學會克服障礙而不是放棄，他們常說每次失敗都教了他們一些有用的東西。",
  "cnMarked": "成功的人學會【克服障礙】而不是放棄，他們常說每次失敗都教了他們一些有用的東西。",
  "isHead": false,
  "level": null,
  "family": "obstacle"
 },
 {
  "word": "obstacle course",
  "answer": "obstacle course",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "障礙賽跑道",
  "en_def": "a race track with walls, ropes, and other things to climb over",
  "sentence": "At the sports camp, the kids ran through an {{BLANK}} with ropes, tires, and walls, and everyone finished covered in mud.",
  "cn": "在運動營裡，孩子們跑過一條有繩索、輪胎和牆的障礙賽跑道，每個人最後都沾滿了泥巴。",
  "cnMarked": "在運動營裡，孩子們跑過一條有繩索、輪胎和牆的【障礙賽跑道】，每個人最後都沾滿了泥巴。",
  "isHead": false,
  "level": null,
  "family": "obstacle"
 },
 {
  "word": "obtain",
  "answer": "obtain",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "獲得；取得",
  "en_def": "to get something, especially by asking or working for it",
  "sentence": "You need to {{BLANK}} a permit from the city office before you can sell food at the night market on weekends.",
  "cn": "你必須先向市政府取得許可證，才能在週末的夜市賣食物。",
  "cnMarked": "你必須先向市政府【取得】許可證，才能在週末的夜市賣食物。",
  "isHead": true,
  "level": 4,
  "family": "obtain"
 },
 {
  "word": "obtainable",
  "answer": "obtainable",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "可獲得的；可取得的",
  "en_def": "possible to get",
  "sentence": "Fresh mangoes are easily {{BLANK}} in Taiwan during summer, but in winter you can only find them at a very high price.",
  "cn": "夏天在台灣很容易買得到新鮮芒果，但冬天只能以很高的價格找到。",
  "cnMarked": "夏天在台灣很容易【買得到】新鮮芒果，但冬天只能以很高的價格找到。",
  "isHead": false,
  "level": null,
  "family": "obtain"
 },
 {
  "word": "obtain permission",
  "answer": "obtain permission",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "取得許可",
  "en_def": "to get the right to do something from someone in charge",
  "sentence": "Students who want to leave school early must {{BLANK}} from their homeroom teacher and sign out at the front office.",
  "cn": "想提早離校的學生必須向導師取得許可，並在前門辦公室簽退。",
  "cnMarked": "想提早離校的學生必須向導師【取得許可】，並在前門辦公室簽退。",
  "isHead": false,
  "level": null,
  "family": "obtain"
 },
 {
  "word": "occasional",
  "answer": "occasional",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "偶爾的",
  "en_def": "happening sometimes but not often",
  "sentence": "Apart from an {{BLANK}} cold in winter, my grandfather has been very healthy, and he still walks five kilometers every morning.",
  "cn": "除了冬天偶爾感冒之外，我爺爺一直很健康，他每天早上還是走五公里。",
  "cnMarked": "除了冬天【偶爾】感冒之外，我爺爺一直很健康，他每天早上還是走五公里。",
  "isHead": true,
  "level": 4,
  "family": "occasional"
 },
 {
  "word": "occasionally",
  "answer": "occasionally",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "偶爾",
  "en_def": "sometimes but not often",
  "sentence": "We {{BLANK}} eat out at a nice restaurant on weekends, but most of the time my parents prefer to cook at home.",
  "cn": "我們偶爾會在週末去好餐廳吃飯，但大多數時候我父母比較喜歡在家煮。",
  "cnMarked": "我們【偶爾】會在週末去好餐廳吃飯，但大多數時候我父母比較喜歡在家煮。",
  "isHead": false,
  "level": null,
  "family": "occasional"
 },
 {
  "word": "occasion",
  "answer": "occasion",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "場合；時刻",
  "en_def": "a special time or event",
  "sentence": "A wedding is a special {{BLANK}}, so most guests wear their best clothes and bring a gift for the new couple.",
  "cn": "婚禮是個特別的場合，所以大多數賓客都會穿上最好的衣服，並帶禮物給新人。",
  "cnMarked": "婚禮是個特別的【場合】，所以大多數賓客都會穿上最好的衣服，並帶禮物給新人。",
  "isHead": false,
  "level": 3,
  "family": "occasional"
 },
 {
  "word": "on occasion",
  "answer": "on occasion",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "偶爾；有時",
  "en_def": "sometimes but not often",
  "sentence": "My uncle lives in Kaohsiung, but {{BLANK}} he drives up to Taipei to visit us and take us out for dinner.",
  "cn": "我叔叔住在高雄，但偶爾他會開車上台北來看我們，帶我們出去吃晚餐。",
  "cnMarked": "我叔叔住在高雄，但【偶爾】他會開車上台北來看我們，帶我們出去吃晚餐。",
  "isHead": false,
  "level": null,
  "family": "occasional"
 },
 {
  "word": "occupation",
  "answer": "occupation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "職業",
  "en_def": "a person's job",
  "sentence": "Please write your name, address, and {{BLANK}} on the form, and then hand it to the nurse at the front desk.",
  "cn": "請在表格上寫下你的姓名、地址和職業，然後交給櫃檯的護理師。",
  "cnMarked": "請在表格上寫下你的姓名、地址和【職業】，然後交給櫃檯的護理師。",
  "isHead": true,
  "level": 4,
  "family": "occupation"
 },
 {
  "word": "occupy",
  "answer": "occupy",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "佔據；佔用",
  "en_def": "to fill a space or time; to live or work in a place",
  "sentence": "The large sofa and the piano {{BLANK}} most of the living room, so there is hardly any space left for a dining table.",
  "cn": "大沙發和鋼琴佔據了客廳大部分的空間，所以幾乎沒有地方放餐桌。",
  "cnMarked": "大沙發和鋼琴【佔據】了客廳大部分的空間，所以幾乎沒有地方放餐桌。",
  "isHead": true,
  "level": 4,
  "family": "occupation"
 },
 {
  "word": "be occupied with",
  "answer": "is occupied with",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "忙於",
  "en_def": "to be busy doing something",
  "sentence": "My father {{BLANK}} his new project these days, so he often comes home after we have already gone to bed.",
  "cn": "我爸爸這陣子忙於他的新專案，所以他常常在我們已經睡了之後才回家。",
  "cnMarked": "我爸爸這陣子【忙於】他的新專案，所以他常常在我們已經睡了之後才回家。",
  "isHead": false,
  "level": null,
  "family": "occupation"
 },
 {
  "word": "occupied",
  "answer": "occupied",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "使用中的；有人的",
  "en_def": "being used; having someone inside",
  "sentence": "All the seats on the train were {{BLANK}}, so the old man had to stand for almost an hour until Taichung.",
  "cn": "火車上所有的座位都有人坐了，所以那位老先生必須站將近一個小時直到台中。",
  "cnMarked": "火車上所有的座位都【有人坐】了，所以那位老先生必須站將近一個小時直到台中。",
  "isHead": false,
  "level": null,
  "family": "occupation"
 },
 {
  "word": "occupant",
  "answer": "occupant",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "居住者；佔用者",
  "en_def": "a person who lives or works in a room, house, or car",
  "sentence": "The {{BLANK}} of the apartment next door moved out last week, and now the landlord is looking for someone new.",
  "cn": "隔壁公寓的住戶上週搬走了，現在房東正在找新的房客。",
  "cnMarked": "隔壁公寓的【住戶】上週搬走了，現在房東正在找新的房客。",
  "isHead": false,
  "level": null,
  "family": "occupation"
 },
 {
  "word": "offend",
  "answer": "offend",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "冒犯；得罪",
  "en_def": "to make someone angry or upset by what you say or do",
  "sentence": "I did not mean to {{BLANK}} you with my joke, and I am truly sorry if it made you feel uncomfortable.",
  "cn": "我無意用我的笑話冒犯你，如果它讓你不舒服，我真的很抱歉。",
  "cnMarked": "我無意用我的笑話【冒犯】你，如果它讓你不舒服，我真的很抱歉。",
  "isHead": true,
  "level": 4,
  "family": "offend"
 },
 {
  "word": "offense",
  "answer": "offense",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "罪行；冒犯",
  "en_def": "a crime; the act of making someone upset",
  "sentence": "Driving after drinking is a serious {{BLANK}}, and anyone caught doing it can lose his license for at least one year.",
  "cn": "酒後開車是嚴重的罪行，任何被抓到的人至少會被吊銷駕照一年。",
  "cnMarked": "酒後開車是嚴重的【罪行】，任何被抓到的人至少會被吊銷駕照一年。",
  "isHead": true,
  "level": 4,
  "family": "offend"
 },
 {
  "word": "offensive",
  "answer": "offensive",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "無禮的；冒犯的",
  "en_def": "rude in a way that makes people upset or angry",
  "sentence": "Some people found the advertisement {{BLANK}} because it made fun of older people, so the company removed it the next day.",
  "cn": "有些人覺得那則廣告很冒犯人，因為它取笑老年人，所以公司第二天就把它撤掉了。",
  "cnMarked": "有些人覺得那則廣告很【冒犯人】，因為它取笑老年人，所以公司第二天就把它撤掉了。",
  "isHead": true,
  "level": 4,
  "family": "offend"
 },
 {
  "word": "take offense",
  "answer": "take offense",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "生氣；見怪",
  "en_def": "to feel upset or angry because of what someone said or did",
  "sentence": "Please do not {{BLANK}} at what she said; she was tired and did not really mean to criticize your work.",
  "cn": "請不要因為她說的話而生氣；她只是累了，並不是真的想批評你的工作。",
  "cnMarked": "請不要因為她說的話而【生氣】；她只是累了，並不是真的想批評你的工作。",
  "isHead": false,
  "level": null,
  "family": "offend"
 },
 {
  "word": "no offense",
  "answer": "No offense",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "無意冒犯",
  "en_def": "used before saying something that might upset someone",
  "sentence": "{{BLANK}}, but I think your plan needs more time and money than our small club can afford this year.",
  "cn": "無意冒犯，但我認為你的計畫需要的時間和錢，比我們這個小社團今年能負擔的還多。",
  "cnMarked": "【無意冒犯】，但我認為你的計畫需要的時間和錢，比我們這個小社團今年能負擔的還多。",
  "isHead": false,
  "level": null,
  "family": "offend"
 },
 {
  "word": "offender",
  "answer": "offender",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "違法者；罪犯",
  "en_def": "a person who has broken the law",
  "sentence": "The judge gave the young {{BLANK}} a second chance because it was his first time breaking the law and he was truly sorry.",
  "cn": "法官給了那個年輕的違法者第二次機會，因為這是他第一次犯法，而且他真心悔過。",
  "cnMarked": "法官給了那個年輕的【違法者】第二次機會，因為這是他第一次犯法，而且他真心悔過。",
  "isHead": false,
  "level": null,
  "family": "offend"
 },
 {
  "word": "opera",
  "answer": "opera",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "歌劇",
  "en_def": "a play in which most of the words are sung to music",
  "sentence": "My grandmother loves Taiwanese {{BLANK}}, and she still goes to the temple square to watch it whenever a group performs there.",
  "cn": "我奶奶很愛台灣歌仔戲，只要有劇團在廟口演出，她還是會去看。",
  "cnMarked": "我奶奶很愛台灣【歌仔戲】，只要有劇團在廟口演出，她還是會去看。",
  "isHead": true,
  "level": 4,
  "family": "opera"
 },
 {
  "word": "opera house",
  "answer": "Opera House",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "歌劇院",
  "en_def": "a theater where operas are performed",
  "sentence": "The Sydney {{BLANK}} is one of the most famous buildings in the world, and millions of tourists take photos of it every year.",
  "cn": "雪梨歌劇院是世界上最有名的建築之一，每年有數百萬遊客為它拍照。",
  "cnMarked": "雪梨【歌劇院】是世界上最有名的建築之一，每年有數百萬遊客為它拍照。",
  "isHead": false,
  "level": null,
  "family": "opera"
 },
 {
  "word": "soap opera",
  "answer": "soap opera",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "肥皂劇；連續劇",
  "en_def": "a TV drama about the daily lives of a group of people, shown many times a week",
  "sentence": "My aunt never misses her favorite {{BLANK}} at eight o'clock, even though the story has been going on for five years.",
  "cn": "我阿姨從不錯過她最愛的八點檔連續劇，即使這個故事已經演了五年。",
  "cnMarked": "我阿姨從不錯過她最愛的八點檔【連續劇】，即使這個故事已經演了五年。",
  "isHead": false,
  "level": null,
  "family": "opera"
 },
 {
  "word": "oppose",
  "answer": "oppose",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "反對",
  "en_def": "to disagree with something and try to stop it",
  "sentence": "Many parents {{BLANK}} the plan to start school an hour earlier because their children already do not get enough sleep.",
  "cn": "許多家長反對提早一小時上學的計畫，因為他們的孩子已經睡眠不足了。",
  "cnMarked": "許多家長【反對】提早一小時上學的計畫，因為他們的孩子已經睡眠不足了。",
  "isHead": true,
  "level": 4,
  "family": "oppose"
 },
 {
  "word": "be opposed to",
  "answer": "is opposed to",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "反對",
  "en_def": "to disagree strongly with something",
  "sentence": "My grandfather {{BLANK}} using credit cards because he believes people should only spend the money they actually have.",
  "cn": "我爺爺反對使用信用卡，因為他認為人們只應該花自己真正擁有的錢。",
  "cnMarked": "我爺爺【反對】使用信用卡，因為他認為人們只應該花自己真正擁有的錢。",
  "isHead": false,
  "level": null,
  "family": "oppose"
 },
 {
  "word": "opposite",
  "answer": "opposite",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "相反的；對面的",
  "en_def": "completely different; on the other side",
  "sentence": "The post office is on the {{BLANK}} side of the street from the bank, right next to the small bakery.",
  "cn": "郵局在銀行對面那一側的街上，就在小麵包店旁邊。",
  "cnMarked": "郵局在銀行【對面】那一側的街上，就在小麵包店旁邊。",
  "isHead": false,
  "level": 3,
  "family": "oppose"
 },
 {
  "word": "opposition",
  "answer": "opposition",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "反對；反對勢力",
  "en_def": "strong disagreement with a plan or idea",
  "sentence": "The new tax faced strong {{BLANK}} from shop owners, who said it would force many small stores to close.",
  "cn": "新稅制遭到店家強烈反對，他們說這會迫使許多小商店倒閉。",
  "cnMarked": "新稅制遭到店家強烈【反對】，他們說這會迫使許多小商店倒閉。",
  "isHead": false,
  "level": 5,
  "family": "oppose"
 },
 {
  "word": "opponent",
  "answer": "opponents",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "對手",
  "en_def": "a person you play or fight against",
  "sentence": "Our team lost the final match, but we shook hands with our {{BLANK}} and congratulated them on their great performance.",
  "cn": "我們隊輸了決賽，但我們和對手握手，並祝賀他們精彩的表現。",
  "cnMarked": "我們隊輸了決賽，但我們和【對手】握手，並祝賀他們精彩的表現。",
  "isHead": false,
  "level": 5,
  "family": "oppose"
 },
 {
  "word": "option",
  "answer": "option",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "選擇；選項",
  "en_def": "one of the things you can choose",
  "sentence": "If the tickets for Saturday are sold out, another {{BLANK}} is to watch the concert online for a much lower price.",
  "cn": "如果星期六的票賣完了，另一個選擇是用低很多的價格在線上看演唱會。",
  "cnMarked": "如果星期六的票賣完了，另一個【選擇】是用低很多的價格在線上看演唱會。",
  "isHead": true,
  "level": 4,
  "family": "option"
 },
 {
  "word": "optional",
  "answer": "optional",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "可選擇的；非必修的",
  "en_def": "something you can choose to do or not do",
  "sentence": "The school trip is {{BLANK}}, so students who do not want to go can stay at school and study in the library.",
  "cn": "校外教學是自由參加的，所以不想去的學生可以留在學校的圖書館讀書。",
  "cnMarked": "校外教學是【自由參加的】，所以不想去的學生可以留在學校的圖書館讀書。",
  "isHead": false,
  "level": 5,
  "family": "option"
 },
 {
  "word": "have no option but to",
  "answer": "had no option but to",
  "nblanks": 5,
  "pos": "v.phr.",
  "cn_def": "別無選擇只能",
  "en_def": "to have to do something because there is no other choice",
  "sentence": "When the last bus left without us, we {{BLANK}} walk home in the rain for nearly an hour.",
  "cn": "最後一班公車沒載到我們就開走了，我們別無選擇只能在雨中走將近一小時回家。",
  "cnMarked": "最後一班公車沒載到我們就開走了，我們【別無選擇只能】在雨中走將近一小時回家。",
  "isHead": false,
  "level": null,
  "family": "option"
 },
 {
  "word": "opt",
  "answer": "opt",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "選擇",
  "en_def": "to choose one thing instead of another",
  "sentence": "More and more young people {{BLANK}} to rent an apartment in the city rather than buy a house far from their jobs.",
  "cn": "越來越多年輕人選擇在市區租公寓，而不是買離工作地點很遠的房子。",
  "cnMarked": "越來越多年輕人【選擇】在市區租公寓，而不是買離工作地點很遠的房子。",
  "isHead": false,
  "level": 5,
  "family": "option"
 },
 {
  "word": "orbit",
  "answer": "orbit",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "軌道",
  "en_def": "the curved path of a planet or satellite around a star or planet",
  "sentence": "The satellite was put into {{BLANK}} around the Earth last year, and it sends back weather pictures every thirty minutes.",
  "cn": "那顆衛星去年被送入環繞地球的軌道，每三十分鐘就會傳回氣象照片。",
  "cnMarked": "那顆衛星去年被送入環繞地球的【軌道】，每三十分鐘就會傳回氣象照片。",
  "isHead": true,
  "level": 4,
  "family": "orbit"
 },
 {
  "word": "orbit",
  "answer": "orbit",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "繞軌道運行",
  "en_def": "to move around a planet or star in a curved path",
  "sentence": "The Moon takes about twenty-seven days to {{BLANK}} the Earth, which is why we see a full moon roughly once a month.",
  "cn": "月球大約需要二十七天繞行地球一圈，這就是為什麼我們大約每個月會看到一次滿月。",
  "cnMarked": "月球大約需要二十七天【繞行】地球一圈，這就是為什麼我們大約每個月會看到一次滿月。",
  "isHead": false,
  "level": 4,
  "family": "orbit"
 },
 {
  "word": "in orbit",
  "answer": "in orbit",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "在軌道上",
  "en_def": "moving around a planet in space",
  "sentence": "There are thousands of pieces of old rockets and broken satellites still {{BLANK}} around our planet, and they can damage new spacecraft.",
  "cn": "還有成千上萬塊舊火箭和壞掉的衛星碎片仍在軌道上環繞著我們的星球，它們可能會損壞新的太空船。",
  "cnMarked": "還有成千上萬塊舊火箭和壞掉的衛星碎片仍【在軌道上】環繞著我們的星球，它們可能會損壞新的太空船。",
  "isHead": false,
  "level": null,
  "family": "orbit"
 },
 {
  "word": "orchestra",
  "answer": "orchestra",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "管弦樂團",
  "en_def": "a large group of musicians who play classical music together",
  "sentence": "My cousin plays the violin in the school {{BLANK}}, and they will give a free concert in the city hall next month.",
  "cn": "我表妹在學校管弦樂團拉小提琴，他們下個月將在市政廳舉行免費音樂會。",
  "cnMarked": "我表妹在學校【管弦樂團】拉小提琴，他們下個月將在市政廳舉行免費音樂會。",
  "isHead": true,
  "level": 4,
  "family": "orchestra"
 },
 {
  "word": "orchestral",
  "answer": "orchestral",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "管弦樂的",
  "en_def": "written for or played by an orchestra",
  "sentence": "The movie's {{BLANK}} music was recorded by more than eighty musicians, and it makes every battle scene feel much more exciting.",
  "cn": "這部電影的管弦樂配樂由八十多位音樂家錄製，讓每個戰鬥場面都更加刺激。",
  "cnMarked": "這部電影的【管弦樂】配樂由八十多位音樂家錄製，讓每個戰鬥場面都更加刺激。",
  "isHead": false,
  "level": null,
  "family": "orchestra"
 },
 {
  "word": "conductor",
  "answer": "conductor",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "指揮",
  "en_def": "a person who stands in front of an orchestra and directs the music",
  "sentence": "The {{BLANK}} raised his hands, the hall became silent, and then the whole orchestra began to play the first note together.",
  "cn": "指揮舉起雙手，大廳安靜下來，接著整個管弦樂團一起奏出第一個音。",
  "cnMarked": "【指揮】舉起雙手，大廳安靜下來，接著整個管弦樂團一起奏出第一個音。",
  "isHead": false,
  "level": 4,
  "family": "orchestra"
 },
 {
  "word": "musician",
  "answer": "musician",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "音樂家",
  "en_def": "a person who plays a musical instrument or writes music",
  "sentence": "Every {{BLANK}} in the band practices at least three hours a day, which explains why their performances always sound so perfect.",
  "cn": "樂團裡的每位音樂家每天至少練習三小時，這說明了為什麼他們的演出總是如此完美。",
  "cnMarked": "樂團裡的每位【音樂家】每天至少練習三小時，這說明了為什麼他們的演出總是如此完美。",
  "isHead": false,
  "level": 2,
  "family": "orchestra"
 },
 {
  "word": "orientation",
  "answer": "orientation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "新生訓練；適應指導",
  "en_def": "a meeting or course that helps new people get used to a place",
  "sentence": "New students must attend the {{BLANK}} on the first day, where teachers will explain the school rules and show them around the campus.",
  "cn": "新生第一天必須參加新生訓練，老師會在那裡說明校規並帶他們參觀校園。",
  "cnMarked": "新生第一天必須參加【新生訓練】，老師會在那裡說明校規並帶他們參觀校園。",
  "isHead": true,
  "level": 4,
  "family": "orientation"
 },
 {
  "word": "orient",
  "answer": "orient",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "使適應；使熟悉",
  "en_def": "to help someone get used to a new place or situation",
  "sentence": "It took the new workers a few weeks to {{BLANK}} themselves to the busy schedule and the company's way of doing things.",
  "cn": "新員工花了幾個星期才讓自己適應忙碌的工作時程和公司的做事方式。",
  "cnMarked": "新員工花了幾個星期才【讓自己適應】忙碌的工作時程和公司的做事方式。",
  "isHead": false,
  "level": 6,
  "family": "orientation"
 },
 {
  "word": "oriental",
  "answer": "oriental",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "東方的",
  "en_def": "from or connected with East Asia",
  "sentence": "The museum has a special room of {{BLANK}} art, with old paintings and pottery from China, Japan, and Korea.",
  "cn": "博物館有一間東方藝術特展室，陳列來自中國、日本和韓國的古老繪畫和陶器。",
  "cnMarked": "博物館有一間【東方】藝術特展室，陳列來自中國、日本和韓國的古老繪畫和陶器。",
  "isHead": false,
  "level": 6,
  "family": "orientation"
 },
 {
  "word": "orphan",
  "answer": "orphans",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "孤兒",
  "en_def": "a child whose parents are dead",
  "sentence": "After the earthquake, many children became {{BLANK}}, and families across the country offered to give them a new home.",
  "cn": "地震後，許多孩子成了孤兒，全國各地的家庭都表示願意給他們一個新家。",
  "cnMarked": "地震後，許多孩子成了【孤兒】，全國各地的家庭都表示願意給他們一個新家。",
  "isHead": true,
  "level": 4,
  "family": "orphan"
 },
 {
  "word": "orphan",
  "answer": "orphaned",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "使成為孤兒",
  "en_def": "to make a child an orphan",
  "sentence": "The war {{BLANK}} thousands of children, who had to grow up without parents to take care of them.",
  "cn": "戰爭使成千上萬的孩子成了孤兒，他們必須在沒有父母照顧的情況下長大。",
  "cnMarked": "戰爭【使】成千上萬的孩子【成了孤兒】，他們必須在沒有父母照顧的情況下長大。",
  "isHead": false,
  "level": 4,
  "family": "orphan"
 },
 {
  "word": "orphanage",
  "answer": "orphanage",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "孤兒院",
  "en_def": "a home for children whose parents are dead",
  "sentence": "Every Christmas, our class collects toys and books and takes them to the {{BLANK}} in the next town.",
  "cn": "每年聖誕節，我們班都會收集玩具和書，送到隔壁鎮上的孤兒院。",
  "cnMarked": "每年聖誕節，我們班都會收集玩具和書，送到隔壁鎮上的【孤兒院】。",
  "isHead": false,
  "level": 6,
  "family": "orphan"
 },
 {
  "word": "otherwise",
  "answer": "otherwise",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "否則",
  "en_def": "if not; or else",
  "sentence": "Set your alarm clock for six tomorrow; {{BLANK}}, you will miss the early train and be late for the interview.",
  "cn": "明天把鬧鐘設在六點；否則你會錯過早班火車，面試遲到。",
  "cnMarked": "明天把鬧鐘設在六點；【否則】你會錯過早班火車，面試遲到。",
  "isHead": true,
  "level": 4,
  "family": "otherwise"
 },
 {
  "word": "otherwise",
  "answer": "otherwise",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "除此之外；在其他方面",
  "en_def": "apart from that; in other ways",
  "sentence": "The soup was a little too salty, but {{BLANK}} the dinner at the new restaurant was excellent and the service was friendly.",
  "cn": "湯有點太鹹，但除此之外新餐廳的晚餐很棒，服務也很親切。",
  "cnMarked": "湯有點太鹹，但【除此之外】新餐廳的晚餐很棒，服務也很親切。",
  "isHead": false,
  "level": 4,
  "family": "otherwise"
 },
 {
  "word": "or otherwise",
  "answer": "or otherwise",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "或其他；或相反",
  "en_def": "or not; or the opposite",
  "sentence": "All suggestions, useful {{BLANK}}, should be written on the paper and put in the box before Friday.",
  "cn": "所有的建議，不論有用與否，都應該寫在紙上，並在星期五前投進箱子裡。",
  "cnMarked": "所有的建議，不論有用【與否】，都應該寫在紙上，並在星期五前投進箱子裡。",
  "isHead": false,
  "level": null,
  "family": "otherwise"
 },
 {
  "word": "outcome",
  "answer": "outcome",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "結果",
  "en_def": "the result of an action or event",
  "sentence": "Nobody could predict the {{BLANK}} of the election, because the two candidates had almost the same number of supporters.",
  "cn": "沒有人能預測選舉的結果，因為兩位候選人的支持者人數幾乎一樣多。",
  "cnMarked": "沒有人能預測選舉的【結果】，因為兩位候選人的支持者人數幾乎一樣多。",
  "isHead": true,
  "level": 4,
  "family": "outcome"
 },
 {
  "word": "turn out",
  "answer": "turned out",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "結果是；最後變成",
  "en_def": "to happen in a particular way in the end",
  "sentence": "The weather {{BLANK}} to be perfect for the picnic, even though the forecast had said it might rain all afternoon.",
  "cn": "天氣結果非常適合野餐，儘管氣象預報說整個下午可能會下雨。",
  "cnMarked": "天氣【結果】非常適合野餐，儘管氣象預報說整個下午可能會下雨。",
  "isHead": false,
  "level": null,
  "family": "outcome"
 },
 {
  "word": "come out",
  "answer": "come out",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "上市；出版；結果",
  "en_def": "to be produced or published; to become known",
  "sentence": "The new phone will {{BLANK}} in September, and many fans are already saving money to buy it on the first day.",
  "cn": "新手機將在九月上市，許多粉絲已經在存錢準備第一天就買。",
  "cnMarked": "新手機將在九月【上市】，許多粉絲已經在存錢準備第一天就買。",
  "isHead": false,
  "level": null,
  "family": "outcome"
 },
 {
  "word": "outstanding",
  "answer": "outstanding",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "傑出的；優秀的",
  "en_def": "extremely good; much better than others",
  "sentence": "She won the prize for {{BLANK}} service to the community after she spent ten years teaching free English classes to children.",
  "cn": "她在為孩子們免費教了十年英文後，獲得了社區傑出服務獎。",
  "cnMarked": "她在為孩子們免費教了十年英文後，獲得了社區【傑出】服務獎。",
  "isHead": true,
  "level": 4,
  "family": "outstanding"
 },
 {
  "word": "outstanding",
  "answer": "outstanding",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "未付的；未解決的",
  "en_def": "not yet paid or finished",
  "sentence": "You still have an {{BLANK}} payment of two thousand dollars, so please pay it before the end of this month.",
  "cn": "你還有一筆兩千元未付的款項，請在這個月底前付清。",
  "cnMarked": "你還有一筆兩千元【未付的】款項，請在這個月底前付清。",
  "isHead": false,
  "level": 4,
  "family": "outstanding"
 },
 {
  "word": "stand out",
  "answer": "stand out",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "突出；顯眼",
  "en_def": "to be easy to see or notice because of being different",
  "sentence": "Her red jacket made her {{BLANK}} in the crowd, so we found her easily at the busy train station.",
  "cn": "她的紅夾克讓她在人群中很顯眼，所以我們在繁忙的火車站很容易就找到了她。",
  "cnMarked": "她的紅夾克讓她在人群中很【顯眼】，所以我們在繁忙的火車站很容易就找到了她。",
  "isHead": false,
  "level": null,
  "family": "outstanding"
 },
 {
  "word": "oval",
  "answer": "oval",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "橢圓形的",
  "en_def": "shaped like an egg",
  "sentence": "The dining table in my grandmother's house is {{BLANK}}, so eight people can sit around it comfortably during family dinners.",
  "cn": "我奶奶家的餐桌是橢圓形的，所以家庭聚餐時八個人可以舒服地圍坐在一起。",
  "cnMarked": "我奶奶家的餐桌是【橢圓形的】，所以家庭聚餐時八個人可以舒服地圍坐在一起。",
  "isHead": true,
  "level": 4,
  "family": "oval"
 },
 {
  "word": "oval",
  "answer": "oval",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "橢圓形",
  "en_def": "a shape like an egg",
  "sentence": "Draw an {{BLANK}} on the paper first, and then add two circles for eyes to turn it into a simple cartoon face.",
  "cn": "先在紙上畫一個橢圓形，然後加上兩個圓圈當眼睛，把它變成一張簡單的卡通臉。",
  "cnMarked": "先在紙上畫一個【橢圓形】，然後加上兩個圓圈當眼睛，把它變成一張簡單的卡通臉。",
  "isHead": false,
  "level": 4,
  "family": "oval"
 },
 {
  "word": "the Oval Office",
  "answer": "the Oval Office",
  "nblanks": 3,
  "pos": "n.phr.",
  "cn_def": "美國總統辦公室（橢圓形辦公室）",
  "en_def": "the office of the President of the United States",
  "sentence": "The President of the United States works in {{BLANK}}, which gets its name from its unusual shape.",
  "cn": "美國總統在橢圓形辦公室工作，它的名字來自它不尋常的形狀。",
  "cnMarked": "美國總統在【橢圓形辦公室】工作，它的名字來自它不尋常的形狀。",
  "isHead": false,
  "level": null,
  "family": "oval"
 }
];
const MCQS = [
 {
  "q": "Instant noodles are cheap and quick, but they do not give your body what it needs. Try to eat more ______ food like fish, eggs, and fresh vegetables.",
  "options": [
   "oval",
   "occasional",
   "obedient",
   "nutritious"
  ],
  "answer": 3,
  "vocabIndex": 0
 },
 {
  "q": "In the army, every soldier must follow orders at once without asking why. This kind of total ______ is necessary when lives depend on quick action.",
  "options": [
   "observation",
   "obedience",
   "objection",
   "occupation"
  ],
  "answer": 1,
  "vocabIndex": 4
 },
 {
  "q": "Max is the easiest dog I have ever trained. He is so ______ that he sits, stays, and comes back the moment I say the word.",
  "options": [
   "obedient",
   "nutritious",
   "outstanding",
   "offensive"
  ],
  "answer": 0,
  "vocabIndex": 5
 },
 {
  "q": "The teacher asked if anyone was against having the test on Monday instead of Friday. Nobody raised an ______, so the date was changed right away.",
  "options": [
   "orbit",
   "obstacle",
   "outcome",
   "objection"
  ],
  "answer": 3,
  "vocabIndex": 10
 },
 {
  "q": "Before we start the project, let us make sure everyone understands what we want to achieve. Our main ______ is to clean up the river by the end of the year.",
  "options": [
   "orchestra",
   "objective",
   "occupation",
   "offense"
  ],
  "answer": 1,
  "vocabIndex": 11
 },
 {
  "q": "The doctor was not sure what was wrong with the little boy. She kept him in the hospital for one more night of careful ______ before deciding on any treatment.",
  "options": [
   "orientation",
   "obedience",
   "observation",
   "option"
  ],
  "answer": 2,
  "vocabIndex": 17
 },
 {
  "q": "Mary wants to study abroad, but her family does not have much money. For many students like her, the cost is the biggest ______ to their dreams.",
  "options": [
   "outcome",
   "obstacle",
   "opera",
   "orbit"
  ],
  "answer": 1,
  "vocabIndex": 21
 },
 {
  "q": "You cannot drive a scooter in Taiwan just because you turned eighteen. First you have to pass two tests and ______ a license from the office.",
  "options": [
   "oppose",
   "occupy",
   "obtain",
   "offend"
  ],
  "answer": 2,
  "vocabIndex": 24
 },
 {
  "q": "Grandpa is in very good health for a man of eighty. Apart from an ______ cold in winter, he has not seen a doctor in years.",
  "options": [
   "occasional",
   "offensive",
   "obedient",
   "oval"
  ],
  "answer": 0,
  "vocabIndex": 27
 },
 {
  "q": "Please fill in every line on the form before you see the nurse. Besides your name and address, you also need to write your ______, such as teacher or driver.",
  "options": [
   "orientation",
   "occupation",
   "observation",
   "objection"
  ],
  "answer": 1,
  "vocabIndex": 31
 },
 {
  "q": "This old piano is too big for our small living room. It will ______ half of the space, and there will be no room left for the sofa.",
  "options": [
   "occupy",
   "obtain",
   "oppose",
   "offend"
  ],
  "answer": 0,
  "vocabIndex": 32
 },
 {
  "q": "Be careful when you make jokes about someone's hometown or family. Even if you do not mean to, you may ______ people and hurt their feelings.",
  "options": [
   "oppose",
   "offend",
   "orbit",
   "obtain"
  ],
  "answer": 1,
  "vocabIndex": 36
 },
 {
  "q": "Stealing from a store is not a small mistake that can simply be forgotten. It is a serious ______, and the police may take the person to court.",
  "options": [
   "option",
   "obstacle",
   "offense",
   "orchestra"
  ],
  "answer": 2,
  "vocabIndex": 37
 },
 {
  "q": "The comedian's joke about women made many people in the audience angry. They found it ______ and some of them even walked out of the show.",
  "options": [
   "offensive",
   "optional",
   "nutritious",
   "outstanding"
  ],
  "answer": 0,
  "vocabIndex": 38
 },
 {
  "q": "My grandmother does not like modern pop music at all. She prefers Taiwanese ______, in which singers in beautiful costumes sing and tell old stories on stage.",
  "options": [
   "orbit",
   "orphan",
   "orchestra",
   "opera"
  ],
  "answer": 3,
  "vocabIndex": 42
 },
 {
  "q": "The city wants to build a tall hotel next to the quiet old temple. Many residents strongly ______ the plan and have signed a letter to the mayor.",
  "options": [
   "oppose",
   "occupy",
   "obtain",
   "orbit"
  ],
  "answer": 0,
  "vocabIndex": 45
 },
 {
  "q": "All the tickets for the Saturday show are already sold out. Another ______ for the fans is to watch the concert live online, which costs much less anyway.",
  "options": [
   "outcome",
   "obstacle",
   "offense",
   "option"
  ],
  "answer": 3,
  "vocabIndex": 50
 },
 {
  "q": "The new weather satellite was sent into space last week. It is now in ______ around the Earth and will send back pictures of typhoons every few hours.",
  "options": [
   "orphan",
   "opera",
   "orbit",
   "orchestra"
  ],
  "answer": 2,
  "vocabIndex": 54
 },
 {
  "q": "More than sixty musicians sat on the stage with their violins, flutes, and drums. When the conductor raised his hands, the whole ______ began to play.",
  "options": [
   "opera",
   "orchestra",
   "orbit",
   "orientation"
  ],
  "answer": 1,
  "vocabIndex": 57
 },
 {
  "q": "New students should come to school on August 28, two days before classes begin. At the ______, teachers will explain the rules and show everyone around the campus.",
  "options": [
   "orientation",
   "observation",
   "obedience",
   "occupation"
  ],
  "answer": 0,
  "vocabIndex": 61
 },
 {
  "q": "Tom lost both his parents in a car accident when he was only five. He grew up as an ______ in his uncle's home in the countryside.",
  "options": [
   "observer",
   "offender",
   "orphan",
   "musician"
  ],
  "answer": 2,
  "vocabIndex": 64
 },
 {
  "q": "Remember to bring your student ID card to the exam tomorrow morning. ______, the teacher will not let you into the room, and you will miss the test.",
  "options": [
   "objectively",
   "occasionally",
   "obediently",
   "otherwise"
  ],
  "answer": 3,
  "vocabIndex": 67
 },
 {
  "q": "The two teams were equally strong, and the score was tied until the last minute. Nobody could guess the ______ of the game before the final whistle.",
  "options": [
   "obstacle",
   "objection",
   "outcome",
   "option"
  ],
  "answer": 2,
  "vocabIndex": 70
 },
 {
  "q": "Lisa got the highest score in the whole country on the English test. Her teachers say she is the most ______ student they have taught in twenty years.",
  "options": [
   "outstanding",
   "occasional",
   "optional",
   "oval"
  ],
  "answer": 0,
  "vocabIndex": 73
 },
 {
  "q": "This mirror is not round, and it is not square either. Its shape is ______, like an egg, so it looks a little longer than it is wide.",
  "options": [
   "offensive",
   "oval",
   "obedient",
   "optional"
  ],
  "answer": 1,
  "vocabIndex": 76
 },
 {
  "q": "Teenagers grow fast, so what they eat every day really matters. A school lunch with good ______ should include rice, vegetables, meat or fish, and some fruit.",
  "options": [
   "obedience",
   "orientation",
   "occupation",
   "nutrition"
  ],
  "answer": 3,
  "vocabIndex": 1
 },
 {
  "q": "Every driver has to stop and wait when the traffic light turns red. If you do not ______ this simple rule, you may cause a serious accident.",
  "options": [
   "obtain",
   "occupy",
   "obey",
   "oppose"
  ],
  "answer": 2,
  "vocabIndex": 7
 },
 {
  "q": "For his science project, Ken spent a month watching the birds in the park. He wanted to ______ how they build their nests and feed their babies.",
  "options": [
   "orbit",
   "obey",
   "obtain",
   "observe"
  ],
  "answer": 3,
  "vocabIndex": 18
 },
 {
  "q": "You cannot miss the new bank when you walk down Main Street. It is on the ______ side of the road from the post office, right next to the bakery.",
  "options": [
   "occasional",
   "opposite",
   "oval",
   "outstanding"
  ],
  "answer": 1,
  "vocabIndex": 47
 },
 {
  "q": "Students do not have to join the Saturday art class if they do not want to. It is ______, so only those who are interested need to sign up.",
  "options": [
   "optional",
   "nutritious",
   "offensive",
   "obedient"
  ],
  "answer": 0,
  "vocabIndex": 51
 }
];
const LOOKUP = {};
VOCAB.forEach(v => { const key = v.word.toLowerCase(); const sense = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def };
  if (LOOKUP[key]) LOOKUP[key].combined.push(sense); else LOOKUP[key] = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def, combined: [sense] }; });
const EXTRA_GLOSSES = {};