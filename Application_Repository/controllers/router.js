angular.module("InventoryApp",['ngMaterial','ngRoute']);
angular.module("InventoryApp").config(function($routeProvider){
  $routeProvider
  .when('/application/:id',{
    templateUrl : 'pages/application.html',
    controller : 'ApplicationController',
    controllerAs : 'applicationController'
  })
  .when('/details/:name',{
    templateUrl : 'pages/details.html',
    controller : 'DetailsController',
    controllerAs : 'detailsController'
  })
  .when('/home',{
    templateUrl : 'index.html'
  })
});

angular.module("InventoryApp").controller('DemoCtrl', DemoCtrl);

function DemoCtrl ($timeout, $q, $log,$location) {
var self = this;

self.simulateQuery = false;
self.isDisabled    = false;

// list of `state` value/display objects
self.repos         = loadAll();
self.querySearch   = querySearch;
self.selectedItemChange = selectedItemChange;
self.searchTextChange   = searchTextChange;

self.newState = newState;

function newState(state) {
 alert("Sorry! You'll need to create a Constitution for " + state + " first!");
}

// ******************************
// Internal methods
// ******************************

/**
* Search for states... use $timeout to simulate
* remote dataservice call.
*/
function querySearch (query) {
  //$log.info('Query is ' + query);
 var results = query ? self.repos.filter( createFilterFor(query) ) : self.repos,
     deferred;
 if (self.simulateQuery) {
   deferred = $q.defer();
   $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
   return deferred.promise;
 } else {
   return results;
 }
}

function searchTextChange(text) {
 //$log.info('Text changed to ' + text);
 }

function selectedItemChange(item) {
$log.info('Item changed to ' + JSON.stringify(item));
$location.path('/application/' + item.name);
}

/**
* Build `states` list of key/value pairs
*/
function loadAll() {
  var repos = [
       {
         'name'        : 'PWL_XXXXXXXXXXX',
         'applicaiton' : 'WSS',
         'type'        : 'Autosys Job'
       },
       {
         'name'        : 'LXXXXXXXXXXXXXXX',
         'applicaiton' : 'WSS',
         'type'        : 'Server'
       },
       {
         'name'        : 'Wallstreet Systems',
         'applicaiton' : 'WSS',
         'type'        : 'vendor'
       }
     ];

     return repos.map( function (repo) {
           repo.value = repo.name.toLowerCase();
           return repo;
         });
}

/**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
        return function filterFn(item) {
         return (item.value.indexOf(lowercaseQuery) === 0);
      };

    }
};
