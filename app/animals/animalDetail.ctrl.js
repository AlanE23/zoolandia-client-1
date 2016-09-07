angular.module('Zoolandia')
  .controller('AnimalDetailCtrl',[
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    '$routeParams',
    function ($scope, $http, RootFactory, $timeout, $routeParams) {
      $scope.title = 'Hello, My name is AnimalDetail Page';
      $scope.apiRoot = null;
      $scope.animal = null;
      $scope.habitat = null;


      RootFactory.getApiRoot()
        .then(
          root => {
            $http.get(`${root.animals}${$routeParams.animalId}`)
              .then(res => {
                $scope.animal = res.data
              })
              .then(res => {
                $http.get(`${$scope.animal.habitat}`)
                  .then(res => {
                    $scope.habitat = res.data;
                  })
              })
            $timeout();
          },
          err => console.log("error", err)
        );
    }

  ]);