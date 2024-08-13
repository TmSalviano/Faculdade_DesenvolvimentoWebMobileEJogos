

public class Funcionario  extends Pessoa  {
    //Propiedades
    private int Matricula;
    public int getMatricula() {
        return Matricula;
    }
    public void setMatricula(int matricula) {
        Matricula = matricula;
    }

    private double Salario;
    public double getSalario() {
        return Salario;
    }
    public void setSalario(double salario) {
        if (salario >= 0) {
            Salario = salario;
        } else {
            Salario = 0;
        }
    }

    //Construtores
    public Funcionario()
    {
        super();
    }

    public Funcionario(String nome, String sobrenome, int matricula, double salario) {
        super(nome, sobrenome);
        this.Matricula = matricula;
        this.Salario = salario;
    }

    //Metodos
    public  double getPrimeiraParcela() {
        return this.Salario * 0.6;
    }

    public double getSegundaParcela() {
        return this.Salario * 0.4;
    }
}
