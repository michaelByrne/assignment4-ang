(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: 'MenuAppController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getMenuCategories();
      }]
    }
  })
  .state('catDetail', {
    url: '/cat-detail/{category}',
    templateUrl: 'src/menuapp/templates/cat-detail.template.html',
    controller: 'CatDetailController as detail',
    resolve: {
      item: ['$stateParams', 'MenuDataService',
        function ($stateParams, MenuDataService) {
          console.log($stateParams.category);
          return MenuDataService.getMenuForCategory($stateParams.category);
        }]
    }
  });
}

})();
