(function() {

  angular
    .module('app', [
      'ngRoute'
    ])
    .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    // routes
    $routeProvider
      .when('/', {
        templateUrl: 'app/src/views/home.html',
        controller: 'HomeController',
        controllerAs: 'main',
      })
      .when('/about', {
        templateUrl: 'app/src/views/about.html',
      })
      .when('/not-found', {
        templateUrl: 'app/src/views/404.html',
      })
      .otherwise({
        redirectTo: '/not-found',
      });
  }
})();