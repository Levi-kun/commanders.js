
//const
const economy = require("discord-eco")
const commando = require("discord.js-commando")
const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const moment = require("moment");
const bot = new Discord.Client();
const SQLite = require("better-sqlite3");
const sql = new SQLite('./scores.sqlite');
//lets
bot.commands = new Discord.Collection();
let purple = botconfig.purple;
let cooldown = new Set();
let cdseconds = 4;


/*

   made by Levi
   fuck you if you delete this
    your gay.
    and thank you for using this.    
         
*/



 //events   



bot.on("guildMemberAdd", member => {
    
    
    let disEmbed = new Discord.RichEmbed()
    .setColor(botconfig.red)
    .setTitle(`Welcome ${member.user.tag}`)
    .setDescription(`Heyo!`)
    .addField("Welcome!", "If none of us is talking it is because we are working or sleeping!")
    .addField(`${member.user.username}`, `Welcome to AspRumble!`)
    
  
   let general = member.guild.channels.find('name', 'general');
    let bothell = member.guild.channels.find('name', 'bot-hell')
    console.log(`User ${member.user.username} has joined ${member.guild.name}`);
    
    general.send(disEmbed).catch(err => {
  console.log("ERROR OCURRED @T GUILDMEMBERADD, probably becasue can not message @t general")  
    });
    
        
    
});  
                                
    



  
fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }




  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} IS ONLINE!`);
    bot.commands.set(props.help.name, props);
      			
      });
});

let statuses = ['Prefix: ?', 'Owner Levi', 'Join support', 'discord.gg/eeKFnjV'];

bot.on("ready", async () => {
    
    const table = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'scores';").get();
  if (!table['count(*)']) {
    // If the table isn't there, create it and setup the database correctly.
    sql.prepare("CREATE TABLE scores (id TEXT PRIMARY KEY, user TEXT, guild TEXT, points INTEGER);").run();
    // Ensure that the "id" row is always unique and indexed.
    sql.prepare("CREATE UNIQUE INDEX idx_scores_id ON scores (id);").run();
    sql.pragma("synchronous = 1");
    sql.pragma("journal_mode = wal");
  }

  // And then we have two prepared statements to get and set the score data.
  bot.getScore = sql.prepare("SELECT * FROM scores WHERE user = ? AND guild = ?");
  bot.setScore = sql.prepare("INSERT OR REPLACE INTO scores (id, user, guild, points) VALUES (@id, @user, @guild, @points);");
    
    //no more levels
    //Playing functions
    setInterval(function() {
    

    let status = statuses[Math.floor(Math.random()*statuses.length)];
  bot.user.setStatus("online")
  bot.user.setActivity(status, {type: "PLAYING"});//what is it doin?
    }, 60000);
    
  console.log("COMMANDER ONLINE!");
  console.log("ARE YOU DISRESPECTING WHAMEN?");
  console.log("me: hahaha respact waman, more like respact ramannnn, hehe ramen")
  console.log("RESPECT WAAMAN");
  console.log("  ############")
  console.log(" ##############        #####          ####          ####     #####              ##############");
  console.log("######      #####      #########      ####          ####     #########         #################")
  console.log("#####        ####      ###########    ####          ####     ####  #####      ######        #####");
  console.log("#####        ####      ####  #####    ####          ####     ####  #####      ######          #####");
  console.log("#####        ####      ####   ####    ####          ####     ####  #####      ####          #######");
  console.log("#####        ####      ####   ####    ####          ####     ####  #####      ####################");
  console.log("#####        ####      ####   ####    ####          ####     ####  #####       ##################");
  console.log(" ###############       ####   ####    ####          ####     ####  #####        ####### ");
  console.log("  #############        ####   ####    ###########   ####     ####  #####         ###################");
  console.log("     ######            ####   ####    ###########   ####     ####  #####           ################");
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!, serving ${bot.users.size} users in ${bot.channels.size} channels!`);//tells me if it is on
  //cool way to say onlineee
  

});



bot.on("message", async message => {
  
    
    
    
  if(message.author.bot) return; //won't react to itself
  if(message.channel.type === "dm") return; //if it is in the dm's then no nada.

    
    
    
    
    //time to do messsssssss
    
    //time to do messsss v.2
    function hook(channel, title, message, color, avatar) {
    
    //Reassign default parameters if dey blank
    if(!channel) return console.log("CHannel aint specified");
    if(!title) return console.log("GAY title bruh");
    if(!message) return console.log("Aint no message high oof aint no message low oof.");
    if(!color) color = 'd9a744';
    if(!avatar) avatar = 'https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png'
        
    //now lets replace dem fuckers!
    avatar = avatar.replace(/\s/g, '');
    color = color.replace(/\s/g, '');
    
    // Now lets create dem WEBHOOOOKKKKSSSSS!
    
    channel.fetchWebhooks().then(webhook => {
        let foundHook = webhook.find('name', 'Webhook')
        //this runs if webhook aint found
        
        if(!foundHook) {
            channel.createWebhook('Webhook', "https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png")
        .then(webhook => {
                webhook.send('', {
                    "username": title,
                    "avatarURL": avatar,
                    "embeds": [{
                        "color": parseInt(`0x${color}`),
                        "description":message
                    }]
                })
                .catch(error => {
                    console.log(error)
                })
            })
        } else { //if we do not need to make a webhookkk den this happppennnnnsss
            foundHook.send('', {
                    "username": title,
                    "avatarURL": avatar,
                    "embeds": [{
                        "color": parseInt(`0x${color}`),
                        "description":message
                    }]
                })
                .catch(error => {
                    message.channel.send("GAY! CONSOLEEE")
                    console.log(error)
                })
            }
    })
            
}
    
  //time to not do messsss  
    //save dem words!
    let savewords = JSON.parse(fs.readFileSync("./savewords.json", "utf8"));
  if(!savewords[message.author.id]){
    savewords[message.author.id] = ("Hi")
  }
    


//checks to see if you already have a custom prefix
      let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }
    
    
  
  
  
//timeout embed
    let cmdscdn = new Discord.RichEmbed()
    .setTitle("CoolDown!")
    .setDescription("WAIT!")
    .setColor("#000000")
    .addField("How long", `${cdseconds} seconds long`)
    
//makes everything abide to the prefix
let prefix = prefixes[message.guild.id].prefixes;   
if(!message.content.startsWith(prefix)) return;
if(cooldown.has(message.author.id)){
    message.delete().catch();
    return message.channel.send(cmdscdn).then(msg => {msg.delete(4000)});
    
     
}
    



    if(!message.member.hasPermission("MANAGE_GUILD")){
        cooldown.add(message.author.id)
        
    
    }
  //custom code
  if(!savewords[message.author.id]){
    savewords[message.author.id] = {
      savewords: botconfig.savewords
    };
  }
    
  if(!prefixes[message.guild.id]){ //if it has no custom prefix then it will make the prefix the default one.
    prefixes[message.guild.id] = { //checks to see if it has a prefix
      prefixes: botconfig.prefix //if it does not the default will become the prefix
    };
  }
//variables for user
  let owner = botconfig.botowner //if it is the bot owner
//for messages
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
    //Mandatory non command handler commands
if(cmd === `${prefix}hook`) {
      
    message.delete()
    
    let hookArgs = message.content.slice(prefix.length + 5).split(",");
        
        hook(message.channel, hookArgs[0], hookArgs[1], hookArgs[2], hookArgs[3]);
        
}
    
    if(message.content === "oof") {
        message.channel.send("oooOOOO0000F")
    }

 
    
//end of Mandatory non command handler commands
    
//start of points data.
    
    
    
    
    let score;
  if (message.guild) {
    score = bot.getScore.get(message.author.id, message.guild.id);
    if (!score) {
      score = { id: `${message.guild.id}-${message.author.id}`, user: message.author.id, guild: message.guild.id, points: 0, level: 1 }
    }
    score.points++;
    
    }
    bot.setScore.run(score);

    
    //end of level data!
    //sqlite shittt
    if(cmd === `${prefix}points`) {
  return message.reply(`You currently have ${score.points}!`);
}

    if(cmd === `${prefix}remove`) {
  // Limited to guild owner - adjust to your own preference!
  if(!message.author.id === botconfig.botowner) return message.reply("You're not the boss of me, you can't do that!");

  const user = message.mentions.users.first() || bot.users.get(args[0]);
  if(!user) return message.reply("You must mention someone or give their ID!");

  const pointsToRemove = parseInt(args[1], 10);
  if(!pointsToRemove) return message.reply("You didn't tell me how many points to remove...")

  // Get their current points.
  let userscore = bot.getScore.get(user.id, message.guild.id);
  // It's possible to give points to a user we haven't seen, so we need to initiate defaults here too!
  if (!userscore) {
    userscore = { id: `${message.guild.id}-${user.id}`, user: user.id, guild: message.guild.id, points: 0, level: 1 }
  }
  userscore.points -= pointsToRemove;


  // And we save it!
  bot.setScore.run(userscore);

  return message.channel.send(`${user.tag} has lost ${pointsToRemove} points and now stands at ${userscore.points} xp.`);
}
    
    if(cmd === `${prefix}give`) {
  // Limited to guild owner - adjust to your own preference!
  if(!message.author.id === botconfig.botowner) return message.reply("You're not the boss of me, you can't do that!");

  const user = message.mentions.users.first() || bot.users.get(args[0]);
  if(!user) return message.reply("You must mention someone or give their ID!");

  const pointsToAdd = parseInt(args[1], 10);
  if(!pointsToAdd) return message.reply("You didn't tell me how many points to give...")

  // Get their current points.
  let userscore = bot.getScore.get(user.id, message.guild.id);
  // It's possible to give points to a user we haven't seen, so we need to initiate defaults here too!
  if (!userscore) {
    userscore = { id: `${message.guild.id}-${user.id}`, user: user.id, guild: message.guild.id, points: 0, level: 1 }
  }
  userscore.points += pointsToAdd;

  // We also want to update their level (but we won't notify them if it changes)
  let userLevel = Math.floor(0.1 * Math.sqrt(score.points));
  userscore.level = userLevel;

  // And we save it!
  bot.setScore.run(userscore);

  return message.channel.send(`${user.tag} has received ${pointsToAdd} points and now stands at ${userscore.points} points.`);
}

if(cmd === `${prefix}xplb`) {
  const top10 = sql.prepare("SELECT * FROM scores WHERE guild = ? ORDER BY points DESC LIMIT 10;").all(message.guild.id);

    // Now shake it and show it! (as a nice embed, too!)
  const embed = new Discord.RichEmbed()
    .setTitle("Leaderboard")
    .setAuthor(bot.user.username, bot.user.avatarURL)
    .setDescription("Our top 10 points leaders!")
    .setColor(0x00AE86);

  for(const data of top10) {
    embed.addField(bot.users.get(data.user).tag, `${data.points} points`);
  }
  return message.channel.send({embed});
}



    
    
    
    //no more sqlite snittt


    
    //runs command folder
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
 if(!commandfile) return;
//sets timeout
    setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)

    
});


//end of events

    
    
bot.login(tokenfile.token); //login to bot