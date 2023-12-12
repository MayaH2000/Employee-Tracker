# Employee Tracker
## Description

The Employee Tracker is a robust application designed to streamline and manage employee-related information effortlessly. Leveraging the power of Inquirer and MySQL, this user-friendly tool empowers businesses to handle employee data efficiently.

## Key Features:

Employee Management: Add, view, and update employee details including their names, roles, salaries, and assigned departments.

Role Assignment: Assign specific roles to employees, defining their responsibilities and corresponding salaries.

Department Administration: Organize employees into different departments for streamlined management and allocation of resources.

## How It Works:

Using Inquirer's intuitive interface, users can seamlessly interact with the app, providing necessary details for adding or updating employees, roles, salaries, and departments. The app then seamlessly communicates with MySQL, storing and retrieving data to ensure accurate and efficient employee tracking.

## Why Choose Employee Tracker:

## Simplicity: Effortlessly navigate through the app's user-friendly interface.

## Accuracy: Ensure precise storage and retrieval of employee-related information, avoiding discrepancies.

## Efficiency: Streamline management processes by organizing employees, roles, salaries, and departments effectively.

The Employee Tracker app is a reliable and versatile solution for businesses seeking to manage their employee data systematically and efficiently.

# Installation 

Prerequisites:

Node.js installed on your machine
MySQL installed and running
Installation Steps:

Clone the Repository: 

bash
Copy code
git clone git@github.com:MayaH2000/Employee-Tracker.git
cd employee-tracker
Install Dependencies:

bash
npm install
Set Up MySQL Database:

Access your MySQL CLI or preferred MySQL client tool.
Run the schema.sql and seeds.sql scripts in the MySQL environment to create the necessary tables and populate initial data.
sql
source /path/to/schema.sql;
source /path/to/seeds.sql;
Set Up MySQL Connection:

Open the config.js or database.js file to configure the MySQL connection details (host, user, password, database name) to match your MySQL server setup.
Run the Application:

bash
node index.js
Use the Application:

Once the app is running, follow the terminal prompts to interact with the Employee Tracker app.
You'll see a menu with options like "View All Departments," "View All Employees," "Add Department," etc.
Use the arrow keys to navigate and select the desired options, and follow the prompts to add/view employees, roles, departments, etc.
Remember to ensure that your MySQL server is running and accessible before starting the application. Adjust any configuration files to match your MySQL setup (like host, username, password, etc.) for the app to connect correctly.

If you encounter any errors related to MySQL connections or queries, ensure that your MySQL server is properly configured and running.

## Video Walkthrough 
https://drive.google.com/file/d/168jEpOpnVwgzatqeqzqHAZHfYg-jlhx5/view



 ## Screenshot of Application
<img width="1104" alt="Screenshot 2023-12-12 at 4 07 07 PM" src="https://github.com/MayaH2000/Employee-Tracker/assets/101356128/0dc430f4-cf29-4728-9c5a-3b36f399fe3b"> 

## License

# MIT License
Copyright (c) 2023 Maya Hernandez

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
