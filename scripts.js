// --- LÓGICA DEL CARRUSEL ---
const tira = document.getElementById("tira-carrusel");

if (tira) {
  const btnAnt = document.getElementById("btn-ant");
  const btnSig = document.getElementById("btn-sig");
  const libros = tira.getElementsByTagName("article");
  let contador = 0;

  btnSig.addEventListener("click", () => {
    contador = contador < libros.length - 1 ? contador + 1 : 0;
    tira.style.transform = `translateX(-${contador * 100}%)`;
  });

  btnAnt.addEventListener("click", () => {
    contador = contador > 0 ? contador - 1 : libros.length - 1;
    tira.style.transform = `translateX(-${contador * 100}%)`;
  });
}

// --- LÓGICA DE SEGUIR LEYENDO ---
const boton = document.getElementById("btn-leer-mas");
const extra = document.getElementById("info-extra");

if (boton && extra) {
  boton.addEventListener("click", () => {
    extra.classList.remove("hidden");
    extra.style.display = "block";
    boton.style.display = "none";
  });
}

/* 
    logica comentada para complir con la actividad 5 del tp

// --- LÓGICA DEL FORMULARIO ---
const botonEnviar = document.getElementById("btn-enviar");

if (botonEnviar) {
  botonEnviar.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const email = document.getElementById("email").value.trim();
    const fecha = document.getElementById("fecha").value.trim();

    const errorNombre = document.getElementById("error-nombre");
    const errorDni = document.getElementById("error-dni");
    const errorEmail = document.getElementById("error-email");
    const errorFecha = document.getElementById("error-fecha");

    // Limpiar errores previos
    [errorNombre, errorDni, errorEmail, errorFecha].forEach((el) =>
      el.classList.add("hidden")
    );

    const expresionLetras = /^[a-zA-Z\s]+$/; //validar solo letras y espacios
    const expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //validar formato de email

    if (nombre === "" || !expresionLetras.test(nombre)) {
      errorNombre.textContent = "El nombre es obligatorio y solo debe tener letras.";
      errorNombre.classList.remove("hidden");
      return;
    }

    if (dni === "" || isNaN(dni) || dni.length < 7 || dni.length > 8 || Number(dni) <= 0) {
      errorDni.textContent = "DNI inválido. Ingrese entre 7 y 8 números, sin puntos.";
      errorDni.classList.remove("hidden");
      return;
    }

    if (email === "" || !expresionEmail.test(email)) {
      errorEmail.textContent = "Ingrese un correo electrónico válido (ej@mail.com).";
      errorEmail.classList.remove("hidden");
      return;
    }

    const objetoFecha = new Date(fecha);
    if (fecha === "" || isNaN(objetoFecha.getTime())) {
      errorFecha.textContent = "Ingrese una fecha válida (Formato: AAAA-MM-DD).";
      errorFecha.classList.remove("hidden");
      return;
    }
  });
} */