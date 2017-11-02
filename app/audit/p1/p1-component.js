(function () {
'use strict';

angular.module('audit')
.component('p1', {
  templateUrl: "app/audit/p1/p1.html",
  controller: p1Controller,
  bindings: {
    siguiente: '&',
    sleccion: '&'
  }
})

// p1Controller.$inject = [];
function p1Controller() {
var $ctrl = this;

  $ctrl.botonActivo = false;

  $ctrl.activarBoton = function () {
    $ctrl.botonActivo = true;
  }

}

})();
