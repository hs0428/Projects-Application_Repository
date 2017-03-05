angular.module('InventoryApp').
controller('ApplicationController', function($routeParams,$http,$scope){
  //console.log('Invoked Application Controller' + $routeParams.id);
  var controller = this;
  //controller.test = $routeParams.id;

  var data = [
       {
         'application'        : 'Wallstreet Systems',
         'server'             : 'Lxxxxxxxxxxxxx',
         'OS Type'            : 'Linux'
       },
       {
         'application'        : 'Calypso',
         'server'             : 'Lxxxxxxxxxxxxx',
         'OS Type'            : 'Linux'
       }
     ];
     controller.data = data;
     controller.showme = false;
     $scope.toogleShow = function(selectedObject){
      console.log('Success');
      if(selectedObject){
        $scope.applicationName = selectedObject.application;
      }
      controller.showme = true;
     };
})
