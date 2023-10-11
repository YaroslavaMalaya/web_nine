const form = document.getElementById("myForm");
const passwordInput = document.getElementById("passwordInput");
const repeatPasswordInput = document.getElementById("repeatPassword");
const errorMessage = document.getElementById("error");
const valuesDisplay = document.getElementById("values");

form.addEventListener("submit", function(event) {
    errorMessage.textContent = "";
    if (passwordInput.value !== repeatPasswordInput.value) {
        errorMessage.textContent = "Passwords do not match!";
        event.preventDefault();
        return;
    }

    let radioValue = "";
    let selectedOption = form.querySelector('input[name="radioOption"]:checked');
    if (selectedOption) {
        if (selectedOption.value === 'Yes') {
            radioValue = 'You use Instagram.';
        } else if (selectedOption.value === 'No') {
            radioValue = "You don't use Instagram.";
        }
    } else{
        radioValue = "We don't know about your Instagram.";
    }

    valuesDisplay.style.display = "block";
    let data = `
        <h3>Your answers:</h3>
        <p>You are ${form.querySelector("#textInput").value}.</p>
        <p>Your height is ${form.querySelector("#numeralInput").value}.</p>
        <p>You feel ${form.querySelector("#rangeInput").value}% right now.</p>
        <p>Your day of birth is ${form.querySelector("#datepicker").value}.</p>
        <p>${radioValue}</p>
        <p>Your email is ${form.querySelector("#emailInput").value}</p>
        <p>Your password is ${form.querySelector("#passwordInput").value}</p>
    `;

    valuesDisplay.innerHTML = data;
    event.preventDefault();
});
