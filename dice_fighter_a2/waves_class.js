// let wave = {
//     wave1: {
//         neededKills: 0,
//         enemyStrength: 1,
//         enemies: [Slime]
//     },
//     wave2: {
//         neededKills: 5,
//         enemyStrength: 2,
//         enemies: [Slime]
//     }
// }
class Wave {
    constructor(neededKills, enemyStrength, enemies) {
        this.neededKills = neededKills
        this.enemyStrength = enemyStrength
        this.enemies = enemies
    }
    setNewWave() {
      if(enemiesKilled === this.neededKills) {
          for (let i = 0; i < this.enemies.length; i++) {
            console.log(this.enemies[i].attack)
                this.enemies[i].attack += this.enemyStrength
                this.enemies[i].defense += this.enemyStrength
                this.enemies[i].expGiven += this.enemyStrength * 1.5
                this.enemies[i].hp += this.enemyStrength
                this.enemies[i].const_hp += this.enemyStrength
                console.log(this.enemies[i].attack)
        }
          enemyList = this.enemies
      }
    }
}