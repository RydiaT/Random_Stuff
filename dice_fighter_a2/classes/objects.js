//Player Object
let player = {
    attack: 6,
    const_attack: 6,
    defense: 3,
    const_defense: 3,
    hp: 20,
    const_hp: 20,
    level: 1,
    exp: 0,
    expNeeded: 0,
}


//Abilities
let Basic_Atk = new Ability(2,.05, 2500)
let Basic_Heal = new Ability(5,.10, 5000)


//Items
let Health_Ptn = new Item("Health Potion", "Heal", 2.5, .90, "The taste of medicinal cherries numbs your mouth.")
let Strength_Ptn = new Item("Strength Potion", "Attack", 4, .95, "Tastes strangely of liquefied cow and protein bars.")
let Defense_Ptn = new Item("Defense Potion", "Defense", 3, .85, "Ever wanted to drink a rock?")
let invArray = []


//Enemies
let Slime = new Enemy("Slime",3.5,1,10,10,3,15,2000, [Health_Ptn, Strength_Ptn])
let Goblin = new Enemy("Goblin",5,3,20,20,2,30, 3000, [Health_Ptn, Strength_Ptn, Defense_Ptn])


//Wave Objects
let wave1 = new Wave(0, 0, [Slime])
let wave2 = new Wave(10,1,[Slime])
let wave3 = new Wave(20,2,[Slime])
let wave4 = new Wave(30,3,[Slime])
let wave5 = new Wave(40,3.5,[Slime])
let wave6 = new Wave(50,4,[Slime, Goblin])