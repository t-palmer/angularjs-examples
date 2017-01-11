/**
 * Created by tpalmer on 2/3/2015.
 */


locationApp.controller('LocationsTwoCtrl',['$scope', 'LocationsFactory','LocationService', function($scope, LocationsFactory,LocationService) {
    console.log("LocationsTwoCtrl: INIT");

    $scope.title="Locations TWO";

    LocationsFactory.list( function(data) {
        $scope.locationData = data;
    });

    $scope.selectLocation = function(locationObject) {
        LocationService.selectLocation(locationObject);
    };

}]);

