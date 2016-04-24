(function(){
	var app = angular.module('ckliang', ['ui.bootstrap','portfolioModule', 'anchorScroll']);

	app.factory('portfolioFactory', ['$http', function($http) {
	    return {
	        get: function(callback) {
	            $http.get('js/data.json').success(function(data) {
	                callback(data);
	            });
	        }
	    }
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