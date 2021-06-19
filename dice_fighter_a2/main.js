let currentEnemy;
let enemiesKilled = 0;
let enemyList;
let waveNumber = 0;
//Sets the current enemy
let setBattle = () => {
    currentEnemy = enemyList[Math.floor(Math.random() * enemyList.length)]
    enemyHPText.innerHTML = "Enemy HP: " + currentEnemy.hp
    return currentEnemy
}
//Levels up the player and their stats.
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
//Checks to see if the battle has ended
let checkBattleEnd = () => {
    if (currentEnemy.hp <= 0) {
        setBattle();
        currentEnemy.hp = currentEnemy.const_hp
        player.exp += currentEnemy.expGiven
        playerLevelUp();
        updateScreen();
        enemiesKilled++
        checkWaves();
    } else if (player.hp <= 0) {
        setBattle();
        currentEnemy.health = currentEnemy.const_hp
        player.hp = player.const_hp
        updateScreen();
        clearInterval(autoAttack)
        lockButtons();
        enemiesKilled -= 5
        waveNumber--
    }
    console.log(player.exp)
}
//Starts Wave
let startWaves = () => {
    currentEnemy.attackPlayer();
    unlockButtons();
}
//Locks the attack button, but unlocks the Start Wave button
let lockButtons = () => {
    waveButton.disabled = false
    attackButton.disabled = true
    healButton.disabled = true
}
//Locks the Start Wave button, but unlocks the attack button
let unlockButtons = () => {
    attackButton.disabled = false
    healButton.disabled = false
    waveButton.disabled = true
}