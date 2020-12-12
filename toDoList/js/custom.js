
let todos = [];

let addTodoForm = document.querySelector('#addTodoForm');

let listGroup = document.querySelector(".list-group");

function createListItem(todoValue, todoIndex) {
    let li = document.createElement("li");
    li.setAttribute('class','list-group-item d-flex justify-content-between');
 
    if(todos[todoIndex].compeleted){
        li.classList.add("bg-secondary");
       }

    li.addEventListener("click",()=>{
         if(todos[todoIndex].completed){
          li.classList.remove("bg-secondary");
          todos[todoIndex].completed = false;
         }else{
          li.classList.add("bg-secondary");
          todos[todoIndex].completed = true;
         }

         localStorage.setItem('todos',JSON.stringify(todos));

    });

    let span = document.createElement("span");
    span.innerHTML = todoValue;
    // li.innerHTML = todoValue;
   
    let icon = document.createElement("i");
    icon.setAttribute("class","fas fa-trash-alt");

    icon.addEventListener("click",(event)=>{
        event.stopPropagation();
        event.target.parentElement.remove();

        todos.splice(todoIndex, 1);

        localStorage.setItem('todos',JSON.stringify(todos));
    });
    
    li.appendChild(span)
    li.appendChild(icon);

    return li;
}

function renderTodos(todos){
    todos.forEach((todo,index) => {
     let li = createListItem(todo.value,index);
     listGroup.appendChild(li);
    });
}

let storedTodos = localStorage.getItem("todos");

if(storedTodos){
 let parsedStoredTodos = JSON.parse(storedTodos);
 todos = parsedStoredTodos;
 renderTodos(todos);
}

addTodoForm.addEventListener("submit",function(event){
    event.preventDefault();

    let todoValue = addTodoForm.addTodo.value;

    todos.push({
        value:todoValue,
        completed:false
    })
 
    addTodoForm.addTodo.value = '';
  
    localStorage.setItem('todos',JSON.stringify(todos));

    let li = createListItem(todoValue,todos.length-1);
    listGroup.appendChild(li);
})