const pasospagina = [
    {
        paso: 1,
        titulo: "Quieres salir conmigo ? 🙈",
        subtitulo: "Tengo una pregunta especial para ti Ana ",
        tipo: "simple",
        botonTexto: "YES ♥"
    },
    {
        paso: 2,
        titulo: "Que te gustaria comer ? 🍽️✨",
        subtitulo: "Tus sitios favoritos",
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
        titulo: "Elige el dia de nuestra cita 📅✨",
        subtitulo: "Elige el día y la hora",
        tipo: "fecha_hora",
        botonTexto: "Siguiente"
    },
    {
        paso: 4,
        titulo: "Que te gustraia hacer ? 🎯✨",
        subtitulo: "Puedes elegir varias actividades tus favoritas",
        tipo: "actividades",
        opciones: [
            { emoji: "🕹️", nombre: "Ir a las maquinitas / Play" },
            { emoji: "☕", nombre: "Tomar un café en la Cafebrería" },
            { emoji: "🍪", nombre: "Ir a Quiero Galleta" },
            { emoji: "🎬", nombre: "Ir al cine" },
            { emoji: "🦁", nombre: "Ir al zoológico" },
            { emoji: "🎨", nombre: "Pintar" },
            { emoji: "🏠", nombre: "Estar en Casa" }
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