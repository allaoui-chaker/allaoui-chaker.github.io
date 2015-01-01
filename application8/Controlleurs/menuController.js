var ApplicationMenu = angular.module('ApplicationMenu', []);

ApplicationMenu.controller('MenuCtrl', ['$scope', function ($scope) {

$scope.menu={
store:"Chaker Store",
lien1:"Accueil",
lien2:"Services",
lien3:"Références",
lien4:"Blog",
lien5:"Contact",
lien6:"Site Map"
};


}]);// fin MenuCtrl
