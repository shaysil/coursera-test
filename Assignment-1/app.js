(function(){
'use strict';
angular.module('Assignment1App',[])
.controller('Assignment1Controller',Assignment1Controller);

Assignment1Controller.$inject = ['$scope'];

function Assignment1Controller($scope){
/*  $scope.name = "Shay";
$scope.stateOfBeing="hungry";
$scope.sayMessage = function()
{
  return "Yaakob Likes to ear healthy snacks at night!"
};
*/

$scope.Check=function(){
  if($scope.TextInput==null){
      $scope.Message = "Please enter data first";
  }
  else
splitString($scope.TextInput, ",");
}

function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
  /*console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));*/
  if(arrayOfStrings.length <=3){
    $scope.Message = "Enjoy";
  }

  else{
      $scope.Message = "Too much!";
  }
}


}


})();
