class Enemy {
    constructor(attack, defense, hp, attack_range) {
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.ar = attack_range
    }
    attackPlayer() {
        let multiplier = Math.floor(Math.random() * this.ar)
        let damageDone = (this.attack * multiplier) - player.defense
        if (damageDone <= 0) {
            console.log("Enemy: 0 Damage Done")
        } else {
            player.hp = player.hp - damageDone
            console.log(`Enemy dealt ${damageDone}.`)
            console.log(`Player HP: ${player.hp}`)
            updateScreen()
        }
    }
}