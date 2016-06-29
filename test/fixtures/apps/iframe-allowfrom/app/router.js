'use strict';

module.exports = function(app) {
  app.get('/', controller);
  app.get('/foo', controller);
  app.get('/hello', controller);
  app.get('/hello/other/world', controller);
  app.get('/world/12', controller);

  function* controller() {
    this.body = 'body';
  }
};
