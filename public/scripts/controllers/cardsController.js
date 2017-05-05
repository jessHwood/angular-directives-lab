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
    console.log("posting");
    console.log(this.newCard);
    self.all.push(this.newCard);
    $http
    .post('/cards', this.newCard)
    .then(function(response){
      console.log(response);
      getCards();
    });
    self.newCard = {};
  }
 
}
