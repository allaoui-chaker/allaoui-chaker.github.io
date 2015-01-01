var ApplicationObjet = angular.module('ApplicationObjet', []);

ApplicationObjet.controller('ObjetCtrl', ['$scope', function ($scope) {

$scope.tableau={
nom:"ALLAOUI",
prenom:"CHAKER",
age:"33",
ville:"Metlaoui",
zipcode:"2130",
pays:"Tunisie",
metier:"Developpeur Web",
experience:"Debutant"
};
console.log($scope.tableau.nom);


}]);// fin ObjetCtrl
