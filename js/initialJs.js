window.onload = function()
{
  setTimeout( function(){
    document.querySelector("#baby").style.display="none";
    document.querySelector("#peopleChoose").style.display="block";
  }, 5000);

}
function gotoGame(ev){
  document.querySelector("#peoplelogo img").src=ev.src;
  if(ev.src.match("%E5%AD%A6%E9%9C%B8.png"))
    {
      intelligence.style.height="19vh";
      numberOfIntelligence.innerHTML = "59%";
      wealth.style.height = "13vh";
      numberOfWealth.innerHTML = "41%";

    }
    else if(ev.src.match("%E5%AF%8C%E4%BA%8C%E4%BB%A3.png"))
        {
          emotion.style.height="13vh";
          numberOfEmotion.innerHTML = "41%";
          wealth.style.height = "19vh";
          numberOfWealth.innerHTML = "59%";

          }
          else if (ev.src.match("%E8%82%8C%E8%82%89%E7%94%B7.png")) {
              health.style.height="19vh";
              numberOfHealth.innerHTML="59%";
              intelligence.style.height="13vh";
              numberOfIntelligence.innerHTML="41%";
          }
  document.querySelector("#peopleChoose").style.display="none";
  document.querySelector("#human").style.display="block";
  document.querySelector("#thing").style.display="block";
}
function whether(){
  document.querySelector("#peopleChoose>p").style.display="none";
}
