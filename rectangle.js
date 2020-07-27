module.exports = (x, y, callback) => {
    if(x <= 0 || y <= 0) {
        setTimeout(() => 
        callback(new Error("Rectangle dimensions should be greater than zero: x = " + x + ", and y = " + y), null), 1000); // delay of 1000ms
    }
    else {
        setTimeout(() => 
            callback(null, {
                perimeter: () => (2*(x+y)),
                area: () => (x*y)
            }), 
            2000); // delay of 2000ms
    }
}


// module.export or simply write export both are same thing