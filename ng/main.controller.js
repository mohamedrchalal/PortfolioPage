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

    vm.pictures = ["handoff.png", "Scribble.png", "Gamr.png", "Deadpool.png", "Loading.gif"]
  });
})();
