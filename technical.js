
document.addEventListener('DOMContentLoaded', function() {
    // Select the Learn More button
    const learnMoreBtn = document.getElementById('learn-more-btn');

    // Add click event listener
    learnMoreBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Get the offset position of the questions-container
        const questionsContainer = document.querySelector('.text-center');
        const offsetTop = questionsContainer.offsetTop;

        // Scroll to the questions-container smoothly
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

