let mongoose = require('mongoose')
mongoose.connect("mongodb+srv://test:test@learnnodejs.svaxf.mongodb.net/?retryWrites=true&w=majority").then((res)=>{
 console.log("Db connected");
}).catch((err)=>{
 console.log("Error while connecting",err);
})