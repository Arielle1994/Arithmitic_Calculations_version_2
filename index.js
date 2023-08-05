const express= require('express');
const app=express();
const arithmeticFunctions=require("./arithmeticFunctions");

app.use(express.urlencoded({extended:false}));


// take the operator input
//const operator = prompt('Enter operator ( either +, -, * or / ): ');//

// take the operand input
//const number1 = parseFloat(prompt('Enter first number: '));
//const number2 = parseFloat(prompt('Enter second number: '));


app.post('/math/:operator_type',function(req,res){
    const{operator,number1, number2}=req.body;
    //let operator = req.params.operator_type;
    //const number1=parseFloat(prompt(number1));
    //const number2=parseFloat(prompt(number2));
        switch(operator) {
            case 'add':
                result = arithmeticFunctions.add(number1,number2);
                
                console.log(`${number1} + ${number2} = ${result}`);
                break;
            case 'sub':
                result = arithmeticFunctions.sub(number1,number2);
                console.log(`${number1} - ${number2} = ${result}`);
                break;
            case 'multiply':
                result = arithmeticFunctions.multiply(number1,number2);                
                console.log(`${number1} * ${number2} = ${result}`);
                break;
            
            case 'divide':
                result = arithmeticFunctions.divide(number1,number2);
                console.log(`${number1} / ${number2} = ${result}`);
                break;
        
            default:
                console.log('Invalid operator');
                res.status(400).send('Invalid operator');
                break;
        }
   // res.json({result});
})


app.listen(3000,function(){
    console.log('server running at port 3000');
})