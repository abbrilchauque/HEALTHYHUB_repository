let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password"); 

document.getElementById("loginForm").addEventListener("submit", function (e) {
    // Validación de credeciales 
    const mail = document.getElementById("mail").value;
    const password = document.getElementById("password").value;
    const errorMsg =  document.getElementById("errorMsg");   

    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// Define la expresion regular ej:(usuario123@dominio.org)
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/; // Expresion regular para validar la contraseña

    // Credenciales validas para ingresar a la pagina
    const validMail = "admin@uade.com";
    const validPassword = "Admin123!";

    // Validacion de credenciales
    if (!mailRegex.test(mail)) {
        alert("Por favor ingresa un correo válido.");
        document.getElementById("mail").focus(); // Le da el foco de vuelta al campo de imail para que el usuario lo corrija
        e.preventDefault(); // Evita que se envíe el formulario
        return; 
    } 
    
    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        document.getElementById("password").focus();
        e.preventDefault();
        return; 
    } 

    // Validación de la contraseña

     if (!/[A-Z]/.test(password)) {
        alert("La contraseña debe incluir al menos una letra mayúscula.");
        document.getElementById("password").focus();
        e.preventDefault();
        return;
    }

    if (!/\d/.test(password)) {
        alert("La contraseña debe incluir al menos un número.");
        document.getElementById("password").focus();
        e.preventDefault();
        return;
    }

    if (!/[\W_]/.test(password)) {
        alert("La contraseña debe incluir al menos un símbolo (como @, #, !, etc.).");
        document.getElementById("password").focus();
        e.preventDefault();
        return;
    }
    
    if (mail === validMail && password=== validPassword){
        setTimeout(() => {
            window.location.href = "home.html";
        }); 
    } else {
        errorMsg.style.color = "red";
        errorMsg.textContent = "Usuario o contraseña incorrectos"; 
        e.preventDefault(); 
        
    }
    // funcionamiento de validacion de contraseña correcto
    // numero de caracteres correcto
});

document.getElementById("mail").focus();

// Ocultar contraseña 

    eyeicon.onclick = function(){
        if(password.type == "password"){
            password.type = "text";
            eyeicon.src = "img/eye-open.png"
        } else {
            password.type = "password";
            eyeicon.src = "img/eye-closed.png"
        }
    }

// Olvidaste tu contraseña

document.getElementById("forgotPassword").addEventListener("click", function (e) {
    e.preventDefault(); // Evita que se envíe el formulario
    alert("Por favor contacta al administrador del sistema para recuperar tu contraseña.");
});
