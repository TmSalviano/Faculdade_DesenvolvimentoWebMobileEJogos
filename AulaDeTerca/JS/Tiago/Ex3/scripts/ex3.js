main();


function main() {
    while (true) {
        var celsius = getCelsius();

        alert("The temperature in Fahrenheit is: "+ ((celsius * 1.8) + 32) +"F.");
    }
}

function getCelsius() {
    while (true) {
        var celsius = prompt("Type the temperature in Celsius:");

        if (celsius == null) {
            alert("You have to insert something.")
            continue;
        }
        if (isNaN(celsius)) {
            alert("What you inserted is not a number.")
            continue;
        }

        celsius = Number(celsius);

        return celsius;
    }
}
