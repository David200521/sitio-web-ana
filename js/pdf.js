function generarPDF(elecciones) {
    const contenedor = document.createElement('div');
    contenedor.style.padding = '30px';
    contenedor.style.fontFamily = "'Segoe UI', Roboto, sans-serif";
    contenedor.style.color = '#333';

    const actividadesHTML = elecciones.actividades.length > 0 
        ? elecciones.actividades.map(act => `<li style="margin-bottom: 5px;">${act}</li>`).join('')
        : '<li>Por definir</li>';

    contenedor.innerHTML = `
        <div style="text-align: center; border-bottom: 2px solid #d63384; padding-bottom: 15px; margin-bottom: 20px;">
            <h1 style="color: #d63384; margin: 0; font-size: 24px;">✨ Resumen de la Cita ✨</h1>
            <p style="color: #666; margin-top: 5px;">¡Plan confirmado!</p>
        </div>
        <div style="font-size: 16px; line-height: 1.8;">
            <p><strong>🍔 Comida elegida:</strong> ${elecciones.comida || 'Sin especificar'}</p>
            <p><strong>📅 Día:</strong> ${elecciones.fecha || 'Sin especificar'}</p>
            <p><strong>⏰ Hora:</strong> ${elecciones.hora || 'Sin especificar'}</p>
            <p><strong>🎯 Actividades planeadas:</strong></p>
            <ul style="padding-left: 20px;">
                ${actividadesHTML}
            </ul>
        </div>
    `;

    const configuracion = {
        margin: 0.5,
        filename: 'cita_confirmada.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(configuracion).from(contenedor).save();
}