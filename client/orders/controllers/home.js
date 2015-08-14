angular.module("zwyft").controller("HomeCtrl", ['$scope', '$rootScope','$meteor', '$mdSidenav','$mdDialog', '$location',
function($scope, $rootScope, $meteor, $mdSidenav,$mdDialog, $location){

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
    $scope.showConfirm = function(ev) {
  // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
            .title('Thanks for booking with us')
            .content('You can see the status of your order or book another one!')
            .ariaLabel('Lucky day')
            .ok('Go to My Orders')
            .cancel('Stay on page')
            .targetEvent(ev);

        $mdDialog.show(confirm).then(function() {
            $location.path('/list')
  }, function() {
        $location.path('/home');
  });
};
    $scope.map = { center: { latitude: 23, longitude: 77 }, zoom: 8 };
}]);
