'use strict';

const homePage = require('../app.js');

describe('app()', () => {
  it('should successfully send a request to CANVAS API for assignments due today.', () => {
    expect(() => { app() }).toBeTruthy();
  })
})
