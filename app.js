let total = 100000000000000
let currentClickValue = 1
let currentAutoValue = 0
let clickValueUpgradeCost = 10
let autoUpgradeCost = 10
let currentBoss = 0
let currentEnemy = 0


let greatswordCost = 10
let greatswordMult = 2
let previousClickValue = 0

let titaniteCost = 10


//NOTE we need to fix it to where when it gets to the last enemy or boss it doesnt break
let normalEnemies = [
    {
        name: "Hollow",
        img: "hollow.jpg"
    },
    {
        name: "Hollow Assassin",
        img: "hollow_assassin-new.jpg"
    },
    {
        name: "Starved Hound",
        img: "starved_hound_(no_arrow)-new.jpg"
    },
    {
        name: "Winged Knight",
        img: "winged_knight-new.jpg"
    }]

let bosses = [
    {
        name: "Iudex Gundyr",
        img: "iudex_gundry_trophy.png"
    },
    {
        name: "Vordt of The Boreal Valley",
        img: "vordt_of_the_boreal_valley_trophy.png"
    },
    {
        name: "Crystal Sage",
        img: "crystal_sage_trophy.png"
    },
    {
        name: "Abyss Watchers",
        img: "lords_of_cinder_abyss_watchers.png"
    },
    {
        name: "Deacons of The Deep",
        img: "deacons_of_the_deep_trophy.png"
    },
    {
        name: "High Lord Wolnir",
        img: "high_lord_wolnir_trophy.png"
    },
    {
        name: "Old_Demon_King",
        img: "old_demon_king_trophy.png"
    },
    {
        name: "Pontiff Sulyvahn",
        img: "pontiff_sulyvahn_trophy.png"
    },
    {
        name: "Yhorm The Giant",
        img: "lord_of_cinder_yhorm_the_giant.png"
    },
    {
        name: "Aldritch Devourer of Gods",
        img: "lord_of_cinder_aldritch_devourer_of_gods.png"
    },
    {
        name: "Dancer of The Boreal Valley",
        img: "dancer_of_the_boreal_valley_trophy.png"
    },
    {
        name: "Dragonslayer Armour",
        img: "dragonslayer_armour_trophy.png"
    },
    {
        name: "Oceiros The Consumed King",
        img: "oceiros_the_consumed_king_trophy.png"
    },
    {
        name: "Champion Gundyr",
        img: "champion_gundyr_trophy.png"
    },
    {
        name: "Lothric Younger Prince",
        img: "lord_of_cinder_lothric_younger_prince.png"
    },
    {
        name: "Ancient Wyvern",
        img: "ancient_wyvern_trophy.png"
    },
    {
        name: "The Nameless King",
        img: "the_nameless_king_trophy.png"
    }



]




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

            total = total - clickValueUpgradeCost
            currentClickValue += 1
            currentEnemy += 1
            clickValueUpgradeCost = clickValueUpgradeCost * 2
        }
    }
    if (id === "auto-click") {
        if (total >= autoUpgradeCost) {
            if (currentAutoValue < 1) {
                currentAutoValue = 1

            }
            currentBoss += 1
            total = total - autoUpgradeCost
            currentAutoValue = currentAutoValue * 3
            autoUpgradeCost = autoUpgradeCost * 3
        }
    }

    drawEnemy()
    drawTotal()
    drawBoss()
}

function purchase(id) {
    if (id === "moonlight-greatsword") {

        if (total >= greatswordCost) {

            previousClickValue = currentClickValue

            currentClickValue = currentClickValue * greatswordMult

            total = total - greatswordCost
            greatswordCost = greatswordCost * 2

            drawGreatsword()
            drawEnemy()
        }
    }
    if (id === "titanite") {
        if (total >= titaniteCost) {
            greatswordMult += 1
            titaniteCost = titaniteCost * 2
            drawTitanite()

        }
    }

    drawTotal()

}






startInterval()

function startInterval() {
    setInterval(AutoAdd, 3000);
}

function drawTotal() {
    document.getElementById("on-screen-total").innerText = total.toString()
}

function drawEnemy() {
    document.getElementById("click-value").innerText = currentClickValue.toString()
    document.getElementById("click-upgrade-cost").innerText = clickValueUpgradeCost.toString()
    document.getElementById("enemy-name").innerText = normalEnemies[currentEnemy].name
    document.getElementById("enemy-img").src = `./assets/${normalEnemies[currentEnemy].img}`
}
function drawBoss() {
    document.getElementById("auto-value").innerText = currentAutoValue.toString()
    document.getElementById("auto-upgrade-cost").innerText = autoUpgradeCost.toString()
    document.getElementById("boss-name").innerText = bosses[currentBoss].name
    document.getElementById("boss-img").src = `./assets/${bosses[currentBoss].img}`
}

function drawGreatsword() {
    document.getElementById("equip-button").innerText = "REPAIR"
    document.getElementById("current-greatsword-cost").innerText = greatswordCost.toString()
}

function drawTitanite() {
    document.getElementById("current-titanite-cost").innerText = titaniteCost.toString()
    document.getElementById("soul-value-mult").innerText = greatswordMult.toString()
}


drawBoss()
drawEnemy()
drawTotal()
