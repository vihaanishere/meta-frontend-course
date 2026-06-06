//Arrays
//Arrays are used to store multiple values in a single variable. They are ordered, mutable, and can contain duplicate values.
//Syntax
/* var arrayName = [value1, value2, value3, ...] */
//Example
var train1 = ["wheat", "barley", "potatoes", "rice"];
for(var i = 0; i < train1.length; i++){
    console.log(train1[i]);
}
//Task
function letterFinder(word,match){
    for(var i = 0; i<word.length; i++){
        if(word[i] == match){
            console.log('Found the', match, 'at', i);
        }
        else{
            console.log('---No match found at', i);
        }  
    }
}
letterFinder("test","t");

//Push and Pop Methods
//Push method is used to add an element at the end of the array
train1.push("maize");
console.log(train1);
//Pop method is used to remove the last element from the array
train1.pop();
console.log(train1);
