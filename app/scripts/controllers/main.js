'use strict';

var app = angular.module('cooverRadioApp', '');

app.controller('MainCtrl',['$rootScope','playerSvc','$location', function ($rootScope, playerSvc, $location)
{   
  var vm = this;
  vm.trackToPlay = playerSvc.getTrackToPlay();

  function getTrack(){
    vm.trackToPlay = playerSvc.getPlayerTrack()
  }

}]);