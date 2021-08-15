let shops = {
    decorShop: {
        item1: {
            name: "Background Color Randomizer",
            description: "Randomizes the background color.",
            cost: function(){money -= 50},
            textCost: "50 Money",
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                checkAllShops()
            },
            use: function(){
                let red = Math.floor(Math.random() * 256)
                let blue = Math.floor(Math.random() * 256)
                let green = Math.floor(Math.random() * 256)
                document.getElementById("body").style.backgroundColor = "rgb(" + red + "," + blue + "," + green + ")"
            }
        },
        item2: {
            name: "Shop 1",
            description: "Baby's first upgrade shop!",
            cost: function(){money -= 25},
            use: function(){
                document.getElementById("shop1Button").hidden = false
            },
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                checkAllShops()
                document.getElementById("itemA2").innerHTML = "Bought!"
                document.getElementById("itemA2").onclick = function(){}
            },
            textCost: "25 Money; Can Only Be Bought Once"
        },
        item3: {
            name: "Shop 2",
            description: "How am I supposed to afford this?",
            cost: function(){money -= 100000},
            use: function(){
                document.getElementById("shop2Button").hidden = false
            },
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                checkAllShops()
                document.getElementById("itemA3").innerHTML = "Bought!"
                document.getElementById("itemA3").onclick = function(){}
            },
            textCost: "100,000 Money; Can Only Be Bought Once"
        },
        item4: {
            name: "Shop 3",
            description: "Is that even a real number?",
            cost: function(){money -= 500000000000},
            use: function(){
                document.getElementById("shop3Button").hidden = false
            },
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                checkAllShops()
                document.getElementById("itemA4").innerHTML = "Bought!"
                document.getElementById("itemA4").onclick = function(){}
            },
            textCost: "500,000,000,000 Money; Can Only Be Bought Once"
        },
        item5: {
            name: "Shop 4",
            description: "Might as well just sacrifice money speed at this point. (500,000,000,000,000,000 Money Required To Buy)",
            cost: function(){moneySpeed += 1500},
            use: function(){
                document.getElementById("shop4Button").hidden = false
            },
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                checkAllShops()
                document.getElementById("itemA5").innerHTML = "Bought!"
                document.getElementById("itemA5").onclick = function(){}
            },
            textCost: "+1.5 seconds to MPS; Can Only Be Bought Once"
        },
        modalSetup: function(){
            document.getElementById("decoShopBody").innerHTML +=
                "<div class='row'>" +
                "<label for='itemA1'>" + this.item1.name + "<br>Description: " + this.item1.description + "<br>Cost: " + this.item1.textCost + "</label>" +
                "<button id='itemA1' class='btn btn-outline-dark' type='button' onclick='shops.decorShop.item1.buyThing()'>Buy</button>" +
                "</div>"
            document.getElementById("decoShopBody").innerHTML +=
                "<div class='row'>" +
                "<label for='itemA2'>" + this.item2.name + "<br>Description: " + this.item2.description + "<br>Cost: " + this.item2.textCost + "</label>" +
                "<button id='itemA2' class='btn btn-outline-dark' type='button' onclick='shops.decorShop.item2.buyThing()'>Buy</button>" +
                "</div>"
            document.getElementById("decoShopBody").innerHTML +=
                "<div class='row'>" +
                "<label for='itemA3'>" + this.item3.name + "<br>Description: " + this.item3.description + "<br>Cost: " + this.item3.textCost + "</label>" +
                "<button id='itemA3' class='btn btn-outline-dark' type='button' onclick='shops.decorShop.item3.buyThing()'>Buy</button>" +
                "</div>"
            document.getElementById("decoShopBody").innerHTML +=
                "<div class='row'>" +
                "<label for='itemA4'>" + this.item4.name + "<br>Description: " + this.item4.description + "<br>Cost: " + this.item4.textCost + "</label>" +
                "<button id='itemA4' class='btn btn-outline-dark' type='button' onclick='shops.decorShop.item4.buyThing()'>Buy</button>" +
                "</div>"
            document.getElementById("decoShopBody").innerHTML +=
                "<div class='row'>" +
                "<label for='itemA5'>" + this.item5.name + "<br>Description: " + this.item5.description + "<br>Cost: " + this.item5.textCost + "</label>" +
                "<button id='itemA5' class='btn btn-outline-dark' type='button' onclick='this.item5.buyThing()'>Buy</button>" +
                "</div>"
        },
        checkButtons: function(){
            document.getElementById("itemA1").disabled = money < 50
            document.getElementById("itemA2").disabled = money < 25
            document.getElementById("itemA3").disabled = money < 100000
            document.getElementById("itemA4").disabled = money < 500000000000
            document.getElementById("itemA5").disabled = money < 500000000000000000
        }
    },
    shop1: {
        item1: {
            name: "#1 Boss Mug",
            description: "More coffee = More Productivity! +1 MPC",
            cost: function(){money -= 10},
            textCost: "10 Money",
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                checkAllShops()
            },
            use: function(){
                moneyPerClick++
            }
        },
        item2: {
            name: "Hire Workers",
            description: "Cardboard Cubicles And All. +1 MPS",
            cost: function(){money -= 50},
            use: function(){
                moneyPerSecond++
            },
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                checkAllShops()
            },
            textCost: "50 Money"
        },
        item3: {
            name: "Faster Conveyors",
            description: "Speed = Time = Money, Right? -.2 Seconds From MPS",
            cost: function(){money -= 1000},
            use: function(){
                moneySpeed -= 200
            },
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                checkAllShops()
                document.getElementById("itemB3").innerHTML = "Bought!"
                document.getElementById("itemB3").onclick = function(){}
            },
            textCost: "1,000 Money; Can Only Be Bought Once"
        },
        item4: {
            name: "More Workers!",
            description: "Math checks out. +5 MPS",
            cost: function(){money -= 250},
            use: function(){
                moneyPerSecond += 5
            },
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                checkAllShops()
            },
            textCost: "250 Money"
        },
        modalSetup: function(){
            document.getElementById("shop1Body").innerHTML +=
                "<div class='row'>" +
                "<label for='itemB1'>" + this.item1.name + "<br>Description: " + this.item1.description + "<br>Cost: " + this.item1.textCost + "</label>" +
                "<button id='itemB1' class='btn btn-outline-dark' type='button' onclick='shops.shop1.item1.buyThing()'>Buy</button>" +
                "</div>"
            document.getElementById("shop1Body").innerHTML +=
                "<div class='row'>" +
                "<label for='itemB2'>" + this.item2.name + "<br>Description: " + this.item2.description + "<br>Cost: " + this.item2.textCost + "</label>" +
                "<button id='itemB2' class='btn btn-outline-dark' type='button' onclick='shops.shop1.item2.buyThing()'>Buy</button>" +
                "</div>"
            document.getElementById("shop1Body").innerHTML +=
                "<div class='row'>" +
                "<label for='itemB3'>" + this.item3.name + "<br>Description: " + this.item3.description + "<br>Cost: " + this.item3.textCost + "</label>" +
                "<button id='itemB3' class='btn btn-outline-dark' type='button' onclick='shops.shop1.item3.buyThing()'>Buy</button>" +
                "</div>"
            document.getElementById("shop1Body").innerHTML +=
                "<div class='row'>" +
                "<label for='itemB4'>" + this.item4.name + "<br>Description: " + this.item4.description + "<br>Cost: " + this.item4.textCost + "</label>" +
                "<button id='itemB4' class='btn btn-outline-dark' type='button' onclick='shops.shop1.item4.buyThing()'>Buy</button>" +
                "</div>"
        },
        checkButtons: function(){
            document.getElementById("itemB1").disabled = money < 10
            document.getElementById("itemB2").disabled = money < 50
            document.getElementById("itemB3").disabled = money < 1000
            document.getElementById("itemB4").disabled = money < 250
        }
    },
    shop2: {
        item1: {
            name: "More Keyboards",
            description: "*click click click click* +50 MPC",
            cost: function(){money -= 50000},
            textCost: "50,000 Money",
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                checkAllShops()
            },
            use: function(){
                moneyPerClick += 50
            }
        },
        item2: {
            name: "Interns!",
            description: "Its almost like free labor. +100 MPS",
            cost: function(){money -= 150000},
            use: function(){
                moneyPerSecond += 100
            },
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                checkAllShops()
            },
            textCost: "150,000 Money"
        },
        item3: {
            name: "Teleporters?",
            description: "What did that guy in the back alley sell me? -.2 Seconds From MPS",
            cost: function(){money -= 1000000},
            use: function(){
                moneySpeed -= 200
            },
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                checkAllShops()
                document.getElementById("itemC3").innerHTML = "Bought!"
                document.getElementById("itemC3").onclick = function(){}
            },
            textCost: "1,000,000 Money; Can Only Be Bought Once"
        },
        item4: {
            name: "Company Picnic!",
            description: "Beware ants. +500 MPS",
            cost: function(){money -= 500000},
            use: function(){
                moneyPerSecond += 5
            },
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                checkAllShops()
            },
            textCost: "500,000 Money"
        },
        modalSetup: function(){
            document.getElementById("shop2Body").innerHTML +=
                "<div class='row'>" +
                "<label for='itemC1'>" + this.item1.name + "<br>Description: " + this.item1.description + "<br>Cost: " + this.item1.textCost + "</label>" +
                "<button id='itemC1' class='btn btn-outline-dark' type='button' onclick='shops.shop2.item1.buyThing()'>Buy</button>" +
                "</div>"
            document.getElementById("shop2Body").innerHTML +=
                "<div class='row'>" +
                "<label for='itemC2'>" + this.item2.name + "<br>Description: " + this.item2.description + "<br>Cost: " + this.item2.textCost + "</label>" +
                "<button id='itemC2' class='btn btn-outline-dark' type='button' onclick='shops.shop2.item2.buyThing()'>Buy</button>" +
                "</div>"
            document.getElementById("shop2Body").innerHTML +=
                "<div class='row'>" +
                "<label for='itemC3'>" + this.item3.name + "<br>Description: " + this.item3.description + "<br>Cost: " + this.item3.textCost + "</label>" +
                "<button id='itemC3' class='btn btn-outline-dark' type='button' onclick='shops.shop2.item3.buyThing()'>Buy</button>" +
                "</div>"
            document.getElementById("shop2Body").innerHTML +=
                "<div class='row'>" +
                "<label for='itemC4'>" + this.item4.name + "<br>Description: " + this.item4.description + "<br>Cost: " + this.item4.textCost + "</label>" +
                "<button id='itemC4' class='btn btn-outline-dark' type='button' onclick='shops.shop2.item4.buyThing()'>Buy</button>" +
                "</div>"
        },
        checkButtons: function(){
            document.getElementById("itemC1").disabled = money < 50000
            document.getElementById("itemC2").disabled = money < 150000
            document.getElementById("itemC3").disabled = money < 1000000
            document.getElementById("itemC4").disabled = money < 500000
        }
    },
    shop3: {
        item1: {
            name: "Better Coffee",
            description: "Desperately Needed. +100,000 MPC",
            cost: function(){money -= 450000000000},
            textCost: "450,000,000,000 Money",
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                checkAllShops()
            },
            use: function(){
                moneyPerClick += 100000
            }
        },
        item2: {
            name: "Robots!",
            description: "They move the employees like puppets heh. +100,000 MPS",
            cost: function(){money -= 800000000000},
            use: function(){
                moneyPerSecond += 100000
            },
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                checkAllShops()
            },
            textCost: "800,000,000,000 Money"
        },
        item3: {
            name: "Hire The Guy In The Back Alley",
            description: "He has some interesting meth-ods. -.5 Seconds From MPS",
            cost: function(){money -= 1000000000000},
            use: function(){
                moneySpeed -= 500
            },
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                document.getElementById("itemD3").innerHTML = "Bought!"
                document.getElementById("itemD3").onclick = function(){}
                checkAllShops()
            },
            textCost: "1,000,000,000,000 Money; Can Only Be Bought Once"
        },
        item4: {
            name: "Company Fair!",
            description: "This one is mostly for the bosses kid. +500 MPS",
            cost: function(){money -= 700000000000},
            use: function(){
                moneyPerSecond += 500
            },
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                checkAllShops()
            },
            textCost: "700,000,000,000 Money"
        },
        modalSetup: function(){
            document.getElementById("shop3Body").innerHTML +=
                "<div class='row'>" +
                "<label for='itemD1'>" + this.item1.name + "<br>Description: " + this.item1.description + "<br>Cost: " + this.item1.textCost + "</label>" +
                "<button id='itemD1' class='btn btn-outline-dark' type='button' onclick='shops.shop3.item1.buyThing()'>Buy</button>" +
                "</div>"
            document.getElementById("shop3Body").innerHTML +=
                "<div class='row'>" +
                "<label for='itemD2'>" + this.item2.name + "<br>Description: " + this.item2.description + "<br>Cost: " + this.item2.textCost + "</label>" +
                "<button id='itemD2' class='btn btn-outline-dark' type='button' onclick='shops.shop3.item2.buyThing()'>Buy</button>" +
                "</div>"
            document.getElementById("shop3Body").innerHTML +=
                "<div class='row'>" +
                "<label for='itemD3'>" + this.item3.name + "<br>Description: " + this.item3.description + "<br>Cost: " + this.item3.textCost + "</label>" +
                "<button id='itemD3' class='btn btn-outline-dark' type='button' onclick='shops.shop3.item3.buyThing()'>Buy</button>" +
                "</div>"
            document.getElementById("shop3Body").innerHTML +=
                "<div class='row'>" +
                "<label for='itemD4'>" + this.item4.name + "<br>Description: " + this.item4.description + "<br>Cost: " + this.item4.textCost + "</label>" +
                "<button id='itemD4' class='btn btn-outline-dark' type='button' onclick='shops.shop3.item4.buyThing()'>Buy</button>" +
                "</div>"
        },
        checkButtons: function(){
            document.getElementById("itemD1").disabled = money < 450000000000
            document.getElementById("itemD2").disabled = money < 800000000000
            document.getElementById("itemD3").disabled = money < 1000000000000
            document.getElementById("itemD4").disabled = money < 700000000000
        }
    },
    shop4: {
        item1: {
            name: "Blood Sacrifice To The Internet Gods!",
            description: "Requires animal crackers. +100,000,000,000 MPC",
            cost: function(){moneySpeed += 500},
            textCost: "+.5 seconds to MPS",
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                checkAllShops()
            },
            use: function(){
                moneyPerClick += 100000000000
            }
        },
        item2: {
            name: "CEO Headhunt!",
            description: "Man these burgers taste great. +100,000,000,000 MPS",
            cost: function(){moneySpeed += 1000},
            use: function(){
                moneyPerSecond += 100000000000
            },
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                checkAllShops()
            },
            textCost: "+1 second to MPS"
        },
        item3: {
            name: "Invent The Back Alley Dudes Time Machine",
            description: "I'm really not sure how all this works. -5 Seconds From MPS.",
            cost: function(){money -= 1000000000000},
            use: function(){
                moneySpeed -= 5000
            },
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                checkAllShops()
            },
            textCost: "1/2 Your MPS. Can Only Be Bought When You Have > 5,000,000,000,000 MPS AND > 5 seconds MPS"
        },
        item4: {
            name: "Company Disney World Trip!",
            description: "Right in the middle of summer. +500,000,000,000 MPS",
            cost: function(){moneySpeed += 2500},
            use: function(){
                moneyPerSecond += 500000000000
            },
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                checkAllShops()
            },
            textCost: "+2.5 Seconds To MPS"
        },
        modalSetup: function(){
            document.getElementById("shop4Body").innerHTML +=
                "<div class='row'>" +
                "<label for='itemE1'>" + this.item1.name + "<br>Description: " + this.item1.description + "<br>Cost: " + this.item1.textCost + "</label>" +
                "<button id='itemE1' class='btn btn-outline-dark' type='button' onclick='shops.shop4.item1.buyThing()'>Buy</button>" +
                "</div>"
            document.getElementById("shop4Body").innerHTML +=
                "<div class='row'>" +
                "<label for='itemE2'>" + this.item2.name + "<br>Description: " + this.item2.description + "<br>Cost: " + this.item2.textCost + "</label>" +
                "<button id='itemE2' class='btn btn-outline-dark' type='button' onclick='shops.shop4.item2.buyThing()'>Buy</button>" +
                "</div>"
            document.getElementById("shop4Body").innerHTML +=
                "<div class='row'>" +
                "<label for='itemE3'>" + this.item3.name + "<br>Description: " + this.item3.description + "<br>Cost: " + this.item3.textCost + "</label>" +
                "<button id='itemE3' class='btn btn-outline-dark' type='button' onclick='shops.shop4.item3.buyThing()'>Buy</button>" +
                "</div>"
            document.getElementById("shop4Body").innerHTML +=
                "<div class='row'>" +
                "<label for='itemE4'>" + this.item4.name + "<br>Description: " + this.item4.description + "<br>Cost: " + this.item4.textCost + "</label>" +
                "<button id='itemE4' class='btn btn-outline-dark' type='button' onclick='shops.shop4.item4.buyThing()'>Buy</button>" +
                "</div>"
        },
        checkButtons: function(){
            document.getElementById("itemE3").disabled = moneyPerSecond < 5000000000000 && moneySpeed < 5000
            document.getElementById("itemE3").disabled = moneyPerClick < 5000000000000000000
        }
    },
    prestige: {
        prestigeCalculator: function(){
            prestigePoints =  Math.round(Math.log(totalMoneyEarned)) - 10
            let newMulti = Math.round(prestigePoints * 0.1);
            if(newMulti > 0) multiplier = newMulti;
        },
        doPrestige: function(){
            this.prestigeCalculator()
            document.getElementById("itemA2").innerHTML = "Buy"
            document.getElementById("itemA2").onclick = function(){shops.decorShop.item2.buyThing()}
            document.getElementById("itemA3").innerHTML = "Buy"
            document.getElementById("itemA3").onclick = function(){shops.decorShop.item3.buyThing()}
            document.getElementById("itemA4").innerHTML = "Buy"
            document.getElementById("itemA4").onclick = function(){shops.decorShop.item4.buyThing()}
            document.getElementById("itemA5").innerHTML = "Buy"
            document.getElementById("itemA5").onclick = function(){shops.decorShop.item5.buyThing()}
            document.getElementById("itemB3").innerHTML = "Buy"
            document.getElementById("itemB3").onclick = function(){shops.shop1.item3.buyThing()}
            document.getElementById("itemC3").innerHTML = "Buy"
            document.getElementById("itemC3").onclick = function(){shops.shop2.item3.buyThing()}
            document.getElementById("itemD3").innerHTML = "Buy"
            document.getElementById("itemD3").onclick = function(){shops.shop3.item3.buyThing()}
            document.getElementById("itemE3").innerHTML = "Buy"
            document.getElementById("itemE3").onclick = function(){shops.shop4.item3.buyThing()}
            money = 0
            moneySpeed = 1000
            moneyPerClick = 1
            moneyPerSecond = 0
            totalMoneyEarned = 0
            numPrestige++
        },
        checkButtons: function (){
                document.getElementById("prestigeButton").disabled = totalMoneyEarned < 50000
        }
    },
    prestigeShop: {
        item1: {
            name: "Mmmm money",
            description: "Gives you a money injection of 50,000",
            timesBought: 0,
            cost: function(x){
                let usableTimesBought = this.timesBought
                if (this.timesBought <= 0) usableTimesBought = 1
                let pointsRemoved = x ** usableTimesBought
                prestigePoints -= pointsRemoved
                return pointsRemoved
            },
            textCost:  this.cost(1) + " Prestige Point(s)",
            buyThing: function(){
                this.cost(1)
                this.use()
                updateScreen()
                checkAllShops()
            },
            use: function(){
                money += 50000
            }
        },
        item2: {
            name: "Roll Dem' Bones",
            description: "Every buy comes with a 75% percent chance to give you 50,000, and a 25% chance to give you 500,000, and a 2% chance to give 5,000,000.",
            cost: function(x){
                let usableTimesBought = this.timesBought
                if (this.timesBought <= 0) usableTimesBought = 1
                let pointsRemoved = x ** usableTimesBought
                prestigePoints -= pointsRemoved
                return pointsRemoved
            },
            use: function(){
                let r = Math.random()
                if(r > .98){
                    money += 5000000
                } else if(r > .75) {
                    money += 500000
                } else if(r > .25) {
                    money += 50000
                }
            },
            buyThing: function(){
                this.cost(10)
                this.use()
                updateScreen()
                checkAllShops()
            },
            textCost: this.cost(10) + " Prestige Point(s)"
        },
        item3: {
            name: "Y'know, I really do like money.",
            description: "Each time you buy, increases MPS by 20%",
            cost: function(x){
                let usableTimesBought = this.timesBought
                if (this.timesBought <= 0) usableTimesBought = 1
                let pointsRemoved = x ** usableTimesBought
                prestigePoints -= pointsRemoved
                return pointsRemoved
            },
            use: function(){
                moneyPerSecond += moneyPerSecond * 0.20
            },
            buyThing: function(){
                this.cost(10)
                this.use()
                updateScreen()
                checkAllShops()
            },
            textCost: this.cost(10) + " Prestige Point(s)"
        },
        item4: {
            name: "Rebirth!",
            description: "Dying isn't painful is it? At least I have my money.",
            cost: function(){
                prestigePoints -= 5000000000
            },
            use: function(){
                console.log("I'm sure something happened.")
            },
            buyThing: function(){
                this.cost()
                this.use()
                updateScreen()
                checkAllShops()
                document.getElementById("itemF4").innerHTML = "Bought!"
                document.getElementById("itemF4").onclick = function(){}
            },
            textCost: "5,000,000,000 Prestige Points"
        },
        modalSetup: function(){
            document.getElementById("prestigeShopBody").innerHTML +=
                "<div class='row'>" +
                "<label for='itemF1'>" + this.item1.name + "<br>Description: " + this.item1.description + "<br>Cost: " + this.item1.textCost + "</label>" +
                "<button id='itemF1' class='btn btn-outline-dark' type='button' onclick='shops.prestigeShop.item1.buyThing()'>Buy</button>" +
                "</div>"
            document.getElementById("prestigeShopBody").innerHTML +=
                "<div class='row'>" +
                "<label for='itemF2'>" + this.item2.name + "<br>Description: " + this.item2.description + "<br>Cost: " + this.item2.textCost + "</label>" +
                "<button id='itemF2' class='btn btn-outline-dark' type='button' onclick='shops.prestigeShop.item2.buyThing()'>Buy</button>" +
                "</div>"
            document.getElementById("prestigeShopBody").innerHTML +=
                "<div class='row'>" +
                "<label for='itemF3'>" + this.item3.name + "<br>Description: " + this.item3.description + "<br>Cost: " + this.item3.textCost + "</label>" +
                "<button id='itemF3' class='btn btn-outline-dark' type='button' onclick='shops.prestigeShop.item3.buyThing()'>Buy</button>" +
                "</div>"
            document.getElementById("prestigeShopBody").innerHTML +=
                "<div class='row'>" +
                "<label for='itemF4'>" + this.item4.name + "<br>Description: " + this.item4.description + "<br>Cost: " + this.item4.textCost + "</label>" +
                "<button id='itemF4' class='btn btn-outline-dark' type='button' onclick='shops.prestigeShop.item4.buyThing()'>Buy</button>" +
                "</div>"
        },
        checkButtons: function(){
            document.getElementById("itemF1").disabled = prestigePoints < this.item1.cost(1)
            document.getElementById("itemF2").disabled = prestigePoints < this.item1.cost(10)
            document.getElementById("itemF3").disabled = prestigePoints < this.item1.cost(10)
            document.getElementById("itemF4").disabled = prestigePoints < 5000000000
        }
    },
}
let setupAllShops = function(){
    shops.decorShop.modalSetup();
    shops.shop1.modalSetup();
    shops.shop2.modalSetup();
    shops.shop3.modalSetup();
    shops.shop4.modalSetup();
    shops.prestigeShop.modalSetup()
}
let checkAllShops = function(){
    shops.decorShop.checkButtons()
    shops.shop1.checkButtons();
    shops.shop2.checkButtons()
    shops.shop3.checkButtons()
    shops.shop4.checkButtons()
    shops.prestige.checkButtons()
    shops.prestigeShop.checkButtons()
}