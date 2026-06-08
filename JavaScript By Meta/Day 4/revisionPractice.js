//typeof of different data types
// console.log(typeof "hello") //string
// console.log(typeof 42) //number
// console.log(typeof true) //boolean
// console.log(typeof undefined) //undefined
// console.log(typeof []) //Object
// console.log(typeof {}) //Object
// console.log(typeof null) //Object 

//Hence Arrays are considered as object and most importantly "null" is also an object 

//Defensive Checks
//Checking if a number
var x = 30
if (typeof x !== "number"){
    throw new Error("Must be a number")
}
else{
    console.count(x)
}
//Checking if its a string
var y = "This is a string"
if(typeof y !== "string"){
    throw new Error("Must be a string ")
}
else{
    console.log(y)
}
//Checking if its an array
var z = [12, "Array", "list", "of", "python"]
if(!Array.isArray(z)){ //This line is used to check if z is not an array
    throw new Error("It should be an array")
}
else{
    console.log(z)
}
var p = {test: "object"}
//Checking if its an object but not null 
if(typeof p !== "object" || p === null ){
    throw new Error("It should be an object")
}
else{
    console.log(p)
}


//.map
var numbers = [1, 2, 3];
var doubled = numbers.map(function(num){
    return num * 2
});
console.log(doubled);

//.find()
var users = [{id:1,name:"Ada"}, {id:2, name:"Grace"}]
var found = users.find(function(user){
    return user.id == 2;
})
console.log(found)
