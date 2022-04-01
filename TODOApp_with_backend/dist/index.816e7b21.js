const API_BASE = "https://todoo.5xcamp.us";
document.querySelector("form").addEventListener("submit", function(e1) {
    e1.preventDefault();
    const email = document.querySelector("#email").value;
    const nickname = document.querySelector("#nickname").value;
    const password = document.querySelector("#password").value;
    const userData = {
        email,
        nickname,
        password
    };
    const httpConfig = {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify(userData)
    };
    // TODO del
    console.log(userData);
    fetch("https://todoo.5xcamp.us/users", httpConfig).then((res)=>{
        return res.json();
    }).then((d)=>{
        // TODO del
        console.log(d);
    }).catch((e)=>{
        // TODO del
        console.log(e);
    });
//   postData(userData, httpConfig);
});
async function postData(data, config) {
    const res = await fetch(`API_BASE/users`, config);
    // TODO del
    console.log(res);
}

//# sourceMappingURL=index.816e7b21.js.map
