let currentEnemy;
let enemyAttackInterval;
let chooseCurrentEnemy = () => {
    let randomIndex = Math.floor(Math.random() * possibleEnemies.length)
    currentEnemy = possibleEnemies[randomIndex]
}
let waveBattle = () => {
    chooseCurrentEnemy();
    updateScreen()
    enemyAttackInterval = setInterval(function(){
        currentEnemy.attackPlayer();
    }, currentEnemy.at)
}
let checkBattleEnd = () => {
    if (player.hp <= 0) {
        clearInterval(enemyAttackInterval)
        player.hp = player.const_hp
        currentEnemy.hp = currentEnemy.const_hp
    } else if (currentEnemy.hp <= 0){
        clearInterval(enemyAttackInterval)
        player.hp = player.const_hp
        currentEnemy.hp = currentEnemy.const_hp
    }
    updateScreen();
    player.updateSkills("Melee", player.skills.attack.melee,player.skillEXP.attack.melee,player.skillEXPNeeded.attack.melee)
}
