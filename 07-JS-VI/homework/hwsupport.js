//function filter(array) {
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:
    
    var array = [ 'armadillo', 'vaca', 'elefante', 'alce', 'avestruz', 'antilope', 'león']
    var nuevoArray = [ ]

    var nuevoArray = array.filter(function(elementos){
      return elementos.charAt(0) === 'a'});
    
    console.log(nuevoArray);
      