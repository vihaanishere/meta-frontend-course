//Objects
//Objects are collections of properties, and a property is an association between a name (or key) and a value.

//Creating an Object
//Syntax
/* var objectName = {
    key1: value1,
    key2: value2,
    key3: value3
} */
//Using dot notation to add properties to an object
/* objectName.key4 = value4;
objectName.key5 = value5; */
//Example
var assistantManager = {
    movement: 4,
    socialskill: 3,
    technicalskill: 5
}
assistantManager.leadership = 4;
console.log(assistantManager);
//We can also use bracket notation to add properties to an object
assistantManager['communication'] = 4;
console.log(assistantManager);
console.log(assistantManager.movement);//Accessing the properties of an object using dot notation
//Using bracket notation to access the properties of an object
console.log(assistantManager['socialskill']);

