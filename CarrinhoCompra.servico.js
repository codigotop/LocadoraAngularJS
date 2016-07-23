(function(){

	angular
		.module('Locadora')	
		.service('CarrinhoCompraService', CarrinhoCompraService)


	CarrinhoCompraService.$inject = ['NotificacaoService'];

	function CarrinhoCompraService(NotificacaoService)
	{
		var servico = this;

		servico.listaFilmes = [];

		servico.filmeExistente = function(sTituloFilme) {
			return servico.listaFilmes.filter(
											function(oFilme) { return oFilme.titulo == sTituloFilme; 
										})
		}

		servico.adicionarFilme = function(oFilme) {

			var vFilmeExistente = servico.filmeExistente(oFilme.titulo);

			if (vFilmeExistente.length > 0) {
				vFilmeExistente[0].quantidade++;

				NotificacaoService.adicionar('Novo filme adicionado - Total: ' + vFilmeExistente[0].quantidade)
			}
			else
			{
				servico.listaFilmes.push({
					quantidade: 1,
					titulo: oFilme.titulo,
					urlCapa: oFilme.urlCapa,
					precoUnitario: 10
				})

				NotificacaoService.adicionar('Novo filme adicionado - Total: 1')
			}


		}

		servico.removerFilme = function(sTituloFilme) {
			servico.listaFilmes = servico.listaFilmes.filter(
											function(oFilme) { 
												return oFilme.titulo != sTituloFilme; 
											 });
			NotificacaoService.adicionar('Novo filme removido - Total: 0');
		}

		servico.exibeQuantidadeTotal = function() {
			var quantidadeTotal = 0;

			servico.listaFilmes.forEach(function(filme) {
				quantidadeTotal += filme.quantidade;
			})

			return quantidadeTotal;
		}
	}
})();