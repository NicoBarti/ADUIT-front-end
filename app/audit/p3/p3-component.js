(function () {
'use strict';

angular.module('audit')
.component('p3', {
  templateUrl: "app/audit/p3/p3.html",
  controller: p3Controller,
  bindings: {
    siguiente: '&',
    sleccion: '&'

  }
})

function p3Controller() {
var $ctrl = this;

  $ctrl.botonActivo = false;

  $ctrl.activarBoton = function () {
    $ctrl.botonActivo = true;
  }

}

})();
