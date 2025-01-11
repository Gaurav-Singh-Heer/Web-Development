// import { Client, Events, GatewayIntentBits } from 'discord.js';   // OR
const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent,
    ] 
}); // Create a Client  // Virtual Client through whom we will interact with our server

client.on("messageCreate", (message)=>{
    console.log(message.content);
    // console.log(message);  // here we will see whole array with (content, userinformation,etc.)
});

client.on("messageCreate", (message)=>{
    if(message.author.bot) return;  // IMP as OTHERWISE BOT was replying to it's own message creating infinite message from bot 
    message.reply({
        content:"Hi From BOT",
    })
});

client.login(
    "MTMyNzU4ODM4ODc2NDkwOTY2MA.G3m_if.mvjxirEZN_MpRbbGu5FtVyz7wypB5eVsBvFzhA"// Here Paste the Token
)