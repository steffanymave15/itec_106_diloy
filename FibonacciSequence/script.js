// Function to generate Fibonacci sequence
function generateSequence() {
    const termsInput = document.getElementById('terms');
    const error = document.getElementById('error');
    const sequenceDisplay = document.getElementById('sequence');
    const terms = parseInt(termsInput.value);

    // Validate input
    if (isNaN(terms) || terms <= 0 || terms >= 100 || !Number.isInteger(terms)) {
        error.textContent = "Please enter a valid integer between 1 and 99.";
        sequenceDisplay.textContent = "";
        return;
    }

    // Clear error message
    error.textContent = "";

    // Generate Fibonacci sequence
    let sequence = [];
    let a = 0, b = 1;
    for (let i = 0; i < terms; i++) {
        sequence.push(a);
        let temp = a + b;
        a = b;
        b = temp;
    }

    // Display sequence
    sequenceDisplay.textContent = "Fibonacci Sequence: " + sequence.join(', ');
}
