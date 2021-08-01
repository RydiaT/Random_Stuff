//Global Variables
let money = 0
let moneyPerSecond = 0;
let moneySpeed = 1000;
let moneyPerClick = 1
let totalMoneyEarned = 0;
let multiplier = 1.0;
//Money Per Click function
let makeMoney = () => {
    money += (moneyPerClick * multiplier)
    totalMoneyEarned += (moneyPerClick * multiplier)
    updateScreen();
    checkShop()
}
//Money Per Second function
let gainMoneyIdle = (x) => {
    moneyPerSecond += x
    setInterval(function(){
        money += (moneyPerSecond * multiplier)
        totalMoneyEarned += (moneyPerSecond * multiplier)
        updateScreen()
        checkShop()
    }, moneySpeed)
}
//Checks if you have enough money to buy things, and if not, disables the corresponding button.
let checkShop = () => {
    itemButtonA1.disabled = money < 10;
    itemButtonA2.disabled = money < 100;
    itemButtonA3.disabled = money < 1000;
    itemButtonA4.disabled = money < 500;
    itemButtonB1.disabled = money < 100000
    itemButtonB2.disabled = money < 100000000
    itemButtonB3.disabled = money < 150000000
    itemButtonB4.disabled = money < 500000000
    decorationButton1.disabled = money < 25;
    decorationButton2.disabled = money < 50;
    decorationButton3.disabled = money < 250000;
}
//Resets everything and ups the multiplier
let prestige = () => {
    multiplier = totalMoneyEarned / 18000
    money = 0
    moneyPerSecond = 0
    totalMoneyEarned = 0;
    moneyPerClick = 1
    moneySpeed = 1000;
    itemShop.hidden = true
    itemShop2.hidden = true
    decorationButton2.innerHTML = "Buy"
    decorationButton3.innerHTML = "Buy"
    itemButtonA3.innerHTML = "Buy"
    itemButtonB3.innerHTML = "Buy"
    itemButtonA3.onclick = function(){buyThing(3)}
    itemButtonB3.onclick = function(){buyThing(7)}
    decorationButton2.onclick = function(){buyThing("B")}
    decorationButton3.onclick = function(){buyThing("C")}
    updateScreen()
}
//Checks if you CAN prestige
let checkPrestige = () => {
    prestigeButton.disabled = totalMoneyEarned < 10000
}