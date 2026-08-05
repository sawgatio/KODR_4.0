const students = [
    { name: "Rahul", age: 22, marks: 85 },
    { name: "Amit", age: 20, marks: 92 },
    { name: "Neha", age: 21, marks: 78 },
    { name: "Priya", age: 23, marks: 88 }
];

const studentList = document.getElementById("studentList");


let nameAsc = true;
let ageAsc = true;
let marksDesc = true;


function renderStudents() {

    studentList.innerHTML = "";

    students.forEach(student => {

        studentList.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.marks}</td>
            </tr>
        `;
    });

}

renderStudents();


document.getElementById("sortName").addEventListener("click", () => {

    students.sort((a, b) =>
        nameAsc
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
    );

    nameAsc = !nameAsc;

    renderStudents();
});


document.getElementById("sortAge").addEventListener("click", () => {

    students.sort((a, b) =>
        ageAsc
            ? a.age - b.age
            : b.age - a.age
    );

    ageAsc = !ageAsc;

    renderStudents();
});


document.getElementById("sortMarks").addEventListener("click", () => {

    students.sort((a, b) =>
        marksDesc
            ? b.marks - a.marks
            : a.marks - b.marks
    );

    marksDesc = !marksDesc;

    renderStudents();
});
