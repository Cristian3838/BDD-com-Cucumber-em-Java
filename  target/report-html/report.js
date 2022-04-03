$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/alugar_filme.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Alugar Filme",
  "description": "Como usuario\r\nEu quero cadastrar alugueis de filmes \r\nPara controlar precos e datas de entrega",
  "id": "alugar-filme",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 9,
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "id": "alugar-filme;deve-alugar-um-filme-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 10,
  "name": "um filme",
  "rows": [
    {
      "cells": [
        "estoque",
        "2"
      ],
      "line": 11
    },
    {
      "cells": [
        "preco",
        "3"
      ],
      "line": 12
    },
    {
      "cells": [
        "tipo",
        "comum"
      ],
      "line": 13
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "o preco do aluguel sera R$ 3",
  "keyword": "Entao "
});
formatter.step({
  "line": 18,
  "name": "a data de entrega sera em 1 dia",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "o estoque do filme sera de 1 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.umFilme(DataTable)"
});
formatter.result({
  "duration": 227665500,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "duration": 1046600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.oPrecoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 3220400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmesSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "duration": 671300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.oEstoqueDoFilmeSeraDeUnidade(int)"
});
formatter.result({
  "duration": 105400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Nao deve alugar filme sem estoque",
  "description": "",
  "id": "alugar-filme;nao-deve-alugar-filme-sem-estoque",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 22,
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 23,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "nao sera possivel por falta de estoque",
  "keyword": "Entao "
});
formatter.step({
  "line": 25,
  "name": "o estoque do filme sera de 0 unidade",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 113500,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "duration": 72000,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.naoSeraPossivelPorFaltaDeEstoque()"
});
formatter.result({
  "duration": 47000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.oEstoqueDoFilmeSeraDeUnidade(int)"
});
formatter.result({
  "duration": 138700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Deve dar condicoes especiais conforme tipo do aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-especiais-conforme-tipo-do-aluguel",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 29,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 30,
  "name": "que o preco do aluguel seja R$ \u003cpreco\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "que o tipo do aluguel seja \u003ctipo\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 33,
  "name": "o preco do aluguel sera R$ \u003cvalor\u003e",
  "keyword": "Entao "
});
formatter.step({
  "line": 34,
  "name": "a data de entrega sera em \u003cqtdDias\u003e dias",
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "a pontuacao sera de \u003cpontuacao\u003e pontos",
  "keyword": "E "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-especiais-conforme-tipo-do-aluguel;",
  "rows": [
    {
      "cells": [
        "preco",
        "tipo",
        "valor",
        "qtdDias",
        "pontuacao"
      ],
      "line": 40,
      "id": "alugar-filme;deve-dar-condicoes-especiais-conforme-tipo-do-aluguel;;1"
    },
    {
      "cells": [
        "4",
        "extendido",
        "8",
        "3",
        "2"
      ],
      "line": 41,
      "id": "alugar-filme;deve-dar-condicoes-especiais-conforme-tipo-do-aluguel;;2"
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ],
      "line": 42,
      "id": "alugar-filme;deve-dar-condicoes-especiais-conforme-tipo-do-aluguel;;3"
    },
    {
      "cells": [
        "5",
        "semanal",
        "15",
        "7",
        "3"
      ],
      "line": 43,
      "id": "alugar-filme;deve-dar-condicoes-especiais-conforme-tipo-do-aluguel;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 41,
  "name": "Deve dar condicoes especiais conforme tipo do aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-especiais-conforme-tipo-do-aluguel;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 29,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 30,
  "name": "que o preco do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "que o tipo do aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 33,
  "name": "o preco do aluguel sera R$ 8",
  "matchedColumns": [
    2
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 34,
  "name": "a data de entrega sera em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "a pontuacao sera de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 111800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmesSteps.queOPrecoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 90900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 67000,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "duration": 80100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.oPrecoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 90400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFilmesSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "duration": 285300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "AlugarFilmesSteps.aPontuacaoRecebidaSeraDePontos(int)"
});
formatter.result({
  "duration": 94000,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Deve dar condicoes especiais conforme tipo do aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-especiais-conforme-tipo-do-aluguel;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 29,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 30,
  "name": "que o preco do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "que o tipo do aluguel seja comum",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 33,
  "name": "o preco do aluguel sera R$ 4",
  "matchedColumns": [
    2
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 34,
  "name": "a data de entrega sera em 1 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "a pontuacao sera de 1 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 129700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmesSteps.queOPrecoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 97800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comum",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 64600,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "duration": 97900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.oPrecoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 98500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmesSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "duration": 331900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    }
  ],
  "location": "AlugarFilmesSteps.aPontuacaoRecebidaSeraDePontos(int)"
});
formatter.result({
  "duration": 106400,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Deve dar condicoes especiais conforme tipo do aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-especiais-conforme-tipo-do-aluguel;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 29,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 30,
  "name": "que o preco do aluguel seja R$ 5",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "que o tipo do aluguel seja semanal",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 33,
  "name": "o preco do aluguel sera R$ 15",
  "matchedColumns": [
    2
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 34,
  "name": "a data de entrega sera em 7 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "a pontuacao sera de 3 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 122300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    }
  ],
  "location": "AlugarFilmesSteps.queOPrecoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 114700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "semanal",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 77200,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "duration": 94400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 27
    }
  ],
  "location": "AlugarFilmesSteps.oPrecoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 101800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 26
    }
  ],
  "location": "AlugarFilmesSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "duration": 314000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "AlugarFilmesSteps.aPontuacaoRecebidaSeraDePontos(int)"
});
formatter.result({
  "duration": 91900,
  "status": "passed"
});
});