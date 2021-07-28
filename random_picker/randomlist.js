const RANDOM_LIST = ['Potato', 'Turnip', 'Bard', 'Oxygen', 'Twenty-Four', 'Euclid', 'Spaghetti', 'Brazil', 'Seventy-Two', 'Keyboard', 'Sandwich',
                    'Frog', 'Fifty-Eight', 'Fish', 'Towel']
let chooseForMe = () => {
    let presetIndex = presetIndex.value
    if (presetIndex <= 14 && presetIndex >= 0) {
        randWord.innerHTML = RANDOM_LIST[Math.floor(Math.random() * presetIndex)]
    }
    else {
        randWord.innerHTML = 'Sorry, but that number needs to be between 0 and 14, like 8 or 5.'
    }
}