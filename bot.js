const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("Ok!");
});
 
client.on("message", message => {
  if (message.content == "ping") {
    message.reply("pong");
  }
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

 
client.login(process.env.BOT_TOKEN);
