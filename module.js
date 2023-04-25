let addmessage = document.querySelector('.message'),
addbutton = document.querySelector('.add'),
todo = document.querySelector('.todo');

let todolist = [];

if (localStorage.getItem('todo')){
    todolist = JSON.parse(localStorage.getItem('todo'));
    displaymessages();
}

addbutton.addEventListener('click', function(){

    let Newtodo = {
        todo: addmessage.value,
        checked: false,
        important: false
    }

todolist.push(Newtodo);
displaymessages();
localStorage.setItem('todo', JSON.stringify(todolist))

})

function displaymessages(){
    let displaymessage = '';
    todolist.forEach(function(item, i){
        displaymessage += `
        <li>
            <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
            <label for='item_${i}'>${item.todo}</label>
        </li>
        `;
        todo.innerHTML=displaymessage;
    });
}
