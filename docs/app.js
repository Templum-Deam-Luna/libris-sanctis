"use strict";(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="";return __webpack_require__(0)})([function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)},function(module,exports,__webpack_require__){var modules=["ngRoute","pageCreation"];__webpack_require__(2);__webpack_require__(3);angular.module("Libris Sanctis",modules).config(["$locationProvider","$routeProvider",function($locationProvider,$routeProvider){$routeProvider.when("/",{templateUrl:"pages/home.html",controller:function controller(){angular.element("[ng-view]").attr("ng-view","pageHome")}}).otherwise({redirectTo:"/"})}])},function(module,exports){angular.module("pageCreation",["ngRoute"])},function(module,exports){angular.module("pageCreation").config(["$locationProvider","$routeProvider",function($locationProvider,$routeProvider){$routeProvider.when("/creation/",{templateUrl:"pages/creation/creation.html",controllerAs:"$ctrl",controller:function controller(){angular.element("[ng-view]").attr("ng-view","pageCreation")}})}])}]);