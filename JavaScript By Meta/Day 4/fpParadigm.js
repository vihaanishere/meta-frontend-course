//In functional programming the data and functions are serprated, the data is actually assigned outside the function and used afterwards
//Ex-
var a = 5
var b = 10
function mult(firstNum, secondNum){
    return firstNum*secondNum
}
console.log(mult(a, b))

//object-oriented programming (OOP)
var virtualPet = {
    sleep : true,
    nap: function(){
        this.sleep = false
    }
}
console.log(virtualPet.sleep)
virtualPet.nap()
console.log(virtualPet.sleep)

//Functional Programming paradigm works by keeping the data and functionality separate. It's counterpart, OOP, works by keeping the data and functionality grouped in meaningful objects.

//Concepts Of FP
//First class functions
//Java has those values which can be i) Passed to another function, ii) Saved in a variable, iii) Returned from another function
//Hence a function is just another value like a string or number 
//Usage of value from one function into another function
function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())

//This works because functions in JavaScript are truly first-class citizens, which can be assigned to variable names and passed around just like I would pass around a string, a number, an object, etc.
//Higher-order function
//It accepts other functions as arguement (Ex- addTwoNums(getNumber(), getNumber()))


//Pure functions and side-effects 
