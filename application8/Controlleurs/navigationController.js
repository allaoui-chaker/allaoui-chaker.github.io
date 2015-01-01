var ApplicationNavigation = angular.module('ApplicationNavigation', []);

ApplicationNavigation.controller('NavigationCtrl', ['$scope', function ($scope) {

$scope.navigation={
nav1:"Connexion",
nav2:"Caddie",
nav3:"Promotion",
nav4:"Deals",
};


}]);// fin NavigationCtrl
