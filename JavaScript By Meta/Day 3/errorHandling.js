//Error Handling
//In JavaScript, we can handle errors using try-catch blocks. The code inside the try block is executed, and if an error occurs, it is caught by the catch block.
//It is also useful becuase it prevents the program from crashing when an error occurs and runs the code after the catch block. 
//Syntax
/* try {
    // code that may throw an error
} catch (error) {
    // code to handle the error
} */
//Example
try {
    console.log(x); 
}
catch (error) {
    console.log('An error occurred: ' + error.message); 
}
//We can also throw our own errors using the throw statement
//Syntax
/* throw new Error('Error message'); */
//Example
function divide(a, b){
    if(b === 0){
        throw new Error('Cannot divide by zero'); 
    }
    return a / b;
}
try {
    console.log(divide(10, 0)); 
}
catch (error) {
    console.log('An error occurred: ' + error.message);
}

//Task 1
function addTwoNums(a, b){
    try {
        if(typeof a !== 'number' || typeof b !== 'number'){
            throw new Error('Both parameters should be numbers');
        }
        else{
        console.log(a + b);
    }
}
    catch (err) {
        console.log('An error occurred: ' + err.message);
    }
}
addTwoNums(10, "10");