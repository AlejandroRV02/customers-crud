--Creating database
CREATE DATABASE crudnodejsmysql;

USE crudnodejsmysql;


--Creando tablas
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(90) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL
);

SHOW TABLES;

DESCRIBE customer;