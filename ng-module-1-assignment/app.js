(function () {
	'use strict';
	angular.module("LunchCheckerApp", [])

	.controller("LunchCheckController",LunchCheckController);
	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController ($scope) {
		
		$scope.name = "";
		$scope.message ="";
		$scope.colorChange ="";
		
		$scope.check = function() {
			var a = $scope.name
			var countCheck = checkNumberOfItems(a);
			
			if(a.length==0){
				$scope.message = "Please enter data first";
				$scope.colorChange = "red";
			}

			else {
				if(countCheck<=3){
					$scope.message = "Enjoy!!";
					$scope.colorChange = "green";
				}
				else{
					$scope.message = "Too much !!";
					$scope.colorChange = "green";
				}
		    }
		}

		function checkNumberOfItems(string) {
			var count = 1;
			for(var i=0; i<string.length;i++) {
				if(string.charCodeAt(i)==44 && string.charCodeAt(i+1)==44){
					// do nothing
				}
				else
					if(string.charCodeAt(i)==44)
						count++;
			}
			return count;
		}	


  }



})();