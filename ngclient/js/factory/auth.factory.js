myapp.factory('AuthenticationFactory', function($window) {
	var auth = {
		isLogged: false, 
		check: function() {
			if($window.sessionStorage.token && $window.sessionStorage.user) {
				this.isLogged = true;
			} else {
				this.isLogged = false;
				delete this.user;
			}
		}
	}

	return auth;
});


myapp.factory('UserAuthFactory', function($window, $location, $http, AuthenticationFactory) {
	return {
		login: function(username, password) {
			return $http.post('http://localhost:3000/login', {
				username: username, 
				password: password
			});
		}, 
		logout: function() {
			if(AuthenticationFactory.isLogged) {
				AuthenticationFactory.isLogged = false;
				
			}
		}
	}
});
