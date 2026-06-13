//forEach() Method
//Its basically a calling method that will work on each array item
const fruit = ["kiwi", "apple", "mango", "pear"]
function appendIndex(fruit, index){
    console.log(`${index}. ${fruit}`)

}
fruit.forEach(appendIndex)


//filter() Method 
//It filters your arrays based on a specific test. Those array items that pass the test are returned.
const nums = [0,10,20,30,40,50,60]
const result = nums.filter(function(num) {
    return num > 20;
})
console.log(result)
//Here num simply represents the parameter for individual array elements being checked by the callback function.


//map() Method
console.log(nums.map(function(num){
    return num/10
}))



