function calcularTroco() {
    const valorCompra = parseFloat(document.getElementById("valorCompra").value);
    const valorPago = parseFloat(document.getElementById("valorPago").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(valorCompra) || isNaN(valorPago)) {
        resultado.innerHTML = "insira valores válidos!";
        return;
    }

    if (valorPago < valorCompra) {
        resultado.innerHTML = "O valor pago e insuficiente para realizar a compra!";
        return;
    }

    let troco = valorPago - valorCompra;
    resultado.innerHTML = `Troco: R$ ${troco.toFixed(2)}<br>`;

    const notas = [50, 20, 10, 5, 2, 1];
    let detalhesTroco = "";

    for (let nota of notas) {
        const quantidade = Math.floor(troco / nota);
        if (quantidade > 0) {
            detalhesTroco += `Notas de R$ ${nota},00: ${quantidade}<br>`;
            troco -= quantidade * nota;
        }
    }

    resultado.innerHTML += detalhesTroco;
}