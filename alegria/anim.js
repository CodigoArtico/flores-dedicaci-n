// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea, su tiempo de aparición y su duración en segundos
var lyricsData = [
  { text: "Wise men say.", time: 6, duration: 8 },
  { text: "Only fools rush in.", time: 14, duration: 6 },
  { text: "But I can't help falling in love with you.", time: 20, duration: 16 },
  { text: "Shall I stay?", time: 36, duration: 7 },
  { text: "Would it be a sin?", time: 43, duration: 7 },
  { text: "If I can't help falling in love with you.", time: 50, duration: 14 },
  { text: "Like a river flows.", time: 64, duration: 4 },
  { text: "Surely to the sea.", time: 68, duration: 4 },
  { text: "Darling, so it goes.", time: 72, duration: 3 },
  { text: "Some things are meant to be.", time: 75, duration: 6 },
  { text: "Take my hand.", time: 82, duration: 7 },
  { text: "Take my whole life too.", time: 89, duration: 8 },
  { text: "For I can't help falling in love with you.", time: 97, duration: 14 },
  { text: "Like a river flows.", time: 111, duration: 4 },
  { text: "Surely to the sea.", time: 115, duration: 3 },
  { text: "Darling, so it goes.", time: 118, duration: 2 },
  { text: "Some things are meant to be.", time: 121, duration: 8 },
  { text: "Take my hand.", time: 129, duration: 5 },
  { text: "Take my whole life too.", time: 134, duration: 8 },
  { text: "For I can't help falling in love with you.", time: 142, duration: 14 },
  { text: "For I can't help falling in love with you.", time: 156, duration: 10 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(line => 
    time >= line.time && time < line.time + line.duration
  );
  
  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeDuration = 1; // Duración del efecto de desaparición en segundos
    var fadeInDuration = 1; // Duración del efecto de aparición en segundos

    var fadeOutStart = (currentLine.time + currentLine.duration - fadeDuration); // Momento en el que la línea comienza a desvanecerse
    var opacity = 1;

    if (time < currentLine.time + fadeInDuration) {
      opacity = (time - currentLine.time) / fadeInDuration; // Efecto de aparición
    } else if (time > fadeOutStart) {
      opacity = 1 - ((time - fadeOutStart) / fadeDuration); // Efecto de desaparición
    }
    
    // Aplica el efecto de aparición y desaparición
    lyrics.style.opacity = Math.max(0, opacity);
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 100);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
