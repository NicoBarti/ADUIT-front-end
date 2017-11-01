(function() {
'use strict';

angular.module('audit')
.controller('AuditController', AuditController);

AuditController.$inject = [];
function AuditController() {
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
  }

// Función de respuestas
  audit.responder = function () {
console.log("hola");
  }

}

})();
