//Enemies
let Goblin = new Enemy('Goblin', 50, 3, 5, 'Normal', 5, 5, 50, 2000)
let Slime = new Enemy('Slime', 25, 2, 3, 'Water', 2, 7, 25, 1000)
//Possible Enemies List (Update with each added Enemy)
let POSSIBLE_ENEMIES = [Goblin, Slime]
//Abilities
/*
Note:
Attack attack ranges are a whole number while Heals and Defends are percentages, or decimals.
Confusing, yes, but its easier to have it this way.
*/
let Basic_Attack = new Ability('Basic Attack', 10, .75, 'Normal', 'Deliver a basic attack.', 'Attack')
let Basic_Heal = new Ability('Basic Heal', .25, .50, 'Normal', 'Heal a percentage of your health.', 'Heal')
let Basic_Defend = new Ability('Basic Defend', .50, 1, 'Normal', 'Defend a certain amount for 1 hit..', 'Defend')