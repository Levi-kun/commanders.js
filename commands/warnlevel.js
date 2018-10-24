const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

const errors = require("../utils/errors.js")
    
    
module.exports.run = async (bot, message, args) => {
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
  
if(!message.member.hasPermission("KICK_MEMBERS")) {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Insufficient Permission")
        .setColor(config.red)
        .addField("Permission needed", perm);
        //Now lets send our embed. but we would like to delete it....... 
       //so now lets do this um ya
    message.channel.send(embed).then(msg => message.delete(5000));
}


    
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them yo");
  let warnlevel = warns[wUser.id].warns;

  message.reply(`<@${wUser.id}> has ${warnlevel} warnings.`);

}


module.exports.help = {
  name: "warnlevel"
}
