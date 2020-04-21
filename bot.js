const Discord = require("discord.js");
const bot = new Discord.Client();
import os

const token = 'Njk3NzUyODg4ODcyNTM0MDE2.Xp7Haw.WTP24HEVqpdo7eukbfaHRMvjiWk';

access_token = os.environ["BOT_TOKEN];
bot.login(access_token);
