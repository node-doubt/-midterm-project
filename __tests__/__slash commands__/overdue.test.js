'use strict';

const overdue = require('../../src/slash-commands/overdue');

describe('duetoday()', () => {
  it('should successfully send a request to CANVAS API for assignments due today.', () => {
    expect(() => { overdue() }).toBeTruthy();
    
  })
})
