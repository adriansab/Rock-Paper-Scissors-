import compareChoices from "../src/battle.js";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const result = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));

result.post("/", (req, res) => {
 
const player1Name = req.body.player1Name;
const player2Name = req.body.player2Name;
const player1Choice = req.body.player1Choice;
const player2Choice = req.body.player2Choice;
const winner = compareChoices(player1Choice, player2Choice, player1Name);
 
  res.render("result", {
  winner: winner,
  player1Choice: player1Choice,
  player2Choice: player2Choice,
  player1Name: player1Name,
  player2Name: player2Name
  });
});

export default result;