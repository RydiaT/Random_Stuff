let updateScreen = function () {
    document.getElementById("moneyDisplay").innerHTML = "Money: " + money.toFixed(2)
    document.getElementById("moneyPerClick").innerHTML = "Money Per Click: " + moneyPerClick.toFixed(2)
    document.getElementById("moneyPerSecond").innerHTML = "Money Per Second: " + moneyPerSecond.toFixed(2) + "/" + moneySpeed / 1000 + " Sec."
    document.getElementById("currentPTS").innerHTML = "Current Prestige Points: " + prestigePoints
    document.getElementById("currentMulti").innerHTML = "Current Multiplier: " + multiplier
    document.getElementById("nextPTS").innerHTML = "Points On Prestige: " + (Math.round(Math.log(totalMoneyEarned)) - 10)
    document.getElementById("nextMulti").innerHTML = "Multiplier On Prestige: " + Math.round((Math.round(Math.log(totalMoneyEarned)) - 10) * 0.1)
    document.getElementById("nextMulti").innerHTML = "Multiplier On Prestige: " + Math.round((Math.round(Math.log(totalMoneyEarned)) - 10) * 0.1)
}
