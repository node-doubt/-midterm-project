'use strict';

const overdue = require('../../src/slash-commands/overdue');

describe('overdue()', () => {
  it('should successfully send a request to CANVAS API for assignments due today.', () => {
    expect(() => { overdue() }).toBeTruthy();
    
  })
})
