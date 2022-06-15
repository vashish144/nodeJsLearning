const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");
const port = 5000;

const AuthController=require("./controller/AuthController")
app.use(cors());
app.use('/api/auth',AuthController)

app.listen(port,()=>{
 console.log(`app is listening on port no: ${port}`);
});