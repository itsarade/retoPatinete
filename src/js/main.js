class participantes {
  constructor(name, participacion) {
    this.name = name;
    this.participacion = participacion;
  }
}

const Concursantes = [
  new participantes("Sergio", true),
  new participantes("Sergi", true),
  new participantes("Sara", true),
  new participantes("Alex", true),
  new participantes("Thriza", true),
  new participantes("Eric", true),
  new participantes("Aitor", true),
  new participantes("Shehe", true),
  new participantes("Moha", true),
  new participantes("David", true),
  new participantes("Albert", true),
  new participantes("Adri", true),
];

console.log(Concursantes[1]);

const participantesContainer = document.querySelector(".participantes");

// Recorrer el array de concursantes y crear elementos para cada uno
Concursantes.forEach((concursante) => {
  // Crear un elemento de lista (li) para cada concursante
  const concursanteElement = document.createElement("p");
  // Establecer el texto del elemento de lista como el nombre del concursante
  concursanteElement.textContent = concursante.name;
  // Agregar el elemento de lista al contenedor de participantes
  participantesContainer.appendChild(concursanteElement);
});
