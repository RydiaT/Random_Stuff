let regenInterval;
function checkBattleEnd(){
    if(currentEnemy.health <= 0){
        currentEnemy.health = currentEnemy.const_health
        player.EXP += currentEnemy.expGiven
        currentEnemy = false
        basicFight.disabled = false;
        if(attackButton.disabled === true){
            clearTimeout(attackButtonDisabled)
        } else {
            attackButton.disabled = true
        }
        clearInterval(enemyInterval)
        battleLog.innerHTML += "<strong>Player Won! </strong><br>"
        updateScreen()
        if(player.EXP >= player.EXPNeeded){
            player.level++
            player.const_health += 10
            player.attack++
            player.defense++
            player.EXP -= player.EXPNeeded
            player.setPlayerEXPNeeded();
            battleLog.innerHTML += "<em style='background-color: #126212'>Player Leveled Up!<br>Level: " + player.level + "<br>Health: " + player.const_health + "<br>Attack: " + player.attack + "<br>Defense: " + player.defense + "<br>EXP To Next Level: " + (player.EXPNeeded - player.EXP) + "<br></em>"
            console.log(player.const_health)
            console.log(player.attack)
            console.log(player.defense)
            console.log(player.EXPNeeded - player.EXP)
        }
        regen();
    }
    if(player.health <= 0){
        currentEnemy.health = currentEnemy.const_health
        currentEnemy = false
        player.health = player.const_health
        basicFight.disabled = false;
        attackButton.disabled = true
        clearInterval(enemyInterval)
        battleLog.innerHTML += "<strong>Player Lost! </strong><br>"
        updateScreen()
        regen();
    }
}
function regen(){
    regenInterval = setInterval(function () {
        player.health++
        updateScreen();
        if(player.health >= player.const_health){
            clearInterval(regenInterval)
        }
    }, 500)
}
