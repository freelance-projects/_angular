angular.module('angularAppModule', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'dataServices', 'dataServices', 'paymentModule']);

angular.module('angularAppModule').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('angularAppModule').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
