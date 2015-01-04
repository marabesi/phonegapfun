'use strict';

app.factory('Contacts', ['$rootScope', '$q',
    function ($rootScope, $q) {
        return {
            find: function () {
                var deferred = $q.defer();
                var fields = ['name', 'displayName'];

                navigator.contacts.find(fields, function (contacts) {
                    $rootScope.$apply(function () {
                        deferred.resolve(contacts);
                    });
                }, function (error) {
                    $rootScope.$apply(function () {
                        deferred.reject(error);
                    });
                });

                return deferred.promise;
            }
        }
}]);

app.controller('ContactsController', ['$scope', 'Contacts',
    function ($scope, Contacts) {
        $scope.findContacts = function () {
            Contacts.find().then(
                function (contactList) {
                    $scope.contactList = contactList;
                }, function (error) {
                    console.log(error);
                }
            );
        }
}]);