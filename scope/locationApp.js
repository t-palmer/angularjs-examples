/**
 * Created by tpalmer on 2/2/2015.
 */

var locationApp = angular.module('LocationApp', ['ngRoute']);

// Routes are defined in the app configuration
// The config will only be loaded once.
locationApp.config(function ($routeProvider) {
    console.log("LocationApp: config");

    $routeProvider
        // when: takes 2 arguments
        //	path - string describing what is covered by this instruction
        //	route - special object describing what should be done when route is accessed.
        //		** controller - controller for the content of the view
        //		** templateUrl - relative location of a view
        //		** redirectTo - path where use should be redirected.
        .when('/ControllerOne', {
            controller: 'LocationsOneCtrl',
            templateUrl: 'locations.html'
        })
        .when('/ControllerTwo', {
            controller: 'LocationsTwoCtrl',
            templateUrl: 'locations.html'
        })
        // otherwise: takes just one object which is a route as defined above
        .otherwise({
            controller: 'LocationsOneCtrl',
            templateUrl: 'locations.html'
        });

});

// The factory reads the locations from the JSON file.
// The factory will be initialized once.
// Each controller will call "list".
// Notice cache is set to true so the locations will be cached.
locationApp.factory('LocationsFactory',['$http', function($http) {
    console.log("LocationsFactory: INIT");
    return {
        list: function(callback) {
            console.log("LocationsFactory: Load locations");
            $http.get('locations.json',{cache: true}).success(callback);
        }
    }
}]);

// LocationService loads the Locations once so the controllers don't need to load them multiple times.
// LocationService keeps track of the currently selected Location
locationApp.service('LocationService',['$rootScope','LocationsFactory', function( $rootScope, LocationsFactory) {
    "use strict";
    console.log("LocationService: INIT");
    this.selectedLocation = null;

    this.selectLocation = function (locationObject) {
        console.log("Location Service: "+locationObject.id);
        this.selectedLocation = locationObject;
        $rootScope.$broadcast('updated');
    };

}]);

// This directive display the city and state of the currently selected location.
locationApp.directive('selectedlocation',['LocationService', function (LocationService) {
    "use strict";
    return {
        template: '<div>{{(selectedLocation==null ? "Please select a location." : (selectedLocation.city+", "+selectedLocation.state))}}</div> ',
        controller: function ($scope, $element, $attrs) {
            $scope.$on('updated', function () {
                $scope.selectedLocation = LocationService.selectedLocation;
            });
        }
    };
}]);

