(function(){
'use strict';

angular.module('audit')
.controller('IbController', IbController);

IbController.$inject = ['puntajeTotalService'];
function IbController(puntajeTotalService) {
  var ib = this;

  ib.riesgo = puntajeTotalService.consultaRiesgo()
  ib.puntaje = puntajeTotalService.consultaPuntaje()
};

})();
