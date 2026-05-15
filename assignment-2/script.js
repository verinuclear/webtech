window.onload = function() {
    // Grab the elements from the DOM after the page has fully loaded
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mainNav = document.getElementById('main-nav');
    
    // Check if the elements exist to avoid errors on pages without them
    if (hamburgerBtn && mainNav) {
        const navLinks = mainNav.querySelectorAll('a');

        // 1. Toggle the visibility of the menu when clicking the hamburger icon
        hamburgerBtn.addEventListener('click', function() {
            // Toggles the 'active' class on and off
            mainNav.classList.toggle('active');
        });

        // 2. Bonus: Close the menu automatically when any navigation link is clicked
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                // Check if the menu is currently open, and if so, close it
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                }
            });
        });
    }
};