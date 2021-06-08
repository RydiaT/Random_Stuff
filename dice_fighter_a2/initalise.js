let enemyHP;
let playerHP;
let damageDealt;
let initialise = () => {
    enemyHP = document.getElementById('enemyHP')
    playerHP = document.getElementById('playerHP')
    damageDealt = document.getElementById('damageDealt')

}
let updateScreen = () => {
    enemyHP.innerHTML = "Enemy HP: " + currentEnemy.hp
    playerHP.innerHTML = "Player HP: " + player.hp
}
