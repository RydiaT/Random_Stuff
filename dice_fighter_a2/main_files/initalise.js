//HTML ID Variables
let enemyHP;
let playerHP;
let enemyDamageDealt;
let playerDamageDealt;
let playerLevel;
let attackButton;
let healButton;
let playerEXP;
let enemyHPPercent;
let playerHPPercent;
let playerEXPPercent;
let enemyHPText;
let playerHPText;
let playerEXPText;
let waveButton;
let inventory;
let mainButtons;
let waveText;
let newWaveScreen;
//Initializer Function
let initialise = () => {
    enemyHP = document.getElementById('enemyHP')
    playerHP = document.getElementById('playerHP')
    enemyDamageDealt = document.getElementById('enemyDamageDealt')
    playerDamageDealt = document.getElementById('playerDamageDealt')
    playerLevel = document.getElementById('playerLevel')
    attackButton = document.getElementById('attackButton')
    healButton = document.getElementById('healButton')
    playerEXPText = document.getElementById('playerEXPText')
    enemyHPText = document.getElementById('enemyHPText')
    playerHPText = document.getElementById('playerHPText')
    playerEXP = document.getElementById('playerEXP')
    waveButton = document.getElementById('waveButton')
    inventory = document.getElementById("inventory")
    mainButtons = document.getElementById("main_buttons")
    waveText = document.getElementById('waveText')
    newWaveScreen = document.getElementById('newWaveScreen')
}
//Updates Screen To Show Current Information
let updateScreen = () => {
    enemyHPPercent = (currentEnemy.hp / currentEnemy.const_hp) * 100
    playerHPPercent = (player.hp / player.const_hp) * 100
    playerEXPPercent = (player.exp / player.expNeeded) * 100
    enemyHP.style.width = enemyHPPercent + "%"
    enemyHPText.innerHTML = currentEnemy.name + " HP: " + currentEnemy.hp + "/" + currentEnemy.const_hp
    playerHP.style.width = playerHPPercent + "%"
    playerHPText.innerHTML = "Player HP: " + player.hp + "/" + player.const_hp
    playerLevel.innerHTML = "Player Level: " + player.level
    playerEXP.style.width = playerEXPPercent + "%"
    playerEXPText.innerHTML = "Player EXP: " + player.exp
}
