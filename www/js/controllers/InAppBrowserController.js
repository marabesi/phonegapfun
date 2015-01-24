'use strict';

app.directive('inappbrowser', function ($window) {
    return {
        restrict: 'A',
        link: function (scope) {
            scope.search = function () {
                $window.open(scope.location, '_blank');
            }
        }
    }
});

app.controller('InAppBrowserController', ['$scope',
    function ($scope) {}]);