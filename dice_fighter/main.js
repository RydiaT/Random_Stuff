let INTERVAL;
//Player Stats
let PLAYER_HP = 50
let PLAYER_ATTACK = 1
let PLAYER_DEFENSE = 3
let PLAYER_WEALTH = 0
let PLAYER_EXP = 0
let PLAYER_LEVEL = 1
let PLAYER_CONST_HP = 10
//Battle System?
let ENEMY_INDEX = 0
let BATTLE_OVER = false
let setEnemy = () => {
    ENEMY_INDEX = Math.floor(Math.random() * POSSIBLE_ENEMIES.length)
}
let endBattle = () => {
    if (POSSIBLE_ENEMIES[ENEMY_INDEX].health <= 0 || PLAYER_HP <= 0) {
        clearInterval(INTERVAL);
        battleArea.innerHTML = ''
        nameArea.innerHTML = ''
        playerHpArea.innerHTML = ''
        POSSIBLE_ENEMIES[ENEMY_INDEX].health = POSSIBLE_ENEMIES[ENEMY_INDEX].const_hp
        ENEMY_INDEX = 0
        BATTLE_OVER = true
        PLAYER_HP = PLAYER_CONST_HP

    }
    else {
        battleArea.innerHTML = POSSIBLE_ENEMIES[ENEMY_INDEX].health
        playerHpArea.innerHTML = PLAYER_HP
    }
}
let doBattle = () => {
    setEnemy();
    POSSIBLE_ENEMIES[ENEMY_INDEX].enemyAttack()
    nameArea.innerHTML = POSSIBLE_ENEMIES[ENEMY_INDEX].name
    battleArea.innerHTML = POSSIBLE_ENEMIES[ENEMY_INDEX].health

}

