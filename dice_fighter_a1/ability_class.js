class Ability {
    constructor(name, damage_range, chance, aspect, description, type) {
        this.name = name
        this.damage_range = damage_range
        this.chance = chance
        this.aspect = aspect
        this.discription = description
        this.type = type
        this.missNumber = 0
    }
    useAbility() {
        if (this.type === 'Heal') {
            let miss = Math.random()
            if (miss <= this.chance){
            let hpRecovered = (PLAYER_HP * this.damage_range) + Math.floor(Math.random() * PLAYER_ATTACK)
            PLAYER_HP += hpRecovered
            } else {
                missArea.innerHTML = 'Heal Missed!'
                setTimeout(function() {
                    missArea.innerHTML = '';
                }, 1000);
            }
        }
        if (this.type === 'Attack') {
            let miss = Math.random()
            if (miss <= this.chance) {
                let enemyDefense = POSSIBLE_ENEMIES[ENEMY_INDEX].defense
                let damageDone = PLAYER_ATTACK * Math.floor(Math.random() * this.damage_range)
                if (damageDone > enemyDefense) {
                    POSSIBLE_ENEMIES[ENEMY_INDEX].health = POSSIBLE_ENEMIES[ENEMY_INDEX].health - damageDone
                    document.getElementById("attackbutton").disabled = true
                    setTimeout(function () {
                        document.getElementById("attackbutton").disabled = false
                    }, 2000)
                } else {
                    missArea.innerHTML = 'Tink!'
                    setTimeout(function () {
                        missArea.innerHTML = '';
                    }, 1000);
                }
            } else {
                missArea.innerHTML = 'Attack Missed!'
                setTimeout(function() {
                    missArea.innerHTML = '';
                }, 1000);
                this.missNumber += 1
                console.log('Misses:' + this.missNumber)
            }
        }
        if (this.type === 'Defend') {
            let miss = Math.random()
            if (miss <= this.chance) {
                if (DEFEND_UP === false) {
                    let damageDefended = POSSIBLE_ENEMIES[ENEMY_INDEX].damage * this.damage_range
                    PLAYER_DEFENSE += damageDefended
                    DEFEND_UP = true
                } else {
                    missArea.innerHTML = 'Defend Already Up!'
                    setTimeout(function() {
                        missArea.innerHTML = '';
                    }, 1000);
                }
            } else {
                missArea.innerHTML = 'Defend Missed!'
                setTimeout(function() {
                    missArea.innerHTML = '';
                }, 1000);
            }
        }
    }
}