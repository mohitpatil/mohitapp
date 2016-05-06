
var app = angular.module('explorifyApp', []);

app.controller('myController', function($scope,$http) {
    $http.get('data1.json')
    .success(function(response) 
	{
		$scope.placesOfInterest = response.placesOfInterest;
	});
	
	
	$scope.addPlace = function()
	{
	  var newPlace = {
		 "id": $scope.newId,
	     "place": $scope.newPlace,
		 "category": $scope.newCategory,
		 "address": $scope.newAddress,
		 "phone": $scope.newPhone,
		 "timings": $scope.newTimings
	  };
	   $scope.placesOfInterest.push(newPlace);
		 $scope.newId = '';
         $scope.newPlace = '';
         $scope.newCategory = '';
		 $scope.newAddress = '';
		 $scope.newPhone = '';
		 $scope.newTimings = '';
	}

	$scope.editPlace = function(index){
		 $scope.newId = $scope.placesOfInterest[index].id;
		 $scope.newPlace = $scope.placesOfInterest[index].place;
         $scope.newCategory = $scope.placesOfInterest[index].category;
		 $scope.newAddress = $scope.placesOfInterest[index].address;
		 $scope.newPhone = $scope.placesOfInterest[index].phone;
		 $scope.newTimings = $scope.placesOfInterest[index].timings;
         $scope.currentIndex = index;
		 
	}
	
	$scope.showMap = function(poi){
 		 var ind = $scope.placesOfInterest.indexOf(poi);
		 var add = $scope.placesOfInterest[ind].address;
		 document.getElementById("addTB").value = add;
		 location.href = 'MapPage.html?name=' + document.getElementById('addTB').value;
		 document.getElementById("addTB").value = '';
	}
	
	$scope.saveEditChanges = function(){
		 $scope.placesOfInterest[$scope.currentIndex].id = $scope.newId;
		 $scope.placesOfInterest[$scope.currentIndex].place =  $scope.newPlace;
         $scope.placesOfInterest[$scope.currentIndex].category =  $scope.newCategory;
		 $scope.placesOfInterest[$scope.currentIndex].address =  $scope.newAddress;
 		 $scope.placesOfInterest[$scope.currentIndex].phone =  $scope.newPhone;
		 $scope.placesOfInterest[$scope.currentIndex].timings =  $scope.newTimings;
		 $scope.newId = '';
         $scope.newPlace = '';
         $scope.newCategory = '';
		 $scope.newAddress = '';
		 $scope.newPhone = '';
		 $scope.newTimings = '';
	}
	
	$scope.deletePlace = function(poi){		 
		 var ind = $scope.placesOfInterest.indexOf(poi);
		 $scope.placesOfInterest.splice(ind, 1);
	}
	
});

function myController($scope,$http) {
    $http.get('dummy_data.json')
    .success(function(response) {$scope.employees = response.employees;});
}

