public class MainClass {
    //Test
    public static void  main(String[] args) {
        System.out.println("I am the Sun god!!! I am unthatered and my legion knows no bounds!!!");
    
        Professor professor = new Professor();
        Funcionario funcionario = new Funcionario("Tiago", "Salviano", 23, 2343);
        Pessoa pessoa = new Pessoa("Bruno", "Matos");

        //Professor
        System.out.println("Nome: " + professor.getNome());
        System.out.println("Sobrenome: " + professor.getSobrenome());

        System.out.println("Salario: " + professor.getSalario());
        System.out.println("Matricula: " + professor.getMatricula());

        System.out.println("Primeira Parcela: " + professor.getPrimeiraParcela());
        System.out.println("Segunda Parcela: " + professor.getSegundaParcela());

        //Funcionario
        System.out.println("Nome: " + funcionario.getNome());
        System.out.println("Sobrenome: " + funcionario.getSobrenome());

        System.out.println("Nome Completo: " + funcionario.getNomeCompleto());

        System.out.println("Primeira Parcela: " + funcionario.getPrimeiraParcela());
        System.out.println("Segunda Parcela: " + funcionario.getSegundaParcela());



        //Pessoa
        System.out.println("Nome: " + pessoa.getNome());
        System.out.println("Sobrenome: " + pessoa.getSobrenome());

        System.out.println("Nome Completo: " + pessoa.getNomeCompleto());
    }
}




      