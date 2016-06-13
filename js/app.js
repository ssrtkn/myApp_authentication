var myApp = angular
				.module('myApp',['ngRoute','firebase'])
				.constant('FIREBASE_URL','https://myappacc.firebaseIO.com/');
myApp.run(function($rootScope,$location){
	$rootScope.$on('$routeChangeError',function(event,next,previos,error){
		if(error="AUTH_REQUIRED"){
			$rootScope.message ="Sorry, you must log in to access that page";
			$location.path('/login');
		}
	});
});

myApp.config(function($routeProvider){
	$routeProvider
		.when('/login',{
			templateUrl:'views/login.html',
			controller: 'LoginController'
		})
		.when('/register',{
			templateUrl:'views/register.html',
			controller: 'RegisterController'
		})
		.when('/success',{
			templateUrl:'views/success.html',
			controller: 'SuccessController',
			resolve: {
				currentAuth : function(Authentication){
					return Authentication.requireAuth();
				}
			}
		})
		.otherwise({
			redirectTo:'/'
		});
});
	