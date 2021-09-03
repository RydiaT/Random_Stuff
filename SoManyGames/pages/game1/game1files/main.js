/*
--------------------
      Idle Game
--------------------
*/
//Variables
let currentMoney = 0;
//Functions
function makeMoney(){
    currentMoney++
    moneyCounter.innerHTML = "$" + currentMoney.toFixed(2)
}