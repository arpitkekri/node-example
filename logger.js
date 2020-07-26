var url = 'http:/mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);
}

module.exports.message = log("This is the message to print!!");
// module.exports.endPoint = url;