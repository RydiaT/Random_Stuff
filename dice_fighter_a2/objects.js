//Player Object
let player = {
    attack: 2,
    defense: 3,
    hp: 20,
    const_hp: 20,
    level: 1,
    exp: 0,
}
//Enemies
let Slime = new Enemy("Slime",3,1,10,10,3,3)
let Goblin = new Enemy("Goblin",5,3,20,20,2,6)
let enemyList = [Slime, Goblin]
//Abilities
let Basic_Atk = new Ability(5,.25)