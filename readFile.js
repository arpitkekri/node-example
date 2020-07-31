/* 
*Without use of callback (simple program)
*if file is too big take some time 
*/
// Synchronous or blocking
// - line by line execution
const fs = require("fs");
console.log("Program Started");
let data = fs.readFileSync('input.txt', "utf-8");
data = data.replace("My name is input.txt", "I am a new file");
console.log(data.toString());
console.log("Creating a new file...");
fs.writeFileSync("newFile.txt", data);
console.log("Program Ended");
 
// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire
// By using callback function
const newFs = require("fs");
console.log("New Program Started");
newFs.readFile("input.txt", "utf-8",
function (err, data) {
    if(err) return console.log(err); 
    console.log(data.toString());
});
console.log("Program Ended"); // executed while reading file then data will be printed
