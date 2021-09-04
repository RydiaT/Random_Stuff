let A1Bought = 0
let A2Bought = 0
let A3Bought = 0
let A4Bought = 0
function checkShop(){
    //Shop 1
    A1.disabled = currentMoney < (10 * 1.15 ** A1Bought)
    A2.disabled = currentMoney < (25 * 1.15 ** A2Bought)
    A3.disabled = currentMoney < (100 * 1.15 ** A3Bought)
    A4.disabled = currentMoney < (250 * 1.15 ** A4Bought)
}
function updateShops(){
    document.getElementById("A1Cost").innerHTML = "Cost: " + (10 * 1.15 ** A1Bought)
    document.getElementById("A2Cost").innerHTML = "Cost: " + (25 * 1.15 ** A2Bought)
    document.getElementById("A3Cost").innerHTML = "Cost: " + (100 * 1.15 ** A3Bought)
    document.getElementById("A4Cost").innerHTML = "Cost: " + (250 * 1.15 ** A4Bought)
}