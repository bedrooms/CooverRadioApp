var app = angular.module('cooverRadioApp', '');

app.factory("playerSvc", function ($http, $q, $rootScope) {
$rootScope.audioType = "audio/aac";

  function getTrackToPlay() {
    return $rootScope.trackToPlay;
  }

  function setPlayerTrack(stationData) {
    $rootScope.trackToPlay = stationData.uriTrack;
    $rootScope.stationName = stationData.name;
    $rootScope.audioType = stationData.typeAudio;

    if($rootScope.audioType == undefined){
      $rootScope.audioType = "audio/aac"
    }
  }

  return {
    setPlayerTrack: setPlayerTrack,
    getTrackToPlay: getTrackToPlay
  };
});