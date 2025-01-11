// import { REST, Routes } from 'discord.js';  // OR
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: 'create',
    description: 'Creates a new short URL!',
  },
];

const rest = new REST({ version: '10' }).setToken(
  'MTMyNzU4ODM4ODc2NDkwOTY2MA.Gg1OxS.L43vhb8099MqvVNF2nKUfbJS8m7PNfvG3irywA'
);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("1327588388764909660"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
