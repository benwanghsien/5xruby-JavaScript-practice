const addBtn = document.querySelector("#addBtn");
const taskInput = document.querySelector("#taskInput");
const todoList = document.querySelector(".todo-list");
// addbtn click handler
addBtn.addEventListener("click", ()=>{
    renderNewList();
});
//input enter handler
taskInput.addEventListener("keypress", (e)=>{
    if (e.keyCode === 13) renderNewList();
});
// ul event handler
todoList.addEventListener("click", (e)=>{
    removeTodo(e);
});
todoList.addEventListener("click", (e)=>{
    finishTodo(e);
});
// render new list item
function renderNewList() {
    if (taskInput.value.trim() !== "") {
        const newList = `
        <li class="todo-item">
          <span class="item">${taskInput.value}</span>
          <button class="closeBtn">X</button>
        </li>
      `;
        todoList.insertAdjacentHTML("beforeend", newList);
        taskInput.value = "";
        taskInput.focus();
    }
}
// remove todo list item
function removeTodo(event) {
    if (event.target.classList.contains("closeBtn")) event.target.parentElement.parentElement.remove();
}
// finished todo list item
function finishTodo(event) {
    if (event.target.classList.contains("finishBtn")) event.target.parentElement.parentElement.classList.toggle("finished");
}

//# sourceMappingURL=index.c50a9b83.js.map
