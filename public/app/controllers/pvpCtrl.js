angular.module('armoryApp').controller('pvpCtrl', function($scope, mainSrv) {
  $scope.getLeaderboard = function(bracket) {
    mainSrv.getLeaderboard(bracket)
      .then(function(respone) {
        $scope.bracket = response.data
      })
  }
})
