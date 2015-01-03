var ApplicationTabs = angular.module('ApplicationTabs', []);

ApplicationTabs.controller('TabsCtrl', ['$scope', function ($scope) {
$scope.frame={
frame1:"Page 1",
frame2:"Page 2",
frame3:"Page 3",
frame4:"Page 4",
frame5:"Page 5",
frame6:"Page 6"
};

$(document).ready(function($){
$("#tabs").tabs ();
});


}]);// fin TabsCtrl
