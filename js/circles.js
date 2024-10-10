document.addEventListener('DOMContentLoaded', () => { 
    const ball = document.createElement('div');
    ball.className = 'ball';
    document.body.appendChild(ball);
    setBallColor(ball);
    animateBall(ball);

    // Listen for changes in dark mode
    const observer = new MutationObserver(() => setBallColor(ball));
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
});

function setBallColor(ball) {
    const isDarkMode = document.body.classList.contains('dark-mode');
    ball.style.backgroundColor = isDarkMode ? '#414141' : 'rgba(30, 144, 255, 0.8)';
}

function animateBall(ball) {
    const size = 600; // Increased size for the ball
    const rightSide = window.innerWidth - 400; // Right edge of the window
    const navHeight = document.querySelector('.navbar').offsetHeight; // Get the height of the nav
    const availableHeight = window.innerHeight - navHeight; // Available height for the ball

    ball.style.width = `${size}px`;
    ball.style.height = `${size}px`;
    ball.style.left = `${rightSide}px`; // Position the ball on the right side
    ball.style.top = `${navHeight + Math.random() * (availableHeight - size)}px`; // Random vertical position below nav
    ball.style.borderRadius = '50%'; // Make it round
    ball.style.position = 'absolute';
    ball.style.pointerEvents = 'none'; // Don't interfere with mouse events
    ball.style.zIndex = '1'; // Layer above other content

    // Animation logic
    const duration = Math.random() * 5000 + 2000; // Random duration between 2 and 7 seconds
    const moveAmount = (Math.random() - 0.5) * 200; // Move vertically

    ball.animate([
        { transform: `translate(0, 0)` },
        { transform: `translate(0, ${moveAmount}px)` }
    ], {
        duration: duration,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out'
    });
}