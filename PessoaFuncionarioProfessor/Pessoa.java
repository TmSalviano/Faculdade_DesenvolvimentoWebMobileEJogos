public class Pessoa {
    //Propiedades e variaveis
    private String Nome;
    public String getNome() {
        return Nome;
    }
    public void setNome(String nome) {
        Nome = nome;
    }

    private String Sobrenome;
    public String getSobrenome() {
        return Sobrenome;
    }
    public void setSobrenome(String sobrenome) {
        Sobrenome = sobrenome;
    }

    
    //Construtores
    public Pessoa() {
        this.Nome = "";
        this.Sobrenome = "";
    }
    
    public Pessoa(String nome, String sobrenome) {
        this.Nome = nome;
        this.Sobrenome = sobrenome;
    }

    //Metodo
    public String getNomeCompleto() {
        return Nome + " " + Sobrenome;
    }
}
