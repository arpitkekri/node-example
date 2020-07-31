console.log("This is module");
function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

// module.exports = average; its only for single export
module.exports = {
    avg: average,
    name : "Arpit",
    repo : "Github"
}