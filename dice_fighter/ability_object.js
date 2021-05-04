class Ability {
    constructor(name, damage_range, chance, aspect, description, type) {
        this.name = name
        this.damage_range = damage_range
        this.chance = chance
        this.aspect = aspect
        this.discription = description
        this.type = type
    }
    useAbility() {
        if (this.type === 'Heal') {

        }
        if (this.type === 'Attack') {
            let enemyDefense = POSSIBLE_ENEMIES[ENEMY_NUMBER].defense
            let damageDone = (PLAYER_ATTACK * this.damage_range) - enemyDefense
            POSSIBLE_ENEMIES[ENEMY_NUMBER].health -= damageDone
                endBattle();
                console.log(POSSIBLE_ENEMIES[ENEMY_NUMBER].health)
                console.log(POSSIBLE_ENEMIES[ENEMY_NUMBER].name)
                console.log(BATTLE_OVER)
        }
        if (this.type === 'Defend') {

        }
    }
    showDescription() {
        descriptionArea.innerHTML = this.discription
    }
}