soldier.controller("soldiercontroller",function($scope,soldierfactory){
    console.log("soldier controller");
    $scope.isbomb=false;
    $scope.showHide=false;
    $scope.number=localStorage.getItem('number');
    var num= JSON.parse($scope.number);
    console.log("num is",num);
  //  console.log("Root",$scope.number);
    // $scope.$on('sendtoall',(event,recData)=>{
    //     $scope.data = recData;
    // });
  //  console.log("data", $scope.data);
 $scope.calculatePrime=()=>{
    var num= JSON.parse($scope.number);
  console.log("number is",num);
    

    var store  = [], i, j, primes = [];
    for (i = 2; i < num; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j < num; j += i) 
            {
                store[j] = true;
            }
        }
    }


    $scope.finaloutput=primes.length;
    console.log($scope.finaloutput);

    var requestobj={
        "n":$scope.number,
        "output":$scope.finaloutput,
        "name":"Chahat"
    }
   let promise=soldierfactory.getData(requestobj);
   console.log("Promise received in controller");
   promise.then(data=>{
     console.log("controller then called",data);
    // $scope.data=data.data.Search;
    
     if(data.data.error==0 ){
          $scope.bomb="Now quicky diffuse the bomb by pressing d + Enter!";
          $scope.isbomb=true;
          console.log("no error");
         
     //  localStorage.tokenId = data.data.token ;
     // $window.location.href="adminlogin.html";
     
                
         
    
        

 }
 else if(data.data.error==1){
   $scope.bomb="Shit,Bomb explode now!";
   $scope.showHide=true;
   console.log("error");
 }
 //  else if( data.data.status=="S" && data.data.data==true ) {
 //   $window.location.href="adminfirstlogin.html";
 //   console.log("Admin has not changed  password");
 //  }
   },(err)=>{
     console.log("controller error",err);
     $scope.err=err;
   })

 }
 $scope.hitApi=()=>{
   
}
 
})