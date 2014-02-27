'use strict';

angular.module('ndAngularApp')
    .controller('StaticPageCtrl', function ($scope, $rootScope, $location) {
        $rootScope.mainPage = false;
        $scope.pageName = $location.$$url.slice(1);
    });
