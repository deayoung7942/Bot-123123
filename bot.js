const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("Ok!");
});
 
client.on("message", message => {
   if (!message.guild) return;
  if (message.content == "ping") {
    message.channel.send('pong');
  }
  // If the message content starts with "!kick"
  if (message.content.startsWith('!text')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
     const member = message.guild.member(user);
     message.channel.send('text : ${user.tag}');
     )
    } else {
      message.channel.send('No');
    }
  }
});
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});
 
client.login(process.env.BOT_TOKEN);
