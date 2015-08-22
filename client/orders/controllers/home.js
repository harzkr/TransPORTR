angular.module("zwyft").controller("HomeCtrl", ['$scope', '$rootScope','$meteor', '$mdSidenav','$mdDialog', '$location','$log',
function($scope, $rootScope, $meteor, $mdSidenav,$mdDialog, $location,$log){

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
    $scope.addOrder = function(order){
        $meteor.call('addOrder', order);
    };

    $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
    if (idx > -1) list.splice(idx, 1);
    else list.push(item);
};

$scope.exists = function (item, list) {
    return list.indexOf(item) > -1;
};
    $scope.myvalue5 = false;
    $scope.myvalue = false;
    $scope.myvalue4 = false;
    $scope.onShow = function(){
        $scope.myvalue = true;
    };
    $scope.confirmShow = function(){
        $scope.myvalue4 = true;
        $scope.myvalue5 = false;
    }

    $scope.onClose = function(){
        $scope.myvalue = false;
    };

    $scope.onSave = function(e){
        e = (/\d+.\d+.\d+/).exec(e);
        $scope.myvalue = false;
        $scope.myvalue3 = true;
        newOrder.date = e;
    };

    $scope.myvalue2 = false;
    $scope.myvalue3 = false;
    $scope.showpreConfirm = function(){
        $scope.myvalue2 = true;
        $scope.myvalue3 = false;
        $scope.myvalue5 = true;
        var a = newOrder.from;
        var b = newOrder.to;
        if(a==="New Delhi" && b==="Jaipur")
            {
                var path1 = [        {
                            latitude: 30,
                            longitude: -89
                        },
                        {
                            latitude: 37,
                            longitude: -122
                        },
                        {
                            latitude: 60,
                            longitude: -95
                        }
                    ]
                };
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


    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.map = { center: { latitude: 23, longitude: 77 }, zoom: 5 };

    $scope.imgchange = true;
    $scope.imgbring = false;
    $scope.imgchange1 = true;
    $scope.imgbring1 = false;
    $scope.imgchange2 = true;
    $scope.imgbring2 = false;
    $scope.imgchange3 = true;
    $scope.imgbring3 = false;


    $scope.imageChange = function(){
        $scope.imgchange = false;
        $scope.imgbring = true;
        newOrder.trucki = true;
    };
    $scope.imageBring = function(){
        $scope.imgchange = true;
        $scope.imgbring =false;
        newOrder.trucki = false;
    };
    $scope.imageChange1 = function(){
        $scope.imgchange1 = false;
        $scope.imgbring1 = true;
        newOrder.trucki1 = true;
    };
    $scope.imageChange2 = function(){
        $scope.imgchange2 = false;
        $scope.imgbring2 = true;
        newOrder.trucki2 = true;
    };
    $scope.imageChange3 = function(){
        $scope.imgchange3 = false;
        $scope.imgbring3 = true;
        newOrder.trucki3 = true;
    };
    $scope.imageBring1 = function(){
        $scope.imgchange1 = true;
        $scope.imgbring1 =false;
        newOrder.trucki1 = false;
    };
    $scope.imageBring2 = function(){
        $scope.imgchange2 = true;
        $scope.imgbring2 =false;
        newOrder.trucki2 = false;
    };
    $scope.imageBring3 = function(){
        $scope.imgchange3 = true;
        $scope.imgbring3 =false;
        newOrder.trucki3 = false;
    };

    $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog1.ng.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
    .then(function(answer) {
      $scope.myvalue = true;
    }, function() {
      $scope.myvalue = false;
    });
  };
   $scope.polylines = [
            {
                id: 1,
                path: [        {
                            latitude:28.6139,
                            longitude: 77.2090
                        },
                        {
                            latitude: 27.1800,
                            longitude: 78.0200
                        },
                        {
                            latitude:25.4486,
                            longitude: 78.5696
                        },
                        {
                            latitude:21.1500,
                            longitude:79.0900
                        }
                    ],
                stroke: {
                    color: '#657594',
                    weight: 3
                },
                editable: true,
                draggable: true,
                geodesic: true,
                visible: true
            }
        ];
}])
.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('amazingPaletteName', {
    '50': 'aab3c5',
    '100': '8794ad',
    '200': '7b89a5',
    '300': '707f9d',
    '400': '5d6c89',
    '500': '657594',
    '600': '55627d',
    '700': '4d5971',
    '800': '455066',
    '900': '3d475a',
    'A100': '353e4e',
    'A200': '2d3443',
    'A400': '252b37',
    'A700': '060708',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });
  $mdThemingProvider.theme('default')
    .primaryPalette('amazingPaletteName')
});
