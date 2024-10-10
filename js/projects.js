document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.project-container');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const items = Array.from(container.children);
    const totalItems = items.length;
    const visibleItems = 3; // Adjust this based on how many items are visible at once
    let currentIndex = 0;

    // Clone first few items and append to the end
    for (let i = 0; i < visibleItems; i++) {
        const clone = items[i].cloneNode(true);
        container.appendChild(clone);
    }

    function updateCarousel(smooth = true) {
        const itemWidth = items[0].offsetWidth;
        container.style.transition = smooth ? 'transform 0.3s ease-in-out' : 'none';
        container.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    function shiftToStart() {
        currentIndex = 0;
        updateCarousel(false);
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1;
            updateCarousel(false);
            setTimeout(() => {
                currentIndex--;
                updateCarousel();
            }, 20);
        }
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalItems) {
            currentIndex++;
            updateCarousel();
            if (currentIndex === totalItems) {
                setTimeout(shiftToStart, 300);
            }
        }
    });

    // Initial update
    updateCarousel();

    // Update on window resize
    window.addEventListener('resize', () => updateCarousel(false));
});