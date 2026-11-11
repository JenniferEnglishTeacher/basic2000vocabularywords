// 學測6000字 Level 4 Group 32 (promotion-raisin) — word-family edition
const QUIZ_CONFIG = {
  groupName: "6000字 L4 Group 32 - promotion – raisin (word family)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};
const VOCAB = [
 {
  "word": "promotion",
  "answer": "promotion",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "晉升；升職",
  "en_def": "a move to a higher or more important job",
  "sentence": "After working hard for five years, my father finally got a {{BLANK}} and became the manager of his department.",
  "cn": "努力工作五年後，我爸爸終於獲得晉升，成為他部門的經理。",
  "cnMarked": "努力工作五年後，我爸爸終於獲得【晉升】，成為他部門的經理。",
  "isHead": true,
  "level": 4,
  "family": "promotion"
 },
 {
  "word": "promotion",
  "answer": "promotion",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "促銷；宣傳活動",
  "en_def": "an activity that helps sell a product",
  "sentence": "The supermarket is running a special {{BLANK}} this week, so you can buy two bottles of juice for the price of one.",
  "cn": "超市這週正在舉辦特別促銷活動，所以你可以用一瓶的價錢買兩瓶果汁。",
  "cnMarked": "超市這週正在舉辦特別【促銷】活動，所以你可以用一瓶的價錢買兩瓶果汁。",
  "isHead": false,
  "level": 4,
  "family": "promotion"
 },
 {
  "word": "promote",
  "answer": "promote",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "晉升；促進；宣傳",
  "en_def": "to give someone a higher job; to help something grow or sell",
  "sentence": "The company decided to {{BLANK}} Ms. Lin to sales director because her team sold more than anyone else last year.",
  "cn": "公司決定晉升林小姐為業務總監，因為她的團隊去年的銷售量比其他人都多。",
  "cnMarked": "公司決定【晉升】林小姐為業務總監，因為她的團隊去年的銷售量比其他人都多。",
  "isHead": false,
  "level": 3,
  "family": "promotion"
 },
 {
  "word": "get a promotion",
  "answer": "get a promotion",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "獲得升職",
  "en_def": "to be moved up to a better job",
  "sentence": "If you want to {{BLANK}} next year, you should learn new skills and show your boss that you can lead a team.",
  "cn": "如果你想在明年獲得升職，你應該學習新技能，並讓老闆看到你能帶領團隊。",
  "cnMarked": "如果你想在明年【獲得升職】，你應該學習新技能，並讓老闆看到你能帶領團隊。",
  "isHead": false,
  "level": null,
  "family": "promotion"
 },
 {
  "word": "promotional",
  "answer": "promotional",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "促銷的；宣傳的",
  "en_def": "made to advertise or sell something",
  "sentence": "The store handed out {{BLANK}} flyers at the MRT station, and hundreds of people came to the opening sale that afternoon.",
  "cn": "那家店在捷運站發放宣傳傳單，當天下午有數百人來參加開幕特賣。",
  "cnMarked": "那家店在捷運站發放【宣傳】傳單，當天下午有數百人來參加開幕特賣。",
  "isHead": false,
  "level": null,
  "family": "promotion"
 },
 {
  "word": "prompt",
  "answer": "prompt",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "迅速的；及時的",
  "en_def": "done quickly and without delay",
  "sentence": "Thank you for your {{BLANK}} reply to my email; now we can finish the report before the meeting on Friday.",
  "cn": "謝謝你迅速回覆我的電子郵件；現在我們可以在星期五開會前完成報告了。",
  "cnMarked": "謝謝你【迅速】回覆我的電子郵件；現在我們可以在星期五開會前完成報告了。",
  "isHead": true,
  "level": 4,
  "family": "prompt"
 },
 {
  "word": "prompt",
  "answer": "prompted",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "促使；引起",
  "en_def": "to make someone decide to do something",
  "sentence": "The terrible traffic jam every morning finally {{BLANK}} the city government to build a new MRT line.",
  "cn": "每天早上可怕的塞車終於促使市政府興建一條新的捷運路線。",
  "cnMarked": "每天早上可怕的塞車終於【促使】市政府興建一條新的捷運路線。",
  "isHead": false,
  "level": 4,
  "family": "prompt"
 },
 {
  "word": "prompt",
  "answer": "prompt",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "提示",
  "en_def": "words or a sign that help you remember what to say or do",
  "sentence": "The actor forgot his lines on stage, but a quiet {{BLANK}} from behind the curtain helped him continue the scene.",
  "cn": "那位演員在台上忘了台詞，但幕後一聲輕輕的提示幫助他繼續演下去。",
  "cnMarked": "那位演員在台上忘了台詞，但幕後一聲輕輕的【提示】幫助他繼續演下去。",
  "isHead": false,
  "level": 4,
  "family": "prompt"
 },
 {
  "word": "promptly",
  "answer": "promptly",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "迅速地；準時地",
  "en_def": "quickly; at exactly the right time",
  "sentence": "The train left {{BLANK}} at 8:00, so the students who arrived two minutes late had to wait for the next one.",
  "cn": "火車準時在八點出發，所以晚到兩分鐘的學生必須等下一班。",
  "cnMarked": "火車【準時】在八點出發，所以晚到兩分鐘的學生必須等下一班。",
  "isHead": false,
  "level": null,
  "family": "prompt"
 },
 {
  "word": "pronunciation",
  "answer": "pronunciation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "發音",
  "en_def": "the way a word is said",
  "sentence": "Her English {{BLANK}} improved a lot after she started listening to podcasts and repeating every sentence aloud.",
  "cn": "自從她開始聽播客並大聲跟讀每個句子後，她的英文發音進步很多。",
  "cnMarked": "自從她開始聽播客並大聲跟讀每個句子後，她的英文【發音】進步很多。",
  "isHead": true,
  "level": 4,
  "family": "pronunciation"
 },
 {
  "word": "pronounce",
  "answer": "pronounce",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "發音；念",
  "en_def": "to make the sound of a word",
  "sentence": "Many students do not know how to {{BLANK}} the word \"colonel,\" because it is spelled very differently from the way it sounds.",
  "cn": "許多學生不知道怎麼念colonel 這個字，因為它的拼法和發音差很多。",
  "cnMarked": "許多學生不知道怎麼【念】colonel 這個字，因為它的拼法和發音差很多。",
  "isHead": false,
  "level": 3,
  "family": "pronunciation"
 },
 {
  "word": "mispronounce",
  "answer": "mispronounce",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "發錯音",
  "en_def": "to say a word in the wrong way",
  "sentence": "Foreign visitors often {{BLANK}} the names of Taiwanese cities, but local people are always happy to help them say the names correctly.",
  "cn": "外國遊客常常把台灣城市的名字念錯，但當地人總是樂意幫他們正確地說出來。",
  "cnMarked": "外國遊客常常把台灣城市的名字【念錯】，但當地人總是樂意幫他們正確地說出來。",
  "isHead": false,
  "level": null,
  "family": "pronunciation"
 },
 {
  "word": "pronounced",
  "answer": "pronounced",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "明顯的；顯著的",
  "en_def": "very easy to notice; strong",
  "sentence": "Since my grandmother moved to the countryside, there has been a {{BLANK}} improvement in her health, and she walks every morning.",
  "cn": "自從奶奶搬到鄉下後，她的健康有了明顯的改善，她每天早上都散步。",
  "cnMarked": "自從奶奶搬到鄉下後，她的健康有了【明顯的】改善，她每天早上都散步。",
  "isHead": false,
  "level": null,
  "family": "pronunciation"
 },
 {
  "word": "proposal",
  "answer": "proposal",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "提議；提案",
  "en_def": "a plan or idea that is suggested to others",
  "sentence": "The students wrote a {{BLANK}} to the principal asking for more water fountains, and the school agreed to install three new ones.",
  "cn": "學生們寫了一份提案給校長，要求增設飲水機，學校同意安裝三台新的。",
  "cnMarked": "學生們寫了一份【提案】給校長，要求增設飲水機，學校同意安裝三台新的。",
  "isHead": true,
  "level": 4,
  "family": "proposal"
 },
 {
  "word": "proposal",
  "answer": "proposal",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "求婚",
  "en_def": "the act of asking someone to marry you",
  "sentence": "He planned a surprise {{BLANK}} on the beach at sunset, and she said yes before he had even finished speaking.",
  "cn": "他計畫在日落時分的海灘上來一場驚喜求婚，他話還沒說完她就答應了。",
  "cnMarked": "他計畫在日落時分的海灘上來一場驚喜【求婚】，他話還沒說完她就答應了。",
  "isHead": false,
  "level": 4,
  "family": "proposal"
 },
 {
  "word": "propose",
  "answer": "propose",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "提議；求婚",
  "en_def": "to suggest a plan or idea; to ask someone to marry you",
  "sentence": "I would like to {{BLANK}} that we hold the class party on Saturday afternoon, since everyone is free then.",
  "cn": "我想提議我們在星期六下午舉辦班級派對，因為那時大家都有空。",
  "cnMarked": "我想【提議】我們在星期六下午舉辦班級派對，因為那時大家都有空。",
  "isHead": false,
  "level": 2,
  "family": "proposal"
 },
 {
  "word": "make a proposal",
  "answer": "make a proposal",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "提出提案",
  "en_def": "to formally suggest a plan",
  "sentence": "The engineer will {{BLANK}} to the city council next week about building a bike path along the river.",
  "cn": "那位工程師下週將向市議會提出提案，內容是沿著河邊興建自行車道。",
  "cnMarked": "那位工程師下週將向市議會【提出提案】，內容是沿著河邊興建自行車道。",
  "isHead": false,
  "level": null,
  "family": "proposal"
 },
 {
  "word": "proposed",
  "answer": "proposed",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "被提議的；擬議中的",
  "en_def": "suggested but not yet decided or built",
  "sentence": "Many residents are against the {{BLANK}} shopping mall because they worry it will bring too much traffic to their quiet neighborhood.",
  "cn": "許多居民反對這座擬議中的購物中心，因為他們擔心它會給安靜的社區帶來太多車流。",
  "cnMarked": "許多居民反對這座【擬議中的】購物中心，因為他們擔心它會給安靜的社區帶來太多車流。",
  "isHead": false,
  "level": null,
  "family": "proposal"
 },
 {
  "word": "prosper",
  "answer": "prosper",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "繁榮；興旺",
  "en_def": "to be successful, especially by making money",
  "sentence": "Small restaurants near the new university have begun to {{BLANK}}, because thousands of hungry students eat out every day.",
  "cn": "新大學附近的小餐館開始興旺起來，因為每天有數千名飢腸轆轆的學生外食。",
  "cnMarked": "新大學附近的小餐館開始【興旺】起來，因為每天有數千名飢腸轆轆的學生外食。",
  "isHead": true,
  "level": 4,
  "family": "prosper"
 },
 {
  "word": "prosperity",
  "answer": "prosperity",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "繁榮；富裕",
  "en_def": "the state of being successful and having a lot of money",
  "sentence": "The discovery of oil brought great {{BLANK}} to the small country, and new schools and hospitals were built everywhere.",
  "cn": "石油的發現為這個小國帶來極大的繁榮，到處都興建了新的學校和醫院。",
  "cnMarked": "石油的發現為這個小國帶來極大的【繁榮】，到處都興建了新的學校和醫院。",
  "isHead": true,
  "level": 4,
  "family": "prosper"
 },
 {
  "word": "prosperous",
  "answer": "prosperous",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "繁榮的；富裕的",
  "en_def": "rich and successful",
  "sentence": "Fifty years ago this was a poor fishing village, but today it is a {{BLANK}} city with tall buildings and busy shops.",
  "cn": "五十年前這裡是個貧窮的漁村，但今天它是一座有高樓和熱鬧商店的繁榮城市。",
  "cnMarked": "五十年前這裡是個貧窮的漁村，但今天它是一座有高樓和熱鬧商店的【繁榮】城市。",
  "isHead": true,
  "level": 4,
  "family": "prosper"
 },
 {
  "word": "economic prosperity",
  "answer": "economic prosperity",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "經濟繁榮",
  "en_def": "a time when a country's business and money are doing well",
  "sentence": "Taiwan enjoyed rapid {{BLANK}} in the 1980s, when its factories exported products to countries all over the world.",
  "cn": "台灣在一九八〇年代享有快速的經濟繁榮，當時它的工廠將產品外銷到世界各國。",
  "cnMarked": "台灣在一九八〇年代享有快速的【經濟繁榮】，當時它的工廠將產品外銷到世界各國。",
  "isHead": false,
  "level": null,
  "family": "prosper"
 },
 {
  "word": "prosper in",
  "answer": "prosper in",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "在…中興旺／成功",
  "en_def": "to do well and succeed in a place or kind of work",
  "sentence": "Companies that listen to their customers usually {{BLANK}} any market, while those that ignore complaints slowly lose business.",
  "cn": "傾聽顧客的公司通常能在任何市場中興旺，而忽視抱怨的公司則會慢慢失去生意。",
  "cnMarked": "傾聽顧客的公司通常能【在】任何市場【中興旺】，而忽視抱怨的公司則會慢慢失去生意。",
  "isHead": false,
  "level": null,
  "family": "prosper"
 },
 {
  "word": "protein",
  "answer": "protein",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "蛋白質",
  "en_def": "a substance in food such as meat, eggs, and beans that helps your body grow",
  "sentence": "Athletes need plenty of {{BLANK}} to build strong muscles, so they often eat eggs, chicken, and beans after training.",
  "cn": "運動員需要大量的蛋白質來鍛鍊強壯的肌肉，所以他們訓練後常吃蛋、雞肉和豆類。",
  "cnMarked": "運動員需要大量的【蛋白質】來鍛鍊強壯的肌肉，所以他們訓練後常吃蛋、雞肉和豆類。",
  "isHead": true,
  "level": 4,
  "family": "protein"
 },
 {
  "word": "high in protein",
  "answer": "high in protein",
  "nblanks": 3,
  "pos": "adj.phr.",
  "cn_def": "富含蛋白質",
  "en_def": "containing a lot of protein",
  "sentence": "Tofu is {{BLANK}} and low in fat, which is why many vegetarians eat it almost every day instead of meat.",
  "cn": "豆腐富含蛋白質且脂肪低，這就是為什麼許多素食者幾乎每天用它代替肉。",
  "cnMarked": "豆腐【富含蛋白質】且脂肪低，這就是為什麼許多素食者幾乎每天用它代替肉。",
  "isHead": false,
  "level": null,
  "family": "protein"
 },
 {
  "word": "protein shake",
  "answer": "protein shake",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "蛋白飲；高蛋白奶昔",
  "en_def": "a drink made with protein powder, often used by people who exercise",
  "sentence": "My brother drinks a {{BLANK}} right after the gym because he says it helps his body recover faster.",
  "cn": "我哥哥健身後會馬上喝一杯高蛋白奶昔，因為他說這能幫助身體更快恢復。",
  "cnMarked": "我哥哥健身後會馬上喝一杯【高蛋白奶昔】，因為他說這能幫助身體更快恢復。",
  "isHead": false,
  "level": null,
  "family": "protein"
 },
 {
  "word": "protest",
  "answer": "protest",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "抗議",
  "en_def": "a strong public complaint against something",
  "sentence": "Thousands of workers joined a {{BLANK}} outside the factory because the company had not paid them for two months.",
  "cn": "數千名工人加入了工廠外的抗議，因為公司已經兩個月沒付他們薪水。",
  "cnMarked": "數千名工人加入了工廠外的【抗議】，因為公司已經兩個月沒付他們薪水。",
  "isHead": true,
  "level": 4,
  "family": "protest"
 },
 {
  "word": "protest",
  "answer": "protest",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "抗議；反對",
  "en_def": "to say or show strongly that you do not agree with something",
  "sentence": "Students gathered in front of the school to {{BLANK}} against the plan to cut down the old trees on campus.",
  "cn": "學生聚集在校門口抗議砍掉校園裡老樹的計畫。",
  "cnMarked": "學生聚集在校門口【抗議】砍掉校園裡老樹的計畫。",
  "isHead": false,
  "level": 4,
  "family": "protest"
 },
 {
  "word": "protester",
  "answer": "protesters",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "抗議者",
  "en_def": "a person who takes part in a protest",
  "sentence": "The {{BLANK}} held up signs and sang songs, and the police made sure that everything stayed peaceful.",
  "cn": "抗議者舉著標語唱歌，警察則確保一切保持和平。",
  "cnMarked": "【抗議者】舉著標語唱歌，警察則確保一切保持和平。",
  "isHead": false,
  "level": null,
  "family": "protest"
 },
 {
  "word": "in protest",
  "answer": "in protest",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "以示抗議",
  "en_def": "as a way of showing that you disagree",
  "sentence": "When the restaurant raised its prices again, many regular customers stopped eating there {{BLANK}}.",
  "cn": "當那家餐廳再次漲價時，許多常客不再去那裡用餐以示抗議。",
  "cnMarked": "當那家餐廳再次漲價時，許多常客不再去那裡用餐【以示抗議】。",
  "isHead": false,
  "level": null,
  "family": "protest"
 },
 {
  "word": "psychological",
  "answer": "psychological",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "心理的",
  "en_def": "connected with the mind and the way people think and feel",
  "sentence": "Losing a pet can cause real {{BLANK}} pain, so parents should talk with their children about their feelings.",
  "cn": "失去寵物可能造成真正的心理痛苦，所以父母應該和孩子談談他們的感受。",
  "cnMarked": "失去寵物可能造成真正的【心理】痛苦，所以父母應該和孩子談談他們的感受。",
  "isHead": true,
  "level": 4,
  "family": "psychological"
 },
 {
  "word": "psychologist",
  "answer": "psychologist",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "心理學家；心理師",
  "en_def": "a person who studies the mind and helps people with their feelings",
  "sentence": "The school {{BLANK}} talked with the boy every week, and slowly he started to make friends and enjoy class again.",
  "cn": "學校心理師每週和那個男孩談話，慢慢地他開始交朋友，再次喜歡上課。",
  "cnMarked": "學校【心理師】每週和那個男孩談話，慢慢地他開始交朋友，再次喜歡上課。",
  "isHead": true,
  "level": 4,
  "family": "psychological"
 },
 {
  "word": "psychology",
  "answer": "psychology",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "心理學",
  "en_def": "the study of the mind and how people behave",
  "sentence": "My sister is studying {{BLANK}} at university because she wants to understand why people make the choices they do.",
  "cn": "我姐姐在大學讀心理學，因為她想了解人們為什麼會做出那些選擇。",
  "cnMarked": "我姐姐在大學讀【心理學】，因為她想了解人們為什麼會做出那些選擇。",
  "isHead": true,
  "level": 4,
  "family": "psychological"
 },
 {
  "word": "psychologically",
  "answer": "psychologically",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "心理上",
  "en_def": "in a way that is connected with the mind",
  "sentence": "The long exam period was hard on the students {{BLANK}}, so the teachers planned a fun day at the beach afterwards.",
  "cn": "漫長的考試期間對學生來說在心理上很辛苦，所以老師們在考後安排了一天快樂的海灘活動。",
  "cnMarked": "漫長的考試期間對學生來說在【心理上】很辛苦，所以老師們在考後安排了一天快樂的海灘活動。",
  "isHead": false,
  "level": null,
  "family": "psychological"
 },
 {
  "word": "psychiatrist",
  "answer": "psychiatrist",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "精神科醫師",
  "en_def": "a medical doctor who treats mental illness",
  "sentence": "Unlike a psychologist, a {{BLANK}} is a doctor who can give patients medicine to help them sleep or feel calmer.",
  "cn": "和心理師不同，精神科醫師是能開藥幫助病人入睡或感到平靜的醫生。",
  "cnMarked": "和心理師不同，【精神科醫師】是能開藥幫助病人入睡或感到平靜的醫生。",
  "isHead": false,
  "level": null,
  "family": "psychological"
 },
 {
  "word": "child psychology",
  "answer": "child psychology",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "兒童心理學",
  "en_def": "the study of how children think, feel, and grow",
  "sentence": "Every kindergarten teacher in our city must take a course in {{BLANK}} so that they understand why young children behave the way they do.",
  "cn": "我們市裡每位幼兒園老師都必須修一門兒童心理學課程，以便了解幼童為什麼會有那樣的行為。",
  "cnMarked": "我們市裡每位幼兒園老師都必須修一門【兒童心理學】課程，以便了解幼童為什麼會有那樣的行為。",
  "isHead": false,
  "level": null,
  "family": "psychological"
 },
 {
  "word": "publication",
  "answer": "publication",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "出版；出版品",
  "en_def": "the act of printing a book or article so people can read it; a book or magazine",
  "sentence": "The {{BLANK}} of her first novel changed her life, and within a year she had readers in more than ten countries.",
  "cn": "她第一本小說的出版改變了她的人生，一年內她在十幾個國家都有了讀者。",
  "cnMarked": "她第一本小說的【出版】改變了她的人生，一年內她在十幾個國家都有了讀者。",
  "isHead": true,
  "level": 4,
  "family": "publication"
 },
 {
  "word": "publicity",
  "answer": "publicity",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "宣傳；公眾的注意",
  "en_def": "attention from newspapers, TV, and the public",
  "sentence": "The small bakery got a lot of free {{BLANK}} after a famous singer posted a photo of its cakes online.",
  "cn": "一位知名歌手在網路上貼出那家小麵包店蛋糕的照片後，店家獲得了許多免費的宣傳。",
  "cnMarked": "一位知名歌手在網路上貼出那家小麵包店蛋糕的照片後，店家獲得了許多免費的【宣傳】。",
  "isHead": true,
  "level": 4,
  "family": "publication"
 },
 {
  "word": "publish",
  "answer": "publish",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "出版；發表",
  "en_def": "to print a book, magazine, or article for people to buy or read",
  "sentence": "The newspaper decided to {{BLANK}} the student's letter about school lunches, and many parents wrote in to agree with her.",
  "cn": "報社決定刊登那位學生關於營養午餐的投書，許多家長寫信表示贊同。",
  "cnMarked": "報社決定【刊登】那位學生關於營養午餐的投書，許多家長寫信表示贊同。",
  "isHead": true,
  "level": 4,
  "family": "publication"
 },
 {
  "word": "publisher",
  "answer": "publishers",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "出版社；出版商",
  "en_def": "a company or person that prints and sells books",
  "sentence": "After twenty {{BLANK}} said no to his book, the twenty-first one finally said yes, and it became a bestseller.",
  "cn": "在二十家出版社拒絕他的書之後，第二十一家終於答應了，而這本書成了暢銷書。",
  "cnMarked": "在二十家【出版社】拒絕他的書之後，第二十一家終於答應了，而這本書成了暢銷書。",
  "isHead": true,
  "level": 4,
  "family": "publication"
 },
 {
  "word": "publicize",
  "answer": "publicize",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "宣傳；公布",
  "en_def": "to make something known to the public",
  "sentence": "The club used posters and social media to {{BLANK}} the charity concert, and all the tickets were sold in three days.",
  "cn": "社團利用海報和社群媒體來宣傳這場慈善音樂會，所有門票三天內就賣光了。",
  "cnMarked": "社團利用海報和社群媒體來【宣傳】這場慈善音樂會，所有門票三天內就賣光了。",
  "isHead": false,
  "level": 6,
  "family": "publication"
 },
 {
  "word": "publishing",
  "answer": "publishing",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "出版業",
  "en_def": "the business of producing books, magazines, and newspapers",
  "sentence": "My aunt has worked in {{BLANK}} for twenty years, and she says that e-books have completely changed the way people read.",
  "cn": "我阿姨在出版業工作了二十年，她說電子書徹底改變了人們閱讀的方式。",
  "cnMarked": "我阿姨在【出版業】工作了二十年，她說電子書徹底改變了人們閱讀的方式。",
  "isHead": false,
  "level": null,
  "family": "publication"
 },
 {
  "word": "in public",
  "answer": "in public",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "公開地；在公共場合",
  "en_def": "where other people can see or hear you",
  "sentence": "My little brother is very shy and never sings {{BLANK}}, but at home he sings loudly in the shower every night.",
  "cn": "我弟弟很害羞，從不在公共場合唱歌，但在家裡他每晚洗澡時都大聲唱。",
  "cnMarked": "我弟弟很害羞，從不【在公共場合】唱歌，但在家裡他每晚洗澡時都大聲唱。",
  "isHead": false,
  "level": null,
  "family": "publication"
 },
 {
  "word": "pursue",
  "answer": "pursue",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "追求；從事",
  "en_def": "to try hard to achieve something over a long time",
  "sentence": "After graduation, she moved to Taipei to {{BLANK}} her dream of becoming a professional dancer, even though her parents worried.",
  "cn": "畢業後，她搬到台北追求成為職業舞者的夢想，儘管父母很擔心。",
  "cnMarked": "畢業後，她搬到台北【追求】成為職業舞者的夢想，儘管父母很擔心。",
  "isHead": true,
  "level": 4,
  "family": "pursue"
 },
 {
  "word": "pursue",
  "answer": "pursue",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "追趕；追捕",
  "en_def": "to follow or chase someone in order to catch them",
  "sentence": "The police officer continued to {{BLANK}} the thief through the night market until he was finally caught near the exit.",
  "cn": "警察在夜市裡持續追捕小偷，直到他終於在出口附近被抓到。",
  "cnMarked": "警察在夜市裡持續【追捕】小偷，直到他終於在出口附近被抓到。",
  "isHead": true,
  "level": 4,
  "family": "pursue"
 },
 {
  "word": "pursuit",
  "answer": "pursuit",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "追求",
  "en_def": "the act of trying to achieve or get something",
  "sentence": "In the {{BLANK}} of higher grades, some students sleep only five hours a night, which is actually bad for their memory.",
  "cn": "為了追求更高的成績，有些學生每晚只睡五小時，這其實對記憶力有害。",
  "cnMarked": "為了【追求】更高的成績，有些學生每晚只睡五小時，這其實對記憶力有害。",
  "isHead": false,
  "level": 4,
  "family": "pursue"
 },
 {
  "word": "in pursuit of",
  "answer": "in pursuit of",
  "nblanks": 3,
  "pos": "phr.",
  "cn_def": "為了追求…",
  "en_def": "trying to get or achieve something",
  "sentence": "Many young people leave their small hometowns {{BLANK}} better jobs, so the villages are now full of elderly people.",
  "cn": "許多年輕人為了追求更好的工作而離開小鎮家鄉，所以村子裡現在到處都是老年人。",
  "cnMarked": "許多年輕人【為了追求】更好的工作而離開小鎮家鄉，所以村子裡現在到處都是老年人。",
  "isHead": false,
  "level": null,
  "family": "pursue"
 },
 {
  "word": "pursue a career",
  "answer": "pursue a career",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "從事某種職業",
  "en_def": "to work toward a particular job over time",
  "sentence": "My cousin decided to {{BLANK}} in medicine, so he will spend at least seven more years studying at university.",
  "cn": "我表哥決定從事醫學方面的職業，所以他將在大學至少再花七年讀書。",
  "cnMarked": "我表哥決定【從事】醫學方面的【職業】，所以他將在大學至少再花七年讀書。",
  "isHead": false,
  "level": null,
  "family": "pursue"
 },
 {
  "word": "quarrel",
  "answer": "quarrel",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "爭吵；口角",
  "en_def": "an angry argument between people",
  "sentence": "The two sisters had a loud {{BLANK}} over who should use the computer first, and their mother finally turned it off.",
  "cn": "兩姊妹為了誰先用電腦而大聲爭吵，最後媽媽把電腦關掉了。",
  "cnMarked": "兩姊妹為了誰先用電腦而大聲【爭吵】，最後媽媽把電腦關掉了。",
  "isHead": true,
  "level": 4,
  "family": "quarrel"
 },
 {
  "word": "quarrel",
  "answer": "quarrel",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "爭吵",
  "en_def": "to argue angrily with someone",
  "sentence": "My parents rarely {{BLANK}} about money, but they sometimes disagree about where to go on vacation.",
  "cn": "我父母很少為錢爭吵，但有時候會對去哪裡度假意見不合。",
  "cnMarked": "我父母很少為錢【爭吵】，但有時候會對去哪裡度假意見不合。",
  "isHead": false,
  "level": 4,
  "family": "quarrel"
 },
 {
  "word": "quarrel with",
  "answer": "quarrel with",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "和…爭吵",
  "en_def": "to have an angry argument with someone",
  "sentence": "I did not want to {{BLANK}} my best friend over such a small thing, so I said sorry first and we made up.",
  "cn": "我不想為這麼小的事和我最好的朋友爭吵，所以我先道歉，然後我們就和好了。",
  "cnMarked": "我不想為這麼小的事【和】我最好的朋友【爭吵】，所以我先道歉，然後我們就和好了。",
  "isHead": false,
  "level": null,
  "family": "quarrel"
 },
 {
  "word": "quarrelsome",
  "answer": "quarrelsome",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "愛爭吵的",
  "en_def": "often starting arguments with people",
  "sentence": "The {{BLANK}} old man complained about everything in the neighborhood, so most people tried to avoid talking to him.",
  "cn": "那個愛爭吵的老人抱怨社區裡的每件事，所以大多數人都盡量避免和他說話。",
  "cnMarked": "那個【愛爭吵的】老人抱怨社區裡的每件事，所以大多數人都盡量避免和他說話。",
  "isHead": false,
  "level": null,
  "family": "quarrel"
 },
 {
  "word": "quilt",
  "answer": "quilt",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "被子；拼布被",
  "en_def": "a thick warm cover for a bed made of layers of cloth sewn together",
  "sentence": "On cold winter nights, my grandmother always puts a thick {{BLANK}} on my bed so that I can sleep warmly.",
  "cn": "在寒冷的冬夜，奶奶總是在我床上放一條厚被子，讓我可以睡得暖和。",
  "cnMarked": "在寒冷的冬夜，奶奶總是在我床上放一條厚【被子】，讓我可以睡得暖和。",
  "isHead": true,
  "level": 4,
  "family": "quilt"
 },
 {
  "word": "quilt",
  "answer": "quilt",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "縫被子；縫製拼布",
  "en_def": "to sew layers of cloth together to make a thick cover",
  "sentence": "My aunt likes to {{BLANK}} in her free time, and she has made a colorful blanket for every baby in our family.",
  "cn": "我阿姨閒暇時喜歡縫製拼布，她為我們家每個寶寶都做了一條彩色毯子。",
  "cnMarked": "我阿姨閒暇時喜歡【縫製拼布】，她為我們家每個寶寶都做了一條彩色毯子。",
  "isHead": false,
  "level": 4,
  "family": "quilt"
 },
 {
  "word": "patchwork quilt",
  "answer": "patchwork quilt",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "拼布被",
  "en_def": "a quilt made from many small pieces of different cloth",
  "sentence": "The {{BLANK}} on the wall was made from pieces of my grandfather's old shirts, so it holds many family memories.",
  "cn": "牆上那條拼布被是用我爺爺舊襯衫的布片做成的，所以它承載著許多家族回憶。",
  "cnMarked": "牆上那條【拼布被】是用我爺爺舊襯衫的布片做成的，所以它承載著許多家族回憶。",
  "isHead": false,
  "level": null,
  "family": "quilt"
 },
 {
  "word": "quilted",
  "answer": "quilted",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "絎縫的；夾棉的",
  "en_def": "made of two layers of cloth with soft material in between",
  "sentence": "She wore a {{BLANK}} jacket on the mountain trip, and it kept her warm even when the wind became very strong.",
  "cn": "她在登山旅行時穿了一件夾棉外套，即使風變得很強也讓她保持溫暖。",
  "cnMarked": "她在登山旅行時穿了一件【夾棉】外套，即使風變得很強也讓她保持溫暖。",
  "isHead": false,
  "level": null,
  "family": "quilt"
 },
 {
  "word": "quotation",
  "answer": "quotation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "引文；引述",
  "en_def": "a sentence or phrase taken from a book or speech",
  "sentence": "The teacher began her speech with a famous {{BLANK}} from Confucius, and then she explained what it means for students today.",
  "cn": "老師以一句孔子的著名引文開始演講，然後解釋它對今天的學生有什麼意義。",
  "cnMarked": "老師以一句孔子的著名【引文】開始演講，然後解釋它對今天的學生有什麼意義。",
  "isHead": true,
  "level": 4,
  "family": "quotation"
 },
 {
  "word": "quotation",
  "answer": "quotation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "報價單",
  "en_def": "a written statement of how much a job or service will cost",
  "sentence": "Before we fix the roof, we should ask at least three companies for a {{BLANK}} and compare their prices carefully.",
  "cn": "在修屋頂之前，我們應該至少向三家公司索取報價單，並仔細比較價格。",
  "cnMarked": "在修屋頂之前，我們應該至少向三家公司索取【報價單】，並仔細比較價格。",
  "isHead": false,
  "level": 4,
  "family": "quotation"
 },
 {
  "word": "quote",
  "answer": "quote",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "引用；引述",
  "en_def": "to repeat the exact words that someone else said or wrote",
  "sentence": "In your essay, you should {{BLANK}} the author's exact words and then explain the idea in your own language.",
  "cn": "在你的作文裡，你應該引用作者的原話，然後用自己的語言解釋那個想法。",
  "cnMarked": "在你的作文裡，你應該【引用】作者的原話，然後用自己的語言解釋那個想法。",
  "isHead": false,
  "level": 3,
  "family": "quotation"
 },
 {
  "word": "quotation marks",
  "answer": "quotation marks",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "引號",
  "en_def": "the marks \" \" used in writing to show the words someone said",
  "sentence": "When you write down what a person said, remember to put the words inside {{BLANK}} so readers know they are not yours.",
  "cn": "當你寫下某人說的話時，記得把那些字放在引號裡，讓讀者知道那不是你的話。",
  "cnMarked": "當你寫下某人說的話時，記得把那些字放在【引號】裡，讓讀者知道那不是你的話。",
  "isHead": false,
  "level": null,
  "family": "quotation"
 },
 {
  "word": "radar",
  "answer": "radar",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "雷達",
  "en_def": "a system that uses radio waves to find the position of planes, ships, or storms",
  "sentence": "The airport {{BLANK}} showed a large storm moving toward the city, so all flights were delayed for two hours.",
  "cn": "機場的雷達顯示一個大風暴正朝城市移動，所以所有航班都延誤了兩小時。",
  "cnMarked": "機場的【雷達】顯示一個大風暴正朝城市移動，所以所有航班都延誤了兩小時。",
  "isHead": true,
  "level": 4,
  "family": "radar"
 },
 {
  "word": "radar screen",
  "answer": "radar screen",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "雷達螢幕",
  "en_def": "the screen on which radar shows positions",
  "sentence": "The pilot watched a small dot appear on the {{BLANK}} and realized that another plane was flying too close.",
  "cn": "飛行員看著雷達螢幕上出現一個小點，意識到另一架飛機飛得太近了。",
  "cnMarked": "飛行員看著【雷達螢幕】上出現一個小點，意識到另一架飛機飛得太近了。",
  "isHead": false,
  "level": null,
  "family": "radar"
 },
 {
  "word": "under the radar",
  "answer": "under the radar",
  "nblanks": 3,
  "pos": "phr.",
  "cn_def": "不被注意地；低調地",
  "en_def": "without being noticed by people",
  "sentence": "The small coffee shop stayed {{BLANK}} for years, but now it is famous after a travel blogger wrote about it.",
  "cn": "那家小咖啡店多年來一直不被注意，但在一位旅遊部落客寫到它之後，現在它出名了。",
  "cnMarked": "那家小咖啡店多年來一直【不被注意】，但在一位旅遊部落客寫到它之後，現在它出名了。",
  "isHead": false,
  "level": null,
  "family": "radar"
 },
 {
  "word": "speed radar",
  "answer": "speed radar",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "測速雷達",
  "en_def": "a machine that measures how fast cars are going",
  "sentence": "Drivers slow down when they see the {{BLANK}} on the highway, because a ticket for speeding costs thousands of dollars.",
  "cn": "駕駛人看到高速公路上的測速雷達時會減速，因為超速罰單要好幾千元。",
  "cnMarked": "駕駛人看到高速公路上的【測速雷達】時會減速，因為超速罰單要好幾千元。",
  "isHead": false,
  "level": null,
  "family": "radar"
 },
 {
  "word": "rage",
  "answer": "rage",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "盛怒；狂怒",
  "en_def": "very strong anger that is hard to control",
  "sentence": "When he saw the scratch on his new car, his face turned red with {{BLANK}}, and he shouted at the parking attendant.",
  "cn": "當他看到新車上的刮痕時，氣得滿臉通紅，盛怒之下對停車場管理員大吼。",
  "cnMarked": "當他看到新車上的刮痕時，氣得滿臉通紅，【盛怒】之下對停車場管理員大吼。",
  "isHead": true,
  "level": 4,
  "family": "rage"
 },
 {
  "word": "rage",
  "answer": "raged",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "肆虐；發怒",
  "en_def": "to continue with great force; to be very angry",
  "sentence": "The storm {{BLANK}} all night, and in the morning we found trees lying across the road and the power still off.",
  "cn": "暴風雨肆虐了一整夜，早上我們發現樹木橫倒在路上，而且電力還沒恢復。",
  "cnMarked": "暴風雨【肆虐】了一整夜，早上我們發現樹木橫倒在路上，而且電力還沒恢復。",
  "isHead": false,
  "level": 4,
  "family": "rage"
 },
 {
  "word": "fly into a rage",
  "answer": "flew into a rage",
  "nblanks": 4,
  "pos": "v.phr.",
  "cn_def": "勃然大怒",
  "en_def": "to suddenly become extremely angry",
  "sentence": "My uncle usually stays calm, but he {{BLANK}} when he found out that someone had stolen his bicycle again.",
  "cn": "我叔叔通常很冷靜，但當他發現有人又偷了他的腳踏車時，他勃然大怒。",
  "cnMarked": "我叔叔通常很冷靜，但當他發現有人又偷了他的腳踏車時，他【勃然大怒】。",
  "isHead": false,
  "level": null,
  "family": "rage"
 },
 {
  "word": "road rage",
  "answer": "road rage",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "路怒症",
  "en_def": "violent anger shown by a driver toward other drivers",
  "sentence": "Cases of {{BLANK}} are increasing in big cities, so the police warn drivers to take a deep breath instead of fighting.",
  "cn": "大城市的路怒症案件正在增加，所以警方提醒駕駛人深呼吸而不要打架。",
  "cnMarked": "大城市的【路怒症】案件正在增加，所以警方提醒駕駛人深呼吸而不要打架。",
  "isHead": false,
  "level": null,
  "family": "rage"
 },
 {
  "word": "outrage",
  "answer": "outrage",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "憤慨；義憤",
  "en_def": "a strong feeling of shock and anger",
  "sentence": "There was public {{BLANK}} when the news showed the factory pouring dirty water directly into the river.",
  "cn": "當新聞播出那家工廠直接把髒水倒進河裡時，引起了民眾的憤慨。",
  "cnMarked": "當新聞播出那家工廠直接把髒水倒進河裡時，引起了民眾的【憤慨】。",
  "isHead": false,
  "level": 6,
  "family": "rage"
 },
 {
  "word": "outrageous",
  "answer": "outrageous",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "離譜的；令人髮指的",
  "en_def": "very shocking and unfair",
  "sentence": "It is {{BLANK}} that the hotel charged us 500 dollars for a bottle of water that costs 20 dollars in a store.",
  "cn": "飯店向我們收了五百元買一瓶商店只賣二十元的水，這真是離譜。",
  "cnMarked": "飯店向我們收了五百元買一瓶商店只賣二十元的水，這真是【離譜】。",
  "isHead": false,
  "level": 6,
  "family": "rage"
 },
 {
  "word": "rainfall",
  "answer": "rainfall",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "降雨量",
  "en_def": "the amount of rain that falls in a place during a period of time",
  "sentence": "The {{BLANK}} this summer was only half of the normal amount, so farmers are worried about their rice fields.",
  "cn": "今年夏天的降雨量只有正常的一半，所以農民很擔心他們的稻田。",
  "cnMarked": "今年夏天的【降雨量】只有正常的一半，所以農民很擔心他們的稻田。",
  "isHead": true,
  "level": 4,
  "family": "rainfall"
 },
 {
  "word": "heavy rainfall",
  "answer": "heavy rainfall",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "豪雨；大量降雨",
  "en_def": "a large amount of rain",
  "sentence": "The weather bureau warned of {{BLANK}} in the mountains, and hikers were told to leave the trails before noon.",
  "cn": "氣象局警告山區將有豪雨，登山客被告知要在中午前離開步道。",
  "cnMarked": "氣象局警告山區將有【豪雨】，登山客被告知要在中午前離開步道。",
  "isHead": false,
  "level": null,
  "family": "rainfall"
 },
 {
  "word": "rainy",
  "answer": "rainy",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "多雨的；下雨的",
  "en_def": "having a lot of rain",
  "sentence": "Keelung is famous for its {{BLANK}} weather, so people who live there always carry an umbrella in their bags.",
  "cn": "基隆以多雨的天氣聞名，所以住在那裡的人總是在包包裡帶著雨傘。",
  "cnMarked": "基隆以【多雨的】天氣聞名，所以住在那裡的人總是在包包裡帶著雨傘。",
  "isHead": false,
  "level": 1,
  "family": "rainfall"
 },
 {
  "word": "rainstorm",
  "answer": "rainstorm",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "暴風雨",
  "en_def": "a storm with very heavy rain",
  "sentence": "A sudden {{BLANK}} hit the city during rush hour, and many streets were under water within thirty minutes.",
  "cn": "一場突如其來的暴風雨在尖峰時間襲擊城市，許多街道在三十分鐘內就淹水了。",
  "cnMarked": "一場突如其來的【暴風雨】在尖峰時間襲擊城市，許多街道在三十分鐘內就淹水了。",
  "isHead": false,
  "level": null,
  "family": "rainfall"
 },
 {
  "word": "raisin",
  "answer": "raisins",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "葡萄乾",
  "en_def": "a dried grape, often used in cakes and bread",
  "sentence": "My mother adds a handful of {{BLANK}} to the oatmeal every morning because they make it sweet without any sugar.",
  "cn": "我媽媽每天早上在燕麥粥裡加一把葡萄乾，因為它們不用加糖就能讓粥變甜。",
  "cnMarked": "我媽媽每天早上在燕麥粥裡加一把【葡萄乾】，因為它們不用加糖就能讓粥變甜。",
  "isHead": true,
  "level": 4,
  "family": "raisin"
 },
 {
  "word": "raisin bread",
  "answer": "raisin bread",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "葡萄乾麵包",
  "en_def": "bread with raisins baked inside it",
  "sentence": "The bakery on the corner sells warm {{BLANK}} every morning at seven, and it is usually sold out by nine.",
  "cn": "轉角那家麵包店每天早上七點賣熱騰騰的葡萄乾麵包，通常九點前就賣光了。",
  "cnMarked": "轉角那家麵包店每天早上七點賣熱騰騰的【葡萄乾麵包】，通常九點前就賣光了。",
  "isHead": false,
  "level": null,
  "family": "raisin"
 },
 {
  "word": "grape",
  "answer": "grapes",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "葡萄",
  "en_def": "a small round green or purple fruit that grows in bunches",
  "sentence": "In autumn, farmers in Changhua pick {{BLANK}} from the vines, and some of them are dried in the sun to make raisins.",
  "cn": "秋天時，彰化的農民從藤上採收葡萄，其中一些會在太陽下曬乾製成葡萄乾。",
  "cnMarked": "秋天時，彰化的農民從藤上採收【葡萄】，其中一些會在太陽下曬乾製成葡萄乾。",
  "isHead": false,
  "level": 2,
  "family": "raisin"
 },
 {
  "word": "dried fruit",
  "answer": "dried fruit",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "果乾",
  "en_def": "fruit that has had its water removed so it keeps for a long time",
  "sentence": "Instead of candy, the teacher gave each student a small bag of {{BLANK}}, such as raisins and dried mango.",
  "cn": "老師沒有發糖果，而是給每位學生一小袋果乾，例如葡萄乾和芒果乾。",
  "cnMarked": "老師沒有發糖果，而是給每位學生一小袋【果乾】，例如葡萄乾和芒果乾。",
  "isHead": false,
  "level": null,
  "family": "raisin"
 }
];
const MCQS = [
 {
  "q": "Mr. Wang has worked very hard at the bank for ten years. Last week he finally got a ______, and now he is the manager of the whole office.",
  "options": [
   "promotion",
   "pronunciation",
   "publication",
   "proposal"
  ],
  "answer": 0,
  "vocabIndex": 0
 },
 {
  "q": "The hospital answered the phone right away and sent an ambulance in only five minutes. Thanks to their ______ action, the old man's life was saved last night.",
  "options": [
   "rainy",
   "prompt",
   "prosperous",
   "psychological"
  ],
  "answer": 1,
  "vocabIndex": 5
 },
 {
  "q": "Many students can spell the word \"comfortable\" correctly. However, their ______ of it is often wrong because they try to say every single letter in the word.",
  "options": [
   "quotation",
   "protest",
   "pronunciation",
   "prosperity"
  ],
  "answer": 2,
  "vocabIndex": 9
 },
 {
  "q": "Our class wants a longer lunch break. We wrote a ______ to the principal explaining our idea, and she will give us an answer next week.",
  "options": [
   "proposal",
   "rage",
   "publicity",
   "radar"
  ],
  "answer": 0,
  "vocabIndex": 13
 },
 {
  "q": "A new high-speed train station opened in the town two years ago. Since then, hotels and restaurants there have begun to ______ as more visitors come.",
  "options": [
   "protest",
   "quarrel",
   "pronounce",
   "prosper"
  ],
  "answer": 3,
  "vocabIndex": 18
 },
 {
  "q": "The country was very poor fifty years ago, but today its people enjoy good jobs and nice homes. Its ______ comes mostly from the computer industry.",
  "options": [
   "pursuit",
   "publication",
   "prosperity",
   "rainfall"
  ],
  "answer": 2,
  "vocabIndex": 19
 },
 {
  "q": "My uncle owns three restaurants and a hotel near the beach. He is the most ______ person in our family, but he still works hard every day.",
  "options": [
   "prosperous",
   "prompt",
   "psychological",
   "outrageous"
  ],
  "answer": 0,
  "vocabIndex": 20
 },
 {
  "q": "Eggs, fish, meat, and beans help your body build strong muscles. Doctors say that growing teenagers need to eat enough ______ every single day to stay healthy.",
  "options": [
   "raisin",
   "protein",
   "quilt",
   "radar"
  ],
  "answer": 1,
  "vocabIndex": 23
 },
 {
  "q": "The company wanted to build a big factory right next to the elementary school. Hundreds of parents gathered outside the city hall to ______ against the plan.",
  "options": [
   "protest",
   "prosper",
   "pursue",
   "publish"
  ],
  "answer": 0,
  "vocabIndex": 26
 },
 {
  "q": "The young player lost the big game and did not want to leave his room for days. His coach said the problem was ______, not physical.",
  "options": [
   "prosperous",
   "promotional",
   "quilted",
   "psychological"
  ],
  "answer": 3,
  "vocabIndex": 30
 },
 {
  "q": "Emma felt sad and worried for months after she moved to a new city. Her doctor suggested that she talk with a ______ about her feelings.",
  "options": [
   "psychologist",
   "protester",
   "psychiatrist",
   "publisher"
  ],
  "answer": 0,
  "vocabIndex": 31
 },
 {
  "q": "Why do people buy things they do not need? Why do we forget names so quickly? If these questions interest you, you may enjoy studying ______.",
  "options": [
   "publicity",
   "pronunciation",
   "psychology",
   "prosperity"
  ],
  "answer": 2,
  "vocabIndex": 32
 },
 {
  "q": "The scientist worked on her report for three long years. After its ______ in a famous magazine, doctors around the world began to use her ideas.",
  "options": [
   "rainfall",
   "publication",
   "quarrel",
   "pursuit"
  ],
  "answer": 1,
  "vocabIndex": 36
 },
 {
  "q": "The new movie did not need to spend money on advertising. It got a lot of free ______ because two famous singers talked about it on TV.",
  "options": [
   "quotation",
   "protein",
   "proposal",
   "publicity"
  ],
  "answer": 3,
  "vocabIndex": 37
 },
 {
  "q": "Jenny has written stories since she was ten years old. Her dream is to ______ a book one day so that people everywhere can read her stories.",
  "options": [
   "quilt",
   "publish",
   "prompt",
   "pursue"
  ],
  "answer": 1,
  "vocabIndex": 38
 },
 {
  "q": "A ______ is a company that turns a writer's words into real books. It pays for the printing and then sells the finished books to bookstores.",
  "options": [
   "publisher",
   "psychiatrist",
   "protester",
   "psychologist"
  ],
  "answer": 0,
  "vocabIndex": 39
 },
 {
  "q": "Kevin has loved cooking since he was a child. Now he plans to ______ his dream of becoming a chef by studying at a cooking school in France.",
  "options": [
   "quarrel",
   "pronounce",
   "pursue",
   "protest"
  ],
  "answer": 2,
  "vocabIndex": 43
 },
 {
  "q": "Some people work day and night just to get rich. However, in their ______ of more money, they often forget about their family and their own health.",
  "options": [
   "radar",
   "protein",
   "promotion",
   "pursuit"
  ],
  "answer": 3,
  "vocabIndex": 45
 },
 {
  "q": "My brother and I had a big ______ about who should wash the dishes. In the end, Mom was angry at both of us and washed them herself.",
  "options": [
   "quarrel",
   "quilt",
   "rainfall",
   "raisin"
  ],
  "answer": 0,
  "vocabIndex": 48
 },
 {
  "q": "The nights in the mountains are much colder than in the city. Grandma put a thick ______ on my bed so that I would not feel cold.",
  "options": [
   "protein",
   "quilt",
   "radar",
   "quotation"
  ],
  "answer": 1,
  "vocabIndex": 52
 },
 {
  "q": "\"Practice makes perfect\" is a famous ______ that our English teacher writes on the board every week. She wants us to practice speaking English every single day.",
  "options": [
   "rainfall",
   "promotion",
   "protest",
   "quotation"
  ],
  "answer": 3,
  "vocabIndex": 56
 },
 {
  "q": "The airport uses ______ to watch the sky and know where every plane is. Without it, planes would not be able to land safely at night.",
  "options": [
   "raisin",
   "quilt",
   "radar",
   "protein"
  ],
  "answer": 2,
  "vocabIndex": 60
 },
 {
  "q": "When the man found that someone had hit his new car and driven away, he shouted and kicked the wall. He was shaking with ______ for an hour.",
  "options": [
   "proposal",
   "rage",
   "pursuit",
   "rainfall"
  ],
  "answer": 1,
  "vocabIndex": 64
 },
 {
  "q": "It did not rain for three months in the south this year. The low ______ has dried up the rivers, and farmers cannot water their fields.",
  "options": [
   "rage",
   "radar",
   "protein",
   "rainfall"
  ],
  "answer": 3,
  "vocabIndex": 70
 },
 {
  "q": "A ______ is a grape that has been dried in the sun until it becomes small, sweet, and brown. People often put them in bread, cookies, and cereal.",
  "options": [
   "radar",
   "raisin",
   "protein",
   "quilt"
  ],
  "answer": 1,
  "vocabIndex": 74
 },
 {
  "q": "Students who finish the reading program will get a small prize. The school hopes this will ______ reading and get more children to open books during the summer vacation.",
  "options": [
   "pronounce",
   "quilt",
   "quote",
   "promote"
  ],
  "answer": 3,
  "vocabIndex": 2
 },
 {
  "q": "Before you give a speech, you should learn how to ______ all the difficult words. If you say them wrong, people in the audience may not understand you.",
  "options": [
   "prosper",
   "propose",
   "pronounce",
   "publicize"
  ],
  "answer": 2,
  "vocabIndex": 10
 },
 {
  "q": "Our team worked for six months on the new shopping app. Finally, our boss said she was ready to ______ the plan to the company president next Monday.",
  "options": [
   "propose",
   "pursue",
   "protest",
   "quarrel"
  ],
  "answer": 0,
  "vocabIndex": 15
 },
 {
  "q": "The restaurant charged us 300 dollars for a small glass of water that cost nothing to make. Everyone at the table agreed that the price was ______.",
  "options": [
   "psychological",
   "outrageous",
   "prompt",
   "prosperous"
  ],
  "answer": 1,
  "vocabIndex": 69
 },
 {
  "q": "The weather in Keelung is very different from the weather in Taichung. It is ______ most of the year, so people there always carry an umbrella in their bags.",
  "options": [
   "quilted",
   "proposed",
   "rainy",
   "promotional"
  ],
  "answer": 2,
  "vocabIndex": 72
 }
];
const LOOKUP = {};
VOCAB.forEach(v => { const key = v.word.toLowerCase(); const sense = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def };
  if (LOOKUP[key]) LOOKUP[key].combined.push(sense); else LOOKUP[key] = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def, combined: [sense] }; });
const EXTRA_GLOSSES = {};