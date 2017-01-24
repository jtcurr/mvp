var app = angular.module('chatApp', ['ngResource']);

app.controller('chatController', ['$scope', '$resource', function($scope, $resource) {
		//mock up some dummy data to use as a test
    var Chat = $resource('/api/chats');
    Chat.query(function(results){
    $scope.chats = results;
    })
		$scope.chats = [];


		$scope.makeNewMessage = function(){
			// console.log($scope.chatName);
			// console.log($scope.chatMessage);
      var chat = new Chat();
		  chat.name = $scope.chatName;
		  chat.message = $scope.chatMessage;
		  chat.$save(function(results){
		  	$scope.chats.push(results);
		  });
		}
}]);