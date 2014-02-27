'use strict';

angular.module('ndAngularApp', ['ngRoute', 'ngAnimate', 'ngSanitize'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/support', {
                templateUrl: 'views/static.html',
                controller: 'StaticPageCtrl'
            })
            .when('/plans', {
                templateUrl: 'views/static.html',
                controller: 'StaticPageCtrl'
            })
            .when('/news', {
                templateUrl: 'views/static.html',
                controller: 'StaticPageCtrl'
            })
            .when('/history', {
                templateUrl: 'views/static.html',
                controller: 'StaticPageCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
