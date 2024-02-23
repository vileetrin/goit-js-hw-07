const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", handleInput);

function handleInput(event) {
    if (event.currentTarget.value === "") {
        output.innerHTML = "Anonimous"
    } else {
output.innerHTML = event.currentTarget.value;
    }
    
}