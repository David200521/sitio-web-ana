const pasospagina = [
    {
        paso: 1,
        titulo: "Quieres salir conmigo ? 🌸✨",
        subtitulo: "Tengo una pregunta especial para ti...",
        tipo: "simple",
        botonTexto: "YES ♥"
    },
    {
        paso: 2,
        titulo: "What are we feeling? 🍽️✨",
        subtitulo: "pick your vibe",
        tipo: "comida",
        opciones: [
            { emoji: "🍕", nombre: "Pizza" },
            { emoji: "🍔", nombre: "Burgers", destacado: true },
            { emoji: "🍣", nombre: "Sushi" },
            { emoji: "🍝", nombre: "Pasta" },
            { emoji: "🌮", nombre: "Tacos" },
            { emoji: "🍜", nombre: "Ramen" }
        ],
        botonTexto: "Siguiente"
    },
    {
        paso: 3,
        titulo: "So... when are you free? 📅✨",
        subtitulo: "Elige el día y la hora",
        tipo: "fecha_hora",
        botonTexto: "Siguiente"
    },
    {
        paso: 4,
        titulo: "What are we doing? 🎯✨",
        subtitulo: "Puedes elegir varias actividades",
        tipo: "actividades",
        opciones: [
            { emoji: "🕹️", nombre: "Ir a las maquinitas / Play" },
            { emoji: "☕", nombre: "Tomar un café en la Cafebrería" },
            { emoji: "🍪", nombre: "Ir a Quiero Galleta" },
            { emoji: "🎬", nombre: "Ir al cine" },
            { emoji: "🦁", nombre: "Ir al zoológico" },
            { emoji: "🎨", nombre: "Pintar o estar en casa" }
        ],
        botonTexto: "Confirmar cita ♥"
    },
    {
        paso: 5,
        titulo: "¡Cita Confirmada! 🎉✨",
        subtitulo: "Descarga la ficha de la cita o envíamela por WhatsApp.",
        tipo: "final"
    }
];