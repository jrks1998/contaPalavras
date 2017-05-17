function contaPalavras {
  var string="string";
  var i = 0;
  var frase = new Array();

  for ( i=0; i < string.length ; i++ )
  frase[i] = string.split(' ').length;

}

module.exports = { contaPalavras };
