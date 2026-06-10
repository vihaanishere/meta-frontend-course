//Protype is an model from which its other forms are made
//Similarly works for java and is called inheritance
var bird = {
    canFly:true,
    haveWings:true,
    haveFeather:true
}
var eagle = Object.create(bird)
console.log(eagle) //It wont show any properties but it inherits all the properties from bird
console.log(eagle.canFly)
console.log(eagle.haveFeather)
console.log(eagle.haveWings)

var penguin = Object.create(bird)
penguin.canFly = false;
console.log(penguin.canFly) 
console.log(penguin.haveWings) 
console.log(penguin.haveFeather)
 
