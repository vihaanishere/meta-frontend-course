const jsonStr = '{"greetings": "Hello"}'
var aPlainObj = JSON.parse(jsonStr)
aPlainObj.greetings = "hi"
console.log(aPlainObj)
var data = {
    FirstName : "XYZ",
    LastName : "ABC"
}
console.log(JSON.stringify(data))
