app.controller('AppCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout,$ionicLoading,$firebaseAuth) {
    
    // Form data for the login modal
    $scope.loginData = {};
    $scope.usuario ={};

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    };

    $scope.$on('$ionicView.beforeEnter', function(event,data){
        $ionicLoading.show({
          template: '<ion-spinner icon="ripple" class="spinner-energized"></ion-spinner>',
          hideOnStageChange: true,
          duration: 1000
        });
    
    });

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
        }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };


    $scope.$on('$ionicView.enter', function(event,data) {
        //console.log("ionic enter event");
        firebase.auth().onAuthStateChanged(function(user) {
        //console.info("user",user);
        if (user) {
            // User is signed in.
            $scope.loginData.isActive= true;
        } else {
            // No user is signed in.
            $scope.loginData.isActive= false;
            $scope.login();
        }
        });
        /*
        console.info("event",event);
        console.info("data",data);
        console.log('enter state');*/
    });

    $scope.doLogout = function(){
        firebase.auth().signOut();
    }


    

 // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    //console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    //Test  variables Set up
    /*$scope.loginData.username = "user";
    $scope.loginData.password = "password"; */

    firebase.auth()
    .signInWithEmailAndPassword($scope.loginData.username, $scope.loginData.password)
    .then( function(success){

       $scope.usuario = firebase.auth().currentUser;

        //console.info("success",success);
        $scope.loginData.isActive= true;

        /*http://lorempixel.com/90/90/people/*/
        /*$scope.usuario.updateProfile({
          displayName: "displayName",
          photoURL: "http://lorempixel.com/90/90/people"
        });*/
        $scope.closeLogin();
        console.info("usuario",$scope.usuario);
    }, function(error){
      $scope.loginData.isActive= false;
      console.info("error",error);

    });

    /*$timeout(function() {
      $scope.closeLogin();
    }, 1000);*/
};




    /*var fab = document.getElementById('fab');
    fab.addEventListener('click', function () {
        //location.href = 'https://twitter.com/satish_vr2011';
        window.open('https://twitter.com/satish_vr2011', '_blank');
    });*/

    // .fromTemplate() method
    var template = '<ion-popover-view>' +
                    '   <ion-header-bar>' +
                    '       <h1 class="title">My Popover Title</h1>' +
                    '   </ion-header-bar>' +
                    '   <ion-content class="padding">' +
                    '       My Popover Contents' +
                    '   </ion-content>' +
                    '</ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
    });
    $scope.closePopover = function () {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
    });
});