console.log("User 1 made a request");
console.log("Database operation takes 1 second");
setTimeout(function(){
    console.log("Queried the database and delivered data for user1 in 1 seconds");
}, 1000);
// console.log("Data delivered to the user");

console.log("User 2 made a request");
console.log("Database operation takes 5 second");
setTimeout(function(){
    console.log("Queried the database and delivered data for user2 in 5 seconds");
}, 5000);
// console.log("Data delivered to the user");

console.log("User 3 made a request");
console.log("Database operation takes 3 second");
setTimeout(function(){
    console.log("Queried the database and delivered data for user3 in 3 seconds");
}, 3000);
// console.log("Data delivered to the user");

// function callaftersometime(){
//     console.log("Queried the database and delivered data in some seconds");
// }

function mainFunction(callback) {
    var someData  = "Here is some data";
    callback(someData);
}

mainFunction(function(a){
    console.log(a);
})

mainFunction(function(b){
    console.log(b);
});



function addNum (a, b, addNums) { // addNums use as a callback
    setTimeout(function(){
        addNums(a+b);
    },2000);
}
addNum(4, 5, function(c){
    console.log(c);
});