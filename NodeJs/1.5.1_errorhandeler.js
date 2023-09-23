const errorHandeler = (error) =>{
    const {name, message, stack} = error;
    console.log(name, message)
    // console.log(stack)
}

module.exports = errorHandeler;

// module.export ekta object. so eta object er properties follow korbe
/*
module.exports.errorHandeler = errorHandeler;
module.exports.two = two;
or module.exports = {errorhandeler, two};

const {errorHandeler, two} = require(./errorHandeler.js)

*/