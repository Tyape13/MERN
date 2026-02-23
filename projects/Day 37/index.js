const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'existingDb',
    password: 'mysql@123'
});
// i haven't even installed mySql so idk if this will work. it would be better if postgresql. but whateva
// we need existingDb to exists first then we connect to it, so what she did was
// used mySql workbench and manually created database and password was when she installed sql.

// i will only write code and explain everything here
try{
connection.query("SHOW TABLES", (err, result)=>{
    if (err) throw err; 
    console.log(result);
});
} catch(err) {
    console.log(err);
}
// ok installing sql and mongodb and practicing everything cause i m not doing halfass work 
// but i m not suppose to waste time on unimportant things. 

// i will do everything of mongodb but not mysql cause i have to learn postgresql from the start so just codes.
// code JUST FOR CONCEPTS that's it. 








function getRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),

  };
}
console.log(getRandomUser()); // it will always be random 
