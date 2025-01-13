document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.link');
    const loadingIcon = document.getElementById('loading-icon');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            loadingIcon.style.display = 'block'; // Show the loading icon

            // Simulate a delay (e.g., for a network request)
            setTimeout(() => {
                loadingIcon.style.display = 'none'; // Hide the loading icon
                window.location.href = link.href; // Navigate to the link's destination
            }, 2000); // Adjust the timeout as needed
        });
    });
});