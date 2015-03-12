angular
    .module("app", ["filtersModule", "directivesModule"])
    .controller("Controller", ["$scope",
        function ($scope) {

			
			$scope.filterName = "";
			
            $scope.items = [];
			$scope.items2 = [];
            $scope.newItem = {
                name: "",
                priority: "",
				ispolnitel: ""
            };
            $scope.add = function() {
                $scope.items.push({
                    name: $scope.newItem.name,
                    priority: $scope.newItem.priority,
					ispolnitel: $scope.newItem.ispoln
                });
                $scope.newItem.name = "";
                $scope.newItem.priority = "";
				$scope.newItem.ispolnitel = "";

            };
			
			$scope.del = function(item){
				var index = $scope.items.indexOf(item);
				$scope.items.splice(index, 1);
				
			}
			$scope.replace = function(mname, mpr, misp, i) {
                $scope.items2.push({
                    name: mname,
                    priority: mpr,
					ispolnitel: misp
                });
				$scope.del(i);
            };




        }]);