let enemyHP;
let playerHP;
let damageDealt;
let playerLevel;
let initialise = () => {
    enemyHP = document.getElementById('enemyHP')
    playerHP = document.getElementById('playerHP')
    damageDealt = document.getElementById('damageDealt')
    playerLevel = document.getElementById('playerLevel')

}
let updateScreen = () => {
    enemyHP.innerHTML =  currentEnemy.name + " HP: " + currentEnemy.hp
    playerHP.innerHTML = "Player HP: " + player.hp
    playerLevel.innerHTML = "PLayer Level: " + player.level
}
