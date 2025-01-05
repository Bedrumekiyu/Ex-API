import { fetchExpenses, addExpense, updateExpense, deleteExpense } from '../api/expenses.js';

const expenseList = document.getElementById('expense-list');
const expenseForm = document.getElementById('expense-form');
const token = localStorage.getItem('token');


document.addEventListener('DOMContentLoaded', async () => {
  try {
    const expenses = await fetchExpenses(token);
    renderExpenses(expenses);
  } catch (error) {
    alert('Failed to load expenses: ' + error.message);
  }
});


function renderExpenses(expenses) {
  expenseList.innerHTML = '';
  expenses.forEach((expense) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${expense.title}</td>
      <td>${expense.description}</td>
      <td>${expense.amount}</td>
      <td>${expense.date}</td>
      <td>
        <button class="btn btn-warning btn-sm" onclick="editExpense(${expense.id})">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteExpenseHandler(${expense.id})">Delete</button>
      </td>
    `;
    expenseList.appendChild(row);
  });
}


expenseForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const amount = document.getElementById('amount').value;
  const date = document.getElementById('date').value;

  try {
    const newExpense = { title, description, amount, date };
    await addExpense(newExpense, token);
    alert('Expense added successfully');
    location.reload();
  } catch (error) {
    alert('Failed to add expense: ' + error.message);
  }
});


window.deleteExpenseHandler = async (id) => {
  try {
    await deleteExpense(id, token);
    alert('Expense deleted successfully');
    location.reload();
  } catch (error) {
    alert('Failed to delete expense: ' + error.message);
  }
};
