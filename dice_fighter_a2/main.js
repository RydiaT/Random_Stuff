let currentEnemy;
let enemiesKilled;
let waveNumber;
let setBattle = () => {
    currentEnemy = enemyList[Math.floor(Math.random() * enemyList.length)]
    enemyHPText.innerHTML = "Enemy HP: " + currentEnemy.hp
    return currentEnemy
}
let playerLevelUp = () => {
    player.expNeeded = (player.level * player.hp) + (player.attack * player.defense) * player.hp / 10
    console.log(player.expNeeded)
    if (player.exp >= player.expNeeded) {
        console.log(player)
        player.level += 1
        player.hp += player.const_hp / 2
        player.const_hp += 10
        player.attack += 2
        player.defense += 2
        player.exp = 0
        console.log(player)
    }
}
let checkBattleEnd = () => {
    if (currentEnemy.hp <= 0) {
        setBattle();
        currentEnemy.hp = currentEnemy.const_hp
        player.exp += currentEnemy.expGiven
        playerLevelUp();
        updateScreen();
        enemiesKilled++
        startNewWave();
    } else if (player.hp <= 0) {
        setBattle();
        currentEnemy.hp = currentEnemy.const_hp
        player.hp = player.const_hp
        updateScreen();
        clearInterval(autoAttack)
    }
    console.log(player.exp)
}
let startNewWave = () => {
    waveNumber++
    console.log(waveNumber)
}