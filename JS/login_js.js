let loginForm = document.getElementById("loginForm");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    const emailRegex = /^[a-zA-Z]+\.[a-zA-Z]+\d{0,2}@e-uvt\.ro$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;

    if (!emailRegex.test(email)) {
        alert("Email invalid! Folosește formatul prenume.nume@e-uvt.ro");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Parola trebuie să conțină minim 7 caractere, litere mari și mici, o cifră și un caracter special!");
        return;
    }

    alert("Login reușit!");
    window.location.href = "home.html";
});