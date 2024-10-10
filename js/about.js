    // Text content to be displayed letter by letter
    const aboutText = `
I’m Mina Samy, a motivated and skilled Web Developer
with hands-on experience in Laravel, WordPress, front-end technologies, and Power BI. 
Seeking to leverage my technical expertise and leadership experience
to contribute to innovative projects in a collaborative team environment.`;

    // Function to type out the text letter by letter
    function typeText(text, element, delay = 35) { // Set delay to 30 milliseconds for faster typing
        let charIndex = 0;

        // Function to type a single character
        function typeCharacter() {
            if (charIndex < text.length) {
                element.textContent += text[charIndex]; // Add the character
                charIndex++;
                setTimeout(typeCharacter, delay); // Call the function again after the specified delay
            }
        }

        typeCharacter(); // Start typing the text
    }

    // Call the function once the document is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        const descriptionElement = document.getElementById('about-description');
        typeText(aboutText, descriptionElement, 35); // Adjusted delay for increased speed
    });
