'use strict';

angular.module('common', [])
  // $http → service
  // Custom service
  .service("people", function People($http){
    var people = this;

    people.all = function all() {
      return $http.get("/people")
        .then(function (result) {
          return result.data;
        });
    }

  })

angular.module('workshop', ['common'])
  .controller('WorkshopCtrl', function WorkshopCtrl(people){
    var workshop = this;

    people.all().then(function success(result){
      console.log(result);
      workshop.people = result;
    });

  })

  .controller('LunchCtrl', function LunchCtrl(people){
    var lunch = this;

  });
