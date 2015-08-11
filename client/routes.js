angular.module("zwyft").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'client/orders/views/home.ng.html',
        controller: 'HomeCtrl'
      })
      .state('ordersList', {
        url: '/list',
        templateUrl: 'client/orders/views/orders-list.ng.html',
        controller: 'OrdersListCtrl'
      })
      .state('orderDetails', {
          url: '/list/:orderId',
          templateUrl: 'client/orders/views/order-details.ng.html',
          controller: 'OrderDetailsCtrl'
      });

    $urlRouterProvider.otherwise("/home");
  }]);
