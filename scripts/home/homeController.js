(function(){

    'use strict';

    angular.module('app').controller('home',home);

    
    function home(geoLocationService, dataService){

        var vm =this;

        vm.message = "Hello from Home";
        vm.includeLocation = true;
        vm.location = {};

        init();
        
        function init(){
            vm.message = "Hello from homeController init method";
            geoLocationService.getLocation().then(function(result){
                vm.location = result;
            });
            
            vm.message = dataService.getFirebaseRoot().toString();
            
            vm.foodTrucks = dataService.getData();
        }
        
        vm.save = function(){
    
              
        dataService.addData({name: vm.name, text: vm.text, address: vm.location.address}, 
                        {latitude: vm.location.latitude, longitude: vm.location.longitude});
    
        }
        
    }
})();