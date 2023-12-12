-- Inserting departments
INSERT INTO department (name)
VALUES ('Electrical'),
       ('Accounting'),
       ('Marketing'),
       ('Human Resources'),
       ('Sales'),
       ('Engineering'),
       ('Management'),
       ('Safety'),
       ('Telecoms');


-- Inserting roles
INSERT INTO role  (title, salary, department_id)
VALUES ('Apprentice', 72000.00, 1),
       ('Manager', 75000.00, 2),
       ('Chief Marketing Officer', 350000.00, 3),
       ('Representative', 155000.00, 4),
       ('Director of Sales', 143000.00, 5),
       ('Senior Software Engineer', 180000.00, 6),
       ('Chief Director of Management', 120000.00, 7),
       ('Safety Administrator', 90000.00, 8),
       ('Tower Technician 3', 91000.00, 9);

-- Inserting employees with default values (excluding id)
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Maya', 'Hernandez', 1, NULL),
       ('Drew', 'Surmeier', 9, NULL),
       ('Eden', 'Surmeier', 5, NULL),
       ('Liz', 'McCabe', 7, NULL);
    



