var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var botFunctions = require('./botfunctions.js'),
    objects = require('./object-definitions.js');

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
    if (userID != this.userID) {
        if (msg.substring(0,1) == '~') {
            bot.sendMessage({
                to: channelID,
                message: "Acknowledged!"
            });
            logger.info(msg);
            var cmds = msg.substring(1).split('|');
            cmds.forEach(cmd => {
                logger.info(cmd);
                var args = cmd.trimLeft().split(' ');
                logger.info(args[0]);
                switch(args[0]) {
                    case 'ping':
                        bot.sendMessage({
                            to: channelID,
                            message: 'Pong!'
                        });
                        break;
                    case 'create':
                        switch(args.length) {
                            case 3:
                                switch(args[1]){
                                    case 'city':
                                    case 'c':
                                        logger.info('make city');
                                        break;
                                    case 'player':
                                    case 'p':
                                        logger.info('make player');
                                        break;
                                    default:
                                        bot.sendMessage({
                                            to: channelID,
                                            message: 'invalid create parameter :' + args[1]
                                        });
                                        logger.info('invalid parameter');
                                }
                                break;
                            default:
                                bot.sendMessage({
                                    to: channelID,
                                    message: 'usage: create [city/player] [name]'
                                });
                                logger.info('usage info');
                        }
                        break;
                }

            });
        }
    }
});

