console.log('is this working?');

angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);

  //CONTROLLERS
CardsController.$inject = ['$http'];

function CardsController($http){
  var self = this;
  self.all = [];
  self.getCards = getCards;

  function getCards(){
  $http 
    .get('https://shielded-forest-41789.herokuapp.com/api/flashcards')
    .then(function(response){
      console.log(response.data);
      console.log("yo");
      self.all = (response.data);
    });   
}
  getCards();


}
