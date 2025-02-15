// Function to greet the user by their name
async function greetUser() {
    // Get the value from the input field where the user enters their name
    const name = document.getElementById('nameInput').value
    // Send a GET request to the /api/greet/:name endpoint
    const response = await fetch(`/api/greet/${name}`)
    // Parse the response as JSON
    const data = await response.json()
    // Display the greeting message in the 'response' element on the webpage
    document.getElementById('response').textContent = data.message
}

// Function to get a random number from the API
async function getRandomNumber() {
    // Send a GET request to the /api/random endpoint
    const response = await fetch('/api/random')
    // Parse the response as JSON
    const data = await response.json()
    // Display the random number in the 'response' element on the webpage
    document.getElementById('response').textContent = `Random Number: ${data.randomNumber}`
}

// Function to echo the message entered by the user
async function echoMessage() {
    // Get the value from the textarea where the user types their message
    const message = document.getElementById('echoInput').value
    // Send a POST request to the /api/echo endpoint with the message in the body
    const response = await fetch('/api/echo', {
        method: 'POST',  // Define the method as POST
        headers: { 'Content-Type': 'application/json' },  // Set the content type to JSON
        body: JSON.stringify({ message })  // Convert the message to JSON format and send it in the body
    })
    // Parse the response as JSON
    const data = await response.json()
    // Display the echoed message and the data received in the 'response' element on the webpage
    document.getElementById('response').textContent = `${data.message}: ${JSON.stringify(data.data)}`
}
