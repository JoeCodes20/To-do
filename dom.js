// const addBtn = document.querySelector('.todo-button');
// const input = document.querySelector('.todo-input');
// const todoList = document.querySelector('.todo-list');

// addBtn.addEventListener('click', addTodo);
// todoList.addEventListener('click', deleteBtn);

// function addTodo(event){
//     event.preventDefault();

//     const todoDiv = document.createElement('div');
//     const newTodo = document.createElement('li');
//     const delBtn = document.createElement('button');
//     delBtn.innerHTML = '<i class="fas fa-trash"></i>'
//     newTodo.innerText = input.value;

//     todoDiv.classList.add('todo');
//     newTodo.classList.add('newTodo')
//     delBtn.classList.add('delBtn')
//     input.value= ""

//     todoDiv.appendChild(newTodo)
//     todoDiv.appendChild(delBtn)
//     todoList.appendChild(todoDiv)
// }

// function deleteBtn(e){
//     const item = e.target
//     if(item.classList[0] === 'delBtn'){
//        const todo =item.parentElement;
//        todo.classList.add('fall');
//         todo.addEventListener('transitionend', ()=>{
//             todo.remove()
//         })

//     }
// }


const input = document.querySelector('.todo-input');
const inputBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list')

inputBtn.addEventListener('click', addBtn)
todoList.addEventListener('click', delButton)

function addBtn(e){
    e.preventDefault()
    const text = 'a'
    const value = input.value
    if(value.length >= text.length){
        const todoDiv = document.createElement('div');
        const newTodo = document.createElement('li');
        const delBtn = document.createElement('button');

        newTodo.innerText= input.value

        delBtn.innerHTML= '<i class="fas fa-trash"></i>';

        todoDiv.classList.add('todoDiv')
        newTodo.classList.add('newTodo')
        delBtn.classList.add('delBtn')

        todoDiv.appendChild(newTodo)
        todoDiv.appendChild(delBtn)
        todoList.appendChild(todoDiv)
    }
    input.value= ""
}

function delButton(e){
    const item = e.target
    if(item.classList[0] === 'delBtn'){
        const todo = item.parentElement
        todo.remove()
    }
}

