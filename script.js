"use strict";

const numbersBtn = document.querySelectorAll("[data-number]");
const equalBtn = document.querySelector("[data-equals]");
const deleteBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");
const output = document.querySelector(".display");

let string = "";
numbersBtn.forEach((num) =>
  num.addEventListener("click", function (e) {
    string += e.target.innerHTML;
    output.textContent = string;
  })
);

deleteBtn.addEventListener("click", function () {
  if (output.innerHTML.length - 1 === 0) {
    output.textContent = 0;
    string = "";

    return;
  } else {
    string = string.slice(0, -1);
    output.textContent = string;
  }
});

allClearBtn.addEventListener("click", function () {
  string = "";
  output.textContent = 0;
});

equalBtn.addEventListener("click", function () {
  if (string.length === 0) {
    return;
  } else {
    // string = eval?.(string);
    // output.textContent = string;
    try {
      string = eval(string);
      output.textContent = string;
    } catch (error) {
      output.textContent = "Syntax Error!";
    }
  }
});
