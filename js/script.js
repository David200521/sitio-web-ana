// Si estás cargando los datos desde js/datos.js
let pasoActual = 0;

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
            <div class="food-item ${item.destacado ? 'destacado' : ''}">
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
        `;
        
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 }
            });
        }
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