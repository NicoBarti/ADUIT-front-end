(function() {
'use strict';

angular.module('audit')
.controller('AuditController', AuditController);

AuditController.$inject = ['puntajeTotalService'];
function AuditController(puntajeTotalService) {
  var audit = this;

  // AUDIT puntaje
    audit.puntaje = {
      p1: 0,
      p2: 0,
      p3: 0
    }

// Secuenciador de preguntas
  audit.secuencia = 1
  audit.siguiente = function () {
    audit.secuencia++
    if(audit.secuencia == 4) {
      puntajeTotalService.guardaPuntaje(audit.puntaje)
    };
    // console.log(audit.secuencia);
  }

// // Función de respuestas
//   audit.responder = function () {
//     console.log("hola");
//   }

// Contador de puntajes
  audit.sleccion = function (pregunta, puntaje) {
  audit.puntaje[pregunta] = puntaje
// console.log(audit.puntaje);
    // activa boton siguiente pregunta
    audit.botonActivo = true;

  }
}

})();
