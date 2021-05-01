var redis = require('redis');

module.exports = {
    getnextId(indexKey){
        var id,
            redisCli = redis.createClient();
        redisCli.incr(indexKey);
        redisCli.get(indexKey, function(err,reply){
            id = reply;
        });
        return id;
    }
}