angular.module('app.services', [])

.constant('API_URL', 'http://localhost:1337')

.factory('BearerAuthInterceptor', function($rootScope, $q){
  console.log($rootScope.user);
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if ($rootScope.user) {
        config.headers.Authorization = 'Bearer ' + $rootScope.user.token;
      }
      return config;
    },
    response: function (response) {
      if (response.status === 401) {
        // handle the case where the user is not authenticated
      }
      return response || $q.when(response);
    }
  };
})

.service('AuthService', [function(){

  function Service($http, $localStorage) {
    
  }

}]);
