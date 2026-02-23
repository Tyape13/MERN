MySQL is database, which uses SQL langauge. 

### 1 - Introduction of database.
just basic concept

### 2 - SQL vs no-SQL
sql has mySQL, PostGreSQL, Oracle, etc, it's called relational database
non-SQL has Mongodb, neo4j, etc. it's called non relational database


###  4 - what is table
column k ho. (schema)
SCHEMA is Design of table. the Structure. 

Rows k ho. (Tuple)
data of 1 user or 1 thing.

### 5 - downloading mySql workbench

### 6 - mac ma downloading

### 7 - commands ( i just need to see structure how it work)
create database nice;
drop database nice;
use nice; 

create table users(
    id int auto_increment primary key,
    name varchar(255),
    email varchar(255),
    password varchar(255)
);
insert into users(name, email, password) values('john', 'john@example.com', '123456');
select * from users;
update users set name = 'john doe' where id = 1;
delete from users where id = 1;

create table products(
    id int auto_increment primary key,
    name varchar(255),
    price decimal(10,2),
    description text
);


### 8 - table structure
create table table_name(
    name datatype constraints,
)

### 9 - other queries
CREATE DATABASE IF NOT EXISTS db_name;

DROP DATABASE IF EXISTS db_name;

SHOW DATABASES;
SHOW TABLES;


### 10 - tables commands
create, - creating table
insert, - inserting data in table
update, - updating data
alter, - alter schema of table
truncate, - empty whole table
delete - delete whole table


### 11 - table constrains
NOT NULL - columns can't have a null value
UNIQUE - all values in columns are different
DEFAULT - set default value of column if no value is provided
CHECK - check if value is valid or not

salary INT DEFAULT 0,
CONSTRAINT age_check CHECK (age >= 18 AND city = 'Kathmandu')

yes this constraint line putting inside table creation

CREATE TABLE user {
    age INT, 
    city VARCHAR(255),
    CONSTRAINT age_check CHECK (age >= 18 AND city = 'Kathmandu')
}

we use varchar instead of char cause char reserves spaces while varchar is memory efficient.


### 12 - Constraints 
Primary Key
Foreign Key

create table temp (
    id int auto_increment PRIMARY KEY,
    name varchar(255),
    email varchar(255),
    password varchar(255)
)
or
create table temp(
    id int not null,
    name varchar(255),
    primary key(id, name)
)

in second one primary key are both id and name. and both same can't exists. 
generally primary key is just one.

---

create table temp(
    cus_id int,
    FOREIGN KEY(cus_id) REFERENCES users(id)
)

keys are special columns, if it's primary key, then it becomes unique and not null.

"Foreign key are column in one table that references to primary key of another table."
we are linking 2 tables. 
