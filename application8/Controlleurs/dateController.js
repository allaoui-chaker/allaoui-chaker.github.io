var ApplicationDate = angular.module('ApplicationDate', []);



ApplicationDate.controller('DateCtrl', ['$scope', function ($scope) {

var uneDate=new Date();
$scope.jour=uneDate.getDate();
// en JavaScript les mois commende de 0, pour janvier en ajoute 1
$scope.mois=uneDate.getMonth()+1;
$scope.annee=uneDate.getFullYear();
$scope.heure=uneDate.getHours();
$scope.minute=uneDate.getMinutes();
$scope.sec=uneDate.getSeconds();
$scope.milli_sec=uneDate.getMilliseconds();
$scope.temps=uneDate.getTime();

$scope.chaine_conversion=uneDate.toString();
$scope.nb_conversion=uneDate.valueOf();
}]);// fin DateCtrl
