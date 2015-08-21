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
    $scope.items = [4,6,12,24];
    $scope.selected = [];

    $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
    if (idx > -1) list.splice(idx, 1);
    else list.push(item);
};

$scope.exists = function (item, list) {
    return list.indexOf(item) > -1;
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
        $scope.myvalue3 = true;
        newOrder.date = e;
    };

    $scope.myvalue2 = false;
    $scope.myvalue3 = false;
    $scope.showpreConfirm = function(){
        $scope.myvalue2 = true;
        $scope.myvalue3 = false;
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

    /*$scope.showAdvanced = function(ev) {
        $mdDialog.show({
            controller: HomeCtrl,
            templateUrl: 'dialog1.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
            $scope.status = 'You cancelled the dialog.';
        });
    };
});*/
    $scope.map = { center: { latitude: 23, longitude: 77 }, zoom: 4 };
   $scope.polylines = [
            {
                id: 1,
                path: [        {
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
