const track = document.querySelector('.slider-track');
const cards = document.querySelectorAll('.card');
const nextButton = document.querySelector('.next');

let slideIndex = 0;
const cardWidth = cards[0].offsetWidth + 20; // Adjust 20 if margin changes
const totalCards = cards.length;

// Clone the first few cards to create the infinite loop effect
for (let i = 0; i < 4; i++) { // Adjust 4 based on the number of visible cards
    const firstClone = cards[i].cloneNode(true);
    track.appendChild(firstClone);
}

// Function to handle sliding in one direction (right to left)
function slideNext() {
    slideIndex++;
    track.style.transition = 'transform 0.6s ease'; // Smooth easing
    track.style.transform = `translateX(-${slideIndex * cardWidth}px)`;

    if (slideIndex >= totalCards) {
        setTimeout(() => {
            track.style.transition = 'none'; // Disable transition for jump
            slideIndex = 0;
            track.style.transform = `translateX(0)`;
            setTimeout(() => {
                track.style.transition = 'transform 0.6s ease';
            }, 20); // Re-enable transition after repositioning
        }, 600); // Match the transition duration
    }
}

// Event listener for the "Next" button
nextButton.addEventListener('click', slideNext);
document.addEventListener('DOMContentLoaded', function () {
    const homeElements = document.querySelectorAll('#home .home-element');

    function checkVisibility() {
        homeElements.forEach(function (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});

//description
const description = document.querySelector('.description');

description.addEventListener('mouseenter', () => {
    description.classList.add('hovered');
});

//features
const features = document.querySelector('.features');

// Handle hover effect for features
features.addEventListener('mouseenter', () => {
    features.classList.add('hovered');
});

//popular
const div4 = document.querySelector('.div4');

// Handle hover effect for div4
div4.addEventListener('mouseenter', () => {
    div4.classList.add('hovered');
});


//initial dealy while page laod
window.addEventListener('load', function () {
    // Wait for 2 seconds, then reveal the wrapper
    setTimeout(function () {
        const wrapper = document.querySelector('.wrapper');
        wrapper.classList.add('visible');
    }, 2000); // 2000 milliseconds = 2 seconds
});



// video start delay 
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("promoVideo");

    setTimeout(function () {
        video.play();
    }, 2000); // 2 seconds delay
});


// Disable scroll restoration
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}