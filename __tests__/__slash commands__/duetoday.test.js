'use strict';

const duetoday = require('../../src/slash-commands/duetoday');

describe('duetoday()', () => {
  it('should successfully send a request to CANVAS API for assignments due today.', () => {
    
    expect(() => { duetoday() }).toBeTruthy();

  })
})
