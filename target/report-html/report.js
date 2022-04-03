$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/inserir_conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Cadastro de contas",
  "description": "\r\nComo um usuario \r\nGostaria de cadastrar contas \r\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 241400,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou acessando a aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "informo o usuario \"cristian.ataliba@outlook.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "a senha \"qualidade\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "visualizo a pagina inicial",
  "keyword": "Entao "
});
formatter.step({
  "line": 16,
  "name": "seleciono contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "seleciono adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "duration": 2406806100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cristian.ataliba@outlook.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuario(String)"
});
formatter.result({
  "duration": 112087900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qualidade",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 75732200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 552181800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPaginaInicial()"
});
formatter.result({
  "duration": 41574200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 62636200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 277552900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "cadastro-de-contas;deve-inserir-uma-conta-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 21,
  "name": "informo a conta  \"Conta Teste segunda\"",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "seleciono em Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "a conta eh inserida com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta Teste segunda",
      "offset": 18
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 73169800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEmSalvar()"
});
formatter.result({
  "duration": 320332400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.aContaEhInseridaComSucesso()"
});
formatter.result({
  "duration": 27080600,
  "status": "passed"
});
formatter.after({
  "duration": 193533600,
  "status": "passed"
});
formatter.after({
  "duration": 717546700,
  "status": "passed"
});
formatter.before({
  "duration": 253800,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "que estou acessando a aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "informo o usuario \"cristian.ataliba@outlook.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "a senha \"qualidade\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "visualizo a pagina inicial",
  "keyword": "Entao "
});
formatter.step({
  "line": 16,
  "name": "seleciono contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "seleciono adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "duration": 2163188400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cristian.ataliba@outlook.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuario(String)"
});
formatter.result({
  "duration": 129065900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qualidade",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 73700300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 610511100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPaginaInicial()"
});
formatter.result({
  "duration": 33222800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 43760100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 273149600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Nao deve inserir uma conta sem nome",
  "description": "",
  "id": "cadastro-de-contas;nao-deve-inserir-uma-conta-sem-nome",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 28,
  "name": "informo a conta  \"\"",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "seleciono em Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "sou notificado que o nome da conta eh obrigatorio",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 51363100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEmSalvar()"
});
formatter.result({
  "duration": 256895000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueONomeDaContaEhObrigatorio()"
});
formatter.result({
  "duration": 32207600,
  "status": "passed"
});
formatter.after({
  "duration": 99946700,
  "status": "passed"
});
formatter.after({
  "duration": 677126100,
  "status": "passed"
});
});