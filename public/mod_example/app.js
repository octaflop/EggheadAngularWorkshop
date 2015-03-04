angular.module('workshop', [])
  .controller('WorkshopCtrl', function WorkshopCtrl($scope){  // Anonymous function allowed. but stops debugging
    var workshop = this;
    workshop.message = "ng-workshop";
  })
  .controller('LunchCtrl', function LunchCtrl($scope){  // Anonymous function allowed. but stops debugging
    var lunch = this;
    lunch.message = "Lunch starts at noon";
  });
  