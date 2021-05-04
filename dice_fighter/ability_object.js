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
            let enemyDefense = POSSIBLE_ENIMIES[ENEMYNUMBER].defense
            let damageDone = (PLAYER_ATTACK * this.damage_range) - enemyDefense
            POSSIBLE_ENIMIES[ENEMYNUMBER].heath -= damageDone
        }
        if (this.type === 'Defend') {

        }
    }
    showDescription() {
        descriptionArea.innerHTML = this.discription
    }
}