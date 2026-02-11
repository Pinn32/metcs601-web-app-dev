// Helper: get numbers safely
function getInputValues() {
    const first = parseFloat(document.getElementById("first-number").value);
    const second = parseFloat(document.getElementById("second-number").value);
    return { first, second };
}

// Helper: display result + style negative values
function displayResult(result) {
    const output = document.getElementById("output");

    if (isNaN(result)) {
        output.innerHTML = "Please enter valid numbers.";
        output.style.color = "#240807";
        output.style.background = "transparent";
        return;
    }

    output.innerHTML = String(result);

    // negative styling requirement
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "#240807";
        output.style.background = "transparent";
    }
}

// Addition
function additionCalc() {
    const { first, second } = getInputValues();
    const result = first + second;
    displayResult(result);
}

// Subtraction
function subtractionCalc() {
    const { first, second } = getInputValues();
    const result = first - second;
    displayResult(result);
}

// Multiplication
function multiplicationCalc() {
    const { first, second } = getInputValues();
    const result = first * second;
    displayResult(result);
}

// Division
function divisionCalc() {
    const { first, second } = getInputValues();
    if (second === 0) {
        displayResult("Cannot divide by zero");
        return;
    }
    const result = first / second;
    displayResult(result);
}

// Power function using FOR LOOP ONLY (no Math.pow, no **)
function powerCalc() {
    const { first, second } = getInputValues();

    if (isNaN(first) || isNaN(second)) {
        displayResult(NaN);
        return;
    }

    let result = 1;

    if (second === 0) {
        result = 1;
    } else if (second > 0) {
        for (let i = 0; i < second; i++) {
            result *= first;
        }
    } else {
        // negative exponent
        for (let i = 0; i < Math.abs(second); i++) {
            result *= first;
        }
        result = 1 / result;
    }

    displayResult(result);
}

// Clear function
function clearCalc() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.color = "#240807";
    document.getElementById("output").style.background = "transparent";
}
