# language: pt
	@essaFeature
	Funcionalidade: Aprender Cucumber

	Como um aluno
	Eu quero aprender a utilizar  Cucumber
	Para que eu possa automatizar criterios de aceitacao

	Cenario: Deve executar especificacao

	Dado que criei o arquivo corretamente 
	Quando executa-lo 
	Entao a especificacao deve finalizar com sucesso
	
	Cenario: Deve incrementar um contador
	
	Dado que o valor do contador eh 15
	Quando eu incrementar em 3
	Entao o valor do contador sera 18
	
	
	Cenario: Deve calcular atraso no prazo de entrega 
	
	Dado que o prazo eh dia 05/04/2018
	Quando a entrega atrasar em 2 dias
	Entao a entrega sera efetuada em 07/04/2018
	
	Cenario: Deve calcular atraso no prazo de entrega da china
	
	Dado que o prazo eh dia 05/04/2018
	Quando a entrega atrasar em 2 meses
	Entao a entrega sera efetuada em 05/06/2018
	
	Cenario: Deve criar steps genericos para esses passos
	Dado que o ticket eh AF345
	E que o valor da passagem eh R$ 230,45
	E que o nome do passageiro eh "Fulano da Silva"
	E que o telefone do passageiro eh 9999-9999
	Quando criar os steps 
	Entao o teste vai funcionar
	
	
	Cenario: Deve reaproveitar os steps "Dado" do cenario anterior
	Dado que o ticket eh AB167
	E que o ticket especial eh AB167
	E que o valor da passagem eh R$ 1120,23
	E que o nome do passageiro eh "Cicrano de Oliveira"
	E que o telefone do passageiro eh 9888-8888
	
	@ignore
	Cenario: Deve negar todos steps "Dado" dos cenarios anteriores
	Dado que o ticket eh CD123
	E que o ticket eh AG1234
	E que o valor da passagem eh R$ 1.1345,56
	E que o nome do passageiro eh "Beltrano Souza Matos de Alcantara Azevedo"
	E que o telefone do passageiro eh 1234-5678
	E que o telefone do passageiro eh 999-2223
	
	
	
	