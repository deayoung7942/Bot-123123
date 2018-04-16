const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("Ok!");
});
 
client.on("message", message => {
  if(message.author.bot) return; 
  if (!message.guild) return;
  if (message.content == "ping") {
    message.channel.send('pong');
  }
 
 if (message.content == "@text") {
  
   let args = args.slice(1);
    message.channel.send('TEXT : ${args})';
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
