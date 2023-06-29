const Discord = require('discord.js');
const client = new Discord.Client({
  intents: [
    'Guilds',
    'GuildMessages',
    'GuildMembers'
  ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', async (message) => {
  // Check if the bot should respond to the message
  if (message.content === '!downloadConversations') {
    // Fetch all channels in the server
    const guild = message.guild;
    guild.channels.cache.forEach(async (channel) => {
      // Check if the channel is a text channel
      if (channel.type === 'text') {
        const messages = await channel.messages.fetch({ limit: 100 }); // Fetch the latest 100 messages in the channel

        // Process and save the messages as per your requirements
        messages.forEach((msg) => {
          // Save the message content, author, timestamp, etc. to a file or database
          console.log(`Content: ${msg.content}`);
          console.log(`Author: ${msg.author.tag}`);
          console.log(`Timestamp: ${msg.createdTimestamp}`);
        });
      }
    });
  }
});

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
client.login('YOUR_BOT_TOKEN');
