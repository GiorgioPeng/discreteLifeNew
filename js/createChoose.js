// // var arrForFixedImg1 = new Array();
// // arrForFixedImg1 = ['img/primarySchool/小学.png','img/primarySchool/课外活动选择.png']
// // var arrForRandomImg1 = new Array();
// // arrForRandomImg1 = ['img/primarySchool/吃得好.png','img/primarySchool/垃圾食品.png','img/primarySchool/捉虫.png','img/primarySchool/捡到钱.png','img/primarySchool/棒棒糖.png']
// //
// // var backgroundForImg1 = ['选择日常食物价格：','学校门口的垃圾食品看起来很好吃，你想：','捉到一只小虫子,你想要:','捡到一分钱,是否交给警察叔叔:','有个怪叔叔拿个棒棒糖给你,叫你去玩,你想:']
// // var arrForChooseOfImg1 = ['较便宜','较贵','吃','不吃','整同桌','放生','交给他','留着','去','不去']
// //
// // var arrForFixedImg2 = new Array();
// // var arrForRandomImg2 = new Array();
// // arrForRandomImg2 = ['img/secondSchool/不理想.png','img/secondSchool/去游戏厅.png','img/secondSchool/叫玩.png','img/secondSchool/女生被欺负.png','img/secondSchool/小巷子.png','img/secondSchool/情书.png','img/secondSchool/闯红灯.png','img/secondSchool/高年级借钱.png']
// //
// // var backgroundForImg2 = ['某次小测验不理想,家长问起你成绩,你想:','放学后,有同学叫你去游戏厅,你想:','你写作业的时候有同学叫你去玩,你想:','突然发现一个女生被欺负,你是否想帮助她:','放学后看到一只猫进入了一个漆黑的巷子里,你想:','你收到一封署名漂亮女孩的情书,你想:','上学即将迟到时,正好有个路口是红灯,你想:'
// // ,'某个高年级同学问你借钱,你想:']
// // var arrForChooseOfImg2 = ['说实话','撒谎','去','不去','去','不去','帮助她','不帮助','跟上去','回家','接受','扔掉','闯红灯','等绿灯','借给他','拒绝']
// //
// // var arrForChoose1 = ['aWealthDHealth','aHealthDWealth','aEmotionDhealth','aHealthDEmotion','aEmotionDMorality','aMoralityDEmotion','aMoralityDWealth','aWealthDMorality','aIntelligenceDHealth','aIntelligenceDEmotion']
// // var arrForChoose2 = ['aMoralityDHealth','aIntelligenceDMorality','aEmotionDIntelligence','aIntelligenceDEmotion','aEmotionDIntelligence','aHealthDEmotion','aMoralityDHealth','aIntelligenceDMorality','aIntelligenceDHealth','aIntelligenceDEmotion','aEmotionDIntelligence','aIntelligenceDEmotion','aIntelligenceDMorality','aMoralityDHealth','aHealthDWealth','aMoralityDHealth']
// //
// // arrForRandomImg1.push.apply(arrForRandomImg1, arrForRandomImg2);
// // arrForChooseOfImg1.push.apply(arrForChooseOfImg1,arrForChooseOfImg2);
// // backgroundForImg1.push.apply(backgroundForImg1,backgroundForImg2);
// // arrForChoose1.push.apply(arrForChoose1,arrForChoose2);
// //
// //
// var rili = document.querySelector("#rili");
// var thing = document.querySelector("#thing");
// // var lengthOfImg1 = arrForRandomImg1.length-1;
// // var numberOfDay = 1;
//
// function changeThingOfPrimary(ev){
//   var ev = ev || window.event;
//   var target = ev.target || ev.srcElement;
//   if(target.className=="chooseInput")
//   {
//     let randNumber = Math.floor(Math.random()*14)+1;
//     target.style.display="none";
//     document.querySelector("#choose"+randNumber).style.display="block";
//     // let p = document.querySelector('.choose p');
//     // p.innerHTML = backgroundForImg1[randNumber-1];
//     //
//     // // choose.className = "choose";
//     // let chooseImg = document.querySelector(".choose img")
//     // // chooseImg.className = "chooseImg";
//     // chooseImg.src =arrForRandomImg1[randNumber-1];
//     //
//     // // chooseInput1.className = "chooseInput";
//     // let chooseInput1 = document.querySelector("#chooseInput1");
//     // chooseInput1.innerHTML = arrForChooseOfImg1[randNumber*2-2];
//     // chooseInput1.onclick=eval(arrForChoose1[randNumber*2-2]+"()");
//     // // chooseInput2.className = "chooseInput"
//     // let chooseInput2 = document.querySelector("#chooseInput2");
//     // chooseInput2.innerHTML = arrForChooseOfImg1[randNumber*2-1];
//     // chooseInput2.onclick = eval(arrForChoose1[randNumber*2-1]+"()");
//     numberOfDay+=1;
//     rili.innerHTML = "你已经来到世间<br/><p id='day'>"+numberOfDay+"</p>天!!"
//   }
// }
