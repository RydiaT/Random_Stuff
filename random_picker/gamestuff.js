//Define player choices and choose a random one of them.
let RANDOM_WORD = ''
let PLAYER_INPUTS = []
//Update the important bits
let updateInputs = () => {
    let playerInput = '' + playerInput.value
    PLAYER_INPUTS.push(playerInput)
};
//Do the work
let pickRandom = () => {
    let randomNumber = Math.floor(Math.random() * PLAYER_INPUTS.length)
    RANDOM_WORD = PLAYER_INPUTS[randomNumber]
    return RANDOM_WORD
};
//Make Word
let showWork = () => {
    randWord.innerHTML = RANDOM_WORD
};
//Run everything needed to generate random word
let doThing = () => {
    pickRandom();
    showWork();
}
//Clear the board
let clearList = () => {
    randWord.innerHTML = ''
    PLAYER_INPUTS = []
}