// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// Ejemplo:

// input: Hola mundo
// Output: oauo 
function encontrarVocales(frase) {
    // Utilizamos una expresión regular para encontrar todas las vocales en la frase
  let vocalesEncontradas = frase.match(/[aeiou]/gi);
  
    if (vocalesEncontradas === null) {
      return "No se encontraron vocales en la frase.";
    } else {
      return "Las vocales encontradas son: " + vocalesEncontradas.join(", ");
    }
  }
  
  let frase = "Hola, ¿cómo estás?";
  console.log(encontrarVocales(frase));