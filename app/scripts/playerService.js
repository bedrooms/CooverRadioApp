var app = angular.module('cooverRadioApp', '');

app.factory("playerSvc", function($http, $q, $window) {
  var trackToPlay;

  function getTrackToPlay() {
    return trackToPlay;
  }

  function setPlayerTrack(track)
  {
      trackToPlay = track;
  }

  return {
    setPlayerTrack: setPlayerTrack,
    getTrackToPlay: getTrackToPlay
  };
});