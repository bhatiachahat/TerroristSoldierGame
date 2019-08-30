terror.controller("terrorcontroller",function($scope,$rootScope){
    console.log("terror controller");
    $scope.errormsg=""
    $scope.submitnumber=()=>{
        if($scope.number){
            console.log("number",$scope.number);
            $rootScope.number=$scope.number;
            localStorage.setItem('number', JSON.stringify($scope.number));
            $scope.sendToParent= ()=>{
                $scope.$emit('sendP',{'message':$scope.number});
            }
            $scope.errormsg=""
            $scope.successmsg="Bomb has been planted to activate it press a + Enter"
            
        }
        else{
            $scope.successmsg=""
            $scope.errormsg="Please enter a number";
        }
    }
    
    $scope.activatebomb=()=>{console.log("bomb activated");
    $scope.successmsg="  "
    $scope.showHide=true;
        
    }
})