angular.module('InventoryApp').
controller('ApplicationController', function($routeParams,$http,$scope){
  //console.log('Invoked Application Controller' + $routeParams.id);
  var controller = this;
  //controller.test = $routeParams.id;

  var data = [
       {
         'application'        : 'Wallstreet Systems',
         'server'             : 'lapprib00001054',
         'OS Type'            : 'Linux'
       },
       {
         'application'        : 'Calypso',
         'server'             : 'lapprib00001073',
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
