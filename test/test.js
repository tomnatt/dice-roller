var request = require('supertest'),
    app = require('../app');

describe('get the homepage', function() {

  it('responds with json', function(done) {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

});
