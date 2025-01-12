// import { REST, Routes } from 'discord.js';  // OR
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: 'create',
    description: 'Creates a new short URL!',
  },
];

const rest = new REST({ version: '10' }).setToken(
  'MTMyNzU4ODM4ODc2NDkwOTY2MA.G6aXej.fqa3LGvE5-jw9eP76sQtmUtJOWtuLW7zTPfXh8'
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
