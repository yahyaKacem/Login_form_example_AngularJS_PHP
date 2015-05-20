(function (ng) {
  "use strict";
  var MainController = function MainControllerF($http) {
    var app;
    app = this;
    app.user = {};
    app.login = function loginF() {
      var login, requestDefinitionObject;
      login = function loginF(response) {
        console.log(response);
        if (response.data === 'loggedin') {
          console.log("logged in");
        } else {
          console.log("forbidden");
        }
      };
      requestDefinitionObject = {
        method: "POST",
        data:   app.user,
        url:    "login.php"
      };
      $http(requestDefinitionObject).then(login);
    };
  };
  ng.module('app', [])
    .controller('MainController', ['$http', MainController]);
}(angular));
