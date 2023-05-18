import express from 'express';
import bodyParser from "body-parser";
import path from 'path'
import querystring from 'querystring'

const router = express.Router();

const app = express();
path.dirname(new URL(import.meta.url).pathname);

app.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/", (req, res) => {
  const query = querystring.stringify({
    "player1": req.body.player1,
    "player2": req.body.player2,
  });
  res.redirect('/game?' + query);
})

export default router;