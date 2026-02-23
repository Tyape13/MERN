i just wrote every sql command in info.md of previous day and didn't tested cause it seems it will work, idk no need for testing myself.

Todays Goal: (from '36' to '40' ) samma (5 days worth of videos then ghar gayera i need to work on EP)

### 1 - Clauses
where clause - to define some condition while we select things

select col1, col2 from table_name where conditions;

SELECT name, followers FROM user WHERE followers >=200;

SELECT name, followers FROM user WHERE age >=18;

### 2 - where clause Operators
Arithmetic operators: +, -, *, /, % (modulus)
Comparison Operators: =, !=, >, >=, <, <=
Logical Operators: AND, OR, NOT, IN, BETWEEN, ALL, LIKE, ANY
Bitwise Operators: '&' (Bitwise AND), '|' (Bitwise Or)

bit manulation, in computers everything is stored in 1/0, it understand if there is current or not. everything is stored in bits.
x                   y                   Result
0                   0                   0
0                   1                   0
1                   0                   0
1                   1                   1

yesto operations and OR Operations i know but this is what's it referring when saying 
bitwise operations than normal AND, it's also doing same but not with bits rather variables, i think.


### 3 - Frequently Used Operators
AND - chcking both condition must be true
OR - one condition must be true to work
BETWEEN - selects for a given range
IN - Matches any value in the list and returns those
NOT - to negate the given condition


Example:
SELECT name, age, followers FROM users WHERE age > 15 OR followers >= 200;
WHERE age BETWEEN 15 AND 17;
WHERE age IN [12, 23, 43, 45];
WHERE age NOT IN [2, 3, 4, 5];


### 4 - Limit Clause (GREAT CLAUSE)
if table has like 1000 rows, this limit clause can limit the amount of information that's comming. 
this won't make the system HANG. 
HELL YEAHHH

SELECT * FROM users WHERE age >=18 LIMIT 4;


### 5 - 'ORDER BY' Clause
to sort in ascending(ASC) or descending order (DESC)

Example:
SELECT col1, col2 FROM table_name ORDER BY col_name ASC;

by default ASC mai sort garxa, if we don't put ASC or DESC.

### 6 - Aggregate Functions
inbuild function that performs calculations on a set of values, and return a single value.
count()
max()
min()
sum()
avg()

SELECT max(marks) from students;

i think this avg() will be used to count the average marks of any specific type of......


### 7 - GROUP BY Clause
groups rows that have the same value into summary rows.
it collects data from multiple records and groups the result by one or more column. 

SELECT col1, col2 FROM table_name GROUP BY col_name;

we generally use GROUP BY with some aggregation function.

SELECT age, count(id) FROM users GROUP BY age;
// first we will GROUP ages, then we will count id from each age group.

we could only print age only but it would just print individual age group so when we used aggregation function then it would be easy.


SELECT age, max(followers) FROM users GROUP BY age; 
// why we didn't used id, we can't group id cause every id is different
this will print max followers from each age group.

we can't put name along with age, max(followers) cause idk.... it's not grouped by age or something logic. not so imp so moving on.


### 8 - HAVING clause
Similar to WHERE, applies some conditions on rows.
But it is used when we want to apply any condition after grouping. 
what???

structure:
Select col1, col2 From table_name Group by col_name HAVING condition;

where is for table, having is for a group
grouping is necessary for HAVING.

OHH, if already GROUP BY xa tespaxi we use having, it's like nesting but not actually cause another keyword

select age, max(followers) from user group by age having max(followers) >=200;

everything needs to be true. 
it will only give group of age whose followers max count is above 200.


### 9 - General Order
Select columns
From table_name
Where conditions
Group By columns
Having condition
Order By columns(s) ASC;


this is general rule or hierarchy or order of how to write SQL.


### 10 - UPDATE keyword
we have learned select now let's learn UPDATE keyword
to update existing rows, 1 user ko data not columns or schema but data of rows of 1 users

Example:
Update table_name
Set col1 = val1, col2= val2
Where condition;

if we do, 

UPDATE user
SET followers = 600
WHERE age = 16;

// we will get error cause SQL doesn't let you update yessai. so, 

SET SQL_SAFE_UPDATES = 0;
// change 1 to 0 and now we can update.



### 11 - Delete (ALWAYS use WHERE Clause when using DELETE)
Delete existing Rows

DELETE FROM table_name
WHERE conditions;

// NEVER NEVE NEVAAAAA EVAAA forget to use "WHERE" condition when using Delete or else. 
// SAAB DELETE HUNXA NATRA.

this is the kind of information that i watch these videos for. 

Sala Gangster Developer banxa zasto xa ta ma ta k ho yaar.

### 12 - ALTER table.
Alter(to change schema)

adding column:
ALTER TABLE table_name
ADD COLUMN column_name datatype constraint;

dropping column:
ALTER TABLE table_name
DROP COLUMN column_name;

Renaming table:
ALTER TABLE table_name
RENAME TO new_table_name;

I don't think i need to write other things, cause it's self explanatory.

to change column name:
ALTER TABLE table_name
CHANGE COLUMN old_name new_name new_datatype new_constraint;

to Modify Column(datatype/constraint):
ALTER TABLE table_name
MODIFY col_name new_datatype new_constraint;

### 13 - Truncate
deletes table's data and table will exists, not like drop that deletes whole table. 

TRUNCATE TABLE table_name;

we can't randomly do this cause if we used table_name1 id as foreign key in another table, that another table will become invalid so can't let another table get messed up just cause you don't want to learn whole sql you idiot so i m not deleting data from your table - mySQL said Camly


### 14 - practice questions
i didnt do it. 

### 15 - p q 2.
nothing.
