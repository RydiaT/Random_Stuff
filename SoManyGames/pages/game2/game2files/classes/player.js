let attackButtonDisabled;
let player = {
    health: 50,
    const_health: 50,
    attack: 12,
    defense: 7,
    EXP: 0,
    level: 1,
    EXPNeeded: 0,
    setPlayerEXPNeeded(){
        this.EXPNeeded = Math.round((this.const_health * this.defense) / this.attack)
    },
    attackEnemy(){
        attackButton.disabled = true
        attackButtonDisabled = setTimeout(function(){attackButton.disabled = false}, 1000)
        let rand = Math.random()
        if(rand > .10){
            let damageDealt = this.attack - currentEnemy.defense
            if(damageDealt > 0){
                battleLog.innerHTML += "<strong>Player Dealt " + damageDealt + " Damage!</strong><br>"
                currentEnemy.health -= damageDealt
                checkBattleEnd();
            } else {
                battleLog.innerHTML += "<strong>Player Missed! </strong><br>"
            }
        } else {
            battleLog.innerHTML += "<strong>Player Missed! </strong><br>"
        }
    },
}
