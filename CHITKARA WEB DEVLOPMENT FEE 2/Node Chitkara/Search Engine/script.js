// Load search history from localStorage
function loadSearchHistory() {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';  // Clear existing content

    history.forEach(query => {
        const li = document.createElement('li');
        li.textContent = query;
        li.addEventListener('click', () => moveDown(li));  // Attach move down event
        historyList.appendChild(li);
    });
}

// Save a new search term to the history
function saveSearch(query) {
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    if (!history.includes(query)) {  // Prevent duplicate queries
        history.push(query);
        localStorage.setItem('searchHistory', JSON.stringify(history));
        loadSearchHistory();  // Reload the search history
    }
}

// Clear the search history
document.getElementById('clearHistoryBtn').addEventListener('click', () => {
    localStorage.removeItem('searchHistory');
    loadSearchHistory();
});

// Move an element down the page
function moveDown(element) {
    let currentTransform = window.getComputedStyle(element).getPropertyValue('transform');
    let matrix = currentTransform === 'none' ? [1, 0, 0, 1, 0, 0] : currentTransform.match(/matrix\((.+)\)/)[1].split(', ').map(Number);
    let translateY = matrix[5] + 50;  // Move down by 50px
    element.style.transform = `translateY(${translateY}px)`;
}

// Search button functionality with bounce effect
document.getElementById('searchBtn').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput) {
        saveSearch(searchInput);
        document.getElementById('searchInput').value = '';  // Clear the input field

        // Trigger the bounce effect
        const container = document.querySelector('.container');
        container.classList.add('bounce');

        // Remove the bounce class after the animation ends
        setTimeout(() => {
            container.classList.remove('bounce');
        }, 1000);  // Duration of the bounce animation (1s)
    }
});

// Pressing 'Enter' in the input field triggers the search
document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('searchBtn').click();  // Trigger the search button click
    }
});

// Load search history on page load
window.onload = loadSearchHistory;

// Add falling and bouncing effect on click anywhere on the page
document.addEventListener('click', (e) => {
    if (!e.target.closest('.container')) { // Ignore clicks inside the container
        const elements = document.querySelectorAll('.container, #historyList li, #searchInput, #searchBtn');
        elements.forEach((element) => {
            const randomX = (Math.random() - 0.5) * 200; // Random horizontal movement
            const randomY = (Math.random() - 0.5) * 200; // Random vertical movement

            // Apply falling and bouncing effect
            element.style.transition = 'transform 0.6s ease-in-out'; // Set transition for falling and bouncing
            element.style.transform = `translate(${randomX}px, 300px) scale(0.8)`; // Fall down and scale down

            // Bounce effect
            setTimeout(() => {
                element.style.transform = `translate(${randomX}px, 200px) scale(1)`; // Bounce back up
            }, 600);  // Wait for the fall to finish before bouncing back up

            setTimeout(() => {
                element.style.transform = `translate(${randomX}px, 0) scale(1)`; // Final position
            }, 800);  // Bounce back to original position
        });
    }
});
