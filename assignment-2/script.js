// 1. Select the HTML elements we need to interact with
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const individualLinks = document.querySelectorAll('.nav-links li a');

// 2. Add a click event to the hamburger icon to open/close the menu
hamburger.addEventListener('click', () => {
    // toggle() adds the 'active' class if it's missing, and removes it if it's there
    navLinks.classList.toggle('active');
});

// 3. (Bonus Requirement) Close the menu automatically when a link is clicked
individualLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Force the menu to close by removing the 'active' class
        navLinks.classList.remove('active');
    });
});