/*
--------------------
      Idle Game
--------------------
*/
//Variables
let currentMoney = 0;
let MPC = 1;
let MPS = 0;
//Functions
function makeMoney(){
    currentMoney += MPC
    updateScreen();
    checkShop();
}
function checkShop(){
    //Shop 1
    A1.disabled = currentMoney < 10
    A2.disabled = currentMoney < 25
    A3.disabled = currentMoney < 100
    A4.disabled = currentMoney < 250
}