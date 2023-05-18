import  express  from "express";
import bodyParser from "body-parser";
import url from 'url'

const app = express();
const game = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));

game.get("/", (req, res) => {

  const query = url.parse(req.url,true).query;
  var player1Name = query.player1;
  var player2Name = query.player2;

  res.render("game", { player1Name: player1Name, player2Name: player2Name });

});

export default game;