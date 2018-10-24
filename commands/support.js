const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    
    let supportEmbed = new Discord.RichEmbed()
    .setDescription("Support")
    .addField("Donate",  "https://streamlabs.com/Lolol324" )
    .addField("Thank you", "THANK YOU!");
    
    
    message.channel.send(supportEmbed)
    
}

module.exports.help = {
    
    
    name: "support"
    
    
}