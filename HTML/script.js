const display = document.getElementById('display');

// Adds numbers or operators to the display
function appendToDisplay(input) {
    display.value += input;
}

// Clears the entire screen
function clearDisplay() {
    display.value = "";
}

// Deletes the last character (Backspace)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Evaluates the expression
function calculate() {
    try {
        // eval() takes the string (e.g., "2+2") and computes it
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}