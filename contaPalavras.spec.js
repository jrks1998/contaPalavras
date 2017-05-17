const { expect } = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { contaPalavras } = require('./contaPalavras');

lab.test('verificar contagem das palavras', (done) => {
  expect(contaPalavras("vamo pra frente")).to.equal(3);
  done();
});
