SELECT *
FROM department
JOIN role ON role.department = role.id;

SELECT *
FROM role
JOIN employee ON employee.department = employee.id;
