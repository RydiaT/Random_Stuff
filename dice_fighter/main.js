//Enemy/Ability Definitions
let Basic_Attack = new Ability('Basic Attack', 20, .75, 'Normal',
                        'Deliver a basic attack.', 'Attack')
let Goblin = new Enemy('Goblin', 50, 2, 1, 'Normal', 5, 5, 50)
console.log(Goblin)
//Player Stats
let PLAYER_HP = 10
let PLAYER_ATTACK = 1
let PLAYER_DEFENSE = 3
let PLAYER_WEALTH = 0
let PLAYER_EXP = 0
let PLAYER_LEVEL = 1
//Battle System?
let POSSIBLE_ENEMIES = [Goblin]
let ENEMY_NUMBER = 0
let BATTLE_OVER = false
let setEnemy = () => {
    ENEMY_NUMBER = Math.floor(Math.random() * POSSIBLE_ENEMIES.length)
}
let endBattle = () => {
    if (POSSIBLE_ENEMIES[ENEMY_NUMBER].health <= 0) {
        battleArea.innerHTML = ''
        POSSIBLE_ENEMIES[ENEMY_NUMBER].health = POSSIBLE_ENEMIES[ENEMY_NUMBER].const_hp
        ENEMY_NUMBER = 0
        BATTLE_OVER = true
    }
    else {
        battleArea.innerHTML = POSSIBLE_ENEMIES[ENEMY_NUMBER].health
    }
}
let doBattle = () => {
    setEnemy();
    battleArea.innerHTML = POSSIBLE_ENEMIES[ENEMY_NUMBER].health
}
