angular.module("zwyft").controller("OrderDetailsCtrl", ['$scope', '$stateParams', '$meteor',
function($scope, $stateParams, $meteor ){


        $scope.next = function() {
          $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
        };
        $scope.previous = function() {
          $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
        };

        $scope.order = $meteor.object(Orders, $stateParams.orderId);

        $scope.todos = [
            {
                checkpoint: 'City 8',
                date_time: '11/08/2015  5:00 PM',
                next_checkpoint: 'City 9    12/08/2015',
            },
            {
                checkpoint: 'City 7',
                date_time: '10/08/2015  3:00 PM',
                next_checkpoint: 'City 8    11/08/2015',
            },
            {
                checkpoint: 'City 6',
                date_time: '09/08/2015  2:30 AM',
                next_checkpoint: 'City 7    10/08/2015',
            },
            {
                checkpoint: 'City 5',
                date_time: '08/08/2015  11:00 PM',
                next_checkpoint: 'City 6    09/08/2015',
            },
            {
                checkpoint: 'City 4',
                date_time: '07/08/2015  8:00 AM',
                next_checkpoint: 'City 5    08/08/2015',
            },
        ];
}]);
