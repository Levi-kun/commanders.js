const Discord = require("discord.js");
const errors = require("../utils/errors.js")
    
    
module.exports.run = async (bot, message, args) => {


   if(!message.member.hasPermission("MANAGE_GUILD")) return errors.noPerms(message, "MANAGE_GUILD");
  if (args[0] == "help") {
    message.reply("Usage: !addrole <user> <role>");
    return;
  }
  if(!args[0]) return message.channel.send("EYYYYYY! how many?");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Clear ${args[0]} messages.`).then(msg => msg.delete(10000));
});

}

module.exports.help = {
  name: "purge"
}