//String Object Cheatsheet

//String Object Properties
//String.length - returns the length of a string
var str = "Hello, World!";
console.log(str.length);
//String Object Methods
//String.charAt() - returns the character at a specified index in a string
console.log(str.charAt(0));
//String.indexOf() - returns the index of the first occurrence of a specified value in a string
console.log(str.indexOf("o"));
//String.lastIndexOf() - returns the index of the last occurrence of a specified value in a string
console.log(str.lastIndexOf("o"));
//String.concat() - concatenates two or more strings and returns a new string
var str1 = "Hello, ";
var str2 = "World!";
console.log(str1.concat(str2));
//String.toUpperCase() - returns the calling string value converted to uppercase
console.log(str.toUpperCase());
//String.toLowerCase() - returns the calling string value converted to lowercase
console.log(str.toLowerCase());
//String.split() - splits a string into an array of substrings, and returns the new array
console.log(str.split(", "));
