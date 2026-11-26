
// 1. Get the signup form

const form = document.getElementById("signup-form");


// 2. Form submit event

form.addEventListener("submit", function (event) {

    event.preventDefault();


    // 3. Get input values

    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const contact = document.getElementById("contact");
    const password = document.getElementById("password");

    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const year = document.getElementById("year");

    const gender = document.querySelector(
        'input[name="gender"]:checked'
    );


    // 4. Clear previous errors

    document.querySelectorAll(".error-msg").forEach(function (error) {
        error.textContent = "";
    });

    document.querySelectorAll(".input-error").forEach(function (input) {
        input.classList.remove("input-error");
    });


    let isValid = true;


    // 5. First Name Validation

    if (firstname.value.trim().length < 2) {

        showError(firstname, "Enter at least 2 characters");

    }


    // 6. Last Name Validation

    if (lastname.value.trim().length < 2) {

        showError(lastname, "Enter at least 2 characters");

    }


    // 7. Email / Phone Validation

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?[0-9\s-]{10,15}$/;

    const contactValue = contact.value.trim();

    if (
        !emailPattern.test(contactValue) &&
        !phonePattern.test(contactValue)
    ) {

        showError(contact, "Enter a valid email or phone number");

    }


    // 8. Password Validation

    if (password.value.length < 8) {

        showError(password, "Password must contain 8 characters");

    }


    // 9. Date of Birth Validation

    if (day.value === "" || month.value === "" || year.value === "") {

        document.getElementById("dob-error").textContent =
            "Please select your date of birth";

        isValid = false;

    } else {

        const birthYear = Number(year.value);
        const currentYear = new Date().getFullYear();

        if (
            !Number.isInteger(birthYear) ||
            birthYear < 1900 ||
            birthYear > currentYear
        ) {

            document.getElementById("dob-error").textContent =
                "Enter a valid year";

            isValid = false;

        }

    }


    // 10. Gender Validation

    if (!gender) {

        document.getElementById("gender-error").textContent =
            "Please select your gender";

        isValid = false;

    }


    // 11. Final Result

    if (isValid) {

        alert("Form submitted successfully!");

        form.reset();

    }


    // 12. Error Function

    function showError(input, message) {

        const parent = input.parentElement;

        const error = parent.querySelector(".error-msg");

        error.textContent = message;

        input.classList.add("input-error");

        isValid = false;

    }

});
