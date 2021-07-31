//ID Variables
let moneyCounter;
let screen;
let itemButton1;
let itemButton2;
let itemButton3;
let itemButton4;
let decorationButton1;
let decorationButton2;
let itemShop;
let prestigeButton;
let total;
let MPC;
let MPS;
//Initializer Function
let initialize = () => {
    moneyCounter = document.getElementById("moneyCounter")
    screen = document.getElementById('screen')
    itemButton1 = document.getElementById("itemButton1")
    itemButton2 = document.getElementById("itemButton2")
    itemButton3 = document.getElementById("itemButton3")
    itemButton4 = document.getElementById("itemButton4")
    decorationButton1 = document.getElementById("decorationButton1")
    decorationButton2 = document.getElementById("decorationButton2")
    itemShop = document.getElementById("itemShop")
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
    MPC.innerHTML = "Money Per Click: " + moneyPerClick.toFixed(2)
    MPS.innerHTML = "Money Per Second: " + moneyPerSecond.toFixed(2) + "/" + moneySpeed/1000 + " Sec."
}