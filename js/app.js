var app = angular.module('phonegapfun', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/detect-platform', {
        templateUrl: 'partials/detect-platform.html',
        controller: 'DetectPlatformController'
    }).when('/battery-status', {
        templateUrl: 'partials/battery-status.html',
        controller: 'BatteryStatusController'
    }).when('/camera', {
        templateUrl: 'partials/camera.html',
        controller: 'CameraController'
    }).when('/contacts', {
        templateUrl: 'partials/contacts.html',
        controller: 'ContactsController'
    }).otherwise({
        redirectTo: '/detect-platform'
    });
});

app.controller('DefaultController', ['$scope',
    function ($scope) {
        $scope.snapper = new Snap({
            element: document.getElementById('content'),
            disable: 'right'
        });

        $scope.openMenu = function () {
            if ($scope.snapper.state().state == 'left') {
                $scope.snapper.close();
            } else {
                $scope.snapper.open('left');
            }
        };

        $scope.closeMenu = function () {
            $scope.snapper.close();
        };
}]);