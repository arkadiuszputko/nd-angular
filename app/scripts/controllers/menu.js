'use strict';

angular.module('ndAngularApp')
    .controller('MenuCtrl', function ($scope) {
        $scope.items = [
            {
                order: 0,
                url: '#/support',
                title: 'wesprzyj'
            },
            {
                order: 1,
                url: '#/plans',
                title: 'plany'
            },
            {
                order: 2,
                url: '#/news',
                title: 'aktualności'
            },
            {
                order: 3,
                url: '#/history',
                title: 'historia'
            }
        ]
    });
