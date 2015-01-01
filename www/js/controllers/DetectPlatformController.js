app.factory('DeviceInformation', function () {
    return {
        get: function () {
            var deviceInformation = {
                'platform': device.platform,
                'uuid': device.uuid,
                'version': device.version
            };

            return deviceInformation;
        }
    }
});

app.controller('DetectPlatformController', function ($scope, $rootScope, DeviceInformation) {
    $scope.detectPlatform = function () {
        var userAgent = navigator.userAgent;
        var msg = "Sorry! Can't detect the user agent!";

        if (userAgent.match(/(iPhone|iPad|iPod)/)) {
            msg = 'User agent iOS';
        } else if (userAgent.match(/(Android)/)) {
            msg = 'User agent Android';
        } else if (userAgent.match(/(BB10)/)) {
            msg = 'User agent BlackBerry10';
        } else if (userAgent.match(/(Windows Phone)/)) {
            msg = 'User agent Windows Phone';
        }

        $scope.msg = msg;

        $scope.$on('cordova::deviceready', function () {
            $rootScope.deviceInformation = DeviceInformation.get();
            $rootScope.$apply();
        });
    }

    $scope.detectPlatform();
});