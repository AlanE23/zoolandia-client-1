angular.module('Zoolandia')
  .controller('LandingCtrl',[
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    function ($scope, $http, RootFactory, $timeout) {
      $scope.title = 'Hello, My name is Landing Page';
      RootFactory.getApiRoot()
        .then(
          res => {
            console.log("data", res );
            $scope.apiRoot = res;
            // $scope.$apply();
            $timeout(); // a safe $scope.$apply()
          },
          err => console.log("error", err)
        )

    }

  ]);
