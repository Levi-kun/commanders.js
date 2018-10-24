const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
   var time = Date.now();
    

    let uPic = message.author.displayAvatarURL;
    let userEmbed = new Discord.RichEmbed()
    .setColor("#495963")
    .setThumbnail(uPic)
    .setAuthor(`User info for ${message.author.username}`)
    .addField("Name", message.author.username, true)
    .addField("Nickname", message.member.displayName, true)
    .addField("Status", message.author.presence.status, true)
    .addField("Highest Role", message.member.highestRole)
    .addField("Joined Discord", message.author.createdAt)
    .addField("Joined At", message.member.joinedAt);
    
    message.channel.send(userEmbed)
}

module.exports.help = {
  name: "userinfo"
}