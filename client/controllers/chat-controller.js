var app = angular.module('chatApp', ['ngResource']);

app.controller('chatController', ['$scope', '$resource', function($scope, $resource){
  
  var Chat = $resource('/api/chats');
  Chat.query(function(results) {
   $scope.messages = results; 
  });
  $scope.messages = [];

  $scope.makeNewMessage = function() {
  	var newChat = new Chat({name: $scope.chatName, message: $scope.chatMessage});
  	// newChat.save(function(err, results) {
  	// 	if (err) {
  	// 		console.log('error');
  	
  	  
  	$scope.chatName = '';
  	$scope.chatMessage = '';
  	};
}])