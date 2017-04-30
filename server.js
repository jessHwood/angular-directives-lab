/*jshint esversion: 6 */



var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

var db = require('./models');

app.use(bodyParser.urlencoded({extended: true}));

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
		console.log(req.params.id);
		res.json(data);
	}); 
});


//post a new card
app.post('/cards', function(req,res){
	console.log('in POST');
	console.log('body:', req.body);

	var card = new db.Card(req.body);

	card.save(function(error){
		if(error) res.json({message: 'couldnt create card bc' + error});

		res.json({card: card});
	});
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