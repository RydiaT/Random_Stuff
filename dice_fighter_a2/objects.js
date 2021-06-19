//Player Object
let player = {
    attack: 4,
    defense: 3,
    hp: 20,
    const_hp: 20,
    level: 1,
    exp: 0,
    expNeeded: 0,
}


//Enemies
let Slime = new Enemy("Slime",3.5,1,10,10,3,10,2000)
let Goblin = new Enemy("Goblin",5,3,20,20,2,15, 3000)
//Abilities
let Basic_Atk = new Ability(2,.05, 2500)
let Basic_Heal = new Ability(5,.10, 5000)
//Wave Objects
let wave1 = new Wave(0, 0, [Slime])
let wave2 = new Wave(5,1,[Slime])
let wave3 = new Wave(10,2,[Slime])
let wave4 = new Wave(15,3,[Slime])
let wave5 = new Wave(20,4,[Slime])
let wave6 = new Wave(25,5,[Slime, Goblin])