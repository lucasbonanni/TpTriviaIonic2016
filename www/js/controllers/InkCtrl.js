app.controller('InkCtrl', function ($scope, $stateParams, ionicMaterialInk,$cordovaFile) {
    //ionic.material.ink.displayEffect();
    //ionicMaterialInk.displayEffect();

    $scope.fileContent = {};

    

    document.addEventListener('deviceready', function () {

          // READ
    $cordovaFile.readAsText(cordova.file.dataDirectory, "some_file.json")
      .then(function (success) {
        // success
        $scope.fileContent = JSON.parse(success);

      }, function (error) {
        // error
        $scope.fileContent = error;
        alert(error);
      });


    });


});