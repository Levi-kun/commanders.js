const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
    
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}

module.exports.help = {
  name: "say"
}