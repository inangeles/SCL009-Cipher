window.cipher = {
  encode: (message, numOffset) => {
    /* Acá va tu código */
    let cifrado = '';
    let result='';
    for (let i = 0; i < message.length; i++) { //si pongo i=<message.length, me agrega un caracter adicional al final. mantenerlo en i< o iniciar i en 1 si mantengo el <=
      let formula = message.charCodeAt(i);
      if (formula >= 65 && formula <= 90) {
        result = String.fromCharCode((formula - 65 + numOffset) % 26 + 65);
      }
      else if (formula >= 97 && formula <=122){
        result = String.fromCharCode((formula - 97 + numOffset) % 26 + 97);
      }
      else if (formula==32){
        result=String.fromCharCode(formula);
      }
      cifrado+= result;
    }
    return cifrado;
  },
  decode: (message, numOffset) => {
    /* Acá va tu código */
    let result = '';
    let cifrado = '';
    for (let i = 0; i < message.length; i++) { //si pongo i=<message.length, me agrega un caracter adicional al final. mantenerlo en i< o iniciar i en 1 si mantengo el <=
      let formula = message.charCodeAt(i);
      if (formula >= 65 && formula <= 90) {
        result = String.fromCharCode((formula - 90 - numOffset) % 26 + 90);
      }
      else if (formula >= 97 && formula <= 122){
        result = String.fromCharCode((formula - 122 - numOffset) % 26 + 122);
      }
      else if (formula==32){
        result=String.fromCharCode(formula);
      }
      cifrado+= result;
  }
  return cifrado;
}
};
