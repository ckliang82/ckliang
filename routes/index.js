var express = require('express');
var path = require('path');
var router = express.Router();

var mongoose = require('mongoose');
//var Portfolio = mongoose.model('Portfolio');
var Portfolio = mongoose.model('Work');



router.get('/api/portfolio', function(req, res, next) {
	Portfolio.find(function(err, portfolio) {
		if(err) {
			return next(err);
		}
		res.json(portfolio);
	});
});

router.get('*', function(req, res) {
	res.sendFile('index.html', { root: path.join(__dirname, '../public') })
});

module.exports = router;