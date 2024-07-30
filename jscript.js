// script.js
function clearDisplay() {
    document.getElementById("display").value = '';
}

function clearLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1); // Remove the last character
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculateResult() {
    try {
        const display = document.getElementById("display");
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}


