const fs = require('fs');
const nameOfFile = process.argv[2] || 'Project';

fs.mkdirSync(nameOfFile);
fs.writeFileSync(`${nameOfFile}/index.html`, "Hello")
fs.writeFileSync(`${nameOfFile}/style.css`, "Hi")
fs.writeFileSync(`${nameOfFile}/script.js`, "Joel")

