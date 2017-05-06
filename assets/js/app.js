/*
 * Copyright (C) 2017 Alfredo Sequeida (alfredosequeida.github.io)
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
*/

var rumApp = angular.module('rumApp', ['ngRoute']);

// configure our routes
rumApp.config(function($routeProvider) {
        $routeProvider

        // route for the home page
                .when('/', {
                        templateUrl : 'file/file.html',
                        controller  : 'mainController'
                })

        // route for the about page
                .when('/messaging', {
                        templateUrl : 'messaging/messaging.html',
                        controller  : 'messagingController'
                })

        // route for the contact page
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
