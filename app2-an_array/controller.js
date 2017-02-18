angular.module('arrayApp').controller('arrayController', function($scope){

    $scope.getArray = function(){
        $scope.array = arrayService.getArray();
    }

    $scope.getArray();



})