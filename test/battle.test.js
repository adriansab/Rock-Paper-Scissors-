import compareChoices from "../src/battle.js";
import { expect } from "chai";

describe("compareChoices", () => {
  it("should return the first player's name when they choose rock and the second player chooses scissors", () => {
    const player1Name = "Alice";
    const player2Name = "Bob";
    const result = compareChoices("rock", "scissors", player1Name);
    expect(result).to.equal(player1Name);
  });

  it("should return the second player's name when they choose scissors and the first player chooses paper", () => {
    const player1Name = "Alice";
    const player2Name = "Bob";
    const result = compareChoices("paper", "scissors", player2Name);
    expect(result).to.equal(player2Name);
  });

  it("should return 'tie' when player 1 chooses paper and player 2 chooses paper", () => {
    const result = compareChoices("paper", "paper", "Player 1");
    expect(result).to.equal("tie");
  });
});
