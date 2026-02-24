I don't know bro i need to learn Postgresql and not Mern cause MERN is Expensive when storage gets larger. 

NO I need to understand fundamentals, I haven't completely learned SQL ONLY, aru sabai i m going to do. 
project starts from 41-56. 
I m going to complete it, then only i m moving on cause i will have better knowledge of UNKNOWNS and Understood Fundamentals in this so it can be applied to other languages too.

PLAN:
write code for mySQL ones but it won't work but everything other than that i will learn and need to work.

### 1 - MONGO SHELL
we need to create folder then only mongod command works. 
bro every problems are being solved by ai so why should we learn each steps, right. but we need to know fundamentals and not completely trust ai. right? idk

`md C:\data\db`
then `mongod` command start to work

she talks about mongo shell but we don't need this we use code and directly connect or we use mongodb compass. no need for shell. 

### 2 - How data stored (BSON)
it's better than json, 
bson easy to parse cause text based haina like json but binary method ma stored.
space efficient cause it turns data into binary then stores. 


### 3 - Collection (like tables in sql)
it stores data in form of documents(bson docs)
collection: mongodb stored documents in collection.

database vitra collections hunxa, like table inside db of sql. it's called colection

key: value
pair are here.


### 4 - Insert in DB
she uses mongo shell, i think it's mongosh but it's not default available nowdays cause noone uses it. 
but commands are:
> use college
> show collection
> db.collection.insertOne({name:"adam", age: 19, marks: 88})
> db.collection.insertMany()
> db.studnet.find()

these are some commands.

collections are saved in array/list and inside it's object literals.
there is no definitive schema, any key and values can be entered.
we need to make sure every other needs to be similar. 

### 5 - insertMany(array of documents)
db.student.insertMany([{name:"doland", age:78}, {name:"hilary", age:99}])

### 6 - Find (reading data CRUD ko Read part)
db.collection.find() - gives all data
db.collection.find({key:value}) - finds all having key and value like these
db.collection.findOne({key:value}) - yeah

one thing that make create BUG:
find() returns REFERENCE to that object and array ko collection dinxa but reference ho re so i think if we change find() vitra ko it might affect real one idk.

findOne() will return actual document, so does it return real value we can change and alter without affecting real one. I HAVE NO IDEA. neither do i need to find it right now.
moving on.


### 7 - Query Operators
to find range of value, or comparing;
$eq - this will try to find value equal
$gt - greater than
$in - key needs to match value given in, it will match. every value is case Sensitive
$or - OR operator

examples:
db.student.find({marks:{$gt:75}})
this is like not marks:75 rather marks>75.

db.student.find($or:[{marks:{$gt:75}}, {city:{$in:["delhi", "uttrakhand"]}}])

figure it out.


### 8 - Update
structure:
db.collection.updateOne(<filter>, <update>, <options>)

Example:
db.student.updateOne( {name:'adam'}, {$set:{marks:99}} )

db.collection.replaceOne({name:"bob"}, {name:"shraddha", marks: 94..............(i don't care bro k k vanyo vanyo)})

### 9 - Nesting 
IDC

### 10 - Delete
idc
