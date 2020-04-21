/*
 * Discord Bot Builder Bot
 * Version 1.2.0
 * Robert Borghese
 */

const Files = require(require('path').join(__dirname, 'js', 'Main.js')).Files;

if(!process.send) {

Files.initStandalone();

} else {

process.on('message', function(content) {
	Files.initBotTest(content);
});
const token= 'Njk3NzUyODg4ODcyNTM0MDE2.Xp6kCQ.tTQk2SYTo12Lf1vCqwOzqI7PBKU';
bot.login(process.env.token
}
