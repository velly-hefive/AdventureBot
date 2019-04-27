var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var botFunctions = require('./botfunctions.js');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + bot.id);
});

bot.on('message', function (user, userID, channelID, msg, evt) {
    if (msg.substring(0,1) == '~') {
        bot.sendMessage({
            to: channelID,
            message: "Acknowledged!"
        });
        logger.info(msg);
        var cmds = msg.substring(1).split('|')
        cmds.forEach(cmd => {
            logger.info(cmd);
            
            var args = cmd.substring().split(' ')
            args.forEach(par => {
                logger.info(par);
            });

        });
    }
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
/*
    else if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!!'
                });
                break;
            case 'redis':
                bot.sendMessage({to: channelID, message: "REDIS"});
                botFunctions.redisTest();
                break;
            case 'ping2':
                botFunctions.pingTest(bot, channelID);
                break;
            // Just add any case commands if you want to..
         }
     }
     */
});

