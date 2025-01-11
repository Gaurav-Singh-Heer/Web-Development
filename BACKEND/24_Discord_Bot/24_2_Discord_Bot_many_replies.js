const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent,
    ] 
}); // Create a Client

// Log all messages
client.on("messageCreate", (message) => {
    console.log(message.content);
});

// Replies to messages
client.on("messageCreate", (message) => {
    if (message.author.bot) return; // Prevent the bot from replying to its own messages

    const userMessage = message.content.toLowerCase(); // Make it case insensitive

    // Respond based on specific message content
    if (userMessage === "hello" || userMessage==="hi") {
        message.reply({
            content: "Hi there! How can I help you today? 😊",
        });
    } else if (userMessage.includes("help")) {
        message.reply({
            content: "I'm here to assist you! You can ask me anything. 🚀",
        });
    } else if (userMessage.includes("bye")) {
        message.reply({
            content: "Goodbye! Have a great day! 👋",
        });
    } else if (userMessage === "how are you?") {
        message.reply({
            content: "I'm just a bot, but I'm functioning as expected! Thanks for asking. 😊",
        });
    } else if (userMessage.includes("joke")) {
        message.reply({
            content: "Why don’t skeletons fight each other? They don’t have the guts! 😄",
        });
    } else if (userMessage.includes("weather")) {
        message.reply({
            content: "I'm not a weather bot, but you can always check with a weather app! 🌤️",
        });
    } else {
        // Default response for messages that don't match any condition
        message.reply({
            content: "I'm not sure how to respond to that. 🤔 Try asking something else!",
        });
    }
});

// Log in to Discord
client.login(
    "MTMyNzU4ODM4ODc2NDkwOTY2MA.G3m_if.mvjxirEZN_MpRbbGu5FtVyz7wypB5eVsBvFzhA" // Replace with your token
);
