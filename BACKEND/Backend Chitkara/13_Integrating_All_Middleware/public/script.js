document.addEventListener('DOMContentLoaded', function () {
    console.log("Script loaded!");
});

// Function to update response container
function updateResponse(message) {
    document.getElementById('response').innerHTML = `<p>${message}</p>`;
}

// Function to greet user
function greetUser() {
    const name = document.getElementById('nameInput').value.trim();
    if (!name) {
        alert("Please enter your name");
        return;
    }

    fetch(`/api/greet/${encodeURIComponent(name)}`)
        .then(response => {
            if (!response.ok) throw new Error("Failed to fetch greeting");
            return response.json();
        })
        .then(data => updateResponse(data.message))
        .catch(error => updateResponse(`Error: ${error.message}`));
}

// Function to get a random number
function getRandomNumber() {
    fetch('/api/random')
        .then(response => {
            if (!response.ok) throw new Error("Failed to fetch random number");
            return response.json();
        })
        .then(data => updateResponse(`Random Number: ${data.randomNumber}`))
        .catch(error => updateResponse(`Error: ${error.message}`));
}

// Function to echo message
function echoMessage() {
    const message = document.getElementById('echoInput').value.trim();
    if (!message) {
        alert("Please enter a message to echo");
        return;
    }

    fetch('/api/echo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
    })
    .then(response => {
        if (!response.ok) throw new Error("Failed to fetch echo response");
        return response.json();
    })
    .then(data => updateResponse(`Echoed Message: ${data.data.message}`))
    .catch(error => updateResponse(`Error: ${error.message}`));
}
