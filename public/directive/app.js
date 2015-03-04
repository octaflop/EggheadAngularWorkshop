'use strict';

angular.module('workshop', [])
  .controller("CardCtrl", function CardCtrl(){
    var card = this;

    card.greeting = "¡Hola";

  })

  .directive("card", function card() {

    return {
      scope: {
        to: "@",
      },
      bindToController: true,
      restrict: "E",  // restrict to element (vs A = attribute)
      template: "<div>{{ card.greeting }} {{ card.to }}!</div>",
      controller:  "CardCtrl as card"
    }

  });