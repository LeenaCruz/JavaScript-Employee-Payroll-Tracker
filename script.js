// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {

  const employeesArray = [];
  let keepAdding = true; // Remember to use let if trying to redeclared variable value.

  while (keepAdding) {

    // This variable will store the prompt value.
    const firstName = prompt("Enter First Name");
    const lastName = prompt("Enter Last Name");
    let salary = Number(prompt("Enter Salary"));
// Check if salary is not negative number.
    while (salary < 0 ) {
      salary = Number(prompt("Please enter a positive salary number:"));
    }

   if (isNaN(salary)) {
      salary = 0;
    }

    // This is an object with keys (properties).
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,

    }
    // This push (saves) the object employee into the array indexes last line.
    employeesArray.push(employee);

    keepAdding = confirm("Do you want to add more employees?");

  }

  return employeesArray;

}

// Display the average salary
const displayAverageSalary = function (employeesArray) {

  // This code access the key property of salary of each object in the array and make an average of salary.
  let sum = 0;
  let average = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    sum = sum + currentEmployee.salary;

  }
  average = sum / employeesArray.length;

  console.log(`The average employee salary between our ${employeesArray.length} employees is: $ ${average}`)

  return average;

}

// Select a random employee
const getRandomEmployee = function (employeesArray) {

  // Creates a random number between 0 and 1, round it as an integer and multiply it by the lenght of the array to give you a random index.
  const index = Math.floor(Math.random() * employeesArray.length);

  console.log(`Congratulations to ${employeesArray[index].firstName} ${employeesArray[index].lastName}, our random drawing winner!`);

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees); // target the salary form the array , then maybe a for, do the average sum/

  console.log("====================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
