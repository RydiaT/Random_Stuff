
class Wave {
    constructor(neededKills, enemyStrength, enemies) {
        this.neededKills = neededKills
        this.enemyStrength = enemyStrength
        this.enemies = enemies
        this.count = 0
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
          this.count++
          console.log("Wave " + this.count + " started!")
          enemyList = this.enemies
      }
    }
}