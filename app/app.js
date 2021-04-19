
var app = angular.module('app', [] );

app.controller('app-controller-1', ['$scope', function($scope){

    $scope.messages = [
        {
            name: 'moni',
            color: 'blue',
            mark: 100,
            available: true
    },
    {
        name: 'karthi',
        color: 'green',
        mark: 90,
        available: false
    },
    {
        name: 'monica',
        color: 'red',
        mark: 100,
        available: true
    }
];

}]); 