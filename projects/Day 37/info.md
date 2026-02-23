this is about, backend nodejs with sql.
before this we just used the commands of sql in mysql workbench in GUI screen. now we use command line.


### 1 - faker 
to generate fake data
we learn how to code. 

first we do:
`npm init -y`
in this day 37 folder in terminal
`npm install @faker-js/faker`

then went to npm website and copy pasted the code. it was necessary.


### 2 - MySQL2 package
server interacts with database 
server interacts with frontend
using apis. 

connection.end(); // to end connection, app doesn't end connection automatically unless we do this.


`npm install mysql2`

node conenction with database we will use how it's supposed to by seeing it's documentation.


We need to let terminal access to mysql where node is going to run. 
SHE DOES THINGS, then SEES FAILURE, THEN TALKS HOW IT HAPPENED, WHY IT HAPPENED. 
SHE GOES THROUGH PROCESS OF FAILURE, SHE TRIES TO HIT FAILURE and TELLS SOLUTIONS.
DAMN.
that's COOL. 

`/user/local/mysql/bin/mysql -u root -p`
then put in password. 

create schema.sql
source.schema.sql // in cli.


### 3 - Decision time
i don't need to learn how to use MYSQL commands when i m using postgresql. so let's skip this. 
cause i need to learn postgresql anyway so learning this command is not helpful. 
i wanted to see if any more fundamental concept. 
ok 4* speed every video quick watch. 
lol
let's go.

4 ways to interact with mysql
workbench, mysql package, cli, using SQL files (schema.sql) then command inside.


### 5 - insert into user
when we have '?' inside sql command itself, then we can pass ['value', 123] that will fill that ? in order that we have given it. 
let q = "insert .... VALUES ?"
let users = [ [value, value12, value234], [value, value2, value4]]

connection.query(q, [users], (err,result) =>{
    ...stuff
})

or 
q = "insert ... VALUES (? ? ?) "
let user1 = [value, value2, vasd34];
connection.query(q, user1, (err,result) => {

})

### 6 - 12
others are just combinations of other components working together. 
