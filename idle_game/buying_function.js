//Buys the item in the shop
let buyThing = (item) => {
    //Upgrades
    if (item === 1) {
        money -= 10
        moneyPerClick += 1
        console.log("Bought Mug!")
        checkShop()
        updateScreen()
    } else if (item === 2) {
        money -= 100
        gainMoneyIdle(1)
        console.log("Bought Worker!")
        checkShop()
        updateScreen()
    } else if (item === 3) {
        money -= 1000
        moneySpeed -= 200
        console.log("Capitalism Ho!!")
        itemButtonA3.onclick = false
        itemButtonA3.innerHTML = "Already Bought!"
        updateScreen()
    } else if (item === 4) {
        money -= 500
        gainMoneyIdle(5)
        console.log("Beware Ants!")
        checkShop()
        updateScreen()
    } else if (item === 5) {
        money -= 100000
        moneyPerClick += 500
        console.log("Ad or Motivation?")
        checkShop();
        updateScreen()
    } else if (item === 6) {
        money -= 100000000
        moneyPerSecond += 1000
        console.log("More Than McDonald's!")
        checkShop()
        updateScreen()
    } else if (item === 7) {
        money -= 150000000
        moneySpeed -= 200
        console.log("Speeeeeeeeed")
        itemButtonB3.onclick = false
        itemButtonB3.innerHTML = "Already Bought!"
        updateScreen()
    } else if (item === 8) {
        money -= 500000000
        moneyPerSecond += 500000
        console.log("Capitalism Ho!!")
        checkShop()
        updateScreen()
    } else if (item === "A") {
        money -= 25
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        screen.style = "background-color: rgb(" + red + "," + green + ',' + blue + ")"
        console.log("Changed Colour!")
        checkShop()
        updateScreen()
    }
    //Decoration
    else if (item === "B") {
        money -= 50
        console.log("Added Button!")
        itemShop.hidden = false
        decorationButton2.onclick = false
        decorationButton2.innerHTML = "Already Bought!"
        updateScreen()
    } else if (item === "C") {
        money -= 50
        console.log("Added Button!")
        itemShop2.hidden = false
        decorationButton3.onclick = false
        decorationButton3.innerHTML = "Already Bought!"
        updateScreen()
    }
}