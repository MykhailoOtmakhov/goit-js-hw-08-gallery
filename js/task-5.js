const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener(
    "input",
    () =>
      (output.textContent = input.value.length > 0 ? input.value : "незнакомец")
  );