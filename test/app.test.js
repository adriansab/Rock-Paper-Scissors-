import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';
import chaiString from 'chai-string';

chai.use(chaiString);
chai.use(chaiHttp);
const expect = chai.expect;

describe('app.js', () => {
  describe('GET /', () => {
    it('should return status code 200', async () => {
      const res = await chai.request(app).get('/');
      expect(res).to.have.status(200);
    });
    it('should return the "index" view', async () => {
      const res = await chai.request(app).get('/');
      expect(res.text).to.contain('Hi, welcome to Rock Paper Scissors Battle!');
    });
  });

  describe('GET /game', () => {
    it('should return status code 200', async () => {
      const res = await chai.request(app).get('/game');
      expect(res).to.have.status(200);
    });
    it('should return the "game" view', async () => {
      const res = await chai.request(app).get('/game');
      expect(res.text).to.contain('What\'s your choice?');
    });
  });

  describe('GET /result', () => {
    it('should return status code 200', async () => {
      const res = await chai.request(app).get('/');
      expect(res).to.have.status(200);
    });
  });
});

