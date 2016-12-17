(function(){
'use strict';
angular.module('MsgApp',[])
.controller('MsgController',MsgController);

MsgController.$inject = ['$scope'];

function MsgController($scope){
  $scope.name = "Shay";
$scope.stateOfBeing="hungry";
$scope.sayMessage = function()
{
  return "Yaakob Likes to ear healthy snacks at night!"
};

$scope.feedYaakov=function(){
$scope.stateOfBeing="fed";

}
}


})();
