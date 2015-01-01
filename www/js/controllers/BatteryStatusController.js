app.directive('battery', function ($window) {
    return {
        restrict: 'A',
        link: function (scope) {
            angular.element($window).on('batterystatus', function (e) {
                scope.$broadcast('battery::batterystatus', e);
            });
        }
    }
});

app.controller('BatteryStatusController', ['$scope', '$rootScope',
    function ($scope, $rootScope) {
        $scope.$on('battery::batterystatus', function (e, info) {
            $rootScope.percentage = info.level;
            $rootScope.charging = info.isPlugged;
            $rootScope.$apply();
        });
}]);