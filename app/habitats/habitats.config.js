angular.module('Zoolandia')
  .config(($routeProvider) => {
    $routeProvider
      .when('/habitats', {
        controller: 'HabitatsCtrl',
        templateUrl: '/app/habitats/habitats.html'
      })
  })
