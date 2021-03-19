//Define player choices and choose a random one of them.
let RANDOM_WORD = ''
let PLAYER_INPUTS = []
let updateInputs = () => {
    PLAYER_INPUTS.push(playerInput)
}
let pickRandom = () => {
    let randomNumber = Math.floor(Math.random() * PLAYER_INPUTS.length)
    RANDOM_WORD = PLAYER_INPUTS[randomNumber]
    return RANDOM_WORD
}
let showWork = () => {
    let randWord = document.getElementById('randobj')
    randWord.innerHTML = RANDOM_WORD
}