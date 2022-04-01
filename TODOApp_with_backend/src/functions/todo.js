import axios from "axios";

const API_BASE = "https://todoo.5xcamp.us";
const addBtn = document.querySelector("#addBtn");
const taskInput = document.querySelector("#taskInput");
const todoList = document.querySelector(".todo-list");

// addbtn click handler
addBtn.addEventListener("click", () => {
  renderNewList();
});

//input enter handler
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    renderNewList();
  }
});

// ul event handler
todoList.addEventListener("click", (e) => {
  removeTodo(e);

  finishTodo(e);

  updateTodoBtn(e);
});

// window loaded handler
window.addEventListener("load", () => {
  getTodo(`${API_BASE}/todos`);
});

// render new list item
function renderNewList() {
  if (taskInput.value.trim() !== "") {
    const todoData = {
      todo: {
        content: taskInput.value,
      },
    };

    postTodo(`${API_BASE}/todos`, todoData);

    const newList = `
        <li class="todo-item">
          <span class="item">${taskInput.value}</span>
          <div class="btn-group">
            <button class="updateBtn">+</button>
            <button class="finishBtn">O</button>
            <button class="closeBtn">X</button>
        </div>
        </li>
      `;

    todoList.insertAdjacentHTML("beforeend", newList);

    taskInput.value = "";
    taskInput.focus();
  }
}

// remove todo list item
function removeTodo(event) {
  if (event.target.classList.contains("closeBtn")) {
    const id = event.target.parentElement.parentElement.dataset.todo;
    deleteTodo(id);

    event.target.parentElement.parentElement.remove();
  }
}

// finished todo list item
function finishTodo(event) {
  const id = event.target.parentElement.parentElement.dataset.todo;
  if (event.target.classList.contains("finishBtn")) {
    toggleTodo(id);
    event.target.parentElement.parentElement.classList.toggle("finished");
  }
}

// update todo list item
function updateTodoBtn(event) {
  const id = event.target.parentElement.parentElement.dataset.todo;
  if (event.target.classList.contains("updateBtn")) {
    const input = document.createElement("input");
    const span = event.target.parentElement.previousElementSibling;
    const originalText = span.innerText;
    input.value = span.innerText;
    input.classList.add("input-update");
    input.addEventListener("blur", (e) => {
      span.innerText = e.target.value;
      input.replaceWith(span);
      if (originalText !== span.innerText) {
        const data = {
          todo: {
            content: span.innerText,
          },
        };

        updateTodo(id, data);
      }
    });

    input.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        e.target.blur();
      }
    });
    span.replaceWith(input);
    input.focus();
  }
}

// connect with server
function postTodo(url, data) {
  const token = localStorage.getItem("token");

  axios
    .post(url, data, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      // TODO del
      console.log("新增成功");
    })
    .catch((e) => console.log(e));
}

function getTodo(url) {
  const token = localStorage.getItem("token");
  axios
    .get(url, {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) => {
      data.todos.forEach((d) => {
        const checked = d.completed_at !== null ? "finished" : "";
        const newList = `
        <li class="todo-item ${checked}" data-todo="${d.id}" >
          <span class="item">${d.content}</span>
          <div class="btn-group">
            <button class="updateBtn">+</button>
            <button class="finishBtn">O</button>
            <button class="closeBtn">X</button>
        </div>
        </li>
      `;

        todoList.insertAdjacentHTML("afterbegin", newList);
      });
    })
    .catch((e) => {
      console.log(e);
    });
}

function deleteTodo(id) {
  const token = localStorage.getItem("token");
  axios.delete(`https://todoo.5xcamp.us/todos/${id}`, {
    headers: { Authorization: token },
  });
}

function updateTodo(id, data) {
  const token = localStorage.getItem("token");
  axios.put(`${API_BASE}/todos/${id}`, data, {
    headers: { Authorization: token },
  });
}

function toggleTodo(id) {
  const token = localStorage.getItem("token");

  const data = axios
    .patch(
      `${API_BASE}/todos/${id}/toggle`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then(({ data }) => data);

  return data;
}
