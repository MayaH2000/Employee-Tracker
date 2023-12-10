const inquirer = require('inquirer');
const mysql = require('mysql2');

class Employee {
    constructor(name, role, department, salary, managerId) {
      this.name = name;
      this.role = role;
      this.department = department;
      this.salary = salary;
      this.managerId = managerId;
    }
  
    displayInfo() {
      return `Name: ${this.name}, Role: ${this.role}, Department: ${this.department}, Salary: ${this.salary}, Manager ID: ${this.managerId}`;
    }
  
    updateManager(newManagerId) {
      this.managerId = newManagerId;
    }
  
    updateDepartment(newDepartment) {
      this.department = newDepartment;
    }
  }
  
  class Role {
    constructor(title, description, salary) {
      this.title = title;
      this.description = description;
      this.salary = salary;
    }
  
    displayInfo() {
      return `Title: ${this.title}, Description: ${this.description}, Salary: ${this.salary}`;
    }
  }
  
  class Department {
    constructor(name, location, budget, managerId) {
      this.name = name;
      this.location = location;
      this.budget = budget;
      this.managerId = managerId;
      this.employees = [];
    }
  
    addEmployee(employee) {
      this.employees.push(employee);
    }
  
    removeEmployee(employee) {
      const index = this.employees.indexOf(employee);
      if (index !== -1) {
        this.employees.splice(index, 1);
      }
    }
  
    viewEmployeesByManager(managerId) {
      return this.employees.filter((employee) => employee.managerId === managerId);
    }
  }
  

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Maya Hernandez',
  password: 'atkababy',
  database: 'your_database_name',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// Function to add an employee to the database
function addEmployee() {
  inquirer
    .prompt([
      // Ask user for employee details (name, role, department, salary, managerId, etc.)
      // Use the provided data to construct an SQL query to insert the new employee into the database
    ])
    .then((answers) => {
      // Execute SQL query to insert the new employee into the database
      connection.query(
        'INSERT INTO employees (name, role, department, salary, managerId) VALUES (?, ?, ?, ?, ?)',
        [answers.name, answers.role, answers.department, answers.salary, answers.managerId],
        (err, results) => {
          if (err) {
            console.error('Error adding employee:', err);
            return;
          }
          console.log('Employee added successfully');
        }
      );
    });
}

// Function to remove an employee from the database
function removeEmployee() {
  inquirer
    .prompt([
      // Ask user for employee details or ID to identify the employee to be removed
      // Construct an SQL query to remove the selected employee from the database
    ])
    .then((answers) => {
      // Execute SQL query to remove the employee from the database
      // connection.query('DELETE FROM employees WHERE id = ?', [employeeId], (err, results) => {...});
    });
}

// Function to search for employees by department
function searchByDepartment() {
  inquirer
    .prompt([
      // Ask user for the department name or ID
      // Construct an SQL query to retrieve employees in the specified department
    ])
    .then((answers) => {
      // Execute SQL query to fetch employees in the specified department
      // connection.query('SELECT * FROM employees WHERE department = ?', [departmentName], (err, results) => {...});
    });
}

// Use these functions within your application flow as needed

  // Example usage:
  const employee1 = new Employee('John Doe', 'Manager', 'Sales', 50000, 1);
  console.log(employee1.displayInfo());
  
  const role = new Role('Manager', 'Oversees Sales Department', 60000);
  console.log(role.displayInfo());
  
  const department = new Department('Sales', 'New York', 1000000, 1);
  department.addEmployee(employee1);
  console.log(department.viewEmployeesByManager(1));
  