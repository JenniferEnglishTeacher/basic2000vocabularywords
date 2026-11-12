// 學測6000字 Level 6 Group 34 (sneakers-sportsmansportswoman) — word-family edition
const QUIZ_CONFIG = {
  groupName: "6000字 L6 Group 34 - sneakers – sportsmansportswoman (word family)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};
const VOCAB = [
 {
  "word": "sneakers",
  "answer": "sneakers",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "運動鞋；球鞋",
  "en_def": "soft sports shoes with rubber bottoms",
  "sentence": "My old {{BLANK}} are falling apart, so I need to buy a new pair before the school sports day next week.",
  "cn": "我的舊運動鞋快要壞掉了，所以我需要在下週學校運動會之前買一雙新的。",
  "cnMarked": "我的舊【運動鞋】快要壞掉了，所以我需要在下週學校運動會之前買一雙新的。",
  "isHead": true,
  "level": 6,
  "family": "sneakers"
 },
 {
  "word": "a pair of sneakers",
  "answer": "a pair of sneakers",
  "nblanks": 4,
  "pos": "n.phr.",
  "cn_def": "一雙運動鞋",
  "en_def": "two sports shoes that go together",
  "sentence": "For his birthday, my brother asked for {{BLANK}} because he wants to join the school running club this year.",
  "cn": "我弟弟生日時想要一雙運動鞋，因為他今年想加入學校的跑步社。",
  "cnMarked": "我弟弟生日時想要【一雙運動鞋】，因為他今年想加入學校的跑步社。",
  "isHead": false,
  "level": null,
  "family": "sneakers"
 },
 {
  "word": "running shoes",
  "answer": "running shoes",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "跑步鞋",
  "en_def": "light shoes made for running",
  "sentence": "Good {{BLANK}} protect your knees, so do not run a marathon in the cheap shoes you wear every day.",
  "cn": "好的跑步鞋能保護你的膝蓋，所以不要穿每天穿的便宜鞋子去跑馬拉松。",
  "cnMarked": "好的【跑步鞋】能保護你的膝蓋，所以不要穿每天穿的便宜鞋子去跑馬拉松。",
  "isHead": false,
  "level": null,
  "family": "sneakers"
 },
 {
  "word": "sneaky",
  "answer": "sneaky",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "偷偷摸摸的；狡猾的",
  "en_def": "doing things secretly and in an unfair way",
  "sentence": "It was {{BLANK}} of him to read his sister's diary while she was out, and she was furious when she found out.",
  "cn": "他趁姊姊外出時偷看她的日記真是偷偷摸摸的，她發現後非常生氣。",
  "cnMarked": "他趁姊姊外出時偷看她的日記真是【偷偷摸摸的】，她發現後非常生氣。",
  "isHead": true,
  "level": 6,
  "family": "sneaky"
 },
 {
  "word": "sneak, sneaked/snuck, sneaked/snuck",
  "answer": "sneak",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "偷偷地走；潛行",
  "en_def": "to go somewhere quietly so nobody sees you",
  "sentence": "The boys tried to {{BLANK}} into the movie theater without tickets, but the manager caught them at the back door.",
  "cn": "那些男孩試圖沒買票就偷偷溜進電影院，但經理在後門抓到了他們。",
  "cnMarked": "那些男孩試圖沒買票就【偷偷溜】進電影院，但經理在後門抓到了他們。",
  "isHead": false,
  "level": 5,
  "family": "sneaky"
 },
 {
  "word": "sneak out",
  "answer": "sneak out",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "偷偷溜出去",
  "en_def": "to leave a place quietly and secretly",
  "sentence": "When the lecture became boring, two students decided to {{BLANK}} of the hall, but the professor noticed them immediately.",
  "cn": "當演講變得無聊時，兩個學生決定偷偷溜出大廳，但教授立刻注意到他們。",
  "cnMarked": "當演講變得無聊時，兩個學生決定【偷偷溜出】大廳，但教授立刻注意到他們。",
  "isHead": false,
  "level": null,
  "family": "sneaky"
 },
 {
  "word": "sneak a look at",
  "answer": "sneaked a look at",
  "nblanks": 4,
  "pos": "v.phr.",
  "cn_def": "偷看一眼",
  "en_def": "to look at something quickly and secretly",
  "sentence": "I could not wait until morning, so I {{BLANK}} my birthday presents while everyone else was asleep.",
  "cn": "我等不到早上，所以趁大家都睡著時偷看了一眼我的生日禮物。",
  "cnMarked": "我等不到早上，所以趁大家都睡著時【偷看了一眼】我的生日禮物。",
  "isHead": false,
  "level": null,
  "family": "sneaky"
 },
 {
  "word": "sneakily",
  "answer": "sneakily",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "偷偷地；狡猾地",
  "en_def": "in a secret and unfair way",
  "sentence": "My cat {{BLANK}} pushed the kitchen door open and ate half of the fish before anyone came home.",
  "cn": "我的貓偷偷地推開廚房門，在大家回家前吃掉了半條魚。",
  "cnMarked": "我的貓【偷偷地】推開廚房門，在大家回家前吃掉了半條魚。",
  "isHead": false,
  "level": null,
  "family": "sneaky"
 },
 {
  "word": "sneeze",
  "answer": "sneeze",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "打噴嚏",
  "en_def": "to suddenly push air out through your nose and mouth",
  "sentence": "Every spring I {{BLANK}} all day long because the pollen from the trees makes my nose itch terribly.",
  "cn": "每年春天我整天打噴嚏，因為樹上的花粉讓我的鼻子奇癢無比。",
  "cnMarked": "每年春天我整天【打噴嚏】，因為樹上的花粉讓我的鼻子奇癢無比。",
  "isHead": true,
  "level": 6,
  "family": "sneeze"
 },
 {
  "word": "sneeze",
  "answer": "sneeze",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "噴嚏",
  "en_def": "the act of pushing air suddenly through your nose",
  "sentence": "A loud {{BLANK}} from the back of the quiet classroom made everyone turn around and laugh during the test.",
  "cn": "考試時安靜教室後方傳來一聲響亮的噴嚏，讓大家都轉過頭來笑了。",
  "cnMarked": "考試時安靜教室後方傳來一聲響亮的【噴嚏】，讓大家都轉過頭來笑了。",
  "isHead": false,
  "level": 6,
  "family": "sneeze"
 },
 {
  "word": "cover your mouth when you sneeze",
  "answer": "cover their mouths when they sneeze",
  "nblanks": 6,
  "pos": "v.phr.",
  "cn_def": "打噴嚏時遮住嘴",
  "en_def": "to put your hand or arm in front of your mouth while sneezing",
  "sentence": "The nurse told the children to {{BLANK}} so that they would not spread germs to their classmates.",
  "cn": "護士告訴孩子們打噴嚏時要遮住嘴，這樣才不會把細菌傳給同學。",
  "cnMarked": "護士告訴孩子們【打噴嚏時要遮住嘴】，這樣才不會把細菌傳給同學。",
  "isHead": false,
  "level": null,
  "family": "sneeze"
 },
 {
  "word": "snore",
  "answer": "snores",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "打呼",
  "en_def": "to breathe noisily through your nose and mouth while sleeping",
  "sentence": "My grandfather {{BLANK}} so loudly that we can hear him from the living room, even when his bedroom door is closed.",
  "cn": "我爺爺打呼打得非常大聲，即使他的房門關著，我們在客廳都聽得到。",
  "cnMarked": "我爺爺【打呼】打得非常大聲，即使他的房門關著，我們在客廳都聽得到。",
  "isHead": true,
  "level": 6,
  "family": "snore"
 },
 {
  "word": "snore",
  "answer": "snore",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "鼾聲",
  "en_def": "the loud noise someone makes while sleeping",
  "sentence": "I could not sleep at the camp because the {{BLANK}} of the boy next to me sounded like a motorcycle all night.",
  "cn": "我在營隊裡睡不著，因為旁邊男孩的鼾聲整晚聽起來像摩托車。",
  "cnMarked": "我在營隊裡睡不著，因為旁邊男孩的【鼾聲】整晚聽起來像摩托車。",
  "isHead": false,
  "level": 6,
  "family": "snore"
 },
 {
  "word": "snoring",
  "answer": "snoring",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "打呼；打鼾",
  "en_def": "the noise of breathing loudly while asleep",
  "sentence": "Heavy {{BLANK}} can be a sign of a health problem, so my father finally went to see a doctor about it.",
  "cn": "嚴重打呼可能是健康問題的徵兆，所以我爸爸終於為此去看了醫生。",
  "cnMarked": "嚴重【打呼】可能是健康問題的徵兆，所以我爸爸終於為此去看了醫生。",
  "isHead": false,
  "level": null,
  "family": "snore"
 },
 {
  "word": "sociable",
  "answer": "sociable",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "善於交際的；好相處的",
  "en_def": "friendly and enjoying being with other people",
  "sentence": "My new roommate is very {{BLANK}}, so she already knows everyone on our floor after only one week.",
  "cn": "我的新室友非常善於交際，所以才一個星期她就認識了我們這層樓的每個人。",
  "cnMarked": "我的新室友非常【善於交際】，所以才一個星期她就認識了我們這層樓的每個人。",
  "isHead": true,
  "level": 6,
  "family": "sociable"
 },
 {
  "word": "social",
  "answer": "social",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "社會的；社交的",
  "en_def": "connected with society or with meeting people",
  "sentence": "Spending too much time on {{BLANK}} media can make teenagers feel lonely instead of connected to their friends.",
  "cn": "花太多時間在社交媒體上會讓青少年覺得孤單，而不是和朋友更親近。",
  "cnMarked": "花太多時間在【社交】媒體上會讓青少年覺得孤單，而不是和朋友更親近。",
  "isHead": false,
  "level": 2,
  "family": "sociable"
 },
 {
  "word": "socially",
  "answer": "socially",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "在社交上",
  "en_def": "in a way that is connected with meeting people",
  "sentence": "He is brilliant at math, but {{BLANK}} he feels nervous and often does not know what to say at parties.",
  "cn": "他數學很厲害，但在社交上他會緊張，在派對上常常不知道該說什麼。",
  "cnMarked": "他數學很厲害，但【在社交上】他會緊張，在派對上常常不知道該說什麼。",
  "isHead": false,
  "level": null,
  "family": "sociable"
 },
 {
  "word": "society",
  "answer": "society",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "社會",
  "en_def": "all the people who live together in a country or area",
  "sentence": "In a healthy {{BLANK}}, people from different backgrounds respect each other and work together to solve common problems.",
  "cn": "在一個健康的社會裡，來自不同背景的人彼此尊重，並一起合作解決共同的問題。",
  "cnMarked": "在一個健康的【社會】裡，來自不同背景的人彼此尊重，並一起合作解決共同的問題。",
  "isHead": false,
  "level": 2,
  "family": "sociable"
 },
 {
  "word": "socialism",
  "answer": "socialism",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "社會主義",
  "en_def": "a political system in which the government owns and shares important industries",
  "sentence": "Under {{BLANK}}, the government controls the main industries so that wealth can be shared more equally among the people.",
  "cn": "在社會主義下，政府控制主要產業，以便財富能在人民之間更平均地分配。",
  "cnMarked": "在【社會主義】下，政府控制主要產業，以便財富能在人民之間更平均地分配。",
  "isHead": true,
  "level": 6,
  "family": "socialism"
 },
 {
  "word": "socialist",
  "answer": "socialist",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "社會主義者",
  "en_def": "a person who believes in socialism",
  "sentence": "My history teacher said that a {{BLANK}} believes the government should provide free health care and education for everyone.",
  "cn": "我的歷史老師說，社會主義者相信政府應該為每個人提供免費的醫療和教育。",
  "cnMarked": "我的歷史老師說，【社會主義者】相信政府應該為每個人提供免費的醫療和教育。",
  "isHead": true,
  "level": 6,
  "family": "socialism"
 },
 {
  "word": "socialist",
  "answer": "socialist",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "社會主義的",
  "en_def": "based on or supporting socialism",
  "sentence": "The {{BLANK}} party promised to raise taxes on the rich and use the money to help poor families with children.",
  "cn": "社會主義政黨承諾對富人加稅，並用這些錢來幫助有小孩的貧窮家庭。",
  "cnMarked": "【社會主義】政黨承諾對富人加稅，並用這些錢來幫助有小孩的貧窮家庭。",
  "isHead": true,
  "level": 6,
  "family": "socialism"
 },
 {
  "word": "socialize",
  "answer": "socialize",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "社交；交際",
  "en_def": "to spend time with other people in a friendly way",
  "sentence": "After work, my colleagues like to {{BLANK}} at a coffee shop, but I usually go home to rest because I am tired.",
  "cn": "下班後我的同事喜歡在咖啡店社交，但我通常回家休息，因為我很累。",
  "cnMarked": "下班後我的同事喜歡在咖啡店【社交】，但我通常回家休息，因為我很累。",
  "isHead": false,
  "level": 6,
  "family": "socialism"
 },
 {
  "word": "socialize with",
  "answer": "socialize with",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "與…交往",
  "en_def": "to meet and talk with people in a friendly way",
  "sentence": "The exchange students were encouraged to {{BLANK}} local families so that they could practice Chinese in everyday situations.",
  "cn": "交換學生被鼓勵與當地家庭交往，這樣他們就能在日常情境中練習中文。",
  "cnMarked": "交換學生被鼓勵【與】當地家庭【交往】，這樣他們就能在日常情境中練習中文。",
  "isHead": false,
  "level": null,
  "family": "socialism"
 },
 {
  "word": "sociology",
  "answer": "sociology",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "社會學",
  "en_def": "the study of society and how people live together",
  "sentence": "She chose to study {{BLANK}} at university because she wants to understand why some neighborhoods have more crime than others.",
  "cn": "她選擇在大學讀社會學，因為她想了解為什麼有些社區的犯罪比其他地方多。",
  "cnMarked": "她選擇在大學讀【社會學】，因為她想了解為什麼有些社區的犯罪比其他地方多。",
  "isHead": true,
  "level": 6,
  "family": "sociology"
 },
 {
  "word": "sociologist",
  "answer": "sociologist",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "社會學家",
  "en_def": "a person who studies society",
  "sentence": "A famous {{BLANK}} spent two years living in a small fishing village to learn how its families share work and money.",
  "cn": "一位著名的社會學家在一個小漁村住了兩年，以了解那裡的家庭如何分擔工作和金錢。",
  "cnMarked": "一位著名的【社會學家】在一個小漁村住了兩年，以了解那裡的家庭如何分擔工作和金錢。",
  "isHead": false,
  "level": null,
  "family": "sociology"
 },
 {
  "word": "sociological",
  "answer": "sociological",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "社會學的",
  "en_def": "connected with the study of society",
  "sentence": "The report looks at the problem from a {{BLANK}} point of view, asking how poverty and education affect young people's choices.",
  "cn": "這份報告從社會學的角度探討這個問題，探問貧窮和教育如何影響年輕人的選擇。",
  "cnMarked": "這份報告從【社會學的】角度探討這個問題，探問貧窮和教育如何影響年輕人的選擇。",
  "isHead": false,
  "level": null,
  "family": "sociology"
 },
 {
  "word": "solemn",
  "answer": "solemn",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "莊嚴的；嚴肅的",
  "en_def": "very serious and formal",
  "sentence": "The students stood in {{BLANK}} silence as the old soldier told them about his friends who died in the war.",
  "cn": "當老兵向學生講述他在戰爭中死去的朋友時，學生們莊嚴肅靜地站著。",
  "cnMarked": "當老兵向學生講述他在戰爭中死去的朋友時，學生們【莊嚴】肅靜地站著。",
  "isHead": true,
  "level": 6,
  "family": "solemn"
 },
 {
  "word": "solemnly",
  "answer": "solemnly",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "莊嚴地；鄭重地",
  "en_def": "in a very serious and formal way",
  "sentence": "The new president {{BLANK}} promised to serve the people honestly, and the crowd listened without making a sound.",
  "cn": "新總統鄭重地承諾要誠實地為人民服務，群眾安靜無聲地聆聽著。",
  "cnMarked": "新總統【鄭重地】承諾要誠實地為人民服務，群眾安靜無聲地聆聽著。",
  "isHead": false,
  "level": null,
  "family": "solemn"
 },
 {
  "word": "make a solemn promise",
  "answer": "made a solemn promise",
  "nblanks": 4,
  "pos": "v.phr.",
  "cn_def": "鄭重承諾",
  "en_def": "to promise something in a very serious way",
  "sentence": "Before he left for the army, he {{BLANK}} to his mother that he would write to her every single week.",
  "cn": "在他去當兵之前，他向母親鄭重承諾他會每個星期都寫信給她。",
  "cnMarked": "在他去當兵之前，他向母親【鄭重承諾】他會每個星期都寫信給她。",
  "isHead": false,
  "level": null,
  "family": "solemn"
 },
 {
  "word": "solidarity",
  "answer": "solidarity",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "團結；同心協力",
  "en_def": "support and agreement among people who share a goal",
  "sentence": "The workers showed great {{BLANK}} during the strike, and nobody returned to work until everyone received a fair raise.",
  "cn": "工人們在罷工期間展現了極大的團結，在每個人都獲得合理加薪之前沒有人回去工作。",
  "cnMarked": "工人們在罷工期間展現了極大的【團結】，在每個人都獲得合理加薪之前沒有人回去工作。",
  "isHead": true,
  "level": 6,
  "family": "solidarity"
 },
 {
  "word": "in solidarity with",
  "answer": "in solidarity with",
  "nblanks": 3,
  "pos": "phr.",
  "cn_def": "聲援；與…團結一致",
  "en_def": "to show support for a group of people",
  "sentence": "Thousands of students wore black on Monday {{BLANK}} the families who had lost their homes in the terrible flood.",
  "cn": "週一數千名學生穿著黑衣，聲援在可怕洪水中失去家園的家庭。",
  "cnMarked": "週一數千名學生穿著黑衣，【聲援】在可怕洪水中失去家園的家庭。",
  "isHead": false,
  "level": null,
  "family": "solidarity"
 },
 {
  "word": "solid",
  "answer": "solid",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "固體的；堅固的；可靠的",
  "en_def": "hard and firm; not liquid or gas; strong and reliable",
  "sentence": "The old wooden bridge looks weak, but the engineer said it is still {{BLANK}} enough to carry a small truck.",
  "cn": "這座老木橋看起來很脆弱，但工程師說它仍然堅固到足以承載一輛小卡車。",
  "cnMarked": "這座老木橋看起來很脆弱，但工程師說它仍然【堅固】到足以承載一輛小卡車。",
  "isHead": false,
  "level": 3,
  "family": "solidarity"
 },
 {
  "word": "solid",
  "answer": "solid",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "固體",
  "en_def": "a substance that is hard and keeps its shape",
  "sentence": "When water freezes, it changes from a liquid into a {{BLANK}}, which is why ice floats on the lake in winter.",
  "cn": "水結冰時會從液體變成固體，這就是為什麼冬天冰會浮在湖面上。",
  "cnMarked": "水結冰時會從液體變成【固體】，這就是為什麼冬天冰會浮在湖面上。",
  "isHead": false,
  "level": 3,
  "family": "solidarity"
 },
 {
  "word": "solitary",
  "answer": "solitary",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "獨自的；孤獨的",
  "en_def": "done alone; living or being alone",
  "sentence": "Writing is a {{BLANK}} activity, so the author rents a quiet cabin in the mountains whenever she starts a new novel.",
  "cn": "寫作是一項獨自的活動，所以這位作家每次開始寫新小說時都會租一間山上安靜的小屋。",
  "cnMarked": "寫作是一項【獨自的】活動，所以這位作家每次開始寫新小說時都會租一間山上安靜的小屋。",
  "isHead": true,
  "level": 6,
  "family": "solitary"
 },
 {
  "word": "solitude",
  "answer": "solitude",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "獨處；孤獨",
  "en_def": "the state of being alone, especially when you enjoy it",
  "sentence": "After a noisy week at the office, my uncle enjoys the {{BLANK}} of fishing alone by the river early in the morning.",
  "cn": "在辦公室忙碌吵雜的一週後，我叔叔喜歡清晨獨自在河邊釣魚的獨處時光。",
  "cnMarked": "在辦公室忙碌吵雜的一週後，我叔叔喜歡清晨獨自在河邊釣魚的【獨處時光】。",
  "isHead": true,
  "level": 6,
  "family": "solitary"
 },
 {
  "word": "solitary confinement",
  "answer": "solitary confinement",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "單獨監禁",
  "en_def": "a punishment in which a prisoner is kept alone in a room",
  "sentence": "The prisoner spent thirty days in {{BLANK}}, and he said the silence was worse than any other punishment.",
  "cn": "那名囚犯被單獨監禁了三十天，他說那種寂靜比任何其他懲罰都更糟。",
  "cnMarked": "那名囚犯被【單獨監禁】了三十天，他說那種寂靜比任何其他懲罰都更糟。",
  "isHead": false,
  "level": null,
  "family": "solitary"
 },
 {
  "word": "lead a solitary life",
  "answer": "has led a solitary life",
  "nblanks": 5,
  "pos": "v.phr.",
  "cn_def": "過著孤獨的生活",
  "en_def": "to live alone and see few people",
  "sentence": "Since his wife passed away, the old fisherman {{BLANK}} in his small house, speaking only to his dog.",
  "cn": "自從妻子過世後，這位老漁夫在小屋裡過著孤獨的生活，只跟他的狗說話。",
  "cnMarked": "自從妻子過世後，這位老漁夫在小屋裡【過著孤獨的生活】，只跟他的狗說話。",
  "isHead": false,
  "level": null,
  "family": "solitary"
 },
 {
  "word": "soothe",
  "answer": "soothe",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "安撫；舒緩",
  "en_def": "to make someone calmer or make pain less strong",
  "sentence": "The young mother sang softly to {{BLANK}} her crying baby, and within a few minutes he fell asleep.",
  "cn": "年輕的媽媽輕聲唱歌安撫哭泣的寶寶，幾分鐘內他就睡著了。",
  "cnMarked": "年輕的媽媽輕聲唱歌【安撫】哭泣的寶寶，幾分鐘內他就睡著了。",
  "isHead": true,
  "level": 6,
  "family": "soothe"
 },
 {
  "word": "soothing",
  "answer": "soothing",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "令人舒緩的；安撫的",
  "en_def": "making you feel calm and relaxed",
  "sentence": "The spa plays {{BLANK}} music and uses soft lights, so most customers feel sleepy after only ten minutes.",
  "cn": "這家水療館播放令人舒緩的音樂並使用柔和的燈光，所以大多數顧客才十分鐘就覺得想睡。",
  "cnMarked": "這家水療館播放【令人舒緩的】音樂並使用柔和的燈光，所以大多數顧客才十分鐘就覺得想睡。",
  "isHead": false,
  "level": null,
  "family": "soothe"
 },
 {
  "word": "soothe sb's nerves",
  "answer": "soothe her nerves",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "安撫某人的情緒",
  "en_def": "to help someone stop feeling nervous",
  "sentence": "Before the big speech, she took a long walk in the park to {{BLANK}}, and it really worked.",
  "cn": "在重要演講之前，她到公園散了很久的步來安撫自己的情緒，而且真的有效。",
  "cnMarked": "在重要演講之前，她到公園散了很久的步來【安撫自己的情緒】，而且真的有效。",
  "isHead": false,
  "level": null,
  "family": "soothe"
 },
 {
  "word": "sorrowful",
  "answer": "sorrowful",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "悲傷的；哀傷的",
  "en_def": "feeling or showing great sadness",
  "sentence": "The dog gave his owner a {{BLANK}} look when she packed her suitcase, because he knew she was leaving again.",
  "cn": "當主人收拾行李箱時，狗狗給了她一個悲傷的眼神，因為它知道她又要離開了。",
  "cnMarked": "當主人收拾行李箱時，狗狗給了她一個【悲傷的】眼神，因為它知道她又要離開了。",
  "isHead": true,
  "level": 6,
  "family": "sorrowful"
 },
 {
  "word": "sorrow",
  "answer": "sorrow",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "悲傷；哀痛",
  "en_def": "a feeling of great sadness",
  "sentence": "The whole town shared the family's {{BLANK}} when the young firefighter died saving two children from a burning house.",
  "cn": "當年輕的消防員為了從燃燒的房子裡救出兩個孩子而喪生時，全鎮的人都分擔了這家人的悲傷。",
  "cnMarked": "當年輕的消防員為了從燃燒的房子裡救出兩個孩子而喪生時，全鎮的人都分擔了這家人的【悲傷】。",
  "isHead": false,
  "level": 3,
  "family": "sorrowful"
 },
 {
  "word": "sorrowfully",
  "answer": "sorrowfully",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "悲傷地",
  "en_def": "in a very sad way",
  "sentence": "The old man looked {{BLANK}} at the empty chair where his wife used to sit and read every evening.",
  "cn": "老人悲傷地望著那張空椅子，他的妻子以前每天晚上都坐在那裡看書。",
  "cnMarked": "老人【悲傷地】望著那張空椅子，他的妻子以前每天晚上都坐在那裡看書。",
  "isHead": false,
  "level": null,
  "family": "sorrowful"
 },
 {
  "word": "to one's sorrow",
  "answer": "To their sorrow",
  "nblanks": 3,
  "pos": "phr.",
  "cn_def": "令人悲傷的是",
  "en_def": "used to say that something made you very sad",
  "sentence": "{{BLANK}}, the family had to sell the farm that had belonged to them for more than one hundred years.",
  "cn": "令他們悲傷的是，這家人不得不賣掉屬於他們一百多年的農場。",
  "cnMarked": "【令他們悲傷的是】，這家人不得不賣掉屬於他們一百多年的農場。",
  "isHead": false,
  "level": null,
  "family": "sorrowful"
 },
 {
  "word": "sovereign",
  "answer": "sovereign",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "有主權的；獨立自主的",
  "en_def": "having complete power to govern itself",
  "sentence": "A {{BLANK}} nation has the right to make its own laws, so other countries should not interfere in its decisions.",
  "cn": "主權國家有權制定自己的法律，所以其他國家不應該干涉它的決定。",
  "cnMarked": "【主權】國家有權制定自己的法律，所以其他國家不應該干涉它的決定。",
  "isHead": true,
  "level": 6,
  "family": "sovereign"
 },
 {
  "word": "sovereign",
  "answer": "sovereign",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "君主；元首",
  "en_def": "a king or queen",
  "sentence": "In the old days, the {{BLANK}} had the power to decide who would live and who would die with a single word.",
  "cn": "在過去，君主只要一句話就有權決定誰生誰死。",
  "cnMarked": "在過去，【君主】只要一句話就有權決定誰生誰死。",
  "isHead": false,
  "level": 6,
  "family": "sovereign"
 },
 {
  "word": "sovereignty",
  "answer": "sovereignty",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "主權",
  "en_def": "the complete power of a country to govern itself",
  "sentence": "The two countries have argued about the {{BLANK}} of the small islands for decades, and neither side is willing to give up.",
  "cn": "兩國為那些小島的主權爭論了數十年，雙方都不願意放棄。",
  "cnMarked": "兩國為那些小島的【主權】爭論了數十年，雙方都不願意放棄。",
  "isHead": false,
  "level": 5,
  "family": "sovereign"
 },
 {
  "word": "spacecraft",
  "answer": "spacecraft",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "太空船",
  "en_def": "a vehicle that travels in space",
  "sentence": "The {{BLANK}} will travel for seven months before it reaches Mars, and scientists will control it from Earth the whole time.",
  "cn": "這艘太空船將航行七個月才會抵達火星，科學家會在整個過程中從地球控制它。",
  "cnMarked": "這艘【太空船】將航行七個月才會抵達火星，科學家會在整個過程中從地球控制它。",
  "isHead": true,
  "level": 6,
  "family": "spacecraft"
 },
 {
  "word": "spaceship",
  "answer": "spaceship",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "太空船；宇宙飛船",
  "en_def": "a vehicle that carries people into space, especially in stories",
  "sentence": "In the movie, the children build a {{BLANK}} out of old car parts and fly to a planet made of candy.",
  "cn": "在電影裡，孩子們用舊汽車零件建造了一艘太空船，飛到一個由糖果組成的星球。",
  "cnMarked": "在電影裡，孩子們用舊汽車零件建造了一艘【太空船】，飛到一個由糖果組成的星球。",
  "isHead": false,
  "level": 6,
  "family": "spacecraft"
 },
 {
  "word": "space station",
  "answer": "space station",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "太空站",
  "en_def": "a large structure in space where astronauts live and work",
  "sentence": "Astronauts on the {{BLANK}} see sixteen sunrises every day because they circle the Earth once every ninety minutes.",
  "cn": "太空站上的太空人每天看到十六次日出，因為他們每九十分鐘繞地球一圈。",
  "cnMarked": "【太空站】上的太空人每天看到十六次日出，因為他們每九十分鐘繞地球一圈。",
  "isHead": false,
  "level": null,
  "family": "spacecraft"
 },
 {
  "word": "spacecraft launch",
  "answer": "spacecraft launch",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "太空船發射",
  "en_def": "the moment a spacecraft leaves the ground",
  "sentence": "Thousands of people gathered on the beach to watch the {{BLANK}}, and they cheered as the rocket rose into the sky.",
  "cn": "數千人聚集在海灘上觀看太空船發射，當火箭升上天空時他們歡呼起來。",
  "cnMarked": "數千人聚集在海灘上觀看【太空船發射】，當火箭升上天空時他們歡呼起來。",
  "isHead": false,
  "level": null,
  "family": "spacecraft"
 },
 {
  "word": "span",
  "answer": "span",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "期間；跨距",
  "en_def": "the length of time something lasts; the distance from one side to the other",
  "sentence": "Over a {{BLANK}} of only three years, the small start-up grew into a company with offices in five countries.",
  "cn": "在短短三年的期間內，這家小型新創公司成長為在五個國家設有辦公室的企業。",
  "cnMarked": "在短短三年的【期間】內，這家小型新創公司成長為在五個國家設有辦公室的企業。",
  "isHead": true,
  "level": 6,
  "family": "span"
 },
 {
  "word": "span",
  "answer": "spanned",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "橫跨；持續",
  "en_def": "to last for a period of time; to stretch across something",
  "sentence": "Her acting career {{BLANK}} more than fifty years, from her first small role at eighteen to her final film at seventy.",
  "cn": "她的演藝生涯橫跨超過五十年，從十八歲的第一個小角色到七十歲的最後一部電影。",
  "cnMarked": "她的演藝生涯【橫跨】超過五十年，從十八歲的第一個小角色到七十歲的最後一部電影。",
  "isHead": false,
  "level": 6,
  "family": "span"
 },
 {
  "word": "life span",
  "answer": "life span",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "壽命",
  "en_def": "the length of time a person, animal, or thing lives or lasts",
  "sentence": "The average {{BLANK}} of a pet rabbit is about eight years, so families should think carefully before buying one.",
  "cn": "寵物兔的平均壽命大約八年，所以家庭在購買前應該仔細考慮。",
  "cnMarked": "寵物兔的平均【壽命】大約八年，所以家庭在購買前應該仔細考慮。",
  "isHead": false,
  "level": null,
  "family": "span"
 },
 {
  "word": "attention span",
  "answer": "attention span",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "注意力持續時間",
  "en_def": "the length of time you can keep paying attention",
  "sentence": "Young children have a short {{BLANK}}, so the teacher changes activities every ten minutes to keep them interested.",
  "cn": "幼童的注意力持續時間很短，所以老師每十分鐘更換活動來維持他們的興趣。",
  "cnMarked": "幼童的【注意力持續時間】很短，所以老師每十分鐘更換活動來維持他們的興趣。",
  "isHead": false,
  "level": null,
  "family": "span"
 },
 {
  "word": "sparrow",
  "answer": "sparrow",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "麻雀",
  "en_def": "a small brown bird that is very common in towns",
  "sentence": "A little {{BLANK}} hopped onto our table at the outdoor café and picked up the crumbs from my sandwich.",
  "cn": "一隻小麻雀跳到我們戶外咖啡座的桌上，撿起我三明治的碎屑。",
  "cnMarked": "一隻小【麻雀】跳到我們戶外咖啡座的桌上，撿起我三明治的碎屑。",
  "isHead": true,
  "level": 6,
  "family": "sparrow"
 },
 {
  "word": "a flock of sparrows",
  "answer": "a flock of sparrows",
  "nblanks": 4,
  "pos": "n.phr.",
  "cn_def": "一群麻雀",
  "en_def": "a group of sparrows flying or feeding together",
  "sentence": "Every evening {{BLANK}} gathers in the big tree outside my window, and their chirping is louder than the traffic.",
  "cn": "每天傍晚一群麻雀聚集在我窗外的大樹上，它們的啁啾聲比車流聲還大。",
  "cnMarked": "每天傍晚【一群麻雀】聚集在我窗外的大樹上，它們的啁啾聲比車流聲還大。",
  "isHead": false,
  "level": null,
  "family": "sparrow"
 },
 {
  "word": "sparrow's nest",
  "answer": "sparrow's nest",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "麻雀的巢",
  "en_def": "the small home a sparrow builds for its eggs",
  "sentence": "We found a {{BLANK}} under the roof of the garage, so my father decided not to clean that corner until the babies flew away.",
  "cn": "我們在車庫屋頂下發現一個麻雀的巢，所以我爸爸決定等小鳥飛走後再清理那個角落。",
  "cnMarked": "我們在車庫屋頂下發現一個【麻雀的巢】，所以我爸爸決定等小鳥飛走後再清理那個角落。",
  "isHead": false,
  "level": null,
  "family": "sparrow"
 },
 {
  "word": "spectacle",
  "answer": "spectacle",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "奇觀；壯觀的場面",
  "en_def": "a very impressive show or sight",
  "sentence": "The fireworks over the river were an amazing {{BLANK}}, and people watched with their mouths open for twenty minutes.",
  "cn": "河面上的煙火是一場驚人的奇觀，人們張著嘴看了二十分鐘。",
  "cnMarked": "河面上的煙火是一場驚人的【奇觀】，人們張著嘴看了二十分鐘。",
  "isHead": true,
  "level": 6,
  "family": "spectacle"
 },
 {
  "word": "spectacles",
  "answer": "spectacles",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "眼鏡",
  "en_def": "glasses that you wear to see better (old-fashioned word)",
  "sentence": "My grandmother cannot read the newspaper without her {{BLANK}}, so she keeps them on a string around her neck.",
  "cn": "我奶奶沒有眼鏡就看不了報紙，所以她用繩子把眼鏡掛在脖子上。",
  "cnMarked": "我奶奶沒有【眼鏡】就看不了報紙，所以她用繩子把眼鏡掛在脖子上。",
  "isHead": false,
  "level": 6,
  "family": "spectacle"
 },
 {
  "word": "make a spectacle of oneself",
  "answer": "made a spectacle of himself",
  "nblanks": 5,
  "pos": "v.phr.",
  "cn_def": "當眾出醜",
  "en_def": "to behave in a silly way so that people stare at you",
  "sentence": "He drank too much at the wedding and {{BLANK}} by dancing on the table while everyone stared.",
  "cn": "他在婚禮上喝得太多，在桌上跳舞當眾出醜，大家都盯著他看。",
  "cnMarked": "他在婚禮上喝得太多，在桌上跳舞【當眾出醜】，大家都盯著他看。",
  "isHead": false,
  "level": null,
  "family": "spectacle"
 },
 {
  "word": "spectacular",
  "answer": "spectacular",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "壯觀的；精彩的",
  "en_def": "very impressive and exciting to look at",
  "sentence": "From the top of the mountain, we had a {{BLANK}} view of the whole valley with its rivers and tiny villages.",
  "cn": "從山頂上，我們看到整個山谷壯觀的景色，有河流和小小的村莊。",
  "cnMarked": "從山頂上，我們看到整個山谷【壯觀的】景色，有河流和小小的村莊。",
  "isHead": false,
  "level": 5,
  "family": "spectacle"
 },
 {
  "word": "spectator",
  "answer": "spectators",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "觀眾",
  "en_def": "a person who watches a game or event",
  "sentence": "More than fifty thousand {{BLANK}} filled the stadium, and the noise was so loud that the players could not hear the coach.",
  "cn": "超過五萬名觀眾擠滿體育場，噪音大到球員聽不到教練的聲音。",
  "cnMarked": "超過五萬名【觀眾】擠滿體育場，噪音大到球員聽不到教練的聲音。",
  "isHead": false,
  "level": 5,
  "family": "spectacle"
 },
 {
  "word": "spiral",
  "answer": "spiral",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "螺旋",
  "en_def": "a shape that winds around and around a center point",
  "sentence": "The shell of a snail grows in a perfect {{BLANK}}, and scientists say this shape helps the animal save space.",
  "cn": "蝸牛的殼以完美的螺旋生長，科學家說這種形狀有助於這種動物節省空間。",
  "cnMarked": "蝸牛的殼以完美的【螺旋】生長，科學家說這種形狀有助於這種動物節省空間。",
  "isHead": true,
  "level": 6,
  "family": "spiral"
 },
 {
  "word": "spiral",
  "answer": "spiral",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "螺旋形的",
  "en_def": "winding around a center in a curve",
  "sentence": "We climbed the narrow {{BLANK}} staircase inside the lighthouse, and I felt dizzy by the time we reached the top.",
  "cn": "我們爬上燈塔裡狹窄的螺旋形樓梯，到達頂端時我已經頭暈了。",
  "cnMarked": "我們爬上燈塔裡狹窄的【螺旋形】樓梯，到達頂端時我已經頭暈了。",
  "isHead": false,
  "level": 6,
  "family": "spiral"
 },
 {
  "word": "spiral",
  "answer": "spiral",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "盤旋；急速上升或下降",
  "en_def": "to move in a winding curve; to increase or decrease quickly",
  "sentence": "After the factory closed, prices in the town began to {{BLANK}} upward, and many families could no longer afford rent.",
  "cn": "工廠關閉後，鎮上的物價開始急速飆升，許多家庭再也付不起房租。",
  "cnMarked": "工廠關閉後，鎮上的物價開始【急速飆升】，許多家庭再也付不起房租。",
  "isHead": false,
  "level": 6,
  "family": "spiral"
 },
 {
  "word": "spiral out of control",
  "answer": "spiraled out of control",
  "nblanks": 4,
  "pos": "v.phr.",
  "cn_def": "失控惡化",
  "en_def": "to get worse quickly in a way that cannot be stopped",
  "sentence": "The small argument between the two brothers {{BLANK}}, and by dinner time they were not speaking to each other at all.",
  "cn": "兩兄弟之間的小爭吵失控惡化，到晚餐時間他們已經完全不跟對方說話了。",
  "cnMarked": "兩兄弟之間的小爭吵【失控惡化】，到晚餐時間他們已經完全不跟對方說話了。",
  "isHead": false,
  "level": null,
  "family": "spiral"
 },
 {
  "word": "splendor",
  "answer": "splendor",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "壯麗；輝煌",
  "en_def": "great beauty that impresses people",
  "sentence": "Visitors to the palace are amazed by the {{BLANK}} of its golden ceilings and the huge paintings on every wall.",
  "cn": "宮殿的參觀者對金色天花板和每面牆上巨幅畫作的壯麗感到驚嘆。",
  "cnMarked": "宮殿的參觀者對金色天花板和每面牆上巨幅畫作的【壯麗】感到驚嘆。",
  "isHead": true,
  "level": 6,
  "family": "splendor"
 },
 {
  "word": "splendid",
  "answer": "splendid",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "極好的；壯麗的",
  "en_def": "excellent; very beautiful and impressive",
  "sentence": "We had a {{BLANK}} time at the beach, and the weather stayed sunny and warm for the whole long weekend.",
  "cn": "我們在海邊度過了極美好的時光，整個長週末天氣都晴朗溫暖。",
  "cnMarked": "我們在海邊度過了【極美好的】時光，整個長週末天氣都晴朗溫暖。",
  "isHead": false,
  "level": 4,
  "family": "splendor"
 },
 {
  "word": "splendidly",
  "answer": "splendidly",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "極好地；壯麗地",
  "en_def": "extremely well; in a very impressive way",
  "sentence": "The school choir performed {{BLANK}} at the national contest, and the judges gave them the highest score of the day.",
  "cn": "學校合唱團在全國比賽中表演得極為出色，評審給了他們當天的最高分。",
  "cnMarked": "學校合唱團在全國比賽中表演得【極為出色】，評審給了他們當天的最高分。",
  "isHead": false,
  "level": null,
  "family": "splendor"
 },
 {
  "word": "in all its splendor",
  "answer": "in all its splendor",
  "nblanks": 4,
  "pos": "phr.",
  "cn_def": "盡顯其壯麗",
  "en_def": "showing all of its beauty",
  "sentence": "After the rain stopped, the rainbow appeared over the mountains {{BLANK}}, and everyone took out their phones.",
  "cn": "雨停之後，彩虹盡顯壯麗地出現在群山之上，每個人都拿出手機。",
  "cnMarked": "雨停之後，彩虹【盡顯壯麗地】出現在群山之上，每個人都拿出手機。",
  "isHead": false,
  "level": null,
  "family": "splendor"
 },
 {
  "word": "spokesperson",
  "answer": "spokesperson",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "發言人",
  "en_def": "a person who speaks for a group or company",
  "sentence": "A {{BLANK}} for the airline said that all passengers would receive a full refund because of the three-day delay.",
  "cn": "航空公司的發言人表示，由於延誤三天，所有乘客都會獲得全額退款。",
  "cnMarked": "航空公司的【發言人】表示，由於延誤三天，所有乘客都會獲得全額退款。",
  "isHead": true,
  "level": 6,
  "family": "spokesperson"
 },
 {
  "word": "spokesman",
  "answer": "spokesman",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "（男）發言人",
  "en_def": "a man who speaks for a group or company",
  "sentence": "The police {{BLANK}} told reporters that the missing boy had been found safe at his grandmother's house.",
  "cn": "警方發言人告訴記者，失蹤的男孩已在他奶奶家被安全找到。",
  "cnMarked": "警方【發言人】告訴記者，失蹤的男孩已在他奶奶家被安全找到。",
  "isHead": false,
  "level": 6,
  "family": "spokesperson"
 },
 {
  "word": "spokeswoman",
  "answer": "spokeswoman",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "（女）發言人",
  "en_def": "a woman who speaks for a group or company",
  "sentence": "The company {{BLANK}} refused to answer questions about the accident until the investigation was finished.",
  "cn": "公司女發言人拒絕回答有關事故的問題，直到調查結束。",
  "cnMarked": "公司【女發言人】拒絕回答有關事故的問題，直到調查結束。",
  "isHead": false,
  "level": 6,
  "family": "spokesperson"
 },
 {
  "word": "speak for",
  "answer": "speak for",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "代表…發言",
  "en_def": "to express the opinions of a person or group",
  "sentence": "I think I {{BLANK}} the whole class when I say that we need more time to prepare for the final exam.",
  "cn": "我想我代表全班發言：我們需要更多時間準備期末考。",
  "cnMarked": "我想我【代表】全班【發言】：我們需要更多時間準備期末考。",
  "isHead": false,
  "level": null,
  "family": "spokesperson"
 },
 {
  "word": "spontaneous",
  "answer": "spontaneous",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "自發的；一時衝動的",
  "en_def": "done suddenly without planning",
  "sentence": "Our trip to the night market was completely {{BLANK}}; we were studying one minute and on the bus the next.",
  "cn": "我們去夜市的行程完全是一時衝動的；前一分鐘還在讀書，下一分鐘就在公車上了。",
  "cnMarked": "我們去夜市的行程完全是【一時衝動的】；前一分鐘還在讀書，下一分鐘就在公車上了。",
  "isHead": true,
  "level": 6,
  "family": "spontaneous"
 },
 {
  "word": "spontaneously",
  "answer": "spontaneously",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "自發地；自然而然地",
  "en_def": "suddenly and without planning",
  "sentence": "When the singer walked onto the stage, the whole audience {{BLANK}} stood up and started to clap and cheer.",
  "cn": "當歌手走上舞台時，全場觀眾自發地起立，開始鼓掌歡呼。",
  "cnMarked": "當歌手走上舞台時，全場觀眾【自發地】起立，開始鼓掌歡呼。",
  "isHead": false,
  "level": null,
  "family": "spontaneous"
 },
 {
  "word": "spontaneity",
  "answer": "spontaneity",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "自發性；隨興",
  "en_def": "the quality of doing things suddenly without planning",
  "sentence": "I love my best friend's {{BLANK}}; she once called me at midnight and said we should drive to the beach to see the sunrise.",
  "cn": "我喜歡我最好朋友的隨興；她曾經半夜打電話給我，說我們應該開車去海邊看日出。",
  "cnMarked": "我喜歡我最好朋友的【隨興】；她曾經半夜打電話給我，說我們應該開車去海邊看日出。",
  "isHead": false,
  "level": null,
  "family": "spontaneous"
 },
 {
  "word": "sportsman",
  "answer": "sportsman",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "男運動員；運動家",
  "en_def": "a man who plays sports, especially one who plays fairly",
  "sentence": "A true {{BLANK}} shakes hands with the other team after the game, even when his own team has just lost badly.",
  "cn": "真正的運動家在比賽後會和對方球隊握手，即使自己的隊伍剛剛慘敗。",
  "cnMarked": "真正的【運動家】在比賽後會和對方球隊握手，即使自己的隊伍剛剛慘敗。",
  "isHead": true,
  "level": 6,
  "family": "sportsman"
 },
 {
  "word": "sportswoman",
  "answer": "sportswoman",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "女運動員",
  "en_def": "a woman who plays sports",
  "sentence": "The young {{BLANK}} won three gold medals at the Asian Games and became a hero to girls all over the country.",
  "cn": "這位年輕的女運動員在亞運會上贏得三面金牌，成為全國女孩的英雄。",
  "cnMarked": "這位年輕的【女運動員】在亞運會上贏得三面金牌，成為全國女孩的英雄。",
  "isHead": false,
  "level": 6,
  "family": "sportsman"
 },
 {
  "word": "sportsmanship",
  "answer": "sportsmanship",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "運動精神",
  "en_def": "fair and polite behavior when playing sports",
  "sentence": "The coach cares more about {{BLANK}} than winning, so he praised the boy who helped an injured opponent off the field.",
  "cn": "教練重視運動精神多過勝利，所以他讚揚那個幫助受傷對手離場的男孩。",
  "cnMarked": "教練重視【運動精神】多過勝利，所以他讚揚那個幫助受傷對手離場的男孩。",
  "isHead": false,
  "level": 6,
  "family": "sportsman"
 },
 {
  "word": "sportsmanlike",
  "answer": "sportsmanlike",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "有運動精神的",
  "en_def": "fair and polite in the way you play sports",
  "sentence": "It was not very {{BLANK}} of the players to argue with the referee for ten minutes after every single call.",
  "cn": "球員們在每次判決後都跟裁判爭論十分鐘，這不太有運動精神。",
  "cnMarked": "球員們在每次判決後都跟裁判爭論十分鐘，這不太【有運動精神】。",
  "isHead": false,
  "level": null,
  "family": "sportsman"
 }
];
const MCQS = [
 {
  "q": "Jenny is going to run in the school race this Saturday, but her old shoes hurt her feet. Her mother is taking her to the mall to buy a new pair of ______ tonight.",
  "options": [
   "sneakers",
   "spectacles",
   "spokesperson",
   "sparrow"
  ],
  "answer": 0,
  "vocabIndex": 0
 },
 {
  "q": "Tom read his sister's messages while she was in the shower and then pretended he knew nothing. She was angry and told him it was a very ______ thing to do.",
  "options": [
   "solemn",
   "sneaky",
   "spontaneous",
   "sociable"
  ],
  "answer": 1,
  "vocabIndex": 3
 },
 {
  "q": "Every time my brother walks past the flowers in the garden, his nose starts to itch. He will usually ______ five or six times before he can stop.",
  "options": [
   "soothe",
   "socialize",
   "sneeze",
   "snore"
  ],
  "answer": 2,
  "vocabIndex": 8
 },
 {
  "q": "My father makes a loud noise through his nose every night when he sleeps. My mother cannot rest because he will ______ so loudly that the walls almost shake.",
  "options": [
   "spiral",
   "sneeze",
   "span",
   "snore"
  ],
  "answer": 3,
  "vocabIndex": 11
 },
 {
  "q": "Amy loves parties and can talk to anyone she meets for hours. Her friends all say she is the most ______ person in the whole class.",
  "options": [
   "solitary",
   "sociable",
   "sovereign",
   "sorrowful"
  ],
  "answer": 1,
  "vocabIndex": 14
 },
 {
  "q": "In this political system, the government owns the big factories and shares the money equally among all the people. Our history teacher said this idea is called ______.",
  "options": [
   "solitude",
   "sociology",
   "splendor",
   "socialism"
  ],
  "answer": 3,
  "vocabIndex": 18
 },
 {
  "q": "Mr. Lee believes that the government should give everyone free doctors and free schools for their children. A person who holds this view is often called a ______.",
  "options": [
   "sportsman",
   "spokesperson",
   "socialist",
   "sparrow"
  ],
  "answer": 2,
  "vocabIndex": 19
 },
 {
  "q": "After moving to a new city, Peter did not know anyone at all. His doctor told him to join a club so that he could ______ and make some friends.",
  "options": [
   "sneeze",
   "socialize",
   "snore",
   "soothe"
  ],
  "answer": 1,
  "vocabIndex": 21
 },
 {
  "q": "Linda wants to understand why some neighborhoods are rich while others stay poor for many years. For this reason, she decided to study ______ at the university.",
  "options": [
   "sociology",
   "socialism",
   "solidarity",
   "sovereignty"
  ],
  "answer": 0,
  "vocabIndex": 23
 },
 {
  "q": "Nobody laughed or talked during the ceremony for the soldiers who died in the war. Everyone stood in ______ silence while the flag was slowly lowered.",
  "options": [
   "spiral",
   "splendid",
   "solemn",
   "sneaky"
  ],
  "answer": 2,
  "vocabIndex": 26
 },
 {
  "q": "When the factory cut everyone's pay, the workers decided to stand together and refused to go back. Their strong ______ finally made the boss change his mind.",
  "options": [
   "solidarity",
   "sorrow",
   "spontaneity",
   "spectacle"
  ],
  "answer": 0,
  "vocabIndex": 29
 },
 {
  "q": "The old painter lives alone on a small island and talks to very few people. He says a ______ life gives him the quiet he needs to work.",
  "options": [
   "sportsmanlike",
   "spectacular",
   "sociable",
   "solitary"
  ],
  "answer": 3,
  "vocabIndex": 33
 },
 {
  "q": "After a long, noisy week at the office, Mark drives to a quiet lake every weekend. He says the ______ there helps him think clearly again.",
  "options": [
   "society",
   "solitude",
   "sneeze",
   "spaceship"
  ],
  "answer": 1,
  "vocabIndex": 34
 },
 {
  "q": "The baby cried for almost an hour and nothing seemed to help. Finally, the father put on some soft music to ______ her, and she slowly fell asleep.",
  "options": [
   "soothe",
   "span",
   "snore",
   "sneak"
  ],
  "answer": 0,
  "vocabIndex": 37
 },
 {
  "q": "The little girl's dog died last week, and she has not smiled since then. Her teacher noticed the ______ look on her face during class today.",
  "options": [
   "social",
   "soothing",
   "sneaky",
   "sorrowful"
  ],
  "answer": 3,
  "vocabIndex": 40
 },
 {
  "q": "A country that makes its own laws and is not controlled by any other nation is called ______. Other countries should respect its right to decide things for itself.",
  "options": [
   "spontaneous",
   "sovereign",
   "sociological",
   "solitary"
  ],
  "answer": 1,
  "vocabIndex": 44
 },
 {
  "q": "Scientists sent a new machine into space to take pictures of Mars. The ______ will travel for seven months before it finally reaches the red planet.",
  "options": [
   "spokesman",
   "spectator",
   "spacecraft",
   "sportswoman"
  ],
  "answer": 2,
  "vocabIndex": 47
 },
 {
  "q": "The famous actress made her first movie at the age of twenty and her last one at eighty. Her career covered a ______ of sixty years.",
  "options": [
   "sparrow",
   "spiral",
   "spectacle",
   "span"
  ],
  "answer": 3,
  "vocabIndex": 51
 },
 {
  "q": "A small brown bird landed on our table at the outdoor café and picked up some bread. My little sister was so happy to see a ______ so close.",
  "options": [
   "sportsman",
   "socialist",
   "sparrow",
   "spokesperson"
  ],
  "answer": 2,
  "vocabIndex": 55
 },
 {
  "q": "Thousands of colorful fireworks lit up the sky above the river on New Year's Eve. It was a wonderful ______ that nobody in the city will forget.",
  "options": [
   "spectator",
   "spectacle",
   "sociology",
   "solitude"
  ],
  "answer": 1,
  "vocabIndex": 58
 },
 {
  "q": "The stairs inside the old lighthouse go around and around a center pole all the way to the top. Climbing the ______ steps made me feel dizzy.",
  "options": [
   "spiral",
   "sorrowful",
   "solemn",
   "sovereign"
  ],
  "answer": 0,
  "vocabIndex": 63
 },
 {
  "q": "The old palace has gold ceilings, huge paintings, and shining marble floors in every single room. Visitors are always amazed by the ______ of the building.",
  "options": [
   "sneeze",
   "snoring",
   "spontaneity",
   "splendor"
  ],
  "answer": 3,
  "vocabIndex": 67
 },
 {
  "q": "The company did not want its boss to answer questions from reporters directly. Instead, a ______ read a short statement about the accident to the press.",
  "options": [
   "spectator",
   "spokesperson",
   "sparrow",
   "sportsman"
  ],
  "answer": 1,
  "vocabIndex": 71
 },
 {
  "q": "We did not plan to go to the beach at all yesterday. The trip was completely ______; one minute we were at home, and the next we were on the bus.",
  "options": [
   "spontaneous",
   "solemn",
   "solitary",
   "spiral"
  ],
  "answer": 0,
  "vocabIndex": 75
 },
 {
  "q": "Although his team lost the final, Kevin walked over to shake hands with every player on the other side. Everyone agreed he is a true ______.",
  "options": [
   "spectator",
   "socialist",
   "sportsman",
   "spokesman"
  ],
  "answer": 2,
  "vocabIndex": 78
 },
 {
  "q": "More than fifty thousand people filled the stadium to watch the final game. Every ______ stood up and cheered when the home team scored the winning goal.",
  "options": [
   "sportsmanship",
   "spectator",
   "spokeswoman",
   "sociologist"
  ],
  "answer": 1,
  "vocabIndex": 62
 },
 {
  "q": "The two boys did not have tickets, so they tried to walk quietly through the back door of the theater. The manager saw them trying to ______ in and stopped them.",
  "options": [
   "sneak",
   "snore",
   "span",
   "sneeze"
  ],
  "answer": 0,
  "vocabIndex": 4
 },
 {
  "q": "The view from the top of the mountain was amazing, with rivers and tiny villages far below us. It was the most ______ sight I have ever seen.",
  "options": [
   "solemn",
   "sorrowful",
   "sneaky",
   "spectacular"
  ],
  "answer": 3,
  "vocabIndex": 61
 },
 {
  "q": "The young runner won three gold medals at the Asian Games last month. Now this ______ is a hero to thousands of girls who want to be like her.",
  "options": [
   "spokesperson",
   "socialist",
   "sportswoman",
   "spectacle"
  ],
  "answer": 2,
  "vocabIndex": 79
 },
 {
  "q": "The coach does not care only about winning. He praised the boy who stopped running to help an injured player, saying that true ______ matters more than any medal.",
  "options": [
   "sportsmanship",
   "splendor",
   "sovereignty",
   "sociology"
  ],
  "answer": 0,
  "vocabIndex": 80
 }
];
const LOOKUP = {};
VOCAB.forEach(v => { const key = v.word.toLowerCase(); const sense = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def };
  if (LOOKUP[key]) LOOKUP[key].combined.push(sense); else LOOKUP[key] = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def, combined: [sense] }; });
const EXTRA_GLOSSES = {};