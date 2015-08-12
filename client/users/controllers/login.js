angular.module("zwyft").controller("LoginCtrl", ['$meteor', '$state',
  function($meteor, $state){
    var vm = this;

    vm.credentials = {
      email: '',
      password: ''
    };

    vm.error = '';

    vm.login = function (){
      $meteor.loginWithPassword(vm.credentials.email, vm.credentials.password).then(
        function(){
          $meteor.call('validateEmailAddress', vm.credentials.email);
          $state.go('home');
        },
        function(err){
          vm.error = 'Login error - ' + err;
        }
      );
    };
    vm.google = function(){
        $meteor.loginWithGoogle({requestPermissions: ['email']}).then(function(){
            $state.go('home');
        }, function(err){
            console.log('Login error - ', err);
        });
    };
    vm.twitter = function(){
        $meteor.loginWithTwitter(function(error) {
            if (error) {
                return console.log(error.reason);
            }
        });
    };
    vm.facebook = function(){
        $meteor.loginWithFacebook({requestPermissions: ['email']}).then(function(){
            $state.go('home');
        }, function(err){
            console.log('Login error - ', err);
        });
    };
    }
]);
