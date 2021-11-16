function mayorDeEdad(edad){
    if(edad > 18) {
        return "es mayor de edad"
    } else if (edad < 18) {
        return "es menor de edad"
    } else if (edad === 18) {
        return "tiene 18 exacto" 
    } else {
        return "es un fantasma"
    }
}


var persona = mayorDeEdad ();

 console.log (persona);