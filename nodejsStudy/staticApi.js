let http = require('http');
let fs = require('fs');
const Port=8903;
let server = http.createServer((req,res)=>{
fs.readFile("db.json", "utf8", (err,data)=>{
 if(err) throw err;
 res.write(data);
 res.end();
})
})
server.listen(Port,()=>{
console.log( `Server is running on port no ${Port}`)
});