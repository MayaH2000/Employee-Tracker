
SELECT * FROM department
JOIN role ON department.id = role.department_id;

SELECT * FROM role
JOIN employee ON role.id = employee.role_id;

SELECT department.*, role.*, employee.id AS employee_id
FROM department
JOIN role ON department.id = role.department_id
JOIN employee ON role.id = employee.role_id;
