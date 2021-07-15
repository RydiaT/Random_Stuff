let autoAttack
class Enemy {
    constructor(name, attack, defense, hp, const_hp, attack_range, expGiven, attack_speed, itemsDropped) {
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.ar = attack_range
        this.name = name
        this.expGiven = expGiven
        this.const_hp = const_hp
        this.as = attack_speed
        this.itemsDropped = itemsDropped
    }
    attackPlayer() {
        autoAttack = setInterval(function(){
        let multiplier = Math.floor(Math.random() * currentEnemy.ar)
        let damageDone = (currentEnemy.attack * multiplier) - player.defense
        if (damageDone <= 0) {
            enemyDamageDealt.innerHTML = currentEnemy.name + ": 0 Damage Done"
        } else {
            player.hp = player.hp - damageDone
            enemyDamageDealt.innerHTML = currentEnemy.name + `: ${damageDone} Damage Done`
            console.log(`Player HP: ${player.hp}`)
            updateScreen();
            checkBattleEnd();
        }
        }, currentEnemy.as)
        return autoAttack
    }
    dropItem() {
        let random = Math.random()
        let x = 0
        while (x < this.itemsDropped.length) {
            if (random >= this.itemsDropped[x].dropChance) {
                this.itemsDropped[x].addToInventory();
            }
            x++
        }
    }
}