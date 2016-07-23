angular.module('Locadora',[]).run(['$rootScope', function($rootScope) {
	$rootScope.titulo = 'Locadora de Filmes';	
	$rootScope.layout = {
		exibeListaFilme: true,
		exibeDetalheFilme: false,
		exibeCarrinho: false,
		exibeNotificacao: false
	}
}]);