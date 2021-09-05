let enemyHealth;
let enemyHealthLabel;
let playerHealth;
let playerHealthLabel;
let playerEXP;
let playerEXPLabel;
let basicFight;
let attackButton;
let battleLog;
function initialize(){
    enemyHealth = document.getElementById("enemyHealth")
    enemyHealthLabel = document.getElementById("enemyHealthLabel")
    playerHealth = document.getElementById("playerHealth")
    playerHealthLabel = document.getElementById("playerHealthLabel")
    playerEXP = document.getElementById("playerEXP")
    playerEXPLabel = document.getElementById("playerEXPLabel")
    basicFight = document.getElementById("basicFight")
    attackButton = document.getElementById("attackButton")
    battleLog = document.getElementById("battleLog")
}
function updateScreen(){
    if(currentEnemy){
        enemyHealth.style.width = (currentEnemy.health / currentEnemy.const_health * 100) + "%"
        enemyHealthLabel.innerHTML = currentEnemy.name + " HP: " + currentEnemy.health + "/" + currentEnemy.const_health
    } else {
        enemyHealth.style.width = 100 + "%"
        enemyHealthLabel.innerHTML = "----- HP: --/--"
    }

    playerHealth.style.width = (player.health / player.const_health * 100) + "%"
    playerHealthLabel.innerHTML = "Your HP: " + player.health + "/" + player.const_health
    player.setPlayerEXPNeeded();
    playerEXP.style.width = (player.EXP / player.EXPNeeded * 100) + "%"
    playerEXPLabel.innerHTML = "Your EXP: " + player.EXP + "/" + player.EXPNeeded
}
