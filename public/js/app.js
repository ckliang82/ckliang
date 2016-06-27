(function(){
	var app = angular.module('ckliang', ['ui.router', 'ui.bootstrap', 'portfolioModule', 'anchorScroll']);

	app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {
		$stateProvider.state('home', {
			url: '/',
			templateUrl: 'template/home/index.html',
			controller: 'PortfolioCtrl'
		}).state('about', {
			url: '/about',
			templateUrl: 'template/about/index.html',
			controller: 'AboutMe'
		});

		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true).hashPrefix('!');
	}]);

	app.factory('portfolioFactory', ['$http', function($http) {
		var portfolio = {
			websites: []
		};

		portfolio.getAll = function(callback) {
			$http.get('/api/portfolio').success(function(data){
				callback(data[0].websites);
			});
		};

		return portfolio;
	}]);


	app.directive("backToTop", function($window, $anchorScroll) {
		return {
			restrict: 'E',
			link: function(scope, element) {
				angular.element($window).bind('scroll', function(e) {
					if(this.pageYOffset > this.innerHeight / 2) {
						scope.backToTop = true;
					}
					else {
						scope.backToTop = false;
					}
					scope.$apply();
				});
			}
		};
	});
})();