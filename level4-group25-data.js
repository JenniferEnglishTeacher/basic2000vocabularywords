// 學測6000字 Level 4 Group 25 (logic-memorial) — word-family edition
const QUIZ_CONFIG = {
  groupName: "6000字 L4 Group 25 - logic – memorial (word family)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};
const VOCAB = [
 {
  "word": "logic",
  "answer": "logic",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "邏輯；道理",
  "en_def": "a way of thinking carefully using clear reasons",
  "sentence": "I could not follow the {{BLANK}} of his argument, because he jumped from one idea to another without explaining anything.",
  "cn": "我跟不上他論點的邏輯，因為他從一個想法跳到另一個想法，什麼都沒解釋。",
  "cnMarked": "我跟不上他論點的【邏輯】，因為他從一個想法跳到另一個想法，什麼都沒解釋。",
  "isHead": true,
  "level": 4,
  "family": "logic"
 },
 {
  "word": "logical",
  "answer": "logical",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "合邏輯的；合理的",
  "en_def": "sensible and based on clear reasons",
  "sentence": "It is {{BLANK}} to bring an umbrella today, since the weather report says there is an eighty percent chance of rain.",
  "cn": "今天帶雨傘是合理的，因為氣象報告說降雨機率有百分之八十。",
  "cnMarked": "今天帶雨傘是【合理的】，因為氣象報告說降雨機率有百分之八十。",
  "isHead": true,
  "level": 4,
  "family": "logic"
 },
 {
  "word": "logically",
  "answer": "logically",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "邏輯上；有條理地",
  "en_def": "in a sensible and reasonable way",
  "sentence": "Instead of getting angry, try to think {{BLANK}} about the problem and write down every possible solution you can find.",
  "cn": "與其生氣，不如試著有條理地思考這個問題，並寫下你能想到的每一個可能的解決方法。",
  "cnMarked": "與其生氣，不如試著【有條理地】思考這個問題，並寫下你能想到的每一個可能的解決方法。",
  "isHead": false,
  "level": null,
  "family": "logic"
 },
 {
  "word": "illogical",
  "answer": "illogical",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "不合邏輯的；不合理的",
  "en_def": "not sensible or reasonable",
  "sentence": "It seems {{BLANK}} to buy a bigger car when gas prices are rising and you only drive to work alone.",
  "cn": "在油價上漲、而且你只是一個人開車上班的情況下買更大的車，似乎不合理。",
  "cnMarked": "在油價上漲、而且你只是一個人開車上班的情況下買更大的車，似乎【不合理】。",
  "isHead": false,
  "level": null,
  "family": "logic"
 },
 {
  "word": "loosen",
  "answer": "loosen",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "鬆開；放鬆",
  "en_def": "to make something less tight, or to become less tight",
  "sentence": "After the long dinner, my father had to {{BLANK}} his belt because he had eaten far too much of my mother's cooking.",
  "cn": "吃完那頓漫長的晚餐後，我爸爸不得不鬆開皮帶，因為他吃了太多我媽媽做的菜。",
  "cnMarked": "吃完那頓漫長的晚餐後，我爸爸不得不【鬆開】皮帶，因為他吃了太多我媽媽做的菜。",
  "isHead": true,
  "level": 4,
  "family": "loosen"
 },
 {
  "word": "loose",
  "answer": "loose",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "鬆的；寬鬆的",
  "en_def": "not tight; not firmly fixed",
  "sentence": "This shirt is too {{BLANK}} for me, so I will exchange it for a smaller size at the store tomorrow morning.",
  "cn": "這件襯衫對我來說太寬鬆了，所以我明天早上要去店裡換小一號的。",
  "cnMarked": "這件襯衫對我來說太【寬鬆】了，所以我明天早上要去店裡換小一號的。",
  "isHead": false,
  "level": 3,
  "family": "loosen"
 },
 {
  "word": "loosely",
  "answer": "loosely",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "鬆鬆地；大致上",
  "en_def": "not tightly; not exactly",
  "sentence": "The movie is {{BLANK}} based on a true story, but the director changed many details to make it more exciting.",
  "cn": "這部電影大致上是根據真實故事改編的，但導演改了許多細節讓它更刺激。",
  "cnMarked": "這部電影【大致上】是根據真實故事改編的，但導演改了許多細節讓它更刺激。",
  "isHead": false,
  "level": null,
  "family": "loosen"
 },
 {
  "word": "come loose",
  "answer": "came loose",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "鬆脫",
  "en_def": "to become no longer firmly fixed",
  "sentence": "One of the wheels on my old bike {{BLANK}} while I was riding home, so I had to push it the rest of the way.",
  "cn": "我騎舊腳踏車回家時，其中一個輪子鬆脫了，所以剩下的路我只好用推的。",
  "cnMarked": "我騎舊腳踏車回家時，其中一個輪子【鬆脫】了，所以剩下的路我只好用推的。",
  "isHead": false,
  "level": null,
  "family": "loosen"
 },
 {
  "word": "lousy",
  "answer": "lousy",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "糟糕的；差勁的",
  "en_def": "very bad or of very poor quality",
  "sentence": "The hotel room was {{BLANK}}: the bed was hard, the shower was cold, and we could hear traffic noise all night.",
  "cn": "那間飯店房間很糟糕：床很硬、淋浴的水是冷的，而且整晚都聽得到車聲。",
  "cnMarked": "那間飯店房間很【糟糕】：床很硬、淋浴的水是冷的，而且整晚都聽得到車聲。",
  "isHead": true,
  "level": 4,
  "family": "lousy"
 },
 {
  "word": "feel lousy",
  "answer": "felt lousy",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "感覺很糟；很不舒服",
  "en_def": "to feel ill or unhappy",
  "sentence": "I {{BLANK}} this morning because I stayed up until two o'clock finishing my history report.",
  "cn": "我今天早上感覺很糟，因為我熬夜到兩點才寫完歷史報告。",
  "cnMarked": "我今天早上【感覺很糟】，因為我熬夜到兩點才寫完歷史報告。",
  "isHead": false,
  "level": null,
  "family": "lousy"
 },
 {
  "word": "lousy at",
  "answer": "lousy at",
  "nblanks": 2,
  "pos": "adj.phr.",
  "cn_def": "很不擅長…",
  "en_def": "very bad at doing something",
  "sentence": "My brother is {{BLANK}} cooking, so whenever my parents are away, we just order pizza or eat instant noodles.",
  "cn": "我哥哥很不擅長烹飪，所以每當父母不在家，我們就只能叫披薩或吃泡麵。",
  "cnMarked": "我哥哥【很不擅長】烹飪，所以每當父母不在家，我們就只能叫披薩或吃泡麵。",
  "isHead": false,
  "level": null,
  "family": "lousy"
 },
 {
  "word": "loyal",
  "answer": "loyal",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "忠誠的；忠實的",
  "en_def": "always supporting someone or something",
  "sentence": "A dog is a {{BLANK}} friend that will stay by your side even when everyone else has left you.",
  "cn": "狗是忠實的朋友，即使其他人都離開了你，牠仍會守在你身邊。",
  "cnMarked": "狗是【忠實的】朋友，即使其他人都離開了你，牠仍會守在你身邊。",
  "isHead": true,
  "level": 4,
  "family": "loyal"
 },
 {
  "word": "loyalty",
  "answer": "loyalty",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "忠誠；忠心",
  "en_def": "the quality of always supporting someone or something",
  "sentence": "The company rewards the {{BLANK}} of its workers by giving a bonus to anyone who has stayed for more than ten years.",
  "cn": "這家公司為了獎勵員工的忠誠，會發獎金給任職超過十年的人。",
  "cnMarked": "這家公司為了獎勵員工的【忠誠】，會發獎金給任職超過十年的人。",
  "isHead": true,
  "level": 4,
  "family": "loyal"
 },
 {
  "word": "disloyal",
  "answer": "disloyal",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "不忠的；背叛的",
  "en_def": "not loyal; not supporting your friends or group",
  "sentence": "It was {{BLANK}} of him to tell our secret plan to the other team just before the big game.",
  "cn": "他在大賽前把我們的秘密計畫告訴對方球隊，真是不忠。",
  "cnMarked": "他在大賽前把我們的秘密計畫告訴對方球隊，真是【不忠】。",
  "isHead": false,
  "level": null,
  "family": "loyal"
 },
 {
  "word": "loyal customer",
  "answer": "loyal customer",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "忠實顧客",
  "en_def": "a customer who keeps buying from the same shop or company",
  "sentence": "Mrs. Lin has been a {{BLANK}} of this bakery for twenty years, so the owner always gives her a free cookie.",
  "cn": "林太太二十年來一直是這家麵包店的忠實顧客，所以老闆總是送她一片免費的餅乾。",
  "cnMarked": "林太太二十年來一直是這家麵包店的【忠實顧客】，所以老闆總是送她一片免費的餅乾。",
  "isHead": false,
  "level": null,
  "family": "loyal"
 },
 {
  "word": "luxurious",
  "answer": "luxurious",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "豪華的；奢華的",
  "en_def": "very comfortable, beautiful, and expensive",
  "sentence": "The {{BLANK}} hotel has a swimming pool on the roof, a private beach, and a restaurant with a famous French chef.",
  "cn": "這家豪華飯店有屋頂游泳池、私人海灘，還有一間由名法國主廚主持的餐廳。",
  "cnMarked": "這家【豪華】飯店有屋頂游泳池、私人海灘，還有一間由名法國主廚主持的餐廳。",
  "isHead": true,
  "level": 4,
  "family": "luxurious"
 },
 {
  "word": "luxury",
  "answer": "luxury",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "奢華；奢侈品",
  "en_def": "great comfort from expensive things; something expensive that you enjoy but do not need",
  "sentence": "For my grandmother, who grew up very poor, a hot bath every night was a {{BLANK}} that she never took for granted.",
  "cn": "對從小家境貧困的奶奶來說，每晚泡個熱水澡是她從不視為理所當然的奢侈享受。",
  "cnMarked": "對從小家境貧困的奶奶來說，每晚泡個熱水澡是她從不視為理所當然的【奢侈享受】。",
  "isHead": true,
  "level": 4,
  "family": "luxurious"
 },
 {
  "word": "luxury hotel",
  "answer": "luxury hotel",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "豪華飯店",
  "en_def": "a very expensive and comfortable hotel",
  "sentence": "The movie star stayed in a {{BLANK}} near the beach, where one night costs more than my father earns in a month.",
  "cn": "那位電影明星住在海邊的一家豪華飯店，那裡住一晚的費用比我爸爸一個月賺的還多。",
  "cnMarked": "那位電影明星住在海邊的一家【豪華飯店】，那裡住一晚的費用比我爸爸一個月賺的還多。",
  "isHead": false,
  "level": null,
  "family": "luxurious"
 },
 {
  "word": "live in luxury",
  "answer": "lived in luxury",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "過奢華的生活",
  "en_def": "to live with great comfort and expensive things",
  "sentence": "After winning the lottery, the man {{BLANK}} for a few years, but he spent everything and ended up poor again.",
  "cn": "中了樂透之後，那個人過了幾年奢華的生活，但他花光了一切，最後又變得一貧如洗。",
  "cnMarked": "中了樂透之後，那個人【過了】幾年【奢華的生活】，但他花光了一切，最後又變得一貧如洗。",
  "isHead": false,
  "level": null,
  "family": "luxurious"
 },
 {
  "word": "machinery",
  "answer": "machinery",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "機器（總稱）；機械",
  "en_def": "machines, especially large ones, as a group",
  "sentence": "The factory bought new {{BLANK}} from Germany last year, so it can now produce twice as many bicycles every day.",
  "cn": "這家工廠去年從德國買了新機器，所以現在每天能生產兩倍數量的腳踏車。",
  "cnMarked": "這家工廠去年從德國買了新【機器】，所以現在每天能生產兩倍數量的腳踏車。",
  "isHead": true,
  "level": 4,
  "family": "machinery"
 },
 {
  "word": "machine",
  "answer": "machine",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "機器",
  "en_def": "a piece of equipment with moving parts that does a particular job",
  "sentence": "This {{BLANK}} can wash, dry, and fold the clothes by itself, so my mother has much more free time now.",
  "cn": "這台機器能自己洗、烘、摺衣服，所以我媽媽現在有更多的空閒時間。",
  "cnMarked": "這台【機器】能自己洗、烘、摺衣服，所以我媽媽現在有更多的空閒時間。",
  "isHead": false,
  "level": 1,
  "family": "machinery"
 },
 {
  "word": "washing machine",
  "answer": "washing machine",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "洗衣機",
  "en_def": "a machine for washing clothes",
  "sentence": "Our old {{BLANK}} finally stopped working last week, so we had to take all our dirty clothes to the laundry.",
  "cn": "我們家的舊洗衣機上週終於壞了，所以我們只好把髒衣服全部拿去洗衣店。",
  "cnMarked": "我們家的舊【洗衣機】上週終於壞了，所以我們只好把髒衣服全部拿去洗衣店。",
  "isHead": false,
  "level": null,
  "family": "machinery"
 },
 {
  "word": "vending machine",
  "answer": "vending machine",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "自動販賣機",
  "en_def": "a machine that sells drinks or snacks when you put in money",
  "sentence": "If you get thirsty during the hike, there is a {{BLANK}} near the entrance of the trail that sells cold drinks.",
  "cn": "如果你健行時口渴了，步道入口附近有一台賣冷飲的自動販賣機。",
  "cnMarked": "如果你健行時口渴了，步道入口附近有一台賣冷飲的【自動販賣機】。",
  "isHead": false,
  "level": null,
  "family": "machinery"
 },
 {
  "word": "magnetic",
  "answer": "magnetic",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "磁性的；有吸引力的",
  "en_def": "able to attract iron; having a strong power to attract people",
  "sentence": "The {{BLANK}} strip on the back of your credit card stores your information, so keep it away from your phone.",
  "cn": "你信用卡背面的磁條儲存了你的資料，所以要讓它遠離手機。",
  "cnMarked": "你信用卡背面的【磁】條儲存了你的資料，所以要讓它遠離手機。",
  "isHead": true,
  "level": 4,
  "family": "magnetic"
 },
 {
  "word": "magnet",
  "answer": "magnet",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "磁鐵",
  "en_def": "a piece of iron or metal that attracts other metal objects",
  "sentence": "My little sister collects a {{BLANK}} from every city she visits and sticks them all on the door of our refrigerator.",
  "cn": "我妹妹每到一個城市都會收集一個磁鐵，然後全部貼在我們家冰箱的門上。",
  "cnMarked": "我妹妹每到一個城市都會收集一個【磁鐵】，然後全部貼在我們家冰箱的門上。",
  "isHead": false,
  "level": 3,
  "family": "magnetic"
 },
 {
  "word": "magnetic field",
  "answer": "magnetic field",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "磁場",
  "en_def": "the area around a magnet where its force can be felt",
  "sentence": "Birds can feel the Earth's {{BLANK}}, which helps them fly thousands of kilometers in the right direction every winter.",
  "cn": "鳥類能感受到地球的磁場，這幫助牠們每年冬天朝正確方向飛行數千公里。",
  "cnMarked": "鳥類能感受到地球的【磁場】，這幫助牠們每年冬天朝正確方向飛行數千公里。",
  "isHead": false,
  "level": null,
  "family": "magnetic"
 },
 {
  "word": "magnetism",
  "answer": "magnetism",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "磁性；（個人）魅力",
  "en_def": "the power of a magnet; a strong personal charm",
  "sentence": "The young teacher has a kind of {{BLANK}} that makes even the laziest students sit up and listen to her lessons.",
  "cn": "這位年輕老師有一種魅力，連最懶散的學生都會坐直身子聽她上課。",
  "cnMarked": "這位年輕老師有一種【魅力】，連最懶散的學生都會坐直身子聽她上課。",
  "isHead": false,
  "level": null,
  "family": "magnetic"
 },
 {
  "word": "magnificent",
  "answer": "magnificent",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "壯麗的；宏偉的",
  "en_def": "extremely beautiful or impressive",
  "sentence": "From the hotel window we had a {{BLANK}} view of the whole bay, with fishing boats and islands shining in the sunset.",
  "cn": "從飯店窗戶望出去，我們看到整個海灣壯麗的景色，漁船和島嶼在夕陽下閃閃發光。",
  "cnMarked": "從飯店窗戶望出去，我們看到整個海灣【壯麗的】景色，漁船和島嶼在夕陽下閃閃發光。",
  "isHead": true,
  "level": 4,
  "family": "magnificent"
 },
 {
  "word": "magnificently",
  "answer": "magnificently",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "壯麗地；出色地",
  "en_def": "in an extremely beautiful or impressive way",
  "sentence": "The old temple has been {{BLANK}} restored, and its red roof and golden dragons look exactly as they did three hundred years ago.",
  "cn": "這座古廟被出色地修復了，它的紅色屋頂和金龍看起來和三百年前一模一樣。",
  "cnMarked": "這座古廟被【出色地】修復了，它的紅色屋頂和金龍看起來和三百年前一模一樣。",
  "isHead": false,
  "level": null,
  "family": "magnificent"
 },
 {
  "word": "magnificence",
  "answer": "magnificence",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "壯麗；宏偉",
  "en_def": "the quality of being extremely beautiful or impressive",
  "sentence": "Visitors are often silent for a moment when they first see the {{BLANK}} of the Grand Canyon from the edge of the cliff.",
  "cn": "遊客第一次從懸崖邊看到大峽谷的壯麗時，常常會沉默片刻。",
  "cnMarked": "遊客第一次從懸崖邊看到大峽谷的【壯麗】時，常常會沉默片刻。",
  "isHead": false,
  "level": null,
  "family": "magnificent"
 },
 {
  "word": "makeup",
  "answer": "makeup",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "化妝品；化妝",
  "en_def": "colored substances that you put on your face to look more attractive",
  "sentence": "My mother only wears a little {{BLANK}} to work, but she puts on more for weddings and other special occasions.",
  "cn": "我媽媽上班只化淡妝，但參加婚禮和其他特殊場合時會化得濃一點。",
  "cnMarked": "我媽媽上班只化淡【妝】，但參加婚禮和其他特殊場合時會化得濃一點。",
  "isHead": true,
  "level": 4,
  "family": "makeup"
 },
 {
  "word": "put on makeup",
  "answer": "put on makeup",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "化妝",
  "en_def": "to apply makeup to your face",
  "sentence": "Some girls in my class {{BLANK}} on the bus every morning because they do not have time at home.",
  "cn": "我們班有些女生每天早上在公車上化妝，因為她們在家沒有時間。",
  "cnMarked": "我們班有些女生每天早上在公車上【化妝】，因為她們在家沒有時間。",
  "isHead": false,
  "level": null,
  "family": "makeup"
 },
 {
  "word": "make up",
  "answer": "make up",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "編造；捏造",
  "en_def": "to invent a story or excuse that is not true",
  "sentence": "Tom did not do his homework, so he tried to {{BLANK}} a story about his dog eating his notebook.",
  "cn": "湯姆沒寫作業，所以他試圖編造一個他的狗把筆記本吃掉的故事。",
  "cnMarked": "湯姆沒寫作業，所以他試圖【編造】一個他的狗把筆記本吃掉的故事。",
  "isHead": false,
  "level": null,
  "family": "makeup"
 },
 {
  "word": "make up",
  "answer": "make up",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "組成；構成",
  "en_def": "to form something as its parts",
  "sentence": "Students from Vietnam and Indonesia {{BLANK}} almost half of the class in the evening Chinese course at our school.",
  "cn": "來自越南和印尼的學生占了我們學校夜間中文課班上將近一半的人數。",
  "cnMarked": "來自越南和印尼的學生【占了】我們學校夜間中文課班上將近一半的人數。",
  "isHead": false,
  "level": null,
  "family": "makeup"
 },
 {
  "word": "make up for",
  "answer": "make up for",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "彌補；補償",
  "en_def": "to do something good to balance something bad",
  "sentence": "He bought his sister a big ice cream to {{BLANK}} forgetting her birthday last week.",
  "cn": "他買了一個大冰淇淋給妹妹，以彌補上週忘了她的生日。",
  "cnMarked": "他買了一個大冰淇淋給妹妹，以【彌補】上週忘了她的生日。",
  "isHead": false,
  "level": null,
  "family": "makeup"
 },
 {
  "word": "make up with",
  "answer": "made up with",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "和（某人）和好",
  "en_def": "to become friends again with someone after a fight",
  "sentence": "After a week of not talking, the two best friends finally {{BLANK}} each other and went to the movies together.",
  "cn": "一個星期沒說話之後，這兩個最好的朋友終於和好了，一起去看電影。",
  "cnMarked": "一個星期沒說話之後，這兩個最好的朋友終於【和好】了，一起去看電影。",
  "isHead": false,
  "level": null,
  "family": "makeup"
 },
 {
  "word": "manual",
  "answer": "manual",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "手冊；使用說明書",
  "en_def": "a book that explains how to use or do something",
  "sentence": "Before you use the new camera, read the {{BLANK}} carefully so that you know what every button does.",
  "cn": "在使用新相機之前，請仔細閱讀使用手冊，這樣你才知道每個按鈕的功能。",
  "cnMarked": "在使用新相機之前，請仔細閱讀【使用手冊】，這樣你才知道每個按鈕的功能。",
  "isHead": true,
  "level": 4,
  "family": "manual"
 },
 {
  "word": "manual",
  "answer": "manual",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "手工的；手動的",
  "en_def": "done with the hands; operated by hand rather than by machine",
  "sentence": "My grandfather still prefers {{BLANK}} tools in his garden because he says they are quieter and more reliable than electric ones.",
  "cn": "我爺爺在花園裡仍然偏愛手動工具，因為他說它們比電動的更安靜、更可靠。",
  "cnMarked": "我爺爺在花園裡仍然偏愛【手動】工具，因為他說它們比電動的更安靜、更可靠。",
  "isHead": false,
  "level": 4,
  "family": "manual"
 },
 {
  "word": "manually",
  "answer": "manually",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "手動地；人工地",
  "en_def": "by hand, not by machine",
  "sentence": "When the power went out, the staff had to open the heavy gate {{BLANK}} to let the cars leave the parking lot.",
  "cn": "停電時，工作人員必須手動打開沉重的大門，讓車子離開停車場。",
  "cnMarked": "停電時，工作人員必須【手動】打開沉重的大門，讓車子離開停車場。",
  "isHead": false,
  "level": null,
  "family": "manual"
 },
 {
  "word": "manual labor",
  "answer": "manual labor",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "體力勞動",
  "en_def": "hard physical work done with the hands",
  "sentence": "Farming used to require a lot of {{BLANK}}, but today machines do most of the planting and harvesting.",
  "cn": "農業以前需要大量的體力勞動，但今天大部分的種植和收割都由機器完成。",
  "cnMarked": "農業以前需要大量的【體力勞動】，但今天大部分的種植和收割都由機器完成。",
  "isHead": false,
  "level": null,
  "family": "manual"
 },
 {
  "word": "manufacture",
  "answer": "manufacture",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "製造；生產",
  "en_def": "to make goods in large numbers in a factory",
  "sentence": "The company will {{BLANK}} its electric scooters in Taiwan and then sell them to customers in Europe and Japan.",
  "cn": "這家公司將在台灣製造電動機車，然後賣給歐洲和日本的顧客。",
  "cnMarked": "這家公司將在台灣【製造】電動機車，然後賣給歐洲和日本的顧客。",
  "isHead": true,
  "level": 4,
  "family": "manufacture"
 },
 {
  "word": "manufacturer",
  "answer": "manufacturer",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "製造商；廠商",
  "en_def": "a company that makes goods in large numbers",
  "sentence": "If the phone stops working within one year, the {{BLANK}} promises to repair it for free or give you a new one.",
  "cn": "如果手機在一年內故障，製造商承諾免費維修或換一支新的給你。",
  "cnMarked": "如果手機在一年內故障，【製造商】承諾免費維修或換一支新的給你。",
  "isHead": true,
  "level": 4,
  "family": "manufacture"
 },
 {
  "word": "manufacture",
  "answer": "manufacture",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "製造（業）",
  "en_def": "the making of goods in large numbers",
  "sentence": "The {{BLANK}} of bicycles has been an important industry in Taichung for more than forty years.",
  "cn": "腳踏車的製造四十多年來一直是台中的重要產業。",
  "cnMarked": "腳踏車的【製造】四十多年來一直是台中的重要產業。",
  "isHead": false,
  "level": 4,
  "family": "manufacture"
 },
 {
  "word": "manufacturing",
  "answer": "manufacturing",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "製造業",
  "en_def": "the business of making goods in factories",
  "sentence": "Many young people now prefer jobs in computer science to jobs in {{BLANK}}, so some factories cannot find enough workers.",
  "cn": "現在許多年輕人寧願從事電腦科學的工作，而不是製造業的工作，所以有些工廠找不到足夠的工人。",
  "cnMarked": "現在許多年輕人寧願從事電腦科學的工作，而不是【製造業】的工作，所以有些工廠找不到足夠的工人。",
  "isHead": false,
  "level": null,
  "family": "manufacture"
 },
 {
  "word": "marathon",
  "answer": "marathon",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "馬拉松",
  "en_def": "a running race of about 42 kilometers",
  "sentence": "My aunt finished her first {{BLANK}} in under five hours, and the whole family was waiting for her at the finish line.",
  "cn": "我阿姨在五小時內跑完她的第一場馬拉松，全家人都在終點線等她。",
  "cnMarked": "我阿姨在五小時內跑完她的第一場【馬拉松】，全家人都在終點線等她。",
  "isHead": true,
  "level": 4,
  "family": "marathon"
 },
 {
  "word": "run a marathon",
  "answer": "run a marathon",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "跑馬拉松",
  "en_def": "to take part in a marathon race",
  "sentence": "If you want to {{BLANK}} next spring, you should start training now by running at least three times a week.",
  "cn": "如果你想明年春天跑馬拉松，現在就應該開始訓練，每週至少跑三次。",
  "cnMarked": "如果你想明年春天【跑馬拉松】，現在就應該開始訓練，每週至少跑三次。",
  "isHead": false,
  "level": null,
  "family": "marathon"
 },
 {
  "word": "half marathon",
  "answer": "half marathon",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "半程馬拉松",
  "en_def": "a running race of about 21 kilometers",
  "sentence": "A {{BLANK}} is a good first goal for new runners because it is long enough to be a challenge but not too hard.",
  "cn": "半程馬拉松對新手跑者來說是不錯的第一個目標，因為它長到足以構成挑戰，但又不會太難。",
  "cnMarked": "【半程馬拉松】對新手跑者來說是不錯的第一個目標，因為它長到足以構成挑戰，但又不會太難。",
  "isHead": false,
  "level": null,
  "family": "marathon"
 },
 {
  "word": "marathon runner",
  "answer": "marathon runner",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "馬拉松跑者",
  "en_def": "a person who runs marathons",
  "sentence": "A good {{BLANK}} eats a lot of rice and noodles the night before a race to give the body enough energy.",
  "cn": "優秀的馬拉松跑者會在比賽前一晚吃很多飯和麵，讓身體有足夠的能量。",
  "cnMarked": "優秀的【馬拉松跑者】會在比賽前一晚吃很多飯和麵，讓身體有足夠的能量。",
  "isHead": false,
  "level": null,
  "family": "marathon"
 },
 {
  "word": "margin",
  "answer": "margin",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "頁邊空白",
  "en_def": "the empty space at the edge of a page",
  "sentence": "Our teacher asks us to write our comments in the {{BLANK}} of the page so that the main text stays clean and easy to read.",
  "cn": "老師要我們把評語寫在頁面的空白邊緣，這樣正文才能保持乾淨、容易閱讀。",
  "cnMarked": "老師要我們把評語寫在頁面的【空白邊緣】，這樣正文才能保持乾淨、容易閱讀。",
  "isHead": true,
  "level": 4,
  "family": "margin"
 },
 {
  "word": "margin",
  "answer": "margin",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "差距",
  "en_def": "the difference between two amounts, especially in a contest",
  "sentence": "Our school won the basketball final by a {{BLANK}} of only two points, so the last minute of the game was very exciting.",
  "cn": "我們學校以僅僅兩分的差距贏得籃球決賽，所以比賽的最後一分鐘非常刺激。",
  "cnMarked": "我們學校以僅僅兩分的【差距】贏得籃球決賽，所以比賽的最後一分鐘非常刺激。",
  "isHead": false,
  "level": 4,
  "family": "margin"
 },
 {
  "word": "profit margin",
  "answer": "profit margin",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "利潤率",
  "en_def": "the difference between the cost of making something and its selling price",
  "sentence": "The {{BLANK}} on bubble tea is very high because the ingredients are cheap but customers are happy to pay sixty dollars a cup.",
  "cn": "珍珠奶茶的利潤率非常高，因為原料便宜，但顧客樂意為一杯付六十元。",
  "cnMarked": "珍珠奶茶的【利潤率】非常高，因為原料便宜，但顧客樂意為一杯付六十元。",
  "isHead": false,
  "level": null,
  "family": "margin"
 },
 {
  "word": "marginal",
  "answer": "marginal",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "微小的；邊緣的",
  "en_def": "very small and not important",
  "sentence": "The new medicine made only a {{BLANK}} difference to the patients, so the doctors decided to try something else.",
  "cn": "新藥對病人只產生了微小的差別，所以醫生決定嘗試其他方法。",
  "cnMarked": "新藥對病人只產生了【微小的】差別，所以醫生決定嘗試其他方法。",
  "isHead": false,
  "level": 6,
  "family": "margin"
 },
 {
  "word": "by a narrow margin",
  "answer": "by a narrow margin",
  "nblanks": 4,
  "pos": "phr.",
  "cn_def": "以些微差距",
  "en_def": "by only a small difference",
  "sentence": "She was elected class leader {{BLANK}}, winning by just three votes more than her closest rival.",
  "cn": "她以些微差距當選班長，只比最接近的對手多三票。",
  "cnMarked": "她【以些微差距】當選班長，只比最接近的對手多三票。",
  "isHead": false,
  "level": null,
  "family": "margin"
 },
 {
  "word": "maturity",
  "answer": "maturity",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "成熟",
  "en_def": "the state of being fully grown or of behaving like a sensible adult",
  "sentence": "Although he is only sixteen, he showed great {{BLANK}} by staying calm and calling for help when his grandfather fell.",
  "cn": "雖然他只有十六歲，但在爺爺跌倒時他保持冷靜並呼救，表現出極大的成熟。",
  "cnMarked": "雖然他只有十六歲，但在爺爺跌倒時他保持冷靜並呼救，表現出極大的【成熟】。",
  "isHead": true,
  "level": 4,
  "family": "maturity"
 },
 {
  "word": "mature",
  "answer": "mature",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "成熟的",
  "en_def": "fully grown; behaving in a sensible, adult way",
  "sentence": "My younger sister is very {{BLANK}} for her age; she saves her pocket money and never fights with her friends.",
  "cn": "我妹妹就她的年齡來說非常成熟；她會存零用錢，而且從不和朋友吵架。",
  "cnMarked": "我妹妹就她的年齡來說非常【成熟】；她會存零用錢，而且從不和朋友吵架。",
  "isHead": false,
  "level": 2,
  "family": "maturity"
 },
 {
  "word": "mature",
  "answer": "mature",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "成熟；長成",
  "en_def": "to become fully grown or fully developed",
  "sentence": "These cheeses need to {{BLANK}} for at least six months in a cool, dark room before they are ready to be sold.",
  "cn": "這些起司需要在陰涼黑暗的房間裡熟成至少六個月，才可以出售。",
  "cnMarked": "這些起司需要在陰涼黑暗的房間裡【熟成】至少六個月，才可以出售。",
  "isHead": false,
  "level": 2,
  "family": "maturity"
 },
 {
  "word": "immature",
  "answer": "immature",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "不成熟的；幼稚的",
  "en_def": "behaving like a child; not fully developed",
  "sentence": "It was {{BLANK}} of the boys to laugh at the new student just because he spoke with a different accent.",
  "cn": "那些男孩只因為新同學口音不同就嘲笑他，真是幼稚。",
  "cnMarked": "那些男孩只因為新同學口音不同就嘲笑他，真是【幼稚】。",
  "isHead": false,
  "level": null,
  "family": "maturity"
 },
 {
  "word": "maximum",
  "answer": "maximum",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "最大的；最高的",
  "en_def": "the largest possible or allowed",
  "sentence": "The {{BLANK}} number of people allowed in the elevator is twelve, so please wait for the next one if it is full.",
  "cn": "電梯允許的最多人數是十二人，所以如果滿了，請等下一班。",
  "cnMarked": "電梯允許的【最多】人數是十二人，所以如果滿了，請等下一班。",
  "isHead": true,
  "level": 4,
  "family": "maximum"
 },
 {
  "word": "maximum",
  "answer": "maximum",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "最大量；最大限度",
  "en_def": "the largest amount or number that is possible or allowed",
  "sentence": "You can borrow a {{BLANK}} of five books from the library at one time, and you must return them within two weeks.",
  "cn": "你一次最多可以從圖書館借五本書，而且必須在兩週內歸還。",
  "cnMarked": "你一次【最多】可以從圖書館借五本書，而且必須在兩週內歸還。",
  "isHead": false,
  "level": 4,
  "family": "maximum"
 },
 {
  "word": "maximize",
  "answer": "maximize",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "使最大化",
  "en_def": "to make something as large or as good as possible",
  "sentence": "To {{BLANK}} your chances of passing the test, review your notes every evening instead of studying everything the night before.",
  "cn": "為了最大化你通過考試的機會，每天晚上複習筆記，而不是考前一晚才讀完所有東西。",
  "cnMarked": "為了【最大化】你通過考試的機會，每天晚上複習筆記，而不是考前一晚才讀完所有東西。",
  "isHead": false,
  "level": null,
  "family": "maximum"
 },
 {
  "word": "to the maximum",
  "answer": "to the maximum",
  "nblanks": 3,
  "pos": "phr.",
  "cn_def": "到極限；最大程度地",
  "en_def": "as much as possible",
  "sentence": "The young players pushed themselves {{BLANK}} during the final, and several of them could hardly walk after the game.",
  "cn": "年輕球員在決賽中把自己逼到極限，賽後有好幾個人幾乎走不動。",
  "cnMarked": "年輕球員在決賽中把自己逼【到極限】，賽後有好幾個人幾乎走不動。",
  "isHead": false,
  "level": null,
  "family": "maximum"
 },
 {
  "word": "measurable",
  "answer": "measurable",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "可測量的；顯著的",
  "en_def": "large enough to be noticed or measured",
  "sentence": "After three months of daily practice, there was a {{BLANK}} improvement in her English speaking, and her teacher noticed it right away.",
  "cn": "每天練習三個月後，她的英語口說有了顯著的進步，老師馬上就注意到了。",
  "cnMarked": "每天練習三個月後，她的英語口說有了【顯著的】進步，老師馬上就注意到了。",
  "isHead": true,
  "level": 4,
  "family": "measurable"
 },
 {
  "word": "measure",
  "answer": "measure",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "措施；手段（常用複數 measures）",
  "en_def": "an action taken to deal with a problem (often plural: measures)",
  "sentence": "The school introduced a new safety {{BLANK}}: every visitor must sign in at the gate and wear a name card inside.",
  "cn": "學校推出了一項新的安全措施：每位訪客都必須在大門登記，並在校內佩戴名牌。",
  "cnMarked": "學校推出了一項新的安全【措施】：每位訪客都必須在大門登記，並在校內佩戴名牌。",
  "isHead": true,
  "level": 2,
  "family": "measurable"
 },
 {
  "word": "measure",
  "answer": "measure",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "測量",
  "en_def": "to find the size, amount, or degree of something",
  "sentence": "The nurse will {{BLANK}} your height and weight first, and then the doctor will check your eyes and ears.",
  "cn": "護士會先測量你的身高和體重，然後醫生會檢查你的眼睛和耳朵。",
  "cnMarked": "護士會先【測量】你的身高和體重，然後醫生會檢查你的眼睛和耳朵。",
  "isHead": false,
  "level": 2,
  "family": "measurable"
 },
 {
  "word": "measurement",
  "answer": "measurements",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "測量；尺寸",
  "en_def": "the size or amount found by measuring; the act of measuring",
  "sentence": "The tailor took my {{BLANK}} carefully before he started making the suit for my cousin's wedding next month.",
  "cn": "裁縫師在開始為我做參加表哥下個月婚禮的西裝之前，仔細量了我的尺寸。",
  "cnMarked": "裁縫師在開始為我做參加表哥下個月婚禮的西裝之前，仔細量了我的【尺寸】。",
  "isHead": false,
  "level": 2,
  "family": "measurable"
 },
 {
  "word": "take measures",
  "answer": "taken measures",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "採取措施",
  "en_def": "to do things in order to deal with a problem",
  "sentence": "The government has {{BLANK}} to reduce air pollution, such as offering free rides on electric buses during rush hour.",
  "cn": "政府已採取措施減少空氣污染，例如在尖峰時段提供免費搭乘電動公車。",
  "cnMarked": "政府已【採取措施】減少空氣污染，例如在尖峰時段提供免費搭乘電動公車。",
  "isHead": false,
  "level": null,
  "family": "measurable"
 },
 {
  "word": "mechanic",
  "answer": "mechanic",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "技工；修車師傅",
  "en_def": "a person whose job is to repair cars or machines",
  "sentence": "The {{BLANK}} looked under the car for ten minutes and then told us that the brakes needed to be replaced.",
  "cn": "修車師傅在車底下看了十分鐘，然後告訴我們煞車需要更換。",
  "cnMarked": "【修車師傅】在車底下看了十分鐘，然後告訴我們煞車需要更換。",
  "isHead": true,
  "level": 4,
  "family": "mechanic"
 },
 {
  "word": "mechanical",
  "answer": "mechanical",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "機械的；機械式的",
  "en_def": "connected with machines; done without thinking",
  "sentence": "The plane could not take off on time because of a {{BLANK}} problem with one of its engines.",
  "cn": "飛機因為其中一具引擎的機械問題而無法準時起飛。",
  "cnMarked": "飛機因為其中一具引擎的【機械】問題而無法準時起飛。",
  "isHead": true,
  "level": 4,
  "family": "mechanic"
 },
 {
  "word": "mechanism",
  "answer": "mechanism",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "機械裝置；機制",
  "en_def": "a part of a machine that does a particular job; a way of doing something",
  "sentence": "The {{BLANK}} inside the old clock is so delicate that only one man in the city knows how to repair it.",
  "cn": "這座老時鐘裡的機械裝置非常精細，全市只有一個人知道怎麼修理。",
  "cnMarked": "這座老時鐘裡的【機械裝置】非常精細，全市只有一個人知道怎麼修理。",
  "isHead": false,
  "level": 5,
  "family": "mechanic"
 },
 {
  "word": "mechanically",
  "answer": "mechanically",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "機械地；呆板地",
  "en_def": "by machine; without thinking about what you are doing",
  "sentence": "The tired worker answered every question {{BLANK}}, without even looking up from his desk or changing his voice.",
  "cn": "那位疲憊的員工機械地回答每個問題，甚至沒有從桌前抬起頭或改變語氣。",
  "cnMarked": "那位疲憊的員工【機械地】回答每個問題，甚至沒有從桌前抬起頭或改變語氣。",
  "isHead": false,
  "level": null,
  "family": "mechanic"
 },
 {
  "word": "mechanics",
  "answer": "mechanics",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "力學；運作方式",
  "en_def": "the science of how forces act on objects; the way something works",
  "sentence": "In physics class this week we are studying {{BLANK}}, which explains why a ball falls faster the longer it drops.",
  "cn": "這週物理課我們在學力學，它解釋了為什麼球掉得越久就掉得越快。",
  "cnMarked": "這週物理課我們在學【力學】，它解釋了為什麼球掉得越久就掉得越快。",
  "isHead": false,
  "level": 4,
  "family": "mechanic"
 },
 {
  "word": "memorable",
  "answer": "memorable",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "難忘的；值得紀念的",
  "en_def": "worth remembering; special",
  "sentence": "Our graduation trip to Green Island was truly {{BLANK}}; we swam with sea turtles and watched the stars all night.",
  "cn": "我們的綠島畢業旅行真的很難忘；我們和海龜一起游泳，還整晚看星星。",
  "cnMarked": "我們的綠島畢業旅行真的很【難忘】；我們和海龜一起游泳，還整晚看星星。",
  "isHead": true,
  "level": 4,
  "family": "memorable"
 },
 {
  "word": "memorial",
  "answer": "memorial",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "紀念碑；紀念館",
  "en_def": "a building or statue built to remember a person or event",
  "sentence": "Thousands of visitors come to the war {{BLANK}} every year to lay flowers and remember the soldiers who died.",
  "cn": "每年有成千上萬的遊客來到戰爭紀念碑獻花，緬懷陣亡的士兵。",
  "cnMarked": "每年有成千上萬的遊客來到戰爭【紀念碑】獻花，緬懷陣亡的士兵。",
  "isHead": true,
  "level": 4,
  "family": "memorable"
 },
 {
  "word": "memorial",
  "answer": "memorial",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "紀念的；追悼的",
  "en_def": "made or held in order to remember a person or event",
  "sentence": "The school will hold a {{BLANK}} service for the old principal, who taught here for forty years before he passed away.",
  "cn": "學校將為老校長舉行追悼會，他在過世前曾在這裡任教四十年。",
  "cnMarked": "學校將為老校長舉行【追悼】會，他在過世前曾在這裡任教四十年。",
  "isHead": false,
  "level": 4,
  "family": "memorable"
 },
 {
  "word": "memory",
  "answer": "memory",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "記憶力；回憶",
  "en_def": "the ability to remember things; something that you remember",
  "sentence": "My grandmother has a wonderful {{BLANK}} for names, and she can still tell you about every student she taught.",
  "cn": "我奶奶對名字的記憶力非常好，她還能告訴你她教過的每一個學生的事。",
  "cnMarked": "我奶奶對名字的【記憶力】非常好，她還能告訴你她教過的每一個學生的事。",
  "isHead": false,
  "level": 2,
  "family": "memorable"
 },
 {
  "word": "memorize",
  "answer": "memorize",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "記住；背誦",
  "en_def": "to learn something so that you can remember it exactly",
  "sentence": "You do not need to {{BLANK}} every date in the history book, but you should understand why each event happened.",
  "cn": "你不需要背歷史課本裡的每一個日期，但你應該理解每個事件發生的原因。",
  "cnMarked": "你不需要【背】歷史課本裡的每一個日期，但你應該理解每個事件發生的原因。",
  "isHead": false,
  "level": 4,
  "family": "memorable"
 },
 {
  "word": "in memory of",
  "answer": "in memory of",
  "nblanks": 3,
  "pos": "phr.",
  "cn_def": "為了紀念…",
  "en_def": "as a way of remembering someone who has died",
  "sentence": "The park was built {{BLANK}} the firefighters who lost their lives while saving people from the burning building.",
  "cn": "這座公園是為了紀念那些在燃燒的大樓裡救人而喪生的消防員而建的。",
  "cnMarked": "這座公園是【為了紀念】那些在燃燒的大樓裡救人而喪生的消防員而建的。",
  "isHead": false,
  "level": null,
  "family": "memorable"
 }
];
const MCQS = [
 {
  "q": "My little brother says that cats can fly because they jump so high. There is no ______ in his idea, but he refuses to listen to anyone.",
  "options": [
   "memory",
   "luxury",
   "logic",
   "loyalty"
  ],
  "answer": 2,
  "vocabIndex": 0
 },
 {
  "q": "If you want to save money for a trip, eating out every day does not make sense. The ______ thing to do is to cook at home more often.",
  "options": [
   "luxurious",
   "magnetic",
   "lousy",
   "logical"
  ],
  "answer": 3,
  "vocabIndex": 1
 },
 {
  "q": "The screw on the chair is so tight that I cannot turn it with my fingers. Could you ______ it a little with this tool so I can take the leg off?",
  "options": [
   "memorize",
   "manufacture",
   "loosen",
   "measure"
  ],
  "answer": 2,
  "vocabIndex": 4
 },
 {
  "q": "I would not go to that restaurant again if I were you. The service was ______, the soup was cold, and we waited almost an hour for our noodles.",
  "options": [
   "lousy",
   "mature",
   "loyal",
   "magnetic"
  ],
  "answer": 0,
  "vocabIndex": 8
 },
 {
  "q": "Even when the team lost ten games in a row, Peter never stopped going to the stadium. He is the most ______ fan I have ever met.",
  "options": [
   "luxurious",
   "mechanical",
   "logical",
   "loyal"
  ],
  "answer": 3,
  "vocabIndex": 11
 },
 {
  "q": "The old dog waited at the train station for his owner every day for years, even after the man died. People were deeply moved by his ______.",
  "options": [
   "logic",
   "loyalty",
   "maturity",
   "margin"
  ],
  "answer": 1,
  "vocabIndex": 12
 },
 {
  "q": "The new cruise ship has a theater, three swimming pools, and rooms with private balconies. It is the most ______ ship that has ever sailed from Keelung.",
  "options": [
   "luxurious",
   "lousy",
   "marginal",
   "manual"
  ],
  "answer": 0,
  "vocabIndex": 15
 },
 {
  "q": "When my parents were children, they ate meat only on special days. For their family, a chicken dinner was a real ______, not an everyday meal.",
  "options": [
   "measure",
   "luxury",
   "marathon",
   "memorial"
  ],
  "answer": 1,
  "vocabIndex": 16
 },
 {
  "q": "The factory was very noisy because hundreds of machines were running at the same time. Workers must wear ear protection when the ______ is turned on.",
  "options": [
   "manual",
   "makeup",
   "memory",
   "machinery"
  ],
  "answer": 3,
  "vocabIndex": 19
 },
 {
  "q": "The small black strip on the back of the card holds all your bank information. Do not put the card near a ______ object, or the data may be destroyed.",
  "options": [
   "mature",
   "mechanical",
   "magnetic",
   "measurable"
  ],
  "answer": 2,
  "vocabIndex": 23
 },
 {
  "q": "We climbed for six hours to reach the top of Jade Mountain before sunrise. The ______ view of the sea of clouds made all our tiredness disappear.",
  "options": [
   "illogical",
   "lousy",
   "immature",
   "magnificent"
  ],
  "answer": 3,
  "vocabIndex": 27
 },
 {
  "q": "Lily is only fourteen, so her mother does not allow her to wear ______ to school. She can only use it when she performs in the school play.",
  "options": [
   "machinery",
   "makeup",
   "manual",
   "margin"
  ],
  "answer": 1,
  "vocabIndex": 30
 },
 {
  "q": "I could not figure out how to set the clock on the new oven. In the end, I found the answer on page twelve of the ______ that came in the box.",
  "options": [
   "mechanic",
   "memorial",
   "manual",
   "magnet"
  ],
  "answer": 2,
  "vocabIndex": 36
 },
 {
  "q": "This small company started with only five workers in a garage. Today it has a huge factory and is able to ______ ten thousand bicycles every month.",
  "options": [
   "memorize",
   "loosen",
   "mature",
   "manufacture"
  ],
  "answer": 3,
  "vocabIndex": 40
 },
 {
  "q": "My laptop stopped working only two months after I bought it. The shop told me to contact the ______ directly, since the company promises free repairs for one year.",
  "options": [
   "marathon",
   "manufacturer",
   "memorial",
   "magnet"
  ],
  "answer": 1,
  "vocabIndex": 41
 },
 {
  "q": "Uncle Ben runs ten kilometers every morning before work. Next month he will take part in a ______ for the first time and try to finish all forty-two kilometers.",
  "options": [
   "marathon",
   "memorial",
   "luxury",
   "measurement"
  ],
  "answer": 0,
  "vocabIndex": 44
 },
 {
  "q": "The two candidates received almost the same number of votes in the election. In the end, Mr. Chen won by a very small ______ of only fifty votes.",
  "options": [
   "maturity",
   "maximum",
   "margin",
   "mechanism"
  ],
  "answer": 2,
  "vocabIndex": 48
 },
 {
  "q": "When the two boys started fighting, Kevin did not join in or run away. Instead, he calmly separated them and showed a ______ far beyond his twelve years.",
  "options": [
   "magnetism",
   "maturity",
   "margin",
   "luxury"
  ],
  "answer": 1,
  "vocabIndex": 53
 },
 {
  "q": "This elevator is small and old, so it cannot carry too many people at once. The ______ weight it can hold is 600 kilograms, or about eight adults.",
  "options": [
   "magnetic",
   "loose",
   "maximum",
   "marginal"
  ],
  "answer": 2,
  "vocabIndex": 57
 },
 {
  "q": "After the new reading program started, teachers wanted to know whether it was really working. By June, there was a ______ improvement in the students' test scores.",
  "options": [
   "measurable",
   "mechanical",
   "disloyal",
   "luxurious"
  ],
  "answer": 0,
  "vocabIndex": 61
 },
 {
  "q": "Because of the heavy rain, the river might rise over its banks tonight. As a safety ______, the city has asked people living nearby to move to the school gym.",
  "options": [
   "memorial",
   "measure",
   "margin",
   "manual"
  ],
  "answer": 1,
  "vocabIndex": 62
 },
 {
  "q": "On the way to Hualien, our car suddenly made a strange noise and stopped. Luckily, a ______ from a nearby garage came and fixed the engine in an hour.",
  "options": [
   "magnet",
   "marathon",
   "manufacturer",
   "mechanic"
  ],
  "answer": 3,
  "vocabIndex": 66
 },
 {
  "q": "The flight to Tokyo was delayed for three hours this morning. The airline said that a ______ problem with one of the engines had to be repaired before takeoff.",
  "options": [
   "mechanical",
   "memorable",
   "logical",
   "manual"
  ],
  "answer": 0,
  "vocabIndex": 67
 },
 {
  "q": "For our last day of senior high school, the teachers prepared a surprise party with music and old photos. It was a truly ______ evening that none of us will forget.",
  "options": [
   "measurable",
   "memorable",
   "mechanical",
   "marginal"
  ],
  "answer": 1,
  "vocabIndex": 71
 },
 {
  "q": "Every year on this day, people gather at the stone ______ in the park. They bring flowers to remember the workers who died building the railway a century ago.",
  "options": [
   "memorial",
   "manual",
   "machine",
   "mechanism"
  ],
  "answer": 0,
  "vocabIndex": 72
 },
 {
  "q": "Jason lost a lot of weight after he started running every day. Now all his old jeans are so ______ that he needs a belt to keep them up.",
  "options": [
   "loyal",
   "mature",
   "loose",
   "lousy"
  ],
  "answer": 2,
  "vocabIndex": 5
 },
 {
  "q": "Although Amy is the youngest in our group, she always stays calm and thinks before she speaks. Everyone agrees that she is more ______ than most adults.",
  "options": [
   "mature",
   "luxurious",
   "loose",
   "magnetic"
  ],
  "answer": 0,
  "vocabIndex": 54
 },
 {
  "q": "Grandpa is eighty-five, but he can still tell you the name of every classmate from elementary school. His ______ for names and faces is much better than mine, and I am only sixteen!",
  "options": [
   "logic",
   "memory",
   "machinery",
   "maturity"
  ],
  "answer": 1,
  "vocabIndex": 74
 },
 {
  "q": "My little cousin loves playing with the small toy that sticks to the refrigerator door. He does not understand why the ______ holds on to metal but not to wood.",
  "options": [
   "marathon",
   "manual",
   "mechanic",
   "magnet"
  ],
  "answer": 3,
  "vocabIndex": 24
 },
 {
  "q": "Detectives do not guess who the thief is; they look at every piece of evidence carefully. Then they think ______ about what must have happened step by step.",
  "options": [
   "logically",
   "magnificently",
   "manually",
   "loosely"
  ],
  "answer": 0,
  "vocabIndex": 2
 }
];
const LOOKUP = {};
VOCAB.forEach(v => { const key = v.word.toLowerCase(); const sense = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def };
  if (LOOKUP[key]) LOOKUP[key].combined.push(sense); else LOOKUP[key] = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def, combined: [sense] }; });
const EXTRA_GLOSSES = {};