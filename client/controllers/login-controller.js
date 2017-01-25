var app = angular.module('loginApp', ['ngResource']);

app.controller('loginController', ['$scope', '$resource', '$window', function($scope, $resource, $window){
  var Cred = $resource('/chatBase/creds');

  $scope.redirectPage = function() {
  var cred = new Cred({username: $scope.username, password: $scope.password});
  cred.$save(function(results){
  	 $window.location.href = '/index';
    console.log('Successfully saved password');
   
  })
  };
}]);