function addOneItemToCart(name, state) {
  const newTable = `
      <tr>
          <td>${name}</td>
          <td><input type="number" value="${state[name][0]}" min="1" /></td>
          <td>$${state[name][1]}</td>
          <td>$${state[name][1] * state[name][0]}</td>
          <td>
              <button class="btn btn-danger btn-sm">
              <i class="fas fa-trash-alt"></i>
              </button>
          </td>
      </tr>   
    `;

  return newTable;
}

function updateTotalPrice() {
  const subTotalTdArr = [].slice.call(
    document.querySelectorAll("tbody tr :nth-child(4)")
  );
  const totalPriceTd = document.querySelector("tfoot :nth-child(3)");

  let total = subTotalTdArr.reduce((prev, next) => {
    return prev + Number(next.innerText.slice(1));
  }, 0);

  totalPriceTd.innerText = `$${total.toFixed(2)}`;
}

function deleteOneItemFromCart(event, state) {
  if (event.target.tagName === "BUTTON" || event.target.tagName === "I") {
    const name = this.children[0].innerText;

    state[name][0] = 0;

    this.remove();
    updateTotalPrice();
  }
}

function deleteWholeCart(state) {
  for (let keys of Object.keys(state)) {
    state[keys][0] = 0;
  }

  document.querySelector("tfoot :nth-child(3)").innerText = "$0";

  const tbody = document.querySelector("tbody");
  while (tbody.children.length > 0) {
    tbody.removeChild(tbody.children[0]);
  }
}

function updateCart(name, state) {
  const tbody = document.querySelector("tbody");
  const tbodyArray = [].slice.call(tbody.children);

  const catCart = tbodyArray.find((tr) => tr.children[0].innerText === name);

  if (catCart) {
    catCart.children[1].children[0].value = state[name][0];
    catCart.children[3].innerText = `$${state[name][1] * state[name][0]}`;
  } else {
    tbody.insertAdjacentHTML("beforeend", addOneItemToCart(name, state));

    // add delete handler to delete button of each tr
    document
      .querySelector("tbody > :last-child")
      .addEventListener("click", function (e) {
        deleteOneItemFromCart.call(this, e, state);
      });
  }

  updateTotalPrice();
}

export {
  addOneItemToCart,
  updateCart,
  updateTotalPrice,
  deleteOneItemFromCart,
  deleteWholeCart,
};
