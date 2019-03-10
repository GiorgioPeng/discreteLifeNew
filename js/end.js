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

    }
    if(parseInt(numberOfWealth.innerHTML.substr(0,numberOfWealth.innerHTML.length-1))<20)
    {
      endPage.style.display="block";
      endPageImg.src="endImg/金钱失败.png";

    }
    if(parseInt(numberOfIntelligence.innerHTML.substr(0,numberOfIntelligence.innerHTML.length-1))<20)
    {
      endPage.style.display="block";
      endPageImg.src="endImg/智慧失败.png";

    }
    if(parseInt(numberOfEmotion.innerHTML.substr(0,numberOfEmotion.innerHTML.length-1))<20)
    {
      endPage.style.display="block";
      endPageImg.src="endImg/情感失败.png";

    }
    if(parseInt(numberOfMorality.innerHTML.substr(0,numberOfMorality.innerHTML.length-1))<20)
    {
      endPage.style.display="block";
      endPageImg.src="endImg/道德失败.png"

    }
  }
  if(numberOfDay === 60)
  {
    if(parseInt(numberOfHealth.innerHTML.substr(0,numberOfHealth.innerHTML.length-1))>80&&parseInt(numberOfMorality.innerHTML.substr(0,numberOfMorality.innerHTML.length-1))>80)
    {
      endPage.style.display="block";
      endPageImg.src="endImg/道德和健康好.png";
    }
    if(parseInt(numberOfWealth.innerHTML.substr(0,numberOfWealth.innerHTML.length-1))>80&&parseInt(numberOfMorality.innerHTML.substr(0,numberOfMorality.innerHTML.length-1))>80)
    {
      endPage.style.display="block";
      endPageImg.src="endImg/道德和财富好.png";
    }
    if(parseInt(numberOfIntelligence.innerHTML.substr(0,numberOfIntelligence.innerHTML.length-1))>80&&parseInt(numberOfMorality.innerHTML.substr(0,numberOfMorality.innerHTML.length-1))>80)
    {
      endPage.style.display="block";
      endPageImg.src="endImg/道德和智慧好.png";
    }

    if(parseInt(numberOfMorality.innerHTML.substr(0,numberOfMorality.innerHTML.length-1))>80)
    {
      endPage.style.display="block";
      endPageImg.src="endImg/道德好.png";
    }
    if(parseInt(numberOfEmotion.innerHTML.substr(0,numberOfMorality.innerHTML.length-1))>80)
    {
      endPage.style.display="block";
      endPageImg.src="endImg/感情好.png";
    }
  }
}
