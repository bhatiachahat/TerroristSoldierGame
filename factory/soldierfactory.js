soldier.factory("soldierfactory",function($http,$q){
    return {
      getData(requestobj){
            console.log("Inside login in factory",requestobj);
            let defer=$q.defer();
            console.log("calling login url");
            $http.post("http://35.225.41.137/frontendtask/check/",requestobj).then(data=>{
                console.log("receiving data from ajax call");
                defer.resolve(data);
            },(error)=>{
                defer.reject(error);
            });
            console.log("Return promise");
            return defer.promise;
        }
    }
})