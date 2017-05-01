/*jshint esversion: 6 */

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override'); //used to manipulate POST
var app = express();
var port = process.env.PORT || 3000;

var db = require('./models');
var Card = require('./models/cards');

app.use(bodyParser.urlencoded({extended: true}));

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

//get all cards
app.get('/cards', function(req, res){
	db.Card.find(function (err, data) {
		if (err) res.json (err);
		res.json(data);
	});
});

//get one card
app.get('/cards/:id', function(req, res){
	db.Card.findOne({_id: req.params.id}, function(err, data){
		// console.log(req.params.id);
		res.json(data);
	}); 
});


//post a new card
app.post('/cards', function(req,res){
	console.log('in POST');
	console.log('body:', req.body);

	var card = new Card(req.body);

		console.log(card);

	card.save(function(error){
		if(error) res.json({message: 'couldnt create card bc' + error});

		res.json({card: card});
	});
});

//update a card
app.put('/cards/:id', function(req, res){
	
	db.Card.findOne({_id: req.params.id}), function(error, card) {
		if(error) res.json({message: 'could not find card bc:' + error});

		if(req.body.question) card.question = req.body.question;
		if(req.body.answer) card.answer = req.body.answer;
		if(req.body.answerHidden) card.answerHidden = req.body.answerHidden;
		console.log(req.body.question);
		console.log(req.body.answer);
	card.save(function(error) {
		if(error) res.json({message: 'could not update card bc:' + error});
		res.json({message: 'card successfully updated', card: card});
	});
	};
});

//delete a card
app.delete('/cards/:id', function(req, res){
	var id = req.params.id;

	db.Card.remove({_id: id}, function(error){
		if(error) res.json({message: 'could not delete card bc:' + error});

		res.json({message: 'card successfully deleted'});
	}).select('-_v');

});

//start server
app.listen(port, function(){
	console.log('Server started on', port);
});