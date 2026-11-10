// 學測6000字 Level 4 Group 08 (concrete-container) — word-family edition
const QUIZ_CONFIG = {
  groupName: "6000字 L4 Group 8 - concrete – container (word family)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};
const VOCAB = [
 {
  "word": "concrete",
  "answer": "concrete",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "具體的；混凝土製的",
  "en_def": "real and clear, not just an idea; made of concrete",
  "sentence": "Instead of just saying you will study harder, make a {{BLANK}} plan with the exact hours you will read each day.",
  "cn": "與其只是說你會更努力讀書，不如訂一個具體的計畫，寫出你每天要讀書的確切時數。",
  "cnMarked": "與其只是說你會更努力讀書，不如訂一個【具體的】計畫，寫出你每天要讀書的確切時數。",
  "isHead": true,
  "level": 4,
  "family": "concrete"
 },
 {
  "word": "concrete",
  "answer": "concrete",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "混凝土",
  "en_def": "a hard building material made from cement, sand, water, and small stones",
  "sentence": "The workers poured wet {{BLANK}} into the wooden frame, and it became as hard as rock by the next morning.",
  "cn": "工人把濕的混凝土倒進木框裡，到第二天早上它就變得像石頭一樣硬。",
  "cnMarked": "工人把濕的【混凝土】倒進木框裡，到第二天早上它就變得像石頭一樣硬。",
  "isHead": false,
  "level": 4,
  "family": "concrete"
 },
 {
  "word": "concrete evidence",
  "answer": "concrete evidence",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "具體證據",
  "en_def": "clear proof that something is true",
  "sentence": "The police could not arrest the man because they had no {{BLANK}} that he had taken the money.",
  "cn": "警方無法逮捕那名男子，因為他們沒有他拿走錢的具體證據。",
  "cnMarked": "警方無法逮捕那名男子，因為他們沒有他拿走錢的【具體證據】。",
  "isHead": false,
  "level": null,
  "family": "concrete"
 },
 {
  "word": "concretely",
  "answer": "concretely",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "具體地",
  "en_def": "in a clear and specific way",
  "sentence": "The teacher asked us to explain {{BLANK}} how we would raise money for the trip instead of saying \"we will try our best.\"",
  "cn": "老師要我們具體地說明我們要如何為旅行募款，而不是只說「我們會盡力」。",
  "cnMarked": "老師要我們【具體地】說明我們要如何為旅行募款，而不是只說「我們會盡力」。",
  "isHead": false,
  "level": null,
  "family": "concrete"
 },
 {
  "word": "conductor",
  "answer": "conductor",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "指揮；（火車、公車）車掌",
  "en_def": "a person who directs an orchestra; a person who checks tickets on a train or bus",
  "sentence": "The {{BLANK}} raised her hands, the hall became silent, and then a hundred musicians began to play together.",
  "cn": "指揮舉起雙手，大廳變得安靜，接著一百名樂手開始一起演奏。",
  "cnMarked": "【指揮】舉起雙手，大廳變得安靜，接著一百名樂手開始一起演奏。",
  "isHead": true,
  "level": 4,
  "family": "conductor"
 },
 {
  "word": "conductor",
  "answer": "conductor",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "導體",
  "en_def": "a material that lets heat or electricity pass through it",
  "sentence": "Copper is a very good {{BLANK}} of electricity, so most of the wires in your house are made of it.",
  "cn": "銅是非常好的電導體，所以你家裡大部分的電線都是用它做的。",
  "cnMarked": "銅是非常好的電【導體】，所以你家裡大部分的電線都是用它做的。",
  "isHead": false,
  "level": 4,
  "family": "conductor"
 },
 {
  "word": "conduct",
  "answer": "conduct",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "進行；指揮",
  "en_def": "to organize and do something; to direct an orchestra",
  "sentence": "The scientists will {{BLANK}} a survey of five hundred students to find out how many hours they sleep each night.",
  "cn": "科學家將對五百名學生進行一項調查，以了解他們每晚睡幾個小時。",
  "cnMarked": "科學家將對五百名學生【進行】一項調查，以了解他們每晚睡幾個小時。",
  "isHead": false,
  "level": 5,
  "family": "conductor"
 },
 {
  "word": "conduct",
  "answer": "conduct",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "行為；品行",
  "en_def": "the way a person behaves, especially in public",
  "sentence": "The school gave him a prize for good {{BLANK}} because he was always polite, honest, and helpful to others.",
  "cn": "學校因為他品行良好而頒獎給他，因為他總是有禮貌、誠實又樂於助人。",
  "cnMarked": "學校因為他【品行】良好而頒獎給他，因為他總是有禮貌、誠實又樂於助人。",
  "isHead": false,
  "level": 5,
  "family": "conductor"
 },
 {
  "word": "conduct oneself",
  "answer": "conducted herself",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "表現；為人處事",
  "en_def": "to behave in a particular way",
  "sentence": "The young athlete {{BLANK}} with great calm after losing the final, and she even smiled at the winner.",
  "cn": "這位年輕運動員在輸掉決賽後表現得非常冷靜，甚至還對贏家微笑。",
  "cnMarked": "這位年輕運動員在輸掉決賽後【表現】得非常冷靜，甚至還對贏家微笑。",
  "isHead": false,
  "level": null,
  "family": "conductor"
 },
 {
  "word": "conference",
  "answer": "conference",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "會議；研討會",
  "en_def": "a large formal meeting where people discuss a subject",
  "sentence": "Over two thousand doctors from thirty countries came to the medical {{BLANK}} in Taipei to share their newest research.",
  "cn": "來自三十個國家的兩千多名醫生前來參加在台北舉行的醫學會議，分享他們最新的研究。",
  "cnMarked": "來自三十個國家的兩千多名醫生前來參加在台北舉行的醫學【會議】，分享他們最新的研究。",
  "isHead": true,
  "level": 4,
  "family": "conference"
 },
 {
  "word": "conference room",
  "answer": "conference room",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "會議室",
  "en_def": "a room in an office used for meetings",
  "sentence": "Please move the chairs back into the {{BLANK}} after the meeting, because another team needs it at three o'clock.",
  "cn": "會議結束後請把椅子搬回會議室，因為另一個團隊三點要用。",
  "cnMarked": "會議結束後請把椅子搬回【會議室】，因為另一個團隊三點要用。",
  "isHead": false,
  "level": null,
  "family": "conference"
 },
 {
  "word": "press conference",
  "answer": "press conference",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "記者會",
  "en_def": "a meeting where someone answers questions from reporters",
  "sentence": "The mayor held a {{BLANK}} this morning to explain why the new bridge will open six months late.",
  "cn": "市長今天早上舉行記者會，說明為什麼新橋會晚六個月通車。",
  "cnMarked": "市長今天早上舉行【記者會】，說明為什麼新橋會晚六個月通車。",
  "isHead": false,
  "level": null,
  "family": "conference"
 },
 {
  "word": "confer",
  "answer": "confer",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "商議；協商",
  "en_def": "to discuss something with others before making a decision",
  "sentence": "The judges will {{BLANK}} for a few minutes before they announce the winner of the singing contest.",
  "cn": "評審們會先商議幾分鐘，然後再宣布歌唱比賽的優勝者。",
  "cnMarked": "評審們會先【商議】幾分鐘，然後再宣布歌唱比賽的優勝者。",
  "isHead": false,
  "level": null,
  "family": "conference"
 },
 {
  "word": "confess",
  "answer": "confessed",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "承認；坦白",
  "en_def": "to admit that you have done something wrong or embarrassing",
  "sentence": "After the teacher promised not to be angry, the boy finally {{BLANK}} that he had broken the window with his ball.",
  "cn": "在老師保證不會生氣之後，男孩終於承認是他用球打破了窗戶。",
  "cnMarked": "在老師保證不會生氣之後，男孩終於【承認】是他用球打破了窗戶。",
  "isHead": true,
  "level": 4,
  "family": "confess"
 },
 {
  "word": "confess to",
  "answer": "confess to",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "承認（做了）…",
  "en_def": "to admit that you did something",
  "sentence": "I have to {{BLANK}} eating the last piece of cake, even though I knew my sister was saving it for later.",
  "cn": "我必須承認我吃掉了最後一塊蛋糕，雖然我知道姊姊把它留著待會吃。",
  "cnMarked": "我必須【承認】我吃掉了最後一塊蛋糕，雖然我知道姊姊把它留著待會吃。",
  "isHead": false,
  "level": null,
  "family": "confess"
 },
 {
  "word": "confession",
  "answer": "confession",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "自白；認罪",
  "en_def": "a statement that you have done something wrong",
  "sentence": "The thief made a full {{BLANK}} to the police and told them where he had hidden the stolen jewelry.",
  "cn": "小偷向警方完整認罪，並告訴他們他把偷來的珠寶藏在哪裡。",
  "cnMarked": "小偷向警方完整【認罪】，並告訴他們他把偷來的珠寶藏在哪裡。",
  "isHead": false,
  "level": 5,
  "family": "confess"
 },
 {
  "word": "confessed",
  "answer": "confessed",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "自己承認的",
  "en_def": "having admitted openly that you are something",
  "sentence": "As a {{BLANK}} chocolate lover, my aunt cannot walk past a bakery without going in to buy something sweet.",
  "cn": "身為一個自己承認的巧克力愛好者，我阿姨經過麵包店時沒辦法不進去買點甜的。",
  "cnMarked": "身為一個【自己承認的】巧克力愛好者，我阿姨經過麵包店時沒辦法不進去買點甜的。",
  "isHead": false,
  "level": null,
  "family": "confess"
 },
 {
  "word": "confidence",
  "answer": "confidence",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "信心；自信；信賴",
  "en_def": "the feeling that you can do something well; trust in someone",
  "sentence": "Winning the school speech contest gave Amy the {{BLANK}} to speak English in front of strangers without fear.",
  "cn": "贏得學校演講比賽讓 Amy 有信心在陌生人面前毫不害怕地說英文。",
  "cnMarked": "贏得學校演講比賽讓 Amy 有【信心】在陌生人面前毫不害怕地說英文。",
  "isHead": true,
  "level": 4,
  "family": "confidence"
 },
 {
  "word": "have confidence in",
  "answer": "has confidence in",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "對…有信心",
  "en_def": "to trust someone or believe in their ability",
  "sentence": "The coach {{BLANK}} his young players, so he let them make their own decisions during the game.",
  "cn": "教練對他的年輕球員有信心，所以他讓他們在比賽中自己做決定。",
  "cnMarked": "教練【對】他的年輕球員【有信心】，所以他讓他們在比賽中自己做決定。",
  "isHead": false,
  "level": null,
  "family": "confidence"
 },
 {
  "word": "confident",
  "answer": "confident",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "有自信的；確信的",
  "en_def": "sure that you can do something; sure that something is true",
  "sentence": "She felt {{BLANK}} about the math test because she had finished every practice problem in the book twice.",
  "cn": "她對數學考試感到有自信，因為她已經把書上每一道練習題都做過兩遍。",
  "cnMarked": "她對數學考試感到【有自信】，因為她已經把書上每一道練習題都做過兩遍。",
  "isHead": false,
  "level": 2,
  "family": "confidence"
 },
 {
  "word": "self-confidence",
  "answer": "self-confidence",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "自信心",
  "en_def": "belief in your own ability and value",
  "sentence": "Learning to swim at the age of forty gave my father a lot of {{BLANK}}, and he now tries new things all the time.",
  "cn": "四十歲學會游泳給了我爸爸很多自信心，現在他總是嘗試新事物。",
  "cnMarked": "四十歲學會游泳給了我爸爸很多【自信心】，現在他總是嘗試新事物。",
  "isHead": false,
  "level": null,
  "family": "confidence"
 },
 {
  "word": "confide in",
  "answer": "confide in",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "向…吐露心事",
  "en_def": "to tell someone a secret because you trust them",
  "sentence": "Teenagers often {{BLANK}} their friends rather than their parents when they have a problem at school.",
  "cn": "青少年在學校遇到問題時，通常向朋友而不是父母吐露心事。",
  "cnMarked": "青少年在學校遇到問題時，通常【向】朋友而不是父母【吐露心事】。",
  "isHead": false,
  "level": null,
  "family": "confidence"
 },
 {
  "word": "confidential",
  "answer": "confidential",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "機密的",
  "en_def": "meant to be kept secret",
  "sentence": "The doctor keeps all patient records {{BLANK}}, so nobody outside the hospital can see your test results.",
  "cn": "醫生把所有病人的紀錄都保持機密，所以醫院以外的人都看不到你的檢查結果。",
  "cnMarked": "醫生把所有病人的紀錄都保持【機密】，所以醫院以外的人都看不到你的檢查結果。",
  "isHead": false,
  "level": 5,
  "family": "confidence"
 },
 {
  "word": "confusion",
  "answer": "confusion",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "困惑；混亂",
  "en_def": "a state of not understanding; a situation that is not clear or orderly",
  "sentence": "There was great {{BLANK}} at the station when all the trains were canceled and nobody told the passengers why.",
  "cn": "當所有火車都被取消、又沒有人告訴乘客原因時，車站裡一片混亂。",
  "cnMarked": "當所有火車都被取消、又沒有人告訴乘客原因時，車站裡一片【混亂】。",
  "isHead": true,
  "level": 4,
  "family": "confusion"
 },
 {
  "word": "confuse",
  "answer": "confuse",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "使困惑；混淆",
  "en_def": "to make someone unable to understand; to mix up two things",
  "sentence": "The two sisters look so alike that even their teachers {{BLANK}} them on the first day of school every year.",
  "cn": "這對姊妹長得太像了，每年開學第一天連老師都會搞混她們。",
  "cnMarked": "這對姊妹長得太像了，每年開學第一天連老師都會【搞混】她們。",
  "isHead": false,
  "level": 3,
  "family": "confusion"
 },
 {
  "word": "in confusion",
  "answer": "in confusion",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "困惑地；混亂地",
  "en_def": "in a state of not understanding or not knowing what to do",
  "sentence": "The children ran around the stage {{BLANK}} when the lights suddenly went out in the middle of the school play.",
  "cn": "學校話劇演到一半燈光突然熄滅時，孩子們慌亂地在舞台上跑來跑去。",
  "cnMarked": "學校話劇演到一半燈光突然熄滅時，孩子們【慌亂地】在舞台上跑來跑去。",
  "isHead": false,
  "level": null,
  "family": "confusion"
 },
 {
  "word": "confused",
  "answer": "confused",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "感到困惑的",
  "en_def": "unable to understand or think clearly",
  "sentence": "I was completely {{BLANK}} by the map, so I asked a kind old lady to show me the way to the museum.",
  "cn": "我被地圖弄得完全搞不清楚，所以我請一位親切的老太太指引我去博物館的路。",
  "cnMarked": "我被地圖弄得完全【搞不清楚】，所以我請一位親切的老太太指引我去博物館的路。",
  "isHead": false,
  "level": null,
  "family": "confusion"
 },
 {
  "word": "confusing",
  "answer": "confusing",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "令人困惑的",
  "en_def": "difficult to understand",
  "sentence": "The instructions for the new washing machine were so {{BLANK}} that we had to watch a video online to set it up.",
  "cn": "新洗衣機的說明書太令人困惑了，我們只好在網路上看影片來設定它。",
  "cnMarked": "新洗衣機的說明書太【令人困惑】了，我們只好在網路上看影片來設定它。",
  "isHead": false,
  "level": null,
  "family": "confusion"
 },
 {
  "word": "congratulate",
  "answer": "congratulate",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "恭喜；祝賀",
  "en_def": "to tell someone you are happy about their success or good luck",
  "sentence": "All of her classmates came up to {{BLANK}} Lily when the teacher announced that she had won first prize.",
  "cn": "當老師宣布 Lily 得到第一名時，她所有的同學都上前恭喜她。",
  "cnMarked": "當老師宣布 Lily 得到第一名時，她所有的同學都上前【恭喜】她。",
  "isHead": true,
  "level": 4,
  "family": "congratulate"
 },
 {
  "word": "congratulations",
  "answer": "Congratulations",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "恭喜（用語）",
  "en_def": "words you say to someone who has done well or had good luck",
  "sentence": "\"{{BLANK}} on your new job!\" my uncle shouted as he walked in with a big cake and a bunch of flowers.",
  "cn": "「恭喜你找到新工作！」我叔叔一邊喊著，一邊拿著大蛋糕和一束花走進來。",
  "cnMarked": "「【恭喜】你找到新工作！」我叔叔一邊喊著，一邊拿著大蛋糕和一束花走進來。",
  "isHead": false,
  "level": 2,
  "family": "congratulate"
 },
 {
  "word": "congratulatory",
  "answer": "congratulatory",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "祝賀的",
  "en_def": "expressing congratulations",
  "sentence": "The team received hundreds of {{BLANK}} messages from fans around the world after they won the championship.",
  "cn": "球隊贏得冠軍後，收到來自世界各地球迷數百則祝賀的訊息。",
  "cnMarked": "球隊贏得冠軍後，收到來自世界各地球迷數百則【祝賀的】訊息。",
  "isHead": false,
  "level": null,
  "family": "congratulate"
 },
 {
  "word": "congress",
  "answer": "Congress",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "國會；議會",
  "en_def": "the group of people elected to make laws in some countries, especially the US",
  "sentence": "The new law about clean air must be passed by {{BLANK}} before the president can sign it next month.",
  "cn": "這項關於清潔空氣的新法必須先由國會通過，總統下個月才能簽署。",
  "cnMarked": "這項關於清潔空氣的新法必須先由【國會】通過，總統下個月才能簽署。",
  "isHead": true,
  "level": 4,
  "family": "congress"
 },
 {
  "word": "congress",
  "answer": "congress",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "大會；代表大會",
  "en_def": "a large formal meeting of people from one profession or organization",
  "sentence": "Teachers from all over Asia will attend the education {{BLANK}} in Singapore to discuss the future of online learning.",
  "cn": "來自全亞洲的教師將參加在新加坡舉行的教育大會，討論線上學習的未來。",
  "cnMarked": "來自全亞洲的教師將參加在新加坡舉行的教育【大會】，討論線上學習的未來。",
  "isHead": false,
  "level": 4,
  "family": "congress"
 },
 {
  "word": "congressman",
  "answer": "congressman",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "（美國）國會議員",
  "en_def": "a male member of the US Congress",
  "sentence": "The {{BLANK}} promised the farmers that he would fight for lower water prices when he returned to Washington.",
  "cn": "這位國會議員向農民承諾，他回到華盛頓後會為降低水價而努力。",
  "cnMarked": "這位【國會議員】向農民承諾，他回到華盛頓後會為降低水價而努力。",
  "isHead": false,
  "level": 6,
  "family": "congress"
 },
 {
  "word": "congressional",
  "answer": "congressional",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "國會的",
  "en_def": "connected with a congress",
  "sentence": "A {{BLANK}} committee is studying whether children under sixteen should be allowed to use social media.",
  "cn": "一個國會委員會正在研究是否應該允許十六歲以下的孩子使用社群媒體。",
  "cnMarked": "一個【國會】委員會正在研究是否應該允許十六歲以下的孩子使用社群媒體。",
  "isHead": false,
  "level": null,
  "family": "congress"
 },
 {
  "word": "conquer",
  "answer": "conquer",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "征服；攻克",
  "en_def": "to take control of a country or city by force; to defeat",
  "sentence": "The Roman army was able to {{BLANK}} most of Europe, and their roads can still be seen in many countries today.",
  "cn": "羅馬軍隊得以征服歐洲大部分地區，他們修的道路至今仍可在許多國家看到。",
  "cnMarked": "羅馬軍隊得以【征服】歐洲大部分地區，他們修的道路至今仍可在許多國家看到。",
  "isHead": true,
  "level": 4,
  "family": "conquer"
 },
 {
  "word": "conquer",
  "answer": "conquered",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "克服（恐懼、困難）",
  "en_def": "to succeed in controlling a fear, problem, or difficulty",
  "sentence": "After years of practice, he finally {{BLANK}} his fear of speaking in public and gave a speech to five hundred people.",
  "cn": "經過多年練習，他終於克服了公開演講的恐懼，對五百人發表演說。",
  "cnMarked": "經過多年練習，他終於【克服】了公開演講的恐懼，對五百人發表演說。",
  "isHead": false,
  "level": 4,
  "family": "conquer"
 },
 {
  "word": "conqueror",
  "answer": "conqueror",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "征服者",
  "en_def": "a person who takes control of a place by force",
  "sentence": "The {{BLANK}} built a huge castle on the hill so that everyone in the valley would remember who ruled them.",
  "cn": "征服者在山丘上建了一座巨大的城堡，好讓山谷裡的每個人都記得是誰在統治他們。",
  "cnMarked": "【征服者】在山丘上建了一座巨大的城堡，好讓山谷裡的每個人都記得是誰在統治他們。",
  "isHead": false,
  "level": null,
  "family": "conquer"
 },
 {
  "word": "conquest",
  "answer": "conquest",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "征服；佔領",
  "en_def": "the act of taking control of a place by force",
  "sentence": "The {{BLANK}} of the island took only three days, but the new rulers stayed there for over two hundred years.",
  "cn": "征服這座島只花了三天，但新的統治者在那裡待了兩百多年。",
  "cnMarked": "【征服】這座島只花了三天，但新的統治者在那裡待了兩百多年。",
  "isHead": false,
  "level": 6,
  "family": "conquer"
 },
 {
  "word": "conscience",
  "answer": "conscience",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "良心",
  "en_def": "the part of your mind that tells you whether what you are doing is right or wrong",
  "sentence": "He returned the wallet to the police station because his {{BLANK}} would not let him keep the money inside.",
  "cn": "他把皮夾送回警察局，因為他的良心不允許他留下裡面的錢。",
  "cnMarked": "他把皮夾送回警察局，因為他的【良心】不允許他留下裡面的錢。",
  "isHead": true,
  "level": 4,
  "family": "conscience"
 },
 {
  "word": "have a guilty conscience",
  "answer": "had a guilty conscience",
  "nblanks": 4,
  "pos": "v.phr.",
  "cn_def": "感到心虛；內疚",
  "en_def": "to feel bad because you have done something wrong",
  "sentence": "Tom {{BLANK}} after he lied to his mother, so he could not sleep until he told her the truth.",
  "cn": "Tom 對媽媽說謊之後感到內疚，所以直到他說出實話才能入睡。",
  "cnMarked": "Tom 對媽媽說謊之後【感到內疚】，所以直到他說出實話才能入睡。",
  "isHead": false,
  "level": null,
  "family": "conscience"
 },
 {
  "word": "conscientious",
  "answer": "conscientious",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "認真負責的；盡責的",
  "en_def": "careful to do your work well and properly",
  "sentence": "Our class leader is so {{BLANK}} that she checks every homework list twice before she hands it to the teacher.",
  "cn": "我們的班長非常認真負責，每次交給老師之前都會把作業清單檢查兩遍。",
  "cnMarked": "我們的班長非常【認真負責】，每次交給老師之前都會把作業清單檢查兩遍。",
  "isHead": false,
  "level": 6,
  "family": "conscience"
 },
 {
  "word": "conscious",
  "answer": "conscious",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "有意識的；察覺到的",
  "en_def": "awake and able to understand what is happening; aware of something",
  "sentence": "The patient was still {{BLANK}} when the ambulance arrived, and he was able to tell the doctors his name.",
  "cn": "救護車抵達時病人仍然有意識，而且能夠告訴醫生他的名字。",
  "cnMarked": "救護車抵達時病人仍然【有意識】，而且能夠告訴醫生他的名字。",
  "isHead": false,
  "level": 3,
  "family": "conscience"
 },
 {
  "word": "consequence",
  "answer": "consequence",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "後果；結果",
  "en_def": "a result of an action, often a bad one",
  "sentence": "One {{BLANK}} of staying up late every night is that you cannot pay attention in your morning classes.",
  "cn": "每天熬夜的一個後果就是你早上的課無法專心。",
  "cnMarked": "每天熬夜的一個【後果】就是你早上的課無法專心。",
  "isHead": true,
  "level": 4,
  "family": "consequence"
 },
 {
  "word": "consequent",
  "answer": "consequent",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "隨之而來的；因…而起的",
  "en_def": "happening as a result of something",
  "sentence": "The heavy rain and the {{BLANK}} flooding forced hundreds of families to leave their homes for several days.",
  "cn": "大雨和隨之而來的洪水迫使數百個家庭離家好幾天。",
  "cnMarked": "大雨和【隨之而來的】洪水迫使數百個家庭離家好幾天。",
  "isHead": true,
  "level": 4,
  "family": "consequence"
 },
 {
  "word": "as a consequence",
  "answer": "as a consequence",
  "nblanks": 3,
  "pos": "phr.",
  "cn_def": "結果；因此",
  "en_def": "as a result",
  "sentence": "He forgot to set his alarm, and {{BLANK}} he missed the first twenty minutes of the important exam.",
  "cn": "他忘了設鬧鐘，結果錯過了重要考試的前二十分鐘。",
  "cnMarked": "他忘了設鬧鐘，【結果】錯過了重要考試的前二十分鐘。",
  "isHead": false,
  "level": null,
  "family": "consequence"
 },
 {
  "word": "face the consequences",
  "answer": "face the consequences",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "承擔後果",
  "en_def": "to accept the bad results of what you have done",
  "sentence": "If you break the school rules, you will have to {{BLANK}}, even if you say you are very sorry afterward.",
  "cn": "如果你違反校規，就必須承擔後果，即使你事後說你非常抱歉。",
  "cnMarked": "如果你違反校規，就必須【承擔後果】，即使你事後說你非常抱歉。",
  "isHead": false,
  "level": null,
  "family": "consequence"
 },
 {
  "word": "consequently",
  "answer": "consequently",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "因此；所以",
  "en_def": "as a result; therefore",
  "sentence": "The store raised its prices twice this year, and {{BLANK}} many customers have started shopping somewhere else.",
  "cn": "這家店今年漲價兩次，因此很多顧客已經開始到別處購物。",
  "cnMarked": "這家店今年漲價兩次，【因此】很多顧客已經開始到別處購物。",
  "isHead": false,
  "level": null,
  "family": "consequence"
 },
 {
  "word": "conservative",
  "answer": "conservative",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "保守的；守舊的",
  "en_def": "not liking change or new ideas; traditional",
  "sentence": "My grandfather is quite {{BLANK}} about clothes, so he always wears a suit and tie even on hot summer days.",
  "cn": "我爺爺對穿著相當保守，所以即使在炎熱的夏天他也總是穿西裝打領帶。",
  "cnMarked": "我爺爺對穿著相當【保守】，所以即使在炎熱的夏天他也總是穿西裝打領帶。",
  "isHead": true,
  "level": 4,
  "family": "conservative"
 },
 {
  "word": "conservative",
  "answer": "conservative",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "保守的（估計）",
  "en_def": "careful and lower than the real number is likely to be",
  "sentence": "The report says at least ten thousand people joined the parade, but that is a {{BLANK}} guess; it may have been twice as many.",
  "cn": "報告說至少有一萬人參加遊行，但那是個保守的估計；實際人數可能是兩倍。",
  "cnMarked": "報告說至少有一萬人參加遊行，但那是個【保守的】估計；實際人數可能是兩倍。",
  "isHead": false,
  "level": 4,
  "family": "conservative"
 },
 {
  "word": "conservative",
  "answer": "conservatives",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "保守派人士",
  "en_def": "a person who does not like change and prefers traditional ways",
  "sentence": "Many {{BLANK}} in the town voted against the plan to replace the old market with a modern shopping center.",
  "cn": "鎮上許多保守派人士投票反對把舊市場改建成現代購物中心的計畫。",
  "cnMarked": "鎮上許多【保守派人士】投票反對把舊市場改建成現代購物中心的計畫。",
  "isHead": false,
  "level": 4,
  "family": "conservative"
 },
 {
  "word": "conserve",
  "answer": "conserve",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "節約；保護（自然）",
  "en_def": "to use something carefully so that it lasts; to protect nature",
  "sentence": "During the dry season, the government asked everyone to {{BLANK}} water by taking shorter showers and fixing leaking taps.",
  "cn": "乾季期間，政府要求大家縮短淋浴時間、修好漏水的水龍頭來節約用水。",
  "cnMarked": "乾季期間，政府要求大家縮短淋浴時間、修好漏水的水龍頭來【節約】用水。",
  "isHead": false,
  "level": 6,
  "family": "conservative"
 },
 {
  "word": "conservation",
  "answer": "conservation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "（自然）保護；保育",
  "en_def": "the protection of nature and natural resources",
  "sentence": "The {{BLANK}} of the forest is important because hundreds of rare birds and animals make their homes there.",
  "cn": "這座森林的保育很重要，因為數百種稀有的鳥類和動物以那裡為家。",
  "cnMarked": "這座森林的【保育】很重要，因為數百種稀有的鳥類和動物以那裡為家。",
  "isHead": false,
  "level": 5,
  "family": "conservative"
 },
 {
  "word": "consist",
  "answer": "consists",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "組成；構成",
  "en_def": "to be made of particular parts or people",
  "sentence": "Our school band {{BLANK}} mainly of first-year students, so the music teacher is very patient with the beginners.",
  "cn": "我們學校的樂隊主要由一年級學生組成，所以音樂老師對初學者非常有耐心。",
  "cnMarked": "我們學校的樂隊主要由一年級學生【組成】，所以音樂老師對初學者非常有耐心。",
  "isHead": true,
  "level": 4,
  "family": "consist"
 },
 {
  "word": "consistent",
  "answer": "consistent",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "一致的；穩定的",
  "en_def": "always behaving or happening in the same way; not changing",
  "sentence": "Her grades have been {{BLANK}} all year, never dropping below ninety in any subject, which makes her parents proud.",
  "cn": "她的成績一整年都很穩定，任何科目都沒低於九十分，這讓她的父母很驕傲。",
  "cnMarked": "她的成績一整年都很【穩定】，任何科目都沒低於九十分，這讓她的父母很驕傲。",
  "isHead": true,
  "level": 4,
  "family": "consist"
 },
 {
  "word": "consist of",
  "answer": "consist of",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "由…組成",
  "en_def": "to be formed from particular things or people",
  "sentence": "A healthy breakfast should {{BLANK}} some fruit, a glass of milk, and bread or rice rather than just sweet cookies.",
  "cn": "健康的早餐應該由一些水果、一杯牛奶和麵包或米飯組成，而不是只有甜餅乾。",
  "cnMarked": "健康的早餐應該【由】一些水果、一杯牛奶和麵包或米飯【組成】，而不是只有甜餅乾。",
  "isHead": false,
  "level": null,
  "family": "consist"
 },
 {
  "word": "be consistent with",
  "answer": "was consistent with",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "與…一致；符合",
  "en_def": "to agree with or match something",
  "sentence": "The story the boy told {{BLANK}} what the video camera recorded, so the police believed him.",
  "cn": "男孩說的經過與攝影機拍到的畫面一致，所以警方相信了他。",
  "cnMarked": "男孩說的經過【與】攝影機拍到的畫面【一致】，所以警方相信了他。",
  "isHead": false,
  "level": null,
  "family": "consist"
 },
 {
  "word": "consistency",
  "answer": "consistency",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "一致性；穩定性",
  "en_def": "the quality of always being the same or behaving in the same way",
  "sentence": "A good basketball player needs {{BLANK}}; it is not enough to score thirty points one night and only two the next.",
  "cn": "一個好的籃球員需要穩定性；某晚得三十分而隔天只得兩分是不夠的。",
  "cnMarked": "一個好的籃球員需要【穩定性】；某晚得三十分而隔天只得兩分是不夠的。",
  "isHead": false,
  "level": null,
  "family": "consist"
 },
 {
  "word": "consistently",
  "answer": "consistently",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "一貫地；始終",
  "en_def": "always in the same way; regularly",
  "sentence": "The small restaurant has {{BLANK}} served fresh and delicious food for twenty years, so it always has a long line outside.",
  "cn": "這家小餐館二十年來始終供應新鮮美味的食物，所以外面總是排著長隊。",
  "cnMarked": "這家小餐館二十年來【始終】供應新鮮美味的食物，所以外面總是排著長隊。",
  "isHead": false,
  "level": null,
  "family": "consist"
 },
 {
  "word": "constitute",
  "answer": "constitute",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "構成；組成；被視為",
  "en_def": "to be the parts that form something; to be considered as something",
  "sentence": "Women now {{BLANK}} more than half of the medical students at this university, which was not true thirty years ago.",
  "cn": "現在女性佔這所大學醫學院學生的一半以上，三十年前並非如此。",
  "cnMarked": "現在女性【佔】這所大學醫學院學生的一半以上，三十年前並非如此。",
  "isHead": true,
  "level": 4,
  "family": "constitute"
 },
 {
  "word": "constitution",
  "answer": "constitution",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "憲法",
  "en_def": "the set of basic laws by which a country is governed",
  "sentence": "According to the {{BLANK}} of our country, every citizen over twenty has the right to vote in elections.",
  "cn": "根據我國憲法，每位二十歲以上的公民都有權在選舉中投票。",
  "cnMarked": "根據我國【憲法】，每位二十歲以上的公民都有權在選舉中投票。",
  "isHead": true,
  "level": 4,
  "family": "constitute"
 },
 {
  "word": "constitution",
  "answer": "constitution",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "體質",
  "en_def": "the condition of a person's body and how healthy it is",
  "sentence": "My grandmother has a strong {{BLANK}}; she is eighty-five and still walks up five floors every day without resting.",
  "cn": "我奶奶體質很好；她八十五歲了，每天還能不休息地爬五層樓。",
  "cnMarked": "我奶奶【體質】很好；她八十五歲了，每天還能不休息地爬五層樓。",
  "isHead": false,
  "level": 4,
  "family": "constitute"
 },
 {
  "word": "constitutional",
  "answer": "constitutional",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "憲法的；合憲的",
  "en_def": "allowed by or connected with the constitution",
  "sentence": "The court must decide whether the new rule about school uniforms is {{BLANK}} or goes against students' basic rights.",
  "cn": "法院必須判定關於校服的新規定是否合憲，還是違反了學生的基本權利。",
  "cnMarked": "法院必須判定關於校服的新規定是否【合憲】，還是違反了學生的基本權利。",
  "isHead": false,
  "level": 5,
  "family": "constitute"
 },
 {
  "word": "construct",
  "answer": "construct",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "建造；建設",
  "en_def": "to build something large such as a building, bridge, or road",
  "sentence": "The city plans to {{BLANK}} a new sports center next to the river, and it should be finished before the national games.",
  "cn": "市政府計畫在河邊建造一座新的運動中心，應該會在全國運動會之前完工。",
  "cnMarked": "市政府計畫在河邊【建造】一座新的運動中心，應該會在全國運動會之前完工。",
  "isHead": true,
  "level": 4,
  "family": "construct"
 },
 {
  "word": "construction",
  "answer": "construction",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "建造；建築工程；結構",
  "en_def": "the work of building something; the way something is built",
  "sentence": "The {{BLANK}} of the new subway line has made the traffic on Main Street much worse for the past two years.",
  "cn": "新地鐵線的興建工程讓主街的交通在過去兩年變得更糟。",
  "cnMarked": "新地鐵線的【興建工程】讓主街的交通在過去兩年變得更糟。",
  "isHead": true,
  "level": 4,
  "family": "construct"
 },
 {
  "word": "constructive",
  "answer": "constructive",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "有建設性的",
  "en_def": "helpful and useful, especially when giving opinions",
  "sentence": "Instead of just saying the essay was bad, the teacher gave {{BLANK}} advice on how to make each paragraph clearer.",
  "cn": "老師不是只說這篇作文寫得不好，而是給了有建設性的建議，教我們如何讓每一段更清楚。",
  "cnMarked": "老師不是只說這篇作文寫得不好，而是給了【有建設性的】建議，教我們如何讓每一段更清楚。",
  "isHead": true,
  "level": 4,
  "family": "construct"
 },
 {
  "word": "under construction",
  "answer": "under construction",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "興建中",
  "en_def": "being built at the moment",
  "sentence": "The new library is still {{BLANK}}, so students have to use the small reading room on the second floor for now.",
  "cn": "新圖書館仍在興建中，所以學生目前必須使用二樓的小閱覽室。",
  "cnMarked": "新圖書館仍在【興建中】，所以學生目前必須使用二樓的小閱覽室。",
  "isHead": false,
  "level": null,
  "family": "construct"
 },
 {
  "word": "reconstruct",
  "answer": "reconstruct",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "重建；重現",
  "en_def": "to build something again after it has been damaged; to form a picture of past events",
  "sentence": "It took the village five years to {{BLANK}} the temple after the earthquake destroyed most of its roof.",
  "cn": "地震摧毀了廟的大部分屋頂之後，村子花了五年才把它重建起來。",
  "cnMarked": "地震摧毀了廟的大部分屋頂之後，村子花了五年才把它【重建】起來。",
  "isHead": false,
  "level": null,
  "family": "construct"
 },
 {
  "word": "consult",
  "answer": "consult",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "諮詢；請教；查閱",
  "en_def": "to ask an expert for advice; to look in a book or map for information",
  "sentence": "You should {{BLANK}} a doctor before you start taking any medicine for your back pain, even if a friend recommends it.",
  "cn": "在你開始服用任何治療背痛的藥之前，應該先諮詢醫生，即使是朋友推薦的也一樣。",
  "cnMarked": "在你開始服用任何治療背痛的藥之前，應該先【諮詢】醫生，即使是朋友推薦的也一樣。",
  "isHead": true,
  "level": 4,
  "family": "consult"
 },
 {
  "word": "consultant",
  "answer": "consultant",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "顧問",
  "en_def": "a person whose job is to give expert advice to companies or people",
  "sentence": "The company hired a {{BLANK}} to find out why its sales had dropped so sharply in the past six months.",
  "cn": "公司聘請了一位顧問，來找出為什麼過去六個月銷售量下降得這麼厲害。",
  "cnMarked": "公司聘請了一位【顧問】，來找出為什麼過去六個月銷售量下降得這麼厲害。",
  "isHead": true,
  "level": 4,
  "family": "consult"
 },
 {
  "word": "consult with",
  "answer": "consult with",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "與…商量",
  "en_def": "to discuss something with someone before deciding",
  "sentence": "Before choosing a university, Kevin decided to {{BLANK}} his teachers and his parents to hear their opinions.",
  "cn": "在選擇大學之前，Kevin 決定與老師和父母商量，聽聽他們的意見。",
  "cnMarked": "在選擇大學之前，Kevin 決定【與】老師和父母【商量】，聽聽他們的意見。",
  "isHead": false,
  "level": null,
  "family": "consult"
 },
 {
  "word": "consultation",
  "answer": "consultation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "諮詢；會診；商議",
  "en_def": "a meeting with an expert to get advice; the act of discussing something",
  "sentence": "After a short {{BLANK}} with the eye doctor, my brother learned that he needed glasses for reading.",
  "cn": "跟眼科醫生做了短暫的諮詢之後，我弟弟得知他看書需要戴眼鏡。",
  "cnMarked": "跟眼科醫生做了短暫的【諮詢】之後，我弟弟得知他看書需要戴眼鏡。",
  "isHead": false,
  "level": 5,
  "family": "consult"
 },
 {
  "word": "consume",
  "answer": "consume",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "消耗；吃；喝",
  "en_def": "to eat, drink, or use something, especially in large amounts",
  "sentence": "Teenagers who {{BLANK}} too many sugary drinks every day are more likely to have problems with their teeth and weight.",
  "cn": "每天喝太多含糖飲料的青少年，更容易出現牙齒和體重的問題。",
  "cnMarked": "每天【喝】太多含糖飲料的青少年，更容易出現牙齒和體重的問題。",
  "isHead": true,
  "level": 4,
  "family": "consume"
 },
 {
  "word": "consumer",
  "answer": "consumers",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "消費者",
  "en_def": "a person who buys goods or uses services",
  "sentence": "Smart {{BLANK}} compare prices in several stores before they buy an expensive item like a laptop or a phone.",
  "cn": "聰明的消費者在購買筆電或手機等昂貵的物品之前，會先比較好幾家店的價格。",
  "cnMarked": "聰明的【消費者】在購買筆電或手機等昂貵的物品之前，會先比較好幾家店的價格。",
  "isHead": true,
  "level": 4,
  "family": "consume"
 },
 {
  "word": "time-consuming",
  "answer": "time-consuming",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "耗時的",
  "en_def": "taking a lot of time",
  "sentence": "Making dumplings by hand is {{BLANK}}, but the whole family enjoys sitting around the table and doing it together.",
  "cn": "手工包餃子很耗時，但全家人都喜歡圍坐在桌邊一起做。",
  "cnMarked": "手工包餃子很【耗時】，但全家人都喜歡圍坐在桌邊一起做。",
  "isHead": false,
  "level": null,
  "family": "consume"
 },
 {
  "word": "consumption",
  "answer": "consumption",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "消耗；消費（量）",
  "en_def": "the act of eating, drinking, or using something; the amount used",
  "sentence": "The {{BLANK}} of electricity goes up sharply in July and August because almost everyone turns on the air conditioner.",
  "cn": "七、八月的電力消耗量會急遽上升，因為幾乎每個人都開冷氣。",
  "cnMarked": "七、八月的電力【消耗量】會急遽上升，因為幾乎每個人都開冷氣。",
  "isHead": false,
  "level": 5,
  "family": "consume"
 },
 {
  "word": "container",
  "answer": "container",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "容器；貨櫃",
  "en_def": "a box, bottle, or other object used for holding things",
  "sentence": "Put the leftover soup in a glass {{BLANK}} with a tight lid, and it will stay fresh in the fridge for three days.",
  "cn": "把剩下的湯放進有緊密蓋子的玻璃容器裡，它在冰箱裡可以保鮮三天。",
  "cnMarked": "把剩下的湯放進有緊密蓋子的玻璃【容器】裡，它在冰箱裡可以保鮮三天。",
  "isHead": true,
  "level": 4,
  "family": "container"
 },
 {
  "word": "contain",
  "answer": "contains",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "包含；含有",
  "en_def": "to have something inside; to include",
  "sentence": "This cereal {{BLANK}} a lot of sugar, so it is not as healthy as the colorful box makes it look.",
  "cn": "這種穀片含有很多糖，所以它並不像彩色包裝盒看起來那麼健康。",
  "cnMarked": "這種穀片【含有】很多糖，所以它並不像彩色包裝盒看起來那麼健康。",
  "isHead": false,
  "level": 2,
  "family": "container"
 },
 {
  "word": "contain",
  "answer": "contain",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "控制；遏制；抑制",
  "en_def": "to control or stop something from spreading; to control your feelings",
  "sentence": "The firefighters worked all night to {{BLANK}} the forest fire before it could reach the houses at the bottom of the hill.",
  "cn": "消防員整晚努力控制森林火勢，以免它蔓延到山腳下的房子。",
  "cnMarked": "消防員整晚努力【控制】森林火勢，以免它蔓延到山腳下的房子。",
  "isHead": false,
  "level": 2,
  "family": "container"
 },
 {
  "word": "content",
  "answer": "contents",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "內容；內容物",
  "en_def": "the things that are inside something; the information in a book or website",
  "sentence": "She emptied the {{BLANK}} of her school bag onto the bed to look for the lost key, but it was not there.",
  "cn": "她把書包裡的東西全倒在床上找遺失的鑰匙，但鑰匙不在裡面。",
  "cnMarked": "她把書包裡的【東西】全倒在床上找遺失的鑰匙，但鑰匙不在裡面。",
  "isHead": false,
  "level": 4,
  "family": "container"
 }
];
const MCQS = [
 {
  "q": "\"I will try harder\" is not a real plan at all. Give me something ______, like \"I will study English for thirty minutes every night after dinner.\"",
  "options": [
   "constructive",
   "concrete",
   "consistent",
   "conservative"
  ],
  "answer": 1,
  "vocabIndex": 0
 },
 {
  "q": "The orchestra stopped playing at once when the ______ put down his hands. He told the violins they were playing too fast and asked them to start again.",
  "options": [
   "consultant",
   "conqueror",
   "conductor",
   "consumer"
  ],
  "answer": 2,
  "vocabIndex": 4
 },
 {
  "q": "Doctors from all over the world will meet in Taipei next week. At this three-day ______, they will share new ways to treat heart disease and cancer.",
  "options": [
   "conference",
   "conscience",
   "confusion",
   "constitution"
  ],
  "answer": 0,
  "vocabIndex": 9
 },
 {
  "q": "Nobody knew who had taken the money from the teacher's desk. Finally, a boy in the back row stood up to ______ that he had done it.",
  "options": [
   "construct",
   "consult",
   "conquer",
   "confess"
  ],
  "answer": 3,
  "vocabIndex": 13
 },
 {
  "q": "Amy used to be afraid to speak English in class. After winning the speech contest, however, she has much more ______ and often raises her hand.",
  "options": [
   "construction",
   "consequence",
   "confidence",
   "consumption"
  ],
  "answer": 2,
  "vocabIndex": 17
 },
 {
  "q": "The signs at the airport were in a language we could not read. In all the ______, we got on the wrong bus and ended up at the sea instead of the hotel.",
  "options": [
   "conference",
   "confusion",
   "conquest",
   "conscience"
  ],
  "answer": 1,
  "vocabIndex": 23
 },
 {
  "q": "Lily just found out she passed the hardest exam in her school. Let's call her tonight to ______ her and ask how she wants to celebrate.",
  "options": [
   "congratulate",
   "conserve",
   "constitute",
   "consume"
  ],
  "answer": 0,
  "vocabIndex": 28
 },
 {
  "q": "In the United States, a new law cannot start with the president alone. It must first be passed by the national ______, where elected members vote on it.",
  "options": [
   "construction",
   "conscience",
   "congress",
   "consumption"
  ],
  "answer": 2,
  "vocabIndex": 31
 },
 {
  "q": "The small army could not ______ the city because its walls were too high and thick. After three months, the soldiers gave up and went home.",
  "options": [
   "conquer",
   "consume",
   "confess",
   "consult"
  ],
  "answer": 0,
  "vocabIndex": 35
 },
 {
  "q": "Nobody saw Mark break the vase, so he could have stayed quiet. Still, his ______ bothered him so much that he told his mother the truth that night.",
  "options": [
   "container",
   "conscience",
   "conductor",
   "confidence"
  ],
  "answer": 1,
  "vocabIndex": 39
 },
 {
  "q": "Peter played video games all night instead of sleeping. As a ______, he fell asleep in class and missed the most important part of the lesson.",
  "options": [
   "consultation",
   "confession",
   "constitution",
   "consequence"
  ],
  "answer": 3,
  "vocabIndex": 43
 },
 {
  "q": "The typhoon brought heavy rain to the whole island for two days. The ______ flooding closed many roads, and students in three towns stayed home from school.",
  "options": [
   "congressional",
   "confident",
   "consequent",
   "confused"
  ],
  "answer": 2,
  "vocabIndex": 44
 },
 {
  "q": "My grandmother does not like new things or new ideas. She is quite ______, so she still writes letters by hand and refuses to use a smartphone.",
  "options": [
   "concrete",
   "conservative",
   "constructive",
   "conscientious"
  ],
  "answer": 1,
  "vocabIndex": 48
 },
 {
  "q": "Our school team does not ______ only of tall players. In fact, our shortest player is the one who scores the most points in every game.",
  "options": [
   "consist",
   "conquer",
   "confer",
   "construct"
  ],
  "answer": 0,
  "vocabIndex": 53
 },
 {
  "q": "David has been a ______ student all year long. He gets about ninety points on every single test, never much higher and never much lower than that.",
  "options": [
   "confused",
   "consistent",
   "confidential",
   "congratulatory"
  ],
  "answer": 1,
  "vocabIndex": 54
 },
 {
  "q": "Students from other countries now ______ nearly one third of our class. Just ten years ago, there was only one foreign student in the whole school.",
  "options": [
   "congratulate",
   "confess",
   "constitute",
   "consume"
  ],
  "answer": 2,
  "vocabIndex": 59
 },
 {
  "q": "Every citizen over twenty in our country can vote in elections. This right is written in the ______, the most important set of laws in the nation.",
  "options": [
   "consumption",
   "constitution",
   "confession",
   "conference"
  ],
  "answer": 1,
  "vocabIndex": 60
 },
 {
  "q": "The city wants to ______ a new bridge across the river. If the work starts next spring, drivers will be able to use it in about two years.",
  "options": [
   "construct",
   "contain",
   "consult",
   "confuse"
  ],
  "answer": 0,
  "vocabIndex": 63
 },
 {
  "q": "The ______ of the new subway line has made the traffic much worse this year. Big trucks and loud machines fill the main street every day.",
  "options": [
   "consistency",
   "confidence",
   "conservation",
   "construction"
  ],
  "answer": 3,
  "vocabIndex": 64
 },
 {
  "q": "My teacher did not just say my essay was bad. She gave me ______ advice, telling me exactly how to make each paragraph clearer and stronger.",
  "options": [
   "conservative",
   "constructive",
   "consequent",
   "conscious"
  ],
  "answer": 1,
  "vocabIndex": 65
 },
 {
  "q": "Do not take any medicine for your stomach pain just because a friend suggested it. You should ______ a doctor first and then follow his advice carefully.",
  "options": [
   "confess",
   "conquer",
   "conserve",
   "consult"
  ],
  "answer": 3,
  "vocabIndex": 68
 },
 {
  "q": "Sales at the shoe company have dropped sharply this year. The company has hired a ______ to study the problem and tell them how to fix it.",
  "options": [
   "consultant",
   "consumer",
   "conductor",
   "congressman"
  ],
  "answer": 0,
  "vocabIndex": 69
 },
 {
  "q": "People in this city ______ a lot of electricity in summer. Almost every home and shop turns on the air conditioner from early morning until late at night.",
  "options": [
   "confer",
   "consume",
   "constitute",
   "congratulate"
  ],
  "answer": 1,
  "vocabIndex": 72
 },
 {
  "q": "A smart ______ always reads the labels before buying food. She checks how much sugar and salt are inside and compares the prices of different brands.",
  "options": [
   "congressman",
   "conductor",
   "conqueror",
   "consumer"
  ],
  "answer": 3,
  "vocabIndex": 73
 },
 {
  "q": "Put the rest of the soup in a glass ______ with a lid. If you keep it in the fridge, you can still eat it tomorrow for lunch.",
  "options": [
   "conference",
   "constitution",
   "container",
   "conscience"
  ],
  "answer": 2,
  "vocabIndex": 76
 },
 {
  "q": "The two sisters look almost the same and even wear the same glasses. It is easy to ______ them, so their new teacher often calls them by the wrong names.",
  "options": [
   "confuse",
   "construct",
   "conserve",
   "consult"
  ],
  "answer": 0,
  "vocabIndex": 24
 },
 {
  "q": "The forest fire is getting closer to the houses at the bottom of the hill. Hundreds of firefighters are working hard to ______ it before morning.",
  "options": [
   "confer",
   "consist",
   "confess",
   "contain"
  ],
  "answer": 3,
  "vocabIndex": 77
 },
 {
  "q": "The scientists will ______ a study of one thousand teenagers. They want to find out how many hours a day young people spend looking at their phones.",
  "options": [
   "confess",
   "contain",
   "conduct",
   "consume"
  ],
  "answer": 2,
  "vocabIndex": 6
 },
 {
  "q": "We get only a little rain in this area each year. That is why the government asks everyone to ______ water and fix any leaking taps right away.",
  "options": [
   "conserve",
   "consult",
   "construct",
   "conquer"
  ],
  "answer": 0,
  "vocabIndex": 51
 },
 {
  "q": "These two sisters look so much alike that even I get ______ sometimes. Yesterday, I said hello to Jenny and found out that it was actually Judy.",
  "options": [
   "concrete",
   "constitutional",
   "confidential",
   "confused"
  ],
  "answer": 3,
  "vocabIndex": 26
 }
];
const LOOKUP = {};
VOCAB.forEach(v => { const key = v.word.toLowerCase(); const sense = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def };
  if (LOOKUP[key]) LOOKUP[key].combined.push(sense); else LOOKUP[key] = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def, combined: [sense] }; });
const EXTRA_GLOSSES = {};