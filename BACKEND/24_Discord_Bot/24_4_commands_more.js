const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'hello',
    description: 'Replies with a friendly greeting.',
  },
  {
    name: 'joke',
    description: 'Tells you a random joke.',
  },
  {
    name: 'weather',
    description: 'Provides a weather-related response.',
  },
  {
    name: 'time',
    description: 'Tells you the current server time.',
  },
  {
    name: 'quote',
    description: 'Shares an inspirational quote.',
  },
  {
    name: 'roll',
    description: 'Rolls a dice and gives you a random number between 1 and 6.',
  },
  {
    name: 'avatar',
    description: 'Shows your avatar or the avatar of another user.',
  },
  {
    name: 'server',
    description: 'Provides information about the server.',
  },
  {
    name: 'user',
    description: 'Provides information about the user.',
  },
];

const rest = new REST({ version: '10' }).setToken(
    'MTMyNzU4ODM4ODc2NDkwOTY2MA.Gg1OxS.L43vhb8099MqvVNF2nKUfbJS8m7PNfvG3irywA'
);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    // Registering commands for a specific guild (server)
    await rest.put(Routes.applicationCommands("1327588388764909660"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
