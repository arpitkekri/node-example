/*
var fs = require("fs");
var file = "input.txt";
fs.exists(file, function (exists) { // if file not exist return 
    if(exists) {
        fs.stat(file, function (err, stats) { // is file readable or not
            if(err) {
                throw err;
            }
            if(stats.isFile()) {
                fs.readFile(file, "utf8", function(err, data) { // read the file
                    if(err) {
                        throw err;
                    }
                    console.log(data);
                });
            }
        });
    }
});
// The above code is very deficult to read for programmers as the code increases 
// This is called callBackHell 
*/

// Solve call back hell problem
var fs = require("fs");
var file = "input.txt";
function ReadFile(err, data) {
    if(err) {
        throw err;
    }
    console.log(data);
}
function status(err, stat) {
    if(err) {
        throw err;
    }
    if(stat.isFile()) {
        fs.readFile(file, "utf8",ReadFile)
    }
}
function fileExists(exists) {
    if(exists) {
        fs.stat(file, status);
    }
}
fs.exists(file, fileExists);