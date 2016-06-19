var mongoose = require('mongoose');

/*var PortfolioSchema = new mongoose.Schema({
	name: String,
	desc: String,
	url: String,
	img: String
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);*/

var WorkSchema = new mongoose.Schema({
	name: String,
	desc: String,
	url: String,
	img: String
});

module.exports = mongoose.model('Work', WorkSchema);