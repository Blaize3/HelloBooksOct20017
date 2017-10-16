/*eslint-disable*/

const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app');
const bookController = require('../server/controllers').Book;

describe('Hello Books Library', () => {
    it('It is True', () => {
        expect(true).to.equal(true);
    });

    describe('List all books in the library', () => {
        it('list all books', (done) => {
            request(app)
                .get('/api/getallbooks')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
});

/*
it('List all Records', (done) => {
  request(app)
    .get('/api/v1/stickers')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body).to.be.a('array');
      console.log(esponse.body);
      expect(response.body).to.deep.equal(fixtures.stickers);
      done();
    });// ends response's then
});// ends it
*/