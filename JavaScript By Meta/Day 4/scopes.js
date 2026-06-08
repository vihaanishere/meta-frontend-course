//Scopes in java
//Scopes are of two type: 1) Global Scope, 2) Local Scope
//The varaibles assigned outside a function are called global scopes and can be used inside the function as well
//The variables assigned inside a function are called local scope and are only used inside the fuction
var health = 10 //Global Variable
function heal(){
    var amount = 10; //Local Variable
    var healed  = health + amount
    return healed
}
console.log(heal())

//Another type of scope made in ES6 is block scope
//We use let or const for making block scopes
//These are variables which can be only used in the block that they are assigned in
//Ex-
var color = "red";
if(color == "red"){
    let color = "blue"
    console.log(color)
}
console.log(color)
