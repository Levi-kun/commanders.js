const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    
    if(!args[0]) return message.reply(`What was the joke...`);
    let replies =["LMAOOOO.", "Wat."];
    
    
    
    let result = Math.floor((Math.random() * replies.length));
    let quetion = args.slice(1).join(" ");
    
    let roflEmbed = new Discord.RichEmbed()
    .setTitle(quetion)
    .setColor("RANDOM")
    .addField(replies[result], replies[result]);

let commandChannel = message.guild.channels.find(`name`, "bot-commands");
    if(!commandChannel) return message.channel.send("Couldn't find command channel.");

commandChannel.send(roflEmbed).then(msg => msg.delete(10000));


    
    
}
module.exports.help = {
    name: "lmao"
}