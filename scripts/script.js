// first task
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

// second task
function getFactorial(n) {
    if (isNaN(n) || n === null) {
        return 'not a number';
    }
    n = parseInt(n);
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return 'Factorial is not defined for negative numbers';
    } else {
      return n * getFactorial(n - 1);
    }
}

console.log(getFactorial(5));
console.log(getFactorial(-5));
console.log(getFactorial());

function multiply(x) {
    return function(y) {
        if (y === undefined) {
            return x;
        } else {
            return multiply(x * y);
        }
    };
}

console.log(multiply(2)(3)(10)());
console.log(multiply(2)(0)(10)());
console.log(multiply(3)());