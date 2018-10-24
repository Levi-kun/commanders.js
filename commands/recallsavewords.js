const Discord = require("discord.js");
const fs = require("fs");
const config = require("../botconfig.json")
module.exports.run = async (bot, message, args) => {

  
  let savewords = JSON.parse(fs.readFileSync("./savewords.json", "utf8"));


    
   
  let saveEmbed = new Discord.RichEmbed()
  .setColor("#609099")
  .setTitle("IT IS:")
  .setDescription(`${savewords[message.author.id].savewords}`)
  .setFooter("Heyo, thanks for using this trick! (this can be used for magic tricksss)");

  message.channel.send(saveEmbed);

}

module.exports.help = {
  name: "saysave"
}
