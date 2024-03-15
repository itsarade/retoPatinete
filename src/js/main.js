class Participante {
    constructor(nombre, participacion = true) {
        this.nombre = nombre;
        this.participacion = participacion;
    }
}

class Sorteo {
    constructor(participantes) {
        this.participantes = participantes.map(nombre => new Participante(nombre));
        this.eliminados = [];
    }

    realizarSorteo() {
        // Filtrar participantes que aún están en el sorteo
        const participantesActivos = this.participantes.filter(participante => participante.participacion);

        // Elegir aleatoriamente un participante para eliminar
        const indiceEliminado = Math.floor(Math.random() * participantesActivos.length);
        const eliminado = participantesActivos[indiceEliminado];

        // Actualizar el estado del participante eliminado y agregarlo a la lista de eliminados
        eliminado.participacion = false;
        this.eliminados.push(eliminado.nombre);

        // Devolver el nombre del jugador eliminado
        return eliminado.nombre;
    }

    ejecutarSorteo() {
        // Realizar sorteos hasta que quede un participante
        while (this.participantes.filter(participante => participante.participacion).length > 1) {
            console.log("El jugador eliminado es:", this.realizarSorteo());
        }

        // Encontrar al último participante que queda
        const ganadorFinal = this.participantes.find(participante => participante.participacion);
        console.log("¡El ganador final es:", ganadorFinal.nombre, "!");
    }
}

// Ejemplo de uso
const nombresParticipantes = ["Alex", "Sergio", "Sergi", "Sara", "Thirza", "Sheherezade", "Albert", "Adrià", "Moha", "David", "Eric", "Aitor"];
const sorteo = new Sorteo(nombresParticipantes);
sorteo.ejecutarSorteo();
