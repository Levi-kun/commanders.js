const Discord = require('discord.js')
const config = require("../botconfig.json");
module.exports.run = async (bot, message, args) => {
    
   let spag = message.author.id;
   let rag = config.botowner;
   
   if(rag) {
       
       message.channel.send("SENSAI! GIVE ME MORE CODE!") 
   } 
    
    if(!rag){
       
       message.channel.send("Your not the owner");
       message.channel.send("Owner is Levi.");
   }
       
    
    
    

    
    
    
    
    
}
module.exports.help = {
    
    
    name: "owner"
    
}