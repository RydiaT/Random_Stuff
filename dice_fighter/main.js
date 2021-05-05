let INTERVAL;
//Player Stats
let PLAYER_HP = 50
let PLAYER_ATTACK = 1
let PLAYER_DEFENSE = 3
let PLAYER_WEALTH = 0
let PLAYER_EXP = 0
let PLAYER_LEVEL = 1
let PLAYER_CONST_HP = 10
let EXP_NEEDED = (PLAYER_LEVEL * PLAYER_HP) - (PLAYER_DEFENSE * PLAYER_ATTACK)
//Battle System?
let ENEMY_INDEX = 0
let BATTLE_OVER = false
let setEnemy = () => {
    ENEMY_INDEX = Math.floor(Math.random() * POSSIBLE_ENEMIES.length)
}
let levelUp = () => {
    if (PLAYER_EXP >= EXP_NEEDED) {
        PLAYER_EXP = 0
        PLAYER_HP++
        PLAYER_ATTACK++
        PLAYER_DEFENSE++
        PLAYER_LEVEL++
        PLAYER_CONST_HP++
        EXP_NEEDED = (PLAYER_LEVEL * PLAYER_HP) - (PLAYER_DEFENSE * PLAYER_ATTACK)
        console.log(EXP_NEEDED)
        console.log(PLAYER_HP)
        console.log(PLAYER_ATTACK)
    }
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
        PLAYER_EXP += POSSIBLE_ENEMIES[ENEMY_INDEX].EXP
        PLAYER_WEALTH += POSSIBLE_ENEMIES[ENEMY_INDEX].gold
        levelUp();
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

