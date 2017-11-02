(function() {
'use strict';

angular.module('audit')
.service('puntajeTotalService', puntajeTotalService)

puntajeTotalService.$inject = [];
function puntajeTotalService() {
  var service = this;
  service.puntajeTotal = false

 service.guardaPuntaje = function (puntaje) {
   service.puntajeTotal = (puntaje.p1 + puntaje.p2 + puntaje.p3);
 };

 service.consultaRiesgo = function () {
   if(service.puntajeTotal < 5)
      {return "bajo"}
   else
      {return "alto"};
 }

 service.consultaPuntaje = function () {
   return service.puntajeTotal
 }
 
};


})();
