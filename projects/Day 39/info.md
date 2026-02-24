Let's Quickly finish this then i have to move on to the actual tech and actually learn all the code. 
HAJIMEMASOU!!!

### 1 - Mongoose (ODM ho re)
A LIBRARY that's on NPM that creates a connection between mongodb and node.js javascript runtime environment

It is an ODM (Object data modeling) Library. we know object, data. here we learn modeling.

### 2 - installation

### 3 - Schema in Mongodb
database test name vitra, we need to create collection called User but we didn't wrote code about user somehow.


### 4 - Model
model in mongoose is a class with which we construct documents/collection i think.

const User = mongoose. model("User", userSchema);
NICE NICE
// now using `show collections` in mongosh it will show User Collection
User Model will be 'users' collection. in small letter and purlar form. Automatically.

### 5 - inserting data
inserting one document at a time.

const user1 = new User({name:"Adam", email:"asdfasd.in", age:21});
user1.save()

this 'User' is a class and we need to create a object called user1. 
then we insert the document inside the collection that's called users while user1 is just like a row.
an object who represents document or row that is stored. 

it stays in memory until we put user1.save()

this user1.save() returns promise so

user1.save().then({
    // inserting one at a time huh. there needs to be multiple inserting.
}).catch({
    // 
});



### 6 - Inserting many
User.insertMany([
    {name: "Tony", email:"tony@gmail.com", age: 40},
    {name: "Bruce", email: "bruce@gmail.com", age: 123}
]).then((data) =>{
    console.log(data);
});

### 7 - Find
See, Database will have these kind of methods that will be used. 
i don't need to learn mongoose right now, so let's move on. 
cause just this mongoose have so many functions that noone can remember all.

### 8 - Update in mongoose
nice

### 9 - FindAndUpdate
ok

### 10 - Delete
ok i need to learn how to do in postgresql

### 11 - schema validation
ok what the fuck dude, i don't like thoughts.

### 12 - SchemaType Options
idk what does this mean, it means that i need to be more present and just focus on here. not other places. 

### 13 - Validation in Updation and Errors
Ok, i have no idea. what does this mean but ... if i need i will come back to this.

