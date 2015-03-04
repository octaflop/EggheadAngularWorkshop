'use strict';

angular.module('workshop', [])
  // $http → service
  .controller('WorkshopCtrl', function WorkshopCtrl($http){
    var workshop = this;

    workshop.games = [];

    // $http.get("$%)(*") // returns an error
    $http.get("/games")
      .then(function success(result) {
        workshop.games = result.data;
      }, function error(error) {
        console.log(error);
      });  // .then promises to get games
  });
