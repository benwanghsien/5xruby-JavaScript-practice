// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方
const bodyHeight = document.querySelector("#bodyHeight");
const bodyWeight = document.querySelector("#bodyWeight");
const btn = document.querySelector(".fields button");
const resultText = document.querySelector("#resultText");

btn.addEventListener("click", () => {
  resultText.textContent = bmi(
    Number(bodyHeight.value),
    Number(bodyWeight.value)
  );
});

function bmi(height, weight) {
  if (height === 0) {
    return 0;
  }

  return roundFloatTwo(weight / (height / 100) ** 2);
}

// Decimal adjustment
function decimalAdjust(type, value, exp) {
  // If the exp is undefined or zero...
  if (typeof exp === "undefined" || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split("e");
  value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
  // Shift back
  value = value.toString().split("e");
  return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
}

function roundFloatTwo(value) {
  return decimalAdjust("round", value, -2);
}
