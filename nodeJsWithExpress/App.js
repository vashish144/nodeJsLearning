let express = require("express");
let app = express();
let dotenv = require("dotenv").config();

let fs = require("fs");
let mongo = require("mongodb");
let PORT = process.env.PORT || 9870;
let mongoClint = mongo.MongoClient;
let mongoUrl = process.env.mogoLiveUrl;
let db;

app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/location", (req, res) => {
  db.collection("location")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

// fetching data from every collection having same configration
app.get("/cname/:name", (req, res) => {
  db.collection(req.params.name)
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});


// params and queryParams fudamental
// passing of queryparams is not compulsory ?subject=math 
app.get('/query/:id/:name',(req,res)=>{
let id=req.params.id;
let name=req.params.name;
let queryParamName=req.query.subject
res.send({"Paramsid":id,"Paramname":name,"queryparamsName":queryParamName})
})

//---------------------------------testing collection------------------------------------------------------

// fetching the data from collection
app.get('/test',(req,res)=>{
    db.collection('testing').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
// fetching on the basis of condition
app.get('/test/:name',(req,res)=>{
    let name=req.params.name;
    db.collection('testing').find({name:name}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})


//connection with mogodbDatabase
mongoClint.connect(mongoUrl, (err, clint) => {
  //  console.log("Clint",clint);
  if (err) throw console.log("Error While connectig...");
  db = clint.db("learnNode");
  //  console.log("db",db);
  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`express is running on port no: ${PORT}`);
  });
});

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
