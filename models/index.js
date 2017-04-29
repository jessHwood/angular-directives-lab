var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cardsagainstassembly");

module.exports.Card = require("./cards.js");