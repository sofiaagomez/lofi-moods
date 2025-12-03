/* ------------------- Dark Mode ------------------- */

const darkModeBtn = document.getElementById("darkModeBtn");
const body = document.body;

darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    const icon = darkModeBtn.querySelector("i");

    if (body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});


/* ---------- Validaciones del Formulario ---------- */

const form = document.getElementById("form-contacto");
const emailInput = document.getElementById("email");
const emailMsg = document.getElementById("email-mensaje");

emailInput.addEventListener("input", function () {
    if (emailInput.validity.valid) {
        emailMsg.textContent = "Recibirás más información en " + emailInput.value;
    } else {
        emailMsg.textContent = "Ingresá un correo electrónico válido";
    }
});


form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    
    const emailValido = emailInput.validity.valid;

    const moodsSeleccionados = document.querySelectorAll("input[name='mood[]']:checked");

    if (nombre === "" || !emailValido || moodsSeleccionados.length === 0) {
        alert("Por favor, completá los campos obligatorios.");
        return;
    }

    alert("Formulario enviado correctamente.");

    form.reset();
    emailMsg.textContent = "";
});