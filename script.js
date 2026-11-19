
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        status.textContent = "Please fill in all the fields.";
        status.style.color = "red";
    } else {
        status.textContent = "Thank you! Your message is ready.";
        status.style.color = "#a78bfa";

        form.reset();
    }
});
