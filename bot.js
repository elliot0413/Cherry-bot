const Discord = require("discord.js");
const bot = new Discord.Client();
import os

access_token = os.environ["BOT_TOKEN];
bot.login(access_token);
