const form = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");
const monthFilter = document.getElementById("monthFilter");
const total = document.getElementById("total");


let expenses = JSON.parse(localStorage.getItem("expenses")) || [];


function renderExpenses() {

    expenseList.innerHTML = "";

    const selectedMonth = monthFilter.value;

    const filteredExpenses = expenses.filter(expense => {

        if (selectedMonth === "") return true;

        const month = new Date(expense.date).getMonth();

        return month == selectedMonth;
    });

    let totalAmount = 0;

    filteredExpenses.forEach(expense => {

        totalAmount += Number(expense.amount);

        expenseList.innerHTML += `
            <tr>
                <td>${expense.name}</td>
                <td>₹${expense.amount}</td>
                <td>${expense.date}</td>
            </tr>
        `;
    });

    total.textContent = `Total: ₹${totalAmount}`;
}


form.addEventListener("submit", function(e){

    e.preventDefault();

    const expense = {
        name: document.getElementById("name").value,
        amount: document.getElementById("amount").value,
        date: document.getElementById("date").value
    };

    expenses.push(expense);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    form.reset();

    renderExpenses();
});


monthFilter.addEventListener("change", renderExpenses);

renderExpenses();
