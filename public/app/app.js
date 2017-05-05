angular.module('armoryApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
              url:'/',
              templateUrl:'./dist/app/views/home.html'
            })
            .state('pvp',{
                url:'/pvp',
                templateUrl: "./dist/app/views/pvp.html"
            })
            .state('characters', {
              url:'/characterlookup',
              templateUrl:'./dist/app/views/characters.html',
              controller:'charactersCtrl'
            });

            $urlRouterProvider.otherwise('/')
})
