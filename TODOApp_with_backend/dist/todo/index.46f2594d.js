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
    if (event.target.tagName === "BUTTON") event.target.parentElement.remove();
}

//# sourceMappingURL=index.46f2594d.js.map
