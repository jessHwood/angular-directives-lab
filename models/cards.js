var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CardSchema = new Schema({
     question: String,
     answer: String,
     answerHidden: Boolean,
});

var Card = mongoose.model('Card', CardSchema);
module.exports = Card;