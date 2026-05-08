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

// 1. La Función Principal de construcción
function agregarSocio(nombre, cargo) {
  const contenedor = document.getElementById("contenedor-socios");

  // El molde de tu tarjeta (tal cual tu diseño)
  const tarjetaHTML = `
        <article class="tarjeta-socio relative group">
            <button class="boton-borrar" onclick="this.parentElement.remove()">X</button>
            <div class="mx-auto flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-purple-200 text-4xl font-bold text-purple-700 sm:mx-0">
                <img
                    src="https://i.pinimg.com/originals/16/e3/16/16e31690d95888a1532ea992b8f3ddf4.jpg"
                    alt="Foto de perfil"
                    class="w-full h-full object-cover rounded-full"
                />
            </div>
            <div class="space-y-2 text-center sm:text-left w-full">
                <div class="space-y-0.5">
                    <p class="text-lg font-semibold text-black">${nombre}</p>
                    <p class="font-medium text-gray-500">${cargo}</p>
                </div>
                <a href="#" class="boton-mensaje">Mensaje</a>
            </div>
        </article>
    `;

  // La insertamos al principio de la grilla
  contenedor.insertAdjacentHTML("beforeend", tarjetaHTML);
}

// 2. El "Escuchador" del botón
document.addEventListener("DOMContentLoaded", () => {
  const btnAgregar = document.getElementById("btn-agregar");
  const formNuevo = document.getElementById("form-nuevo-socio");

  if (btnAgregar) {
    btnAgregar.addEventListener("click", () => {
      const nombreInput = document.getElementById("nuevo-nombre");
      const cargoInput = document.getElementById("nuevo-cargo");

      // Validamos que no envíen vacío
      if (nombreInput.value.trim() === "" || cargoInput.value.trim() === "") {
        alert("Error, los campos no pueden estar vacios.");
        return;
      }

      // LLAMAMOS A LA FUNCIÓN
      agregarSocio(nombreInput.value, cargoInput.value);

      // Limpiamos el form
      formNuevo.reset();
    });
  }
});

/* 
    Lógica comentada para complir con la actividad 5 del tp

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
