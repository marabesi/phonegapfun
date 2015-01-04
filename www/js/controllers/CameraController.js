'use strict';

app.directive('camera', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {
            element.on('click', function () {
                navigator.camera.getPicture(
                    function (imageUri) {
                        scope.$apply(function () {
                            ctrl.$setViewValue(imageUri);
                        });
                    }, function (error) {
                        ctrl.$setValidity('error', false);
                    }, {
                        quality: 100,
                        destinationType: Camera.DestinationType.FILE_URI,
                        sourceType: Camera.PictureSourceType.CAMERA,
                        allowEdit: false,
                        encodingType: Camera.EncodingType.JPEG,
                        targetHeight: 200,
                        saveToPhotoAlbum: false
                    });
            });
        }
    }
});

app.controller('CameraController', ['$scope',
    function ($scope) {
        $scope.pictures = [];
        $scope.$watch('photos', function (value) {
            if (value) {
                $scope.pictures.push(value);
            }
        }, true);
}]);