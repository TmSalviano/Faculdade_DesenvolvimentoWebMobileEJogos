// Função para calcular o IMC e exibir a classificação
function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    // Cálculo do IMC
    const imc = peso / (altura * altura);

    // Determinação da classificação do IMC
    let classificacao;
    if (imc < 20) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 20 && imc < 25) {
        classificacao = "Normal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade Grau 1";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade Grau 2";
    } else {
        classificacao = "Obesidade Grau 3";
    }

    // Exibir o resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
}
