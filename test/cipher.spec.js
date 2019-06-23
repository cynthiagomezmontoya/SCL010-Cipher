describe('cipher', () => { // describe a quien quiero testear

  it('debería ser un objeto', () => { //it= que quiero testiar de la funcion
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher,encode', () => {

    it('debería ser una funcion ', () => {
      assert.equal(typeof cipher.encode,"function");
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(window.cipher.encode (33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'),'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
    it('debería retornar "pqrstuv" para "abcdefg" con un offset de 15', () => {      
      assert.equal(window.cipher.encode (15, 'abcdefg'), 'pqrstuv');
    });
    
    it('debería retornar "5678901234" para "1234567890" con un offset de 4', () => {      
      assert.equal(window.cipher.encode (4, '1234567890'), '5678901234');
    });
  });
  
  describe('cipher,decode', () => {

    it('debería ser una funcion', () => {
      assert.equal(typeof cipher.decode, "function");
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(window.cipher.decode (33, 'HIJKLMNOPQRSTUVWXYZABCDEFG'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
    it('debería retornar "lmnopqr" para "abcdefg" con un offset de 15', () => {
      assert.equal(window.cipher.decode (15, 'abcdefg'), 'lmnopqr');
    
    });
    it('debería retornar "012345678901" para "123456789012" con un offset de 21', () => {      
      assert.equal(window.cipher.decode (21, '123456789012'), '012345678901');
    });
  });
});