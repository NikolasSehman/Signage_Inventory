var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('GET /', function() {
    it('goes to home page', function(done) {
        request.get('/')
            .expect(200)
            .end(function(err, res) {
                done(err);
            });
    });
});

describe('GET /reports', function() {
  it('goes to reports page', function(done) {
      request.get('/reports')
          .expect(200)
          .end(function(err, res) {
              done(err);
          });
  });
});

describe('GET /login', function() {
  it('goes to login page', function(done) {
      request.get('/login')
          .expect(200)
          .end(function(err, res) {
              done(err);
          });
  });
});

describe('GET /mainpage', function() {
  it('goes to mainpage page', function(done) {
      request.get('/mainpage')
          .expect(200)
          .end(function(err, res) {
              done(err);
          });
  });
});

describe('GET /remove', function() {
  it('goes to remove page', function(done) {
      request.get('/remove')
          .expect(200)
          .end(function(err, res) {
              done(err);
          });
  });
});

describe('Database Connection', function() {
  it('connects to the database', function(done) {
    db.connect(function(err) {
      if (err) throw err;
      db.query("SELECT 1 + 1 AS sum", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        db.end();
        done();
      });
    });
  });
});