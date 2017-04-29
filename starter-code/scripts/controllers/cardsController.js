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
    .get('http://localhost:3000/cards')
    .then(function(response){
      console.log(response.data);
      console.log("yo");
      self.all = (response.data);
    });   
}
  getCards();


}
