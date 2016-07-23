(function(){

	angular
		.module('Locadora')	
		.service('NotificacaoService', NotificacaoService)


	NotificacaoService.$inject = ['$rootScope'];

	function NotificacaoService($rootScope){
		var servico = this;

		servico.lista = [];

		servico.adicionar = function(sMensagem) {
			servico.lista.unshift(sMensagem);

			$rootScope.$broadcast('novaNotificacao', sMensagem);
		}
	}
})();