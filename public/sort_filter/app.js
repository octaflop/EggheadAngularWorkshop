'use strict';

angular.module('workshop', [])
  .controller('WorkshopCtrl', function WorkshopCtrl(){  // Anonymous function allowed. but stops debugging
    var workshop = this;

    workshop.sortClicked = function sortClicked(whichSort) {
      if (workshop.sortOrder == whichSort) {
        workshop.sortOrder = "-" + workshop.sortOrder;
      } else {
        workshop.sortOrder = whichSort;
      }
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
