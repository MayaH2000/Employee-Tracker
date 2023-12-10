// Import necessary packages
const inquirer = require('inquirer');
const mysql = require('mysql2');

// Define classes: Employee, Role, Department
// Create a connection to the database
const connection = mysql.createConnection({
    // Your database connection details
  });

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
  




// Assuming you have a MySQL connection initialized as `connection`

function viewAllDepartments() {
    connection.query('SELECT * FROM department', (error, results) => {
      if (error) throw error;
      console.table(results);
      // Call the main menu function or another function here if needed
    });
  }
  
  function viewAllRoles() {
    connection.query('SELECT * FROM role', (error, results) => {
      if (error) throw error;
      console.table(results);
      // Call the main menu function or another function here if needed
    });
  }
  
  function viewAllEmployees() {
    connection.query('SELECT * FROM employee', (error, results) => {
      if (error) throw error;
      console.table(results);
      // Call the main menu function or another function here if needed
    });
  }
  
  function addDepartment() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter department name:',
        },
      ])
      .then((answer) => {
        connection.query(
          'INSERT INTO department (name) VALUES (?)',
          [answer.name],
          (error, results) => {
            if (error) throw error;
            console.log('Department added successfully');
            // Call the main menu function or another function here if needed
          }
        );
      });
  }
  
  function addRole() {
    // Similar to addDepartment but prompting for role details
  }
  
  function addEmployee() {
    // Similar to addDepartment but prompting for employee details
  }
  
  function updateEmployeeRole() {
    // Fetch the list of employees and roles to display for selection
    // Then prompt user to select an employee and their new role
    // Perform an SQL update query to update the employee's role
  }
  
// Application start function
function startApp() {
    inquirer
      .prompt([
        // Display options: view departments, roles, employees, add department, add role, add employee, update employee role
        // Each option corresponds to a function call to perform the specific action
      ])
      .then((answer) => {
        switch (answer.action) {
          case 'View All Departments':
            viewAllDepartments();
            break;
          case 'View All Roles':
            viewAllRoles();
            break;
          case 'View All Employees':
            viewAllEmployees();
            break;
          case 'Add Department':
            addDepartment();
            break;
          case 'Add Role':
            addRole();
            break;
          case 'Add Employee':
            addEmployee();
            break;
          case 'Update Employee Role':
            updateEmployeeRole();
            break;
          default:
            console.log('Invalid option selected');
            break;
        }
      });
  }
  startApp()

// Function to create a new employee using inquirer
function createEmployee() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter employee name:',
        },
        {
          type: 'input',
          name: 'role',
          message: 'Enter employee role:',
        },
          {
            type: 'input',
            name: 'department',
            message: 'Enter employee department:',
          },
          {
            type: 'input',
            name: 'salary',
            message: 'Enter employee salary:',
          },
          {
            type: 'input',
            name: 'manager',
            message: 'Enter employee manager:',
          },
        
          
          
      ])
      .then((answers) => {
        const { name, role, department, salary, managerId } = answers;
        const newEmployee = new Employee(name, role, department, salary, managerId);
        console.log('New employee created:');
        console.log(newEmployee.displayInfo());
      });
  }
  createEmployee();

// Start the application

