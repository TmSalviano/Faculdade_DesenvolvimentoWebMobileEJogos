function main() {
    while (true) {
        var grade1 = getGrade();
        var grade2 = getGrade();
        var grade3 = getGrade();

        return document.write("<span>" + (grade1 + grade2 + grade3) / 3 + "<span/>");
    }
}

function getGrade() {
    while (true) {
        var grade = prompt("Type your grade:");

        if (grade == null) {
            alert("You have to insert something.")
            continue;
        }
        if (isNaN(grade)) {
            alert("What you inserted is not a number.")
            continue;
        }

        grade = Number(grade);

        return grade;
    }
}

