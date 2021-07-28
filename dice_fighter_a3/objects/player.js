let player = {
    hp: 20,
    const_hp: 20,
    attack: 0,
    defense: 12,
    skillsOnList: [],
    skills: {
        attack: {
            melee: 1
        }
    },
    skillEXP: {
        attack: {
            melee: 0
        }
    },
    skillEXPNeeded: {
        attack: {
            melee: 0
        }
    },
    attackEnemy() {
        this.attack = this.skills.attack.melee * 5
        let multiplier = Math.floor(Math.random() * player.skills.attack.melee)
        if(multiplier <= 1) {
            multiplier = 1.5
        }
        let damageDone = player.attack * multiplier
        if(damageDone > currentEnemy.defense) {
            damageDone -= currentEnemy.defense
            currentEnemy.hp -= damageDone
            playerAttack.innerHTML = "Player Damage Done: " + damageDone
            this.skillEXP.attack.melee += currentEnemy.expGiven
            this.checkSkills();
            checkBattleEnd();
        } else {
            playerAttack.innerHTML = "Player Missed!"
        }
    },
    checkSkills() {
        this.skillEXPNeeded.attack.melee = (this.skills.attack.melee * this.hp) / this.attack
        if(this.skillEXP.attack.melee >= this.skillEXPNeeded.attack.melee) {
            this.skills.attack.melee++
            this.skillEXP.attack.melee = this.skillEXP.attack.melee - this.skillEXPNeeded.attack.melee
            this.skillEXPNeeded.attack.melee = (this.skills.attack.melee * this.hp) / this.attack
            this.updateSkills("Melee", this.skills.attack.melee,this.skillEXP.attack.melee,this.skillEXPNeeded.attack.melee)
        }
    },
    updateSkills(skillName, skillLevelBranch, skillEXPBranch, skillEXPToBranch) {
        if(!this.skillsOnList.includes(skillName)) {
            skillTable.innerHTML += "<tr><td>" + skillName + "</td><td>" + skillLevelBranch + "</td><td>" + skillEXPBranch + "</td><td>" + skillEXPToBranch + "</td></tr>"
            this.skillsOnList.push(skillName)
        } else {
             skillTable.deleteRow(this.skillsOnList.indexOf(skillName) + 1)
            skillTable.innerHTML += "<tr><td>" + skillName + "</td><td>" + skillLevelBranch + "</td><td>" + skillEXPBranch + "</td><td>" + skillEXPToBranch + "</td></tr>"
        }
    }
}