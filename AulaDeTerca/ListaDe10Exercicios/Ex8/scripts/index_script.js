const cadastro = new Cadastro();


class Cadastro {
    constructor() {
        this.cadastros = [];
    }

    registerPessoaFisica(pessoaFisica) {
        this.cadastros.push(pessoaFisica);
    }

    registerPessoaJuridica(pessoaJuridica) {
        this.cadastros.push(pessoaJuridica);
    }

    PrintVetor() {
        let output = '';
    
        this.cadastros.forEach(pessoa => {
            if (pessoa instanceof PessoaFisica) {
                output += `Nome: ${pessoa.getNome()}. CPF: ${pessoa.getCpf()}<br>`;
            } else if (pessoa instanceof PessoaJurídica) {
                output += `Nome: ${pessoa.getNome()}. CNPJ: ${pessoa.getCnpj()}<br>`;
            } else {
                output += "The object is neither PessoaFisica nor PessoaJurídica.<br>";
            }
        });
    
        document.write(output);
    }    
}

class Pessoa{
    constructor(nome) {
        this.nome = nome
    }

    getNome() {
        return this.nome
    }

    setNome(value) {
        this.nome = value;
    }
}

class PessoaFisica extends Pessoa {
    constructor(nome, cpf) {
        super(nome);
        this.cpf = cpf;
    }

    getCpf() {
        return this.cpf
    }

    setCpf(value) {
        this.cpf = value;
    }
}

class PessoaJurídica extends Pessoa {
    constructor(nome, cpf) {
        super(nome);
        this.cnpj = cnpj;
    }

    getCnpj() {
        return this.cnpj
    }

    setCnpj(value) {
        this.cnpj = value;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('tipo');
    const inputNome = document.getElementById('nome');
    const inputCpfCnpj = document.getElementById('cpfCnpj');
    const actionButton = document.getElementById('submit');
    const printButton = document.getElementById('printButton');

    actionButton.addEventListener('click', () => {
        const selectedValue = selectElement.value;
        const nome = inputNome.value;
        const cpfCnpj = inputCpfCnpj.value;

        if (selectedValue === 'fisica') {
            cadastro.registerPessoaFisica(nome, cpfCnpj);
        } else if (selectedValue === 'juridica') {
            cadastro.registerPessoaJuridica(nome, cpfCnpj);
        }

        //reseta os valores das variáveis
        inputNome.value = '';
        inputCpfCnpj.value = '';
    });

    printButton.addEventListener('click', () => {
        cadastro.printVetor();
    });
});

