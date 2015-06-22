/**
 * Controladores de la aplicación.
 */

(function (){

    'use strict';
    angular
        .module('ng.venezuela')
        .controller('HomeController', Organizacion)
    Organizacion.$inject = ['GitHub'];
    function Organizacion(GitHub) {
        var vm = this;
        vm.organizacion = {};
        execute();
        function execute(){
          return ObtenerInformacion ();
        }
        function ObtenerInformacion (){
            return GitHub.organizacion()
                .then(function(data){
                vm.organizacion = data;
                return vm.organizacion;
                console.log(data);
            });
        }
    };
})(); // fin main function
