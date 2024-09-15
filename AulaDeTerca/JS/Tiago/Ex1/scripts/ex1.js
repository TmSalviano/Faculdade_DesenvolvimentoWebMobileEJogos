main();


function main() {
    while (true) {
        var birthYear = getBirthYear();
        var year = getCurrentYear();

        alert("Today you have " + (year - birthYear) + " years. In 2050 you will be " + (2050 - birthYear) +".")
    }
}

function getBirthYear() {
    while (true) {
        var birthYear = prompt("Type your birth year:");

        if (birthYear == null) {
            alert("You have to insert something.")
            continue;
        }
        if (isNaN(birthYear)) {
            alert("What you inserted is not a number.")
            continue;
        }

        birthYear = Number(birthYear);

        if(Number.isInteger(birthYear) == false) {
            alert("Your birth year must be an integer.")
            continue;
        }

        return birthYear;
    }
}

function getCurrentYear() {
    while (true) {
        var year = prompt("Type the current year:");

        if (year == null) {
            alert("You have to insert something.")
            continue;
        }
        if (isNaN(year)) {
            alert("What you inserted is not a number.")
            continue;
        }

        year = Number(year);

        if(Number.isInteger(year) == false) {
            alert("The year must be an integer.")
            continue;
        }

        return year;
    }
}