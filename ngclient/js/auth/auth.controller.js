myapp.controller('LoginCtrl', ['$scope', '$window', '$location', 'UserAuthFactory', 'AuthenticationFactory', function($scope, $window, $location, UserAuthFactory, AuthenticationFactory) {
    
    $scope.user = {
        username: 'arvind@myApp.com',
        password: 'pass123'
    };
    
    $scope.login = function() {
        var username = $scope.user.username;
        var password = $scope.user.password;
        
        if(username !== undefined && password !== undefined) {
            UserAuthFactory.login(username, password).success(function(data) {
                AuthenticationFactory.isLogged = true;
                AuthenticationFactory.user = data.user.role;
            };
        }
    };
    
}