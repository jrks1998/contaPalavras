const contaPalavras = function(frase) {
  return frase.split(' ').length
}

contaPalavras("vamo pra frente");
contaPalavras("para raaaa pa");

module.exports = { contaPalavras }
