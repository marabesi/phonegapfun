'use strict';

app.factory('Accelerometer', function ($rootScope) {
    return {
        watchAcceleration: function (successCallback, errorCallback, options) {
            return navigator.accelerometer.watchAcceleration(
                function (acceleration) {
                    $rootScope.$apply(successCallback(acceleration));
                },
                function (error) {
                    $rootScope.$apply(errorCallback(error));
                },
                options
            );
        }
    }
});

app.controller('AccelerometerController', function ($scope, Accelerometer) {
    $scope.buttonWatchShow = true;

    $scope.watchAccelerometer = function () {
        Accelerometer.watchAcceleration(function (acceleration) {
            $scope.buttonWatchShow = false;
            $scope.x = acceleration.x;
            $scope.y = acceleration.y
            $scope.z = acceleration.z;
        }, function (error) {
            console.log(error);
        }, {
            frequency: 500
        });
    }
});