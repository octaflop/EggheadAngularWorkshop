angular.module('workshop', [])
  .controller('WorkshopCtrl', function WorkshopCtrl(){  // Anonymous function allowed. but stops debugging
    var workshop = this;

    workshop.sortOrder = "";
    workshop.onNameClicked = function onNameClicked() {
      workshop.sortOrder = "name";
    };
    workshop.onDurationClicked = function onDurationClicked() {
      workshop.sortOrder = "duration";
    };

    workshop.topics = [
      {
        name: "Basket Weaving",
        duration: "2"
      },
      {
        name:"Shoe tying",
        duration: "2.1"
      },
      {
        name:"Skiing",
        duration: "0.5"
      },
      {
        name:"Ice Sculpting",
        duration:"1.3"
      }
    ]

  });
