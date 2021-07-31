let money = 0
let moneyPerSecond = 0;
let moneySpeed = 1000;
let moneyPerClick = 1
let totalMoneyEarned = 0;
let multiplier = 1.0;
let makeMoney = () => {
    money += (moneyPerClick * multiplier)
    totalMoneyEarned += (moneyPerClick * multiplier)
    updateScreen();
    checkShop()
}
let gainMoneyIdle = (x) => {
    moneyPerSecond += x
    console.log("Money Per Second: " + moneyPerSecond * multiplier)
    setInterval(function(){
        money += (moneyPerSecond * multiplier)
        totalMoneyEarned += (moneyPerSecond * multiplier)
        updateScreen()
        checkShop()
    }, moneySpeed)
}
let buyThing = (item) => {
    if(item === 1){
        money -= 10
        moneyPerClick += 1
        console.log("Bought Mug!")
        checkShop()
        updateScreen()
    }else if(item === 2) {
        money -= 100
        gainMoneyIdle(1)
        console.log("Bought Worker!")
        checkShop()
        updateScreen()
    }else if(item === 3) {
        money -= 1000
        moneySpeed -= 200
        console.log("Capitalism Ho!!")
        itemButton3.onclick = false
        itemButton3.innerHTML = "Already Bought!"
        updateScreen()
    }else if(item === 4) {
        money -= 500
        gainMoneyIdle(5)
        console.log("Beware Ants!")
        checkShop()
        updateScreen()
    }else if(item === "A") {
        money -= 25
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        console.log(red, green, blue)
        screen.style = "background-color: rgb(" + red + "," + green + ',' + blue + ")"
        console.log("Changed Colour!")
        checkShop()
        updateScreen()
    }else if(item === "B") {
        money -= 50
        console.log("Added Button!")
        itemShop.hidden = false
        decorationButton2.onclick = false
        decorationButton2.innerHTML = "Already Bought!"
        updateScreen()
    }

}
let checkShop = () => {
    itemButton1.disabled = money < 10;
    itemButton2.disabled = money < 100;
    itemButton3.disabled = money < 1000;
    itemButton4.disabled = money < 500;
    decorationButton1.disabled = money < 25;
    decorationButton2.disabled = money < 50;
}
let prestige = () => {
    multiplier += totalMoneyEarned / 18000
    money = 0
    moneyPerSecond = 0
    totalMoneyEarned = 0;
    moneyPerClick = 1
    moneySpeed = 1000;
    itemShop.hidden = true
    decorationButton2.innerHTML = "Buy"
    itemButton3.innerHTML = "Buy"
    itemButton3.onclick = function(){buyThing("3")}
    decorationButton2.onclick = function(){buyThing("B")}
}
let checkPrestige = () => {
    prestigeButton.disabled = totalMoneyEarned < 10000
}