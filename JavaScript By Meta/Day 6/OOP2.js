//Principles of OOP
//Inheritance
//1) There is a base class of a "thing".
//2) There are one or more sub-classes of "things" that inherit the properties of the base class (sometimes also referred to as the "super-class")
//3) There might be some other sub-sub-classes of "things" that inherit from those classes in point 2.

/* Example
class Animal {  ...class code here...  };
class Mammal extends Animal {  ...class code here...  };
class Elephant extends Mammal {  ...class code here...  };
*/


// Encapsulation
//Making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code.

//Example: "abc".toUpperCase()


// Abstraction 
//Extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept. 


// Polymorphism
//Allows developers to build objects that can share functionality but override it as needed.
/*Example:
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!";
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!";
    }
}
In the above code two type of functions represents two similar yet different context items
When we combine these two output in one function thats called polymorphism


function ringTheBell(thing) {
    console.log(thing.bell());
}



*/
class Bird {
    useWings() {
        console.log("Flying!");    //Here we are making class bird
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings();      //Super implise that this class will use the parent class's useWings() while executing hence "Flying!"" will be used
        console.log("Barely flapping!");
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!");
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"