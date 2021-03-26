let total = 0
let currentClickValue = 1
let currentAutoValue = 100
let clickValueUpgradeCost = 10


let normalEnemies = [
    {
        name: "Hollow",
        img: "hollow.jpg"
    },
    {
        name: "Hollow Assassin",
        img: "hollow_assassin- new.jpg"
    },
    {
        name: "Starved Hound",
        img: "starved_hound_(no_arrow)-new.jpg"
    },
    {
        name: "Winged Knight",
        img: "winged_knight-new.jpg"
    }]

let currentNormalEnemyNAME = normalEnemies[0].name
let currentNormalEnemyIMG = normalEnemies[0].img
debugger

function clickAdd() {
    total += currentClickValue
    drawTotal()
}

function AutoAdd() {
    total += currentAutoValue
    drawTotal()
}

function upgrade(id) {

    if (id === "click-value") {
        if (total >= clickValueUpgradeCost) {

            currentNormalEnemy = currentNormalEnemy += 1
            total = total - clickValueUpgradeCost
            currentClickValue += 1
            clickValueUpgradeCost = clickValueUpgradeCost * 2
            // TODO
        }
    }
    if (id === "auto-click") {
        if (total >= clickValueUpgradeCost) {

        }
    }





    drawUpgrade()
    drawTotal()
}

startInterval()

function startInterval() {
    setInterval(AutoAdd, 3000);
}





function drawTotal() {
    document.getElementById("on-screen-total").innerText = total.toString()
}
function drawUpgrade() {

    document.getElementById("click-value").innerText = currentClickValue.toString()
    document.getElementById("click-upgrade-cost").innerText = clickValueUpgradeCost.toString()
}