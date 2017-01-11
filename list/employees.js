"use strict";
/**
 * Created by tpalmer on 1/26/2015.
 */

listApp.factory('EmployeeFactory',['$http', function($http) {
    return {
        list: function(callback) {
            $http
                .get('employees.json')
                .success(callback)
                .error(
                    function (data, status) {
                        console.log("ERROR EmployeeFactory list",data);
                    }
                )
            ;
        }
    }
}]);

listApp.controller('EmployeeCtrl',['$scope', '$http', 'EmployeeFactory', '$rootScope', '$location', function ($scope, $http, EmployeeFactory, $rootScope, $location) {
    $scope.people = [];
//        $scope.filterText = "";
    EmployeeFactory.list( function(data) {
        $scope.people = data;
    });
    $scope.fieldOptions = [
        { label: 'First', value: 'first' },
        { label: 'Last', value: 'last' },
        { label: 'E-mail', value: 'email' }
    ];
    $scope.selectedField=$scope.fieldOptions[0];

    $scope.searchText="";
}]);
