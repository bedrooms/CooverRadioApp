'use strict';

var app = angular.module('cooverRadioApp', '');

app.controller('MainCtrl',['$rootScope','playerSvc','$location', function ($rootScope, playerSvc, $location)
{   
  var vm = this;
  vm.trackToPlay = 'http://i60.letio.com/9108.aac';

  function getTrack(){
    vm.trackToPlay = playerSvc.getPlayerTrack()
  }

}]);