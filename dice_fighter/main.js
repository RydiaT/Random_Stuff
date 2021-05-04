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
POSSIBLE_ENIMIES = [Goblin]
ENEMYNUMBER = 0
BATTLE_OVER = false
let setEnemy = () => {
    ENEMYNUMBER = Math.floor(Math.random() * POSSIBLE_ENIMIES.length)
}
let endBattle = () => {
    if (POSSIBLE_ENIMIES[ENEMYNUMBER].health <= 0) {
        battleArea.innerHTML = ''
        POSSIBLE_ENIMIES[ENEMYNUMBER].health = POSSIBLE_ENIMIES[ENEMYNUMBER].const_hp
        BATTLE_OVER = true
    }
}
let doBattle = () => {
    setEnemy();
    battleArea.innerHTML = POSSIBLE_ENIMIES[ENEMYNUMBER].health
    while (BATTLE_OVER = false) {
        endBattle();
    }
}
