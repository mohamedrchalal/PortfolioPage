"use strict";

(function(){
  angular
  .module("Portfolio")
  .controller("mainCtrl", function(){
    var vm = this;
    vm.active = 0;
    vm.switch = function(i){
      vm.active = i;
    };

    vm.mailLink = "mailto:mohamedrchalal@gmail.com" + "?subject=Your Portfolio is Amazing!!!" + "&body=";

    vm.pictures = ["Images/handoff.png", "Images/Scribble.png", "Images/Gamr.png", "Images/Deadpool.png", "Images/Loading.gif"]
  });
})();
