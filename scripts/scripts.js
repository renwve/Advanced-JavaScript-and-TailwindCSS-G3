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

// This functions handles switching between the different tabs for the calculation(Weight, Distance, Temperature).
//  * It resets the styling to every tab button back to inactive, then apply the active styling to the new tab according to tabName 
//  * it updates the label after every corresponding swap, like weight have kilogram to pound, but distance have kilometer to miles instead.
//  * * @param tabName, The name of the tab that is being switch to switch to like 'weight', 'distance', or 'temperature').
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

// Updates the form's input label text based on the current direction.
// It reads the selected active tab and the chosen conversion direction, like Metric to Imperial. to display corresponding text to the user
// for example, if the user is on temperture tab and have direction of Imperial to Metric, then will display "Enter Values (Fahrenheit to Celsius):"
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


