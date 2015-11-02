/**
 * Created by colinmiller on 11/1/15.
 */
var result = 0;

//decision logic for math function
function mathCalculation (type, numOne, numTwo){
    numOne = Number(numOne);
    numTwo = Number(numTwo);
    switch(type){
        case "add":
            return mathsAdd(numOne, numTwo);
            break;
        case "subtract":
            return mathsSubtract(numOne, numTwo);
            break;
        case "multiply":
            return mathsMultiply(numOne, numTwo);
        case "divide":
            return mathsDivide(numOne, numTwo);
            break;
        default:
            console.log("Error! Invalid data input. Check the data roles in the html buttons");
    }
}


//utility math functions, firing based on logic above
function mathsAdd(numOne, numTwo) {
    result = numOne + numTwo;
    return result;
}

function mathsSubtract(numOne, numTwo){
    result = numOne - numTwo;
    return result;
}

function mathsMultiply(numOne, numTwo){
    result = numOne * numTwo;
    return result;
}

function mathsDivide(numOne, numTwo){
    result = numOne / numTwo;
    return result;
}

module.exports = mathCalculation;