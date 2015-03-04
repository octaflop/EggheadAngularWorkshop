angular.module('workshop', [])
  .controller('WorkshopCtrl', function WorkshopCtrl(){  // Anonymous function allowed. but stops debugging
    var workshop = this;

    workshop.topics = [
      "Basket Weaving",
      "Shoe tying",
      "Skiing",
      "Ice Sculpting",
      "Complaining about the weather"
    ]

  });
