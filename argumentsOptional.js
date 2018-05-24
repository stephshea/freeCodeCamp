function addTogether() {
    var numOne = arguments[0];
    function addTwo(numTwo) {
        return typeof(numTwo) === 'number' ? numOne + numTwo : undefined;
    }
    return typeof(numOne) !== 'number' ? undefined : (arguments.length === 2 ?       addTwo(arguments[1]) : addTwo);
}

addTogether(2,3);


function addTogether() {
    var numOne = arguments[0];
    function addTwo(numTwo) {
        return typeof(numTwo) === 'number' ? numOne + numTwo : undefined;
    }
    if (typeof(numOne) !== 'number') {
        return undefined;
    }
    if (arguments.length === 2) {
        return addTwo(arguments[1]);
    }
    
    return addTwo;
}

function addTogether() {
    var numOne = arguments[0];
    if (typeof(numOne) !== 'number') {
        return undefined;
    }
    if (arguments.length === 2) {
        return typeof(arguments[1]) === 'number' ? numOne + arguments[1] : undefined;
    }
    
    return function() {
        return typeof(arguments[0]) === 'number' ? numOne + arguments[0] : undefined;
    };
}