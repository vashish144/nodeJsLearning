let express= require('express');
let app=express();
let dotenv= require('dotenv').config();

let fs= require('fs');
let mongo=require('mongodb')
let PORT=process.env.PORT||9870;
let mongoClint=mongo.MongoClient;
let mongoUrl=process.env.MongoUrl;
let db;

app.get('/',(req,res)=>{
    res.send("server is running")
})
app.get('/location',(req,res)=>{
    db.collection('location').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })

})
//connection with mogodbDatabase
 mongoClint.connect(mongoUrl,(err,clint)=>{
     if(err) throw console.log("Error While connectig...");
     db=clint.db('learnNode');
    //  console.log("db",db);
     app.listen(PORT,(err)=>{
         if(err) throw err;
         console.log(`express is running on port no: ${PORT}`);
     })
 })









//----------------------------------without mongoDb-------------------------------------------------------------
// dotenv.config();
// let Port=process.env.PORT||8976
// app.get("/",(req,res)=>{
// res.send("<h1>i am from express server</h1>")
// })

// app.get("/location",(req,res)=>{
// fs.readFile("db.json","utf-8",(err,data)=>{
//  if(err) throw err;
//  res.send(data);
// })
// })
// app.listen(Port,(err)=>{
//  if(err) throw err;
//  console.log(`express is running on port ${Port}`)
// })