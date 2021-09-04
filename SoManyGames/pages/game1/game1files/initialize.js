let moneyCounter;
let A1
let A2
let A3
let A4
let MPSText
let MPCText
function initialize(){
    moneyCounter = document.getElementById("moneyCounter")
    A1 = document.getElementById("A1")
    A2 = document.getElementById("A2")
    A3 = document.getElementById("A3")
    A4 = document.getElementById("A4")
    MPSText = document.getElementById("MPSText")
    MPCText = document.getElementById("MPCText")
}
function updateScreen(){
    moneyCounter.innerHTML = "$" + currentMoney.toFixed(2)
    MPSText.innerHTML = "$" + MPS + "/sec."
    MPCText.innerHTML = MPC + " Per Click"
}
