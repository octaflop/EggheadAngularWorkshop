'use strict';

angular.module('workshop', [])
  // $http → service
  .controller('WorkshopCtrl', function WorkshopCtrl($http){
    var workshop = this;

    workshop.people = [];

    // $http.get("$%)(*") // returns an error
    workshop.loadGames = function loadGames () {
      $http.get("/people")
        .then(function success(result) {
          workshop.people = result.data;
        }, function error(error) {
          console.log(error);
        });  // .then promises to get games
    };

    // CRUD stuff
    workshop.loadGames();

    workshop.removeGame = function removeGame(personID) {
      var deletion_url = "/people/" + personID;
      console.log("DELETION" + deletion_url);
      $http.delete(deletion_url)
        .then(function success(result){
          console.log(result);
          workshop.loadGames();
        }, function error(error){
          console.log(error);
        });
    };

  });
