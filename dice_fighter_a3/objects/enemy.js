class Enemy {
    constructor(hp, const_hp, attack, defense, attack_speed, name, expGiven) {
        this.hp = hp
        this.const_hp = const_hp
        this.attack = attack;
        this.defense = defense;
        this.at = attack_speed;
        this.name = name;
        this.expGiven = expGiven
    }
}
class Normal extends Enemy {
    attackPlayer(){
        let multiplier = Math.floor(Math.random() * 5)
        let damageDone = this.attack * multiplier
        if(damageDone <= player.defense) {
            enemyAttack.innerHTML = this.name + " Missed!"
        }   else {
            damageDone -= player.defense
            enemyAttack.innerHTML =  this.name + " Damage Done: " + damageDone
            player.hp -= damageDone
            checkBattleEnd();
        }
    }
}
class Boss extends Enemy {

}