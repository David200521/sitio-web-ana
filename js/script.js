let pasoActual = 0;
let elecciones = {
    comida: '',
    fecha: '',
    hora: '',
    actividades: []
};

// Sustituye con tu número en formato internacional sin el signo "+"
const MI_NUMERO_WHATSAPP = "584144758167"; 

function cargarPaso(index) {
    const contenedor = document.getElementById('card-container');
    const datos = pasospagina[index];

    if (!contenedor || !datos) return;

    if (datos.tipo === "simple") {
        contenedor.innerHTML = `
            <div class="snoopy-container">
                <img src="./snoopy.jpg" alt="Snoopy" id="snoopy-img">
            </div>
            <h1>${datos.titulo}</h1>
            <p>${datos.subtitulo}</p>
            <div class="btn-group">
                <button class="btn" onclick="siguiente()">${datos.botonTexto}</button>
            </div>
        `;
    } else if (datos.tipo === "comida") {
        const opcionesHTML = datos.opciones.map(item => `
            <div class="food-item ${item.destacado ? 'destacado' : ''}" onclick="seleccionarComida('${item.nombre}', this)">
                <span class="emoji">${item.emoji}</span>
                <span class="food-name">${item.nombre}</span>
            </div>
        `).join('');

        contenedor.innerHTML = `
            <h1>${datos.titulo}</h1>
            <p>${datos.subtitulo}</p>
            <div class="food-grid">${opcionesHTML}</div>
            <div class="btn-group">
                <button class="btn" onclick="siguienteComida()">${datos.botonTexto}</button>
            </div>
        `;
    } else if (datos.tipo === "fecha_hora") {
        contenedor.innerHTML = `
            <h1>${datos.titulo}</h1>
            <p>${datos.subtitulo}</p>
            <div style="margin-bottom: 1rem; text-align: left;">
                <label style="display:block; margin-bottom:5px; font-weight:600; color:#555;">Día:</label>
                <input type="date" id="input-fecha" style="width:100%; padding:10px; border-radius:10px; border:1px solid #ccc; font-size:1rem;">
            </div>
            <div style="margin-bottom: 1.5rem; text-align: left;">
                <label style="display:block; margin-bottom:5px; font-weight:600; color:#555;">Hora:</label>
                <input type="time" id="input-hora" style="width:100%; padding:10px; border-radius:10px; border:1px solid #ccc; font-size:1rem;">
            </div>
            <div class="btn-group">
                <button class="btn" onclick="guardarFechaHora()">${datos.botonTexto}</button>
            </div>
        `;
    } else if (datos.tipo === "actividades") {
        const opcionesHTML = datos.opciones.map(item => `
            <div class="food-item" onclick="toggleActividad('${item.nombre}', this)">
                <span class="emoji">${item.emoji}</span>
                <span class="food-name">${item.nombre}</span>
            </div>
        `).join('');

        contenedor.innerHTML = `
            <h1>${datos.titulo}</h1>
            <p>${datos.subtitulo}</p>
            <div class="food-grid">${opcionesHTML}</div>
            <div class="btn-group">
                <button class="btn" onclick="siguiente()">${datos.botonTexto}</button>
            </div>
        `;
    } else if (datos.tipo === "final") {
        contenedor.innerHTML = `
            <h1>${datos.titulo}</h1>
            <p>${datos.subtitulo}</p>
            <div class="btn-group" style="flex-direction: column; gap: 12px;">
                <button class="btn" onclick="generarPDF(elecciones)">📄 Descargar PDF</button>
                <button class="btn" style="background-color: #25D366;" onclick="enviarResumenWhatsApp(elecciones, MI_NUMERO_WHATSAPP)">💬 Enviar por WhatsApp</button>
            </div>
        `;

        if (typeof confetti === 'function') {
            confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
        }
    }
}

function seleccionarComida(nombre, elemento) {
    document.querySelectorAll('.food-item').forEach(el => el.classList.remove('destacado'));
    elemento.classList.add('destacado');
    elecciones.comida = nombre;
}

function siguienteComida() {
    if (!elecciones.comida) elecciones.comida = "Burgers";
    siguiente();
}

function guardarFechaHora() {
    const fecha = document.getElementById('input-fecha').value;
    const hora = document.getElementById('input-hora').value;

    if (!fecha || !hora) {
        alert("Por favor selecciona el día y la hora.");
        return;
    }
    elecciones.fecha = fecha;
    elecciones.hora = hora;
    siguiente();
}

function toggleActividad(nombre, elemento) {
    elemento.classList.toggle('destacado');
    const index = elecciones.actividades.indexOf(nombre);
    if (index > -1) {
        elecciones.actividades.splice(index, 1);
    } else {
        elecciones.actividades.push(nombre);
    }
}

function siguiente() {
    pasoActual++;
    if (pasoActual < pasospagina.length) {
        cargarPaso(pasoActual);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    cargarPaso(0);
});