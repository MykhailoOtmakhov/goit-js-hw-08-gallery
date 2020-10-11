
const rangeFontSize = document.querySelector('#font-size-control');
const spanText = document.querySelector("#text");
const changeFontSize = function (){
    spanText.style.fontSize = `${rangeFontSize.value}px`;
};
    spanText.style.fontSize = `${rangeFontSize.value}px`;
rangeFontSize.addEventListener("input", changeFontSize);

