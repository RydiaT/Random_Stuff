let count = 0
class Wave {
    constructor(neededKills, enemyStrength, enemies) {
        this.neededKills = neededKills
        this.enemyStrength = enemyStrength
        this.enemies = enemies
    }
    setNewWave() {
      if(enemiesKilled === this.neededKills) {
          for (let i = 0; i < this.enemies.length; i++) {
                this.enemies[i].attack += this.enemyStrength
                this.enemies[i].defense += this.enemyStrength
                this.enemies[i].expGiven += this.enemyStrength * 5
                this.enemies[i].hp += this.enemyStrength
                this.enemies[i].const_hp += this.enemyStrength
        }
          count++
          console.log("Wave " + count + " started!")
          enemyList = this.enemies
      }
    }
}