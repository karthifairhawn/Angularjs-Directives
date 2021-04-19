
var app = angular.module('app', ['ngRoute'] );

app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when('/home',{
        templateUrl: 'views/homepage.html'
    })
    .when('/directory',{
        templateUrl: 'views/directory.html',
        controller: 'app-controller-1'
    }).otherwise({
        redirectTo: '/home'
    })
    
    
}])

app.controller('app-controller-1', ['$scope', function($scope){

    $scope.removeItem = function(item){
        var removing_item_index = $scope.messages.indexOf(item);
        $scope.messages.splice(removing_item_index,1);
    };

    $scope.add_message = function(){
        $scope.messages.push({
            name: $scope.new_item.name,
            mark: parseInt($scope.new_item.mark),
            color: $scope.new_item.color,
            available : true
        });

        $scope.new_item.name = "";
        $scope.new_item.mark = "";
        $scope.new_item.color = "";
    };
    $scope.messages = [
        {
            name: 'moni',
            color: 'blue',
            mark: 100,
            available: true,
            image: "content/img/moni.jpg"
    },
    {
        name: 'karthi',
        color: 'green',
        mark: 90,
        available: true,
        image: "content/img/mine.jpeg"
    },
    {
        name: 'monica',
        color: 'red',
        mark: 80,
        available: true,
    }
];

}]); 