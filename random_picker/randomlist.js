const RANDOM_LIST = ['Potato', 'Turnip', 'Bard', 'Oxygen', 'Twenty-Four', 'Euclid', 'Spaghetti', 'Brazil', 'Seventy-Two', 'Keyboard', 'Sandwich',
                    'Frog', 'Fifty-Eight', 'Fish', 'Towel']
let chooseForMe = () => {
    let premadeIndex = document.getElementById("premadeindex").value
    if (premadeIndex <= 14 && premadeIndex >= 0) {
        randword.innerHTML = RANDOM_LIST[Math.floor(Math.random() * premadeIndex)]
    }
    else {
        randword.innerHTML = 'Sorry, but that number needs to be between 0 and 14, like 8 or 5.'
    }
}