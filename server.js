/*jshint esversion: 6 */

'use strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const questionsList = [
		    {
		id: "578414ae4dda540700250522",
		question: "What is Superman's guilty pleasure?",
		answer: "Ben Affleck",
		answerHidden: true

		},
		{
		id: "578414ae4dda540700250523",
		question: "I'm sorry I couldn't finish my homework...",
		answer: "the dog ate my laptop!",
		answerHidden: true

		},
		{
		id: "578414ae4dda540700250524",
		question: "I get by with a little help from _________.",
		answer: "John Cena!",
		answerHidden: true

		},
		{
		id: "578414ae4dda540700250525",
		question: "_________ -- It's a trap!",
		answer: "JAVASCRIPT???",
		answerHidden: true

		},
		{
		id: "578414ae4dda540700250526",
		question: "The class field trip was completely ruined by _________.",
		answer: "the guy in a clown suit",
		answerHidden: true

		},
		{
		id: "578414ae4dda540700250527",
		question: "What's my secret power?",
		answer: "ngAnimate",
		answerHidden: true

		},
		{
		id: "578414ae4dda540700250528",
		question: "Why are there so many songs about rainbows?",
		answer: "Leprachauns",
		answerHidden: true

		},
		{
		id: "578414ae4dda540700250529",
		question: "Where do babies come from?",
		answer: "Netflix and Chill",
		answerHidden: true
		},
		{
		id: "578414ae4dda54070025052a",
		question: "How do we do auth in Angular with Satellizer?",
		answer: "I'm glad you asked.",
		answerHidden: true
		},
		{
		id: "57f7e8226ac3a7030096e014",
		question: "What's the worst thing about a SQL database?",
		answer: "It's hard to relate",
		answerHidden: true
		},
		{
		id: "57fc541bd5c33903005a8cad",
		question: "Why did the chicken cross the playground?",
		answer: "To get to the other slide",
		answerHidden: true
		},
		{
		id: "58b0476dee64fc0004ef09b2",
		question: "abc",
		answer: "def",
		answerHidden: true
		}
  ];


app.get('/', function(req, res){
	res.send(questionsList);
});

app.get('/:id', function(req, res){
	var question = questionsList.filter(function(el){return el["id"] == req.params.id})[0];
	res.send(question);
});

//start server
app.listen(port, function(){
	console.log('Server started on', port);
});