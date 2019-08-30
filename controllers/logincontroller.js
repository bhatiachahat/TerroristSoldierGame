app.controller("logincontroller",function($scope,$window){
    console.log("login controller");
    $scope.login=()=>{
        console.log("click");
        if($scope.email && $scope.password){
            console.log(" ",$scope.email," ",$scope.password);
            if($scope.email=="terror@gmail.com"){
console.log("terror");
$window.location.href="/views/terrorist.html";
$scope.errormessage=" ";
            }
            else if($scope.email=="soldier@gmail.com"){
console.log("Soldier")
$scope.errormessage=" ";
$window.location.href="/views/soldier.html";
            }
            else{
                $scope.errormessage="Invalid credentials";
            }
        }
        else{
            $scope.errormessage="Please Fill all the details";
        }
    }
})