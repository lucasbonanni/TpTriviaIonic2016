app.controller('ExtensionsCtrl', function ($scope,  $cordovaNativeAudio, $ionicPlatform, $stateParams, $ionicActionSheet, $timeout, $ionicLoading, $ionicModal, $ionicPopup, $firebaseObject,$cordovaFile) { 

  /* ionicMaterialInk, $cordovaVibration,
     $cordovaFile */

     /*  
        Sonidos funcionando - Deshabilitados para poder hacer debug los otros cordova plugins
        Falta cambiar los sonidos
     */

    //var database = new Firebase("");

    var datosPartida = $scope.datosPartida = {};
    datosPartida.numeroPregunta = 0;
    datosPartida.respuestasCorrectas= 0;
    datosPartida.respuestasIncorrectas = 0;
    console.info("inicio - DatosPartida", datosPartida);

    var gameActivity = new Array();
      var ref = firebase.database();
      console.info("referencia",$firebaseObject);


/*    $scope.preguntas = {};
    $ionicPlatform.ready(function() {
      $cordovaNativeAudio.preloadSimple('wrong', 'sounds/wrong.mp3');
      $cordovaNativeAudio.preloadSimple('correct', 'sounds/correct.mp3');
    });*/

    $scope.preguntas = [ {
              "text": "¿Cuál de estos perros es el más grande?",
              "answers": [
                  "San Bernardo",
                  "German Shepard",
                  "Labrador",
                  "Border Collie"
              ],
              "correct_answer": 0,
              "media_type": "NORMAL",
              "author": {
                  "name": "madejmax",
                  "username": "madejmax",
                  "fb_show_picture": false,
                  "fb_show_name": false
              }
            }, 
            {
              "text": "¿Cuál es el término correcto para la toxina que algunas serpientes inyectan cuándo muerden ?",
              "answers": [
                  "Posion ",
                  "Veneno ",
                  "Tinta ",
                  "Toxina "
              ],
              "correct_answer": 1,
              "media_type": "NORMAL",
              "author": {
                  "facebook_id": "",
                  "name": "Kate Blandin",
                  "username": "blandin.kate",
                  "facebook_name": "Kate Blandin",
                  "fb_show_picture": true,
                  "fb_show_name": true
              }
            
        },
        {
              "text": "¿Qué enfermedad trajeron los españoles a Nueva España?",
              "answers": [
                "Epidemia de viruela",
                "Cáncer",
                "Diarrea",
                "Tos"
            ],
              "correct_answer": 0,
              "media_type": "NORMAL",
              "author": {
                  "facebook_id": "",
                  "name": "Kate Blandin",
                  "username": "blandin.kate",
                  "facebook_name": "Kate Blandin",
                  "fb_show_picture": true,
                  "fb_show_name": true
              }
            
        },
        {
              "text": "¿Quién dijo: \"I have a dream\" (\"Yo tengo un sueño\")?",
              "answers": [
                  "Rosa Parks",
                  "Malcolm X",
                  "Martin Luther King Jr.",
                  "Thurgood Marshall"
              ],
              "correct_answer": 2,
              "media_type": "NORMAL",
              "author": {
                  "facebook_id": "",
                  "name": "Kate Blandin",
                  "username": "blandin.kate",
                  "facebook_name": "Kate Blandin",
                  "fb_show_picture": true,
                  "fb_show_name": true
              }
            
        },
        {
              "text": "¿Qué es el \"Sahara\" ubicado en el continente Africano?",
              "answers": [
                "Un desierto",
                "Un monumento",
                "Una localidad",
                "Un río"
             ],
              "correct_answer": 0,
              "media_type": "NORMAL",
              "author": {
                  "facebook_id": "",
                  "name": "Kate Blandin",
                  "username": "blandin.kate",
                  "facebook_name": "Kate Blandin",
                  "fb_show_picture": true,
                  "fb_show_name": true
              }
            
        },
        {
              "text": "¿En dónde se encuentra la ciudad de Las Flores?",
              "answers": [
                "Provincia de Buenos Aires",
                "Provincia de Córdoba",
                "Provincia de Salta",
                "Ninguna de las anteriores"
            ],
              "correct_answer": 0,
              "media_type": "NORMAL",
              "author": {
                  "facebook_id": "",
                  "name": "Kate Blandin",
                  "username": "blandin.kate",
                  "facebook_name": "Kate Blandin",
                  "fb_show_picture": true,
                  "fb_show_name": true
              }
            
        }
    ];

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