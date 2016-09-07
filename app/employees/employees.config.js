angular.module('Zoolandia')
  .config(($routeProvider) => {
    $routeProvider
      .when('/employees', {
        controller: 'EmployeesCtrl',
        templateUrl: '/app/employees/employees.html'
      })
  })