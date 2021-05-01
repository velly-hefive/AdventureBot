/*
Database variables:

index:wallet    -   keeps record of last id given out to wallets.
index:city      -   last id of cities
index:player    -   last id of players

*/
var utils = require('./utils.js');

class Entity {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

class Wallet extends Entity{
    constructor(){
        init();
        /*
        var id = utils.getnextId('index:wallet');
        console.log(id);
        super(id,'Wallet');
        this.currencies = [];
        this.ownerType = "";
        this.ownerId = 0;
        */
    }
    async init(){
        var promise = new Promise(function(resolve, reject){

        });
        this.id = await utils.getnextId('index:wallet');
        this.name = 'Wallet'

    }
}

class City extends Entity{
    constructor(name) {
        super(utils.getnextId('index:city'), name);
        this.wallet = '';
    }
}

module.exports = {
    Wallet: Wallet,
    City: City
};