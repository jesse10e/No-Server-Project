angular.module('armoryApp').service('mainSrv', function($http) {


  this.getCharacters = function(name, realm) {
    return $http({
      method: 'GET',
      url:`https://us.api.battle.net/wow/character/${realm}/${name}?locale=en_US&apikey=r8je9ubkzd5px4a49qqsfjj92aw99r25`,
    })
  }

  this.getLeaderboard = function(brackets) {
    return $http({
      method: 'GET',
      url:'https://us.api.battle.net/wow/leaderboard/${bracket}?locale=en_US&apikey=r8je9ubkzd5px4a49qqsfjj92aw99r25',
    })
  }
  this.getClasses = function(classes) {
    return $http({
      method: 'GET',
      url:'https://us.api.battle.net/wow/data/character/classes?locale=en_US&apikey=r8je9ubkzd5px4a49qqsfjj92aw99r25'
    })
  }
  this.getRaces = function(races) {
    return $http({
      method: 'GET',
      url:'https://us.api.battle.net/wow/data/character/races?locale=en_US&apikey=r8je9ubkzd5px4a49qqsfjj92aw99r25'
    })
  }
})
