//Loops
//For Loop
//Syntax
/* for(variable; condition; change in variable){
    code
} */
//For the variable we use i as a counter but we can use any variable name
//Change in variable can be increment or decrement
//Example
for(var i = 0; i < 5; i++){
    console.log(i);
}
//Here i++ means i = i + 1
//Similarly we can use i-- for decrementing the value of i

//While Loop
//Syntax
//In while loop the counter variable is primarily declared outside the loop and then we can use it in the condition and change it inside the loop
/* while(condition){
    code
} */

var j = 0;
while(j < 5){
    console.log(j);
    j++;
}

//Practice Questions
//Task 1
/* Write a "for" loop that will perform exactly the same repetitive code as this:
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
    console.log(5)
    console.log('Counting completed!')
*/
for(var i = 1; i<=5; i++){
    console.log(i);
}
console.log('Counting completed!');

//Task 2
/*Write a "while" loop that will perform exactly the same repetitive code as this:
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
    console.log('Countdown finished!')*/
var i = 5
while(i>0){
    console.log(i)
    i--;
}
console.log('Countdown finished!');

//Nested Loops
//We can also use loops inside another loop which is called nested loops
//Example
//Task 1
//Write a nested loop to print 2 weeks of days
for(var week = 1; week <= 2; week++){
    console.log('Week ' + week);
    for(var day = 1; day <= 7; day++){
        console.log('  Day ' + day);
    }
}

//Task 2
//Expected Output
/* Gold medal
Silver medal
Bronze medal
4
5
6
7
8
9
10 */
for(var i = 1; i <= 10; i++){
    if(i === 1){
        console.log('Gold medal');
    }
    else if(i === 2){
        console.log('Silver medal');
    }
    else if(i === 3){
        console.log('Bronze medal');
    }
    else{
        console.log(i);
    }
}
//Task 3
//Same output as above but using switch statement
for(var i = 1; i <= 10; i++){
    switch(i){
        case 1:
            console.log('Gold medal');
            break;
        case 2:
            console.log('Silver medal');
            break;
        case 3:
            console.log('Bronze medal');
            break;
        default:
            console.log(i);
    }   
}
