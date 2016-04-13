angular 
.module('myApp', ['ngRoute','ui.bootstrap'])

.config(function($routeProvider){
	$routeProvider.when("/", {
								controller: "maincontroller",
								templateUrl: "home.html"
							  })

				   .when("/catalogo", {
								controller: "maincontroller",
								templateUrl: "catalogo.html"
							  })

			      .when("/details/:param", {
								controller: "detailcontroller",
								templateUrl: "details.html"
											})

				  .otherwise ({
           						 redirecTo:'/home'
           					  });
           					    	})




.controller("maincontroller",function($scope,$http){
	 
	$scope.filter ="";    
    $scope.field = "";

  
    $scope.mode=true;


    $http.get('movies.json').success(function(resp){
	                         $scope.movies = resp});

   
	})



.controller("detailcontroller",function($scope,$routeParams,$http,$sce){
	

	$http.get('movies.json').success(function(resp){

		for (var i = 0; i<resp.length ; i++) {
						if (resp[i].name==$routeParams.param) 
												{$scope.movieDetail=resp[i]};
										      };	
													});

	$scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
;


	$scope.actorShow = false;

    $scope.open=function() {
   	window.open($scope.movieDetail.imdb,'_blank')};

	$scope.change = function() {
	$scope.actorShow = !$scope.actorShow;};

})









