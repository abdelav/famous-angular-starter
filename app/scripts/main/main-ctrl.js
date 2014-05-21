'use strict';

angular.module('famousAngularStarter')
  .controller('MainCtrl', function ($scope, $famous) {
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Easing = $famous['famous/transitions/Easing'];

    $scope.greeting = "Hello, Famo.us";

    $scope.BG_SIZE = [20, 10];

    $scope.widthTransitionable = new Transitionable(1);
    $scope.heightTransitionable = new Transitionable(1);

    //let's define our animation's transition
    var transition = {
      duration: 1000, //ms
      curve: Easing.outBounce
    }

    $scope.clickCenterBox = function(){
      //let's make that background box grow
      var xScale = window.innerWidth / $scope.BG_SIZE[0];
      var yScale = window.innerHeight / $scope.BG_SIZE[1];
      $scope.widthTransitionable.set(xScale, transition);
      $scope.heightTransitionable.set(yScale, transition);
    }


  });
