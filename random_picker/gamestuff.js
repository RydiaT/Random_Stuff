//Define player choices and choose a random one of them.
let pickRandom = (playerChoice = []) => {
    let randomNumber = Math.floor(Math.random() * playerChoice.length)
    let chosenOne = playerChoice[randomNumber]
    return chosenOne
}
