function calculateWeight1() {
    // Debugging: Log to check if the function is called
    console.log("calculateWeight function called");

    // Select the input element
    let kgInput = document.querySelector("#kgInput");
    console.log("kgInput element:", kgInput);

    // Check if the input element exists
    if (kgInput) {
        let kgWeight = kgInput.value;
        console.log("kgWeight value:", kgWeight);

        // Convert kilograms to pounds
        let poundWeight = kgWeight * 2.20462;
        console.log("poundWeight value:", poundWeight);

        // Display the result
        document.getElementById("pounds").innerText = poundWeight.toFixed(3);
    } else {
        console.error("kgInput element not found");
    }
}

function calculateWeight2() {
    // Debugging: Log to check if the function is called
    console.log("calculateWeight function called");

    // Select the input element
    let poundInput = document.querySelector("#poundInput");
    console.log("poundInput element:", poundInput);

    // Check if the input element exists
    if (poundInput) {
        let poundsWeight = poundInput.value;
        console.log("poundsWeight value:", poundsWeight);

        // Convert kilograms to pounds
        let kgsWeight = poundsWeight / 2.20462;
        console.log("kgsWeight value:", kgsWeight);

        // Display the result
        document.getElementById("kgs").innerText = kgsWeight.toFixed(3);
    } else {
        console.error("poundInput element not found");
    }
}

