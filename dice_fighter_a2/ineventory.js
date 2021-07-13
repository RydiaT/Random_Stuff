
class Item {
    constructor(name, use, potency, dropChance) {
    this.name = name
    this.use = use
    this.potency = potency
        this.id = 1;
    this.dropChance = dropChance
    }
    addToInventory(){
        this.id = invArray.length++
        inventory.innerHTML += "<tr id=" + this.id + "><td>" + this.name + "</td><td>" + this.use + "</td></tr>"
        invArray.push(this.name)
        console.log(invArray)
        console.log(this.id)
    }
    useItem(){
        if (invArray.includes(this.name)) {
        if (this.use === "Heal") {
            let multiplier = Math.floor(Math.random() * this.potency)
            let healingDone = player.attack * multiplier
                if (player.hp + healingDone > player.const_hp) {
                    player.hp = player.const_hp
                } else {
                    player.hp += healingDone
                }
                playerDamageDealt.innerHTML = "Potion Healed for: " + healingDone
                updateScreen();
        } else if (this.use === "Attack") {
            let multiplier = Math.floor(Math.random() * this.potency)
            let buffStrength = player.attack * multiplier
            if (buffStrength + player.attack > player.const_attack / 2) {
                player.attack += player.const_attack / 2.5
            } else {
                player.attack += buffStrength
            }
            playerDamageDealt.innerHTML = "Potion Buffed Attack for: " + Math.floor(buffStrength)
        } else if (this.use === "Defense") {
            let multiplier = Math.floor(Math.random() * this.potency)
            let buffDefense = player.attack * multiplier
            if (buffDefense + player.defense > player.const_defense / 2) {
                player.defense += player.const_defense / 2
            } else {
                player.defense += buffDefense
            }
            playerDamageDealt.innerHTML = "Potion Buffed Defense for: " + Math.floor(buffDefense)
        } else {
            console.log("Something went wrong with item uses")
        }
        invArray.splice(invArray.indexOf(this.name), 1)
            inventory.deleteRow(this.id)
        } else {
            console.log("That isn't in your inventory!")
        }
    }
}