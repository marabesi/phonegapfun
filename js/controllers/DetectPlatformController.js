app.controller('DetectPlatformController', ['$scope',
    function ($scope) {
        $scope.detectPlatform = function () {
            var userAgent = navigator.userAgent;
            var msg = "Sorry! Can't detect the platform!";

            if (userAgent.match(/(iPhone|iPad|iPod)/)) {
                msg = 'iOS';
            } else if (userAgent.match(/(Android)/)) {
                msg = 'Android';
            } else if (userAgent.match(/(BB10)/)) {
                msg = 'BlackBerry10';
            } else if (userAgent.match(/(Windows Phone)/)) {
                msg = 'Windows Phone';
            }

            $scope.msg = msg;
        }

        $scope.detectPlatform();
}]);