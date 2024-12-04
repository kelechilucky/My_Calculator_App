// CALLING THE GLOBAL VARIABLES

const inputOne = document.getElementById("inputOne");
const inputTwo = document.getElementById("inputTwo");
const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const displaydiv = document.getElementById("displaydiv");

// CREATING A RESET FUNCTION

function reset() {
  inputOne.value = "";
  inputTwo.value = "";
}

// ADD A CLICK EVENT LISTENER ON THE ADD BUTTON

addBtn.addEventListener("click", () => {
  const num1 = parseFloat(inputOne.value);
  const num2 = parseFloat(inputTwo.value);

  if (isNaN(num1) && isNaN(num2)) {
    displaydiv.textContent = "please input a valid number";
  }else {
    result = num1 + num2;
    displaydiv.textContent = `Result: ${result}`;
  }
  reset();
});
