let fs = require('fs');
//data is written in file if file is not created then it create file or else if file is created then overwrite the data what is written there.
// fs.writeFile("demo.txt","hello world",()=>{console.log("data is written")})



// fs.appendFile()//it append the data if file is not created then create file if already created then it start writing in file
// fs.appendFile("appendDemo.txt",`${Math.floor(Math.random()*1000)} data added \n`,"utf-8",(err)=>{
//  if(err) throw err;
//  console.log("data written successfully in file");
// })

//if you not pass utf-8 then it returns the no
// fs.readFile("appendDemo.txt","utf-8",(err,data)=>{
//  if(err) throw err;
//  console.log("data in file is",data);
// })


// fs.rename("demo.txt","writeFile.txt",(err)=>{
//  if(err)throw err;
//  console.log("file renamed")
// })

fs.unlink("writeFile.txt",(err)=>{
 if(err) throw err;
 console.log("file deleted successfully")
})