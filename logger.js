var url = 'http:/mylogger.io/log';
// module.exports.endPoint = url;

module.exports.logger = function (msg) { 
    console.log(msg);
};