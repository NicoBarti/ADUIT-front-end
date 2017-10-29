(function () {
'use strict';

angular.module('app')
.config(RoutesConfig);

RoutesConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
function RoutesConfig($urlRouterProvider, $stateProvider) {

  //Set home page
  $urlRouterProvider.otherwise('audit');

  // Set states
  $stateProvider

  .state('audit', {
    url: '/audit',
    templateUrl: 'app/audit/audit.html'
  })

};

})();
