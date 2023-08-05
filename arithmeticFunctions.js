/*add (value_1,value_2):This will return the addition of the two numbers passed as parameeter.*/

function add (number1, number2){
    
    return parseFloat(number1) + parseFloat(number2);
}


//sub(value_1,value_2): This will return the subtraction of the two numbers passed as parameter.//

function sub (number1, number2){
    return number1 - number2;
}
//multiply(value_1,value_2): This will return the multiplication of the two numbers passed as parameter.//

function multiply (number1, number2){
    return number1 * number2;
}

//divide(value_1,value_2): This will return the dicision of the two numbers passed as parameter.//

function divide (number1, number2){
    if (number2===0){
        throw new Error("Division by zero is not allowed");
    }
    return number1 / number2;
}

//Export the functions

module.exports={
    add,
    sub,
    multiply,
    divide,
}