let enemyHP;
let playerHP;
let initialise = () => {
    enemyHP = document.getElementById('enemyHP')
    playerHP = document.getElementById('playerHP')
}
let updateScreen = () => {
    enemyHP.innerHTML = "Enemy HP: " + Slime.hp
    playerHP.innerHTML = "Player HP: " + player.hp
}
