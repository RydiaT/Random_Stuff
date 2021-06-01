function setEnemy() {
    let enemyIndex = Math.floor(Math.random() * ENEMY_LIST.length)
    let currentEnemy = ENEMY_LIST[enemyIndex]
    console.log(currentEnemy)
    return currentEnemy
}