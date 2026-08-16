function enviarResumenWhatsApp(elecciones, numeroTelefono) {
    const actividadesTexto = elecciones.actividades.length > 0 
        ? elecciones.actividades.join(', ') 
        : 'Por definir';

    const textoMensaje = `¡Hola! Ya armé el plan de nuestra cita:%0A%0A` +
        `🍔 *Comida:* ${elecciones.comida || 'Por definir'}%0A` +
        `📅 *Día:* ${elecciones.fecha || 'Por definir'}%0A` +
        `⏰ *Hora:* ${elecciones.hora || 'Por definir'}%0A` +
        `🎯 *Actividades:* ${actividadesTexto}`;

    const url = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${textoMensaje}`;
    window.location.href = url;
}