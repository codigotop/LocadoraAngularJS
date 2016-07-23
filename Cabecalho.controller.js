(function(){

	angular
		.module('Locadora')	
		.controller('CabecalhoController', CabecalhoController)

	CabecalhoController.$inject = ['$rootScope', 'NotificacaoService', 'CarrinhoCompraService'];

	function CabecalhoController($rootScope, NotificacaoService, CarrinhoCompraService){
		var ctrl = this;

		ctrl.exibeQuantidadeTotalCarrinho = function() {
			return CarrinhoCompraService.exibeQuantidadeTotal();
		}

		ctrl.exibeQuantidadeTotalNotificacao = function() {
			return NotificacaoService.lista.length;
		}

		ctrl.exibeEscondeCarrinho = function() {
			$rootScope.layout.exibeCarrinho = !$rootScope.layout.exibeCarrinho;
		}

		ctrl.exibeEscondeNotificacao = function() {
			$rootScope.layout.exibeNotificacao = !$rootScope.layout.exibeNotificacao;
		}
	}
})();