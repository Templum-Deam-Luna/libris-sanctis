'use strict';

angular.module('pageRevelations')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/revelations/', {
		templateUrl: 'pages/creation/revelations.html',
		controllerAs: '$ctrl',
		controller() {
			angular.element('[ng-view]').attr('ng-view', 'pageRevelations')
		},
	})
}])
