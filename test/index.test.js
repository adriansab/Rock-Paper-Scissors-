import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js'; 

chai.use(chaiHttp);

describe('Route index', () => {
    it('should return status code 200', async () => {
      const res = await chai.request(app).get('/');
      chai.expect(res).to.have.status(200);
    });   
  });

