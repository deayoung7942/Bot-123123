const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("Ok!");
});
 
client.on("message", message => {
  if(message.author.bot) return; 
  if(message.channel.type== "dm") return;
  if (message.content == "ping") {
    message.channel.send('pong');
  }
 
 Let messageArray = message.content.split(" ");
 Let command = messageArray[0];
 args = args.slice(1);
 
 console.log(messageArray);
 console.log(command);
 console.log(args);
 message.channel.send(messageArray);
 message.channel.send(command);
 message.channel.send(args);
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
