angular.module('workshop', [])
  .controller('WorkshopCtrl', function WorkshopCtrl(){  // Anonymous function allowed. but stops debugging
    var workshop = this;

    workshop.message = "Some kinda robot";

    workshop.click = function click(msg) {
      workshop.message = "I was clicked";
    };

    workshop.topics = [
      {
        name: "Basket Weaving",
        duration: "2hrs"
      },
      {
        name:"Shoe tying",
        duration: "2hrs"
      },
      {
        name:"Skiing",
        duration: "0.5hrs"
      },
      {
        name:"Ice Sculpting",
        duration:"1.3hrs"
      }
    ]

  });
