// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = [];
  let keepAdding = true; // if trying to redeclared it use let

  while (keepAdding) {

    // This variable will store the prompt value.
    const firstName = prompt("Enter First Name");
    const lastName = prompt("Enter Last Name");
    let salary = Number(prompt("Enter Salary"));
    if (isNaN(salary)) {
      salary = 0;
    }
    else {
      salary = salary;
    }

    // if (salary.isNaN(x)) {
    //   return 'Number NaN';
    // }
    // if (isNaN(x)) {
    //   return 'NaN';
    // }


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

  //console.log(salary);
  //console.log(employeesArray);

  return employeesArray;

}


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary

  // quiero acceder al valor del key salary de cada objeto en mi index
  //despues quiero hacer un for que sume cada uno de esot svalores y los divida entre el nuemrodevores que hay
  let sum = 0;
  let average = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    sum = sum + currentEmployee.salary;

    //console.log(sum);

  }
  average = sum / employeesArray.length;

  console.log ( `The average salary between our ${employeesArray.length} employees is: $ ${average}`)

  return average;
  


}



// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee

  const index = Math.floor(Math.random() * employeesArray.length);

//Number.valueOf(index);

console.log(`Congrats, ${employeesArray[index].firstName} ${employeesArray[index].lastName} you are our random drawing winner!`);


//let random = 0;

//for (let i = 0; i < employeesArray.length; i++)




  // Make arandomizer with Math 
  // Select that number in the array index
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
