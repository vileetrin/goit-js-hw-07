const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", handleInput);

function handleInput(event) {
const trimmedValue = event.currentTarget.value.trim();

    if (trimmedValue === "") {
        output.textContent = "Anonymous"
    } else {
output.textContent = trimmedValue;
    }
    
}