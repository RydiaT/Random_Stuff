class Enemy {
    constructor(name, attack, defense, hp, consthp, attack_range, expGiven) {
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.ar = attack_range
        this.name = name
        this.expGiven = expGiven
        this.const_hp = consthp
    }
    attackPlayer() {
        let multiplier = Math.floor(Math.random() * this.ar)
        let damageDone = (this.attack * multiplier) - player.defense
        if (damageDone <= 0) {
            damageDealt.innerHTML = this.name + ": 0 Damage Done"
        } else {
            player.hp = player.hp - damageDone
            damageDealt.innerHTML = this.name + `: ${damageDone} Damage Done`
            console.log(`Player HP: ${player.hp}`)
            updateScreen();
            checkBattleEnd();
        }
    }
}