(function () {
'use strict';

angular.module('audit')
.component('p2', {
  templateUrl: "app/audit/p2/p2.html",
  controller: p2Controller,
  bindings: {
    siguiente: '&',
    sleccion: '&'
  }
})

// p2Controller.$inject = [];
function p2Controller() {
var $ctrl = this;

  $ctrl.botonActivo = false;

  $ctrl.activarBoton = function () {
    $ctrl.botonActivo = true;
  }

}

})();
