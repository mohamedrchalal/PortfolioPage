"use strict";

(function (){
  angular
  .module("Portfolio",[
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    "$sceProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider, $locationProvider, $sceProvider){
    $sceProvider.enabled(false);
    $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "ng/views/welcome.html",
      controller: "mainCtrl",
      controllerAs: "vm"
    })
    .state("aboutMe", {
      url: "/aboutMe",
      templateUrl: "ng/views/aboutMe.html",
      controller: "mainCtrl",
      controllerAs: "vm"
    })
    .state("projects", {
      url: "/projects",
      templateUrl: "ng/views/projects.html",
      controller: "mainCtrl",
      controllerAs: "vm"
    })
    .state("resume", {
      url: "/resume",
      templateUrl: "ng/views/resume.html",
      controller: "mainCtrl",
      controllerAs: "vm"
    })

  };
})();
