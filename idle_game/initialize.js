//ID Variables
let moneyCounter;
let screen;
let itemButtonA1;
let itemButtonA2;
let itemButtonA3;
let itemButtonA4;
let itemButtonB1;
let itemButtonB2;
let itemButtonB3;
let itemButtonB4;
let decorationButton1;
let decorationButton2;
let decorationButton3;
let itemShop;
let itemShop2;
let prestigeButton;
let total;
let MPC;
let MPS;
//Initializer Function
let initialize = () => {
    moneyCounter = document.getElementById("moneyCounter")
    screen = document.getElementById('screen')
    itemButtonA1 = document.getElementById("itemButtonA1")
    itemButtonA2 = document.getElementById("itemButtonA2")
    itemButtonA3 = document.getElementById("itemButtonA3")
    itemButtonA4 = document.getElementById("itemButtonA4")
    itemButtonB1 = document.getElementById("itemButtonB1")
    itemButtonB2 = document.getElementById("itemButtonB2")
    itemButtonB3 = document.getElementById("itemButtonB3")
    itemButtonB4 = document.getElementById("itemButtonB4")
    decorationButton1 = document.getElementById("decorationButton1")
    decorationButton2 = document.getElementById("decorationButton2")
    decorationButton3 = document.getElementById("decorationButton3")
    itemShop = document.getElementById("itemShop")
    itemShop2 = document.getElementById("itemShop2")
    prestigeButton = document.getElementById("prestigeButton")
    total = document.getElementById("total")
    MPC = document.getElementById("MPC")
    MPS = document.getElementById("MPS")
}
//Updates the screen with relevant information
let updateScreen = () => {
    moneyCounter.innerHTML = "Money: " + money.toFixed(2)
    total.innerHTML =   "Total Money Earned: " + totalMoneyEarned.toFixed(2) +
                        "<br> Total Money To Prestige: " + (10000 - totalMoneyEarned).toFixed(2) +
                        "<br> Multiplier On Prestige: " + (totalMoneyEarned / 18000).toFixed(2) +
                        "<br> Current Multiplier: " + multiplier.toFixed(2)
    MPC.innerHTML = "Money Per Click: " + (moneyPerClick * multiplier).toFixed(2)
    MPS.innerHTML = "Money Per Second: " + (moneyPerSecond * multiplier).toFixed(2) + "/" + moneySpeed/1000 + " Sec."
}