let enemyInterval;
class Enemy {
    constructor(health, const_health, attack, defense, name, expGiven) {
        this.health = health
        this.const_health = const_health
        this.attack = attack
        this.defense = defense
        this.name = name
        this.expGiven = expGiven
    }
    attackPlayer(){
        enemyInterval = setInterval(function (){
            let rand = Math.random()
            if(rand < .85){
                let damageDealt = currentEnemy.attack - player.defense
                if(damageDealt > 0){
                    player.health -= damageDealt
                    battleLog.innerHTML += "<em style='background-color: darkred'>" + currentEnemy.name + " Dealt " + damageDealt + " Damage!</em><br>"
                    updateScreen();
                    checkBattleEnd();
                } else {
                    battleLog.innerHTML += "<em style='background-color: darkred'>Enemy Missed! </em><br>"
                }
            } else {
                battleLog.innerHTML += "<em style='background-color: darkred'>Enemy Missed! </em><br>"
            }
        }, 1500)
    }
}
let currentEnemy;
function setEnemy(){
    let rand = Math.floor(Math.random() * possibleEnemies.length)
    currentEnemy = possibleEnemies[rand]
}