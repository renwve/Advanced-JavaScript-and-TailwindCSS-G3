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

        const input = document.getElementById("user-input").value;

        // ── .✦  WEIGHT
        // Makes the program able to convert mroe than one value.
        const values = input
            .split(/[\s,]+/)
            .filter(v => v !== "")
            .map(Number);

        if (values.length === 0 || values.some(isNaN)) {
            alert("Please enter valid numbers separated by commas or spaces.");
            return;
        }

        const direction = document.getElementById("conversion-direction").value;
        let results = [];

        values.forEach(value => {

            // ── .✦  WEIGHT
            // This section handles all weight conversions entered by the user.
            // The program checks whether the user wants to convert from metric
            // units to imperial units or vice versa. Kilograms are converted
            // to pounds by multiplying by 2.20462, while pounds are converted
            // back to kilograms by dividing by the same conversion factor.

            if (activeTab === "weight") {
                if (direction === "metricToImperial") {
                    results.push(`${value} kg = ${(value * 2.20462).toFixed(2)} lbs`);
                } else {
                    results.push(`${value} lbs = ${(value / 2.20462).toFixed(2)} kg`);
                }
            }

            // ── .✦ DISTANCE CONVERSION
            // This section performs distance conversions between kilometers
            // and miles. The conversion direction selected by the user
            // determines which formula will be used. Kilometers are converted
            // to miles using a multiplication factor of 0.621371. Miles are
            // converted back to kilometers by dividing by the same value.
            if (activeTab === "distance") {
                if (direction === "metricToImperial") {
                    results.push(`${value} km = ${(value * 0.621371).toFixed(2)} miles`);
                } else {
                    results.push(`${value} miles = ${(value / 0.621371).toFixed(2)} km`);
                }
            }

            // ── .✦  TEMPERATURE
            // This section converts temperature values between Celsius
            // and Fahrenheit. Unlike weight and distance conversions,
            // temperature requires a formula that includes multiplication,
            // division, and addition or subtraction. Celsius values are
            // converted using (°C × 9/5) + 32, while Fahrenheit values are
            // converted using (°F − 32) × 5/9.
            if (activeTab === "temperature") {
                if (direction === "metricToImperial") {
                    results.push(`${value}°C = ${((value * 9 / 5) + 32).toFixed(2)}°F`);
                } else {
                    results.push(`${value}°F = ${((value - 32) * 5 / 9).toFixed(2)}°C`);
                }
            }
        });

        document.getElementById("result-text").innerHTML = results.join("<br>");
        document.getElementById("result-box").classList.remove("hidden");
    });
});
