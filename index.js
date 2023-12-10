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
  
  // Call createEmployee to start the process
  createEmployee();