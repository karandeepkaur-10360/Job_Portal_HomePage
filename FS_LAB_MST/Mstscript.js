const addBtn = document.getElementById("AddExpense");
const amountInput = document.getElementById("expenseAmount");
const categorySelect = document.getElementById("expenseCategory");

const historyTableBody = document.querySelector("#transactionHistory tbody");
const totalExpenseHeading = document.querySelector("h3");

let totalExpense = 0;

addBtn.addEventListener("click", function () {

    const amount = parseFloat(amountInput.value);
    const category = categorySelect.value;

    
    if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${category}</td>
        <td>Rs. ${amount.toFixed(2)}</td>
        <td>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        </td>
    `;

    
    historyTableBody.appendChild(newRow);

    
    totalExpense += amount;
    totalExpenseHeading.textContent = `Total Expense: Rs. ${totalExpense.toFixed(2)}`;

    
    amountInput.value = "";
    categorySelect.selectedIndex = 0;

    
    newRow.querySelector(".deleteBtn").addEventListener("click", function () {
        totalExpense -= amount;
        totalExpenseHeading.textContent = `Total Expense: Rs. ${totalExpense.toFixed(2)}`;
        newRow.remove();
    });

    
    newRow.querySelector(".editBtn").addEventListener("click", function () {
        amountInput.value = amount;
        categorySelect.value = category;

        totalExpense -= amount;
        totalExpenseHeading.textContent = `Total Expense: Rs. ${totalExpense.toFixed(2)}`;

        newRow.remove();
    });

});