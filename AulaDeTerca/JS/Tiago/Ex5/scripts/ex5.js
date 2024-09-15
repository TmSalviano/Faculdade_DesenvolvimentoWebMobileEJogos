main();


function main() {
    while (true) {
        var firstCateto = getCateto("first");
        var secondCateto = getCateto("second");

        alert("Hipotenusa = " + Math.sqrt(Math.pow(firstCateto, 2) + Math.pow(secondCateto, 2)) + ".");
    }
}

function getCateto(order) {
    while (true) {
        var birthYear = prompt("Type your " + order +" cateto:");

        if (birthYear == null) {
            alert("You have to insert something.")
            continue;
        }
        if (isNaN(birthYear)) {
            alert("What you inserted is not a number.")
            continue;
        }

        birthYear = Number(birthYear);

        return birthYear;
    }
}