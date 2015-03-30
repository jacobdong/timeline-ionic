angular.module('starter.controllers', ['starter.directives','starter.constants'])

.controller('DashCtrl', function($scope,MOCK_DATA) {
	console.log(MOCK_DATA[0]);

	var vm = $scope.vm = {};
	vm.tracks = MOCK_DATA[0].tracks;
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
