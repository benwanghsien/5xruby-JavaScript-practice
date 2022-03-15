document.addEventListener("DOMContentLoaded", getDOM);

function getDOM() {
  const minus = document.querySelector("#minus");
  const plus = document.querySelector("#plus");
  const counter = document.querySelector("#counter");

  // decrease
  minus.addEventListener("click", () => {
    if (num > 0) {
      counter.value = Number(counter.value) - 1;
    }
  });

  // increase
  plus.addEventListener("click", () => {
    counter.value = Number(counter.value) + 1;
  });
}
