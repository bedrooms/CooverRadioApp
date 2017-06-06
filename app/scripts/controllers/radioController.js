
var app = angular.module('cooverRadioApp', '');

app.controller('radioCtrl', ['$http','$rootScope', 'playerSvc', 'stationSvc', function ($http, $rootScope, playerSvc, stationSvc) {

  var vm = this;

    $http.get('jsonData/stationsData.json').then(function(data) {
        vm.stationData = data.data.stationsData;
    });

  vm.setTrack = function (track) {
    playerSvc.setPlayerTrack("i60.letio.com/9108.aac2")
  }

}]);