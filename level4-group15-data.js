// 學測6000字 Level 4 Group 15 (enlargement-explanation) — word-family edition
const QUIZ_CONFIG = {
  groupName: "6000字 L4 Group 15 - enlargement – explanation (word family)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};
const VOCAB = [
 {
  "word": "enlarge",
  "answer": "enlarge",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "放大；擴大",
  "en_def": "to make something bigger",
  "sentence": "The photo shop can {{BLANK}} this small picture of my grandparents so that we can hang it on the living room wall.",
  "cn": "照相館可以把這張我祖父母的小照片放大，這樣我們就能把它掛在客廳牆上。",
  "cnMarked": "照相館可以把這張我祖父母的小照片【放大】，這樣我們就能把它掛在客廳牆上。",
  "isHead": true,
  "level": 4,
  "family": "enlarge(ment)"
 },
 {
  "word": "enlargement",
  "answer": "enlargement",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "放大；擴大",
  "en_def": "the act of making something bigger; a bigger copy of a photo",
  "sentence": "The {{BLANK}} of the school library will give students three hundred more seats and a quiet room for group discussion.",
  "cn": "學校圖書館的擴建將為學生增加三百個座位和一間安靜的小組討論室。",
  "cnMarked": "學校圖書館的【擴建】將為學生增加三百個座位和一間安靜的小組討論室。",
  "isHead": false,
  "level": 4,
  "family": "enlarge(ment)"
 },
 {
  "word": "large",
  "answer": "large",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "大的；大量的",
  "en_def": "big in size or amount",
  "sentence": "A {{BLANK}} number of students stayed after school to practice for the music contest, so the hall was very noisy.",
  "cn": "大量學生放學後留下來為音樂比賽練習，所以禮堂非常吵。",
  "cnMarked": "【大量】學生放學後留下來為音樂比賽練習，所以禮堂非常吵。",
  "isHead": false,
  "level": 1,
  "family": "enlarge(ment)"
 },
 {
  "word": "largely",
  "answer": "largely",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "大部分；主要地",
  "en_def": "mostly; mainly",
  "sentence": "The success of the school fair was {{BLANK}} due to the parents who cooked, cleaned, and sold tickets all day.",
  "cn": "學校園遊會的成功主要歸功於整天煮飯、打掃和賣票的家長們。",
  "cnMarked": "學校園遊會的成功【主要】歸功於整天煮飯、打掃和賣票的家長們。",
  "isHead": false,
  "level": 4,
  "family": "enlarge(ment)"
 },
 {
  "word": "enormous",
  "answer": "enormous",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "巨大的",
  "en_def": "extremely large",
  "sentence": "The new shopping mall is {{BLANK}}, with over four hundred stores, two cinemas, and a parking lot for five thousand cars.",
  "cn": "新的購物中心非常巨大，有四百多家商店、兩間電影院和可停五千輛車的停車場。",
  "cnMarked": "新的購物中心【非常巨大】，有四百多家商店、兩間電影院和可停五千輛車的停車場。",
  "isHead": true,
  "level": 4,
  "family": "enormous"
 },
 {
  "word": "enormously",
  "answer": "enormously",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "極大地；非常",
  "en_def": "extremely; very much",
  "sentence": "Online learning has grown {{BLANK}} in the past few years, and many students now take classes at home.",
  "cn": "線上學習在過去幾年大幅成長，許多學生現在在家上課。",
  "cnMarked": "線上學習在過去幾年【大幅】成長，許多學生現在在家上課。",
  "isHead": false,
  "level": null,
  "family": "enormous"
 },
 {
  "word": "an enormous amount of",
  "answer": "an enormous amount of",
  "nblanks": 4,
  "pos": "n.phr.",
  "cn_def": "大量的",
  "en_def": "a very large quantity of",
  "sentence": "The volunteers collected {{BLANK}} food for the families who lost their homes in the flood last month.",
  "cn": "志工們為上個月洪水中失去家園的家庭募集了大量的食物。",
  "cnMarked": "志工們為上個月洪水中失去家園的家庭募集了【大量的】食物。",
  "isHead": false,
  "level": null,
  "family": "enormous"
 },
 {
  "word": "ensure",
  "answer": "ensure",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "確保",
  "en_def": "to make certain that something happens",
  "sentence": "Please check the list twice to {{BLANK}} that every student has a ticket before the bus leaves for the museum.",
  "cn": "請在公車出發去博物館前檢查名單兩次，確保每個學生都有票。",
  "cnMarked": "請在公車出發去博物館前檢查名單兩次，【確保】每個學生都有票。",
  "isHead": true,
  "level": 4,
  "family": "ensure"
 },
 {
  "word": "make sure",
  "answer": "make sure",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "確認；確保",
  "en_def": "to check so that something is certain",
  "sentence": "Before you leave the house, {{BLANK}} that all the windows are closed, because a typhoon is coming tonight.",
  "cn": "出門前請確認所有窗戶都關好，因為今晚颱風要來了。",
  "cnMarked": "出門前請【確認】所有窗戶都關好，因為今晚颱風要來了。",
  "isHead": false,
  "level": null,
  "family": "ensure"
 },
 {
  "word": "sure",
  "answer": "sure",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "確定的",
  "en_def": "certain; having no doubt",
  "sentence": "Are you {{BLANK}} that the test is on Friday and not Thursday? I want to plan my study time correctly.",
  "cn": "你確定考試是星期五而不是星期四嗎？我想正確安排我的讀書時間。",
  "cnMarked": "你【確定】考試是星期五而不是星期四嗎？我想正確安排我的讀書時間。",
  "isHead": false,
  "level": 1,
  "family": "ensure"
 },
 {
  "word": "assure",
  "answer": "assured",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "向…保證",
  "en_def": "to tell someone that something is true so they stop worrying",
  "sentence": "The doctor {{BLANK}} my mother that the operation was simple and that I would be home in two days.",
  "cn": "醫生向我媽媽保證手術很簡單，我兩天後就能回家。",
  "cnMarked": "醫生【向】我媽媽【保證】手術很簡單，我兩天後就能回家。",
  "isHead": false,
  "level": 4,
  "family": "ensure"
 },
 {
  "word": "entertain",
  "answer": "entertained",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "使娛樂；款待",
  "en_def": "to amuse people; to have guests at your home",
  "sentence": "The clown {{BLANK}} the children at the birthday party with funny jokes and magic tricks for nearly an hour.",
  "cn": "小丑在生日派對上用搞笑的笑話和魔術娛樂孩子們將近一個小時。",
  "cnMarked": "小丑在生日派對上用搞笑的笑話和魔術【娛樂】孩子們將近一個小時。",
  "isHead": true,
  "level": 4,
  "family": "entertain(ment)"
 },
 {
  "word": "entertainment",
  "answer": "entertainment",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "娛樂",
  "en_def": "things like movies, music, and games that amuse people",
  "sentence": "There is not much {{BLANK}} in my grandmother's village, so young people usually go to the city on weekends.",
  "cn": "我奶奶的村子裡沒有什麼娛樂，所以年輕人週末通常都去城裡。",
  "cnMarked": "我奶奶的村子裡沒有什麼【娛樂】，所以年輕人週末通常都去城裡。",
  "isHead": false,
  "level": 4,
  "family": "entertain(ment)"
 },
 {
  "word": "entertaining",
  "answer": "entertaining",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "有趣的；娛樂性的",
  "en_def": "funny and enjoyable",
  "sentence": "The science show was so {{BLANK}} that even the students who hate physics laughed and asked questions.",
  "cn": "這場科學秀太有趣了，連討厭物理的學生都笑了並提出問題。",
  "cnMarked": "這場科學秀太【有趣】了，連討厭物理的學生都笑了並提出問題。",
  "isHead": false,
  "level": null,
  "family": "entertain(ment)"
 },
 {
  "word": "entertainer",
  "answer": "entertainer",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "藝人；表演者",
  "en_def": "a person whose job is to amuse people, such as a singer",
  "sentence": "The famous {{BLANK}} sang, danced, and told jokes on stage, and the audience did not want the show to end.",
  "cn": "這位知名藝人在台上唱歌、跳舞、講笑話，觀眾都不希望表演結束。",
  "cnMarked": "這位知名【藝人】在台上唱歌、跳舞、講笑話，觀眾都不希望表演結束。",
  "isHead": false,
  "level": null,
  "family": "entertain(ment)"
 },
 {
  "word": "enthusiasm",
  "answer": "enthusiasm",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "熱情；熱忱",
  "en_def": "a strong feeling of interest and excitement",
  "sentence": "The new teacher's {{BLANK}} for science is catching, and now half the class wants to join the science club.",
  "cn": "新老師對科學的熱情很有感染力，現在半個班級都想加入科學社。",
  "cnMarked": "新老師對科學的【熱情】很有感染力，現在半個班級都想加入科學社。",
  "isHead": true,
  "level": 4,
  "family": "enthusiasm"
 },
 {
  "word": "enthusiastic",
  "answer": "enthusiastic",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "熱情的；熱衷的",
  "en_def": "showing a lot of interest and excitement",
  "sentence": "The fans were so {{BLANK}} that they waited outside the stadium for six hours in the rain to see the team.",
  "cn": "球迷們非常熱情，在雨中在體育場外等了六個小時只為見到球隊。",
  "cnMarked": "球迷們非常【熱情】，在雨中在體育場外等了六個小時只為見到球隊。",
  "isHead": false,
  "level": 5,
  "family": "enthusiasm"
 },
 {
  "word": "enthusiastically",
  "answer": "enthusiastically",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "熱情地",
  "en_def": "with a lot of interest and excitement",
  "sentence": "The whole class clapped {{BLANK}} on Friday when Amy finished her speech about protecting sea turtles.",
  "cn": "星期五當艾咪結束關於保護海龜的演講時，全班熱情地鼓掌。",
  "cnMarked": "星期五當艾咪結束關於保護海龜的演講時，全班【熱情地】鼓掌。",
  "isHead": false,
  "level": null,
  "family": "enthusiasm"
 },
 {
  "word": "equality",
  "answer": "equality",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "平等",
  "en_def": "the state of having the same rights and chances as others",
  "sentence": "The school believes in {{BLANK}}, so boys and girls play on the same sports teams and share the same jobs.",
  "cn": "這所學校相信平等，所以男生和女生在同樣的運動隊伍打球，並分擔同樣的工作。",
  "cnMarked": "這所學校相信【平等】，所以男生和女生在同樣的運動隊伍打球，並分擔同樣的工作。",
  "isHead": true,
  "level": 4,
  "family": "equality"
 },
 {
  "word": "equal",
  "answer": "equal",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "相等的；平等的",
  "en_def": "the same in size, amount, or value",
  "sentence": "Cut the cake into eight {{BLANK}} pieces so that every child at the party gets exactly the same amount.",
  "cn": "把蛋糕切成八等份，這樣派對上的每個孩子都能拿到完全一樣的量。",
  "cnMarked": "把蛋糕切成八【等】份，這樣派對上的每個孩子都能拿到完全一樣的量。",
  "isHead": false,
  "level": 2,
  "family": "equality"
 },
 {
  "word": "equally",
  "answer": "equally",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "同樣地；平等地",
  "en_def": "in the same way or to the same degree",
  "sentence": "Both players performed {{BLANK}} well in the final, so the judges needed ten minutes to decide the winner.",
  "cn": "兩位選手在決賽中表現得同樣出色，所以評審花了十分鐘才決定勝者。",
  "cnMarked": "兩位選手在決賽中表現得【同樣】出色，所以評審花了十分鐘才決定勝者。",
  "isHead": false,
  "level": null,
  "family": "equality"
 },
 {
  "word": "be equal to",
  "answer": "is equal to",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "等於；勝任",
  "en_def": "to be the same as; to be able to deal with",
  "sentence": "One kilometer {{BLANK}} one thousand meters, so the five-kilometer race is five thousand meters long.",
  "cn": "一公里等於一千公尺，所以五公里的賽跑長五千公尺。",
  "cnMarked": "一公里【等於】一千公尺，所以五公里的賽跑長五千公尺。",
  "isHead": false,
  "level": null,
  "family": "equality"
 },
 {
  "word": "inequality",
  "answer": "inequality",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "不平等",
  "en_def": "the unfair situation in which some people have more rights or money than others",
  "sentence": "Many people are worried about the growing {{BLANK}} between rich and poor families in big cities around the world.",
  "cn": "許多人擔心世界各大城市中富裕家庭與貧窮家庭之間日益擴大的不平等。",
  "cnMarked": "許多人擔心世界各大城市中富裕家庭與貧窮家庭之間日益擴大的【不平等】。",
  "isHead": false,
  "level": null,
  "family": "equality"
 },
 {
  "word": "equip",
  "answer": "equip",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "裝備；配備",
  "en_def": "to provide someone or something with what is needed",
  "sentence": "The school will {{BLANK}} every classroom with a new projector and a faster computer before the semester starts.",
  "cn": "學校會在學期開始前為每間教室配備新的投影機和更快的電腦。",
  "cnMarked": "學校會在學期開始前為每間教室【配備】新的投影機和更快的電腦。",
  "isHead": true,
  "level": 4,
  "family": "equip(ment)"
 },
 {
  "word": "equipment",
  "answer": "equipment",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "設備；裝備",
  "en_def": "the tools or machines needed for a job or activity",
  "sentence": "The camping {{BLANK}} is heavy, so we will share the tent, the stove, and the cooking pots among the four of us.",
  "cn": "露營裝備很重，所以我們四個人會分攤帳篷、爐子和鍋具。",
  "cnMarked": "露營【裝備】很重，所以我們四個人會分攤帳篷、爐子和鍋具。",
  "isHead": false,
  "level": 4,
  "family": "equip(ment)"
 },
 {
  "word": "be equipped with",
  "answer": "is equipped with",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "配備有",
  "en_def": "to have the tools or features needed",
  "sentence": "The new ambulance {{BLANK}} modern machines, so doctors can begin treating patients on the way to the hospital.",
  "cn": "新救護車配備有現代化的儀器，所以醫生能在前往醫院的途中就開始治療病患。",
  "cnMarked": "新救護車【配備有】現代化的儀器，所以醫生能在前往醫院的途中就開始治療病患。",
  "isHead": false,
  "level": null,
  "family": "equip(ment)"
 },
 {
  "word": "a piece of equipment",
  "answer": "a piece of equipment",
  "nblanks": 4,
  "pos": "n.phr.",
  "cn_def": "一件設備",
  "en_def": "one tool or machine",
  "sentence": "A microscope is {{BLANK}} that every biology lab needs, because it lets students see tiny living things.",
  "cn": "顯微鏡是每間生物實驗室都需要的一件設備，因為它讓學生能看到微小的生物。",
  "cnMarked": "顯微鏡是每間生物實驗室都需要的【一件設備】，因為它讓學生能看到微小的生物。",
  "isHead": false,
  "level": null,
  "family": "equip(ment)"
 },
 {
  "word": "era",
  "answer": "era",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "時代；年代",
  "en_def": "a period of time in history with a special character",
  "sentence": "The invention of the smartphone began a new {{BLANK}} in which people can work, shop, and study almost anywhere.",
  "cn": "智慧型手機的發明開啟了一個新時代，人們幾乎可以在任何地方工作、購物和學習。",
  "cnMarked": "智慧型手機的發明開啟了一個新【時代】，人們幾乎可以在任何地方工作、購物和學習。",
  "isHead": true,
  "level": 4,
  "family": "era"
 },
 {
  "word": "a new era",
  "answer": "a new era",
  "nblanks": 3,
  "pos": "n.phr.",
  "cn_def": "新時代",
  "en_def": "the beginning of a very different period",
  "sentence": "The first high-speed train in 2007 marked {{BLANK}} for travel in Taiwan, cutting the trip from Taipei to Kaohsiung to ninety minutes.",
  "cn": "2007年第一班高鐵標誌著台灣旅行的新時代，把台北到高雄的車程縮短到九十分鐘。",
  "cnMarked": "2007年第一班高鐵標誌著台灣旅行的【新時代】，把台北到高雄的車程縮短到九十分鐘。",
  "isHead": false,
  "level": null,
  "family": "era"
 },
 {
  "word": "the modern era",
  "answer": "the modern era",
  "nblanks": 3,
  "pos": "n.phr.",
  "cn_def": "現代",
  "en_def": "the period of recent history up to now",
  "sentence": "In {{BLANK}}, most people get their news from phones rather than from newspapers delivered to their doors.",
  "cn": "在現代，大多數人從手機而不是從送到家門口的報紙獲得新聞。",
  "cnMarked": "在【現代】，大多數人從手機而不是從送到家門口的報紙獲得新聞。",
  "isHead": false,
  "level": null,
  "family": "era"
 },
 {
  "word": "essential",
  "answer": "essential",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "必要的；不可或缺的",
  "en_def": "completely necessary; very important",
  "sentence": "Clean water is {{BLANK}} for good health, so remember to carry a bottle with you when you hike in summer.",
  "cn": "乾淨的水對健康是不可或缺的，所以夏天爬山時記得帶一瓶水。",
  "cnMarked": "乾淨的水對健康是【不可或缺的】，所以夏天爬山時記得帶一瓶水。",
  "isHead": true,
  "level": 4,
  "family": "essential"
 },
 {
  "word": "essential",
  "answer": "essentials",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "必需品",
  "en_def": "something that is necessary (usually plural)",
  "sentence": "Before the typhoon arrived, we bought the {{BLANK}} such as candles, batteries, bread, and bottled water.",
  "cn": "颱風來臨前，我們買了蠟燭、電池、麵包和瓶裝水等必需品。",
  "cnMarked": "颱風來臨前，我們買了蠟燭、電池、麵包和瓶裝水等【必需品】。",
  "isHead": false,
  "level": 4,
  "family": "essential"
 },
 {
  "word": "essentially",
  "answer": "essentially",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "本質上；基本上",
  "en_def": "basically; in the most important ways",
  "sentence": "The two phones are {{BLANK}} the same, although the newer one has a slightly better camera and costs more.",
  "cn": "這兩支手機基本上是一樣的，雖然新的那支相機稍微好一點，而且比較貴。",
  "cnMarked": "這兩支手機【基本上】是一樣的，雖然新的那支相機稍微好一點，而且比較貴。",
  "isHead": false,
  "level": null,
  "family": "essential"
 },
 {
  "word": "essence",
  "answer": "essence",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "本質；精髓",
  "en_def": "the most important quality of something",
  "sentence": "The {{BLANK}} of good teaching is helping students ask their own questions, not just giving them the answers.",
  "cn": "良好教學的本質是幫助學生提出自己的問題，而不只是給他們答案。",
  "cnMarked": "良好教學的【本質】是幫助學生提出自己的問題，而不只是給他們答案。",
  "isHead": false,
  "level": 5,
  "family": "essential"
 },
 {
  "word": "establish",
  "answer": "establish",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "建立；設立",
  "en_def": "to start or create an organization, system, or relationship",
  "sentence": "The two schools decided to {{BLANK}} an exchange program so that students can visit each other's countries every summer.",
  "cn": "這兩所學校決定建立一個交換計畫，讓學生每年夏天可以互訪對方的國家。",
  "cnMarked": "這兩所學校決定【建立】一個交換計畫，讓學生每年夏天可以互訪對方的國家。",
  "isHead": true,
  "level": 4,
  "family": "establish(ment)"
 },
 {
  "word": "establishment",
  "answer": "establishment",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "建立；機構",
  "en_def": "the act of starting an organization; a business or organization",
  "sentence": "The {{BLANK}} of a free clinic in the village means that sick people no longer have to travel two hours to see a doctor.",
  "cn": "村子裡設立免費診所，意味著生病的人不必再花兩小時去看醫生。",
  "cnMarked": "村子裡【設立】免費診所，意味著生病的人不必再花兩小時去看醫生。",
  "isHead": false,
  "level": 4,
  "family": "establish(ment)"
 },
 {
  "word": "be established in",
  "answer": "was established in",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "創立於",
  "en_def": "to be founded in a certain year",
  "sentence": "Our school {{BLANK}} 1952, so next year we will celebrate its seventy-fifth birthday with a big concert.",
  "cn": "我們學校創立於1952年，所以明年我們將以一場盛大的音樂會慶祝它的七十五歲生日。",
  "cnMarked": "我們學校【創立於】1952年，所以明年我們將以一場盛大的音樂會慶祝它的七十五歲生日。",
  "isHead": false,
  "level": null,
  "family": "establish(ment)"
 },
 {
  "word": "well-established",
  "answer": "well-established",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "歷史悠久的；穩固的",
  "en_def": "having existed for a long time and respected",
  "sentence": "The bakery is a {{BLANK}} business in our town, and three generations of the same family have worked there.",
  "cn": "這家麵包店是我們鎮上歷史悠久的商店，同一家族的三代人都在那裡工作過。",
  "cnMarked": "這家麵包店是我們鎮上【歷史悠久的】商店，同一家族的三代人都在那裡工作過。",
  "isHead": false,
  "level": null,
  "family": "establish(ment)"
 },
 {
  "word": "estimate",
  "answer": "estimate",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "估計",
  "en_def": "to guess the size, amount, or cost of something",
  "sentence": "Experts {{BLANK}} that more than two million people will visit the lantern festival during the ten days it is open.",
  "cn": "專家估計燈會開放的十天期間將有超過兩百萬人參觀。",
  "cnMarked": "專家【估計】燈會開放的十天期間將有超過兩百萬人參觀。",
  "isHead": true,
  "level": 4,
  "family": "estimate"
 },
 {
  "word": "estimate",
  "answer": "estimate",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "估計；估價",
  "en_def": "a guess about the size, amount, or cost of something",
  "sentence": "The repair shop gave us an {{BLANK}} of 3,000 dollars to fix the scooter, but the final bill was a little higher.",
  "cn": "修車行給我們修機車的估價是三千元，但最後的帳單稍微高一點。",
  "cnMarked": "修車行給我們修機車的【估價】是三千元，但最後的帳單稍微高一點。",
  "isHead": false,
  "level": 4,
  "family": "estimate"
 },
 {
  "word": "estimated",
  "answer": "estimated",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "估計的",
  "en_def": "calculated roughly",
  "sentence": "The {{BLANK}} cost of the new bridge is two billion dollars, and the city hopes to finish it within four years.",
  "cn": "新橋的估計成本是二十億元，市政府希望在四年內完工。",
  "cnMarked": "新橋的【估計】成本是二十億元，市政府希望在四年內完工。",
  "isHead": false,
  "level": null,
  "family": "estimate"
 },
 {
  "word": "underestimate",
  "answer": "underestimate",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "低估",
  "en_def": "to think something is smaller or less important than it really is",
  "sentence": "Never {{BLANK}} the power of a good night's sleep, because tired students make many more careless mistakes on tests.",
  "cn": "絕不要低估一夜好眠的力量，因為疲倦的學生在考試中會犯更多粗心的錯誤。",
  "cnMarked": "絕不要【低估】一夜好眠的力量，因為疲倦的學生在考試中會犯更多粗心的錯誤。",
  "isHead": false,
  "level": 6,
  "family": "estimate"
 },
 {
  "word": "ethnic",
  "answer": "ethnic",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "種族的；民族的",
  "en_def": "connected with a group of people who share the same culture, language, or race",
  "sentence": "Taiwan has many {{BLANK}} groups, including the Amis and the Atayal, and each one has its own language and festivals.",
  "cn": "台灣有許多民族群體，包括阿美族和泰雅族，每一族都有自己的語言和節慶。",
  "cnMarked": "台灣有許多【民族】群體，包括阿美族和泰雅族，每一族都有自己的語言和節慶。",
  "isHead": true,
  "level": 4,
  "family": "ethnic"
 },
 {
  "word": "ethnic group",
  "answer": "ethnic group",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "族群",
  "en_def": "people who share the same culture, language, or history",
  "sentence": "Students learned that the Hakka are an important {{BLANK}} in Taiwan with their own food, songs, and traditional clothes.",
  "cn": "學生們了解到客家人是台灣重要的族群，有自己的食物、歌曲和傳統服飾。",
  "cnMarked": "學生們了解到客家人是台灣重要的【族群】，有自己的食物、歌曲和傳統服飾。",
  "isHead": false,
  "level": null,
  "family": "ethnic"
 },
 {
  "word": "ethnicity",
  "answer": "ethnicity",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "種族；民族身分",
  "en_def": "the fact of belonging to a particular ethnic group",
  "sentence": "The survey asked people about their age and job, but it did not ask about their {{BLANK}} or religion.",
  "cn": "這份問卷詢問了人們的年齡和職業，但沒有問他們的民族身分或宗教。",
  "cnMarked": "這份問卷詢問了人們的年齡和職業，但沒有問他們的【民族身分】或宗教。",
  "isHead": false,
  "level": null,
  "family": "ethnic"
 },
 {
  "word": "evaluate",
  "answer": "evaluate",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "評估；評價",
  "en_def": "to judge how good, useful, or successful something is",
  "sentence": "At the end of the course, students are asked to {{BLANK}} the teacher by filling out a short online form.",
  "cn": "課程結束時，學生會被要求填寫一份簡短的線上表格來評價老師。",
  "cnMarked": "課程結束時，學生會被要求填寫一份簡短的線上表格來【評價】老師。",
  "isHead": true,
  "level": 4,
  "family": "evaluate"
 },
 {
  "word": "evaluation",
  "answer": "evaluation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "評估；評價",
  "en_def": "a judgment about how good or useful something is",
  "sentence": "The company sends every worker a yearly {{BLANK}} that explains what they did well and what they should improve.",
  "cn": "公司每年會給每位員工一份評估，說明他們做得好的地方和應該改進的地方。",
  "cnMarked": "公司每年會給每位員工一份【評估】，說明他們做得好的地方和應該改進的地方。",
  "isHead": true,
  "level": 4,
  "family": "evaluate"
 },
 {
  "word": "value",
  "answer": "value",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "價值",
  "en_def": "how much something is worth; importance",
  "sentence": "The {{BLANK}} of the old painting went up after the artist died, and it was finally sold for two million dollars.",
  "cn": "這幅老畫的價值在畫家去世後上漲，最後以兩百萬元賣出。",
  "cnMarked": "這幅老畫的【價值】在畫家去世後上漲，最後以兩百萬元賣出。",
  "isHead": false,
  "level": 2,
  "family": "evaluate"
 },
 {
  "word": "valuable",
  "answer": "valuable",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "貴重的；有價值的",
  "en_def": "worth a lot of money; very useful",
  "sentence": "Do not leave {{BLANK}} things like phones and wallets in the classroom when you go to PE class.",
  "cn": "去上體育課時，不要把手機和錢包等貴重物品留在教室裡。",
  "cnMarked": "去上體育課時，不要把手機和錢包等【貴重】物品留在教室裡。",
  "isHead": false,
  "level": 2,
  "family": "evaluate"
 },
 {
  "word": "eventual",
  "answer": "eventual",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "最終的",
  "en_def": "happening at the end of a process",
  "sentence": "The team lost the first two games, but their {{BLANK}} victory in the final made all the hard training worthwhile.",
  "cn": "球隊輸了前兩場比賽，但他們在決賽中的最終勝利讓所有辛苦的訓練都值得了。",
  "cnMarked": "球隊輸了前兩場比賽，但他們在決賽中的【最終】勝利讓所有辛苦的訓練都值得了。",
  "isHead": true,
  "level": 4,
  "family": "eventual"
 },
 {
  "word": "eventually",
  "answer": "eventually",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "最後；終於",
  "en_def": "in the end, after a long time",
  "sentence": "After waiting for the bus for forty minutes in the rain, we {{BLANK}} decided to take a taxi home.",
  "cn": "在雨中等了四十分鐘的公車後，我們最後決定搭計程車回家。",
  "cnMarked": "在雨中等了四十分鐘的公車後，我們【最後】決定搭計程車回家。",
  "isHead": false,
  "level": null,
  "family": "eventual"
 },
 {
  "word": "event",
  "answer": "event",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "事件；活動",
  "en_def": "something that happens, especially something important",
  "sentence": "The school sports day is the biggest {{BLANK}} of the year, and parents come to cheer for their children.",
  "cn": "學校運動會是一年中最大的活動，家長們都會來為孩子加油。",
  "cnMarked": "學校運動會是一年中最大的【活動】，家長們都會來為孩子加油。",
  "isHead": false,
  "level": 2,
  "family": "eventual"
 },
 {
  "word": "evidence",
  "answer": "evidence",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "證據",
  "en_def": "facts or signs that show something is true",
  "sentence": "The police found no {{BLANK}} that the man had been in the shop, so they had to let him go.",
  "cn": "警方找不到那名男子曾在店裡的證據，所以只好放他走。",
  "cnMarked": "警方找不到那名男子曾在店裡的【證據】，所以只好放他走。",
  "isHead": true,
  "level": 4,
  "family": "evidence"
 },
 {
  "word": "evident",
  "answer": "evident",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "明顯的",
  "en_def": "easy to see or understand; clear",
  "sentence": "It was {{BLANK}} from her red eyes that she had been crying, so I sat down beside her and waited quietly.",
  "cn": "從她紅紅的眼睛可以明顯看出她哭過，所以我在她身邊坐下來安靜地等著。",
  "cnMarked": "從她紅紅的眼睛可以【明顯】看出她哭過，所以我在她身邊坐下來安靜地等著。",
  "isHead": true,
  "level": 4,
  "family": "evidence"
 },
 {
  "word": "evidently",
  "answer": "evidently",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "明顯地；顯然",
  "en_def": "clearly; it seems that",
  "sentence": "The boy had {{BLANK}} not done his homework, because he could not answer even the easiest question the teacher asked.",
  "cn": "那個男孩顯然沒有做功課，因為他連老師問的最簡單的問題都答不出來。",
  "cnMarked": "那個男孩【顯然】沒有做功課，因為他連老師問的最簡單的問題都答不出來。",
  "isHead": false,
  "level": null,
  "family": "evidence"
 },
 {
  "word": "give evidence",
  "answer": "give evidence",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "作證",
  "en_def": "to tell a court what you saw or know",
  "sentence": "The shop owner had to {{BLANK}} in court about what she saw on the night of the robbery.",
  "cn": "店主必須在法庭上就搶案當晚她所看到的情況作證。",
  "cnMarked": "店主必須在法庭上就搶案當晚她所看到的情況【作證】。",
  "isHead": false,
  "level": null,
  "family": "evidence"
 },
 {
  "word": "exaggerate",
  "answer": "exaggerate",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "誇大",
  "en_def": "to make something seem bigger or better than it really is",
  "sentence": "My uncle likes to {{BLANK}} when he tells stories, so the fish he caught gets bigger every time we hear about it.",
  "cn": "我叔叔講故事時喜歡誇大，所以他釣到的魚每次聽起來都變得更大。",
  "cnMarked": "我叔叔講故事時喜歡【誇大】，所以他釣到的魚每次聽起來都變得更大。",
  "isHead": true,
  "level": 4,
  "family": "exaggerate"
 },
 {
  "word": "exaggeration",
  "answer": "exaggeration",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "誇張；誇大",
  "en_def": "a statement that makes something seem bigger or better than it is",
  "sentence": "It is no {{BLANK}} to say that the night market is the most popular place in town on a Saturday evening.",
  "cn": "說夜市是週六晚上鎮上最受歡迎的地方，一點也不誇張。",
  "cnMarked": "說夜市是週六晚上鎮上最受歡迎的地方，一點也不【誇張】。",
  "isHead": false,
  "level": 5,
  "family": "exaggerate"
 },
 {
  "word": "exaggerated",
  "answer": "exaggerated",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "誇大的",
  "en_def": "made to seem bigger or more important than it is",
  "sentence": "The movie poster gives an {{BLANK}} idea of how scary the film is; actually, even my little sister enjoyed it.",
  "cn": "電影海報對這部片有多恐怖給了一個誇大的印象；其實連我妹妹都看得很開心。",
  "cnMarked": "電影海報對這部片有多恐怖給了一個【誇大的】印象；其實連我妹妹都看得很開心。",
  "isHead": false,
  "level": null,
  "family": "exaggerate"
 },
 {
  "word": "exception",
  "answer": "exception",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "例外",
  "en_def": "a person or thing that is not included in a rule",
  "sentence": "Everyone in the class passed the test, and the only {{BLANK}} was Tom, who was sick and missed a week of school.",
  "cn": "全班都通過了考試，唯一的例外是湯姆，他生病缺了一週的課。",
  "cnMarked": "全班都通過了考試，唯一的【例外】是湯姆，他生病缺了一週的課。",
  "isHead": true,
  "level": 4,
  "family": "exception"
 },
 {
  "word": "make an exception",
  "answer": "make an exception",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "破例",
  "en_def": "to allow something that is usually not allowed",
  "sentence": "The library does not usually lend out dictionaries, but the librarian agreed to {{BLANK}} for my project.",
  "cn": "圖書館通常不外借字典，但圖書館員同意為了我的專題破例。",
  "cnMarked": "圖書館通常不外借字典，但圖書館員同意為了我的專題【破例】。",
  "isHead": false,
  "level": null,
  "family": "exception"
 },
 {
  "word": "except",
  "answer": "except",
  "nblanks": 1,
  "pos": "prep.",
  "cn_def": "除了…之外",
  "en_def": "not including",
  "sentence": "The museum is open every day {{BLANK}} Monday, so let's plan our visit for the weekend instead.",
  "cn": "博物館除了星期一每天都開放，所以我們改計畫週末去參觀吧。",
  "cnMarked": "博物館【除了】星期一每天都開放，所以我們改計畫週末去參觀吧。",
  "isHead": false,
  "level": 1,
  "family": "exception"
 },
 {
  "word": "exceptional",
  "answer": "exceptional",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "傑出的；異常的",
  "en_def": "unusually good",
  "sentence": "Her {{BLANK}} talent for drawing was clear when she was only five, and she now studies art in Paris.",
  "cn": "她傑出的繪畫天分在五歲時就很明顯，現在她在巴黎學藝術。",
  "cnMarked": "她【傑出的】繪畫天分在五歲時就很明顯，現在她在巴黎學藝術。",
  "isHead": false,
  "level": 5,
  "family": "exception"
 },
 {
  "word": "exhaust",
  "answer": "exhaust",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "使筋疲力盡；耗盡",
  "en_def": "to make someone very tired; to use something up completely",
  "sentence": "Climbing the mountain in the summer heat will {{BLANK}} you quickly, so bring plenty of water and rest often.",
  "cn": "在夏天的酷熱中爬山會很快讓你筋疲力盡，所以要帶足夠的水並常常休息。",
  "cnMarked": "在夏天的酷熱中爬山會很快讓你【筋疲力盡】，所以要帶足夠的水並常常休息。",
  "isHead": true,
  "level": 4,
  "family": "exhaust"
 },
 {
  "word": "exhaust",
  "answer": "exhaust",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "廢氣",
  "en_def": "the waste gas that comes out of a vehicle",
  "sentence": "The {{BLANK}} from thousands of cars and scooters makes the air in the city dirty, especially during rush hour.",
  "cn": "成千上萬汽機車排放的廢氣讓城市的空氣變髒，尤其是在尖峰時段。",
  "cnMarked": "成千上萬汽機車排放的【廢氣】讓城市的空氣變髒，尤其是在尖峰時段。",
  "isHead": false,
  "level": 4,
  "family": "exhaust"
 },
 {
  "word": "exhausted",
  "answer": "exhausted",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "筋疲力盡的",
  "en_def": "extremely tired",
  "sentence": "After running the whole marathon, she was so {{BLANK}} that she fell asleep on the bus before it left the parking lot.",
  "cn": "跑完整場馬拉松後，她筋疲力盡，公車還沒開出停車場她就睡著了。",
  "cnMarked": "跑完整場馬拉松後，她【筋疲力盡】，公車還沒開出停車場她就睡著了。",
  "isHead": false,
  "level": null,
  "family": "exhaust"
 },
 {
  "word": "exhausting",
  "answer": "exhausting",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "令人筋疲力盡的",
  "en_def": "making you extremely tired",
  "sentence": "Looking after three small children all day is {{BLANK}} work, so my aunt is always asleep by nine o'clock.",
  "cn": "整天照顧三個小孩是令人筋疲力盡的工作，所以我阿姨總是九點前就睡著了。",
  "cnMarked": "整天照顧三個小孩是【令人筋疲力盡的】工作，所以我阿姨總是九點前就睡著了。",
  "isHead": false,
  "level": null,
  "family": "exhaust"
 },
 {
  "word": "exhaustion",
  "answer": "exhaustion",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "筋疲力盡",
  "en_def": "the state of being extremely tired",
  "sentence": "Two of the hikers were taken to the hospital with {{BLANK}} after they walked for fourteen hours without enough food.",
  "cn": "兩名登山客在沒有足夠食物的情況下走了十四小時後，因筋疲力盡被送往醫院。",
  "cnMarked": "兩名登山客在沒有足夠食物的情況下走了十四小時後，因【筋疲力盡】被送往醫院。",
  "isHead": false,
  "level": null,
  "family": "exhaust"
 },
 {
  "word": "exhibit",
  "answer": "exhibit",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "展示；展出",
  "en_def": "to show something in a public place",
  "sentence": "The gallery will {{BLANK}} paintings by local high school students for two weeks, and entry is free for everyone.",
  "cn": "畫廊將展出本地高中生的畫作兩週，所有人免費入場。",
  "cnMarked": "畫廊將【展出】本地高中生的畫作兩週，所有人免費入場。",
  "isHead": true,
  "level": 4,
  "family": "exhibit"
 },
 {
  "word": "exhibit",
  "answer": "exhibit",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "展覽品；展覽",
  "en_def": "an object or a collection shown in a museum",
  "sentence": "The most popular {{BLANK}} at the science museum is a real dinosaur bone that visitors are allowed to touch.",
  "cn": "科學博物館最受歡迎的展覽品是一根真的恐龍骨頭，參觀者可以觸摸。",
  "cnMarked": "科學博物館最受歡迎的【展覽品】是一根真的恐龍骨頭，參觀者可以觸摸。",
  "isHead": false,
  "level": 4,
  "family": "exhibit"
 },
 {
  "word": "exhibition",
  "answer": "exhibition",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "展覽",
  "en_def": "a public show of art or other objects",
  "sentence": "My art class is holding an {{BLANK}} in the school hall next week, and my painting of the sea will be in it.",
  "cn": "我的美術班下週將在學校禮堂舉辦展覽，我畫的海也會在其中。",
  "cnMarked": "我的美術班下週將在學校禮堂舉辦【展覽】，我畫的海也會在其中。",
  "isHead": false,
  "level": 3,
  "family": "exhibit"
 },
 {
  "word": "expand",
  "answer": "expand",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "擴大；擴張",
  "en_def": "to become larger or make something larger",
  "sentence": "The small coffee shop has done so well that the owner plans to {{BLANK}} it by adding a second floor next year.",
  "cn": "這家小咖啡店生意很好，老闆計畫明年加蓋二樓來擴大它。",
  "cnMarked": "這家小咖啡店生意很好，老闆計畫明年加蓋二樓來【擴大】它。",
  "isHead": true,
  "level": 4,
  "family": "expand"
 },
 {
  "word": "expansion",
  "answer": "expansion",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "擴大；擴張",
  "en_def": "the process of becoming larger",
  "sentence": "The rapid {{BLANK}} of the city means that farms which were here ten years ago are now covered with apartment buildings.",
  "cn": "城市的快速擴張意味著十年前還在這裡的農田，現在已經蓋滿了公寓大樓。",
  "cnMarked": "城市的快速【擴張】意味著十年前還在這裡的農田，現在已經蓋滿了公寓大樓。",
  "isHead": true,
  "level": 4,
  "family": "expand"
 },
 {
  "word": "expand into",
  "answer": "expanded into",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "擴展到…",
  "en_def": "to start doing business in a new area or field",
  "sentence": "The bubble tea company first opened in Taichung and later {{BLANK}} Japan, Korea, and several cities in Europe.",
  "cn": "這家珍珠奶茶公司最初在台中開業，後來擴展到日本、韓國和歐洲的幾個城市。",
  "cnMarked": "這家珍珠奶茶公司最初在台中開業，後來【擴展到】日本、韓國和歐洲的幾個城市。",
  "isHead": false,
  "level": null,
  "family": "expand"
 },
 {
  "word": "experimental",
  "answer": "experimental",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "實驗性的；實驗的",
  "en_def": "new and being tested; connected with experiments",
  "sentence": "The {{BLANK}} medicine helped many patients in the study, but doctors say more tests are needed before it goes on sale.",
  "cn": "這種實驗性的藥物在研究中幫助了許多病患，但醫生說上市前還需要更多測試。",
  "cnMarked": "這種【實驗性的】藥物在研究中幫助了許多病患，但醫生說上市前還需要更多測試。",
  "isHead": true,
  "level": 4,
  "family": "experimental"
 },
 {
  "word": "experiment",
  "answer": "experiment",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "實驗",
  "en_def": "a scientific test done to learn something",
  "sentence": "In today's chemistry class, we did an {{BLANK}} to find out which liquid makes an egg float the best.",
  "cn": "在今天的化學課上，我們做了一個實驗，看看哪種液體最能讓雞蛋浮起來。",
  "cnMarked": "在今天的化學課上，我們做了一個【實驗】，看看哪種液體最能讓雞蛋浮起來。",
  "isHead": false,
  "level": 3,
  "family": "experimental"
 },
 {
  "word": "experiment",
  "answer": "experiment",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "做實驗；嘗試",
  "en_def": "to try new ideas or methods to see what happens",
  "sentence": "The chef likes to {{BLANK}} with unusual ingredients, so last week he made ice cream with green tea and black beans.",
  "cn": "這位主廚喜歡用不尋常的食材做嘗試，所以上週他用綠茶和黑豆做了冰淇淋。",
  "cnMarked": "這位主廚喜歡用不尋常的食材【做嘗試】，所以上週他用綠茶和黑豆做了冰淇淋。",
  "isHead": false,
  "level": 3,
  "family": "experimental"
 },
 {
  "word": "explanation",
  "answer": "explanation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "解釋；說明",
  "en_def": "a reason or description that makes something clear",
  "sentence": "The teacher's clear {{BLANK}} of the math problem helped everyone understand it, even the students who had failed the quiz.",
  "cn": "老師對這道數學題清楚的解釋幫助每個人都理解了，連小考不及格的學生也懂了。",
  "cnMarked": "老師對這道數學題清楚的【解釋】幫助每個人都理解了，連小考不及格的學生也懂了。",
  "isHead": true,
  "level": 4,
  "family": "explanation"
 },
 {
  "word": "explain",
  "answer": "explain",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "解釋；說明",
  "en_def": "to make something clear by giving details or reasons",
  "sentence": "Could you {{BLANK}} how this washing machine works? The buttons are all in Japanese, and I cannot read them.",
  "cn": "你能解釋一下這台洗衣機怎麼用嗎？按鈕全是日文，我看不懂。",
  "cnMarked": "你能【解釋】一下這台洗衣機怎麼用嗎？按鈕全是日文，我看不懂。",
  "isHead": false,
  "level": 1,
  "family": "explanation"
 },
 {
  "word": "give an explanation",
  "answer": "give an explanation",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "給出解釋",
  "en_def": "to tell someone the reason for something",
  "sentence": "You were two hours late for dinner, and you need to {{BLANK}} before your mother gets even more worried.",
  "cn": "你晚餐遲到了兩個小時，你需要給個解釋，免得你媽媽更擔心。",
  "cnMarked": "你晚餐遲到了兩個小時，你需要【給個解釋】，免得你媽媽更擔心。",
  "isHead": false,
  "level": null,
  "family": "explanation"
 }
];
const MCQS = [
 {
  "q": "The picture of my grandparents' wedding is too small to see clearly. Mom took it to a photo shop to ______ it so we can hang it on the wall.",
  "options": [
   "exaggerate",
   "establish",
   "enlarge",
   "evaluate"
  ],
  "answer": 2,
  "vocabIndex": 0
 },
 {
  "q": "The new stadium can hold eighty thousand people, and it took five years to build. It is so ______ that you can see it from the highway ten kilometers away.",
  "options": [
   "enormous",
   "experimental",
   "equal",
   "ethnic"
  ],
  "answer": 0,
  "vocabIndex": 4
 },
 {
  "q": "The bus leaves for the museum at eight tomorrow morning. Please count the students twice to ______ that every student is on board before it drives away.",
  "options": [
   "exhaust",
   "ensure",
   "expand",
   "exhibit"
  ],
  "answer": 1,
  "vocabIndex": 7
 },
 {
  "q": "My uncle is the funniest person at every family dinner. He loves to ______ the children with magic tricks and silly songs until they cannot stop laughing.",
  "options": [
   "equip",
   "estimate",
   "enlarge",
   "entertain"
  ],
  "answer": 3,
  "vocabIndex": 11
 },
 {
  "q": "When the teacher asked who wanted to join the science fair, every hand in the room went up at once. She was happy to see so much ______ for the project.",
  "options": [
   "explanation",
   "enthusiasm",
   "exhaustion",
   "equality"
  ],
  "answer": 1,
  "vocabIndex": 15
 },
 {
  "q": "In the past, only boys in the village could go to school. Today, people believe in ______, so girls and boys study in the same classroom and have the same chances.",
  "options": [
   "era",
   "exception",
   "equality",
   "evidence"
  ],
  "answer": 2,
  "vocabIndex": 18
 },
 {
  "q": "Our school just received money from the government for the new computer room. It will be used to ______ the room with thirty laptops and a large screen.",
  "options": [
   "equip",
   "exhibit",
   "evaluate",
   "exaggerate"
  ],
  "answer": 0,
  "vocabIndex": 23
 },
 {
  "q": "Before the Internet, people wrote letters and waited weeks for a reply. The smartphone started a new ______ in which friends can talk to each other at any moment.",
  "options": [
   "exception",
   "era",
   "exhibit",
   "estimate"
  ],
  "answer": 1,
  "vocabIndex": 27
 },
 {
  "q": "You cannot enter the country without this small blue book. A passport is ______ for travel abroad, so check that yours is still good before you book the flight.",
  "options": [
   "essential",
   "enormous",
   "exhausted",
   "exaggerated"
  ],
  "answer": 0,
  "vocabIndex": 30
 },
 {
  "q": "Mr. Lin and his friends wanted to help poor children in the mountains go to school. In 2010, they decided to ______ a charity that pays for the children's books and lunches.",
  "options": [
   "entertain",
   "exhaust",
   "estimate",
   "establish"
  ],
  "answer": 3,
  "vocabIndex": 34
 },
 {
  "q": "Nobody knows exactly how many people will come to the concert on Saturday. The people running the show ______ that about five thousand fans will fill the park if the weather is fine.",
  "options": [
   "estimate",
   "exhibit",
   "equip",
   "explain"
  ],
  "answer": 0,
  "vocabIndex": 38
 },
 {
  "q": "Taiwan is home to many different groups of people, such as the Amis, the Hakka, and the Atayal. Each ______ group has its own language, food, and festivals.",
  "options": [
   "equal",
   "ethnic",
   "eventual",
   "evident"
  ],
  "answer": 1,
  "vocabIndex": 42
 },
 {
  "q": "At the end of every semester, students fill out a form about each class. The school uses these forms to ______ the teachers and help them improve their lessons.",
  "options": [
   "evaluate",
   "enlarge",
   "exaggerate",
   "entertain"
  ],
  "answer": 0,
  "vocabIndex": 45
 },
 {
  "q": "After the science fair, each judge wrote comments about every project. The students read this ______ carefully to find out what they could do better next year.",
  "options": [
   "exhibition",
   "exhaustion",
   "evaluation",
   "expansion"
  ],
  "answer": 2,
  "vocabIndex": 46
 },
 {
  "q": "The team lost the first game and played badly in the second. Nobody expected their ______ win in the final, which made the whole school cheer for an hour.",
  "options": [
   "ethnic",
   "essential",
   "experimental",
   "eventual"
  ],
  "answer": 3,
  "vocabIndex": 49
 },
 {
  "q": "The police think the man stole the bicycle, but they cannot prove it yet. Without any ______, such as a photo or a witness, they have to let him go.",
  "options": [
   "exhaust",
   "evidence",
   "estimate",
   "exception"
  ],
  "answer": 1,
  "vocabIndex": 52
 },
 {
  "q": "Amy did not say a word at lunch, and she kept looking at her phone. It was ______ to all of us that something was wrong, so we asked her what had happened.",
  "options": [
   "enormous",
   "experimental",
   "equal",
   "evident"
  ],
  "answer": 3,
  "vocabIndex": 53
 },
 {
  "q": "Grandpa says the fish he caught was as long as his arm, but the photo shows a very small one. He always likes to ______ when he tells his fishing stories.",
  "options": [
   "ensure",
   "establish",
   "exaggerate",
   "evaluate"
  ],
  "answer": 2,
  "vocabIndex": 56
 },
 {
  "q": "Students must wear the school uniform every day of the week. The only ______ is Sports Day, when everyone can come to school in a T-shirt and shorts.",
  "options": [
   "era",
   "exception",
   "estimate",
   "evidence"
  ],
  "answer": 1,
  "vocabIndex": 59
 },
 {
  "q": "The hike to the top of the mountain takes nine hours in the hot sun. It will ______ even strong walkers, so bring lots of water and start early in the morning.",
  "options": [
   "expand",
   "exhibit",
   "equip",
   "exhaust"
  ],
  "answer": 3,
  "vocabIndex": 63
 },
 {
  "q": "The art museum downtown has just received fifty paintings from a famous French painter. It will ______ them in its main hall for three months starting next week.",
  "options": [
   "exaggerate",
   "exhibit",
   "estimate",
   "ensure"
  ],
  "answer": 1,
  "vocabIndex": 68
 },
 {
  "q": "The little bakery is so popular that customers often wait outside in a long line. The owner plans to ______ the shop by buying the empty store next door.",
  "options": [
   "evaluate",
   "explain",
   "exhaust",
   "expand"
  ],
  "answer": 3,
  "vocabIndex": 71
 },
 {
  "q": "Ten years ago, this part of the city was all farms and small houses. The fast ______ of the city has filled the area with tall buildings and busy roads.",
  "options": [
   "exhibition",
   "exaggeration",
   "expansion",
   "evaluation"
  ],
  "answer": 2,
  "vocabIndex": 72
 },
 {
  "q": "Doctors are testing a new medicine for the flu on a small group of patients. It is still ______, so you cannot buy it at any drugstore yet.",
  "options": [
   "experimental",
   "essential",
   "enormous",
   "ethnic"
  ],
  "answer": 0,
  "vocabIndex": 74
 },
 {
  "q": "Jack came to class an hour late with mud all over his shoes. The teacher asked him for an ______, and he said his bike had fallen into the river.",
  "options": [
   "equipment",
   "exhibition",
   "explanation",
   "entertainment"
  ],
  "answer": 2,
  "vocabIndex": 77
 },
 {
  "q": "Lisa stayed up all night finishing her report and then took three tests the next day. By the time she got home, she was so ______ that she fell asleep on the sofa.",
  "options": [
   "experimental",
   "exhausted",
   "equal",
   "enormous"
  ],
  "answer": 1,
  "vocabIndex": 65
 },
 {
  "q": "We waited at the bus stop for almost an hour, but no bus came. We ______ gave up and walked home in the rain, arriving just before dinner.",
  "options": [
   "eventually",
   "equally",
   "evidently",
   "enormously"
  ],
  "answer": 0,
  "vocabIndex": 50
 },
 {
  "q": "There is no cinema, no park, and no shopping mall in my grandmother's small town. Young people complain that there is nothing to do for ______ on weekends.",
  "options": [
   "evaluation",
   "equipment",
   "establishment",
   "entertainment"
  ],
  "answer": 3,
  "vocabIndex": 12
 },
 {
  "q": "Before we go camping, let's check that we have everything we need. The tent, the stove, and the sleeping bags are the most important ______ for the trip.",
  "options": [
   "equipment",
   "explanation",
   "exhibition",
   "entertainment"
  ],
  "answer": 0,
  "vocabIndex": 24
 },
 {
  "q": "The students in the art club have been painting pictures of the sea all semester. Next month, their works will be shown in an ______ at the city library.",
  "options": [
   "expansion",
   "exaggeration",
   "exhibition",
   "establishment"
  ],
  "answer": 2,
  "vocabIndex": 70
 }
];
const LOOKUP = {};
VOCAB.forEach(v => { const key = v.word.toLowerCase(); const sense = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def };
  if (LOOKUP[key]) LOOKUP[key].combined.push(sense); else LOOKUP[key] = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def, combined: [sense] }; });
const EXTRA_GLOSSES = {};