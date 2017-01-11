/**
 * Created by tpalmer on 2/3/2015.
 */


locationApp.controller('LocationsOneCtrl',['$scope', 'LocationsFactory','LocationService', function($scope, LocationsFactory,LocationService) {
    console.log("LocationsOneCtrl: INIT");

    $scope.title="Locations ONE";

    LocationsFactory.list( function(data) {
        $scope.locationData = data;
    });

     $scope.selectLocation = function(locationObject) {
        LocationService.selectLocation(locationObject);
     };

}]);

