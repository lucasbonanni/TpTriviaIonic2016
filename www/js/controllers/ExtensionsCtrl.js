app.controller('ExtensionsCtrl', function ($scope,  $cordovaNativeAudio, $ionicPlatform, $stateParams, $ionicActionSheet, $timeout, $ionicLoading, $ionicModal, $ionicPopup, $firebaseObject,$cordovaFile,$firebaseArray) { 

  /* ionicMaterialInk, $cordovaVibration,
     $cordovaFile */

     /*  
        Sonidos funcionando - Deshabilitados para poder hacer debug los otros cordova plugins
        Falta cambiar los sonidos
     */

    //var database = new Firebase("");
    // Get a reference to the storage service, which is used to create references in your storage bucket
    var storage = firebase.storage();

    // Create a storage reference from our storage service
    var storageRef = storage.ref();


    // Root allows us to move all the way back to the top of our bucket
    //var rootRef = spaceRef.root;
    console.info("root ref",storageRef);

    var rutaPrincipal = storageRef.child('posts').bucket;
    var rutapreguntas = "https://loginfirebase-b01c4.firebaseio.com/posts";

    var username = {};
    
    var ref = firebase.database().ref('posts').once('value').then(function(snapshot) {
      username = snapshot.val();
    console.info("username",username);
    });
    var list = $firebaseArray(username);
    console.info("ref preguntas",ref);
    var element = username[0];
    console.info("element",element);

    /*
    var traerPreguntas = firebase.database().ref('posts').limitToLast(100);
    console.info("traer preguntas",traerPreguntas );*/


    //var list = $firebaseArray(ref);
    //console.info("lista",list);

    var datosPartida = $scope.datosPartida = {};
    datosPartida.numeroPregunta = 0;
    datosPartida.respuestasCorrectas= 0;
    datosPartida.respuestasIncorrectas = 0;
    console.info("inicio - DatosPartida", datosPartida);

    var gameActivity = new Array();
//      var ref = firebase.database();
  //    console.info("referencia",$firebaseObject);


/*    $scope.preguntas = {};
    $ionicPlatform.ready(function() {
      $cordovaNativeAudio.preloadSimple('wrong', 'sounds/wrong.mp3');
      $cordovaNativeAudio.preloadSimple('correct', 'sounds/correct.mp3');
    });*/

    //$scope.preguntas = ;

/*
    for (var i = $scope.preguntas.length - 1; i >= 0; i--) {
      //firebase.push($scope.preguntas[i]);
      firebase.database().ref().child('posts').push($scope.preguntas[i]).then(function(success){
        console.log("push con exito");
      },function(error){
        console.info("error push",error);
      });
    }
*/

    console.info("inicio - preguntas", $scope.preguntas);

    $scope.verificaRespuesta = function($respuesta){
        console.info("verificaRespuesta - DatosPartida", datosPartida);
        var resp = $scope.preguntas[datosPartida.numeroPregunta]                    
        .answers.indexOf($respuesta);
        console.info("verificaRespuesta - resp", resp);
        if($scope.preguntas[datosPartida.numeroPregunta].correct_answer === resp){
            console.info("inicio - DatosPartida", datosPartida);
            /*$cordovaNativeAudio.play('correct');*/
                datosPartida.numeroPregunta++;
            var result = {};
           result.pregunta = $scope.preguntas[datosPartida.numeroPregunta].text;
           result.respuesta = $respuesta;
           result.incorrecta = $scope.preguntas[datosPartida.numeroPregunta].correct_answer === resp;
           gameActivity.push(result);
           $cordovaFile.writeFile(cordova.file.dataDirectory, "some_file.json", gameActivity, true)
            .then(function (success) {
              // success
            }, function (error) {
              // error
              alert(error);
            });
        }
        else
        {
           /*$cordovaNativeAudio.play('wrong');*/
           var result = {};
           result.pregunta = $scope.preguntas[datosPartida.numeroPregunta].text;
           result.respuesta = $respuesta;
           result.incorrecta = $scope.preguntas[datosPartida.numeroPregunta].correct_answer === resp;
           gameActivity.push(result);

           $cordovaFile.writeFile(cordova.file.dataDirectory, "some_file.json", gameActivity, true)
            .then(function (success) {
              // success
            }, function (error) {
              // error
              alert(error);
            });
        }
    }

});