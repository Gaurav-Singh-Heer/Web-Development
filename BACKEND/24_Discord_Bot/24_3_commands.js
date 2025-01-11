// import { REST, Routes } from 'discord.js';  // OR
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(
  'MTMyNzU4ODM4ODc2NDkwOTY2MA.G3m_if.mvjxirEZN_MpRbbGu5FtVyz7wypB5eVsBvFzhA'
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
