import chaiHttp from "chai-http";
import app from "../app.js";
import chai, { expect } from "chai";

chai.use(chaiHttp);

describe(`Route test for result`, async () => {
  it("Should return status 200", async () => {
    const res = await chai.request(app).post("/result").send();
    expect(res.status).to.be.eql(200);
  });
});
