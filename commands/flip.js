const SQLite = require("better-sqlite3");
const sql = new SQLite('./scores.sqlite');
const Discord = require('discord.js');
const botconfig = require("../botconfig.json")
module.exports.run = async (bot, message, args) => {
    let flipembed = new Discord.RichEmbed()
    .setTitle("FLIPPING..")
    .setColor(botconfig.orange);
    
    let replies =["Heads", "Tails"];
    
    
    
    let result = Math.floor((Math.random() * replies.length));
    let quetion = args.slice(1).join(" ");
    
    let resultembed = new Discord.RichEmbed()
    .setTitle("FLIPPED")
    .setColor(botconfig.green)
    .setDescription(`LANDED ON ${replies[result]}`);
    
    let losspoints = new Discord.RichEmbed()
    .setTitle("LOST 39 POINTS")
    .setColor(botconfig.red);
    
    let winpoints = new Discord.RichEmbed()
    .setTitle("Won 15 Points!")
    .setColor(botconfig.green);
    
        let score;
  if (message.guild) {
    score = bot.getScore.get(message.author.id, message.guild.id);
    if (!score) {
      score = { id: `${message.guild.id}-${message.author.id}`, user: message.author.id, guild: message.guild.id, points: 0, level: 1 }
    }
    score.points++;
    const curLevel = Math.floor(0.1 * Math.sqrt(score.points));
  }
    
    let fliparg = args[0]
    let heads = 'Heads'
    let tails = "Tails"
    if(!fliparg) return message.channel.send("Heads or Tails?") //It will do this
if(fliparg === heads) {
    message.channel.send(flipembed).then(msg => msg.edit(resultembed));
    } else {
if(fliparg === tails) {
    message.channel.send(flipembed).then(msg => msg.edit(resultembed));
} else {
    message.channel.send("You must say heads or tails") //This does stuff.
}
    }
    //Add Points
    if(replies[result] === fliparg) { 
        message.channel.send(winpoints)
  const pointsToAdd = 15

  // Get their current points.
  let userscore = bot.getScore.get(message.member.user.id, message.guild.id);
  // It's possible to give points to a user we haven't seen, so we need to initiate defaults here too!
  if (!userscore) {
    userscore = { id: `${message.guild.id}-${user.id}`, user: user.id, guild: message.guild.id, points: 0}
  }
  userscore.points += pointsToAdd;

 

  // And we save it!
  bot.setScore.run(userscore);

    } 
    //Remove Points
    if(!replies[result] === fliparg) {
        message.channel.send(losspoints)
message.channel
  const pointsToRemove = 39;
 

  // Get their current points.
  let userscore = bot.getScore.get(user.id, message.guild.id);
  // It's possible to give points to a user we haven't seen, so we need to initiate defaults here too!
  if (!userscore) {
    userscore = { id: `${message.guild.id}-${user.id}`, user: user.id, guild: message.guild.id, points: 0}
  }
  userscore.points -= pointsToRemove;

  // We also want to update their level (but we won't notify them if it changes)
  let userLevel = Math.floor(Math.sqrt(score.points) / 0.1);
  userscore.level = userLevel;

  // And we save it!
  bot.setScore.run(userscore);

    }
    
    
    
}
        
    
    
module.exports.help = {
    name:"flip"
}