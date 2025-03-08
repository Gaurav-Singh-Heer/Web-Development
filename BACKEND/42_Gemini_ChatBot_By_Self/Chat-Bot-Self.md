# Step-by-Step Explanation of Chatbot Implementation

## 1. Setting up the Server (server.js)

1. **Import Required Modules:**
   ```javascript
   const express = require('express');
   const path = require('path');
   const sahayakRoutes = require('./routes/sahayakRoutes');
   const bodyParser = require('body-parser');
   const cors = require('cors');
   ```
   - Express is used to create a server.
   - Path module helps manage file paths.
   - `sahayakRoutes` is imported to manage chatbot API routes.
   - `bodyParser` is used to parse incoming request bodies.
   - `cors` is used to handle cross-origin requests.

2. **Initialize Express Application:**
   ```javascript
   const app = express();
   const PORT = 3000;
   ```
   - `app` initializes the Express application.
   - `PORT` is set to 3000 for the local server.

3. **Middleware Configuration:**
   ```javascript
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));
   app.use(express.static(path.join(__dirname, 'public')));
   app.use(cors());
   app.use(bodyParser.json());
   ```
   - `express.json()` and `express.urlencoded()` parse JSON and URL-encoded request bodies.
   - `express.static()` serves static files (HTML, CSS, JS) from the `public` folder.
   - `cors()` enables cross-origin resource sharing.
   - `bodyParser.json()` ensures JSON request bodies are parsed correctly.

4. **Using Routes:**
   ```javascript
   app.use(sahayakRoutes);
   ```
   - Connects chatbot routes defined in `sahayakRoutes.js`.

5. **Serve Home Page:**
   ```javascript
   app.get('/', (req, res) => {
       res.sendFile(path.join(__dirname, 'public', 'home.html'));
   });
   ```
   - Serves `home.html` when the user visits `/`.

6. **Start the Server:**
   ```javascript
   app.listen(PORT, () => {
       console.log(`Server running at http://localhost:${PORT}/`);
   });
   ```
   - Starts the Express server on port 3000.

---

## 2. Setting up Google Generative AI (sahayakController.js)

1. **Import Required Modules:**
   ```javascript
   require('dotenv').config();
   const { GoogleGenerativeAI } = require("@google/generative-ai");
   ```
   - `dotenv` is used to load environment variables.
   - `GoogleGenerativeAI` is imported to interact with Gemini AI.

2. **Initialize Google Generative AI Model:**
   ```javascript
   const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
   const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
   ```
   - `GEMINI_API_KEY` is used to authenticate with the Google Generative AI API.
   - `gemini-2.0-flash` model is selected for fast responses.

3. **Handle Incoming User Messages:**
   ```javascript
   exports.sendMessage = async (req, res) => {
   ```
   - Defines an asynchronous function to process chatbot requests.

4. **Extract User Input and Generate Response:**
   ```javascript
   const { userMessage, followUp } = req.body;
   ```
   - Extracts `userMessage` and `followUp` from request body.

5. **Prepare AI Prompt:**
   ```javascript
   const prompt = `
       You are Sahayak, an assistant for health-related queries...
       Previous conversation: ${followUp}
       User's new query: ${userMessage}
   `;
   ```
   - Formats a structured prompt for the AI model.

6. **Generate AI Response:**
   ```javascript
   const result = await model.generateContent(prompt);
   ```
   - Sends the prompt to the AI model and receives a response.

7. **Send Response to User:**
   ```javascript
   res.json({ message: result.response.text() });
   ```
   - Sends the AI-generated response as JSON.

8. **Handle Errors:**
   ```javascript
   catch (error) {
       console.error("Error:", error);
       res.status(500).json({ message: "Internal server error" });
   }
   ```
   - Logs errors and returns an appropriate error message.

---

## 3. Creating Routes (sahayakRoutes.js)

1. **Import Required Modules:**
   ```javascript
   const express = require('express');
   const { sendMessage } = require('../controller/sahayakController');
   ```
   - Imports Express and `sendMessage` function from the controller.

2. **Create Router and Define Route:**
   ```javascript
   const router = express.Router();
   router.post('/sahayak', sendMessage);
   ```
   - Creates an Express router and defines a POST route for chatbot interaction.

3. **Export Router:**
   ```javascript
   module.exports = router;
   ```
   - Exports router for use in `server.js`.

---

## 4. Creating Chatbot Interface (home.html)

1. **Basic HTML Structure:**
   ```html
   <header>
       <h1>Welcome to Sahayak Chatbot</h1>
   </header>
   ```
   - Displays chatbot title.

2. **Chatbot UI Elements:**
   ```html
   <div class="chatbot-btn" id="chatbot-btn">TALK TO AI</div>
   <div class="chatbot-container" id="chatbot-container">
   ```
   - Defines chatbot button and container.

3. **JavaScript for Chatbot Interaction:**
   ```javascript
   chatbotBtn.addEventListener('click', function () {
       chatbotContainer.style.display = 'block';
   });
   chatbotCloseBtn.addEventListener('click', function () {
       chatbotContainer.style.display = 'none';
   });
   ```
   - Handles opening and closing chatbot window.

4. **Send Message to Backend:**
   ```javascript
   async function sendMessageToBackend(userMessage, followUp) {
       const response = await fetch('http://localhost:3000/sahayak/', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ userMessage, followUp }),
       });
   ```
   - Sends user input to backend via `fetch`.

5. **Display Response:**
   ```javascript
   chatbotBody.innerHTML += `<div class='chatbot-message'>${chatbotResponse}</div>`;
   ```
   - Appends AI-generated response to chatbot UI.

---

### Summary:
- **Server.js**: Configures Express server and integrates chatbot routes.
- **SahayakController.js**: Handles AI model interaction.
- **SahayakRoutes.js**: Defines chatbot API route.
- **Home.html**: Provides chatbot UI and handles user interactions.
- **Final Outcome**: A working chatbot that responds to user queries using Google Generative AI.

