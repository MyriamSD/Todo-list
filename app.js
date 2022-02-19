const form = document.querySelector('#toDo')
const listInput = document.querySelector('input[name="TodoItem"]')
// const list = document.querySelector('ol ')
const list = document.querySelector('ol')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const newItem = makeListItem (
        listInput.value += '',
      
    )
    list.append(newItem);
});

function makeListItem (text) {
    const task = document.createElement('li')
    const remove = document.createElement('button')
    task.innerText = text;
    remove.innerHTML = 'Remove'
    remove.className = 'btn'

    task.append(remove)
    

    return task;
}


list.addEventListener('click', function(e) {
    // e.preventDefault()
    console.log(e)
    if (e.target.localName === 'li') {
    e.target.style.textDecorationLine = 'line-through';
    }
    // const e.target = clicked
    // console.log(clicked.classname)

    // const taskItems = document.querySelectorAll('.li')
    // for (let click of clicked){
    //     click.classname = 'complete'
    // } 
})

list.addEventListener('click', function(e) {
    // e.preventDefault()
    console.log(e)
    if (e.target.localName === 'button') {
    e.target.parentNode.remove()
    }
    // const e.target = clicked
    // console.log(clicked.classname)

    // const taskItems = document.querySelectorAll('.li')
    // for (let click of clicked){
    //     click.classname = 'complete'
    // } 
})

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`
}

const labl = document.getElementById('label');

setInterval(function(){
    labl.style.color = randomRGB()

}, 500)

// const results = document.querySelector('#results')

// form.addEventListener('submit', function(e){
//     e.preventDefault()
//     const newLogo = makeLogo (
//         brandInput.value,
//         colorInput.value,
//         fontSizeInput.value
//     )
//     results.append(newLogo);
// });

// function makeLogo(text, color, size) {
//     const logo = document.createElement('h2')
//     logo.innerText = text;
//     logo.style.color = color;
//     logo.style.fontSize = size + 'px';

//     return logo;
// }