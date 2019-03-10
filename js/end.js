var endPage = document.querySelector("#endPage");
var endPageP = document.querySelector("#endPage p");
var endPageImg = document.querySelector("#endPage img");


function ifEnd(){
  if(numberOfDay%5 === 0)
  {
    if(parseInt(numberOfHealth.innerHTML.substr(0,numberOfHealth.innerHTML.length-1))<20)
    {
      endPage.style.display="block";
      endPageImg.src="endImg/健康失败.png";
      endPageP.innerHTML = "突然我眼前一黑,醒来时发现是一片陌生的天花板,父母告诉我我突然昏倒了,现在在医院,我读出了他们眼中的悲伤,看来事情并没有这么简单.<br/>我偷偷听到了他们的谈话,得知我得了绝症,为什么我的命这么惨?";
      return;

    }
    if(parseInt(numberOfWealth.innerHTML.substr(0,numberOfWealth.innerHTML.length-1))<20)
    {
      endPage.style.display="block";
      endPageImg.src="endImg/金钱失败.png";
      endPageP.innerHTML = "过渡的挥霍让我养成了乱花钱的习惯,最终将家产败地一清二白.";
      return;

    }
    if(parseInt(numberOfIntelligence.innerHTML.substr(0,numberOfIntelligence.innerHTML.length-1))<20)
    {
      endPage.style.display="block";
      endPageImg.src="endImg/智慧失败.png";
      endPageP.innerHTML = "我明明没有病,为什么他们要把我关进来,快放我出去,我不是神经病!!!!!!!!!!";
      return;

    }
    if(parseInt(numberOfEmotion.innerHTML.substr(0,numberOfEmotion.innerHTML.length-1))<20)
    {
      endPage.style.display="block";
      endPageImg.src="endImg/情感失败.png";
      endPageP.innerHTML="我终于厌倦了这一切,决定上山当和尚,这样清闲的生活也不错.";
      return;

    }
    if(parseInt(numberOfMorality.innerHTML.substr(0,numberOfMorality.innerHTML.length-1))<20)
    {
      endPage.style.display="block";
      endPageImg.src="endImg/道德失败.png";
      endPageP.innerHTML="我终于压制不住对犯罪的渴望,但是最终被抓进了监狱里,难道我要和这几个人一起度过剩下的人生吗?";
      return;

    }
  }
  if(numberOfDay === 60)
  {
    if(parseInt(numberOfHealth.innerHTML.substr(0,numberOfHealth.innerHTML.length-1))>65&&parseInt(numberOfMorality.innerHTML.substr(0,numberOfMorality.innerHTML.length-1))>65)
    {
      endPage.style.display="block";
      endPageImg.src="endImg/道德和健康好.png";
      endPageP.innerHTML="我即正义!";
      return;
    }
    if(parseInt(numberOfWealth.innerHTML.substr(0,numberOfWealth.innerHTML.length-1))>65&&parseInt(numberOfIntelligence.innerHTML.substr(0,numberOfIntelligence.innerHTML.length-1))>65)
    {
      endPage.style.display="block";
      endPageImg.src="endImg/智慧和财富好.png";
      endPageP.innerHTML="在我的经过我的努力,我终于完成了世界上最伟大的发明!<br/>我是世界上最强的发明家!";
      return;
    }
    if(parseInt(numberOfIntelligence.innerHTML.substr(0,numberOfIntelligence.innerHTML.length-1))>65&&parseInt(numberOfMorality.innerHTML.substr(0,numberOfMorality.innerHTML.length-1))>65)
    {
      endPage.style.display="block";
      endPageImg.src="endImg/道德和智慧好.png";
      endPageP.innerHTML="在我的智慧下,邪恶将无处可藏.";
      return;
    }

    if(parseInt(numberOfMorality.innerHTML.substr(0,numberOfMorality.innerHTML.length-1))>65)
    {
      endPage.style.display="block";
      endPageImg.src="endImg/道德好.png";
      endPageP.innerHTML="坚决依法打黑除恶,打击'市霸','村霸','区霸','学霸',将打黑除恶进行到底!";
      return;
    }
    if(parseInt(numberOfEmotion.innerHTML.substr(0,numberOfMorality.innerHTML.length-1))>65)
    {
      endPage.style.display="block";
      endPageImg.src="endImg/感情好.png";
      endPageP.innerHTML="万花丛中过,片叶不沾身.<br/>";
      return;
    }
    if(parseInt(numberOfEmotion.innerHTML.substr(0,numberOfMorality.innerHTML.length-1)))
    {
      endPage.style.display="block";
      endPageImg.src="endImg/普通人.png";
      endPageP.innerHTML="普通的生活未尝不好,普通的活着,安稳的度过余生.";
      return;
    }
  }
}
