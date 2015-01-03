var ApplicationEvent = angular.module('ApplicationEvent', []);

var mesFruitsTab=["banane","pomme", "ananas","pêche","fraise"] ;
ApplicationEvent.controller('EventCtrl', ['$scope', function ($scope) {
$scope.affichage=function(){
$scope.mesFruits=mesFruitsTab;
}

}]);// fin EventCtrl
