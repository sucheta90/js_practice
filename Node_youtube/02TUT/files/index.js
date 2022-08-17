const fs = require('fs');
const path = require('path');

// read file
fs.readFile(path.join(__dirname, 'starter.txt'),'utf8', (err,data)=>{
    if(err) throw err;
    console.log(data);
}) 

console.log('hello');

// exit on uncaugth errors
process.on('uncaughtException', err =>{
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})

// write file
fs.writeFile(path.join(__dirname, 'replt.txt'),'NICE TO MEET YOU',(err)=>{
    if(err) throw err;
    console.log('write complete');
}) 

// apend file
fs.appendFile(path.join(__dirname, 'text.txt'),'Testing text',(err)=>{
    if(err) throw err;
    console.log('Append complete');
}) 