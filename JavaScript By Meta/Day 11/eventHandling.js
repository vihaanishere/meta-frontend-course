const target = document.querySelector('body')
function handleClick(){
    console.log('clicked the body')
}
target.addEventListener('click', handleClick)

function handleClick2(){
    console.log('Clicked the heading')
}
//Go to HTML Page, add onclick attribute to the heading and set it equal to 'handleClick2()'
//onclick = 'handleClick2()'
    