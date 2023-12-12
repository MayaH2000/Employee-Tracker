// Import necessary packages
const inquirer = require('inquirer');
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'atkababy',
    database: 'employees_db'
  });
  
  // Connect to the database
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to database');
    startApp();
  });
  
  
  function startApp() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'What would you like to do?',
          choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add Department',
            'Add Role',
            'Add Employee',
            'Update Employee Role',
          ],
        },
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
    constructor(name, managerId) {
      this.name = name;
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

  function viewAllDepartments() {
    connection.query('SELECT id, name FROM department', (error, results) => {
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
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter employee role:',
        },
      ])
      .then((answer) => {
        connection.query(
          'INSERT INTO role (name) VALUES (?)',
          [answer.name],
          (error, results) => {
            if (error) throw error;
            console.log('Role added successfully');
            // Call the main menu function or another function here if needed
          }
        );
      });
    }

    function addEmployee() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'first_name',
                    message: 'Enter Employee first name:',
                },
                {
                    type: 'input',
                    name: 'last_name',
                    message: 'Enter Employee last name:',
                },
                {
                    type: 'input',
                    name: 'role_id',
                    message: 'Enter Employee role ID:',
                },
                {
                    type: 'input',
                    name: 'manager_id',
                    message: 'Enter Employee manager ID:',
                },
            ])
            .then((answers) => {
                connection.query(
                    'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
                    [answers.first_name, answers.last_name,  Number (answers.role_id), Number (answers.manager_id)],
                    (error, results) => {
                        if (error) throw error;
                        console.log('Employee added successfully');
                        // Call the main menu function or another function here if needed
                    }
                );
            });
    }
    
  
    function updateEmployeeRole() {
        // Fetch the list of employees
        connection.query('SELECT id, CONCAT(first_name, " ", last_name) AS full_name FROM employee', (error, employees) => {
          if (error) throw error;
      
          // Display employees for selection
          console.log('Employees:');
          employees.forEach((employee) => {
            console.log(`${employee.id}. ${employee.full_name}`);
          });
      
          // Prompt user to select an employee by ID
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'employeeId',
                message: 'Enter the ID of the employee whose role you want to update:',
                validate: (value) => {
                  const valid = employees.some((employee) => employee.id === parseInt(value));
                  return valid || 'Please enter a valid employee ID';
                },
              },
              {
                type: 'input',
                name: 'newRoleId',
                message: 'Enter the new role ID for the employee:',
                validate: (value) => {
                  // You might validate the new role ID here if needed
                  return value !== '' || 'Please enter a role ID';
                },
              },
            ])
            .then((answers) => {
              const { employeeId, newRoleId } = answers;
      
              // Perform SQL update query to update the employee's role
              connection.query(
                'UPDATE employee SET role_id = ? WHERE id = ?',
                [parseInt(newRoleId), parseInt(employeeId)],
                (error, results) => {
                  if (error) throw error;
                  console.log('Employee role updated successfully');
                  // You can add further actions here if needed
                }
              );
            });
        });
      }
      
