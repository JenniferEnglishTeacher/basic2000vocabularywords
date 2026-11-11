// 學測6000字 Level 4 Group 30 (persuasion-possess) — word-family edition
const QUIZ_CONFIG = {
  groupName: "6000字 L4 Group 30 - persuasion – possess (word family)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};
const VOCAB = [
 {
  "word": "persuasion",
  "answer": "persuasion",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "說服；勸說",
  "en_def": "the act of making someone agree to do something by giving good reasons",
  "sentence": "It took a lot of {{BLANK}} before my parents finally agreed to let me go camping with my friends.",
  "cn": "經過一番勸說，我爸媽終於同意讓我和朋友去露營。",
  "cnMarked": "經過一番【勸說】，我爸媽終於同意讓我和朋友去露營。",
  "isHead": true,
  "level": 4,
  "family": "persuasion"
 },
 {
  "word": "persuasive",
  "answer": "persuasive",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "有說服力的",
  "en_def": "good at making people agree with you",
  "sentence": "Her speech was so {{BLANK}} that even the students who hated the idea at first voted for it in the end.",
  "cn": "她的演講非常有說服力，連一開始討厭這個想法的學生最後都投票支持。",
  "cnMarked": "她的演講非常【有說服力】，連一開始討厭這個想法的學生最後都投票支持。",
  "isHead": true,
  "level": 4,
  "family": "persuasion"
 },
 {
  "word": "persuade",
  "answer": "persuade",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "說服",
  "en_def": "to make someone agree to do something by giving good reasons",
  "sentence": "My sister tried to {{BLANK}} me to join the dance club, but I prefer to spend my free time drawing.",
  "cn": "我姐姐試著說服我加入舞蹈社，但我比較喜歡把空閒時間花在畫畫上。",
  "cnMarked": "我姐姐試著【說服】我加入舞蹈社，但我比較喜歡把空閒時間花在畫畫上。",
  "isHead": false,
  "level": 3,
  "family": "persuasion"
 },
 {
  "word": "persuade sb to do sth",
  "answer": "persuaded her to",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "說服某人做某事",
  "en_def": "to make someone agree to do something",
  "sentence": "After an hour of talking, we finally {{BLANK}} see a doctor about the pain in her back.",
  "cn": "談了一個小時後，我們終於說服她去看醫生，檢查她背部的疼痛。",
  "cnMarked": "談了一個小時後，我們終於【說服她去】看醫生，檢查她背部的疼痛。",
  "isHead": false,
  "level": null,
  "family": "persuasion"
 },
 {
  "word": "pessimistic",
  "answer": "pessimistic",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "悲觀的",
  "en_def": "always expecting bad things to happen",
  "sentence": "Do not be so {{BLANK}} about the exam; you have studied hard every night, and I am sure you will pass.",
  "cn": "別對考試這麼悲觀；你每天晚上都用功讀書，我相信你一定會及格。",
  "cnMarked": "別對考試這麼【悲觀】；你每天晚上都用功讀書，我相信你一定會及格。",
  "isHead": true,
  "level": 4,
  "family": "pessimistic"
 },
 {
  "word": "pessimism",
  "answer": "pessimism",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "悲觀；悲觀主義",
  "en_def": "the feeling that bad things will happen",
  "sentence": "After losing three games in a row, there was a lot of {{BLANK}} among the fans, but the coach still believed in his team.",
  "cn": "連輸三場比賽後，球迷之間瀰漫著悲觀的氣氛，但教練仍然相信他的球隊。",
  "cnMarked": "連輸三場比賽後，球迷之間瀰漫著【悲觀】的氣氛，但教練仍然相信他的球隊。",
  "isHead": false,
  "level": 5,
  "family": "pessimistic"
 },
 {
  "word": "pessimist",
  "answer": "pessimist",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "悲觀的人",
  "en_def": "a person who always expects the worst",
  "sentence": "My uncle is such a {{BLANK}} that he brings an umbrella every day, even when the sky is completely clear.",
  "cn": "我叔叔是個十足的悲觀主義者，即使天空萬里無雲，他每天都帶著雨傘。",
  "cnMarked": "我叔叔是個十足的【悲觀主義者】，即使天空萬里無雲，他每天都帶著雨傘。",
  "isHead": false,
  "level": null,
  "family": "pessimistic"
 },
 {
  "word": "optimistic",
  "answer": "optimistic",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "樂觀的",
  "en_def": "expecting good things to happen",
  "sentence": "Although the company lost money this year, the manager is {{BLANK}} that sales will grow again next spring.",
  "cn": "雖然公司今年虧損，經理仍樂觀認為明年春天銷售會再成長。",
  "cnMarked": "雖然公司今年虧損，經理仍【樂觀】認為明年春天銷售會再成長。",
  "isHead": false,
  "level": 3,
  "family": "pessimistic"
 },
 {
  "word": "pest",
  "answer": "pest",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "害蟲",
  "en_def": "an insect or small animal that damages crops or food",
  "sentence": "Farmers in the village lost half of their rice crop this year because of a tiny {{BLANK}} that eats the young plants.",
  "cn": "村裡的農民今年損失了一半的稻米收成，因為一種會吃幼苗的小害蟲。",
  "cnMarked": "村裡的農民今年損失了一半的稻米收成，因為一種會吃幼苗的小【害蟲】。",
  "isHead": true,
  "level": 4,
  "family": "pest"
 },
 {
  "word": "pest",
  "answer": "pest",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "討厭的人；討厭鬼",
  "en_def": "an annoying person, especially a child",
  "sentence": "My little brother can be a real {{BLANK}} when he follows me around and asks the same question twenty times.",
  "cn": "我弟弟跟著我到處走、同一個問題問二十次的時候，真是個討厭鬼。",
  "cnMarked": "我弟弟跟著我到處走、同一個問題問二十次的時候，真是個【討厭鬼】。",
  "isHead": false,
  "level": 4,
  "family": "pest"
 },
 {
  "word": "pesticide",
  "answer": "pesticide",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "殺蟲劑；農藥",
  "en_def": "a chemical used to kill insects that damage plants",
  "sentence": "Many customers now pay more for vegetables that are grown without any {{BLANK}}, because they worry about their health.",
  "cn": "許多顧客現在願意多花錢買不使用任何農藥種植的蔬菜，因為他們擔心健康。",
  "cnMarked": "許多顧客現在願意多花錢買不使用任何【農藥】種植的蔬菜，因為他們擔心健康。",
  "isHead": false,
  "level": null,
  "family": "pest"
 },
 {
  "word": "pest control",
  "answer": "pest control",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "害蟲防治",
  "en_def": "the job of killing insects, rats, and other pests",
  "sentence": "After we saw two rats in the kitchen, my father called a {{BLANK}} company to come and check the whole house.",
  "cn": "我們在廚房看到兩隻老鼠後，我爸爸打電話請害蟲防治公司來檢查整間房子。",
  "cnMarked": "我們在廚房看到兩隻老鼠後，我爸爸打電話請【害蟲防治】公司來檢查整間房子。",
  "isHead": false,
  "level": null,
  "family": "pest"
 },
 {
  "word": "phenomenon",
  "answer": "phenomenon",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "現象",
  "en_def": "something that happens or exists, especially something unusual",
  "sentence": "A rainbow is a beautiful natural {{BLANK}} that appears when sunlight shines through drops of rain in the air.",
  "cn": "彩虹是一種美麗的自然現象，當陽光穿過空氣中的雨滴時就會出現。",
  "cnMarked": "彩虹是一種美麗的自然【現象】，當陽光穿過空氣中的雨滴時就會出現。",
  "isHead": true,
  "level": 4,
  "family": "phenomenon"
 },
 {
  "word": "phenomena",
  "answer": "phenomena",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "現象（複數）",
  "en_def": "more than one phenomenon (plural form)",
  "sentence": "Earthquakes, typhoons, and volcanoes are natural {{BLANK}} that scientists in Taiwan study very carefully every year.",
  "cn": "地震、颱風和火山是台灣科學家每年都仔細研究的自然現象。",
  "cnMarked": "地震、颱風和火山是台灣科學家每年都仔細研究的自然【現象】。",
  "isHead": false,
  "level": null,
  "family": "phenomenon"
 },
 {
  "word": "social phenomenon",
  "answer": "social phenomenon",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "社會現象",
  "en_def": "something that happens in society and affects many people",
  "sentence": "Young people staying single until their thirties has become a common {{BLANK}} in many big cities around the world.",
  "cn": "年輕人到三十幾歲仍單身，在世界許多大城市已成為常見的社會現象。",
  "cnMarked": "年輕人到三十幾歲仍單身，在世界許多大城市已成為常見的【社會現象】。",
  "isHead": false,
  "level": null,
  "family": "phenomenon"
 },
 {
  "word": "phenomenal",
  "answer": "phenomenal",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "驚人的；非凡的",
  "en_def": "extremely good or great",
  "sentence": "The young singer's success has been {{BLANK}}; her first album sold a million copies in only two weeks.",
  "cn": "這位年輕歌手的成功十分驚人；她的第一張專輯只花兩週就賣了一百萬張。",
  "cnMarked": "這位年輕歌手的成功十分【驚人】；她的第一張專輯只花兩週就賣了一百萬張。",
  "isHead": false,
  "level": null,
  "family": "phenomenon"
 },
 {
  "word": "philosopher",
  "answer": "philosopher",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "哲學家",
  "en_def": "a person who studies and thinks about the meaning of life",
  "sentence": "Confucius was a great Chinese {{BLANK}} whose ideas about respect and learning are still taught in schools today.",
  "cn": "孔子是偉大的中國哲學家，他關於尊重和學習的思想至今仍在學校裡教授。",
  "cnMarked": "孔子是偉大的中國【哲學家】，他關於尊重和學習的思想至今仍在學校裡教授。",
  "isHead": true,
  "level": 4,
  "family": "philosopher"
 },
 {
  "word": "philosophical",
  "answer": "philosophical",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "哲學的；哲學性的",
  "en_def": "connected with philosophy; about the meaning of life",
  "sentence": "After dinner, my grandfather often asks us {{BLANK}} questions like \"What makes a person truly happy?\"",
  "cn": "晚餐後，我爺爺常問我們哲學性的問題，例如「什麼讓一個人真正快樂？」",
  "cnMarked": "晚餐後，我爺爺常問我們【哲學性的】問題，例如「什麼讓一個人真正快樂？」",
  "isHead": true,
  "level": 4,
  "family": "philosopher"
 },
 {
  "word": "philosophy",
  "answer": "philosophy",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "哲學",
  "en_def": "the study of ideas about life, truth, and how to think",
  "sentence": "She chose to study {{BLANK}} at university because she loves asking big questions that have no easy answers.",
  "cn": "她選擇在大學讀哲學，因為她喜歡問那些沒有簡單答案的大問題。",
  "cnMarked": "她選擇在大學讀【哲學】，因為她喜歡問那些沒有簡單答案的大問題。",
  "isHead": true,
  "level": 4,
  "family": "philosopher"
 },
 {
  "word": "philosophy",
  "answer": "philosophy",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "人生觀；人生哲學",
  "en_def": "a person's way of thinking about life",
  "sentence": "My grandmother's {{BLANK}} is simple: work hard, be kind to others, and never go to bed angry.",
  "cn": "我奶奶的人生哲學很簡單：努力工作、善待他人，而且絕不帶著怒氣上床睡覺。",
  "cnMarked": "我奶奶的【人生哲學】很簡單：努力工作、善待他人，而且絕不帶著怒氣上床睡覺。",
  "isHead": false,
  "level": 4,
  "family": "philosopher"
 },
 {
  "word": "philosophically",
  "answer": "philosophically",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "豁達地；達觀地",
  "en_def": "in a calm way that accepts difficult things",
  "sentence": "He took the bad news {{BLANK}}, saying that losing one job might open the door to a better one.",
  "cn": "他豁達地接受了這個壞消息，說失去一份工作也許會為更好的工作打開大門。",
  "cnMarked": "他【豁達地】接受了這個壞消息，說失去一份工作也許會為更好的工作打開大門。",
  "isHead": false,
  "level": null,
  "family": "philosopher"
 },
 {
  "word": "photography",
  "answer": "photography",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "攝影",
  "en_def": "the art or job of taking photos",
  "sentence": "My cousin studied {{BLANK}} for three years, and now she takes wedding pictures for a living in Taichung.",
  "cn": "我表姐學了三年攝影，現在她在台中以拍婚禮照片為生。",
  "cnMarked": "我表姐學了三年【攝影】，現在她在台中以拍婚禮照片為生。",
  "isHead": true,
  "level": 4,
  "family": "photography"
 },
 {
  "word": "photograph",
  "answer": "photograph",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "照片",
  "en_def": "a picture taken with a camera",
  "sentence": "This old {{BLANK}} shows my grandparents on their wedding day, standing in front of the temple in 1965.",
  "cn": "這張舊照片是我祖父母結婚那天拍的，他們站在廟前，那是 1965 年。",
  "cnMarked": "這張舊【照片】是我祖父母結婚那天拍的，他們站在廟前，那是 1965 年。",
  "isHead": false,
  "level": 1,
  "family": "photography"
 },
 {
  "word": "photographer",
  "answer": "photographer",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "攝影師",
  "en_def": "a person who takes photos, especially as a job",
  "sentence": "The {{BLANK}} asked everyone to move closer together and smile before he took the class picture.",
  "cn": "攝影師請大家靠近一點並微笑，然後才拍班級合照。",
  "cnMarked": "【攝影師】請大家靠近一點並微笑，然後才拍班級合照。",
  "isHead": false,
  "level": 3,
  "family": "photography"
 },
 {
  "word": "photographic",
  "answer": "photographic",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "攝影的",
  "en_def": "connected with photography",
  "sentence": "He has a {{BLANK}} memory, so he can remember every page of a book after reading it only once.",
  "cn": "他有攝影般的記憶力，所以一本書只讀一次就能記住每一頁。",
  "cnMarked": "他有【攝影般的】記憶力，所以一本書只讀一次就能記住每一頁。",
  "isHead": false,
  "level": 5,
  "family": "photography"
 },
 {
  "word": "take a photograph",
  "answer": "take a photograph",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "拍照",
  "en_def": "to use a camera to make a picture",
  "sentence": "Visitors are not allowed to {{BLANK}} inside the museum because the bright light can damage the old paintings.",
  "cn": "參觀者不可以在博物館裡拍照，因為強光會損壞古老的畫作。",
  "cnMarked": "參觀者不可以在博物館裡【拍照】，因為強光會損壞古老的畫作。",
  "isHead": false,
  "level": null,
  "family": "photography"
 },
 {
  "word": "physical",
  "answer": "physical",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "身體的",
  "en_def": "connected with the body",
  "sentence": "Doctors say that thirty minutes of {{BLANK}} exercise every day can help teenagers sleep better and feel less stressed.",
  "cn": "醫生說每天三十分鐘的身體運動能幫助青少年睡得更好、壓力更少。",
  "cnMarked": "醫生說每天三十分鐘的【身體】運動能幫助青少年睡得更好、壓力更少。",
  "isHead": true,
  "level": 4,
  "family": "physical"
 },
 {
  "word": "physical",
  "answer": "physical",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "實體的；物質的",
  "en_def": "real; able to be touched",
  "sentence": "Many students prefer {{BLANK}} books to e-books because they like to write notes on the pages.",
  "cn": "許多學生偏好實體書而不是電子書，因為他們喜歡在書頁上寫筆記。",
  "cnMarked": "許多學生偏好【實體】書而不是電子書，因為他們喜歡在書頁上寫筆記。",
  "isHead": false,
  "level": 4,
  "family": "physical"
 },
 {
  "word": "physically",
  "answer": "physically",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "身體上",
  "en_def": "in a way that is connected with the body",
  "sentence": "The marathon was {{BLANK}} very hard, but crossing the finish line made every painful step worth it.",
  "cn": "這場馬拉松在身體上非常辛苦，但跨過終點線讓每一個痛苦的步伐都值得。",
  "cnMarked": "這場馬拉松在【身體上】非常辛苦，但跨過終點線讓每一個痛苦的步伐都值得。",
  "isHead": false,
  "level": null,
  "family": "physical"
 },
 {
  "word": "physical education (PE)",
  "answer": "physical education",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "體育課",
  "en_def": "sports and exercise classes at school",
  "sentence": "Our school has {{BLANK}} twice a week, and most students say it is their favorite class.",
  "cn": "我們學校每週有兩次體育課，大多數學生說那是他們最喜歡的課。",
  "cnMarked": "我們學校每週有兩次【體育課】，大多數學生說那是他們最喜歡的課。",
  "isHead": false,
  "level": null,
  "family": "physical"
 },
 {
  "word": "physician",
  "answer": "physician",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "醫師；內科醫生",
  "en_def": "a doctor, especially one who does not do operations",
  "sentence": "If the fever does not go down by tomorrow, you should see a {{BLANK}} instead of just taking more medicine.",
  "cn": "如果到明天燒還沒退，你應該去看醫生，而不是只吃更多的藥。",
  "cnMarked": "如果到明天燒還沒退，你應該去看【醫生】，而不是只吃更多的藥。",
  "isHead": true,
  "level": 4,
  "family": "physician"
 },
 {
  "word": "physicist",
  "answer": "physicist",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "物理學家",
  "en_def": "a scientist who studies physics",
  "sentence": "Albert Einstein, the famous {{BLANK}}, changed the way people all over the world understand time, light, and energy.",
  "cn": "著名的物理學家愛因斯坦改變了全世界的人對時間、光和能量的理解。",
  "cnMarked": "著名的【物理學家】愛因斯坦改變了全世界的人對時間、光和能量的理解。",
  "isHead": true,
  "level": 4,
  "family": "physician"
 },
 {
  "word": "physics",
  "answer": "physics",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "物理學",
  "en_def": "the science of energy, forces, and matter",
  "sentence": "In {{BLANK}} class today, we learned why a heavy ball and a light ball fall to the ground at the same speed.",
  "cn": "今天物理課上，我們學到為什麼重球和輕球會以同樣的速度落到地面。",
  "cnMarked": "今天【物理】課上，我們學到為什麼重球和輕球會以同樣的速度落到地面。",
  "isHead": true,
  "level": 4,
  "family": "physician"
 },
 {
  "word": "family physician",
  "answer": "family physician",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "家庭醫師",
  "en_def": "a doctor who takes care of all the members of a family",
  "sentence": "Our {{BLANK}} has known me since I was a baby, so she always notices right away when something is wrong.",
  "cn": "我們的家庭醫師從我還是嬰兒時就認識我，所以她總是能馬上注意到哪裡不對勁。",
  "cnMarked": "我們的【家庭醫師】從我還是嬰兒時就認識我，所以她總是能馬上注意到哪裡不對勁。",
  "isHead": false,
  "level": null,
  "family": "physician"
 },
 {
  "word": "pickle",
  "answer": "pickles",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "泡菜；醃菜",
  "en_def": "a vegetable kept in salt water or vinegar",
  "sentence": "My grandmother makes her own {{BLANK}} every winter by keeping cabbage in big jars with salt and chili.",
  "cn": "我奶奶每年冬天都自己做泡菜，把高麗菜放在大罐子裡加鹽和辣椒醃。",
  "cnMarked": "我奶奶每年冬天都自己做【泡菜】，把高麗菜放在大罐子裡加鹽和辣椒醃。",
  "isHead": true,
  "level": 4,
  "family": "pickle"
 },
 {
  "word": "pickle",
  "answer": "pickle",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "醃製",
  "en_def": "to keep food in salt water or vinegar",
  "sentence": "In the past, people had to {{BLANK}} vegetables in the autumn so that they would have something to eat all winter.",
  "cn": "以前的人必須在秋天醃製蔬菜，這樣整個冬天才有東西吃。",
  "cnMarked": "以前的人必須在秋天【醃製】蔬菜，這樣整個冬天才有東西吃。",
  "isHead": false,
  "level": 4,
  "family": "pickle"
 },
 {
  "word": "pickled",
  "answer": "pickled",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "醃製的",
  "en_def": "kept in salt water or vinegar",
  "sentence": "The night market stand sells {{BLANK}} cucumbers that taste sour, sweet, and a little spicy at the same time.",
  "cn": "那個夜市攤位賣的醃黃瓜吃起來又酸又甜，還有一點辣。",
  "cnMarked": "那個夜市攤位賣的【醃】黃瓜吃起來又酸又甜，還有一點辣。",
  "isHead": false,
  "level": null,
  "family": "pickle"
 },
 {
  "word": "in a pickle",
  "answer": "in a pickle",
  "nblanks": 3,
  "pos": "phr.",
  "cn_def": "陷入困境",
  "en_def": "in a difficult situation",
  "sentence": "We were really {{BLANK}} when the car broke down on the mountain road at night with no phone signal.",
  "cn": "當車子在夜裡拋錨在山路上又沒有手機訊號時，我們真的陷入了困境。",
  "cnMarked": "當車子在夜裡拋錨在山路上又沒有手機訊號時，我們真的【陷入了困境】。",
  "isHead": false,
  "level": null,
  "family": "pickle"
 },
 {
  "word": "pioneer",
  "answer": "pioneer",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "先驅；拓荒者",
  "en_def": "one of the first people to do or study something new",
  "sentence": "Marie Curie was a {{BLANK}} in the study of radiation, and she was the first woman to win a Nobel Prize.",
  "cn": "居禮夫人是輻射研究的先驅，她也是第一位獲得諾貝爾獎的女性。",
  "cnMarked": "居禮夫人是輻射研究的【先驅】，她也是第一位獲得諾貝爾獎的女性。",
  "isHead": true,
  "level": 4,
  "family": "pioneer"
 },
 {
  "word": "pioneer",
  "answer": "pioneered",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "開創；開拓",
  "en_def": "to be the first to do or develop something new",
  "sentence": "The small Taiwanese company {{BLANK}} a new way to make bicycles lighter, and now factories around the world copy it.",
  "cn": "這家台灣小公司開創了讓腳踏車更輕的新方法，現在世界各地的工廠都在模仿。",
  "cnMarked": "這家台灣小公司【開創】了讓腳踏車更輕的新方法，現在世界各地的工廠都在模仿。",
  "isHead": false,
  "level": 4,
  "family": "pioneer"
 },
 {
  "word": "pioneering",
  "answer": "pioneering",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "開創性的",
  "en_def": "new and leading the way for others",
  "sentence": "Her {{BLANK}} work on ocean plastic has inspired thousands of young people to clean up beaches in their own towns.",
  "cn": "她在海洋塑膠方面的開創性研究，激勵了成千上萬的年輕人去清理自己家鄉的海灘。",
  "cnMarked": "她在海洋塑膠方面的【開創性】研究，激勵了成千上萬的年輕人去清理自己家鄉的海灘。",
  "isHead": false,
  "level": null,
  "family": "pioneer"
 },
 {
  "word": "plentiful",
  "answer": "plentiful",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "豐富的；充足的",
  "en_def": "existing in large amounts; more than enough",
  "sentence": "Fish were once {{BLANK}} in this river, but now you can wait all day without catching a single one.",
  "cn": "這條河裡的魚曾經很豐富，但現在你可以等一整天也釣不到一條。",
  "cnMarked": "這條河裡的魚曾經很【豐富】，但現在你可以等一整天也釣不到一條。",
  "isHead": true,
  "level": 4,
  "family": "plentiful"
 },
 {
  "word": "plenty",
  "answer": "plenty",
  "nblanks": 1,
  "pos": "pron./n.",
  "cn_def": "很多；充足",
  "en_def": "a large amount; as much as you need",
  "sentence": "There is no need to hurry, because we have {{BLANK}} of time before the train leaves at six o'clock.",
  "cn": "不用急，因為火車六點才開，我們有很多時間。",
  "cnMarked": "不用急，因為火車六點才開，我們有【很多】時間。",
  "isHead": false,
  "level": 3,
  "family": "plentiful"
 },
 {
  "word": "plenty of",
  "answer": "plenty of",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "很多的；充足的",
  "en_def": "a lot of; enough",
  "sentence": "Make sure you drink {{BLANK}} water during the hike, because the sun will be very strong in the afternoon.",
  "cn": "健行時一定要喝大量的水，因為下午的太陽會非常強。",
  "cnMarked": "健行時一定要喝【大量的】水，因為下午的太陽會非常強。",
  "isHead": false,
  "level": null,
  "family": "plentiful"
 },
 {
  "word": "plot",
  "answer": "plot",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "情節",
  "en_def": "the story of a book, film, or play",
  "sentence": "The {{BLANK}} of the movie was so confusing that my friends and I argued about the ending for an hour.",
  "cn": "這部電影的情節太令人困惑了，我和朋友為了結局爭論了一個小時。",
  "cnMarked": "這部電影的【情節】太令人困惑了，我和朋友為了結局爭論了一個小時。",
  "isHead": true,
  "level": 4,
  "family": "plot"
 },
 {
  "word": "plot",
  "answer": "plot",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "陰謀",
  "en_def": "a secret plan to do something bad",
  "sentence": "The police discovered a {{BLANK}} to steal the famous painting from the museum during the New Year holiday.",
  "cn": "警方發現了一個在新年假期期間從博物館偷走名畫的陰謀。",
  "cnMarked": "警方發現了一個在新年假期期間從博物館偷走名畫的【陰謀】。",
  "isHead": false,
  "level": 4,
  "family": "plot"
 },
 {
  "word": "plot",
  "answer": "plotted",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "密謀",
  "en_def": "to make a secret plan to do something bad",
  "sentence": "In the story, the king's brother {{BLANK}} with the enemy to take the throne while the king was away at war.",
  "cn": "在故事中，國王的弟弟和敵人密謀，想趁國王出征時奪取王位。",
  "cnMarked": "在故事中，國王的弟弟和敵人【密謀】，想趁國王出征時奪取王位。",
  "isHead": false,
  "level": 4,
  "family": "plot"
 },
 {
  "word": "plot",
  "answer": "plot",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "一小塊地",
  "en_def": "a small piece of land",
  "sentence": "My grandfather grows tomatoes and beans on a small {{BLANK}} of land behind his house in the countryside.",
  "cn": "我爺爺在鄉下房子後面的一小塊地上種番茄和豆子。",
  "cnMarked": "我爺爺在鄉下房子後面的一小【塊】地上種番茄和豆子。",
  "isHead": false,
  "level": 4,
  "family": "plot"
 },
 {
  "word": "plum",
  "answer": "plums",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "李子；梅子",
  "en_def": "a soft round fruit with a stone in the middle",
  "sentence": "In summer, my aunt sends us a box of sweet purple {{BLANK}} from her farm in the mountains of Nantou.",
  "cn": "夏天時，我阿姨從她在南投山上的農場寄給我們一箱甜甜的紫色李子。",
  "cnMarked": "夏天時，我阿姨從她在南投山上的農場寄給我們一箱甜甜的紫色【李子】。",
  "isHead": true,
  "level": 4,
  "family": "plum"
 },
 {
  "word": "plum blossom",
  "answer": "plum blossoms",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "梅花",
  "en_def": "the flower of the plum tree; the national flower of the R.O.C.",
  "sentence": "Every January, tourists drive to the mountains to see the white {{BLANK}} that open even in the cold wind.",
  "cn": "每年一月，遊客開車上山看即使在寒風中也會綻放的白色梅花。",
  "cnMarked": "每年一月，遊客開車上山看即使在寒風中也會綻放的白色【梅花】。",
  "isHead": false,
  "level": null,
  "family": "plum"
 },
 {
  "word": "dried plum",
  "answer": "dried plums",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "話梅；梅乾",
  "en_def": "a plum that has been dried and salted as a snack",
  "sentence": "My grandmother always keeps a bag of {{BLANK}} in her purse and gives me one when I feel carsick.",
  "cn": "我奶奶的皮包裡總是放著一袋話梅，我暈車時她就給我一顆。",
  "cnMarked": "我奶奶的皮包裡總是放著一袋【話梅】，我暈車時她就給我一顆。",
  "isHead": false,
  "level": null,
  "family": "plum"
 },
 {
  "word": "plumber",
  "answer": "plumber",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "水管工",
  "en_def": "a person whose job is to fix water pipes",
  "sentence": "Water was dripping from the ceiling all night, so we called a {{BLANK}} first thing in the morning.",
  "cn": "整個晚上天花板都在滴水，所以我們一大早就打電話找水管工。",
  "cnMarked": "整個晚上天花板都在滴水，所以我們一大早就打電話找【水管工】。",
  "isHead": true,
  "level": 4,
  "family": "plumber"
 },
 {
  "word": "plumbing",
  "answer": "plumbing",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "水管系統",
  "en_def": "the pipes that carry water in a building",
  "sentence": "The old house looks lovely, but its {{BLANK}} needs to be replaced before anyone can live there safely.",
  "cn": "這棟老房子看起來很美，但它的水管系統需要更換，之後才能安全入住。",
  "cnMarked": "這棟老房子看起來很美，但它的【水管系統】需要更換，之後才能安全入住。",
  "isHead": false,
  "level": null,
  "family": "plumber"
 },
 {
  "word": "call a plumber",
  "answer": "call a plumber",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "找水管工來修",
  "en_def": "to ask a plumber to come and fix the pipes",
  "sentence": "If the toilet keeps running after you flush it, you had better {{BLANK}} before the water bill gets too high.",
  "cn": "如果馬桶沖水後一直流個不停，你最好在水費變太高之前找水管工來修。",
  "cnMarked": "如果馬桶沖水後一直流個不停，你最好在水費變太高之前【找水管工來修】。",
  "isHead": false,
  "level": null,
  "family": "plumber"
 },
 {
  "word": "poisonous",
  "answer": "poisonous",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "有毒的",
  "en_def": "containing poison; able to kill or harm you",
  "sentence": "Some wild mushrooms in the forest are {{BLANK}}, so never eat one unless an expert tells you it is safe.",
  "cn": "森林裡有些野生蘑菇是有毒的，所以除非專家說它安全，否則絕對不要吃。",
  "cnMarked": "森林裡有些野生蘑菇是【有毒的】，所以除非專家說它安全，否則絕對不要吃。",
  "isHead": true,
  "level": 4,
  "family": "poisonous"
 },
 {
  "word": "poison",
  "answer": "poison",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "毒；毒藥",
  "en_def": "a substance that can kill or harm you if you eat or touch it",
  "sentence": "Keep the rat {{BLANK}} on a high shelf where small children and pets cannot reach it.",
  "cn": "把老鼠藥放在高架子上，讓小孩和寵物都拿不到。",
  "cnMarked": "把老鼠【藥】放在高架子上，讓小孩和寵物都拿不到。",
  "isHead": false,
  "level": 2,
  "family": "poisonous"
 },
 {
  "word": "poison",
  "answer": "poisoned",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "毒害；下毒",
  "en_def": "to kill or harm someone or something with poison",
  "sentence": "Chemicals from the old factory {{BLANK}} the river, and thousands of fish died within a few days.",
  "cn": "老工廠排出的化學物質毒害了河流，幾天內就有成千上萬條魚死亡。",
  "cnMarked": "老工廠排出的化學物質【毒害】了河流，幾天內就有成千上萬條魚死亡。",
  "isHead": false,
  "level": 2,
  "family": "poisonous"
 },
 {
  "word": "food poisoning",
  "answer": "food poisoning",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "食物中毒",
  "en_def": "an illness caused by eating bad food",
  "sentence": "Three students got {{BLANK}} after eating the chicken sandwiches, so the school closed the cafeteria for a week.",
  "cn": "三名學生吃了雞肉三明治後食物中毒，所以學校把餐廳關閉了一週。",
  "cnMarked": "三名學生吃了雞肉三明治後【食物中毒】，所以學校把餐廳關閉了一週。",
  "isHead": false,
  "level": null,
  "family": "poisonous"
 },
 {
  "word": "polish",
  "answer": "polish",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "擦亮；拋光",
  "en_def": "to rub something to make it shine",
  "sentence": "Before the ceremony, every soldier had to {{BLANK}} his boots until he could see his face in them.",
  "cn": "典禮前，每位士兵都必須把靴子擦亮，直到能在靴子上看見自己的臉。",
  "cnMarked": "典禮前，每位士兵都必須把靴子【擦亮】，直到能在靴子上看見自己的臉。",
  "isHead": true,
  "level": 4,
  "family": "polish"
 },
 {
  "word": "polish",
  "answer": "polish",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "亮光劑；鞋油",
  "en_def": "a substance you rub on something to make it shine",
  "sentence": "My father keeps a tin of shoe {{BLANK}} by the door and shines his leather shoes every Sunday night.",
  "cn": "我爸爸在門邊放著一罐鞋油，每個星期天晚上都把他的皮鞋擦亮。",
  "cnMarked": "我爸爸在門邊放著一罐鞋【油】，每個星期天晚上都把他的皮鞋擦亮。",
  "isHead": false,
  "level": 4,
  "family": "polish"
 },
 {
  "word": "polished",
  "answer": "polished",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "擦亮的；光亮的",
  "en_def": "shiny after being rubbed",
  "sentence": "The floor of the hotel lobby was so {{BLANK}} that I could see the lights of the ceiling in it.",
  "cn": "飯店大廳的地板擦得發亮，我可以在上面看到天花板的燈光。",
  "cnMarked": "飯店大廳的地板【擦得發亮】，我可以在上面看到天花板的燈光。",
  "isHead": false,
  "level": null,
  "family": "polish"
 },
 {
  "word": "polish up",
  "answer": "polish up",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "加強；改進",
  "en_def": "to improve a skill by practicing",
  "sentence": "I need to {{BLANK}} my Japanese before the trip, so I am watching a Japanese drama every evening.",
  "cn": "旅行前我需要加強我的日文，所以我每天晚上都看一部日劇。",
  "cnMarked": "旅行前我需要【加強】我的日文，所以我每天晚上都看一部日劇。",
  "isHead": false,
  "level": null,
  "family": "polish"
 },
 {
  "word": "popularity",
  "answer": "popularity",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "受歡迎；人氣",
  "en_def": "the state of being liked by many people",
  "sentence": "The singer's {{BLANK}} grew so fast that her concert tickets sold out in less than ten minutes.",
  "cn": "這位歌手的人氣成長得太快，她的演唱會門票不到十分鐘就賣光了。",
  "cnMarked": "這位歌手的【人氣】成長得太快，她的演唱會門票不到十分鐘就賣光了。",
  "isHead": true,
  "level": 4,
  "family": "popularity"
 },
 {
  "word": "popular",
  "answer": "popular",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "受歡迎的",
  "en_def": "liked by many people",
  "sentence": "Bubble tea is so {{BLANK}} in Taiwan that you can find a tea shop on almost every street corner.",
  "cn": "珍珠奶茶在台灣非常受歡迎，幾乎每個街角都能找到一家茶飲店。",
  "cnMarked": "珍珠奶茶在台灣非常【受歡迎】，幾乎每個街角都能找到一家茶飲店。",
  "isHead": false,
  "level": 1,
  "family": "popularity"
 },
 {
  "word": "popularize",
  "answer": "popularize",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "推廣；使普及",
  "en_def": "to make something known and liked by many people",
  "sentence": "The TV show helped to {{BLANK}} hiking among young people, and now the mountain trails are crowded every weekend.",
  "cn": "這個電視節目幫助在年輕人之間推廣健行，現在山路每個週末都擠滿了人。",
  "cnMarked": "這個電視節目幫助在年輕人之間【推廣】健行，現在山路每個週末都擠滿了人。",
  "isHead": false,
  "level": null,
  "family": "popularity"
 },
 {
  "word": "gain popularity",
  "answer": "gained popularity",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "越來越受歡迎",
  "en_def": "to become liked by more and more people",
  "sentence": "Electric scooters have {{BLANK}} in the city because they are quiet, clean, and cheap to charge.",
  "cn": "電動機車在這座城市越來越受歡迎，因為它們安靜、乾淨，而且充電便宜。",
  "cnMarked": "電動機車在這座城市【越來越受歡迎】，因為它們安靜、乾淨，而且充電便宜。",
  "isHead": false,
  "level": null,
  "family": "popularity"
 },
 {
  "word": "portable",
  "answer": "portable",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "可攜帶的；便攜式的",
  "en_def": "easy to carry or move",
  "sentence": "My father bought a {{BLANK}} speaker so that we can listen to music on the beach and in the park.",
  "cn": "我爸爸買了一個便攜式喇叭，這樣我們在海灘和公園都能聽音樂。",
  "cnMarked": "我爸爸買了一個【便攜式】喇叭，這樣我們在海灘和公園都能聽音樂。",
  "isHead": true,
  "level": 4,
  "family": "portable"
 },
 {
  "word": "portable charger",
  "answer": "portable charger",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "行動電源",
  "en_def": "a small battery you carry to charge your phone",
  "sentence": "Always bring a {{BLANK}} on a long trip, because your phone battery will die before you find a plug.",
  "cn": "長途旅行時一定要帶行動電源，因為在找到插座之前你的手機電池就會沒電。",
  "cnMarked": "長途旅行時一定要帶【行動電源】，因為在找到插座之前你的手機電池就會沒電。",
  "isHead": false,
  "level": null,
  "family": "portable"
 },
 {
  "word": "portability",
  "answer": "portability",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "可攜性",
  "en_def": "the quality of being easy to carry",
  "sentence": "The main selling point of this laptop is its {{BLANK}}; it weighs less than a kilogram and fits in a small bag.",
  "cn": "這台筆電最大的賣點是它的可攜性；它不到一公斤重，而且放得進小包包。",
  "cnMarked": "這台筆電最大的賣點是它的【可攜性】；它不到一公斤重，而且放得進小包包。",
  "isHead": false,
  "level": null,
  "family": "portable"
 },
 {
  "word": "portray",
  "answer": "portrays",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "描繪；描述",
  "en_def": "to show or describe someone or something in a particular way",
  "sentence": "The movie {{BLANK}} the famous scientist as a lonely man who cared only about his work.",
  "cn": "這部電影把這位著名的科學家描繪成一個只在乎工作的孤獨男人。",
  "cnMarked": "這部電影把這位著名的科學家【描繪】成一個只在乎工作的孤獨男人。",
  "isHead": true,
  "level": 4,
  "family": "portray"
 },
 {
  "word": "portray",
  "answer": "portray",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "扮演",
  "en_def": "to act the part of a character in a film or play",
  "sentence": "In the school play, Jason will {{BLANK}} an old king who loses everything because he trusts the wrong people.",
  "cn": "在學校話劇中，傑森將扮演一位因為信錯人而失去一切的老國王。",
  "cnMarked": "在學校話劇中，傑森將【扮演】一位因為信錯人而失去一切的老國王。",
  "isHead": false,
  "level": 4,
  "family": "portray"
 },
 {
  "word": "portrait",
  "answer": "portrait",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "肖像；人像",
  "en_def": "a painting, drawing, or photo of a person",
  "sentence": "A large {{BLANK}} of my great-grandfather hangs in the living room, and everyone says I have his eyes.",
  "cn": "客廳裡掛著一幅我曾祖父的大肖像，每個人都說我的眼睛像他。",
  "cnMarked": "客廳裡掛著一幅我曾祖父的大【肖像】，每個人都說我的眼睛像他。",
  "isHead": false,
  "level": 3,
  "family": "portray"
 },
 {
  "word": "portrayal",
  "answer": "portrayal",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "描繪；刻畫",
  "en_def": "the way someone or something is shown in a film, book, or picture",
  "sentence": "Critics praised the actor's {{BLANK}} of the blind musician, saying it was the best performance of the year.",
  "cn": "評論家稱讚這位演員對盲人音樂家的刻畫，說那是年度最佳表演。",
  "cnMarked": "評論家稱讚這位演員對盲人音樂家的【刻畫】，說那是年度最佳表演。",
  "isHead": false,
  "level": null,
  "family": "portray"
 },
 {
  "word": "possess",
  "answer": "possess",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "擁有；具有",
  "en_def": "to have or own something",
  "sentence": "Anyone who wants to be a good teacher must {{BLANK}} patience, because students do not learn everything the first time.",
  "cn": "想成為好老師的人必須具有耐心，因為學生不會第一次就學會所有東西。",
  "cnMarked": "想成為好老師的人必須【具有】耐心，因為學生不會第一次就學會所有東西。",
  "isHead": true,
  "level": 4,
  "family": "possess"
 },
 {
  "word": "possession",
  "answer": "possession",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "擁有；持有",
  "en_def": "the state of having or owning something",
  "sentence": "The police found the stolen bicycle in the {{BLANK}} of a man who said he had bought it online.",
  "cn": "警方發現失竊的腳踏車在一名男子的持有中，他說他是在網路上買的。",
  "cnMarked": "警方發現失竊的腳踏車在一名男子的【持有】中，他說他是在網路上買的。",
  "isHead": false,
  "level": 4,
  "family": "possess"
 },
 {
  "word": "possessions",
  "answer": "possessions",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "財產；所有物",
  "en_def": "the things that you own",
  "sentence": "After the fire, the family lost almost all of their {{BLANK}}, but luckily nobody was hurt.",
  "cn": "火災後，這家人幾乎失去了所有的財物，但幸運的是沒有人受傷。",
  "cnMarked": "火災後，這家人幾乎失去了所有的【財物】，但幸運的是沒有人受傷。",
  "isHead": false,
  "level": 4,
  "family": "possess"
 },
 {
  "word": "possessive",
  "answer": "possessive",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "佔有慾強的",
  "en_def": "wanting to keep someone or something only for yourself",
  "sentence": "My dog is very {{BLANK}} about his toys, and he growls if another dog comes near them.",
  "cn": "我的狗對牠的玩具佔有慾很強，如果別的狗靠近牠就會低吼。",
  "cnMarked": "我的狗對牠的玩具【佔有慾很強】，如果別的狗靠近牠就會低吼。",
  "isHead": false,
  "level": null,
  "family": "possess"
 },
 {
  "word": "take possession of",
  "answer": "take possession of",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "取得…的所有權；接管",
  "en_def": "to start to own or control something",
  "sentence": "The new owners will {{BLANK}} the house next month, after the old family moves out.",
  "cn": "舊住戶搬走後，新屋主下個月將取得這棟房子的所有權。",
  "cnMarked": "舊住戶搬走後，新屋主下個月將【取得】這棟房子【的所有權】。",
  "isHead": false,
  "level": null,
  "family": "possess"
 }
];
const MCQS = [
 {
  "q": "Tom did not want to join the school trip at first. After a lot of ______ from his best friend, he finally agreed to come along with us.",
  "options": [
   "popularity",
   "persuasion",
   "possession",
   "philosophy"
  ],
  "answer": 1,
  "vocabIndex": 0
 },
 {
  "q": "The salesman spoke so well that my mother bought a vacuum cleaner she did not need. His words were very ______, and she could not say no.",
  "options": [
   "persuasive",
   "plentiful",
   "portable",
   "poisonous"
  ],
  "answer": 0,
  "vocabIndex": 1
 },
 {
  "q": "Whenever we plan a picnic, Ken says it will rain and nobody will come. He is always so ______ that he takes the fun out of everything.",
  "options": [
   "philosophical",
   "popular",
   "pessimistic",
   "physical"
  ],
  "answer": 2,
  "vocabIndex": 4
 },
 {
  "q": "Small white insects are eating the leaves of every tomato plant in the garden. Dad says we need to get rid of this ______ before it spreads.",
  "options": [
   "pickle",
   "plum",
   "portrait",
   "pest"
  ],
  "answer": 3,
  "vocabIndex": 8
 },
 {
  "q": "Hundreds of fireflies light up the river bank on summer nights. People come from far away to watch this amazing natural ______ with their own eyes.",
  "options": [
   "plumber",
   "phenomenon",
   "pesticide",
   "physician"
  ],
  "answer": 1,
  "vocabIndex": 12
 },
 {
  "q": "Socrates spent his whole life asking people difficult questions about truth, goodness, and happiness. He is still remembered today as the greatest ______ of ancient Greece.",
  "options": [
   "plumber",
   "physicist",
   "photographer",
   "philosopher"
  ],
  "answer": 3,
  "vocabIndex": 16
 },
 {
  "q": "Why are we here, and what makes a life good? These are ______ questions that people have been thinking about for more than two thousand years.",
  "options": [
   "philosophical",
   "pioneering",
   "physical",
   "pickled"
  ],
  "answer": 0,
  "vocabIndex": 17
 },
 {
  "q": "At university, my brother reads the works of Plato and Confucius every week. He says studying ______ has taught him how to think more clearly about life.",
  "options": [
   "popularity",
   "philosophy",
   "photography",
   "physics"
  ],
  "answer": 1,
  "vocabIndex": 18
 },
 {
  "q": "Lisa got a new camera for her birthday and now takes pictures everywhere she goes. She hopes to study ______ and work for a magazine one day.",
  "options": [
   "plumbing",
   "physics",
   "photography",
   "philosophy"
  ],
  "answer": 2,
  "vocabIndex": 21
 },
 {
  "q": "Sitting in front of a computer all day is bad for your health. Doctors suggest at least thirty minutes of ______ activity, like running or swimming, every day.",
  "options": [
   "persuasive",
   "pessimistic",
   "portable",
   "physical"
  ],
  "answer": 3,
  "vocabIndex": 26
 },
 {
  "q": "My grandfather has had a bad cough for two weeks and feels weak. Mom wants him to see a ______ tomorrow instead of just resting at home.",
  "options": [
   "physician",
   "plumber",
   "philosopher",
   "physicist"
  ],
  "answer": 0,
  "vocabIndex": 30
 },
 {
  "q": "Dr. Wang studies how light moves and why objects fall. As a ______, she spends most of her time doing experiments in a laboratory at the university.",
  "options": [
   "physician",
   "philosopher",
   "plumber",
   "physicist"
  ],
  "answer": 3,
  "vocabIndex": 31
 },
 {
  "q": "Our teacher dropped a feather and a coin at the same time to show how gravity works. I love ______ class because we do interesting experiments like this every week.",
  "options": [
   "photography",
   "physics",
   "philosophy",
   "popularity"
  ],
  "answer": 1,
  "vocabIndex": 32
 },
 {
  "q": "Grandma keeps cabbage in big jars with salt and vinegar for a few weeks. The sour ______ she makes goes perfectly with a bowl of hot rice.",
  "options": [
   "pickle",
   "poison",
   "pest",
   "plum"
  ],
  "answer": 0,
  "vocabIndex": 34
 },
 {
  "q": "Fifty years ago, almost nobody believed that computers could fit in a pocket. Steve Jobs was a ______ who helped turn that strange dream into something real.",
  "options": [
   "pessimist",
   "pest",
   "pioneer",
   "plumber"
  ],
  "answer": 2,
  "vocabIndex": 38
 },
 {
  "q": "After a week of heavy rain, the river is full and the fields are green. Water is ______ now, so farmers do not have to worry about their crops.",
  "options": [
   "plentiful",
   "portable",
   "poisonous",
   "possessive"
  ],
  "answer": 0,
  "vocabIndex": 41
 },
 {
  "q": "The novel is about a poor boy who becomes a king after many adventures. The ______ is exciting, but the ending is a little too easy to guess.",
  "options": [
   "phenomenon",
   "portrait",
   "plot",
   "pest"
  ],
  "answer": 2,
  "vocabIndex": 44
 },
 {
  "q": "This small, round fruit has purple skin and a hard seed in the center. Its sweet and sour taste makes it perfect for jam, and we call it a ______.",
  "options": [
   "pickle",
   "plum",
   "pest",
   "plumber"
  ],
  "answer": 1,
  "vocabIndex": 48
 },
 {
  "q": "Water keeps leaking from the pipe under the kitchen sink, and the floor is wet. We need a ______ to come and fix it as soon as possible.",
  "options": [
   "physician",
   "philosopher",
   "plumber",
   "photographer"
  ],
  "answer": 2,
  "vocabIndex": 51
 },
 {
  "q": "Be careful when you walk in the long grass near the river. Some snakes there are ______, and one bite can send a person to the hospital.",
  "options": [
   "popular",
   "poisonous",
   "polished",
   "plentiful"
  ],
  "answer": 1,
  "vocabIndex": 54
 },
 {
  "q": "Grandpa's old car still looks new after twenty years. Every Sunday morning, he washes it carefully and then spends an hour trying to ______ it until it shines.",
  "options": [
   "polish",
   "portray",
   "possess",
   "persuade"
  ],
  "answer": 0,
  "vocabIndex": 58
 },
 {
  "q": "Ten years ago, few people outside Taiwan had heard of bubble tea. Today its ______ has spread around the world, and you can buy it in London and New York.",
  "options": [
   "possession",
   "persuasion",
   "popularity",
   "portability"
  ],
  "answer": 2,
  "vocabIndex": 62
 },
 {
  "q": "This small speaker weighs less than a phone and runs on a battery for ten hours. Because it is so ______, I take it to the beach and on camping trips.",
  "options": [
   "physical",
   "pessimistic",
   "pickled",
   "portable"
  ],
  "answer": 3,
  "vocabIndex": 66
 },
 {
  "q": "In the new movie, the famous actor plays a kind doctor who works in a poor village. Critics say he is able to ______ the character with great warmth.",
  "options": [
   "portray",
   "pickle",
   "poison",
   "possess"
  ],
  "answer": 0,
  "vocabIndex": 69
 },
 {
  "q": "To be a good leader, a person needs more than a loud voice. He or she must also ______ patience, honesty, and the ability to listen to others.",
  "options": [
   "polish",
   "popularize",
   "persuade",
   "possess"
  ],
  "answer": 3,
  "vocabIndex": 73
 },
 {
  "q": "My parents thought a trip to Japan would be too expensive. It took me a whole month to ______ them that we could travel cheaply by staying in small hotels.",
  "options": [
   "portray",
   "persuade",
   "possess",
   "pioneer"
  ],
  "answer": 1,
  "vocabIndex": 2
 },
 {
  "q": "Our team lost the first two games, but the captain still smiles and says we will win the cup. Her ______ attitude keeps everyone trying hard.",
  "options": [
   "pessimistic",
   "poisonous",
   "plentiful",
   "optimistic"
  ],
  "answer": 3,
  "vocabIndex": 7
 },
 {
  "q": "The farmer put some ______ in the corner of the barn to kill the rats. He warned the children never to touch the small blue pills there.",
  "options": [
   "polish",
   "pickle",
   "poison",
   "plum"
  ],
  "answer": 2,
  "vocabIndex": 55
 },
 {
  "q": "At the wedding, a man with two big cameras ran around taking pictures of every guest. The ______ promised that the photos would be ready in a week.",
  "options": [
   "pessimist",
   "photographer",
   "plumber",
   "physicist"
  ],
  "answer": 1,
  "vocabIndex": 23
 },
 {
  "q": "The police stopped the car and found a stolen laptop inside. The driver was arrested because he was in ______ of something that did not belong to him.",
  "options": [
   "possession",
   "popularity",
   "phenomenon",
   "persuasion"
  ],
  "answer": 0,
  "vocabIndex": 74
 }
];
const LOOKUP = {};
VOCAB.forEach(v => { const key = v.word.toLowerCase(); const sense = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def };
  if (LOOKUP[key]) LOOKUP[key].combined.push(sense); else LOOKUP[key] = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def, combined: [sense] }; });
const EXTRA_GLOSSES = {};