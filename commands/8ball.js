const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!args[1]) return message.reply(`Please ask a full question!`);
    let replies =["Yes.", "No", "I don't know.", "Not sure.", "Ask again later.", "All signs point to yes.", "Maybe.", "Try again", "oh hell no.", "forget it.", "NEVER!","all signs point to no.", "bet on it."];
    
    
    
    let result = Math.floor((Math.random() * replies.length));
    let quetion = args.slice(0).join(" ");
    
    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#40E0D0")
    .addField("Quetion", quetion)
    .addField("🎱 Answer 🎱", replies[result]);
    
    message.channel.send(ballembed)
    
    
}

module.exports.help = {
    name: "8ball"
}