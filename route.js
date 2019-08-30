app.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when('/start',{
        
        templateUrl:'./views/loginpage.html'
    })
    //  .when('/movie/:id',{
    //     templateUrl:'./views/individualmovie.html'
      
    // })
   
   
   
    // .otherwise({
    //     template:`<h1>U Type Something Wrong </h1>`
    // })
})