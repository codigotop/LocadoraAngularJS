(function(){

	angular
		.module('Locadora')	
		.controller('ListaFilmeController', ListaFilmeController)


	ListaFilmeController.$inject = ['$rootScope','BuscarFilmeAPI'];

	function ListaFilmeController($rootScope,BuscarFilmeAPI) {
		var ctrl = this;
		ctrl.titulo = 'Encontre seu filme';	
		ctrl.textoBusca = null;

		ctrl.Buscar = function() {
			BuscarFilmeAPI.Buscar(ctrl.textoBusca).then(function(lista) {
				ctrl.lista = lista;
				console.log(lista);
			})
		}

		ctrl.AbrirDetalheFilme = function(filme) {
			$rootScope.$broadcast('AbrirFilme', filme);
		}
	}
})();