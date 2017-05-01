console.log('controller working?');

angular.module('CardsAgainstAssembly', [])
  .controller('CardsController', CardsController);

  //CONTROLLERS
CardsController.$inject = ['$http'];

function CardsController($http){
  var self = this;
  self.all = [];
  self.getCards = getCards;

  getCards();

  function getCards(){
  $http 
    .get('http://localhost:3000/cards')
    .then(function(response){
      console.log(response.data);

      self.all = (response.data);
      console.log(self.all);
    });   
}
 
}
