#language: pt

Funcionalidade: Cadastro de contas

Como um usuario 
Gostaria de cadastrar contas 
Para que eu possa distribuir meu dinheiro de uma forma mais organizada


Contexto: 
Dado que estou acessando a aplicacao
Quando informo o usuario "cristian.ataliba@outlook.com"
E a senha "qualidade"
E seleciono entrar 
Entao visualizo a pagina inicial
Quando seleciono contas 
E seleciono adicionar 

Cenario: Deve inserir uma conta com sucesso

E informo a conta  "Conta Teste segunda"
E seleciono em Salvar
Entao a conta eh inserida com sucesso


Cenario: Nao deve inserir uma conta sem nome

E informo a conta  ""
E seleciono em Salvar
Entao sou notificado que o nome da conta eh obrigatorio

@ignore
Cenario: Nao deve inserir uma conta com nome ja existente

E informo a conta  "Conta de teste"
E seleciono em Salvar
Entao sou notificado que ja existe uma conta com esse nome

