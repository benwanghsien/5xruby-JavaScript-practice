function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=e.parcelRequireda20;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){o[t]=e},e.parcelRequireda20=a);var s=a("fmRoT");const i=document.querySelector("#addBtn"),r=document.querySelector("#taskInput"),l=document.querySelector(".todo-list");function c(){if(""!==r.value.trim()){!function(e,n){const o=localStorage.getItem("token");t(s).post(e,n,{headers:{Authorization:o}}).then((t=>{console.log("新增成功")})).catch((t=>console.log(t)))}("https://todoo.5xcamp.us/todos",{todo:{content:r.value}});const e=`\n        <li class="todo-item">\n          <span class="item">${r.value}</span>\n          <div class="btn-group">\n            <button class="updateBtn">+</button>\n            <button class="finishBtn">O</button>\n            <button class="closeBtn">X</button>\n        </div>\n        </li>\n      `;l.insertAdjacentHTML("beforeend",e),r.value="",r.focus()}}i.addEventListener("click",(()=>{c()})),r.addEventListener("keypress",(t=>{"Enter"===t.key&&c()})),l.addEventListener("click",(e=>{!function(e){if(e.target.classList.contains("closeBtn")){!function(e){const n=localStorage.getItem("token");t(s).delete(`https://todoo.5xcamp.us/todos/${e}`,{headers:{Authorization:n}})}(e.target.parentElement.parentElement.dataset.todo),e.target.parentElement.parentElement.remove()}}(e),function(e){const n=e.target.parentElement.parentElement.dataset.todo;e.target.classList.contains("finishBtn")&&(!function(e){const n=localStorage.getItem("token");t(s).patch(`https://todoo.5xcamp.us/todos/${e}/toggle`,{},{headers:{Authorization:n}}).then((({data:t})=>t))}(n),e.target.parentElement.parentElement.classList.toggle("finished"))}(e),function(e){const n=e.target.parentElement.parentElement.dataset.todo;if(e.target.classList.contains("updateBtn")){const o=document.createElement("input"),a=e.target.parentElement.previousElementSibling,i=a.innerText;o.value=a.innerText,o.classList.add("input-update"),o.addEventListener("blur",(e=>{if(a.innerText=e.target.value,o.replaceWith(a),i!==a.innerText){const e={todo:{content:a.innerText}};!function(e,n){const o=localStorage.getItem("token");t(s).put(`https://todoo.5xcamp.us/todos/${e}`,n,{headers:{Authorization:o}})}(n,e)}})),o.addEventListener("keyup",(t=>{"Enter"===t.key&&t.target.blur()})),a.replaceWith(o),o.focus()}}(e)})),window.addEventListener("load",(()=>{!function(e){const n=localStorage.getItem("token");t(s).get(e,{headers:{Authorization:n}}).then((({data:t})=>{t.todos.forEach((t=>{const e=`\n        <li class="todo-item ${null!==t.completed_at?"finished":""}" data-todo="${t.id}" >\n          <span class="item">${t.content}</span>\n          <div class="btn-group">\n            <button class="updateBtn">+</button>\n            <button class="finishBtn">O</button>\n            <button class="closeBtn">X</button>\n        </div>\n        </li>\n      `;l.insertAdjacentHTML("afterbegin",e)}))})).catch((t=>{console.log(t)}))}("https://todoo.5xcamp.us/todos")}));
//# sourceMappingURL=todo_page.8f84e828.js.map
