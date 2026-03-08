const mongoose = require("mongoose");
const {Schema} = mongoose;

main().then(()=>{
    console.log("Connection successful");
}).catch((err) =>{
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1/27017/relationDemo");
}

// customerSchema.pre("fineOneAndDelete", async () => {
//     console.log("Pre Middleware");
//     // see fineOneAndDelete is the middleware that runs after we called findByIdAndDelete.
// })



// after user is deleted and customer.order.length is still positive then this will activate.
customerSchema.post("findOneAndDelete", async (customer) =>{
    if(customer.order.length){
        let res = await Order.deleteMany({_id: {$in: customer.orders}});
        // $in is a query operator which says: match if htis fields equals any one of these values. 
        // _id needs to be in customer.orders and those will be passed to be deleted
        console.log(res);
    }
})


const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref:"Order"
        },
    ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const fundCustomer = async() =>{
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
}

// to add customer
const addCust = async() =>{
    let newCust = new Customer({
        name:"Karan Arjun"
        
    });

    let newOrder = new Order({
        item: "Pizza",
        price: 250
    });
    newCust.order.push(newOrder);
    await newOrder.save();
    await newCust.save();

    console.log("added new customer");

};


const delCust = async() =>{
    let data = await Customer.findByIdAndDelete(); // we need to put customer id
    console.log(data); 
}

// addCust();
delCust(); // but it doesn't delete order data. 


