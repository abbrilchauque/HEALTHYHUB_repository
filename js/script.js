

document.getElementById("login-form").addEventListener("submit", function (e) {
    // Validación de credeciales 
    const mail = document.getElementById("mail").value;
    const password = document.getElementById("password").value;

    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// Define la expresion regular ej:(usuario123@dominio.org)

    // Validacion de credenciales
    if (!mailRegex.test(mail)) {
        errorMail.textContent = "Por favor ingresa un correo válido.";
        document.getElementById("mail").focus(); // Le da el foco de vuelta al campo de imail para que el usuario lo corrija
        e.preventDefault(); // Evita que se envíe el formulario
        return; 
    } 
    
    if (password.length < 8) {
        errorPassword.textContent = "La contraseña debe tener al menos 8 caracteres.";
        document.getElementById("password").focus();
        e.preventDefault();
        return; 
    } 

    // Validación de la contraseña

     if (!/[A-Z]/.test(password)) {
        errorPassword.textContent = "La contraseña debe incluir al menos una letra mayúscula.";
        document.getElementById("password").focus();
        e.preventDefault();
        return;
    }

    if (!/\d/.test(password)) {
        errorPassword.textContent = "La contraseña debe incluir al menos un número.";
        document.getElementById("password").focus();
        e.preventDefault();
        return;
    }

    if (!/[\W_]/.test(password)) {
        errorPassword.textContent = "La contraseña debe incluir al menos un símbolo (como @, #, !, etc.).";
        document.getElementById("password").focus();
        e.preventDefault();
        return;
    }

    setTimeout(() => {
        window.location.href = "home.html";
    });
    
    // if (mail === validMail && password=== validPassword){
    //     setTimeout(() => {
    //         window.location.href = "home.html";
    //     }); 
    // } else {
    //     errorMsg.style.color = "red";
    //     errorMsg.textContent = "Usuario o contraseña incorrectos"; 
    //     e.preventDefault(); 
        
    // }
    // funcionamiento de validacion de contraseña correcto
    // numero de caracteres correcto
    
});

document.getElementById("mail").focus();

let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

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

// document.getElementById("forgotPassword").addEventListener("click", function (e) {
//     e.preventDefault(); // Evita que se envíe el formulario
//     alert("Por favor contacta al administrador del sistema para recuperar tu contraseña.");
// });

// document.querySelector('.sign-up-button').addEventListener('click', function() {
//     window.location.href = 'registro.html'; // Cambia por la ruta que desees
// });

// SCRIPT DE REGISTRO
// -
// -
// -
// -
// -
// -
// -
// -
// -
// -

const signupbtn = document.querySelector("#sign-up-btn");
const loginbtn = document.querySelector("#sign-in-btn");
const container = document.querySelector(".container");

signupbtn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

loginbtn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

// -
// -
// -
// -
// -
// -
// -
// -
// -
// -


document.getElementById("registro-form").addEventListener("submit", function(e) {
e.preventDefault();
// document.getElementById("errorNombre").textContent = "Esto es una prueba de error.";

      const nombre = document.getElementById("nombre").value.trim();
      const fecha = document.getElementById("fechaNacimiento").value.trim();
      const genero = document.getElementById("genero").value;
      const mail = document.getElementById("registro-mail").value.trim();
      const contrasena = document.getElementById("registro-password").value;
      const confirmar = document.getElementById("registro-confirmarContrasena").value;
      const errorRegistroMail = document.getElementById("errorRegistroMail");
      const errorNombre = document.getElementById("errorNombre");
      const errorFecha = document.getElementById("errorFecha");
      const errorRegistroPassword = document.getElementById("errorRegistroPassword");
      const errorConfirmarPassword = document.getElementById("errorConfirmarPassword");



      const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
      const mensajeError = document.getElementById("mensajeError");
    //   mensajeError.textContent = ""; // Limpiar errores anteriores
       errorRegistroMail.textContent = "";
       errorNombre.textContent = "";
       errorFecha.textContent = "";
       errorRegistroPassword.textContent = "";
       errorConfirmarPassword.textContent = "";

      // Validar correo electrónico
      if (!mailRegex.test(mail)) {
       errorRegistroMail.textContent = "Por favor ingresa un correo válido.";
       document.getElementById("registro-mail").value = ""; 
       document.getElementById("registro-mail").focus(); // Le da el foco de vuelta al campo de imail para que el usuario lo corrija
       return; 
      } 

      // Validar que el nombre no esté vacío
      if (nombre === "") {    
        errorNombre.textContent = "El nombre no puede estar vacío.";
        document.getElementById("nombre").value = ""; 
        document.getElementById("nombre").focus(); 
        return;
      }

      // Validar formato de fecha (dd/mm/aaaa)
      const regexFecha = /^(\d{2})\/(\d{2})\/(\d{4})$/;
      if (!regexFecha.test(fecha)) {
        errorFecha.textContent = "La fecha debe ser con formato dd/mm/aaaa.";
        document.getElementById("fechaNacimiento").value = ""; 
        return;
      }

       if (contrasena.length < 8) {
        errorRegistroPassword.textContent = "La contraseña debe tener al menos 8 caracteres.";
        document.getElementById("registro-password").value = ""; 
        document.getElementById("registro-password").focus();

        return; 
    } 

    // Validación de la contraseña

     if (!/[A-Z]/.test(contrasena)) {
        errorRegistroPassword.textContent = "La contraseña debe incluir al menos una letra mayúscula.";
        document.getElementById("registro-password").value = "";
        document.getElementById("registro-password").focus();

        return;
    }

    if (!/\d/.test(contrasena)) {
        errorRegistroPassword.textContent = "La contraseña debe incluir al menos un número.";
        document.getElementById("registro-password").value = "";
        document.getElementById("registro-password").focus();

        return;
    }

    if (!/[\W_]/.test(contrasena)) {
        errorRegistroPassword.textContent = "La contraseña debe incluir al menos un símbolo (como @, #, !, etc.).";
        document.getElementById("registro-password").value = "";
        document.getElementById("registro-password").focus();
        return;
    }

      // Validar que las contraseñas coincidan
      if (contrasena !== confirmar) {
        errorConfirmarPassword.textContent = "Las contraseñas no coinciden.";
        document.getElementById("registro-confirmarContrasena").value = "";
        document.getElementById("registro-confirmarContrasena").focus();
        return;
      }

      // Validar que todos los campos estén llenos y aceptó términos
      if (!nombre || !fecha || !genero || !mail || !contrasena || !confirmar) {
        mensajeError.textContent = "Todos los campos son obligatorios.";
        return;
      }


    document.getElementById("registro-mail").addEventListener("input", function() {
    errorRegistroMail.textContent = "";
    });
    document.getElementById("nombre").addEventListener("input", function() {
        errorNombre.textContent = "";
    });
    document.getElementById("fechaNacimiento").addEventListener("input", function() {
        errorFecha.textContent = "";
    });
    document.getElementById("registro-password").addEventListener("input", function() {
        errorRegistroPassword.textContent = "";
    });
    document.getElementById("registro-confirmarContrasena").addEventListener("input", function() {
        errorConfirmarPassword.textContent = "";
    });
      // Si todo está bien
    alert("Formulario enviado correctamente.");
    document.getElementById("registro-form").reset();
    
});

// Mostrar/ocultar contraseña en registro
let eyeiconRegistro = document.getElementById("eyeicon-registro");
let passwordRegistro = document.getElementById("registro-password");

if (eyeiconRegistro && passwordRegistro) {
    eyeiconRegistro.onclick = function() {
        if (passwordRegistro.type == "password") {
            passwordRegistro.type = "text";
            eyeiconRegistro.src = "img/eye-open.png";
        } else {
            passwordRegistro.type = "password";
            eyeiconRegistro.src = "img/eye-closed.png";
        }
    }
}

// Mostrar modal
document.addEventListener("DOMContentLoaded", function () {
  const forgotPasswordBtn = document.getElementById("forgotPassword");
  const modal = document.getElementById("forgot-password-modal");
  const closeBtn = document.getElementById("close-forgot-password");

  // Abrir el modal
  forgotPasswordBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  // Cerrar al hacer clic en la X
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Cerrar al hacer clic fuera del contenido
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});


// Validación básica (opcional)
document.getElementById("forgot-password-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("forgot-email").value.trim();
  const errorSpan = document.getElementById("errorForgotEmail");
  errorSpan.textContent = "";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorSpan.textContent = "Por favor ingresá un correo válido.";
    return;
  }

  alert("Se envió el enlace de recuperación a " + email);
  document.getElementById("forgot-password-modal").style.display = "none";
});
