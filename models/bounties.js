const mongoose = require('mongoose');

const {Schema, model}= mongoose;

const bountiesSchema = new Schema({
	name: {type:String},
	img: {type:String},
	text: {type:String},

})

const Bounties = model('Bounties',bountiesSchema)

module.exports = Bounties