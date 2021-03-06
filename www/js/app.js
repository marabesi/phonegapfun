'use strict';

var app = angular.module('phonegapfun', ['ionic']);

app.directive('cordovaReady', ['$document',
    function ($document) {
        return {
            restrict: 'A',
            link: function (scope) {
                angular.element($document).on('deviceready', function (event) {
                    scope.$broadcast('cordova::deviceready', event);
                });
            }
        }
}]);

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
        .state('fun.accelerometer', {
            url: '/accelerometer',
            views: {
                'menuContent': {
                    templateUrl: 'partials/accelerometer.html',
                    controller: 'AccelerometerController'
                }
            }
        })
        .state('fun.inappbrowser', {
            url: '/inappbrowser',
            views: {
                'menuContent': {
                    templateUrl: 'partials/inappbrowser.html',
                    controller: 'InAppBrowserController'
                }
            }
        })
        .state('fun.media', {
            url: '/media',
            views: {
                'menuContent': {
                    templateUrl: 'partials/media.html',
                    controller: 'MediaController'
                }
            }
        })

    $urlRouterProvider.otherwise('/fun/detect-platform');
});