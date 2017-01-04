angular.module('app', ['ngRoute', "ds.clock",'ui.bootstrap.datetimepicker', 'ngStorage']);

angular.module('app').config(function($routeProvider) {
      $routeProvider.when('/', {
         template: '<home></home>'
      });
    $routeProvider.when('/monthlyReport', {
        template: '<monthly-report></monthly-report>'

    });
    $routeProvider.when('/clickthetime', {
        template: '<clickthetime></clickthetime>'

    });

});
