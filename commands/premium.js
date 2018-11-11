const guildSettings = require('./../guildSettings.json');
const fs = require('fs');
const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    
    if (message.author.id == 365452203982323712){

        if (!args[0]) return message.reply("Error! Please use at least 1 argument!")
        
        if (args[0] == "true"){
            guildSettings[message.guild.id].isPremium = true;
            message.channel.send("This server is now using ADPREV Premium.");
        } else if (args[0] == "false") {
            guildSettings[message.guild.id].isPremium = false;
            message.channel.send("This server is no longer using ADPREV Premium.");
        }

    } else {
        return message.channel.send("**Error!** You do not have permission to execute this command!");
    }

    save();

}
module.exports.help = {
    name: "premium"
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function save(){
    fs.writeFile("./guildSettings.json", JSON.stringify(guildSettings), (err) => {
        if (err) console.log(err);
    });
}