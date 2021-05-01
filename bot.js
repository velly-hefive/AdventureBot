var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var botFunctions = require('./botfunctions.js');
var {Wallet, City} = require('./classes.js');
//    City = require('./classes.js');

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
        handleCode(user, userID,channelID,msg,evt);
    }
});

function enableFounding(uID, cID){

}

async function handleCode(usr,uID,cID,msg,evt){
    if (msg.substring(0,1) == '~') {
        bot.sendMessage({
            to: cID,
            message: 'Acknowledged!'
        });
        logger.info(msg);
        var cmds = msg.substring(1).split('|');
        cmds.forEach(cmd => {
            logger.info(cmd);
            var args = cmd.trimLeft().split(' ');
            logger.info(args[0]);
            switch(args[0]) {
                case 'ping':
                    botFunctions.pingTest(this,channelID);
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
                                case 'wallet':
                                    logger.info('make wallet id: ' + wlt.id);
                                    logger.info('city name: '+ city.name + ' id: ' + city.id);
                                    break;
                                default:
                                    bot.sendMessage({
                                        to: cID,
                                        message: 'invalid create parameter :' + args[1]
                                    });
                                    logger.info('invalid parameter');
                            }
                            break;
                        default:
                            bot.sendMessage({
                                to: cID,
                                message: 'usage: create [city/player] [name]'
                            });
                            logger.info('usage info');
                    }
                    break;
                case 'async':
                    var result = new Wallet();
                    logger.info(result.id);
                    break;
                case 'enable':
                    switch(args.length){
                        case 2 :
                            switch(args[1]) {
                                case 'founding':
                                    
                                    break;
                                default:
                                    bot.sendMessage({
                                        to: cID,
                                        message: 'invalid parameter :' + args[1]
                                    });
                            }
                            break;
                        default:
                            bot.sendMessage({
                                to: cID,
                                message: 'usage: enable [parameter] '
                            });
                    }
                    break;
            }

        });
    }
}
