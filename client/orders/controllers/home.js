angular.module("zwyft").controller("HomeCtrl", ['$scope', '$rootScope','$meteor', '$mdSidenav', '$location',
function($scope, $rootScope, $meteor, $mdSidenav, $location){

    $scope.orders = $meteor.collection(Orders).subscribe('orders');

    $meteor.subscribe('users');
    $scope.users = $meteor.collection(Meteor.users, false);
    $scope.getUserById = function(userId){
      return Meteor.users.findOne(userId);
    };

    $scope.openLeftMenu = function() {
    $mdSidenav('menu').toggle();
  };
    $scope.go = function(path){
        $location.path(path);
    };


    $scope.myvalue = false;

    $scope.onShow = function(){
        $scope.myvalue = true;
    };

    $scope.onClose = function(){
        $scope.myvalue = false;
    };

    $scope.onSave = function(e){
        e = (/\d+.\d+.\d+/).exec(e);
        $scope.myvalue = false;
        newOrder.date = e;
    };
    $scope.map = { center: { latitude: 23, longitude: 77 }, zoom: 8 };
}]);
