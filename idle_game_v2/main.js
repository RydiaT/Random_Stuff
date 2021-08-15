let money = 0;
let moneySpeed = 1000;
let moneyPerClick = 1;
let moneyPerSecond = 0;
let totalMoneyEarned = 0;
let prestigePoints = 0;
let multiplier = 1;
let numPrestige = 0;
let makeMoney = function() {
    money += moneyPerClick * multiplier;
    totalMoneyEarned += moneyPerClick * multiplier;
    updateScreen();
    checkAllShops();
};
let log = () => {
    shops.prestige.prestigeCalculator();
    console.log(prestigePoints, multiplier);
};




