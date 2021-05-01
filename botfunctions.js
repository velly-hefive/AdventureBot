var redis = require('redis'),
    client = redis.createClient();

module.exports = {
    redisTest(){
        client.set('user:007','CESS',redis.print);
    },
    pingTest(botPar, channelID){
        botPar.sendMessage({
            to: channelID,
            message: 'Pong!'
        });
    }
}