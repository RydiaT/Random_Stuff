//Enemies
let Goblin = new Enemy('Goblin', 50, 2, 5, 'Normal', 5, 5, 50, 2000)
let Slime = new Enemy('Slime', 25, 10, 3, 'Water', 2, 7, 25, 1000)
//Possible Enemies List (Update with each added Enemy)
let POSSIBLE_ENEMIES = [Goblin, Slime]
//Abilities
let Basic_Attack = new Ability('Basic Attack', 20, .75, 'Normal', 'Deliver a basic attack.', 'Attack')