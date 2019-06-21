describe('cipher', () => { // describe a quien quiero testear

  it('debería ser un objeto', () => { //it= que quiero testiar de la funcion
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher,encode', () => {

    it('debería ser una funcion ', () => {
      assert.equal(typeof cipher.encode,"function");
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', ()=>{
      assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ",33),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
  });
  
  describe('cipher,decode', () => {

    it('debería ser una funcion', () => {
      assert.equal(typeof cipher.decode, "function");
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
  });
});
