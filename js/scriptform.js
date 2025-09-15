// ========================
// TOGGLE DE CONTRASEÑAS
// ========================

document.querySelectorAll('.toggle-pass').forEach(button => {
  const input = button.previousElementSibling;

  // Icono inicial
  button.textContent = '🙈'; // Monito tapándose los ojos (contraseña oculta)

  button.addEventListener('click', () => {
    // Alternar visibilidad de la contraseña
    if (input.type === 'password') {
      input.type = 'text';
      button.textContent = '🙉'; // Monito con las orejas tapadas (contraseña visible)
    } else {
      input.type = 'password';
      button.textContent = '🙈'; // Contraseña oculta nuevamente
    }
  });
});

// ========================
// VALIDACIÓN DE CONTRASEÑAS
// ========================

const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');

function validarPasswords() {
  if (pass1.value && pass2.value) {
    if (pass1.value === pass2.value) {
      // Si las contraseñas coinciden
      pass1.classList.add('valid');
      pass2.classList.add('valid');
      pass1.classList.remove('invalid');
      pass2.classList.remove('invalid');
    } else {
      // Si no coinciden
      pass1.classList.add('invalid');
      pass2.classList.add('invalid');
      pass1.classList.remove('valid');
      pass2.classList.remove('valid');
    }
  } else {
    // Si los campos están vacíos, quitar colores
    pass1.classList.remove('valid', 'invalid');
    pass2.classList.remove('valid', 'invalid');
  }
}

pass1.addEventListener('input', validarPasswords);
pass2.addEventListener('input', validarPasswords);

// ========================
// VALIDACIÓN DE CAMPOS ESPECÍFICOS
// ========================

const nombreInput = document.getElementById('nombres');
const apellidoInput = document.getElementById('apellidos');
const idInput = document.getElementById('identificacion');
const telefonoInput = document.getElementById('telefono');

// Solo letras (mayúsculas, minúsculas y tildes)
function soloLetras(input) {
  const soloLetrasRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  if (!soloLetrasRegex.test(input.value)) {
    input.classList.add('invalid');
  } else {
    input.classList.remove('invalid');
  }
}

// Solo números, exactamente 10 dígitos
function soloDiezNumeros(input) {
  const soloNumerosRegex = /^\d{10}$/;
  if (!soloNumerosRegex.test(input.value)) {
    input.classList.add('invalid');
  } else {
    input.classList.remove('invalid');
  }
}

// Validar al escribir
nombreInput.addEventListener('input', () => soloLetras(nombreInput));
apellidoInput.addEventListener('input', () => soloLetras(apellidoInput));
idInput.addEventListener('input', () => soloDiezNumeros(idInput));
telefonoInput.addEventListener('input', () => soloDiezNumeros(telefonoInput));

// ========================
// ENVÍO DEL FORMULARIO
// ========================

// Agregamos un "escuchador" al formulario con id 'registroForm'
// Se ejecutará esta función cada vez que se intente enviar el formulario
document.getElementById('registroForm').addEventListener('submit', function (e) {
  
  // Prevenimos el comportamiento por defecto del formulario (que recarga la página)
  e.preventDefault();

  // Validamos si las contraseñas coinciden antes de continuar
  if (pass1.value !== pass2.value) {
    // Si no coinciden, mostramos un mensaje de error con SweetAlert
    Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
    return; // Detenemos aquí el resto del código
  }

  // Validar campos de letras y números antes de enviar
  const errores = [];

  // Validaciones manuales por si el usuario intenta forzar el envío
  if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombreInput.value)) {
    errores.push('El nombre solo debe contener letras.');
  }
  if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(apellidoInput.value)) {
    errores.push('El apellido solo debe contener letras.');
  }
  if (!/^\d{10}$/.test(idInput.value)) {
    errores.push('El número de identificación debe tener 10 dígitos.');
  }
  if (!/^\d{10}$/.test(telefonoInput.value)) {
    errores.push('El teléfono debe tener 10 dígitos.');
  }

  if (errores.length > 0) {
    Swal.fire('Campos inválidos', errores.join('<br>'), 'error');
    return;
  }

  // Creamos un objeto FormData para capturar todos los datos del formulario
  const datos = new FormData(this);

  // Agregamos la contraseña manualmente por si no estaba incluida
  // (en algunos casos podrías omitir esto si ya está dentro del formulario)
  datos.append('contraseña', pass1.value);

  // Creamos un objeto JavaScript vacío para guardar los datos con nombre y valor
  const datosObj = {};
  
  // Recorremos cada par clave-valor del formulario
  datos.forEach((value, key) => {
    datosObj[key] = value; // Guardamos cada valor con su nombre de campo
  });

  // Creamos una cadena HTML con los datos del formulario formateados
  // Ejemplo: <p><strong>nombre:</strong> Juan</p>
  const contenidoHTML = Object.entries(datosObj)
    .map(([key, val]) => `<p><strong>${key}:</strong> ${val}</p>`)
    .join('');

  // Mostramos los datos en el contenedor con id "resultados" (en la pantalla)
  document.getElementById('resultados').innerHTML = contenidoHTML;

  // También mostramos los datos en la consola del navegador (útil para depurar)
  console.log('Datos del formulario:', datosObj);

  // Finalmente, mostramos una alerta con los datos usando SweetAlert
  Swal.fire({
    title: 'Datos del formulario',     // Título de la alerta
    html: contenidoHTML,               // Contenido formateado (usamos HTML)
    icon: 'success',                   // Icono de éxito
    confirmButtonText: 'Cerrar',       // Texto del botón
    customClass: {
      htmlContainer: 'swal-text-left'  // Alineamos el texto a la izquierda con clase CSS personalizada
    }
  });
});

