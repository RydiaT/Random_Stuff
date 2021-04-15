const RANDOM_LIST = ['Potato', 'Turnip', 'Bard', 'Oxygen', 'Twenty-Four', 'Euclid', 'Spaghetti', 'Brazil', 'Seventy-Two', 'Keyboard', 'Sandwich',
                    'Frog', 'Fifty-Eight', 'Fish', 'Towel']
let chooseForMe = () => {
    let premadeIndex = document.getElementById("premadeindex").value
    randWord.innerHTML = RANDOM_LIST[Math.floor(Math.random() * premadeIndex + 1)]
}