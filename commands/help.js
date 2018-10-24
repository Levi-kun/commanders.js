const Discord = require("discord.js")
const botconfig = require("../botconfig");
let purple = botconfig.purple;
const fs = require("fs");




module.exports.run = async (bot, message, args) => {

    
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }
    let prefix = prefixes[message.guild.id].prefixes;
   
    let helpembed = new Discord.RichEmbed()
    .setTitle("Member Help Menu")
    .setDescription("DEFAULT Prefix: ?")
    .setColor("#2134cf")
    .addField("Support", "Support: https://streamlabs.com/Lolol324 or for more information do ?support, this is 100% optional but all money is thanked.")
    .addField("info", "Help, serverinfo, botinfo, userinfo, leaderboards")
    .addField("Moderation","Report" )
    .addField("xp", "points, xplb")
    .addField("Gamble", "Flip")
    .addField("Fun", "dog, 911, 8Ball, lmao, hug, catfact")
    .addField("USAGE", "Never use []")
    .addField("Your Server's Prefix", `${prefix}`);

    message.channel.send(helpembed)
    
    if(message.member.hasPermission("MANAGE_MESSAGES")){
    let modembed = new Discord.RichEmbed()
    .setDescription("Mod Help Menu")
    .setColor("#2134cf")
    .addField("Moderation", "kick, warn, BAN!!")
    .addField("Other Mod",  "addrole, removerole, warnlevel" );
    try{
        await message.author.send(modembed);
    }catch(e){
        message.reply("Your Dms are locked I can not send you mod commands!")
        
    }
    }
    if(message.author.id === botconfig.botowner) {
        let botownerembed = new Discord.RichEmbed()
        .setTitle("BOT OWNER EMBED")
        .setDescription("Give, Remove")
        .setColor(botconfig.green)
        try{
            await message.author.send(botownerembed)
        }catch(e) {
            message.reply("DM'S ARE LOCK MY DUDE!")
        }
        }
    
}
    


module.exports.help = {
    name: "help"
}
