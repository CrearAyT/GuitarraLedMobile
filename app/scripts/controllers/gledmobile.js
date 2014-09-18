'use strict';

/**
* @ngdoc function
* @name gledmobile.controller:GLedCtrl
* @description
* # GLedCtrl
* Controller of gledmobile
*/

angular.module('<%= appName %>.controllers',[]);

angular.module('<%= appName %>.controllers')
  .controller('GLedCtrl',function($scope,$location, $ionicModal, $translate) {
    $scope.guitars = [];
    $scope.guitar = { item: '' };

    $ionicModal.fromTemplateUrl('views/add-guitar.html', function(modal) {
      $scope.guitarModal = modal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });

    $scope.createGuitar = function() {
      var item = this.guitar.alias;
      if(!item) { return; }

      $scope.guitars.push({
        title: item
      });
      $scope.guitarModal.hide();
      this.guitar.title = '';
    };

    $scope.addGuitar = function() {
      $scope.guitarModal.show();
    };

    $scope.closeAddGuitar = function() {
      $scope.guitarModal.hide();
    };

    $scope.removeGuitar = function (index) {
      $scope.guitars.splice(index, 1);
    };
    $scope.go = function ( path ) {
      $location.path( path );
    };
  });