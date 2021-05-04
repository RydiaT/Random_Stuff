//Enemies
let Goblin = new Enemy('Goblin', 50, 2, 1, 'Normal', 5, 5, 50)
let Slime = new Enemy('Slime', 25, 10, 1, 'Water', 2, 7, 25)
//Possible Enemies List (Update with each added Enemy)
let POSSIBLE_ENEMIES = [Goblin, Slime]
//Abilities
let Basic_Attack = new Ability('Basic Attack', 20, .75, 'Normal', 'Deliver a basic attack.', 'Attack')