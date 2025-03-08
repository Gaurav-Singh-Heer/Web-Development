# How to Make a Gemini Chatbot

## 1. Install Dependencies
Ensure you have Node.js installed. Then, install the required package:
```sh
npm i @google/generative-ai express cors body-parser dotenv
```

## 2. Get Gemini API Key
- Go to [Google AI Studio](https://aistudio.google.com/apikey)
- Generate and copy your API key.
- Create a `.env` file and store your key:
```env
GEMINI_API_KEY=your_api_key_here
```

## 3. Set Up Express Server
Create a `server.js` file and configure it:
```js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sahayakRoutes = require('./routes/sahayakRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use sahayak routes
app.use(sahayakRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

## 4. Create Routes (`routes/sahayakRoutes.js`)
```js
const express = require('express');
const { sendMessage } = require('../controllers/sahayakController');

const router = express.Router();

router.post('/sahayak', sendMessage);

module.exports = router;
```

## 5. Implement Controller (`controllers/sahayakController.js`)
```js
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

exports.sendMessage = async (req, res) => {
    const { userMessage, followUp } = req.body;
    const prompt = `
      You are Sahayak, an assistant for health-related queries. Format responses with HTML tags like <b>, <i>, <ul>, <li>, <br> for clarity.

      Previous conversation: ${followUp}
      User's new query: ${userMessage}
    `;
    const result = await model.generateContent(prompt);
    res.json({ message: result.response.text() });
};
```

## 6. Create Frontend (Inside `public/home.html`)
### Add Chatbot UI
```html
<!-- Chatbot Button -->
<div class="chatbot-btn" id="chatbot-btn">
    <img src="/assets/chatBot.jpg" alt="Chat with us" class="chat-icon" />
</div>

<!-- Chatbot Container -->
<div class="chatbot-container" id="chatbot-container">
    <div class="chatbot-header">
        Chatbot - Sahayak
        <button class="chatbot-close-btn" id="chatbot-close-btn">&times;</button>
    </div>
    <div class="chatbot-body" id="chatbot-body">
        <div class="chatbot-message">Hello! How can I help you today?</div>
    </div>
    <div class="chatbot-footer">
        <input type="text" class="chatbot-input" id="user-input" placeholder="Type your message..." />
        <button class="chatbot-send-btn" id="send-btn">Send</button>
    </div>
</div>
```

### JavaScript to Handle Messages
```js
async function sendMessageToBackend(userMessage, followUp) {
    try {
        const response = await fetch('http://localhost:3000/sahayak/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userMessage, followUp }),
        });
        const data = await response.json();
        return data.message.replace("```html", "").replace("```", "");
    } catch (error) {
        console.error('Error:', error);
        return "Sorry, I couldn't reach the server. Try again later.";
    }
}

document.getElementById('send-btn').addEventListener('click', async function () {
    const userInput = document.getElementById('user-input').value;
    const followUp = Array.from(document.getElementById('chatbot-body').children).map(child => child.textContent);

    if (userInput) {
        document.getElementById('chatbot-body').innerHTML += `<div class='user-message'>${userInput}</div>`;
        document.getElementById('user-input').value = '';
        const chatbotResponse = await sendMessageToBackend(userInput, followUp);
        document.getElementById('chatbot-body').innerHTML += `<div class='chatbot-message'>${chatbotResponse}</div>`;
    }
});
```

## 7. Start the Server
Run the server using:
```sh
node server.js
```

## 8. Open the Frontend
Open `public/home.html` in a browser and start chatting!

---

This guide helps in building a Gemini-powered chatbot using Node.js, Express, and a simple frontend.

