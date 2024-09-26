/*
add html:
    form with two inputs: description and price
    checkbox: allow input
    table to display expenses
    headlines?

check allow input onChange: 
    if checked: show the entry form
    if not checked: hide the entry form

When the enter button is clicked: onSubmit, onClick
    get the input from the elements
    validate the input (is it a valid number?)
    calculate new total
    add expense to our array
    clear boxes
    update the displayed expenses


*/
const allowBox = document.querySelector("#allow");
let expenses = [];

function setLocal(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getLocal(key) {
  return JSON.parse(localStorage.getItem(key));
}

function allowHandler() {
  if (allowBox.checked) {
    document.querySelector("#addExpenseForm").classList.remove("hide");
  } else {
    document.querySelector("#addExpenseForm").classList.add("hide");
  }
  console.dir(allowBox);
  setLocal("allow-input", allowBox.checked);
}

function submitHandler(event) {
  event.preventDefault();
  const descriptionEl = document.querySelector("#description");
  const amountEl = document.querySelector("#amount");
  if (parseInt(amountEl.value) !== NaN) {
    const newExpense = {
      description: descriptionEl.value,
      amount: parseInt(amountEl.value)
    };
    expenses.push(newExpense);
    setLocal("expenses", expenses);
    descriptionEl.value = "";
    amountEl.value = "";
    renderExpenses(expenses);
  }
}

function expenseTemplate(expense) {
  return `<tr><td>${expense.description}</td><td>${expense.amount}</td><td></td></tr>`;
}

function renderExpenses(expenses) {
  const expensesList = document.querySelector("#expenses");
  const html = expenses.map(expenseTemplate);
  expensesList.innerHTML = html.join("");
}

function init() {
  const allow = getLocal("allow-input");
  allowBox.checked = allow;
  allowHandler();
  expenses = getLocal("expenses");
  renderExpenses(expenses);
}

allowBox.addEventListener("change", allowHandler);
document
  .querySelector("#addExpenseForm")
  .addEventListener("submit", submitHandler);
init();
