

document.getElementById("login-form").addEventListener("submit", function (e) {
    // Validación de credeciales 
    const mail = document.getElementById("mail").value;
    const password = document.getElementById("password").value;
    const errorMsg =  document.getElementById("errorMsg");   
    

    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// Define la expresion regular ej:(usuario123@dominio.org)

    // Credenciales validas para ingresar a la pagina
    // const validMail = "admin@uade.com";
    // const validPassword = "Admin123!";

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

document.getElementById("forgotPassword").addEventListener("click", function (e) {
    e.preventDefault(); // Evita que se envíe el formulario
    alert("Por favor contacta al administrador del sistema para recuperar tu contraseña.");
});

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
// e.preventDefault(); // Evita que se envíe el formulario

      const nombre = document.getElementById("nombre").value.trim();
      const fecha = document.getElementById("fechaNacimiento").value.trim();
      const genero = document.getElementById("genero").value;
      const mail = document.getElementById("registro-mail").value.trim();
      const contrasena = document.getElementById("registro-password").value;
      const confirmar = document.getElementById("registro-confirmarContrasena").value;

      const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
      const mensajeError = document.getElementById("mensajeError");
      mensajeError.textContent = ""; // Limpiar errores anteriores


      // Validar correo electrónico
      if (!mailRegex.test(mail)) {
       alert("Por favor ingresa un correo válido.");
       document.getElementById("registro-mail").focus(); // Le da el foco de vuelta al campo de imail para que el usuario lo corrija
       e.preventDefault(); // Evita que se envíe el formulario
       return; 
      } 

      // Validar que el nombre no esté vacío
      if (nombre === "") {    
        mensajeError.textContent = "El nombre no puede estar vacío.";
        return;
    }

      // Validar formato de fecha (dd/mm/aaaa)
      const regexFecha = /^(\d{2})\/(\d{2})\/(\d{4})$/;
      if (!regexFecha.test(fecha)) {
        mensajeError.textContent = "La fecha debe tener el formato dd/mm/aaaa.";
        return;
      }

       if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        document.getElementById("registro-password").focus();
        e.preventDefault();
        return; 
    } 

    // Validación de la contraseña

     if (!/[A-Z]/.test(contrasena)) {
        alert("La contraseña debe incluir al menos una letra mayúscula.");
        document.getElementById("registro-password").focus();
        e.preventDefault();
        return;
    }

    if (!/\d/.test(contrasena)) {
        alert("La contraseña debe incluir al menos un número.");
        document.getElementById("registro-password").focus();
        e.preventDefault();
        return;
    }

    if (!/[\W_]/.test(contrasena)) {
        alert("La contraseña debe incluir al menos un símbolo (como @, #, !, etc.).");
        document.getElementById("registro-password").focus();
        e.preventDefault();
        return;
    }

      // Validar que las contraseñas coincidan
      if (contrasena !== confirmar) {
        mensajeError.textContent = "Las contraseñas no coinciden.";
        return;
      }

      // Validar que todos los campos estén llenos y aceptó términos
      if (!nombre || !fecha || !genero || !mail || !contrasena || !confirmar) {
        mensajeError.textContent = "Todos los campos son obligatorios.";
        return;
      }

      // Si todo está bien
      alert("Formulario enviado correctamente.");
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