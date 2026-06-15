//Adding an h2 element in a webpage by manupilating DOM
const h2 = document.createElement('h2')
h2.innerText = "This is an H2 Heading"
h2.setAttribute("id", "sub-heading")
h2.setAttribute("class", "secondary")
h2
document.body.appendChild(h2)


//Selectors
document.querySelector('p')
document.querySelector('a')
document.querySelectorAll('p')
document.getElementById('heading')
document.getElementsByClassName('txt')
