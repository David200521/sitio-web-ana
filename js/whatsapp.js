function enviarResumenWhatsApp(elecciones, numeroTelefono) {
    const actividadesTexto = elecciones.actividades.length > 0 
        ? elecciones.actividades.join(', ') 
        : 'Por definir';

    const mensaje = `¡Hola! Ya armé el plan de nuestra cita:%0A%0A` +
        `🍔 *Comida:* ${elecciones.comida}%0A` +
        `📅 *Día:* ${elecciones.fecha}%0A` +
        `⏰ *Hora:* ${elecciones.hora}%0A` +
        `🎯 *Actividades:* ${actividadesTexto}`;

    const url = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${mensaje}`;
    window.open(url, '_blank');
}