angular.module('armoryApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
              url:'/',
              templateUrl:'./No-Server-Project/dist/app/views/home.html'
            })
            .state('pvp',{
                url:'/pvp',
                templateUrl: "./No-Server-Project/No-Server-Project/dist/app/views/pvp.html"
            })
            .state('characters', {
              url:'/characterlookup',
              templateUrl:'./No-Server-Project/dist/app/views/characters.html',
              controller:'charactersCtrl'
            });

            $urlRouterProvider.otherwise('/')
})
