var app = angular.module('phonegapfun', ['ionic']);

app.directive('cordovaReady', function ($document) {
    return {
        restrict: 'A',
        link: function (scope) {
            angular.element($document).on('deviceready', function (event) {
                scope.$broadcast('cordova::deviceready', event);
            });
        }
    }
});

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('fun', {
            url: '/fun',
            abstract: true,
            templateUrl: 'menu.html'
        })
        .state('fun.home', {
            url: '/detect-platform',
            views: {
                'menuContent': {
                    templateUrl: 'partials/detect-platform.html',
                    controller: 'DetectPlatformController'
                }
            }
        })
        .state('fun.battery-status', {
            url: '/battery-status',
            views: {
                'menuContent': {
                    templateUrl: 'partials/battery-status.html',
                    controller: 'BatteryStatusController'
                }
            }
        })
        .state('fun.camera', {
            url: '/camera',
            views: {
                'menuContent': {
                    templateUrl: 'partials/camera.html',
                    controller: 'CameraController'
                }
            }
        })
        .state('fun.contacts', {
            url: '/contacts',
            views: {
                'menuContent': {
                    templateUrl: 'partials/contacts.html',
                    controller: 'ContactsController'
                }
            }
        })

    $urlRouterProvider.otherwise('/fun/detect-platform');
});