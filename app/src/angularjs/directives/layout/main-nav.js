(function() {

  'use strict';

  angular
    .module('app')
    .directive('mainNav', mainNav);

  function mainNav() {
    return {
      restrict: 'E',
      templateUrl: 'app/src/angularjs/directives/layout/main-nav.html'
    };
  }

})();