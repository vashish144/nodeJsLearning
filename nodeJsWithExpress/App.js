let express= require('express');
let app=express();
let dotenv= require('dotenv');
let fs= require('fs');
// dotenv.config();
let Port=process.env.PORT||8976
app.get("/",(req,res)=>{
res.send("<h1>i am from express server</h1>")
})

app.get("/location",(req,res)=>{
fs.readFile("db.json","utf-8",(err,data)=>{
 if(err) throw err;
 res.send(data);
})
})
app.listen(Port,(err)=>{
 if(err) throw err;
 console.log(`express is running on port ${Port}`)
})