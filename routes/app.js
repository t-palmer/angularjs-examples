angular.module('routingApp', ['ngRoute'])
    // Routes are defined in the app configuration
    .config(function ($routeProvider) {
        $routeProvider
        // when: takes 2 arguments
        //	path - string describing what is covered by this instruction
        //	route - special object describing what should be done when route is accessed.
        //		** controller - controller for the content of the view 
        //		** templateUrl - relative location of a view
        //		** redirectTo - path where use should be redirected.
        .when('/hello', {
            controller: helloCtrl,
            templateUrl: 'hello.html'
        })
        .when('/about', {
            controller: aboutCtrl,
            templateUrl: 'about.html'
        })
        // otherwise: takes just one object which is a route as defined above
        .otherwise({
            controller: helloCtrl,
            templateUrl: 'hello.html'
        });
        
    });
