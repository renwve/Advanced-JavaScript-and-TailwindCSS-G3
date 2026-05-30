/*      ─ ⊹ ⊱ ⊰ ⊹ ─
DISTANCE CONVERSIONS
─ ⊹ ⊱ ⊰ ⊹ ─      */

let distanceConvert = document.getElementById("distanceConvert");

if (distanceConvert) {
    distanceConvert.onclick = function () {

        let value = Number(document.getElementById("distanceInput").value);
        let type = document.getElementById("distanceType").value;
        let result;

        if (type === "mi-km") {
            result = value * 1.60934;
        } else {
            result = value * 0.621371;
        }

        document.getElementById("distanceResult").textContent = result;
    };
}

/*         ─ ⊹ ⊱ ⊰ ⊹ ─
TEMPERATURE CONVERSIONS
─ ⊹ ⊱ ⊰ ⊹ ─         */

let temperatureConvert = document.getElementById("temperatureConvert");

if (temperatureConvert) {
    temperatureConvert.onclick = function () {

        let value = Number(document.getElementById("temperatureInput").value);
        let type = document.getElementById("temperatureType").value;
        let result;

        if (type === "c-f") {
            result = (value * 9 / 5) + 32;
        } else {
            result = (value - 32) * 5 / 9;
        }

        document.getElementById("temperatureResult").textContent = result;
    };
}