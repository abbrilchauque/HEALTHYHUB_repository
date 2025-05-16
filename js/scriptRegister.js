document.getElementById("registroForm").addEventListener("submit", function(e) {
e.preventDefault(); // Evita que se envíe el formulario

      const nombre = document.getElementById("nombre").value.trim();
      const fecha = document.getElementById("fechaNacimiento").value.trim();
      const genero = document.getElementById("genero").value;
      const mail = document.getElementById("mail").value.trim();
      const contrasena = document.getElementById("password").value;
      const confirmar = document.getElementById("confirmarContrasena").value;

      const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
      const mensajeError = document.getElementById("mensajeError");
      mensajeError.textContent = ""; // Limpiar errores anteriores


      // Validar correo electrónico
      if (!mailRegex.test(mail)) {
       alert("Por favor ingresa un correo válido.");
       document.getElementById("mail").focus(); // Le da el foco de vuelta al campo de imail para que el usuario lo corrija
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
      window.location.href = 'index.html';

    });