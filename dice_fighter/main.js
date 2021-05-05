//Player Stats
let PLAYER_HP = 10
let PLAYER_ATTACK = 1
let PLAYER_DEFENSE = 3
let PLAYER_WEALTH = 0
let PLAYER_EXP = 0
let PLAYER_LEVEL = 1
//Battle System?
let ENEMY_INDEX = 0
let BATTLE_OVER = false
let setEnemy = () => {
    ENEMY_INDEX = Math.floor(Math.random() * POSSIBLE_ENEMIES.length)
}
let endBattle = () => {
    if (POSSIBLE_ENEMIES[ENEMY_INDEX].health <= 0) {
        battleArea.innerHTML = ''
        nameArea.innerHTML = ''
        POSSIBLE_ENEMIES[ENEMY_INDEX].health = POSSIBLE_ENEMIES[ENEMY_INDEX].const_hp
        ENEMY_INDEX = 0
        BATTLE_OVER = true
    }
    else {
        battleArea.innerHTML = POSSIBLE_ENEMIES[ENEMY_INDEX].health
    }
}
let doBattle = () => {
    setEnemy();
    nameArea.innerHTML = POSSIBLE_ENEMIES[ENEMY_INDEX].name
    battleArea.innerHTML = POSSIBLE_ENEMIES[ENEMY_INDEX].health

}
//Function for the setTimout handler

