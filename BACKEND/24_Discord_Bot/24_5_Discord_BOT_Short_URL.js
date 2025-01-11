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
    if(message.content.startsWith('create')){
        const url = message.content.split('create')[1];
        return message.reply({
            content:"Generating Short ID for " + url,
        });
    }
    message.reply({
        content:"Hi From BOT",
    })
});

client.on('interactionCreate', interaction =>{
    console.log(interaction);  // will display a interaction with command name ping;
    interaction.reply("Pong!!");   // By This we get Reply as PONG
})

client.login(
    "MTMyNzU4ODM4ODc2NDkwOTY2MA.Gg1OxS.L43vhb8099MqvVNF2nKUfbJS8m7PNfvG3irywA"// Here Paste the Token
)