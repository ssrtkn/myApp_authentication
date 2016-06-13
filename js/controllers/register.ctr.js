myApp.controller('RegisterController', function($scope, Authentication){
		
		$scope.register = function(){
			Authentication.register($scope.user);
		}
});