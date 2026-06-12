//Objects are not iterable 
//Although arrays are iterable
const color = ["blue", "red", "purp"]
for(var colors of color){
    console.log(colors)
}

//In order to iterate objects we can use some built in methods 
//Object.keys()
var car = {speed : 200,
    color: "red"
}
console.log(Object.keys(car))
var key = Object.keys(car)
for (var sep of key){
    console.log(sep)
}

console.log(Object.values(car))
var valu = Object.values(car)
for (var val of valu){
    console.log(val)
}

var ent = Object.entries(car)
console.log(ent)




var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

var x = Object.keys(clothingItem)
for (var i of x){
    console.log(i, ":", clothingItem[i])
}

// Task
// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDairy(){
    for(var i of dairy) {
        console.log(i)
    }
}
logDairy()
// WRITE YOUR CODE HERE - Create the logDairy function and use a for...of loop to log each item in the dairy array

// Task 2
// WRITE YOUR CODE HERE - Create the birdCan function and use a for...of loop to log bird object's own properties
const animal = {  
    canJump: true  
};  

const bird = Object.create(animal);  
bird.canFly = true;  
bird.hasFeathers = true;
function birdCan() {
    for (var i of Object.keys(bird)) {
        console.log(i + ":" + bird[i])
    }
}
birdCan()
// Task 3
// WRITE YOUR CODE HERE - Create the animalCan function and use a for...in loop to log all bird properties, including inherited ones
function animalCan() {
    for (var i in bird) {
        console.log(i + ":" + bird[i])
    }
}
animalCan()