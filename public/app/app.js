angular.module('armoryApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
              url:'/',
              templateUrl:'../app/views/home.html'
            })
            .state('pvp',{
                url:'/pvp',
                templateUrl: "../app/views/pvp.html",
                controller:'pvpCtrl'
            })
            .state('characters', {
              url:'/characterlookup',
              templateUrl:'../app/views/characters.html',
              controller:'charactersCtrl'
            });

            $urlRouterProvider.otherwise('/')
})
