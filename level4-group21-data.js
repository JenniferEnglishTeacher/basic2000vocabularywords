// 學測6000字 Level 4 Group 21 (identification-infant) — word-family edition
const QUIZ_CONFIG = {
  groupName: "6000字 L4 Group 21 - identification – infant (word family)",
  gasEndpoint: "https://script.google.com/macros/s/AKfycbzLUqP-nauSjmiHfPXiK3NAV65tYdjAlwqip38TcGdTKqeR_CijuzHYxZDC-sjtRVrr_w/exec"
};
const VOCAB = [
 {
  "word": "identification",
  "answer": "identification",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "身分證明；辨認",
  "en_def": "proof of who you are, such as a passport; the act of recognizing someone or something",
  "sentence": "You need to show some form of {{BLANK}}, such as a passport or a student card, before you can pick up the package.",
  "cn": "你必須出示某種身分證明，例如護照或學生證，才能領取包裹。",
  "cnMarked": "你必須出示某種【身分證明】，例如護照或學生證，才能領取包裹。",
  "isHead": true,
  "level": 4,
  "family": "identification"
 },
 {
  "word": "identify",
  "answer": "identify",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "辨認；確認",
  "en_def": "to recognize someone or something and say who or what they are",
  "sentence": "The police asked the shop owner to {{BLANK}} the thief from a group of photos, and she picked him out at once.",
  "cn": "警察請店主從一組照片中指認小偷，她立刻就認出他了。",
  "cnMarked": "警察請店主從一組照片中【指認】小偷，她立刻就認出他了。",
  "isHead": true,
  "level": 4,
  "family": "identification"
 },
 {
  "word": "ID card",
  "answer": "ID card",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "身分證",
  "en_def": "a small official card that proves who you are",
  "sentence": "Everyone in Taiwan must carry an {{BLANK}} after the age of fourteen, and you need it to open a bank account.",
  "cn": "在台灣，每個人年滿十四歲後都必須持有身分證，開銀行帳戶也需要它。",
  "cnMarked": "在台灣，每個人年滿十四歲後都必須持有【身分證】，開銀行帳戶也需要它。",
  "isHead": false,
  "level": null,
  "family": "identification"
 },
 {
  "word": "identify with",
  "answer": "identify with",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "認同；對…產生共鳴",
  "en_def": "to feel that you understand and share the feelings of someone",
  "sentence": "Many teenagers {{BLANK}} the main character of the novel because she also feels lonely and misunderstood at school.",
  "cn": "許多青少年認同小說的主角，因為她在學校也感到孤單、不被理解。",
  "cnMarked": "許多青少年【認同】小說的主角，因為她在學校也感到孤單、不被理解。",
  "isHead": false,
  "level": null,
  "family": "identification"
 },
 {
  "word": "identifiable",
  "answer": "identifiable",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "可辨認的",
  "en_def": "able to be recognized",
  "sentence": "The school uniform makes students easily {{BLANK}} on the street, so shop owners know which school they come from.",
  "cn": "校服讓學生在街上很容易被辨認出來，所以店家知道他們來自哪所學校。",
  "cnMarked": "校服讓學生在街上很容易被【辨認】出來，所以店家知道他們來自哪所學校。",
  "isHead": false,
  "level": null,
  "family": "identification"
 },
 {
  "word": "idiom",
  "answer": "idiom",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "成語；慣用語",
  "en_def": "a group of words whose meaning is different from the meanings of the separate words",
  "sentence": "\"It is raining cats and dogs\" is an English {{BLANK}} that means it is raining very heavily, not that animals are falling.",
  "cn": "「It is raining cats and dogs」是一個英文成語，意思是雨下得很大，而不是動物從天上掉下來。",
  "cnMarked": "「It is raining cats and dogs」是一個英文【成語】，意思是雨下得很大，而不是動物從天上掉下來。",
  "isHead": true,
  "level": 4,
  "family": "idiom"
 },
 {
  "word": "idiomatic",
  "answer": "idiomatic",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "慣用的；道地的",
  "en_def": "using words in a natural way that sounds like a native speaker",
  "sentence": "After living in Australia for five years, my cousin speaks very {{BLANK}} English and even tells jokes like a local.",
  "cn": "在澳洲住了五年後，我表哥說著非常道地的英文，甚至能像當地人一樣講笑話。",
  "cnMarked": "在澳洲住了五年後，我表哥說著非常【道地的】英文，甚至能像當地人一樣講笑話。",
  "isHead": false,
  "level": null,
  "family": "idiom"
 },
 {
  "word": "idiomatic expression",
  "answer": "idiomatic expression",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "慣用語",
  "en_def": "a phrase with a special meaning that native speakers often use",
  "sentence": "\"Break a leg\" is an {{BLANK}} that actors use to wish each other good luck before a show.",
  "cn": "「Break a leg」是演員在演出前用來互相祝好運的慣用語。",
  "cnMarked": "「Break a leg」是演員在演出前用來互相祝好運的【慣用語】。",
  "isHead": false,
  "level": null,
  "family": "idiom"
 },
 {
  "word": "idle",
  "answer": "idle",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "閒置的；懶散的",
  "en_def": "not working or being used; lazy",
  "sentence": "The old factory has stood {{BLANK}} for ten years, and now the city wants to turn it into a park with a museum.",
  "cn": "這座舊工廠已經閒置十年，現在市政府想把它改成有博物館的公園。",
  "cnMarked": "這座舊工廠已經【閒置】十年，現在市政府想把它改成有博物館的公園。",
  "isHead": true,
  "level": 4,
  "family": "idle"
 },
 {
  "word": "idle",
  "answer": "idle",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "閒混；（引擎）空轉",
  "en_def": "to spend time doing nothing; (of an engine) to run slowly without moving",
  "sentence": "Please do not let the car engine {{BLANK}} in the parking lot, because it wastes gas and makes the air dirty.",
  "cn": "請不要讓汽車引擎在停車場空轉，因為這會浪費汽油又污染空氣。",
  "cnMarked": "請不要讓汽車引擎在停車場【空轉】，因為這會浪費汽油又污染空氣。",
  "isHead": false,
  "level": 4,
  "family": "idle"
 },
 {
  "word": "idle away",
  "answer": "idled away",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "虛度（時光）",
  "en_def": "to waste time doing nothing useful",
  "sentence": "Instead of studying for the test, my brother {{BLANK}} the whole afternoon playing games on his phone.",
  "cn": "我弟弟沒有準備考試，反而整個下午都用手機玩遊戲虛度了。",
  "cnMarked": "我弟弟沒有準備考試，反而整個下午都用手機玩遊戲【虛度】了。",
  "isHead": false,
  "level": null,
  "family": "idle"
 },
 {
  "word": "idly",
  "answer": "idly",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "無所事事地；懶散地",
  "en_def": "without doing anything; without a real purpose",
  "sentence": "We sat {{BLANK}} by the river for an hour, watching the boats go by and talking about nothing in particular.",
  "cn": "我們懶散地在河邊坐了一個小時，看著船隻經過，隨意聊天。",
  "cnMarked": "我們【懶散地】在河邊坐了一個小時，看著船隻經過，隨意聊天。",
  "isHead": false,
  "level": null,
  "family": "idle"
 },
 {
  "word": "idleness",
  "answer": "idleness",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "閒散；無所事事",
  "en_def": "the state of doing nothing or not working",
  "sentence": "After a week of {{BLANK}} during the holiday, I was actually happy to go back to school and see my friends again.",
  "cn": "假期無所事事了一個星期之後，我其實很高興回到學校再見到朋友。",
  "cnMarked": "假期【無所事事】了一個星期之後，我其實很高興回到學校再見到朋友。",
  "isHead": false,
  "level": null,
  "family": "idle"
 },
 {
  "word": "idol",
  "answer": "idol",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "偶像",
  "en_def": "a famous person who is loved and admired very much; a statue that people pray to",
  "sentence": "Thousands of fans waited outside the airport for hours just to see their {{BLANK}} walk past for a few seconds.",
  "cn": "數千名粉絲在機場外等了好幾個小時，只為了看他們的偶像走過幾秒鐘。",
  "cnMarked": "數千名粉絲在機場外等了好幾個小時，只為了看他們的【偶像】走過幾秒鐘。",
  "isHead": true,
  "level": 4,
  "family": "idol"
 },
 {
  "word": "pop idol",
  "answer": "pop idol",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "流行偶像",
  "en_def": "a very popular singer, especially one loved by young people",
  "sentence": "My sister dreams of becoming a {{BLANK}}, so she practices singing and dancing in front of the mirror every night.",
  "cn": "我妹妹夢想成為流行偶像，所以她每晚都在鏡子前練習唱歌和跳舞。",
  "cnMarked": "我妹妹夢想成為【流行偶像】，所以她每晚都在鏡子前練習唱歌和跳舞。",
  "isHead": false,
  "level": null,
  "family": "idol"
 },
 {
  "word": "idolize",
  "answer": "idolize",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "崇拜",
  "en_def": "to love and admire someone very much, often too much",
  "sentence": "Many young players {{BLANK}} the famous basketball star, and they copy his hairstyle and even the way he walks.",
  "cn": "許多年輕球員崇拜這位著名的籃球明星，他們模仿他的髮型，甚至走路的方式。",
  "cnMarked": "許多年輕球員【崇拜】這位著名的籃球明星，他們模仿他的髮型，甚至走路的方式。",
  "isHead": false,
  "level": null,
  "family": "idol"
 },
 {
  "word": "ignorance",
  "answer": "ignorance",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "無知",
  "en_def": "lack of knowledge or information about something",
  "sentence": "Many people throw batteries into the normal trash out of {{BLANK}}, not knowing that they can poison the soil and water.",
  "cn": "許多人因為無知把電池丟進一般垃圾，不知道電池會毒害土壤和水。",
  "cnMarked": "許多人因為【無知】把電池丟進一般垃圾，不知道電池會毒害土壤和水。",
  "isHead": true,
  "level": 4,
  "family": "ignorance"
 },
 {
  "word": "ignorant",
  "answer": "ignorant",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "無知的；不知道的",
  "en_def": "not knowing about something; not educated",
  "sentence": "I was completely {{BLANK}} about the history of my own city until our teacher took us on a walking tour last month.",
  "cn": "直到上個月老師帶我們徒步導覽，我對自己城市的歷史一直完全一無所知。",
  "cnMarked": "直到上個月老師帶我們徒步導覽，我對自己城市的歷史一直完全【一無所知】。",
  "isHead": true,
  "level": 4,
  "family": "ignorance"
 },
 {
  "word": "ignore",
  "answer": "ignore",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "忽視；不理會",
  "en_def": "to pay no attention to someone or something",
  "sentence": "If your classmates say unkind things, the best thing is to {{BLANK}} them and tell a teacher instead of fighting back.",
  "cn": "如果同學說不友善的話，最好的做法是不理會他們並告訴老師，而不是反擊。",
  "cnMarked": "如果同學說不友善的話，最好的做法是【不理會】他們並告訴老師，而不是反擊。",
  "isHead": false,
  "level": 2,
  "family": "ignorance"
 },
 {
  "word": "be ignorant of",
  "answer": "are ignorant of",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "不知道…",
  "en_def": "to not know about something",
  "sentence": "Most tourists {{BLANK}} the local custom, so they wear shoes inside the temple without realizing it is rude.",
  "cn": "大多數遊客不知道當地的習俗，所以他們穿著鞋子進入寺廟，沒意識到這很失禮。",
  "cnMarked": "大多數遊客【不知道】當地的習俗，所以他們穿著鞋子進入寺廟，沒意識到這很失禮。",
  "isHead": false,
  "level": null,
  "family": "ignorance"
 },
 {
  "word": "in ignorance of",
  "answer": "in ignorance of",
  "nblanks": 3,
  "pos": "prep.",
  "cn_def": "不知道…；不了解…",
  "en_def": "without knowing about",
  "sentence": "The family continued their picnic {{BLANK}} the typhoon warning, because nobody had checked the news that morning.",
  "cn": "這家人不知道颱風警報，繼續他們的野餐，因為那天早上沒有人看新聞。",
  "cnMarked": "這家人【不知道】颱風警報，繼續他們的野餐，因為那天早上沒有人看新聞。",
  "isHead": false,
  "level": null,
  "family": "ignorance"
 },
 {
  "word": "illustrate",
  "answer": "illustrate",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "說明；舉例說明；為…畫插圖",
  "en_def": "to explain something by giving examples; to draw pictures for a book",
  "sentence": "To {{BLANK}} how plants drink water, the teacher put a white flower in a glass of blue water and let us watch it change.",
  "cn": "為了說明植物如何吸水，老師把一朵白花放進一杯藍色的水裡，讓我們觀察它的變化。",
  "cnMarked": "為了【說明】植物如何吸水，老師把一朵白花放進一杯藍色的水裡，讓我們觀察它的變化。",
  "isHead": true,
  "level": 4,
  "family": "illustrate"
 },
 {
  "word": "illustration",
  "answer": "illustrations",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "插圖；例證",
  "en_def": "a picture in a book; an example that explains something",
  "sentence": "The children's book is full of colorful {{BLANK}}, so even kids who cannot read yet enjoy looking at every page.",
  "cn": "這本童書充滿了色彩豐富的插圖，所以連還不識字的孩子也喜歡看每一頁。",
  "cnMarked": "這本童書充滿了色彩豐富的【插圖】，所以連還不識字的孩子也喜歡看每一頁。",
  "isHead": true,
  "level": 4,
  "family": "illustrate"
 },
 {
  "word": "illustrator",
  "answer": "illustrator",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "插畫家",
  "en_def": "a person who draws pictures for books or magazines",
  "sentence": "Jimmy Liao is a famous Taiwanese {{BLANK}} whose gentle pictures of lonely children have been loved by readers around the world.",
  "cn": "幾米是著名的台灣插畫家，他筆下孤單孩子的溫柔圖畫深受世界各地讀者喜愛。",
  "cnMarked": "幾米是著名的台灣【插畫家】，他筆下孤單孩子的溫柔圖畫深受世界各地讀者喜愛。",
  "isHead": false,
  "level": null,
  "family": "illustrate"
 },
 {
  "word": "illustrated",
  "answer": "illustrated",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "有插圖的",
  "en_def": "having pictures in it",
  "sentence": "My grandfather gave me an {{BLANK}} book about birds, and I spent the whole weekend trying to find them in the park.",
  "cn": "爺爺送我一本有插圖的鳥類書籍，我整個週末都在公園裡試著找出那些鳥。",
  "cnMarked": "爺爺送我一本【有插圖的】鳥類書籍，我整個週末都在公園裡試著找出那些鳥。",
  "isHead": false,
  "level": null,
  "family": "illustrate"
 },
 {
  "word": "imaginary",
  "answer": "imaginary",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "想像的；虛構的",
  "en_def": "existing only in your mind, not real",
  "sentence": "When my little brother was four, he had an {{BLANK}} friend named Bobo who always sat next to him at dinner.",
  "cn": "我弟弟四歲時有一個名叫波波的想像朋友，吃晚餐時總是坐在他旁邊。",
  "cnMarked": "我弟弟四歲時有一個名叫波波的【想像】朋友，吃晚餐時總是坐在他旁邊。",
  "isHead": true,
  "level": 4,
  "family": "imaginary"
 },
 {
  "word": "imaginative",
  "answer": "imaginative",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "富有想像力的",
  "en_def": "having or showing new and interesting ideas",
  "sentence": "The art teacher praised Lily for her {{BLANK}} painting, which showed a city floating in the sky above a forest of giant mushrooms.",
  "cn": "美術老師稱讚莉莉富有想像力的畫作，畫中一座城市漂浮在巨型蘑菇森林上方的天空中。",
  "cnMarked": "美術老師稱讚莉莉【富有想像力的】畫作，畫中一座城市漂浮在巨型蘑菇森林上方的天空中。",
  "isHead": true,
  "level": 4,
  "family": "imaginary"
 },
 {
  "word": "imagine",
  "answer": "imagine",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "想像",
  "en_def": "to form a picture or idea of something in your mind",
  "sentence": "Close your eyes and {{BLANK}} that you are lying on a warm beach, listening to the waves and feeling the soft sand.",
  "cn": "閉上眼睛，想像你正躺在溫暖的海灘上，聽著海浪，感受柔軟的沙子。",
  "cnMarked": "閉上眼睛，【想像】你正躺在溫暖的海灘上，聽著海浪，感受柔軟的沙子。",
  "isHead": false,
  "level": 2,
  "family": "imaginary"
 },
 {
  "word": "imagination",
  "answer": "imagination",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "想像力",
  "en_def": "the ability to form pictures and ideas in your mind",
  "sentence": "Writing stories is a great way for children to use their {{BLANK}}, and it also helps them learn new words.",
  "cn": "寫故事是孩子運用想像力的好方法，也能幫助他們學習新單字。",
  "cnMarked": "寫故事是孩子運用【想像力】的好方法，也能幫助他們學習新單字。",
  "isHead": false,
  "level": 3,
  "family": "imaginary"
 },
 {
  "word": "imaginary friend",
  "answer": "imaginary friend",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "想像中的朋友",
  "en_def": "a friend that a child invents in their mind",
  "sentence": "Having an {{BLANK}} is normal for young children, and doctors say it may even help them learn to talk and share.",
  "cn": "有想像中的朋友對幼童來說很正常，醫生說這甚至可能幫助他們學習說話和分享。",
  "cnMarked": "有【想像中的朋友】對幼童來說很正常，醫生說這甚至可能幫助他們學習說話和分享。",
  "isHead": false,
  "level": null,
  "family": "imaginary"
 },
 {
  "word": "use one's imagination",
  "answer": "use our imagination",
  "nblanks": 3,
  "pos": "v.phr.",
  "cn_def": "發揮想像力",
  "en_def": "to think of new ideas instead of copying",
  "sentence": "The teacher told us to {{BLANK}} and design a machine that could help old people carry heavy bags up the stairs.",
  "cn": "老師要我們發揮想像力，設計一台能幫助老人提重物上樓的機器。",
  "cnMarked": "老師要我們【發揮想像力】，設計一台能幫助老人提重物上樓的機器。",
  "isHead": false,
  "level": null,
  "family": "imaginary"
 },
 {
  "word": "imitate",
  "answer": "imitate",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "模仿",
  "en_def": "to copy the way someone speaks or acts",
  "sentence": "Babies learn to talk by trying to {{BLANK}} the sounds and words that they hear from their parents every day.",
  "cn": "嬰兒透過試著模仿每天從父母那裡聽到的聲音和字詞來學說話。",
  "cnMarked": "嬰兒透過試著【模仿】每天從父母那裡聽到的聲音和字詞來學說話。",
  "isHead": true,
  "level": 4,
  "family": "imitate"
 },
 {
  "word": "imitation",
  "answer": "imitation",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "仿製品；模仿",
  "en_def": "a copy of something, often not as good as the real thing; the act of copying",
  "sentence": "The watch looked expensive, but it was only a cheap {{BLANK}} that stopped working after two weeks.",
  "cn": "這只手錶看起來很貴，但它只是個便宜的仿製品，兩個星期後就不走了。",
  "cnMarked": "這只手錶看起來很貴，但它只是個便宜的【仿製品】，兩個星期後就不走了。",
  "isHead": true,
  "level": 4,
  "family": "imitate"
 },
 {
  "word": "in imitation of",
  "answer": "in imitation of",
  "nblanks": 3,
  "pos": "prep.",
  "cn_def": "模仿…",
  "en_def": "copying the style or actions of",
  "sentence": "The new shopping mall was built {{BLANK}} an old European town, with narrow streets and small colorful houses.",
  "cn": "這座新購物中心是模仿歐洲古鎮建造的，有狹窄的街道和色彩繽紛的小房子。",
  "cnMarked": "這座新購物中心是【模仿】歐洲古鎮建造的，有狹窄的街道和色彩繽紛的小房子。",
  "isHead": false,
  "level": null,
  "family": "imitate"
 },
 {
  "word": "imitation leather",
  "answer": "imitation leather",
  "nblanks": 2,
  "pos": "n.phr.",
  "cn_def": "仿皮；人造皮",
  "en_def": "a material made to look like leather",
  "sentence": "This bag is made of {{BLANK}}, so it costs much less than a real one but looks almost the same from a distance.",
  "cn": "這個包包是仿皮做的，所以價格比真皮便宜很多，但從遠處看幾乎一樣。",
  "cnMarked": "這個包包是【仿皮】做的，所以價格比真皮便宜很多，但從遠處看幾乎一樣。",
  "isHead": false,
  "level": null,
  "family": "imitate"
 },
 {
  "word": "immigrant",
  "answer": "immigrants",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "移民（移入者）",
  "en_def": "a person who comes to live in a foreign country",
  "sentence": "Many of the workers at the restaurant are {{BLANK}} from Vietnam, and they cook the most delicious noodle soup in town.",
  "cn": "餐廳裡的許多員工是來自越南的移民，他們煮的湯麵是鎮上最好吃的。",
  "cnMarked": "餐廳裡的許多員工是來自越南的【移民】，他們煮的湯麵是鎮上最好吃的。",
  "isHead": true,
  "level": 4,
  "family": "immigrant"
 },
 {
  "word": "immigrate",
  "answer": "immigrate",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "移民（移入）",
  "en_def": "to come into a foreign country in order to live there",
  "sentence": "My grandparents decided to {{BLANK}} to Canada in 1990 because they wanted their children to study in English.",
  "cn": "我的祖父母在1990年決定移民到加拿大，因為他們希望孩子用英文學習。",
  "cnMarked": "我的祖父母在1990年決定【移民】到加拿大，因為他們希望孩子用英文學習。",
  "isHead": true,
  "level": 4,
  "family": "immigrant"
 },
 {
  "word": "immigration",
  "answer": "immigration",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "移民；入境檢查處",
  "en_def": "the process of coming to live in a foreign country; the office at an airport that checks passports",
  "sentence": "After the long flight, we waited forty minutes at {{BLANK}} while the officer checked our passports and asked a few questions.",
  "cn": "長途飛行之後，我們在入境檢查處等了四十分鐘，官員檢查我們的護照並問了幾個問題。",
  "cnMarked": "長途飛行之後，我們在【入境檢查處】等了四十分鐘，官員檢查我們的護照並問了幾個問題。",
  "isHead": true,
  "level": 4,
  "family": "immigrant"
 },
 {
  "word": "immigrate to",
  "answer": "immigrate to",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "移民到…",
  "en_def": "to move to a country in order to live there",
  "sentence": "Thousands of people {{BLANK}} Australia every year, hoping to find better jobs and a quieter life near the sea.",
  "cn": "每年有數千人移民到澳洲，希望找到更好的工作和海邊更安靜的生活。",
  "cnMarked": "每年有數千人【移民到】澳洲，希望找到更好的工作和海邊更安靜的生活。",
  "isHead": false,
  "level": null,
  "family": "immigrant"
 },
 {
  "word": "emigrate",
  "answer": "emigrate",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "移居國外（移出）",
  "en_def": "to leave your own country to live in another one",
  "sentence": "My uncle plans to {{BLANK}} from Taiwan next year, and he is already selling his house and learning German.",
  "cn": "我叔叔計畫明年從台灣移居國外，他已經在賣房子和學德文了。",
  "cnMarked": "我叔叔計畫明年從台灣【移居國外】，他已經在賣房子和學德文了。",
  "isHead": false,
  "level": 6,
  "family": "immigrant"
 },
 {
  "word": "migrant",
  "answer": "migrant",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "移工；遷徙者",
  "en_def": "a person who moves from one place to another to find work",
  "sentence": "During the harvest season, hundreds of {{BLANK}} workers arrive in the valley to help pick fruit on the big farms.",
  "cn": "收成季節期間，數百名移工來到山谷，幫忙在大農場採摘水果。",
  "cnMarked": "收成季節期間，數百名【移工】來到山谷，幫忙在大農場採摘水果。",
  "isHead": false,
  "level": 6,
  "family": "immigrant"
 },
 {
  "word": "impact",
  "answer": "impact",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "影響；衝擊",
  "en_def": "a strong effect that something has on someone or something",
  "sentence": "Smartphones have had a huge {{BLANK}} on the way teenagers talk to each other, both at school and at home.",
  "cn": "智慧型手機對青少年在學校和家裡彼此交談的方式產生了巨大的影響。",
  "cnMarked": "智慧型手機對青少年在學校和家裡彼此交談的方式產生了巨大的【影響】。",
  "isHead": true,
  "level": 4,
  "family": "impact"
 },
 {
  "word": "impact",
  "answer": "impact",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "撞擊；衝擊力",
  "en_def": "the force of one thing hitting another",
  "sentence": "The car hit the wall at high speed, and the {{BLANK}} was so strong that the front of the car was completely crushed.",
  "cn": "汽車高速撞上牆壁，撞擊力道強到車頭完全被壓扁。",
  "cnMarked": "汽車高速撞上牆壁，【撞擊】力道強到車頭完全被壓扁。",
  "isHead": false,
  "level": 4,
  "family": "impact"
 },
 {
  "word": "impact",
  "answer": "impact",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "影響；衝擊",
  "en_def": "to have a strong effect on something",
  "sentence": "Rising sea levels will {{BLANK}} millions of people who live in low coastal cities over the next fifty years.",
  "cn": "海平面上升將在未來五十年內衝擊數百萬住在低窪沿海城市的人。",
  "cnMarked": "海平面上升將在未來五十年內【衝擊】數百萬住在低窪沿海城市的人。",
  "isHead": false,
  "level": 4,
  "family": "impact"
 },
 {
  "word": "have an impact on",
  "answer": "have had an impact on",
  "nblanks": 5,
  "pos": "v.phr.",
  "cn_def": "對…有影響",
  "en_def": "to affect something strongly",
  "sentence": "The new bike lanes {{BLANK}} the city, because many people now ride to work instead of driving.",
  "cn": "新的自行車道對這座城市產生了影響，因為現在許多人騎車上班而不開車。",
  "cnMarked": "新的自行車道【對】這座城市【產生了影響】，因為現在許多人騎車上班而不開車。",
  "isHead": false,
  "level": null,
  "family": "impact"
 },
 {
  "word": "imply",
  "answer": "imply",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "暗示；意味著",
  "en_def": "to suggest something without saying it directly",
  "sentence": "When the teacher said that some students had not tried their best, she seemed to {{BLANK}} that she was talking about us.",
  "cn": "當老師說有些學生沒有盡力時，她似乎在暗示她說的是我們。",
  "cnMarked": "當老師說有些學生沒有盡力時，她似乎在【暗示】她說的是我們。",
  "isHead": true,
  "level": 4,
  "family": "imply"
 },
 {
  "word": "implication",
  "answer": "implication",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "暗示；含意；影響",
  "en_def": "something that is suggested but not said directly; a possible result",
  "sentence": "The {{BLANK}} of the report is clear: if we keep wasting water, the city will face serious shortages within ten years.",
  "cn": "這份報告的含意很清楚：如果我們繼續浪費水，這座城市十年內就會面臨嚴重缺水。",
  "cnMarked": "這份報告的【含意】很清楚：如果我們繼續浪費水，這座城市十年內就會面臨嚴重缺水。",
  "isHead": false,
  "level": 5,
  "family": "imply"
 },
 {
  "word": "implied",
  "answer": "implied",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "暗示的；含蓄的",
  "en_def": "suggested but not said directly",
  "sentence": "There was an {{BLANK}} warning in the coach's words: anyone who missed practice again would not play in the final game.",
  "cn": "教練的話裡有一個含蓄的警告：再缺席練習的人就不能參加決賽。",
  "cnMarked": "教練的話裡有一個【含蓄的】警告：再缺席練習的人就不能參加決賽。",
  "isHead": false,
  "level": null,
  "family": "imply"
 },
 {
  "word": "implicit",
  "answer": "implicit",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "不言明的；隱含的",
  "en_def": "understood without being said directly",
  "sentence": "In our family there is an {{BLANK}} rule that nobody uses a phone at the dinner table, even though Mom never said it aloud.",
  "cn": "在我們家有個不言明的規矩：餐桌上沒有人用手機，雖然媽媽從沒大聲說過。",
  "cnMarked": "在我們家有個【不言明的】規矩：餐桌上沒有人用手機，雖然媽媽從沒大聲說過。",
  "isHead": false,
  "level": 6,
  "family": "imply"
 },
 {
  "word": "impose",
  "answer": "impose",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "強制實施；徵收",
  "en_def": "to force a rule, tax, or punishment on people",
  "sentence": "The government decided to {{BLANK}} a new tax on sugary drinks to encourage people to choose water or tea instead.",
  "cn": "政府決定對含糖飲料徵收新稅，以鼓勵人們改選水或茶。",
  "cnMarked": "政府決定對含糖飲料【徵收】新稅，以鼓勵人們改選水或茶。",
  "isHead": true,
  "level": 4,
  "family": "impose"
 },
 {
  "word": "impose on",
  "answer": "impose on",
  "nblanks": 2,
  "pos": "v.phr.",
  "cn_def": "打擾；把…強加於",
  "en_def": "to cause trouble for someone by asking too much of them; to force something on someone",
  "sentence": "I do not want to {{BLANK}} you, but could I stay at your apartment for two nights while my house is being painted?",
  "cn": "我不想打擾你，但我家在粉刷時，可以在你的公寓住兩晚嗎？",
  "cnMarked": "我不想【打擾】你，但我家在粉刷時，可以在你的公寓住兩晚嗎？",
  "isHead": false,
  "level": null,
  "family": "impose"
 },
 {
  "word": "imposing",
  "answer": "imposing",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "雄偉的；壯觀的",
  "en_def": "large and impressive",
  "sentence": "The {{BLANK}} building at the end of the street used to be a bank, and its stone columns are over twenty meters high.",
  "cn": "街尾那棟雄偉的建築以前是銀行，它的石柱超過二十公尺高。",
  "cnMarked": "街尾那棟【雄偉的】建築以前是銀行，它的石柱超過二十公尺高。",
  "isHead": false,
  "level": 6,
  "family": "impose"
 },
 {
  "word": "imposition",
  "answer": "imposition",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "強制實施；強加；過分的要求",
  "en_def": "the act of forcing a rule or payment on people; an unreasonable request",
  "sentence": "Many drivers felt that the sudden {{BLANK}} of a parking fee in the old town was unfair, so they wrote letters to the mayor.",
  "cn": "許多駕駛認為在老城區突然強制收取停車費不公平，所以他們寫信給市長。",
  "cnMarked": "許多駕駛認為在老城區突然【強制收取】停車費不公平，所以他們寫信給市長。",
  "isHead": false,
  "level": null,
  "family": "impose"
 },
 {
  "word": "impression",
  "answer": "impression",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "印象",
  "en_def": "an idea or feeling you have about someone or something",
  "sentence": "The new student made a very good {{BLANK}} on the class by helping to clean the room on her very first day.",
  "cn": "這位新同學第一天就幫忙打掃教室，給全班留下了很好的印象。",
  "cnMarked": "這位新同學第一天就幫忙打掃教室，給全班留下了很好的【印象】。",
  "isHead": true,
  "level": 4,
  "family": "impression"
 },
 {
  "word": "impress",
  "answer": "impress",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "使印象深刻；使欽佩",
  "en_def": "to make someone admire or respect you",
  "sentence": "Ken tried to {{BLANK}} the judges by playing the hardest piece on the piano, but he made several mistakes in the middle.",
  "cn": "阿肯試圖彈奏最難的鋼琴曲來讓評審印象深刻，但他在中間出了好幾個錯。",
  "cnMarked": "阿肯試圖彈奏最難的鋼琴曲來【讓】評審【印象深刻】，但他在中間出了好幾個錯。",
  "isHead": false,
  "level": 3,
  "family": "impression"
 },
 {
  "word": "impressive",
  "answer": "impressive",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "令人印象深刻的",
  "en_def": "causing admiration because it is very good or large",
  "sentence": "Taipei 101 is still an {{BLANK}} sight at night, especially on New Year's Eve when fireworks shoot from its sides.",
  "cn": "台北101在夜晚仍是令人印象深刻的景象，尤其是跨年夜煙火從大樓側面射出時。",
  "cnMarked": "台北101在夜晚仍是【令人印象深刻的】景象，尤其是跨年夜煙火從大樓側面射出時。",
  "isHead": false,
  "level": 2,
  "family": "impression"
 },
 {
  "word": "make a good impression",
  "answer": "make a good impression",
  "nblanks": 4,
  "pos": "v.phr.",
  "cn_def": "留下好印象",
  "en_def": "to make people like and respect you when they first meet you",
  "sentence": "If you want to {{BLANK}} at the job interview, arrive early, dress neatly, and smile when you shake hands.",
  "cn": "如果你想在面試時留下好印象，要提早到、穿著整齊，握手時面帶微笑。",
  "cnMarked": "如果你想在面試時【留下好印象】，要提早到、穿著整齊，握手時面帶微笑。",
  "isHead": false,
  "level": null,
  "family": "impression"
 },
 {
  "word": "be under the impression that",
  "answer": "was under the impression that",
  "nblanks": 5,
  "pos": "v.phr.",
  "cn_def": "以為…",
  "en_def": "to believe something, often wrongly",
  "sentence": "I {{BLANK}} the test was next Friday, so I was shocked when the teacher handed out the papers this morning.",
  "cn": "我以為考試是下星期五，所以今天早上老師發考卷時我嚇了一跳。",
  "cnMarked": "我【以為】考試是下星期五，所以今天早上老師發考卷時我嚇了一跳。",
  "isHead": false,
  "level": null,
  "family": "impression"
 },
 {
  "word": "incident",
  "answer": "incident",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "事件；事故",
  "en_def": "something that happens, especially something unusual or unpleasant",
  "sentence": "The school called the parents after the {{BLANK}} in the playground, in which two boys were hurt during a fight.",
  "cn": "操場上發生兩個男孩打架受傷的事件後，學校打電話給家長。",
  "cnMarked": "操場上發生兩個男孩打架受傷的【事件】後，學校打電話給家長。",
  "isHead": true,
  "level": 4,
  "family": "incident"
 },
 {
  "word": "without incident",
  "answer": "without incident",
  "nblanks": 2,
  "pos": "phr.",
  "cn_def": "平安無事地",
  "en_def": "without anything unusual or bad happening",
  "sentence": "The long bus ride through the mountains passed {{BLANK}}, and we arrived at the hotel just before dinner.",
  "cn": "穿越山區的長途巴士之旅平安無事，我們在晚餐前剛好抵達飯店。",
  "cnMarked": "穿越山區的長途巴士之旅【平安無事】，我們在晚餐前剛好抵達飯店。",
  "isHead": false,
  "level": null,
  "family": "incident"
 },
 {
  "word": "incidental",
  "answer": "incidental",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "附帶的；偶然的",
  "en_def": "happening by chance or as a small, less important part of something",
  "sentence": "The hotel price includes breakfast, but {{BLANK}} costs such as drinks and phone calls must be paid separately.",
  "cn": "飯店價格包含早餐，但飲料和電話等附帶的費用必須另外支付。",
  "cnMarked": "飯店價格包含早餐，但飲料和電話等【附帶的】費用必須另外支付。",
  "isHead": false,
  "level": null,
  "family": "incident"
 },
 {
  "word": "incidentally",
  "answer": "Incidentally",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "順帶一提",
  "en_def": "used to add something that is not the main point; by the way",
  "sentence": "{{BLANK}}, the restaurant we are going to tonight is the same one where my parents had their first date thirty years ago.",
  "cn": "順帶一提，我們今晚要去的餐廳就是我父母三十年前第一次約會的那家。",
  "cnMarked": "【順帶一提】，我們今晚要去的餐廳就是我父母三十年前第一次約會的那家。",
  "isHead": false,
  "level": null,
  "family": "incident"
 },
 {
  "word": "including",
  "answer": "including",
  "nblanks": 1,
  "pos": "prep.",
  "cn_def": "包括",
  "en_def": "having something as part of a group or total",
  "sentence": "The trip to Japan costs 35,000 dollars, {{BLANK}} the plane ticket, the hotel, and breakfast every morning.",
  "cn": "日本之旅的費用是三萬五千元，包括機票、飯店和每天早餐。",
  "cnMarked": "日本之旅的費用是三萬五千元，【包括】機票、飯店和每天早餐。",
  "isHead": true,
  "level": 4,
  "family": "including"
 },
 {
  "word": "include",
  "answer": "include",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "包括；包含",
  "en_def": "to have something as a part; to put something in a group",
  "sentence": "Does the price of the meal {{BLANK}} a drink, or do we have to pay extra for the tea and the juice?",
  "cn": "餐點的價格包含飲料嗎？還是茶和果汁要另外付費？",
  "cnMarked": "餐點的價格【包含】飲料嗎？還是茶和果汁要另外付費？",
  "isHead": false,
  "level": 2,
  "family": "including"
 },
 {
  "word": "inclusion",
  "answer": "inclusion",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "納入；包容",
  "en_def": "the act of including someone or something; making everyone feel part of a group",
  "sentence": "The {{BLANK}} of students with disabilities in regular classes helps everyone in the school learn to respect differences.",
  "cn": "將身心障礙學生納入普通班級，有助於學校裡的每個人學會尊重差異。",
  "cnMarked": "將身心障礙學生【納入】普通班級，有助於學校裡的每個人學會尊重差異。",
  "isHead": false,
  "level": null,
  "family": "including"
 },
 {
  "word": "inclusive",
  "answer": "inclusive",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "包容的；包含一切的",
  "en_def": "including everyone or everything",
  "sentence": "The club tries to be {{BLANK}}, so students of every age, ability, and background are welcome to join its activities.",
  "cn": "這個社團努力做到包容，所以各年齡、能力和背景的學生都歡迎參加它的活動。",
  "cnMarked": "這個社團努力做到【包容】，所以各年齡、能力和背景的學生都歡迎參加它的活動。",
  "isHead": false,
  "level": 6,
  "family": "including"
 },
 {
  "word": "excluding",
  "answer": "excluding",
  "nblanks": 1,
  "pos": "prep.",
  "cn_def": "不包括",
  "en_def": "not including",
  "sentence": "The hotel room costs 3,000 dollars a night {{BLANK}} breakfast, which you can add for 300 dollars per person.",
  "cn": "飯店房間一晚三千元，不包括早餐，早餐可以每人加三百元。",
  "cnMarked": "飯店房間一晚三千元，【不包括】早餐，早餐可以每人加三百元。",
  "isHead": false,
  "level": null,
  "family": "including"
 },
 {
  "word": "exclude",
  "answer": "exclude",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "排除；不包括",
  "en_def": "to keep someone or something out; to not include",
  "sentence": "The coach decided to {{BLANK}} two players from the team because they had missed practice five times without a reason.",
  "cn": "教練決定把兩名球員排除在隊伍之外，因為他們無故缺席練習五次。",
  "cnMarked": "教練決定把兩名球員【排除】在隊伍之外，因為他們無故缺席練習五次。",
  "isHead": false,
  "level": 5,
  "family": "including"
 },
 {
  "word": "incredible",
  "answer": "incredible",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "驚人的；極好的",
  "en_def": "extremely good, large, or surprising; amazing",
  "sentence": "The view from the top of the mountain was {{BLANK}}, and we could see the whole city and the sea beyond it.",
  "cn": "從山頂看到的景色美得驚人，我們能看到整座城市和它後面的大海。",
  "cnMarked": "從山頂看到的景色【美得驚人】，我們能看到整座城市和它後面的大海。",
  "isHead": true,
  "level": 4,
  "family": "incredible"
 },
 {
  "word": "incredible",
  "answer": "incredible",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "難以置信的",
  "en_def": "impossible or very hard to believe",
  "sentence": "It seems {{BLANK}} that a ten-year-old boy swam across the river alone, but three people saw him do it.",
  "cn": "一個十歲男孩獨自游過那條河似乎難以置信，但有三個人親眼看到他做到了。",
  "cnMarked": "一個十歲男孩獨自游過那條河似乎【難以置信】，但有三個人親眼看到他做到了。",
  "isHead": false,
  "level": 4,
  "family": "incredible"
 },
 {
  "word": "incredibly",
  "answer": "incredibly",
  "nblanks": 1,
  "pos": "adv.",
  "cn_def": "極其；難以置信地",
  "en_def": "extremely; in a way that is hard to believe",
  "sentence": "The new phone is {{BLANK}} thin, and it weighs less than a small bar of chocolate, so you hardly feel it in your pocket.",
  "cn": "這款新手機極其輕薄，重量比一小條巧克力還輕，所以放在口袋裡幾乎感覺不到。",
  "cnMarked": "這款新手機【極其】輕薄，重量比一小條巧克力還輕，所以放在口袋裡幾乎感覺不到。",
  "isHead": false,
  "level": null,
  "family": "incredible"
 },
 {
  "word": "credible",
  "answer": "credible",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "可信的",
  "en_def": "able to be believed or trusted",
  "sentence": "The news story did not seem {{BLANK}} to me, because the website gave no names and no proof for its claims.",
  "cn": "這則新聞對我來說似乎不太可信，因為那個網站沒有提供任何姓名或證據。",
  "cnMarked": "這則新聞對我來說似乎不太【可信】，因為那個網站沒有提供任何姓名或證據。",
  "isHead": false,
  "level": 6,
  "family": "incredible"
 },
 {
  "word": "indication",
  "answer": "indication",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "跡象；指標",
  "en_def": "a sign that shows something is true or is happening",
  "sentence": "Dark clouds and a sudden cold wind are usually a clear {{BLANK}} that a heavy rainstorm is on its way.",
  "cn": "烏雲和突然的冷風通常是暴雨即將來臨的明顯跡象。",
  "cnMarked": "烏雲和突然的冷風通常是暴雨即將來臨的明顯【跡象】。",
  "isHead": true,
  "level": 4,
  "family": "indication"
 },
 {
  "word": "indicate",
  "answer": "indicate",
  "nblanks": 1,
  "pos": "v.",
  "cn_def": "指出；顯示；表明",
  "en_def": "to show or point to something; to be a sign of",
  "sentence": "The red light on the machine will {{BLANK}} that the water is hot enough, so please wait until you see it.",
  "cn": "機器上的紅燈會顯示水已經夠熱了，所以請等到你看到紅燈亮起。",
  "cnMarked": "機器上的紅燈會【顯示】水已經夠熱了，所以請等到你看到紅燈亮起。",
  "isHead": false,
  "level": 2,
  "family": "indication"
 },
 {
  "word": "indicator",
  "answer": "indicator",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "指標；指示器",
  "en_def": "something that shows what a situation is like or how it is changing",
  "sentence": "The number of tourists is a good {{BLANK}} of how well the city's economy is doing this year.",
  "cn": "觀光客人數是今年這座城市經濟狀況好壞的一個很好的指標。",
  "cnMarked": "觀光客人數是今年這座城市經濟狀況好壞的一個很好的【指標】。",
  "isHead": false,
  "level": null,
  "family": "indication"
 },
 {
  "word": "give an indication of",
  "answer": "give an indication of",
  "nblanks": 4,
  "pos": "v.phr.",
  "cn_def": "顯示；透露…的情況",
  "en_def": "to show roughly what something is like",
  "sentence": "The first ten minutes of a movie usually {{BLANK}} whether it is going to be exciting or boring.",
  "cn": "電影的前十分鐘通常能透露它會是精彩還是無聊。",
  "cnMarked": "電影的前十分鐘通常能【透露】它會是精彩還是無聊。",
  "isHead": false,
  "level": null,
  "family": "indication"
 },
 {
  "word": "infant",
  "answer": "infant",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "嬰兒；幼兒",
  "en_def": "a baby or very young child",
  "sentence": "The nurse showed the new parents how to hold the {{BLANK}} safely and how to give her a bath without getting water in her eyes.",
  "cn": "護士教新手父母如何安全地抱嬰兒，以及如何幫她洗澡而不讓水進到眼睛。",
  "cnMarked": "護士教新手父母如何安全地抱【嬰兒】，以及如何幫她洗澡而不讓水進到眼睛。",
  "isHead": true,
  "level": 4,
  "family": "infant"
 },
 {
  "word": "infancy",
  "answer": "infancy",
  "nblanks": 1,
  "pos": "n.",
  "cn_def": "嬰兒期",
  "en_def": "the time when you are a baby",
  "sentence": "My grandmother says I hardly ever cried in {{BLANK}}, but my mother remembers many sleepless nights.",
  "cn": "我奶奶說我在嬰兒時期幾乎不哭，但我媽媽記得許多個不眠之夜。",
  "cnMarked": "我奶奶說我在【嬰兒時期】幾乎不哭，但我媽媽記得許多個不眠之夜。",
  "isHead": false,
  "level": null,
  "family": "infant"
 },
 {
  "word": "in its infancy",
  "answer": "in their infancy",
  "nblanks": 3,
  "pos": "phr.",
  "cn_def": "處於初期階段",
  "en_def": "at a very early stage of development",
  "sentence": "Electric flying taxis are still {{BLANK}}, but some companies hope to carry passengers across cities within ten years.",
  "cn": "電動飛行計程車仍處於初期階段，但有些公司希望十年內能載客跨越城市。",
  "cnMarked": "電動飛行計程車仍【處於初期階段】，但有些公司希望十年內能載客跨越城市。",
  "isHead": false,
  "level": null,
  "family": "infant"
 },
 {
  "word": "infantile",
  "answer": "infantile",
  "nblanks": 1,
  "pos": "adj.",
  "cn_def": "幼稚的",
  "en_def": "behaving like a small child; childish",
  "sentence": "Throwing your controller on the floor when you lose a game is {{BLANK}} behavior for a sixteen-year-old boy.",
  "cn": "輸了遊戲就把控制器摔在地上，對一個十六歲男孩來說是幼稚的行為。",
  "cnMarked": "輸了遊戲就把控制器摔在地上，對一個十六歲男孩來說是【幼稚的】行為。",
  "isHead": false,
  "level": null,
  "family": "infant"
 }
];
const MCQS = [
 {
  "q": "Before you can enter the test center, you have to prove who you are. A passport or a student card is accepted as ______ at the front desk.",
  "options": [
   "indication",
   "imitation",
   "impression",
   "identification"
  ],
  "answer": 3,
  "vocabIndex": 0
 },
 {
  "q": "The teacher found a lunch box in the classroom, but it had no name on it. She asked the students to help her ______ the owner by looking at the stickers.",
  "options": [
   "identify",
   "imitate",
   "impose",
   "illustrate"
  ],
  "answer": 0,
  "vocabIndex": 1
 },
 {
  "q": "\"Piece of cake\" does not really mean a kind of dessert. It is an ______ that English speakers use when they want to say something is very easy.",
  "options": [
   "incident",
   "idol",
   "idiom",
   "infant"
  ],
  "answer": 2,
  "vocabIndex": 5
 },
 {
  "q": "The machines in the factory have not been used since the company closed last year. They have stood ______ for months, and a thick layer of dust now covers everything.",
  "options": [
   "imaginary",
   "idle",
   "ignorant",
   "incredible"
  ],
  "answer": 1,
  "vocabIndex": 8
 },
 {
  "q": "My sister has pictures of the singer all over her bedroom wall. He is her ______, and she dreams of seeing him at a concert one day.",
  "options": [
   "illustrator",
   "indicator",
   "idol",
   "immigrant"
  ],
  "answer": 2,
  "vocabIndex": 13
 },
 {
  "q": "Many people still believe that the sun goes around the earth. Such ______ is surprising today, when the facts are only one click away on the Internet.",
  "options": [
   "infancy",
   "ignorance",
   "implication",
   "imagination"
  ],
  "answer": 1,
  "vocabIndex": 16
 },
 {
  "q": "Tom had never heard of the famous writer and did not know any of her books. His friends were surprised that he was so ______ about literature.",
  "options": [
   "impressive",
   "imaginative",
   "ignorant",
   "incidental"
  ],
  "answer": 2,
  "vocabIndex": 17
 },
 {
  "q": "It is hard to understand how a heart works just from words. The doctor used a simple drawing to ______ how blood moves through the body.",
  "options": [
   "immigrate",
   "imitate",
   "imply",
   "illustrate"
  ],
  "answer": 3,
  "vocabIndex": 21
 },
 {
  "q": "The story is easy to follow because there is a picture on every page. Each colorful ______ shows the reader exactly what the words on that page describe.",
  "options": [
   "indication",
   "imitation",
   "illustration",
   "impression"
  ],
  "answer": 2,
  "vocabIndex": 22
 },
 {
  "q": "Dragons and unicorns do not live anywhere in the real world. They are ______ animals that exist only in old stories, fantasy films, and the minds of children.",
  "options": [
   "imaginary",
   "ignorant",
   "infantile",
   "idle"
  ],
  "answer": 0,
  "vocabIndex": 25
 },
 {
  "q": "Instead of a normal birthday cake, Mia built a cake that looked like a castle with a chocolate river. Everyone said it was the most ______ dessert they had ever seen.",
  "options": [
   "inclusive",
   "imaginative",
   "idiomatic",
   "implicit"
  ],
  "answer": 1,
  "vocabIndex": 26
 },
 {
  "q": "My little brother likes to copy everything I do. When I wave my hand, he waves too, and he tries to ______ the way I talk and laugh.",
  "options": [
   "imitate",
   "identify",
   "indicate",
   "impose"
  ],
  "answer": 0,
  "vocabIndex": 31
 },
 {
  "q": "The painting in the hotel looks like a famous work by Van Gogh, but it is not real. It is only an ______ made by a local art student.",
  "options": [
   "incident",
   "infant",
   "idiom",
   "imitation"
  ],
  "answer": 3,
  "vocabIndex": 32
 },
 {
  "q": "Mr. Nguyen came to Taiwan from Vietnam twenty years ago and now owns a restaurant here. As an ______ who started with nothing, he worked hard to give his children a better life.",
  "options": [
   "immigrant",
   "illustrator",
   "idol",
   "infant"
  ],
  "answer": 0,
  "vocabIndex": 35
 },
 {
  "q": "Life was hard in their small village, and there were few jobs. So the family decided to ______ to Canada, where they hoped to start a new life.",
  "options": [
   "illustrate",
   "imitate",
   "imply",
   "immigrate"
  ],
  "answer": 3,
  "vocabIndex": 36
 },
 {
  "q": "When we landed in Tokyo, we had to stand in a long line for almost an hour. The officers at ______ checked every passport before letting people into the country.",
  "options": [
   "inclusion",
   "immigration",
   "imposition",
   "imagination"
  ],
  "answer": 1,
  "vocabIndex": 37
 },
 {
  "q": "The new MRT line opened last year, and now far fewer people drive into the city. It has had a big ______ on traffic and on the air quality downtown.",
  "options": [
   "impact",
   "incident",
   "idiom",
   "idol"
  ],
  "answer": 0,
  "vocabIndex": 41
 },
 {
  "q": "Mom did not say that I had to clean my room right now. However, the way she looked at the mess seemed to ______ that she wanted it done today.",
  "options": [
   "impose",
   "imply",
   "exclude",
   "idolize"
  ],
  "answer": 1,
  "vocabIndex": 45
 },
 {
  "q": "Too many cars are coming into the old town, and the narrow streets are always full. The city plans to ______ a fee on every car that enters during the day.",
  "options": [
   "immigrate",
   "imply",
   "identify",
   "impose"
  ],
  "answer": 3,
  "vocabIndex": 49
 },
 {
  "q": "Jack arrived late for his first day of work and forgot the manager's name. He made a bad ______ on everyone, but he worked hard to change it later.",
  "options": [
   "implication",
   "impression",
   "indication",
   "imitation"
  ],
  "answer": 1,
  "vocabIndex": 53
 },
 {
  "q": "Two students got into a fight in the hallway yesterday, and one of them broke his glasses. The principal wants to talk to everyone who saw the ______.",
  "options": [
   "infant",
   "indicator",
   "incident",
   "idiom"
  ],
  "answer": 2,
  "vocabIndex": 58
 },
 {
  "q": "The summer camp costs 8,000 dollars, and that price covers everything. It pays for the bus, all the meals, and the hotel room, ______ a hot breakfast every morning.",
  "options": [
   "excluding",
   "in ignorance of",
   "in imitation of",
   "including"
  ],
  "answer": 3,
  "vocabIndex": 62
 },
 {
  "q": "The young swimmer broke the world record by almost two seconds at the age of fifteen. Everyone agreed it was an ______ result for someone so young.",
  "options": [
   "incredible",
   "idle",
   "implicit",
   "infantile"
  ],
  "answer": 0,
  "vocabIndex": 68
 },
 {
  "q": "The sky is getting dark, and the wind has suddenly turned cold. These are a clear ______ that a storm will reach the city within the next hour.",
  "options": [
   "infancy",
   "imposition",
   "indication",
   "impact"
  ],
  "answer": 2,
  "vocabIndex": 72
 },
 {
  "q": "The baby is only three months old, so she cannot sit up or hold a spoon yet. Taking care of an ______ is a full-time job for her tired parents.",
  "options": [
   "infant",
   "immigrant",
   "illustrator",
   "idol"
  ],
  "answer": 0,
  "vocabIndex": 76
 },
 {
  "q": "Close your eyes and think of a quiet beach with warm sand and blue water. Can you ______ how relaxing it would be to spend a whole week there?",
  "options": [
   "imitate",
   "imagine",
   "illustrate",
   "indicate"
  ],
  "answer": 1,
  "vocabIndex": 27
 },
 {
  "q": "Amy practiced her speech twenty times before the contest. She wanted to ______ the judges with her clear voice and confident smile, and she won first prize.",
  "options": [
   "impress",
   "ignore",
   "imply",
   "impose"
  ],
  "answer": 0,
  "vocabIndex": 54
 },
 {
  "q": "The new library has five floors, a garden on the roof, and more than a million books. Visitors agree that it is the most ______ building in the city.",
  "options": [
   "ignorant",
   "incidental",
   "impressive",
   "idle"
  ],
  "answer": 2,
  "vocabIndex": 55
 },
 {
  "q": "The ticket price is 500 dollars, and you get a lot for your money. It will ______ a drink, a snack, and a free poster of the film.",
  "options": [
   "exclude",
   "indicate",
   "impose",
   "include"
  ],
  "answer": 3,
  "vocabIndex": 63
 },
 {
  "q": "Some boys at school say rude things to make others angry. The best thing you can do is to ______ them, because they will stop when nobody listens.",
  "options": [
   "identify",
   "ignore",
   "idolize",
   "imitate"
  ],
  "answer": 1,
  "vocabIndex": 18
 }
];
const LOOKUP = {};
VOCAB.forEach(v => { const key = v.word.toLowerCase(); const sense = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def };
  if (LOOKUP[key]) LOOKUP[key].combined.push(sense); else LOOKUP[key] = { pos: v.pos, en_def: v.en_def, cn_def: v.cn_def, combined: [sense] }; });
const EXTRA_GLOSSES = {};