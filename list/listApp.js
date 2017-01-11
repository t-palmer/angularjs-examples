"use strict";
/**
 * Created by tpalmer on 1/25/2015.
 */

var listApp = angular.module('ListApp', ['ngRoute']);

// Routes are defined in the app configuration
listApp.config(function ($routeProvider) {
    $routeProvider
        // when: takes 2 arguments
        //	path - string describing what is covered by this instruction
        //	route - special object describing what should be done when route is accessed.
        //		** controller - controller for the content of the view
        //		** templateUrl - relative location of a view
        //		** redirectTo - path where use should be redirected.
        .when('/Filter', {
            templateUrl: 'filter.html'
        })
        .when('/NameFilter', {
            templateUrl: 'namefilter.html'
        })
        .when('/BrandFilter', {
            templateUrl: 'selectFilter.html'
        })
        .when('/Sort', {
            templateUrl: 'sorting.html'
        })
        .when('/FieldSort', {
            templateUrl: 'selectSort.html'
        })
        .when('/Large', {
            templateUrl: 'employees.htm'
        })
        // otherwise: takes just one object which is a route as defined above
        .otherwise({
            templateUrl: 'filter.html'
        });

});

listApp.factory('Shoes',[function() {
    var shoes = {};
    // List of brands for the select box. We add the 'All' in the controller
    shoes.brands = ["evolv","Five Ten","La Sportiva","Scarpa"];
    shoes.inventory = [
        {
            name: "Solution",
            price: 175,
            brand: "La Sportiva"
        },
        {
            name: "Mythos",
            price: 140,
            brand: "La Sportiva"
        },
        {
            name: "Instinct",
            price: 145,
            brand: "Scarpa"
        },
        {
            name: "Helix",
            price: 99,
            brand: "Scarpa"
        },
        {
            name: "Shamin",
            price: 150,
            brand: "evolv"
        },
        {
            name: "Addict",
            price: 98.95,
            brand: "evolv"
        },
        {
            name: "Rogue",
            price: 100,
            brand: "Five Ten"
        }
    ];
    return shoes;
}]);

listApp.controller('ShoeCtrl', ['$scope','Shoes', function($scope, Shoes) {
    var ShoeCtrl = this;
    $scope.shoes = Shoes;
    // This converts from the displayed field name to the lower case field names in the JSON object.
    $scope.shoes.fieldOptions = [
        { label: 'Name', value: 'name' },
        { label: 'Price', value: 'price' },
        { label: 'Brand', value: 'brand' }
    ];

    // Add an 'All' option to the list of brands for display in the SELECT.
    $scope.shoes.brandOptions=["All"].concat($scope.shoes.brands);
    // Notice we set the value of the select to the object in the array and NOT 'All'
    $scope.selectedBrand=$scope.shoes.brandOptions[0];
    $scope.selectedField=$scope.shoes.fieldOptions[0];
}]);


