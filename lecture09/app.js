(function () {
  'use strict';

  angular.module('DIApp',[])
  .controller("DIController",DIController);

function DIController($scope,$filter,$injector){
$scope.name="shay";
$scope.upper=function(){
var Upcase=$filter("uppercase");
$scope.name = Upcase($scope.name);
};
}

function AnnonateMe(name,job,blah)
{
return "blah";
}
console.log(AnnonateMe());
})();
