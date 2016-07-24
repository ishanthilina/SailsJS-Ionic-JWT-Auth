angular.module('app.controllers', [])

.controller('homeCtrl', function($scope, $rootScope,  $state, $http, API_URL) {

    $scope.userData= {};
    if (!$rootScope.user) {
      $state.go('login');
    }

    $http.get(API_URL+'/users')
    .success(function(data, status, headers, config) {
      $scope.userData.data=  data;
    })
    .error(function(data, status, headers, config) {
      console.log('error', status, data);
    });

})

.controller('settingsCtrl', function($scope, $rootScope,  $state) {
  if (!$rootScope.user) {
    $state.go('login');
  }
})

.controller('loginCtrl', function($scope, $http, $rootScope, $state, API_URL) {

  $scope.formData = {};

  $scope.login = function() {
    console.log($scope.formData.username + " -- "+ $scope.formData.password);
    $http.post(API_URL+'/auth', {username: $scope.formData.username, password: $scope.formData.password})
    .success(function(data, status, headers, config) {
      $rootScope.user = data;
      $state.go('menu.home');
    })
    .error(function(data, status, headers, config) {
      console.log('error', status, data);
    });
  };

  $scope.signUpUI = function() {
      $state.go('signup');
    };

})

.controller('signupCtrl', function($scope, $state, $http, API_URL) {

  $scope.formData = {};

  $scope.signUp = function() {
    console.log({username: $scope.formData.username, fullName: $scope.formData.name, password: $scope.formData.password, confirmPassword: $scope.formData.confirmPassword});
    $http.post(API_URL+'/users', {fullName: $scope.formData.name, username: $scope.formData.username, password: $scope.formData.password, confirmPassword: $scope.formData.confirmPassword})
    .success(function(data, status, headers, config) {
      console.log('Success', status, data);
        $state.go('login');
    })
    .error(function(data, status, headers, config) {
      console.log('error', status, data);
    });
  };

  $scope.loginUI = function() {
    $state.go('login');
  };
})
