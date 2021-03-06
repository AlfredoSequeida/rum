var rumApp = angular.module('rumApp', ['ngRoute']);

// configure our routes
rumApp.config(function($routeProvider) {
        $routeProvider

        // route for the file page
                .when('/', {
                        templateUrl : 'file/file.html',
                        controller  : 'mainController'
                })

        // route for the messagin page
                .when('/messaging', {
                        templateUrl : 'messaging/messaging.html',
                        controller  : 'messagingController'
                })

        // route for the phone page
                .when('/phone', {
                        templateUrl : 'phone/phone.html',
                        controller  : 'phoneController'
                });
});

// create the controller and inject Angular's $scope
rumApp.controller('mainController', function($scope) {
});

rumApp.controller('messagingController', function($scope) {
});

rumApp.controller('phoneController', function($scope) {
});
