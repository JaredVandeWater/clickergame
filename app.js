let total = 0
let currentClickValue = 1

let clickValueUpgradeCost = 10

function clickAdd() {
    total += currentClickValue
    drawTotal()
}

function upgrade(id) {

    if (id === "click-value") {
        if (total >= clickValueUpgradeCost) {

            total = total - clickValueUpgradeCost
            currentClickValue += 1
            clickValueUpgradeCost += clickValueUpgradeCost * 2
            console.log(total);
        }
    }

    drawUpgrade()
    drawTotal()
}







function drawTotal() {
    document.getElementById("on-screen-total").innerText = total.toString()
}
function drawUpgrade() {
    document.getElementById("click-value").innerText = currentClickValue.toString()
}