var redis = require("redis"),
    client = redis.createClient();
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

module.exports = {
    redisTest(){
        client.set("user:007","CESS",redis.print);
    },
    pingTest(botPar, channelID){
        botPar.sendMessage({
            to: channelID,
            message: "pong2!"
        });
    }
}