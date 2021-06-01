//Player's Stat Object
let Player = {
    HP: 25,
    ATTACK: 5,
    DEFENSE: 5,
    EXP: 0,
    LEVEL: 1,
    WEALTH: 0,
    enemiesKilled: 0
}
//Enemy Objects
let Slime = new Enemy("Slime", 2, 1000)
let Goblin = new Enemy("Goblin", 10, 2000)
ENEMY_LIST = [Slime, Goblin]
//Ability Objects
let Basic_Attack = new Ability("Basic Attack", 10, .80)
