require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");// importing google genertive ai
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);//Gemini api key
// const genAI = new GoogleGenerativeAI("AIzaSyDQfkZdvWvnu-mymP5bzEPCTkfA5OFyBAA");//Gemini api key
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });// Which model to use


exports.sendMessage = async (req, res) => {
  try {
      const { userMessage, followUp } = req.body;
      const prompt = `
        You are Sahayak, an assistant for health-related queries. Format responses with HTML tags like <b>, <i>, <ul>, <li>, <br> for clarity.

        Previous conversation: ${followUp}
        User's new query: ${userMessage}
      `;

      const result = await model.generateContent(prompt);

      // Log the response to debug issues
      console.log(result);

      if (!result || !result.response || !result.response.text) {
          return res.status(500).json({ message: "Error generating response" });
      }

      res.json({ message: result.response.text() });
  } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal server error" });
  }
  // res.send("Hellow");
};
