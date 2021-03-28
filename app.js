let total = 0
let gemCost = 250
let titaniteCost = 200
let emberCost = 250
let clickValueUpgradeCost = 10
let autoUpgradeCost = 500
let soapCost = 50

let myInterval

let currentClickValue = 1
let currentAutoValue = 0


let currentBoss = 0
let currentEnemy = 0
let enemyInfo = document.getElementById('clear-enemy')

let emberUsed = 0
let titaniteUsed = 0



let gemMult = 2

let currentGem = 0
let gemInfo = document.getElementById('cleargem')



let titaniteInfo = document.getElementById('cleartitanite')
let usedAllTitanite = false


let usedSoap = false
let soapInfo = document.getElementById('clearsoap')


let bossRemoved = false
let bossInfo = document.getElementById('clearboss')

let seconds = 10

let emberInfo = document.getElementById('clear-ember')

let normalEnemies = [
    {
        name: "Grave Warden",
        img: "grave_warden-new.jpg"
    },
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
        name: "Ravenous Crystal Lizard",
        img: "ravenous_crystal_lizard-new.jpg"
    },

    {
        name: "Winged Knight",
        img: "winged_knight-new.jpg"
    },
    {
        name: "Sword Master",
        img: "sword_master-new.jpg"
    },
    {
        name: "Pus of Man",
        img: "pus_of_man-new.jpg"
    },
    {
        name: "Caged Hollow",
        img: "caged-hollow.jpg"
    },
    {
        name: "Worker Hollow",
        img: "worker_(lantern)-new.jpg"
    },
    {
        name: "Hollow Manservant",
        img: "hollow-manservant.jpg"
    },
    {
        name: "Mimic",
        img: "mimic-new.jpg"
    },
    {
        name: "Evangelist",
        img: "evangelist.jpg"
    },
    {
        name: "Hollow Soldier",
        img: "hollow_solider_(sword)-new.jpg"
    },
    {
        name: "Root Skeleton",
        img: "rootskeleton.jpg"
    },
    {
        name: "Cathedral Grave Warden",
        img: "cathedral_grave_warden-new.jpg"
    },
    {
        name: "Poisonhorn Bug",
        img: "PoisonhornBug.jpg"
    },
    {
        name: "Madwoman",
        img: "madwoman.jpg"
    },
    {
        name: "Devout Hollow",
        img: "devout_hollow.jpg"
    },
    {
        name: "Demon",
        img: "demon.jpg"
    },
    {
        name: "Reanimated Corpse",
        img: "reanimated_corpse.jpg"
    },
    {
        name: "Lesser Crab",
        img: "LesserCrab.jpg"
    },
    {
        name: "Giant Crab",
        img: "giantcrab.png"
    },
    {
        name: "Infested Corpse",
        img: "infestedcorpse.jpg"
    },
    {
        name: "Lycanthrope",
        img: "Lycanthrope.jpg"
    },
    {
        name: "Dark Wraith",
        img: "darkwraith-new.jpg"
    },
    {
        name: "Corvian",
        img: "Corvian.jpg"
    },
    {
        name: "Corvian Story Teller",
        img: "Corvianstoryteller.jpg"
    },
    {
        name: "Boreal Outrider Knight",
        img: "BorealOutriderKnight.jpg"
    },
    {
        name: "Lothric Wyvern",
        img: "lothric_wyvern-new.jpg"
    },
    {
        name: "All Enemies Defeated",
        img: "finalenemypic.png"
    }
]


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
        name: "Old Demon King",
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
    },
    {
        name: "Soul of Cinder",
        img: "SoulOfCinder1.jpg"
    },
    {
        name: "Victory Achieved",
        img: "finalbosspic.jpg"
    }

]

let gems = [
    {
        name: 'Simple Gem',
        img: 'simple_gem-icon.png'
    },
    {
        name: 'Sharp Gem',
        img: 'sharp_gem-icon.png'
    },
    {
        name: 'Refined Gem',
        img: 'refined_gem-icon.png'
    },
    {
        name: 'Raw Gem',
        img: 'raw_gem-icon.png'
    },
    {
        name: 'Poison Gem',
        img: 'poison_gem-icon.png'
    },
    {
        name: 'Lightning Gem',
        img: 'lightning_gem-icon.png'
    },
    {
        name: 'Heavy Gem',
        img: 'heavy_gem-icon.png'
    },
    {
        name: 'Lightning Gem',
        img: 'lightning_gem-icon.png'
    },
    {
        name: 'Crystal Gem',
        img: 'crystal_gem-icon.png'
    },
    {
        name: 'Dark Gem',
        img: 'dark_gem-icon.png'
    },
    {
        name: 'Deep Gem',
        img: 'deep_gem-icon.png'
    },
    {
        name: 'Fire Gem',
        img: 'fire_gem-icon.png'
    },
    {
        name: 'Blood Gem',
        img: 'blood_gem-icon.png'
    },
    {
        name: 'Blessed Gem',
        img: 'blessed_gem-icon.png'
    },
    {
        name: 'Chaos Gem',
        img: 'chaos_gem-icon.png'
    },
    {
        name: 'All Gems Used',
        img: 'chaos_gem-icon.png'
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
        if (total >= clickValueUpgradeCost && currentEnemy < (normalEnemies.length - 1)) {

            total = total - clickValueUpgradeCost
            currentClickValue += 1
            currentEnemy += 1
            clickValueUpgradeCost = clickValueUpgradeCost * 2
            drawEnemy()
            drawClickValue()
        }
        if (currentEnemy === normalEnemies.length - 1) {
            drawEnemy()
            clearEnemy()
        }
    }
    if (id === "auto-click") {
        if (total >= autoUpgradeCost && currentBoss < (bosses.length)) {
            if (currentAutoValue < 1) {
                currentAutoValue = 1
                stopInterval()
                startInterval()

            }

            currentBoss += 1
            total = total - autoUpgradeCost
            currentAutoValue = currentAutoValue * 3
            autoUpgradeCost = autoUpgradeCost * 3
            usedSoap = false
            drawBoss()
        }
        if (total >= autoUpgradeCost && currentBoss >= bosses.length - 1) {
            currentAutoValue = 1000000000
            drawBoss()

            clearBoss()
            clearSoap()
        }
    }


    drawTotal()
    drawScores()
}

function purchase(id) {
    if (id === "gem") {

        if (total >= gemCost && currentGem < (gems.length)) {
            currentGem += 1

            currentClickValue = currentClickValue * gemMult

            total = total - gemCost
            gemCost = gemCost * 2
            drawClickValue()
            drawGem()
            if (currentEnemy !== normalEnemies.length - 1) {
                drawEnemy()
                drawClickValue()
            }


        }
        if (total >= gemCost && currentGem >= gems.length - 1) {
            currentClickValue = currentClickValue * gemMult
            drawGem()
            clearGem()
            clearTitanite()
        }
    }
    if (id === "titanite") {
        if (total >= titaniteCost) {
            if (gemMult < 9) {
                titaniteUsed += 1
                gemMult += 1
                titaniteCost = titaniteCost * 2
                drawTitanite()
            } else {
                gemMult = 10
                titaniteUsed += 1
                drawTitanite()
                usedAllTitanite = true
                clearTitanite()
            }
        }

    }
    if (id === "soap") {
        if (total >= soapCost && bossRemoved == false && usedSoap == false) {
            total = total - soapCost
            autoUpgradeCost = Math.floor(autoUpgradeCost * 0.9)
            soapCost = soapCost * 2
            drawBoss()
            drawSoap()
            usedSoap = true

        }
    }
    if (id === "ember") {
        if (total >= emberCost && seconds > 1) {
            emberUsed += 1
            seconds -= 1
            total = total - emberCost
            emberCost = emberCost * 2
            drawEmber()
            stopInterval()
            startInterval()

        }
        if (seconds === 1) {
            clearEmber()
        }
    }

    drawTotal()
    drawScores()

}





function startInterval() {
    myInterval = setInterval(AutoAdd, (seconds * 1000));
}

function stopInterval() {
    clearInterval(myInterval)
}

function drawTotal() {
    document.getElementById("on-screen-total").innerText = total.toString()



}
function drawEnemy() {
    document.getElementById("click-upgrade-cost").innerText = clickValueUpgradeCost.toString()
    document.getElementById("enemy-name").innerText = normalEnemies[currentEnemy].name
    document.getElementById("enemy-img").src = `./assets/${normalEnemies[currentEnemy].img}`
}
function drawClickValue() {
    document.getElementById("click-value").innerText = currentClickValue.toString()
}
function drawBoss() {
    document.getElementById("auto-value").innerText = currentAutoValue.toString()
    document.getElementById("auto-upgrade-cost").innerText = autoUpgradeCost.toString()
    document.getElementById("boss-name").innerText = bosses[currentBoss].name
    document.getElementById("boss-img").src = `./assets/${bosses[currentBoss].img}`
}
function drawGem() {
    document.getElementById("current-gem-cost").innerText = gemCost.toString()
    document.getElementById("gem-img").src = `./assets/${gems[currentGem].img}`
    document.getElementById("current-gem").innerText = gems[currentGem].name
}
function drawTitanite() {
    document.getElementById("current-titanite-cost").innerText = titaniteCost.toString()
    document.getElementById("soul-value-mult").innerText = gemMult.toString()
}
function drawEmber() {
    document.getElementById('current-ember-cost').innerText = emberCost.toString()
    document.getElementById('seconds').innerText = seconds.toString()
}
function drawScores() {
    document.getElementById('enemies-killed').innerText = currentEnemy.toString()
    document.getElementById('total-enemies').innerText = (normalEnemies.length - 1).toString()

    document.getElementById('bosses-killed').innerText = currentBoss.toString()
    document.getElementById('total-bosses').innerText = (bosses.length - 1).toString()

    document.getElementById('gems-used').innerText = currentGem.toString()
    document.getElementById('total-gems').innerText = (gems.length - 1).toString()

    document.getElementById('titanite-used').innerText = titaniteUsed.toString()
    document.getElementById('total-titanite').innerText = '8'

    document.getElementById('embers-used').innerText = emberUsed.toString()
    document.getElementById('total-embers').innerText = '9'

}
function drawSoap() {
    document.getElementById('current-soapstone-cost').innerText = soapCost.toString()

}




function clearSoap() {
    soapInfo.remove()
    document.getElementById('soap-title').innerText = 'All Bosses Vanquished'
}
function clearTitanite() {
    titaniteInfo.remove()
    if (usedAllTitanite) {

        document.getElementById('titanite-title').innerText = 'Fully Upgraded Gems'
    } else {
        document.getElementById('titanite-title').innerText = 'No Gems to Upgrade'
    }
}
function clearBoss() {
    bossInfo.remove()
    bossRemoved = true
}
function clearGem() {
    gemInfo.remove()
}
function clearEmber() {
    emberInfo.remove()
    document.getElementById('ember-title').innerText = 'Fully Embered'
}
function clearEnemy() {

    enemyInfo.remove()
}

drawBoss()
drawEnemy()
drawTotal()
drawGem()
drawScores()
drawSoap()
drawTitanite()
drawEmber()
drawClickValue()

