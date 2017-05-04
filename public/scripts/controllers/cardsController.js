console.log('controller working?');

angular.module('CardsAgainstAssembly', [])
  .controller('CardsController', CardsController);

  //CONTROLLERS
CardsController.$inject = ['$http'];

function CardsController($http){
  var self = this;
  self.all = [];
  self.getCards = getCards;
  self.addCard = addCard;

  getCards();

  function getCards(){
  $http 
    .get('/cards')
    .then(function(response){
      console.log(response.data);

      self.all = (response.data);
      // console.log(self.all);
    });   
}

  function addCard(){
    $http
    .post('/cards', self.newCard)
    .then(function(response){
      console.log(self.newCard);
      getCards();
    });
    self.newCard = {};
  }
 
}
