app.controller('ExtensionsCtrl', function ($scope, $stateParams, $ionicActionSheet, $timeout, $ionicLoading, $ionicModal, $ionicPopup, ionicMaterialInk, $cordovaVibration, $cordovaNativeAudio,
     $cordovaFile) {

    var ctrl = $scope.ctrl = {};
      ctrl.preguntaActual = 0;
    ctrl.respuestasCorrectas = 0;
    ctrl.respuestaSeleccionada = null;

    var datosPartida = $scope.datosPartida = {};
    datosPartida.numeroPregunta = 0;
    datosPartida.respuestasCorrectas= 0;
    datosPartida.respuestasIncorrectas = 0;
    console.info("inicio - DatosPartida", datosPartida);


    $scope.preguntas = {};

    $scope.preguntas = [
        {
            "question": {
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
            }},{
            "question": {
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
            }
        }
    ];

    console.info("inicio - preguntas", $scope.preguntas);

    $scope.verificaRespuesta = function($respuesta){
        console.info("verificaRespuesta - DatosPartida", datosPartida);
        var resp = $scope.preguntas[datosPartida.numeroPregunta].question
                    .answers.indexOf($respuesta);
        console.info("verificaRespuesta - resp", resp);
        if($scope.preguntas[datosPartida.numeroPregunta].question.correct_answer === resp){
            console.info("inicio - DatosPartida", datosPartida);
                datosPartida.numeroPregunta++;
        }
    }

    /*$scope.preguntas = [{
        pregunta: 1,
        img: 'img/atom.jpg',
        descripcionPregunta: "Cual es el numero at\u00f3mico del hidr\u00f3geno?",
        respuestas: [{
          id: 1,
          name: '1',
          active: true
        }, {
            id: 2,
            name: '24',
            active: false
          }, {
            id: 3,
            name: '12',
            active: false
          }]
      }, {
          pregunta: 2,
          img: 'img/programming.jpg',
          descripcionPregunta: "Cual de estos lenguajes fue inventado en los laboratorios Bell?",
          respuestas: [{
            id: 1,
            name: 'C',
            active: true
          }, {
              id: 2,
              name: 'Basic',
              active: false
            }, {
              id: 3,
              name: 'Cobol',
              active: false
            }]
        }, {
          pregunta: 3,
          img: 'img/sun.jpg',
          descripcionPregunta: "Que tipo de rayos broncean la piel?",
          respuestas: [{
            id: 1,
            name: 'Infrarrojo',
            active: false
          }, {
              id: 2,
              name: 'Gamma',
              active: false
            }, {
              id: 3,
              name: 'Ultravioleta',
              active: true
            }]
        }, {
          pregunta: 4,
          img: 'img/stars.jpg',
          descripcionPregunta: "Cual es la escala que mide el brillo de las estrellas?",
          respuestas: [{
            id: 1,
            name: 'Magnitud',
            active: true
          }, {
              id: 2,
              name: 'Alboreda',
              active: false
            }, {
              id: 3,
              name: 'Densidad',
              active: false
            }]
        },
        {
          pregunta: 5,
          img: 'img/electronic.jpg',
          descripcionPregunta: "En electronica, cual es el nombre del componente que consiste de dos platos separados por un dialectrico y puede almacenar una carga?",
          respuestas: [{
            id: 1,
            name: 'Transformador',
            active: false
          }, {
              id: 2,
              name: 'Inductor',
              active: false
            }, {
              id: 3,
              name: 'Capacitor',
              active: true            
            }]
        },
        {
          pregunta: 6,
          img: 'img/higrometro.jpg',
          descripcionPregunta: "Que mide un higrometro?",
          respuestas: [{
            id: 1,
            name: 'Terremotos',
            active: false
          }, {
              id: 2,
              name: 'Humedad',
              active: true
            }, {
              id: 3,
              name: 'Presion',
              active: false
            }]
        },
        {
          pregunta: 7,
          img: 'img/flower.jpg',
          descripcionPregunta: "La parte masculina de una flor es...",
          respuestas: [{
            id: 1,
            name: 'Estigma',
            active: false
          }, {
              id: 2,
              name: 'Pistillo',
              active: false
            }, {
              id: 3,
              name: 'Estambre',
              active: true
            }]
        }
      ];*/
});