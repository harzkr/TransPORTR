angular.module("zwyft").controller("OrdersListCtrl", ['$scope', '$meteor', '$location',
  function($scope, $meteor, $location){
      $meteor.subscribe('orders');
      $scope.orders = $meteor.collection(Orders);

      $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

      $scope.remove = function(order){
        $scope.orders.splice( $scope.orders.indexOf(order), 1 );
      };

      $scope.removeAll = function(){
        $scope.order.remove();
      };
      $scope.go = function(path){
          $location.path(path);
      };
}]);
