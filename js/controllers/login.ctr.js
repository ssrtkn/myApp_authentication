myApp.controller('LoginController',function($scope, Authentication){
		
		$scope.login = function(){
			Authentication.login($scope.user);
		};

		$scope.logout = function(){
			Authentication.logout();
		};

});