// function example(){
//     counsole.log("This is line one")
//     counsole.log("This is line two")
//     counsole.log("This is line three")
//     example()
// }
//The above function will run an infinite loop 
//Fix: 
var counter = 3
 function example(){
     console.log("This is line one")
     console.log("This is line two")
     console.log("This is line three")
    counter--
    if(counter === 0){
        return
    }
    example()
     
 }
example()


// //Task
// Recursion involves breaking a problem into smaller sub-problems.

// Base cases prevent infinite recursion and provide a stopping condition.

// Recursive cases define the problem in terms of smaller instances of itself.
function fib(n) {
    //Base
    if (n===0) return 0;
    if (n === 1) return 1;
    //Return the intended
    return fib(n-1)+fib(n-2)
}
console.log(fib(10))
