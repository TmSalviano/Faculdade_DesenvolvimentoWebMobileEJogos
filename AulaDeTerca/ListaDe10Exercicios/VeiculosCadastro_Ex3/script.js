// Vetor para armazenar os veículos cadastrados
let veiculos = [];

// Função para cadastrar um novo veículo
function cadastrarVeiculo() {
    // Obter os valores dos campos de input
    const numeroChassi = document.getElementById("chassi").value;
    const placa = document.getElementById("placa").value;

    // Verificar se os campos estão preenchidos
    if (numeroChassi === "" || placa === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Criar um objeto Veiculo
    let veiculo = {
        chassi: numeroChassi,
        placa: placa
    };

    // Adicionar o veículo ao vetor
    veiculos.push(veiculo);

    // Limpar os campos de input
    document.getElementById("chassi").value = "";
    document.getElementById("placa").value = "";

    // Atualizar a tabela de veículos cadastrados
    atualizarTabela();
}

// Função para atualizar a tabela com os veículos cadastrados
function atualizarTabela() {
    const tabela = document.getElementById("tabelaVeiculos").getElementsByTagName("tbody")[0];
    tabela.innerHTML = ""; // Limpar a tabela antes de adicionar os novos veículos

    // Percorrer o vetor de veículos e adicionar uma nova linha na tabela para cada um
    veiculos.forEach(function (veiculo) {
        let novaLinha = tabela.insertRow();

        let celulaChassi = novaLinha.insertCell(0);
        let celulaPlaca = novaLinha.insertCell(1);

        celulaChassi.innerHTML = veiculo.chassi;
        celulaPlaca.innerHTML = veiculo.placa;
    });
}
