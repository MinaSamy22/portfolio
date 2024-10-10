document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project-item');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;

    function showProject(index) {
        projectItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    function nextProject() {
        currentIndex = (currentIndex + 1) % projectItems.length;
        showProject(currentIndex);
    }

    function prevProject() {
        currentIndex = (currentIndex - 1 + projectItems.length) % projectItems.length;
        showProject(currentIndex);
    }

    nextButton.addEventListener('click', nextProject);
    prevButton.addEventListener('click', prevProject);
});