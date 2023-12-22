// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() });
});

// Add any existing JavaScript code if applicable

document.addEventListener('DOMContentLoaded', function () {
    // Function to track CV downloads (you can customize this)
    function trackDownload() {
        // Add your tracking code or analytics here
        console.log('CV Downloaded!');
    }

    // Get the "Download CV" link element
    const downloadLink = document.querySelector('.cta-button a');

    // Attach a click event listener to the link
    downloadLink.addEventListener('click', function (event) {
        // Call the tracking function
        trackDownload();

        // You can add additional functionality here if needed

        // If you want to prevent the default behavior (e.g., navigation)
        // uncomment the following line
        // event.preventDefault();
    });
});

// Add any existing JavaScript code if applicable

// Example: Handle icon clicks (you can customize this)
document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.navbar-icon');

    icons.forEach(icon => {
        icon.addEventListener('click', function () {
            const iconName = this.id.replace('-icon', '');
            console.log(`Icon ${iconName} clicked!`);
            // Add your navigation or other functionality here
        });
    });
});

