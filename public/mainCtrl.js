angular.module("clymbon")
.controller("mainCtrl", function($scope, mainServ) {
$scope.loggedin = false;
$scope.menuopen = false;
$scope.menutoggle = function(){
  if ($scope.menuopen == false){
    $scope.menuopen = true;
  } else {
    $scope.menuopen = false;
  }
}

});
