angular.module("zwyft").controller("ProfileCtrl", ['$meteor','$scope','$rootScope','$stateParams',
function($meteor,$scope, $rootScope, $stateParams){

    $meteor.subscribe('users');
    $scope.users = $meteor.collection(Meteor.users);

    $meteor.subscribe('orders');
    $scope.order = $meteor.object(Orders, $stateParams.orderId);

}
]);
