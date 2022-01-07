function agregarStringInvertida() {
    // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse"
    // Ej: 'menem'.reverse() => menem
    // 'toni'.reverse() => 'inot'
    // Pista: Necesitarás usar "this" dentro de "reverse"
    String.prototype.reverse = function () {
        var stringInvertida = '';
        for (let i = this.length - 1; i >= 0 ; i--){
            stringInvertida = stringInvertida + this.charAt(i);
        } 
        return stringInvertida;
    }
}