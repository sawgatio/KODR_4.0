const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const filter = document.getElementById("filter");

let tasks = [];


function renderTasks() {

    taskList.innerHTML = "";

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const filteredTasks = tasks.filter(task => {

        const dueDate = new Date(task.date);

        return filter.value === "all"
            ? true
            : filter.value === "upcoming"
            ? dueDate >= today
            : dueDate < today;
    });

    filteredTasks.forEach(task => {

        taskList.innerHTML += `
            <tr>
                <td>${task.name}</td>
                <td>${task.date}</td>
                <td>${task.status}</td>
            </tr>
        `;
    });
}


taskForm.addEventListener("submit", function(e){

    e.preventDefault();

    const task = {
        name: document.getElementById("taskName").value,
        date: document.getElementById("taskDate").value,
        status: document.getElementById("taskStatus").value
    };

    tasks.push(task);

    taskForm.reset();

    renderTasks();
});

filter.addEventListener("change", renderTasks);


renderTasks();
