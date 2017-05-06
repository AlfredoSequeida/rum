/*
 * Copyright (C) 2017 Alfredo Sequeida (alfredosequeida.github.io)
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
*/

var rumApp = angular.module('rumApp', ['ngRoute']);

// route config
rumApp.config(function($routeProvider) {
        $routeProvider

        // route for the home/file page
                .when('/', {
                        templateUrl : 'file/file.html',
                        controller  : 'mainController'
                })

        // route for the sms page
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