// =============================
// Part 1: Variable Declarations & Conditionals
// =============================
let counter = 0; // Variable to hold counter value
let maxLimit = 10; // Maximum allowed counter value
let minLimit = -5; // Minimum allowed counter value

// =============================
// Part 2: Custom Functions
// =============================

// Function to update the counter display
function updateCounter() {
    document.getElementById("counter").textContent = counter;
}

// Function to show a message in the paragraph
function showMessage(msg) {
    document.getElementById("message").textContent = msg;
}

// =============================
// Part 3: Loop Examples
// =============================

// Example 1: For loop to display numbers 1–5 in the list
let loopResults = document.getElementById("loopResults");
for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `Number: ${i}`;
    loopResults.appendChild(li);
}

// Example 2: While loop to display even numbers up to 10
let num = 2;
while (num <= 10) {
    let li = document.createElement("li");
    li.textContent = `Even Number: ${num}`;
    loopResults.appendChild(li);
    num += 2;
}

// =============================
// Part 4: DOM Interactions
// =============================

// Increase button click event
document.getElementById("increaseBtn").addEventListener("click", function() {
    if (counter < maxLimit) {
        counter++;
        updateCounter();
        showMessage("Counter increased ✅");
    } else {
        showMessage("Reached maximum limit!");
    }
});

// Decrease button click event
document.getElementById("decreaseBtn").addEventListener("click", function() {
    if (counter > minLimit) {
        counter--;
        updateCounter();
        showMessage("Counter decreased ⬇️");
    } else {
        showMessage("Reached minimum limit!");
    }
});

// Reset button click event
document.getElementById("resetBtn").addEventListener("click", function() {
    counter = 0;
    updateCounter();
    showMessage("Counter reset 🔄");
});

