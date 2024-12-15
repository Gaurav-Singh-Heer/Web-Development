// backgroundImage js

let heroBg = document.querySelector('.hero');

setInterval(() => {
    heroBg.style.backgroundImage = "url(img/bg-light.jpg)"

    setTimeout(() => {
        heroBg.style.backgroundImage = "url(img/bg.jpg)"
    }, 1000);
}, 2200);

// loading fadeout

document.getElementById('transition-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent immediate navigation
    document.body.classList.add('fade-out'); // Add fade-out class with slide-up effect
    const href = this.href; // Store the target href
    setTimeout(() => {
        window.location.href = href; // Redirect after fade-out
    }, 1000); // Match the duration of the fade-out transition
});


// link on button click
function openLink() {
    const ref = document.querySelector('.learn-more').getAttribute('data-ref');
    window.location.href = ref; // Opens the link
  }