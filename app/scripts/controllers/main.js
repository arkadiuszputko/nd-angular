'use strict';

angular.module('ndAngularApp')
    .controller('MainCtrl', function ($scope, $rootScope) {
        $rootScope.mainPage = true;
        var current = 0;
        $scope.slides = [
            {
                url: '#/support',
                title: 'Jak przekazać wsparcie',
                excerpt: 'Przelewm na Nasze konto XXXX XXXX XXXX XXXX XXXX',
                current: true,
                imgUrl: '/images/cover.png'
            },
            {
                url: '#/plans',
                title: 'Narodnyi Dim w 2018 roku',
                excerpt: 'miejsce realizacji ważnych inicjatyw regionalnych i ponadregionalnych <br />ośrodek współpracy transgranicznej<br />centrum spotkań i dialogu<br />otwarte dla różnych grup nowoczesna sala koncertowo-teatralna<br />centrum dokumentacyjne sale konferencyjno-szkoleniowe<br />budynek dostępny dla osób niepełnosprawnych.',
                imgUrl: '/images/plan.png'
            },
            {
                url: '#/finance',
                title: 'finanse',
                excerpt: 'Według wstępnej wyceny architektonicznej, z uwzględnieniem wymogów konserwatorskich – remont Narodnego Domu w Przemyślu będzie kosztował ok. 12 000  000  zł (dwanaście milionów złotych).<br /><br />Pieniądze będą potrzebne na kolejne etapy remontu zaplanowanego na lata...<br /><br />Środki te pochodzić będą z wpłat zaangażowanych osób, darowizn sponsorów oraz dotacji ze środków publicznych. Prosimy też o Twoje wsparcie.',
                imgUrl: '/images/teatr.jpg'
            },
            {
                url: '#/history',
                title: 'historia',
                excerpt: 'Narodnyj Dim (Ukraiński Dom Ludowy) w Przemyślu to budynek, zbudowany ze składek ukraińskiej społeczności lokalnej w 1904 roku. To budynek, ale też potężny kawał historii, który chcemy tu po krótce przedstawić. Historii, która zaczyna się pod koniec XIX wieku i biegnie do wieku XXI. Na XXI wieku historia się nie kończy – mamy nadzieję dzięki wam obserwować jej nowe otwarcie.',
                imgUrl: '/images/dimBW.png'
            }
        ];
        var slidesCount = $scope.slides.length;

        $scope.slideLeft = function () {
            $scope.slides[current].current = false;
            current = ((current - 1) % slidesCount + slidesCount) % slidesCount;
            $scope.slides[current].current = true;
        };

        $scope.slideRight = function () {
            $scope.slides[current].current = false;
            current = (current + 1) % slidesCount;
            $scope.slides[current].current = true;
        };
    });
