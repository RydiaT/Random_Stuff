//Player Object
let player = {
    attack: 2,
    defense: 3,
    hp: 20,
    level: 1,
    exp: 0,
}
//Enemies
let Slime = new Enemy("Slime",3,1,10,3,10)
let enemyList = [Slime]
//Abilities
let Basic_Atk = new Ability(5,.25)