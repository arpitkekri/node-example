/* 
*Without use of callback (simple program)
*if file is too big take some time 
*/

// var fs = require("fs");
// console.log("Program Started");
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("Program Ended");


// By using callback function
var fs = require("fs");
console.log("Program Started");
fs.readFile("input.txt", 
function (err, data) {
    if(err) return console.log(err); 
    console.log(data.toString());
}
);
console.log("Program Ended"); // executed while reading file then data will be printed