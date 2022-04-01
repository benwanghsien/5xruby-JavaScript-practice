import axios from "axios";
const API_BASE = "https://todoo.5xcamp.us/";

document.querySelector("#signUp").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const nickname = document.querySelector("#nickname").value;
  const password = document.querySelector("#password").value;

  let userData = {
    user: {
      email,
      nickname,
      password,
    },
  };

  axios
    .post(`${API_BASE}/users`, userData)
    .then((res) => {
      document.querySelector(".check").innerText = "註冊成功";
    })
    .catch((e) => {
      console.log(e);
      document.querySelector(".check").innerText = "註冊失敗";
    });
});

document.querySelector("#logIn").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.querySelector("#emailLog").value;
  const password = document.querySelector("#passwordLog").value;

  let userData = {
    user: {
      email,
      password,
    },
  };

  axios
    .post(`${API_BASE}/users/sign_in`, userData)
    .then((res) => {
      const token = res.headers.authorization;
      localStorage.setItem("token", token);
      window.location = "./todo-page/index.html";
      document.querySelector(".check").innerText = "已登入";
    })
    .catch((e) => {
      console.log(e);
    });
});

document.querySelector("#checkLogin").addEventListener("submit", function (e) {
  e.preventDefault();

  const token = localStorage.getItem("token");

  if (token) {
    axios
      .get(`${API_BASE}/check`, {
        headers: {
          Authorization: token,
        },
      })
      .then(({ data }) => {
        document.querySelector(".check").innerText = `${data.message}, 已登入`;
      })
      .catch((e) => {
        console.log(e);
      });
  } else {
    document.querySelector(".check").innerText = "尚未登入";
  }
});

document.querySelector("#signOut").addEventListener("submit", function (e) {
  e.preventDefault();

  const token = localStorage.getItem("token");

  if (token) {
    axios
      .delete(`${API_BASE}/users/sign_out`, {
        headers: {
          Authorization: token,
        },
      })
      .then(({ data }) => {
        document.querySelector(".check").innerText = data.message;
      })
      .catch((e) => {
        console.log(e);
      });

    localStorage.removeItem("token");
  }
});
