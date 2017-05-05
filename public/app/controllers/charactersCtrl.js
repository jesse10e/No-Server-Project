angular.module('armoryApp').controller('charactersCtrl', function(mainSrv, $scope) {
var cls = 0;
var race = 0;
  $scope.getCharacters = function(name, realm) {
    mainSrv.getCharacters(name, realm)
      .then(function(response) {
          $scope.character = response.data;
          cls = $scope.character.class;
          race = $scope.character.race;
          console.log(race);
          getClasses();
          getRaces()
          if ($scope.character.gender === 0){
            $scope.character.gender = 'Male'
          }else {
            $scope.character.gender = 'Female'
          }
      });
  }
var getClasses = function() {
  mainSrv.getClasses().then(function(response) {
    $scope.classes = response.data.classes;
    console.log($scope.classes);
    getClassId();
  })
}


function getClassId() {
  for (var i = 0; i < $scope.classes.length; i++) {
  if  ($scope.classes[i].id === cls) {
  $scope.class = $scope.classes[i].name
  }
  }
  console.log(cls, "HEY");
}


  var getRaces = function() {
    mainSrv.getRaces().then(function(response) {
      $scope.races = response.data.races;
      console.log($scope.races);
      getRaceId()
    })
  };

function getRaceId() {
  for (var i = 0; i < $scope.races.length; i++) {
    if ($scope.races[i].id === race) {
      $scope.race = $scope.races[i].name;
    }
  }
  console.log(race, 'HELLO!')
}

})
