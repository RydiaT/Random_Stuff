let enemyHP;
let playerHP;
let enemyAttack;
let playerAttack;
let enemyHPText;
let playerHPText;
let skillTable;
let initialize = () => {
    enemyHP = document.getElementById("enemyHP")
    playerHP = document.getElementById("playerHP")
    enemyAttack = document.getElementById("enemyAttack")
    playerAttack = document.getElementById("playerAttack")
    enemyHPText = document.getElementById("enemyHPText")
    playerHPText = document.getElementById("playerHPText")
    skillTable = document.getElementById("skillTable")
}
let updateScreen = () => {
    playerHP.style.width = (player.hp / player.const_hp * 100) + "%"
    enemyHP.style.width = (currentEnemy.hp / currentEnemy.const_hp * 100) + "%"
    playerHPText.innerHTML = "Player HP: " + player.hp + "/" + player.const_hp
    enemyHPText.innerHTML = currentEnemy.name + " HP: " + currentEnemy.hp + "/" + currentEnemy.const_hp
}