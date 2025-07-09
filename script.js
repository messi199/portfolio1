document.addEventListener('DOMContentLoaded', () => {
    // Get the menu icon and navigation list elements
    const menuIcon = document.getElementById('menu-icon');
    const navlist = document.querySelector('.navlist'); // Using querySelector for better targeting

    // Menu toggle functionality
    menuIcon.addEventListener('click', () => {
        navlist.classList.toggle('active');
        menuIcon.classList.toggle('bx-x'); // Toggle the 'bx-x' class for the hamburger icon (change to "X" icon)
    });

    // Smooth Scrolling for Navigation
    document.querySelectorAll('.navlist a').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
            
            // Close the menu after click on mobile
            if (navlist.classList.contains('active')) {
                navlist.classList.remove('active');
                menuIcon.classList.remove('bx-x');
            }
        });
    });
});



  