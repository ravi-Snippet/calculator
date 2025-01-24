// Get references to the form and display input
const form = document.getElementById('myform');
const display = form.display;

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to append a value to the display
function appendValue(value) {
    display.value += value;
}

// Function to validate the expression
function isValidExpression(expression) {
    const validPattern = /^[0-9+\-*/.()]+$/; // Only allow numbers, operators, and parentheses
    return validPattern.test(expression);
}

// Function to calculate the result
function calculateResult() {
    if (!isValidExpression(display.value)) {
        alert('Invalid Expression');
        clearDisplay();
        return;
    }
    if (display.value.includes('/0')) {
        alert('Error: Division by zero');
        clearDisplay();
        return;
    }
    try {
        // Safely evaluate the expression
        display.value = eval(display.value);
    } catch (error) {
        alert('Error in Calculation');
        clearDisplay();
    }
}

// Attach event listeners to buttons
document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.value;

        // Handle specific button actions
        if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculateResult();
        } else if (value === 'x') {
            appendValue('*'); // Convert 'x' to '*'
        } else if (value === '÷') {
            appendValue('/'); // Convert '÷' to '/'
        } else {
            appendValue(value);
        }
    });
});
