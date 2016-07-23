(function(){

	angular
		.module('Locadora')	
		.controller('NotificacaoListaController', NotificacaoListaController)

	NotificacaoListaController.$inject = ['NotificacaoService'];
	
	function NotificacaoListaController(NotificacaoService){
		var ctrl = this;
		ctrl.titulo = 'Notificações';	

		ctrl.exibeLista = function() {
			return NotificacaoService.lista;
		}
	}
})();