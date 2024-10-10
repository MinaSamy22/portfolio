    // Function to toggle dark mode
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        // Store the user's preference in localStorage
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    }

    // Apply dark mode based on user's previous selection
    window.onload = () => {
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
        }
    };
    
    // Attach the function to the dark mode button
    document.querySelector('.dark-mode-icon').parentElement.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent link default behavior
        toggleDarkMode();
    });
