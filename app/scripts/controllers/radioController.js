
var app = angular.module('cooverRadioApp', '');

app.controller('radioCtrl',['$rootScope','playerSvc','$location', function ($rootScope, playerSvc, $location)
{   
  var vm = this;

  vm.setTrack = function(track){
    playerSvc.setPlayerTrack("i60.letio.com/9108.aac")
  }

}]);