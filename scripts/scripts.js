let activeTab = 'weight';

/*    ─ ⊹ ⊱ ⊰ ⊹ ─
    SWITCH TAB
─    ⊹ ⊱ ⊰ ⊹ ─ */

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

/* ─ ⊹ ⊱ ⊰ ⊹ ─
  CONVERSIONS
─ ⊹ ⊱ ⊰ ⊹ ─ */

document.addEventListener("DOMContentLoaded", () => {
    updateLabels();

    document.getElementById("converter-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const value = parseFloat(document.getElementById("user-input").value);
        const direction = document.getElementById("conversion-direction").value;

        if (isNaN(value)) {
            alert("Please enter a valid number.");
            return;
        }

        let result;

        // ── .✦  WEIGHT

        if (activeTab === "weight") {
            if (direction === "metricToImperial") {
                result = `${value} kg = ${(value * 2.20462).toFixed(2)} lbs`;
            } else {
                result = `${value} lbs = ${(value / 2.20462).toFixed(2)} kg`;
            }
        }

        // ── .✦  DISTANCE

        if (activeTab === "distance") {
            if (direction === "metricToImperial") {
                result = `${value} km = ${(value * 0.621371).toFixed(2)} miles`;
            } else {
                result = `${value} miles = ${(value / 0.621371).toFixed(2)} km`;
            }
        }

        // ── .✦  TEMPERATURE

        if (activeTab === "temperature") {
            if (direction === "metricToImperial") {
                result = `${value}°C = ${((value * 9 / 5) + 32).toFixed(2)}°F`;
            } else {
                result = `${value}°F = ${((value - 32) * 5 / 9).toFixed(2)}°C`;
            }
        }

        document.getElementById("result-text").textContent = result;
        document.getElementById("result-box").classList.remove("hidden");
    });
});