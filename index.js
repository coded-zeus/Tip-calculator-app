const billInput = document.getElementById("bill");
const customInput = document.getElementById("custom");
const peopleInput = document.getElementById("people");
const blank1 = document.querySelector(".blank1");
const blank2 = document.querySelector(".blank2");
const tipValue = document.querySelector(".tip-value");
const totalValue = document.querySelector(".total-value");
const btn = document.querySelectorAll(".btn");
const resetBtn = document.querySelector(".reset-btn");
//console.log(btn);
//setting default values
peopleInput.value = "1";

//eventlistener
billInput.addEventListener("blur", () => {
  if (billInput.value == "") {
    billInput.classList.add("error");
    blank1.classList.add("show");
    setTimeout(function () {
      billInput.classList.remove("error");
      blank1.classList.remove("show");
    }, 1000);
  } else {
    billInput.classList.remove("error");
    blank1.classList.remove("show");
  }
});

peopleInput.addEventListener("blur", () => {
  if (peopleInput.value == "") {
    peopleInput.classList.add("error");
    blank2.classList.add("show");
    setTimeout(function () {
      peopleInput.classList.remove("error");
      blank2.classList.remove("show");
    }, 1000);
  } else {
    peopleInput.classList.remove("error");
    blank2.classList.remove("show");
  }
});

btn.forEach(function (e) {
  e.addEventListener("click", () => {
    let calcTotal =
      (parseFloat(e.innerHTML) / 100) *
      parseFloat(billInput.value) *
      parseFloat(peopleInput.value);
    let calc = (parseFloat(e.innerHTML) / 100) * parseFloat(billInput.value);
    tipValue.innerHTML = "$" + calc.toFixed(2);
    totalValue.innerHTML = "$" + calcTotal.toFixed(2);
    customInput.value = "";
  });
});

customInput.addEventListener("blur", () => {
  let calcTotal =
    (parseFloat(customInput.value) / 100) *
    parseFloat(billInput.value) *
    parseFloat(peopleInput.value);
  let calc =
    (parseFloat(customInput.value) / 100) * parseFloat(billInput.value);
  tipValue.innerHTML = "$" + calc.toFixed(2);
  totalValue.innerHTML = "$" + calcTotal.toFixed(2);
});

resetBtn.addEventListener("click", () => {
  peopleInput.value = "";
  billInput.value = "";
  tipValue.innerHTML = "$0.00";
  totalValue.innerHTML = "$0.00";
  customInput.value = "";
});
