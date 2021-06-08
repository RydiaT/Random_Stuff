let enemyHP;
let playerHP;
let damageDealt;
let initialise = () => {
    enemyHP = document.getElementById('enemyHP')
    playerHP = document.getElementById('playerHP')
    damageDealt = document.getElementById('damageDealt')

}
let updateScreen = () => {
    enemyHP.innerHTML =  currentEnemy.name + " HP: " + currentEnemy.hp
    playerHP.innerHTML = "Player HP: " + player.hp
}
