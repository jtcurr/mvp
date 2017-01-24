var app = angular.module('chatApp', []);

app.controller('chatController', ['$scope', function($scope){

	$scope.messages = [
	{name: 'Gil', message: 'Biggest malamute'},
	{name: 'Bacon', message: 'Bacos'},
	{name: 'Ed', message: 'Littlest malamute'}];


  $scope.makeNewMessage = function(){
  	  $scope.messages.push({name: $scope.chatName, message: $scope.chatMessage});
  }
}])