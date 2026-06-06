//Functions
//When want to repeat some set of instructions again and again in the code we use functions
//Syntax
/* function functionName(){
    code
} */
//Example
function sumtwo(){
    var a = 10;
    var b = 20;
    var sum = a + b;
    console.log(sum);
}
sumtwo(); //Calling the function to execute the code inside the function
//Parameters
//We can also pass some values to the function to perform some operations on those values
//Syntax
/* function functionName(parameter1, parameter2){
    code
} */
//Example
function sum(a, b){
    var sum = a + b;
    console.log(sum);
}
sum(10, 20); //Passing values to the function while calling it
