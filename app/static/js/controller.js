app.controller('thumbnailsCtrl', function($scope, $http){

	$http.post("/api/thumbnails").then(function (response) {
	
		$scope.myLink = response.data.thumbnails;
	})
});