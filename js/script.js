document.getElementById("loginForm").addEventListener("submit", function (e) {
    
    
    const mail = document.getElementById("mail").value;
    const password = document.getElementById("password").value;
    const errorMsg =  document.getElementById("errorMsg");   

    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// Define la expresion regular ej:(usuario123@dominio.org)

    // Credenciales validas para ingresar a la pagina
    const validMail = "correo@uade.com";
    const validPassword = "Hola123";

    // Validacion de credenciales
    if (!mailRegex.test(mail)) {
        alert("Ingrese un mail válido");
        // alert("Por favor ingresa un correo válido.");
        document.getElementById("mail").focus(); // Le da el foco de vuelta al campo de imail para que el usuario lo corrija
        e.preventDefault(); // Evita que se envíe el formulario
    } else if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        document.getElementById("password").focus();
        e.preventDefault();
    } else if (mail === validMail && password=== validPassword){
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
