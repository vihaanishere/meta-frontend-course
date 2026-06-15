//We use prompt() method to take user input
let answer = prompt('What is your name: ')
if(typeof(answer) == "String"){
    var h1 = document.createElement('h1')
    h1.innerText = answer
    document.body.innerText = ''
    document.body.appendChild(h1)
}


var h1 = document.createAttribute('h1')
h1.innerText = "This is a heading"
var input = document.createElement('input')
input.setAttribute('type', 'text')


document.body.innerText = '';
document.body.appendChild(h1)
document.body.appendChild(input)

input.addEventListener('change', function(){
    h1.innerText = input.value
})
