const addBtn = document.querySelector("#addBtn");
const taskInput = document.querySelector("#taskInput");
const ul = document.querySelector(".todo-list");

// addbtn click handler
addBtn.addEventListener("click", () => {
  renderNewList();
});

//input enter handler
taskInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    renderNewList();
  }
});

// render newList
function renderNewList() {
  if (taskInput.value && taskInput.value.trim() !== "") {
    const newList = `
        <li class="todo-item">
          <span class="item">${taskInput.value}</span>
          <button class="closeBtn">X</button>
        </li>
      `;

    ul.insertAdjacentHTML("beforeend", newList);

    const closeBtn = document.querySelector(".closeBtn");

    taskInput.value = "";
    taskInput.focus();
  }
}
