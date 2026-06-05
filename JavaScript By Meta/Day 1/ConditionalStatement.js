//Conditional Statements
//if else statement
/* 	if (<condition>){
		<code>
	} else if (<second-condition>){
		<code>
	} else if (<third-condition>){
		<code>
	} else{
		<code>
}
        */
var age = 18;
if (age < 18) {
  console.log("You are a minor.");
} else if (age === 18) {
    console.log("Congratulations on reaching adulthood!");
} else {
    console.log("You are an adult.");
}

//Switch statement
/* 	switch (<expression>){
        case <value1>:
            <code>
            break;
        case <value2>:
            <code>
            break;
        case <value3>:
            <code>
            break;
        default:
            <code>
    }     */


var day = "Monday";
switch (day) {
    case "Monday":
        console.log("It's Monday.");
        break;
    case "Tuesday":
        console.log("It's Tuesday.");
        break;
    case "Wednesday":
        console.log("It's Wednesday.");
        break;
    case "Thursday":
        console.log("It's Thursday.");
        break;
    case "Friday":
        console.log("It's Friday.");
        break;
    case "Saturday":
        console.log("It's Saturday.");
        break;
    case "Sunday":
        console.log("It's Sunday.");
        break;
    default:
        console.log("It's not a day.");
}
