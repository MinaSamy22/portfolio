// Text content to be displayed sequentially
const textSequence = [
    "I'm a Laravel developer",
    " PowerBI Analyst",
    " WordPress developer"
];

let currentTextIndex = 0;

// Function to type out the text letter by letter
function typeText(text, element, delay = 35, onComplete) {
    let charIndex = 0;

    // Clear the element before starting
    element.textContent = '';

    // Function to type a single character
    function typeCharacter() {
        if (charIndex < text.length) {
            element.textContent += text[charIndex];
            charIndex++;
            setTimeout(typeCharacter, delay);
        } else {
            // Text is fully typed, wait before erasing
            setTimeout(eraseText, 1500);
        }
    }

    // Function to erase the text letter by letter
    function eraseText() {
        if (element.textContent.length > 0) {
            element.textContent = element.textContent.slice(0, -1);
            setTimeout(eraseText, delay / 2);
        } else {
            // Text is fully erased, move to next text or loop back
            currentTextIndex = (currentTextIndex + 1) % textSequence.length;
            setTimeout(() => typeText(textSequence[currentTextIndex], element, delay, onComplete), 500);
        }
    }

    typeCharacter();
}

// Call the function once the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const descriptionElement = document.getElementById('about-description');
    typeText(textSequence[currentTextIndex], descriptionElement, 35);
});
