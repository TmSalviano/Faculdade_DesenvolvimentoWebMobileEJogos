main();

function main() {
    confirm("Você vai inserir os coeficientes a b e c de uma função.")
    let a = prompt("Insira o coeficiente a:");
    let b = prompt("Insira o coeficiente b:");
    let c = prompt("Insira o coeficiente c:");

    if (a == 0 && b == 0 && c == 0)
        alert("Igualdade confirmada: 0 = 0");
    else if (a == 0 && b == 0 && c != 0)
        alert("Coeficientes informados incorretamente");
    else if (a == 0 && b != 0)
        alert("Esta é uma equação de primeiro grau. Valor de x: " + (-c / b));
    else {
        alert("Esta é uma equação de segundo grau");

        let delta = Math.pow(b, 2) - (4 * a * c)

        if (delta < 0){
            alert("Esta equação não possui raízes reais. Delta: " + delta)
        }
        if (delta == 0)
            alert("Esta equação possui duas raízes reais iguais. x: " + ((-b + delta) / (2 * a)) + ".");

        if (delta > 0)
            alert("Esta equação possui duas raízes reais diferentes. x1: " + ((-b + delta) / (2 * a)) + ", x2: " + ((-b - delta) / (2 * a)) + ".");
    }
}