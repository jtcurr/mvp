var app = angular.module('chatApp', ['ngResource']);

app.controller('chatController', ['$scope', '$resource', function($scope, $resource){
  
  var Chat = $resource('/chatBase/chats');
  Chat.query(function(results) {
    $scope.messages = results; 
  });
  $scope.messages = [];

  $scope.makeNewMessage = function() {
  	var date = new Date();
  	date = date.toLocaleTimeString();
  	var newChat = new Chat({name: $scope.chatName, message: $scope.chatMessage, date: date});
  	newChat.$save(function(results) {
  		$scope.messages.push(results);
  	}); 
  	$scope.chatName = '';
  	$scope.chatMessage = '';
  };
}])