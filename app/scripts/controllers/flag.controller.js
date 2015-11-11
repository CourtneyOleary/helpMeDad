angular.module('helpmedadApp')
  .controller('FlagCtrl', function($scope, Users, Flags){
    var flagCtrl = this;
    $scope.flags = Flags;
    $scope.flag = '';

  $scope.sendFlag = function (){
    console.log($scope.flag);
    // if(flagCtrl.flag.length > 0){
    //   flagCtrl.flags.$add({
    //     uid: profile.$id,
    //     body: flagCtrl.flag,
    //     timestamp: Firebase.ServerValue.TIMESTAMP
    //   }).then(function (){
    //     flagCtrl.flag = '';
    //   });
    // };
  };
});
