describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('offset', () => {

    it('debería ser una vocal', () => {
      assert.equal(typeof cipher.offset, 'line');
    });

    it('debería retornar "A"  para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 0');
  });

  describe('offset', () => {

    it('debería ser una letra', () => {
      assert.equal(typeof cipher.offset, 'line');
    });

    it('debería retornar "Z"para " ZYXWVUTSRQPONMLKJIHGFEDCBA" con offset del 90');
  });

});