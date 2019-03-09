var emotion = document.querySelector("#emotion .progressBar");
var health = document.querySelector("#health .progressBar");
var intelligence = document.querySelector("#intelligence .progressBar");
var wealth = document.querySelector("#wealth .progressBar");
var morality = document.querySelector("#morality .progressBar");

var numberOfEmotion = document.querySelector("#emotion .progressBar div");
var numberOfHealth = document.querySelector("#health .progressBar div");
var numberOfIntelligence = document.querySelector("#intelligence .progressBar div");
var numberOfWealth = document.querySelector("#wealth .progressBar div");
var numberOfMorality = document.querySelector("#morality .progressBar div");

var emotionHeight = 0;
var healthHeight = 0;
var intelligenceHeight = 0;
var wealthHeight = 0;
var moralityHeight = 0;

function changeColor(number,type){
  if(parseInt(number.innerHTML.substr(0,number.innerHTML.length-1))>30)
  {
    type.style.backgroundColor="Lime";
  }
  else {
      type.style.backgroundColor="red";
    }
}
function aWealthDHealth(){
  wealthHeight = parseInt(wealth.style.height.substr(0,wealth.style.height.length-1));
  healthHeight = parseInt(health.style.height.substr(0,health.style.height.length-1));
  numberOfHealth.innerHTML = (parseInt(numberOfHealth.innerHTML.substr(0,numberOfHealth.innerHTML.length-1))-3)+"%";
  numberOfWealth.innerHTML = (parseInt(numberOfWealth.innerHTML.substr(0,numberOfWealth.innerHTML.length-1))+3)+"%";
  wealthHeight +=1;
  healthHeight -=1;
  wealth.style.height = wealthHeight + "vh";
  health.style.height = healthHeight + "vh";
  changeColor(numberOfHealth,health);
  changeColor(numberOfWealth,wealth);
}
//加wealth 减health    1

function aHealthDWealth(){
  wealthHeight = parseInt(wealth.style.height.substr(0,wealth.style.height.length-1));
  healthHeight = parseInt(health.style.height.substr(0,health.style.height.length-1));
  numberOfHealth.innerHTML = (parseInt(numberOfHealth.innerHTML.substr(0,numberOfHealth.innerHTML.length-1))+3)+"%";
  numberOfWealth.innerHTML = (parseInt(numberOfWealth.innerHTML.substr(0,numberOfWealth.innerHTML.length-1))-3)+"%";
  healthHeight +=1;
  wealthHeight -=1;
  wealth.style.height = wealthHeight + "vh";
  health.style.height = healthHeight + "vh";
  changeColor(numberOfHealth,health);
  changeColor(numberOfWealth,wealth);

}
//加 health 减 wealth    2

function aEmotionDhealth(){
  emotionHeight = parseInt(emotion.style.height.substr(0,emotion.style.height.length-1));
  healthHeight = parseInt(health.style.height.substr(0,health.style.height.length-1));
  numberOfHealth.innerHTML = (parseInt(numberOfHealth.innerHTML.substr(0,numberOfHealth.innerHTML.length-1))-3)+"%";
  numberOfEmotion.innerHTML = (parseInt(numberOfEmotion.innerHTML.substr(0,numberOfEmotion.innerHTML.length-1))+3)+"%";
  emotionHeight +=1;
  healthHeight -=1;
  emotion.style.height = emotionHeight + "vh";
  health.style.height = healthHeight + "vh";
  changeColor(numberOfHealth,health);
  changeColor(numberOfEmotion,emotion);

}
//加 emotion 减 health    3
function aHealthDEmotion(){
  emotionHeight = parseInt(emotion.style.height.substr(0,emotion.style.height.length-1));
  healthHeight = parseInt(health.style.height.substr(0,health.style.height.length-1));
  numberOfHealth.innerHTML = (parseInt(numberOfHealth.innerHTML.substr(0,numberOfHealth.innerHTML.length-1))+3)+"%";
  numberOfEmotion.innerHTML = (parseInt(numberOfEmotion.innerHTML.substr(0,numberOfEmotion.innerHTML.length-1))-3)+"%";
  emotionHeight -=1;
  healthHeight +=1;
  emotion.style.height = emotionHeight + "vh";
  health.style.height = healthHeight + "vh";
  changeColor(numberOfHealth,health);
  changeColor(numberOfEmotion,emotion);

}
//加 health 减emotion     4

function aIntelligenceDEmotion(){
  emotionHeight = parseInt(emotion.style.height.substr(0,emotion.style.height.length-1));
  intelligenceHeight = parseInt(intelligence.style.height.substr(0,intelligence.style.height.length-1));
  numberOfIntelligence.innerHTML = (parseInt(numberOfIntelligence.innerHTML.substr(0,numberOfIntelligence.innerHTML.length-1))+3)+"%";
  numberOfEmotion.innerHTML = (parseInt(numberOfEmotion.innerHTML.substr(0,numberOfEmotion.innerHTML.length-1))-3)+"%";
  emotionHeight -=1;
  intelligenceHeight +=1;
  emotion.style.height = emotionHeight + "vh";
  intelligence.style.height = intelligenceHeight + "vh";
  changeColor(numberOfIntelligence,intelligence);
  changeColor(numberOfEmotion,emotion);

}
//加 intelligence 减 emotion   5

function aEmotionDIntelligence(){
  emotionHeight = parseInt(emotion.style.height.substr(0,emotion.style.height.length-1));
  intelligenceHeight = parseInt(intelligence.style.height.substr(0,intelligence.style.height.length-1));
  numberOfIntelligence.innerHTML = (parseInt(numberOfIntelligence.innerHTML.substr(0,numberOfIntelligence.innerHTML.length-1))-3)+"%";
  numberOfEmotion.innerHTML = (parseInt(numberOfEmotion.innerHTML.substr(0,numberOfEmotion.innerHTML.length-1))+3)+"%";
  emotionHeight +=1;
  intelligenceHeight -=1;
  emotion.style.height = emotionHeight + "vh";
  intelligence.style.height = intelligenceHeight + "vh";
  changeColor(numberOfIntelligence,intelligence);
  changeColor(numberOfEmotion,emotion);

}
//加 emotion 减 intelligence   6

function aIntelligenceDHealth(){
  healthHeight = parseInt(health.style.height.substr(0,health.style.height.length-1));
  intelligenceHeight = parseInt(intelligence.style.height.substr(0,intelligence.style.height.length-1));
  numberOfIntelligence.innerHTML = (parseInt(numberOfIntelligence.innerHTML.substr(0,numberOfIntelligence.innerHTML.length-1))+3)+"%";
  numberOfHealth.innerHTML = (parseInt(numberOfHealth.innerHTML.substr(0,numberOfHealth.innerHTML.length-1))-3)+"%";
  healthHeight -=1;
  intelligenceHeight +=1;
  health.style.height = healthHeight + "vh";
  intelligence.style.height = intelligenceHeight + "vh";
  changeColor(numberOfIntelligence,intelligence);
  changeColor(numberOfHealth,health);

}
//加 intelligence 减 health   7

function aHealthDIntelligence(){
  healthHeight = parseInt(health.style.height.substr(0,health.style.height.length-1));
  intelligenceHeight = parseInt(intelligence.style.height.substr(0,intelligence.style.height.length-1));
  numberOfIntelligence.innerHTML = (parseInt(numberOfIntelligence.innerHTML.substr(0,numberOfIntelligence.innerHTML.length-1))-3)+"%";
  numberOfHealth.innerHTML = (parseInt(numberOfHealth.innerHTML.substr(0,numberOfHealth.innerHTML.length-1))+3)+"%";
  healthHeight +=1;
  intelligenceHeight -=1;
  health.style.height = healthHeight + "vh";
  intelligence.style.height = intelligenceHeight + "vh";
  changeColor(numberOfIntelligence,intelligence);
  changeColor(numberOfHealth,health);

}
//加 health 减 intelligence   8

function aWealthDEmotion(){
  wealthHeight = parseInt(wealth.style.height.substr(0,wealth.style.height.length-1));
  emotionHeight = parseInt(emotion.style.height.substr(0,emotion.style.height.length-1));
  numberOfWealth.innerHTML = (parseInt(numberOfWealth.innerHTML.substr(0,numberOfWealth.innerHTML.length-1))+3)+"%";
  numberOfEmotion.innerHTML = (parseInt(numberOfEmotion.innerHTML.substr(0,numberOfEmotion.innerHTML.length-1))-3)+"%";
  emotionHeight -=1;
  wealthHeight +=1;
  wealth.style.height = wealthHeight + "vh";
  emotion.style.height = emotionHeight + "vh";
  changeColor(numberOfWealth,wealth);
  changeColor(numberOfEmotion,emotion);

}
//加wealth 减 emotion     9

function aEmotionDWealth(){
  wealthHeight = parseInt(wealth.style.height.substr(0,wealth.style.height.length-1));
  emotionHeight = parseInt(emotion.style.height.substr(0,emotion.style.height.length-1));
  numberOfWealth.innerHTML = (parseInt(numberOfWealth.innerHTML.substr(0,numberOfWealth.innerHTML.length-1))-3)+"%";
  numberOfEmotion.innerHTML = (parseInt(numberOfEmotion.innerHTML.substr(0,numberOfEmotion.innerHTML.length-1))+3)+"%";
  emotionHeight +=1;
  wealthHeight -=1;
  wealth.style.height = wealthHeight + "vh";
  emotion.style.height = emotionHeight + "vh";
  changeColor(numberOfWealth,wealth);
  changeColor(numberOfEmotion,emotion);

}
//加 emotion 减 wealth   10

function aIntelligenceDWealth(){
  wealthHeight = parseInt(wealth.style.height.substr(0,wealth.style.height.length-1));
  intelligenceHeight = parseInt(intelligence.style.height.substr(0,intelligence.style.height.length-1));
  numberOfIntelligence.innerHTML = (parseInt(numberOfIntelligence.innerHTML.substr(0,numberOfIntelligence.innerHTML.length-1))+3)+"%";
  numberOfWealth.innerHTML = (parseInt(numberOfWealth.innerHTML.substr(0,numberOfWealth.innerHTML.length-1))-3)+"%";
  intelligenceHeight +=1;
  wealthHeight -=1;
  wealth.style.height = wealthHeight + "vh";
  intelligence.style.height = intelligenceHeight + "vh";
  changeColor(numberOfWealth,wealth);
  changeColor(numberOfIntelligence,intelligence);

}
//加 intelligence 减 wealth 11

function aWealthDIntelligence(){
  wealthHeight = parseInt(wealth.style.height.substr(0,wealth.style.height.length-1));
  intelligenceHeight = parseInt(intelligence.style.height.substr(0,intelligence.style.height.length-1));
  numberOfIntelligence.innerHTML = (parseInt(numberOfIntelligence.innerHTML.substr(0,numberOfIntelligence.innerHTML.length-1))-3)+"%";
  numberOfWealth.innerHTML = (parseInt(numberOfWealth.innerHTML.substr(0,numberOfWealth.innerHTML.length-1))+3)+"%";
  intelligenceHeight -=1;
  wealthHeight +=1;
  wealth.style.height = wealthHeight + "vh";
  intelligence.style.height = intelligenceHeight + "vh";
  changeColor(numberOfWealth,wealth);
  changeColor(numberOfIntelligence,intelligence);

}
//加 wealth 减 intelligence  12

function aWealthDMorality(){
  wealthHeight = parseInt(wealth.style.height.substr(0,wealth.style.height.length-1));
  moralityHeight = parseInt(morality.style.height.substr(0,morality.style.height.length-1));
  numberOfMorality.innerHTML = (parseInt(numberOfMorality.innerHTML.substr(0,numberOfMorality.innerHTML.length-1))-3)+"%";
  numberOfWealth.innerHTML = (parseInt(numberOfWealth.innerHTML.substr(0,numberOfWealth.innerHTML.length-1))+3)+"%";
  intelligenceHeight -=1;
  wealthHeight +=1;
  wealth.style.height = wealthHeight + "vh";
  morality.style.height = moralityHeight + "vh";
  changeColor(numberOfWealth,wealth);
  changeColor(numberOfMorality,morality);

}
//加 wealth 减 morality   13

function aMoralityDWealth(){
  wealthHeight = parseInt(wealth.style.height.substr(0,wealth.style.height.length-1));
  moralityHeight = parseInt(morality.style.height.substr(0,morality.style.height.length-1));
  numberOfMorality.innerHTML = (parseInt(numberOfMorality.innerHTML.substr(0,numberOfMorality.innerHTML.length-1))+3)+"%";
  numberOfWealth.innerHTML = (parseInt(numberOfWealth.innerHTML.substr(0,numberOfWealth.innerHTML.length-1))-3)+"%";
  moralityHeight +=1;
  wealthHeight -=1;
  wealth.style.height = wealthHeight + "vh";
  morality.style.height = moralityHeight + "vh";
  changeColor(numberOfWealth,wealth);
  changeColor(numberOfMorality,morality);


}
//加 morality 减 wealth   14

function aMoralityDIntelligence(){
  intelligenceHeight = parseInt(intelligence.style.height.substr(0,intelligence.style.height.length-1));
  moralityHeight = parseInt(morality.style.height.substr(0,morality.style.height.length-1));
  numberOfMorality.innerHTML = (parseInt(numberOfMorality.innerHTML.substr(0,numberOfMorality.innerHTML.length-1))+3)+"%";
  numberOfIntelligence.innerHTML = (parseInt(numberOfIntelligence.innerHTML.substr(0,numberOfIntelligence.innerHTML.length-1))-3)+"%";
  moralityHeight +=1;
  intelligenceHeight -=1;
  intelligence.style.height = intelligenceHeight + "vh";
  morality.style.height = moralityHeight + "vh";
  changeColor(numberOfIntelligence,intelligence);
  changeColor(numberOfMorality,morality);

}
//加 morality 减 intelligence  15
function aIntelligenceDMorality(){
  intelligenceHeight = parseInt(intelligence.style.height.substr(0,intelligence.style.height.length-1));
  moralityHeight = parseInt(morality.style.height.substr(0,morality.style.height.length-1));
  numberOfMorality.innerHTML = (parseInt(numberOfMorality.innerHTML.substr(0,numberOfMorality.innerHTML.length-1))-3)+"%";
  numberOfIntelligence.innerHTML = (parseInt(numberOfIntelligence.innerHTML.substr(0,numberOfIntelligence.innerHTML.length-1))+3)+"%";
  moralityHeight -=1;
  intelligenceHeight +=1;
  intelligence.style.height = intelligenceHeight + "vh";
  morality.style.height = moralityHeight + "vh";
  changeColor(numberOfIntelligence,intelligence);
  changeColor(numberOfMorality,morality);

}
//加 intelligence 减 morality  16

function aMoralityDHealth(){
  healthHeight = parseInt(health.style.height.substr(0,health.style.height.length-1));
  moralityHeight = parseInt(morality.style.height.substr(0,morality.style.height.length-1));
  numberOfMorality.innerHTML = (parseInt(numberOfMorality.innerHTML.substr(0,numberOfMorality.innerHTML.length-1))+3)+"%";
  numberOfHealth.innerHTML = (parseInt(numberOfHealth.innerHTML.substr(0,numberOfHealth.innerHTML.length-1))-3)+"%";
  moralityHeight +=1;
  healthHeight -=1;
  health.style.height = healthHeight + "vh";
  morality.style.height = moralityHeight + "vh";
  changeColor(numberOfHealth,health);
  changeColor(numberOfMorality,morality);

}
//加 morality 减 health   17
function aHealthDMorality(){
  healthHeight = parseInt(health.style.height.substr(0,health.style.height.length-1));
  moralityHeight = parseInt(morality.style.height.substr(0,morality.style.height.length-1));
  numberOfMorality.innerHTML = (parseInt(numberOfMorality.innerHTML.substr(0,numberOfMorality.innerHTML.length-1))-3)+"%";
  numberOfHealth.innerHTML = (parseInt(numberOfHealth.innerHTML.substr(0,numberOfHealth.innerHTML.length-1))+3)+"%";
  moralityHeight -=1;
  healthHeight +=1;
  health.style.height = healthHeight + "vh";
  morality.style.height = moralityHeight + "vh";
  changeColor(numberOfHealth,health);
  changeColor(numberOfMorality,morality);

}
//加 health 减 morality   18

function aMoralityDEmotion(){
  emotionHeight = parseInt(emotion.style.height.substr(0,emotion.style.height.length-1));
  moralityHeight = parseInt(morality.style.height.substr(0,morality.style.height.length-1));
  numberOfMorality.innerHTML = (parseInt(numberOfMorality.innerHTML.substr(0,numberOfMorality.innerHTML.length-1))+3)+"%";
  numberOfEmotion.innerHTML = (parseInt(numberOfEmotion.innerHTML.substr(0,numberOfEmotion.innerHTML.length-1))-3)+"%";
  moralityHeight +=1;
  emotionHeight -=1;
  emotion.style.height = emotionHeight + "vh";
  morality.style.height = moralityHeight + "vh";

  changeColor(numberOfEmotion,emotion);
  changeColor(numberOfMorality,morality);

}
//加 morality 减 emotion  19

function aEmotionDMorality(){
  emotionHeight = parseInt(emotion.style.height.substr(0,emotion.style.height.length-1));
  moralityHeight = parseInt(morality.style.height.substr(0,morality.style.height.length-1));
  numberOfMorality.innerHTML = (parseInt(numberOfMorality.innerHTML.substr(0,numberOfMorality.innerHTML.length-1))-3)+"%";
  numberOfEmotion.innerHTML = (parseInt(numberOfEmotion.innerHTML.substr(0,numberOfEmotion.innerHTML.length-1))+3)+"%";
  moralityHeight -=1;
  emotionHeight +=1;
  emotion.style.height = emotionHeight + "vh";
  morality.style.height = moralityHeight + "vh";
  changeColor(numberOfEmotion,emotion);
  changeColor(numberOfMorality,morality);


}
//加 emotion 减 morality 20
// emotion.addEventListener("click",aEmotionDWealth,false);
