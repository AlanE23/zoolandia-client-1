angular.module('Zoolandia')
  .controller('EmployeesCtrl',[
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    function ($scope, $http, RootFactory, $timeout) {
      $scope.title = 'Hello, My name is Animals Page';
      $scope.apiRoot = null;

      RootFactory.getApiRoot()
        .then(
          root => {
            $http.get(`${root.employees}`)
              .then(res => {
                $scope.employees = res.data
              });
            $timeout();
          },
          err => console.log("error", err)
        );
    }
  ])
