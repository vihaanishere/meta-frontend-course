//VAR VARIABLE
console.log(hub)
var hub;
//Notice how it still reads hub as a available but undefined variable'
// console.log(name) (wont work, hence we cant access a let variable before its used)


//LET VARIABLE
let name;
// let name = "Vihaan"; This wont work either because u cant re-declare a let variable 
name = "Vihaan";
console.log(name)


//CONST VARIABLE
// const id; this wont work because it requires you to declare and assign value to the variable at the same time
const id = 10;
console.log(id)
// const id = 5;
// console.log(id) This wont work because we cant change the value of the const variable once assigned
