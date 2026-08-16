function generarPDF(elecciones) {
    const ventanaImpresion = window.open('', '', 'width=800,height=600');
    
    const actividadesHTML = elecciones.actividades.length > 0 
        ? elecciones.actividades.map(act => `<li>${act}</li>`).join('')
        : '<li>Por definir</li>';

    ventanaImpresion.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Cita Confirmada</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 40px; color: #333; }
                .card { border: 2px solid #d63384; border-radius: 15px; padding: 20px; text-align: center; }
                h1 { color: #d63384; margin-bottom: 5px; }
                p { font-size: 18px; margin: 10px 0; }
                ul { text-align: left; display: inline-block; font-size: 16px; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>✨ Cita Confirmada ✨</h1>
                <p><strong>🍔 Comida:</strong> ${elecciones.comida || 'Por definir'}</p>
                <p><strong>📅 Día:</strong> ${elecciones.fecha || 'Por definir'}</p>
                <p><strong>⏰ Hora:</strong> ${elecciones.hora || 'Por definir'}</p>
                <p><strong>🎯 Actividades:</strong></p>
                <ul>${actividadesHTML}</ul>
            </div>
            <script>
                window.onload = function() {
                    window.print();
                    window.close();
                };
            </script>
        </body>
        </html>
    `);
    
    ventanaImpresion.document.close();
}