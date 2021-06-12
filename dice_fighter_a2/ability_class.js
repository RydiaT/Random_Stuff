class Ability {
    constructor(damage_range, miss_chance, cooldown) {
        this.dr = damage_range
        this.mc = miss_chance
        this.cooldown = cooldown
    }
    useAbility() {
        let multiplier = Math.floor(Math.random() * this.dr)
        let damageDone = (player.attack * multiplier) - currentEnemy.defense
        let random = Math.random()
        if (random >= this.mc) {
            if (damageDone >= 0) {
                console.log("Enemy HP: " + currentEnemy.hp)
                currentEnemy.hp -= damageDone
                console.log("Enemy HP: " + currentEnemy.hp)
                playerDamageDealt.innerHTML = "Player Damage Done: " + damageDone
                updateScreen();
                checkBattleEnd();
            } else {
                playerDamageDealt.innerHTML = "Player Damage Done: 0"
            }
        } else {
            playerDamageDealt.innerHTML = "Player Missed"
        }
        attackButton.disabled = true
        setTimeout(function(){attackButton.disabled = false}, this.cooldown)
    }
}