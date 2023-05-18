import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Game route", () => {
  it("should render game page with player names", async () => {
    const res = await chai.request(app).get("/game?player1=John&player2=Jane");
    expect(res).to.have.status(200);
    expect(res).to.be.html;
    expect(res.text).to.include("John");
    expect(res.text).to.include("Jane");
  });
});

