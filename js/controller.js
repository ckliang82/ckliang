(function(){
	var anchorScroll = angular.module('anchorScroll', []);

	anchorScroll.controller('AnchorScrollCtrl', ['$scope', '$location', '$window', '$anchorScroll', function ($scope, $location, $window, $anchorScroll) {
		$scope.goToAnchor = function(x) {
			$anchorScroll(x);
		};
	}]);

	var portfolioModule = angular.module('portfolioModule', []);

	portfolioModule.controller('PortfolioCtrl', function($scope, portfolioFactory) {
		portfolioFactory.get(function(data) {
			$scope.data = data.websites;
		});
		$scope.class = 'portfolio_item spinner';
	});

	portfolioModule.directive('imageonload', function() {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				element.bind('load', function() {
					scope.class = 'portfolio_item loaded';
					scope.$apply();
					console.log('image loaded');
				});
			}
		};
	});
})();