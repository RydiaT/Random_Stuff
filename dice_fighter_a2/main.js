let currentEnemy;
let setBattle = () => {
    currentEnemy = enemyList[Math.floor(Math.random() * enemyList.length)]
    enemyHP.innerHTML = "Enemy HP: " + currentEnemy.hp
    return currentEnemy
}