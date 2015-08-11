angular.module("zwyft").controller("HomeCtrl", ['$scope', '$meteor', '$mdSidenav', '$location',
function($scope, $meteor, $mdSidenav, $location){

    $scope.orders = $meteor.collection(Orders);

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
