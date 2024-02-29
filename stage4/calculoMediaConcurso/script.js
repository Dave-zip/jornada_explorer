function getStudentName() {
    return prompt("Digite o nome do aluno:");
}

function getExamGrade() {
    const grade = parseFloat(prompt("Digite a nota da prova:"));
    if (isNaN(grade)) {
        alert("Nota inválida. Digite um número.");
        return getExamGrade();
    }
    return grade;
}

function calculateAverage(student) {
    return (student.firstExamGrade + student.secondExamGrade) / 2;
}

function checkSuccess(student) {
    const studentAverage = calculateAverage(student);
    return studentAverage >= minimumPassingGrade;
}

const listSize = parseInt(prompt("Digite o tamanho da lista:"));

const students = [];


for (let i = 0; i < listSize; i++) {
    const studentName = getStudentName();
    const firstExamGrade = getExamGrade();
    const secondExamGrade = getExamGrade();

    students.push({
        name: studentName,
        firstExamGrade,
        secondExamGrade,
    });
}

const minimumPassingGrade = 7.0;

for (const student of students) {
    const studentAverage = calculateAverage(student);
    const success = checkSuccess(student);

    const message = `a media do(a) aluno(a) ${student.name} é: ${studentAverage.toFixed(1)}
    ${success ? "Parabéns!" : "Continue tentando!"} ${student.name} ${success ? "você passou no concurso! xD" : "você não passou no concurso :("}
    `;

    alert(message);
}
