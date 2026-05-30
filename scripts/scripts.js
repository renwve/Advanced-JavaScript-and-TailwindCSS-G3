let activeTab = 'weight';
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


function switchTab(tabName){
            activeTab = tabName;
            ['weight', 'distance', 'temperature'].forEach(tab => {
                const btn = document.getElementById(`tab-${tab}`);
                btn.className = "w-full py-3 px-6 text-sm font-semibold rounded-lg transition-all duration-200 text-gray-600 hover:text-gray-900 hover:bg-gray-200";
            });

            const activeBtn = document.getElementById(`tab-${tabName}`);
            activeBtn.className = "w-full py-3 px-6 text-sm font-semibold rounded-lg transition-all duration-200 bg-blue-300 text-white shadow-md";

            updateLabels();
        }

function updateLabels(){
    const direction = document.getElementById('conversion-direction').value;
    const label = document.getElementById('input-label');
    
    const labelsMatrix = {
        weight:{metricToImperial:"Enter Values (Kilograms to Pounds):", imperialToMetric:"Enter Values (Pounds to Kilograms):"},
        distance:{metricToImperial:"Enter Values (Kilometers to Miles):", imperialToMetric:"Enter Values (Miles To Kilometer):"},
        temperature:{metricToImperial:"Enter Values (Celsius to Fahrenheit):",imperialToMetric:"Enter Values (Fahrenheit to Celsius):"}
    };

    label.innerText = labelsMatrix[activeTab][direction];
}


