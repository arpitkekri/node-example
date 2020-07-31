/* 
*Without use of callback (simple program)
*if file is too big take some time 
*/

const fs = require("fs");
console.log("Program Started");
let data = fs.readFileSync('input.txt', "utf-8");
data = data.replace("My name is input.txt", "I am a new file");
console.log(data.toString());
console.log("Creating a new file...");
fs.writeFileSync("newFile.txt", data);
console.log("Program Ended");

/*
// By using callback function
const fs = require("fs");
console.log("Program Started");
fs.readFile("input.txt", 
function (err, data) {
    if(err) return console.log(err); 
    console.log(data.toString());
}
);
console.log("Program Ended"); // executed while reading file then data will be printed
*/