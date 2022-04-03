package br.ce.curso.steps;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import junit.framework.Assert;

public class InserirContasSteps {

	private WebDriver driver;

	@Dado("^que estou acessando a aplicacao$")
	public void queEstouAcessandoAAplicacao() throws Throwable {

		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\CRISTIAN\\OneDrive\\Área de Trabalho\\Testes\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://seubarriga.wcaquino.me/login");

	}

	@Quando("^informo o usuario \"([^\"]*)\"$")
	public void informoOUsuario(String arg1) throws Throwable {

		driver.findElement(By.id("email")).sendKeys(arg1);

	}

	@Quando("^a senha \"([^\"]*)\"$")
	public void aSenha(String arg1) throws Throwable {

		driver.findElement(By.id("senha")).sendKeys(arg1);

	}

	@Quando("^seleciono entrar$")
	public void selecionoEntrar() throws Throwable {

		driver.findElement(By.tagName("button")).click();

	}

	@Entao("^visualizo a pagina inicial$")
	public void visualizoAPaginaInicial() throws Throwable {

		String texto = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		Assert.assertEquals("Bem vindo, Cristian!", texto);
	}

	@Quando("^seleciono contas$")
	public void selecionoContas() throws Throwable {

		driver.findElement(By.linkText("Contas")).click();
		;

	}

	@Quando("^seleciono adicionar$")
	public void selecionoAdicionar() throws Throwable {

		driver.findElement(By.linkText("Adicionar")).click();

	}

	@Quando("^informo a conta  \"([^\"]*)\"$")
	public void informoAConta(String arg1) throws Throwable {

		driver.findElement(By.id("nome")).sendKeys(arg1);

	}

	@Quando("^seleciono em Salvar$")
	public void selecionoEmSalvar() throws Throwable {

		driver.findElement(By.tagName("button")).click();

	}

	@Entao("^a conta eh inserida com sucesso$")
	public void aContaEhInseridaComSucesso() throws Throwable {

		String validaConta = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		Assert.assertEquals("Conta adicionada com sucesso!", validaConta);

	}

	@Entao("^sou notificado que o nome da conta eh obrigatorio$")
	public void souNotificadoQueONomeDaContaEhObrigatorio() throws Throwable {

		String validaObrigatorio = driver.findElement(By.xpath("//div[@class='alert alert-danger']")).getText();
		Assert.assertEquals("Informe o nome da conta", validaObrigatorio);

	}

	@Entao("^sou notificado que ja existe uma conta com esse nome$")
	public void souNotificadoQueJaExisteUmaContaComEsseNome() throws Throwable {

		String validaNome = driver.findElement(By.xpath("//div[@class='alert alert-danger']")).getText();
		Assert.assertEquals("Já existe uma conta com esse nome!", validaNome);

	}

	@Before
	public void inicioTeste() {
		System.out.println("Iniciando os Testes");
		
	}
	
	@After(order = 1)
	public void screeshot(Scenario cenario) {
		File file = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(file, new File("target/screenshot/"+cenario.getId()+".jpg"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	

	@After(order = 0)
	public void fecharBrowser() {
		driver.quit();
	}

}
