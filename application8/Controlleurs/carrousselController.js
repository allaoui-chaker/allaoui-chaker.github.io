var ApplicationCarroussel = angular.module('ApplicationCarroussel', []);

ApplicationCarroussel.controller('CarrousselCtrl', ['$scope', function ($scope) {

$scope.carroussel={
img1:"../img/slide1.jpg",
img2:"../img/slide2.jpg",
img3:"../img/slide3.jpg",
"titre1":"Titre Slide num 1",
"texte1":"Texte de contenu de slide num 1",
"titre2":"Titre Slide num 2",
"texte2":"Texte de contenu de slide num 2",
"titre3":"Titre Slide num 3",
"texte3":"Texte de contenu de slide num 3"
/*
titre2:"Titre Slide num 2",
texte2:"Texte de contenu de slide num 2",
titre3:"Titre Slide num 3",
texte3:"Texte de contenu de slide num 3"
*/
};
/*
$scope.slide={
titre="Titre Slide num 1",
texte="Texte de contenu de slide num 1"
};
*/

}]);// fin CarrousselCtrl
