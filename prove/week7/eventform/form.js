const form = document.querySelector("#ticket-form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const ticketType = document.querySelector("#ticket-type");
const date = document.querySelector("#event-date");
const formExtra = document.querySelector("#type-fr");
const extraParent = document.querySelector("#toggle");
const label = document.querySelector("#toggle label")
const output = document.querySelector("#output");

function isPastDate(value) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const chosen = new Date(value);
    return chosen < today;
}

ticketType.addEventListener('change', function(event) {
    const dType = ticketType.value;
    extraParent.classList.add('show');
    if (dType == "student") {
        label.innerHTML = `
        Student I-number
        `
    }
    if (dType == "guest") {
        label.innerHTML = `
        Access code
        `
    }

})

form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";

    const sFirstName = firstName.value.trim();
    const sLastName = lastName.value.trim();
    const sEmail = email.value.trim();
    const sType = ticketType.value;
    const sDate = date.value;
    const sFreeResponse = formExtra.value.trim();

    if (sFirstName.length == 0 || sLastName.length == 0) {
        output.textContent = 'Please fill out the name completely';
        output.classList.add('error-box');
        return;
    }
    if (!sEmail.includes("@") || !sEmail.includes(".")) {
        output.textContent = 'Please provide a valid email';
        output.classList.add('error-box');
        return;
    }
    if (sType == "") {
        output.textContent = 'Please select a ticket type';
        output.classList.add('error-box');
        return;
    }
    if (sDate.length < 10) {
        output.textContent = "Please choose a date.";
        output.classList.add('error-box');
        return;
    }
    if (isPastDate(sDate)) {
        output.textContent = "Please choose a later date.";
        output.classList.add('error-box');
        return;
    }
    if (sType == "guest" && sFreeResponse.length < 3) {
        output.textContent = "Please provide a valid code"
        output.classList.add('error-box');
        return;
    }
    if (sType == "student" && sFreeResponse.length != 9) {
        output.textContent = "Please input a valid I-number"
        output.classList.add('error-box');
        return;
    }

    output.classList.add('success-box');

    output.innerHTML = `
        <h2 style="color:#0c4b21;">Ticket Created</h2>
        <p>${sFirstName} ${sLastName}</p>
        <p>${sType}</p>
        <p>${sDate}</p>
    `;
    form.reset();
});