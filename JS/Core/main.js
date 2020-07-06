var player = {
    expontAmount: new OmegaNum(1),
    expontMultperSec: new OmegaNum(1.00),
}

function update() {
    document.getElementById("expontAmount").innerHTML = player.expontAmount
    document.getElementById("expontMultperSec").innerHTML = player.expontMultperSec.toFixed(2)
}

setInterval(update, (1/15 * 1000))
