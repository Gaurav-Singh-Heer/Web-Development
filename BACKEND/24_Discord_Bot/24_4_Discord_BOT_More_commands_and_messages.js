const { Client, GatewayIntentBits } = require('discord.js');
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
    if (userMessage === "hello" || userMessage === "hi") {
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

// Handle slash commands
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong! 🏓');
    } else if (commandName === 'hello') {
        await interaction.reply('Hello! 👋 How can I assist you today?');
    } else if (commandName === 'joke') {
        await interaction.reply('Why don’t skeletons fight each other? They don’t have the guts! 😂');
    } else if (commandName === 'weather') {
        await interaction.reply('I can’t fetch live weather updates yet, but it’s always sunny here! ☀️');
    } else if (commandName === 'time') {
        const currentTime = new Date().toLocaleTimeString();
        await interaction.reply(`The current server time is: ${currentTime} ⏰`);
    } else if (commandName === 'quote') {
        await interaction.reply('“The best way to predict the future is to invent it.” – Alan Kay');
    } else if (commandName === 'roll') {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        await interaction.reply(`You rolled a ${diceRoll}! 🎲`);
    } else if (commandName === 'avatar') {
        await interaction.reply(interaction.user.displayAvatarURL());
    } else if (commandName === 'server') {
        await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
    } else if (commandName === 'user') {
        await interaction.reply(`Your username: ${interaction.user.tag}\nYour ID: ${interaction.user.id}`);
    }
});

// Log in to Discord
client.login('MTMyNzU4ODM4ODc2NDkwOTY2MA.Gg1OxS.L43vhb8099MqvVNF2nKUfbJS8m7PNfvG3irywA');
