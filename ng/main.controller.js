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

    vm.pictures = ["img/handoff.png", "img/Scribble.png", "img/Gamr.png", "img/Deadpool.png", "img/Loading.gif"]
  });
})();
