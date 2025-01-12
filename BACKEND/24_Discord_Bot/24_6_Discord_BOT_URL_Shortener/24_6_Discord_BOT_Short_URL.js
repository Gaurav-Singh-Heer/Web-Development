const { Client, GatewayIntentBits, REST, Routes } = require('discord.js');
const mongoose = require('mongoose');
const shortid = require('shortid');
const express = require('express');
const URL = require('./models/url'); // Import the URL model

// Replace with your actual tokens and MongoDB connection string
const DISCORD_TOKEN = "MTMyNzU4ODM4ODc2NDkwOTY2MA.G6aXej.fqa3LGvE5-jw9eP76sQtmUtJOWtuLW7zTPfXh8";
const CLIENT_ID = "1327588388764909660";
const MONGO_URI = "mongodb://127.0.0.1:27017/discordbot"; // Corrected URI

// Discord Client Setup
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// Create Express server
const app = express();
const PORT = 8001;

// MongoDB connection
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Serve short URLs on the server
app.get('/:shortId', async (req, res) => {
    const { shortId } = req.params;

    // Find the URL from the database
    const urlData = await URL.findOne({ shortId });

    if (urlData) {
        res.redirect(urlData.redirectURL); // Redirect to the actual URL
    } else {
        res.status(404).send('Short URL not found');
    }
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Handle message-based commands in Discord
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith('create')) {
        const url = message.content.split('create ')[1];
        if (!url) {
            return message.reply('Please provide a valid URL.');
        }

        const shortID = shortid();
        await URL.create({ shortId: shortID, redirectURL: url, visitHistory: [] });

        return message.reply(`Short URL created: http://localhost:${PORT}/${shortID}`);
    }
});

// Handle slash commands
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === 'create') {
        const url = options.getString('url');
        if (!url) {
            return interaction.reply({ content: 'Please provide a valid URL.', ephemeral: true });
        }

        const shortID = shortid();
        await URL.create({ shortId: shortID, redirectURL: url, visitHistory: [] });

        return interaction.reply(`Short URL created: http://localhost:${PORT}/${shortID}`);
    }
});

// Slash Command Registration
const commands = [
    {
        name: 'create',
        description: 'Creates a short URL',
        options: [
            {
                name: 'url',
                type: 3, // STRING
                description: 'The URL to shorten',
                required: true,
            },
        ],
    },
];

const rest = new REST({ version: '10' }).setToken(DISCORD_TOKEN);

(async () => {
    try {
        console.log('Refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(CLIENT_ID),
            { body: commands }
        );

        console.log('Successfully registered application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

// Login to Discord
client.login(DISCORD_TOKEN);
