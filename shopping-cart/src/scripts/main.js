import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { updateCart, deleteWholeCart } from "./shoppingCartFunction.js";

const catListGroup = document.querySelectorAll("div.card");
const cartState = {
  老大: [0, 20],
  貝貝: [0, 15],
  老虎: [0, 10],
  胖胖: [0, 8.5],
  小花: [0, 9.99],
  黑臉: [0, 12.5],
};

catListGroup.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" || e.target.tagName === "I") {
      const name = e.currentTarget.children[1].children[0].innerText;
      cartState[name][0] += 1;

      updateCart(name, cartState);
    }
  });
});

// add delete whole cart function to button which is in charge of removing
document
  .querySelector("section.cart > button.btn")
  .addEventListener("click", () => {
    deleteWholeCart(cartState);
  });

const tbody = document.querySelector("tbody");

// change amount thorugh input
tbody.addEventListener("change", (e) => {
  const amount = e.target.value;
  const name = e.path[2].children[0].innerText;

  cartState[name][0] = amount;
  updateCart(name, cartState);
});
