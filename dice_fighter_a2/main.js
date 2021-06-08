let currentEnemy;
let setBattle = () => {
    currentEnemy = enemyList[Math.floor(Math.random() * enemyList.length)]
    enemyHP.innerHTML = "Enemy HP: " + currentEnemy.hp
    return currentEnemy
}
let checkBattleEnd = () => {
    if (currentEnemy.hp <= 0) {
        setBattle();
        currentEnemy.hp = currentEnemy.const_hp
        updateScreen();
    }
}