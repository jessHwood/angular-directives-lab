var db = require('./models');

var questionsList = [
		{
		question: "What is Superman's guilty pleasure?",
		answer: "Ben Affleck",
		answerHidden: true

		},
		{
		
		question: "I'm sorry I couldn't finish my homework...",
		answer: "the dog ate my laptop!",
		answerHidden: true

		},
		{
		
		question: "I get by with a little help from _________.",
		answer: "John Cena!",
		answerHidden: true

		},
		{
		
		question: "_________ -- It's a trap!",
		answer: "JAVASCRIPT???",
		answerHidden: true

		},
		{
	
		question: "The class field trip was completely ruined by _________.",
		answer: "the guy in a clown suit",
		answerHidden: true

		},
		{
		
		question: "What's my secret power?",
		answer: "ngAnimate",
		answerHidden: true

		},
		{
		
		question: "Why are there so many songs about rainbows?",
		answer: "Leprachauns",
		answerHidden: true

		},
		{
		
		question: "Where do babies come from?",
		answer: "Netflix and Chill",
		answerHidden: true
		},
		{
		
		question: "How do we do auth in Angular with Satellizer?",
		answer: "I'm glad you asked.",
		answerHidden: true
		},
		{
		
		question: "What's the worst thing about a SQL database?",
		answer: "It's hard to relate",
		answerHidden: true
		},
		{
		
		question: "Why did the chicken cross the playground?",
		answer: "To get to the other slide",
		answerHidden: true
		},
		{
		
		question: "abc",
		answer: "def",
		answerHidden: true
		}
  ];

  db.Card.remove({}, function(err, cards) {
  console.log('removed all cards');
  db.Card.create(questionsList, function(err, cards){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all cards');
    console.log("created", cards.length, "cards");

   });
});
