class Enemy {
    constructor(name, health, defense, damage, aspect, EXP, gold, const_hp, attack_spd) {
        this.health = health
        this.defense = defense
        this.damage = damage
        this.aspect = aspect
        this.name = name
        this.EXP = EXP
        this.gold = gold
        this.const_hp = const_hp
        this.attack_spd = attack_spd
    }
    enemyAttack() {
         INTERVAL = setInterval(function() {

             let damageDone = PLAYER_DEFENSE - POSSIBLE_ENEMIES[ENEMY_INDEX].damage * Math.floor(Math.random() * POSSIBLE_ENEMIES[ENEMY_INDEX].damage)
             PLAYER_HP =- damageDone
             console.log('Enemy attacked!')
             console.log(damageDone)
             endBattle();
             expArea.innerHTML = PLAYER_EXP + " / " + EXP_NEEDED
        }, this.attack_spd)
    }
}