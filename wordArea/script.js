"use strict"
function aThing(){
  let info = document.getElementById("pageText");
  let text = "";
  let list = ["ruc", "huh", "cur", "cru", "chur", "curch", "church"];
  let threeChar = list.filter((item) => item.length == 3);
  let fourChar = list.filter((item) => item.length == 4);
  let fiveChar = list.filter((item) => item.length == 5);
  let sixChar = list.filter((item) => item.length == 6);
  threeChar = threeChar.sort();
  fourChar = fourChar.sort();
  fiveChar = fiveChar.sort();
  sixChar = sixChar.sort();
  let wordBank = [threeChar, fourChar, fiveChar, sixChar];
  wordBank.forEach((item) => {
    item.forEach((answ) => {
      for(let i = 1; i <= answ.length; i++){
        text += "_ ";
      }
      text += "<pre> \n </pre>";
    });
  });
  info.innerHTML = text;
}
function anotherThing3(){

}
function anotherThing3(){

}
function anotherThing3(){

}
function anotherThing3(){

}
function checker(index, length){
  let test = document.getElementById("input3").value;
  
}
