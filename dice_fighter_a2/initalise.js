let enemyHP;
let playerHP;
let enemyDamageDealt;
let playerDamageDealt;
let playerLevel;
let initialise = () => {
    enemyHP = document.getElementById('enemyHP')
    playerHP = document.getElementById('playerHP')
    enemyDamageDealt = document.getElementById('enemyDamageDealt')
    playerDamageDealt = document.getElementById('playerDamageDealt')
    playerLevel = document.getElementById('playerLevel')

}
let updateScreen = () => {
    enemyHP.innerHTML =  currentEnemy.name + " HP: " + currentEnemy.hp + "/" + currentEnemy.const_hp
    playerHP.innerHTML = "Player HP: " + player.hp + "/" + player.const_hp
    playerLevel.innerHTML = "PLayer Level: " + player.level
}
