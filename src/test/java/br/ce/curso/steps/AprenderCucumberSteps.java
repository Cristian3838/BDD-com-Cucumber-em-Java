package br.ce.curso.steps;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import br.ce.curso.converters.DateConverter;
import cucumber.api.Transform;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class AprenderCucumberSteps {
	@Dado("^que criei o arquivo corretamente$")
	public void queCrieiOArquivoCorretamente() throws Throwable {
		System.out.println("qualque coisa!");
	}

	@Quando("^executa-lo$")
	public void executaLo() throws Throwable {
	}

	@Entao("^a especificacao deve finalizar com sucesso$")
	public void aEspecificacaoDeveFinalizarComSucesso() throws Throwable {
	}

	private int contador = 0;

	@Dado("^que o valor do contador eh (\\d+)$")
	public void queOValorDoContadorEh(int arg1) throws Throwable {
		contador = arg1;
	}

	@Quando("^eu incrementar em (\\d+)$")
	public void euIncrementarEm(int arg1) throws Throwable {
		contador = contador + arg1;
	}

	@Entao("^o valor do contador sera (\\d+)$")
	public void oValorDoContadorSera(int arg1) throws Throwable {

		Assert.assertEquals(arg1, contador);
	}

	Date entrega = new Date();

	@Dado("^que o prazo eh dia (.*)$")
	public void queOPrazoEhDia(@Transform(DateConverter.class)Date data) throws Throwable {
		entrega = data;
		System.out.println(entrega);
	}

	@Quando("^a entrega atrasar em (\\d+) (dia|dias|mes|meses)$")
	public void aEntregaAtrasarEmDias(int arg1, String tempo) throws Throwable {

		Calendar cal = Calendar.getInstance();
		cal.setTime(entrega);

		if (tempo.equals("dias")) {
			cal.add(Calendar.DAY_OF_MONTH, arg1);

		} if (tempo.equals("meses")) {
			cal.add(Calendar.MONTH, arg1);

		}

		entrega = cal.getTime();

	}

	@Entao("^a entrega sera efetuada em (\\d{2}\\/\\d{2}\\/\\d{4})$")
	public void aEntregaSeraEfetuadaEm(String data) throws Throwable {

		DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		String dataFormatada = format.format(entrega);
		Assert.assertEquals(data, dataFormatada);

	}
	
	@Dado("^que o ticket( especial)? eh (A.\\d{3})$")
	public void queOTicketEhAF(String tipo, String arg1) throws Throwable {
	   
	}
	

	@Dado("^que o valor da passagem eh R\\$ (.*)$")
	public void queOValorDaPassagemEhR$(Double numero) throws Throwable {
		System.out.println(numero);
	   
	}

	@Dado("^que o nome do passageiro eh \"(.{5,20})\"$")
	public void queONomeDoPassageiroEh(String arg1) throws Throwable {
	    
	}

	@Dado("^que o telefone do passageiro eh (9\\d{3}-\\d{4})$")
	public void queOTelefoneDoPassageiroEh(String telefone) throws Throwable {
	    
	}

	@Quando("^criar os steps$")
	public void criarOsSteps() throws Throwable {
	    
	}

	@Entao("^o teste vai funcionar$")
	public void oTesteVaiFuncionar() throws Throwable {
	    
	}


}
