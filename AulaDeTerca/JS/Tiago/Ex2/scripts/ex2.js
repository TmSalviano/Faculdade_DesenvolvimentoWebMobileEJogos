main();


function main() {
    while (true) {
        var salary = getSalary();

        alert("Your new wage is: " + (salary * 125) / 100  + "R$.");
    }
}

function getSalary() {
    while (true) {
        var salary = prompt("Type your salary:");

        if (salary == null) {
            alert("You have to insert something.")
            continue;
        }
        if (isNaN(salary)) {
            alert("What you inserted is not a number.")
            continue;
        }

        salary = Number(salary);

        return salary;
    }
}

