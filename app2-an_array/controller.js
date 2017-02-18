angular.module('arrayApp').controller('arrayController', function($scope, arrayService){

    $scope.getArray = function(){
        $scope.array = arrayService.getArray();
    }

    $scope.getArray();



})