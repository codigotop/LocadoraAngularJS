(function(){

	angular
		.module('Locadora')	
		.controller('NotificacaoController', NotificacaoController)

	NotificacaoController.$inject = ['$scope','$timeout'];
	
	function NotificacaoController($scope, $timeout){
		var ctrl = this;
		ctrl.mensagemNotificacao = null;
		ctrl.tmrMensagem = null;

		$scope.$on('novaNotificacao', function(evt, sMensagem) {

			if (ctrl.tmrMensagem)
				$timeout.cancel(ctrl.tmrMensagem);

			ctrl.mensagemNotificacao = sMensagem;

			ctrl.tmrMensagem = $timeout(function() { ctrl.mensagemNotificacao = null }, 5000);
		})
	}
})();