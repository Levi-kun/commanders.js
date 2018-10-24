const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!args[0] || args[0 == "help"]) return message.reply(`USAGEEE: ${prefix}save [message]`);

  let savewords = JSON.parse(fs.readFileSync("./savewords.json", "utf8"));

    
  savewords[message.author.id] = {
    savewords: args[0]
  };

  fs.writeFile("./savewords.json", JSON.stringify(savewords), (err) => {
    if (err) console.log(err)
  });

  let savEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Saved!")
  .setDescription(`saved ${args[0]}`);

  message.channel.send(savEmbed);

}

module.exports.help = {
  name: "save"
}
