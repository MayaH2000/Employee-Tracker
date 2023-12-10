const inquirer = require('inquirer');
const mysql2 = require('mysql2');

class Employee {
    constructor(name, role, department) {
      this.name = name;
      this.role = role;
      this.department = department;
    }
  
    displayInfo() {
      return `Name: ${this.name}, Role: ${this.role}, Department: ${this.department}`;
    }
  }
  
  // Example usage:
  const employee1 = new Employee('John Doe', 'Manager', 'Sales');
  console.log(employee1.displayInfo());

  class Role {
    constructor(title, description) {
      this.title = title;
      this.description = description;
    }
  
    displayInfo() {
      return `Title: ${this.title}, Description: ${this.description}`;
    }
  }
  
  class Department {
    constructor(name, location) {
      this.name = name;
      this.location = location;
    }
  
    displayInfo() {
      return `Name: ${this.name}, Location: ${this.location}`;
    }
  }
  