var app = angular.module('cooverRadioApp', '');

app.factory("stationSvc", function ($http, $q, $window) {

    var vm = this;

    function getStationsData() {
        return $http.get('jsonData/stationsData.json').then(function (data) {
            vm.stationsData = data.data;
        });
    }

    return {
        getStationsData: getStationsData
    };
});