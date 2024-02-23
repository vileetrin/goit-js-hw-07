const form = document.querySelector(".login-form");


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const password = event.currentTarget.elements.password.value.trim();
    const email = event.currentTarget.elements.email.value.trim();
    
    if (password === "" || email === "") {
        alert("All form fields must be filled in");
    } else {
        const result = {
            email: email,
            password: password
        }
        console.log(result);
        form.reset()
        };
    }



