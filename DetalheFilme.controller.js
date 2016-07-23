(function(){

	angular
		.module('Locadora')	
		.controller('DetalheFilmeController', DetalheFilmeController)


	DetalheFilmeController.$inject = ['$rootScope', 'CarrinhoCompraService'];

	function DetalheFilmeController($rootScope, CarrinhoCompraService) {
		var ctrl = this;

		$rootScope.$on('AbrirFilme', function(evt, filme) {
			ctrl.exibeDetalheFilme(filme);
		})

		ctrl.exibeDetalheFilme = function(filme){
			$rootScope.layout = {
				exibeListaFilme: false,
				exibeDetalheFilme: true
			}

			ctrl.filmeSelecionado = filme;
		}

		ctrl.voltarParaLista = function(){
			$rootScope.layout = {
				exibeListaFilme: true,
				exibeDetalheFilme: false
			}
		}

		ctrl.adicionarFilmeNoCarrinho = function() {
			CarrinhoCompraService.adicionarFilme(ctrl.filmeSelecionado);
		}
	}
})();