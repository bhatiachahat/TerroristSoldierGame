app.controller("maincontroller",function($scope){
    console.log("main controller");
    $scope.$on('sendP',(event,data)=>{
        $scope.childData = data;
    })
    $scope.broadcastToAll= ()=>{
        $scope.$broadcast('sendtoall',{'msg':$scope.childData});
    }
})