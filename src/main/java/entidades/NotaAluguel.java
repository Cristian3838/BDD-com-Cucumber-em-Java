package entidades;

import java.util.Date;

public class NotaAluguel {

	private int preco;
	private Date dataEntega;
	private int pontuacao;

	public int getPreco() {
		return preco;
	}

	public void setPreco(int preco) {
		this.preco = preco;
	}

	public Date getDataEntrega() {
		return dataEntega;
		
	}

	public void setDateEntrega(Date time) {
		this.dataEntega = time;
		
	}

	public int getPontuacao() {
		
		return pontuacao;
	}
	
	public void setPontuacao(int pontucao) {
		this.pontuacao = pontucao;
	}
	
	

}
