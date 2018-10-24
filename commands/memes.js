const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {

randomPuppy('memes').then(url => {
        const embed = new Discord.RichEmbed()
            .setTitle("ME-ME!")
            .setImage(url)
            .setColor('RANDOM');
        message.channel.send(embed);
    });
}

module.exports.help = {
    name: "meme"
}