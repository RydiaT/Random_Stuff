class Ability {
    constructor(damage_range, miss_chance) {
        this.dr = damage_range
        this.mc = miss_chance
    }
    useAbility(target) {
        let multiplier = Math.floor(Math.random() * this.dr)
        let damageDone = (player.attack * multiplier) - target.defense
        let random = Math.random()
        if (random >= this.mc) {
            if (damageDone >= 0) {
                console.log("Enemy HP: " + target.hp)
                target.hp -= damageDone
                console.log("Enemy HP: " + target.hp)
                console.log("Player Damage Done:" + damageDone)
                updateScreen();
            } else {
                console.log("Player Damage Done: 0")
            }
        } else {
            console.log("Player Missed")
        }
    }
}