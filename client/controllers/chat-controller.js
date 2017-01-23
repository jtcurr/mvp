var app = angular.module('app', []);

app.controller('chatController', '$scope' [function($scope) {
		//mock up some dummy data to use as a test
		$scope.chats = [
		{name: 'Zazi', message: 'Bark'},
		{name: 'Atosz', message: 'Snacks'},
		{name: 'Little Eddy', message: 'Stomps'}];

}]);