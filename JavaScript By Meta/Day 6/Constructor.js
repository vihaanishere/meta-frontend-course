//new Operator 
//Use to build a new instance by using some pre-built functions or function assigned in the code 
//Not all pre built function requires us to create a new instance (Ex- Math function)
console.log(new Date())
//Use of Constructor
function icecream(flavor){
    this.flavor = flavor
    this.meltIt = function(){
        console.log("Ice cream of " + flavor + " has melted")
    }
}
let VanillaIcecream = new icecream("Vanilla")
let ButterscotchIcecream = new icecream("Butterscotch")
console.log(VanillaIcecream)
console.log(ButterscotchIcecream)
console.log(VanillaIcecream.meltIt())
console.log(ButterscotchIcecream.meltIt())



//Built-in function which requires to build new instance 
console.log(new Date());
console.log(new Error());
console.log(new Map());
console.log(new WeakMap());
console.log(new Set());
console.log(new WeakSet());
