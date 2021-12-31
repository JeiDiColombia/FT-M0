function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.    
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:
    var nuevoArray = [ ]
    var suma = numero

    for (let i = 0; i < 10; i++) {
        if(i === 5) continue;
        else { 
        suma = suma + 2;
        nuevoArray.push(suma);
    }
  }
  return nuevoArray;
}