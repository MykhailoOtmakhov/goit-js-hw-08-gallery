const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", lengthValidation);
function lengthValidation(){
    validationInput.value.length < validationInput.dataset.length ? 
    validationInput.classList.add("invalid"):
    validationInput.classList.remove("invalid")
    validationInput.classList.add("valid")    
}
  