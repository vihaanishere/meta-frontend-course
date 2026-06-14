//Rest Operator
//Destructuring through rest operator
const [first, ...rest] = [1,2,3,4,5,6]
console.log(first)
console.log(rest)
//Using rest in a function
function sum(...numbers) {

  return numbers.reduce((total, num) => total + num, 0);

}

console.log(sum(1, 2, 3, 4));

//Difference b/w rest and spread operator
//Spread
//Expands arrays, objects, strings into individual element
//Rest
//Gathers multiple elements into a single array/object
//Spread for combining arrays
const fruit = ['apple', 'pear', 'plum']
const berries =  ['blueberry', 'strawberry']
const fruitAndBerries = [...fruit,...berries]
console.log(fruitAndBerries)
//Spread for joing objects 
const flying = {"wings" : 2}
const car = {"wheel": 4}
const flyingcCar = {...flying, ...car}
console.log(flyingcCar)

//Adding new elements in arrays using spread
let veggies = ['onion', 'parsley', 'carrot', 'beetroot']
veggies = [...veggies, 'carrot', 'beetroot']
console.log(veggies)
//Seperate opperator but for java
var greeting = "Hello"
var arrayOfLetters = [...greeting]
console.log(arrayOfLetters)

//Copying objects with Spread
var car1 = {"color" : "red",
  "speed" : 200,
}
var car2 = {...car1}
car2.speed = 201
console.log(car2)